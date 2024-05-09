import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LabSeqService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' }),
    responseType: 'text' as const
  };

  constructor(private http: HttpClient) { }

  public getValueFromSequence(index: number): Observable<string> {
    let url = environment.getValueFromSequenceURL + index;
    return this.http.get(url, this.httpOptions)
      .pipe(
        tap((value: string) => console.log(`get value from sequence w/ index=${index} + ${value}`)),
        catchError(this.handleError<string>('getValueFromSequence'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
