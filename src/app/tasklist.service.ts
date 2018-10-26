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

  addTask(title: string) {
    if (!title)  {
      // console.log('no value');
     return false;
    }
    this.tasklist.push({
        title: title,
        isChecked: false
    });
  }
  checkUnCheckTitle($key: string, flag: boolean) {
    this.tasklist.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.tasklist.remove($key);
  }

}
