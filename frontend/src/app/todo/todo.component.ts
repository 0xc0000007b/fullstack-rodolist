import { animate, stagger, state, style, transition, trigger } from '@angular/animations';
import {Component, Input} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  animations: [
    trigger('del', [
      state('void', style({ transform: 'none',opacity: 1})),
      state('deleted', style({transform: 'translateX(100%)', opacity: 0,})),
      transition('void => deleted', animate(350))
    ]),
   
  ]
})
export class TodoComponent {
  constructor(private todoService: TodoService){}
  @Input() todos: any = []
  @Input() todo: any 
  public deletion = 'void'
  
  

  deleteTodo(id) {
    
    
    
    this.todoService.deleteTodos(id).subscribe(
      
      log => {
        console.log('deleted')
      },
      );
      this.todos.splice(this.todos, 1)
      this.setState()
    }
    setState(){
      
      this.deletion = this.deletion === 'void' ? 'deleted' : 'void'
      
           
          
   }
  
}
