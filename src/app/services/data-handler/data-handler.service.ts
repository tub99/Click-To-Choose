import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// const httpOptions = {cfxxxxxxxfcfd
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class DataHandler {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url)
      .map((res: Response) => {
        console.log(res);
        return res;
      });
  }

}
