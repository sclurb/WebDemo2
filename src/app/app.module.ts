import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BandAlbumListComponent } from './band-album-list/band-album-list.component';
import { AlbumSongListComponent } from './album-song-list/album-song-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BandAlbumListComponent,
    AlbumSongListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'band-album-list', component: BandAlbumListComponent },
      { path: 'album-song-list', component: AlbumSongListComponent }
    ]),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
