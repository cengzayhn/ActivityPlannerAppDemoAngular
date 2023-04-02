import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string = 'http://localhost:8080/todo/';

  constructor(private http:HttpClient) { }

  public fetchAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url+'findall');
  }

  public addTodo(todo:Todo){
    return this.http.post<Todo>(this.url+'add',todo);
  }

  public delete(id:number){
    return this.http.delete<Todo>(this.url+'delete/'+id);
  }

  public findById(id:number){
    return this.http.get<Todo>(this.url+'findbyid/'+id);
  }


}
