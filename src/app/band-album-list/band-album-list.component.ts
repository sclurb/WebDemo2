import { Component, OnInit } from '@angular/core';
import { Album } from './album';
import { FormsModule } from '@angular/forms';
import { AlbumService } from './album.service';


@Component({
  selector: 'app-band-album-list',
  templateUrl: './band-album-list.component.html',
  styleUrls: ['./band-album-list.component.css']
})
export class BandAlbumListComponent implements OnInit {

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
  

  constructor() { }

  ngOnInit(): void {

  }

  performFilter(filterBy: string): Album[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: Album) => 
    album.title.toLocaleLowerCase().includes(filterBy));
  }
  

}

