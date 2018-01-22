import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataHandler {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`../data/subject_predicate.json`)
      .map((res: Response) => res.json());
  }

}