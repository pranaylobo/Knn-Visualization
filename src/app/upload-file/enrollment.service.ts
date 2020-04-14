import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'https://knnnode.herokuapp.com/goal';


  constructor(private _http: HttpClient) { }
  enroll(user){
    var user1 =  {
      name:user,
  }
    console.log(user1)
    return this._http.post<any>(this._url,user1);
  }


 
}
