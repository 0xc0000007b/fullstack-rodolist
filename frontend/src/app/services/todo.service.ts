import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environmets/environment";
import {Observable} from "rxjs";
 const httpOptions = {
    headers:   new HttpHeaders({
       "Content-Type": "application/json",


    })
  };

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseurl = environment.apiUrl
  constructor(private http: HttpClient) { }
  getTodos(): Observable<any> {
    return this.http.get(this.baseurl + '/api/todo/')
  }
  deleteTodos(id): Observable<any> {


    return this.http.delete(this.baseurl + '/api/todo/' + id + '/')
  }
  postTodo(title, content): Observable<any> {
    const body = {name:title, content: content}

    return this.http.post(this.baseurl + '/api/todo/', body, httpOptions)
  }

}
