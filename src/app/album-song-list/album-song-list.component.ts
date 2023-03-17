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
  @Input() isVisible: boolean = false;

  songs: Song[] = [];
  selectedSongs: Song[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  private _albumId: number = 1;
  get albumId(): number {
    return this._albumId;
  }
  set albumId(value: number){
    this._albumId = value;
  }


  constructor(private albumService: AlbumService) {

   }

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

  changeSelectedSongs(albumId: number): void {
    console.log("Hey Dude")
    this.selectedSongs = this.songs.filter(x => x.albumId === albumId);
  }

}
