import { Component, OnInit } from '@angular/core';
import {Task} from '../domain/Task';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  arrays = new Array<Task>();
  array = new Task();
  task: string;
  title: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.arrays = [];
  }


  addTask() {
    if (this.validate()) {
    this.array.title = this.title;
    this.array.task = this.task;
    this.arrays = [...this.arrays, this.array];
    this.initValues();
    this.toastr.success('Successfully added');
    }
  }

  initValues() {
    this.array = new Task();
    this.task = '';
    this.title = '';
  }

  validate() {
    if (!this.title || this.title.length === 0) {
      this.toastr.warning('Write title of task');
      return;
    }
    if (!this.task || this.task.length === 0) {
      this.toastr.warning('Write task to do');
      return;
    }
    return true;
  }
}
