import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsDataService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsCovidData(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'v2/us/daily.json').pipe(
      map((res) => {
        this.arrangeCovidData(res.data);
        return res.data;
      })
    );
  }

  arrangeCovidData(data: any[]) {
    const obj = {
      cases: 0,
      totalTesting: 0,
      negative: 0,
      hospitalized: 0,
      death: 0,
    };
    const usData = data.forEach((el) => {
      obj.cases += el.cases.total.value;
      obj.totalTesting += el.testing.total.value;
      obj.death += el.outcomes.death.total.value;
      obj.hospitalized += el.outcomes.hospitalized.currently.value;
    });

    console.log(obj.cases);
    console.log(obj.death);
  }
}
