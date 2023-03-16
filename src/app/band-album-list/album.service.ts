import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from "rxjs";
import { Album, Song } from './album';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumUrl = 'assets/jsonFiles/albums.json';
  private songUrl = 'assets/jsonFiles/albumSongs.json';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songUrl).pipe(
      tap(data => console.log('Songs: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `Attention!, an error has happened: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error messsage is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
