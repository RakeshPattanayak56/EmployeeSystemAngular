import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpService } from '../pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private popUpService:PopUpService,public dialogRef:MatDialog) { }

  ngOnInit(): void { 
  }
  OnSubmit(Email:any,Date:any){
    this.popUpService.update(Email,Date).subscribe();
    this.onclose();
  };
  onclose(){
    this.dialogRef.closeAll();
  }
}
