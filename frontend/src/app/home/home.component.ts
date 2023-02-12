import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component, HostBinding} from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    
  ]
  
  
})
export class HomeComponent {
 

   todos:any = []

  constructor(private todoService: TodoService) {
  }
  ngOnInit(): void {
    this.getTodo();
  
}
 

 // deleteTodo = ($scope) =>{
 //    $scope.todos = $scope.todos.filter(function (todo){
 //      return !todo.selected
 //    })
 // }

  getTodo = () => {
    
      this.todoService.getTodos().subscribe(
         data => {
          console.log(data)
          this.todos = data;
      },
        error => {
           console.log('no data')
        }
      );
    }
}
