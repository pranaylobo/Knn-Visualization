import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IframeComponent } from './iframe/iframe.component'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    UploadFileComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
 
      { path: 'iframe', component: IframeComponent },
      


       
     
    ]),
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
