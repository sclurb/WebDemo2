import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, tap, throwError } from "rxjs";
import { Album, Song } from './album';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {


  constructor(private http: HttpClient) { }


  async getAsync<TResponse>(url: string): Promise<TResponse> {
    try {
      let getResponse = this.http.get<TResponse>(url);
      let result = await lastValueFrom(getResponse);
      return result as TResponse;
    }
    catch (ex: any) {
      console.error(ex);
    }
    return {} as TResponse;
  }

  getAlbums(url: string): Observable<Album[]> {
    return this.http.get<Album[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getSongs(url: string): Observable<Song[]> {
    return this.http.get<Song[]>(url).pipe(
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
