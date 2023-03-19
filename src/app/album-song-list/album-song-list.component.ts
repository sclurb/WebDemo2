import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album, Song } from '../band-album-list/album';
import { AlbumService } from '../band-album-list/album.service';

@Component({
  selector: 'app-album-song-list',
  templateUrl: './album-song-list.component.html',
  styleUrls: ['./album-song-list.component.css']
})
export class AlbumSongListComponent implements OnInit, OnDestroy, OnChanges {

  @Input() album: Album | undefined;
  @Input() isVisible: boolean = false;

  songs: Song[] = [];
  selectedSongs: Song[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private albumService: AlbumService) {

  }

  async ngOnInit(): Promise<void> {
    //this.getSongs();
    this.songs = await this.albumService.getSongsAsync<Song[]>();
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  ngOnChanges() {
    this.selectedSongs = this.songs.filter(x => x.albumId === this.album?.albumId);
  }

  getSongs() {
    this.sub = this.albumService.getSongs().subscribe({
      next: songs => {
        this.songs = songs;
      },
      error: err => this.errorMessage = err
    });
  }
}
