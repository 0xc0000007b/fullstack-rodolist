import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TodoService} from "../services/todo.service";
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent {

  constructor(private todoService: TodoService) {
  }



  sendTodo(title, body){
    this.todoService.postTodo(title,body).subscribe(
      success => {
        console.log(title)
      },
      error => {
        console.log(title)
      }
    )
  }

  onSubmit(title: string, body: string) {
    this.sendTodo(title,body)
  }
}
