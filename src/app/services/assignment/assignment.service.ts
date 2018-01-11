import { Injectable } from '@angular/core';
import { DataHandler } from './../data-handler/data-handler.service';
import { Observable } from 'rxjs/Observable';
import {config} from './../../config/config';
import {Assignment} from './../../models/assignment';
@Injectable()
export class AssignmentService {

  constructor(private dataSvc: DataHandler) { }
  private mouldDataAccToType(data, type) {
    let assign: Assignment
    for (let assignment of data.assignments) {
      if (assignment.type === type)
        assign = assignment;
    }
    return assign;
  }

  getAssignemntSpecificData(assignmentType) {
    return new Observable(observer => {
      this.dataSvc.getData(config.DATA.URl)
        .subscribe(data => {
          observer.next(data);
        }, err => {
          observer.next(err);
        });
    })

  }

  getAssignmentAccToType(file, type): Observable<Assignment>{
    return new Observable(observer => {
      this.dataSvc.getData(file)
        .subscribe(data => {
          const assignment = this.mouldDataAccToType(data, type);
          if (assignment.questions.length > 0) {
            observer.next(assignment);
            observer.complete();
          } else {
            observer.error(new Error());
          }

        });
    });
  }

}
