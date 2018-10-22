import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  tasklist: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  getTaskList() {
      this.tasklist = this.db.list('titles');
      return this.tasklist;
  }
}
