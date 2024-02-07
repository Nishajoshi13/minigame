import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { NopopupComponent } from '../nopopup/nopopup.component';

@Component({
  selector: 'app-success-modal',
  templateUrl: './valentine modal.component.html',
  styleUrls: ['./valentine modal.component.css']
})
export class valentineModalComponent  {
  constructor(private dialog: MatDialog) {}   
  changeVideo(){
    const videoElement =document.getElementById('background-video') as HTMLVideoElement;
    if(videoElement){
      videoElement.src= '/assets/istockphoto-1452715381-640_adpp_is.mp4';
    }
  }
  onClick(yes:boolean){
    if(yes){
        this.changeVideo();
        const dialogRef =this.dialog.open(PopupComponent,{
          width:'500px',
          height:'400px',
        });
    }
   else{
    const dialogRef =this.dialog.open(NopopupComponent,{
      width:'500px',
      height:'400px',
    });
       }
  }

}
