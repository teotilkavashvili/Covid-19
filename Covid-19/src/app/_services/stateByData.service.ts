import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StateByDataService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStateList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'v2/states.json').pipe(
      map((res) => {
        return res.data.map((state: any) => {
          return { state_code: state.state_code, name: state.name };
        });
      })
    );
  }

  getStateData(stateCode: string): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `v2/states/${stateCode}/daily/simple.json`)
      .pipe(
        map((res) => {
          return res.data[0];
        })
      );
  }
}
