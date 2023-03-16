import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from "rxjs";
import { Album } from './album';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumUrl = 'api/band/album-list/album.json';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
     
    let errorMessage = '';

    if(err.error instanceof ErrorEvent) {
      errorMessage = `Yuk, an error has happened: ${err.error.message}`;
    }
    else{
      errorMessage = `Server returned code: ${err.status}, error messsage is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
