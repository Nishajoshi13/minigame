import { Component } from '@angular/core';
import { valentineModalComponent } from '../valentine modal/valentine modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private dialog: MatDialog) {}
openDialog(){
  const dialogRef =this.dialog.open(valentineModalComponent,{
    width:'500px',
    height:'400px',
  });

 
}
   
}
