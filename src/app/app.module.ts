import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BandAlbumListComponent } from './band-album-list/band-album-list.component';
import { AlbumSongListComponent } from './album-song-list/album-song-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';
import { UsingApiAngComponent } from './using-api-ang/using-api-ang.component';

@NgModule({
  declarations: [
    AppComponent,
    BandAlbumListComponent,
    AlbumSongListComponent,
    HomeComponent,
    AngularRoutingComponent,
    UsingApiAngComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'band-album-list', component: BandAlbumListComponent },
      { path: 'angular-routing', component: AngularRoutingComponent },
      { path: 'using-api-ang', component: UsingApiAngComponent },
      { path: 'home', component: HomeComponent }
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
