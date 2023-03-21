import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from './album';
import { AlbumService } from './album.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-band-album-list',
  templateUrl: './band-album-list.component.html',
  styleUrls: ['./band-album-list.component.css']
})
export class BandAlbumListComponent implements OnInit, OnDestroy {

  private albumUrl = 'assets/jsonFiles/albums.json';
  private albumUrlSql = 'https://localhost:7053/api/AlbumSong/getAlbums';
  private albumUrlEf = 'https://localhost:7270/api/AlbumSong/Albums';



  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAlbums = this.performFilter(value);
  }
  filteredAlbums: Album[] = [];
  albums: Album[] = [];
  album: Album | undefined;
  errorMessage: string = '';
  sub!: Subscription;
  isVisible: boolean = false;
  

  constructor(private albumService: AlbumService) { }
  
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  async ngOnInit(){

    // this.getAlbums(this.albumUrl);
    this.albums = await this.albumService.getAsync<Album[]>(this.albumUrlEf);
    this.filteredAlbums = this.albums;
  }

  performFilter(filterBy: string): Album[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: Album) => 
    album.title.toLocaleLowerCase().includes(filterBy));
  }
  
  albumSelected(album: Album): void {
    this.album = album;
    this.isVisible = true;
  }

  getAlbums(url: string) {
    this.sub = this.albumService.getAlbums(url).subscribe({
      next: albums => {
        this.albums = albums;
        this.filteredAlbums = this.albums;
      },
      error: err => this.errorMessage = err
    });
  }
}
