import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album, Song } from '../band-album-list/album';
import { AlbumService } from '../band-album-list/album.service';

@Component({
  selector: 'app-album-song-list',
  templateUrl: './album-song-list.component.html',
  styleUrls: ['./album-song-list.component.css']
})
export class AlbumSongListComponent implements OnInit, OnDestroy {

  @Input() album: Album | undefined;

  songs: Song[] = [];
  errorMessage: string = '';
  sub!: Subscription;
  isVisible: boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.sub = this.albumService.getSongs().subscribe({
      next: songs => {
        this.songs = songs;
      },
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
