import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../tasklist.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [TasklistService]
})
export class TasklistComponent implements OnInit {
  taskListArray: any[];
  constructor(private tasklistservice: TasklistService) { }
  ngOnInit() {
    this.tasklistservice.getTaskList().snapshotChanges()
    .subscribe(item => {
      this.taskListArray = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.taskListArray.push(x);
      });
      // sort array isChecked false  -> true
        this.taskListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
     });
  }
  onAdd(taskTitle) {
    this.tasklistservice.addTask(taskTitle.value);
    taskTitle.value = null;
  }
  toggleCheck($key: string, isChecked) {
    this.tasklistservice.checkUnCheckTitle($key, !isChecked);
  }
  onDelete($key: string) {
    this.tasklistservice.removeTitle($key);
  }
}
