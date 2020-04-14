import { Component} from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {
  constructor(private _enrolllmentService:EnrollmentService){}

  files: any = [];
  name;goal

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  send()
  {
    var arr =[this.name]
    var b= encodeURIComponent('['+this.name+']')
    console.log("click")
    console.log(this.name)
    this._enrolllmentService.enroll(b).subscribe(
      data=>{
        console.log("success",data);
        console.log(this.goal)

        this.goal = data['message'];


      },
      error=>console.error("error",error)
      

    )
  }

  send1()
  {
    window.open("https://alexajovo-c6937.web.app/");

      

    
  }
}
