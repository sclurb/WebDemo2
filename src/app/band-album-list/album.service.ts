import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, tap, throwError } from "rxjs";
import { Album, Song } from './album';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumUrl = 'assets/jsonFiles/albums.json';
  private albumUrl1 = 'https://localhost:7053/api/AlbumSong/getAlbums';
  private albumUrl2 = 'https://localhost:7270/api/AlbumSong/Albums';
  private songUrl = 'assets/jsonFiles/albumSongs.json';
  private songUrl1 = 'https://localhost:7053/api/AlbumSong/getSongs';
  private songUrl2 = 'https://localhost:7270/api/AlbumSong/Songs';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      //tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  async getAlbumsAsync<TResponse>(): Promise<TResponse> {
    try {
      let getResponse = this.http.get<TResponse>(this.albumUrl2);
      let result = await lastValueFrom(getResponse);
      return result as TResponse;
    }
    catch (ex: any) {
      console.error(ex);
    }
    return {} as TResponse;
  }

  async getSongsAsync<TResponse>(): Promise<TResponse> {
    try {
      let getResponse = this.http.get<TResponse>(this.songUrl2);
      let result = await lastValueFrom(getResponse);
      return result as TResponse;
    }
    catch (ex: any) {
      console.error(ex);
    }
    return {} as TResponse;
  }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songUrl).pipe(
      //tap(data => console.log('Songs: ', JSON.stringify(data))),
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
