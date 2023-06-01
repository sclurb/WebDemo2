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
  private songUrl = 'assets/jsonFiles/albumSongs.json';
  private songUrlSql = 'https://localhost:7053/api/AlbumSong/getSongs';
  private songUrlEf = 'https://localhost:7270/api/AlbumSong/Songs';

  @Input() album: Album | undefined;
  @Input() isVisible: boolean = false;

  songs: Song[] = [];
  selectedSongs: Song[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private albumService: AlbumService) {

  }

  async ngOnInit(): Promise<void> {
    // this.getSongs(this.songUrlEf);
    this.songs = await this.albumService.getAsync<Song[]>(this.songUrl);
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  ngOnChanges() {
    this.selectedSongs = this.songs.filter(x => x.albumId === this.album?.albumId);
  }

  getSongs(url: string) {
    this.sub = this.albumService.getSongs(url).subscribe({
      next: songs => {
        this.songs = songs;
      },
      error: err => {
        this.errorMessage = err;
        console.error("Error on getSongs!", this.errorMessage); 
      }
    });
  }

}
