import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    customermobno: string;
    serviceoperatorid: string;
    amount: string;
    stvtype: string;
  }

@Component({
  selector: 'app-dialogpopup',
  templateUrl: './dialogpopup.component.html',
  styleUrls: ['./dialogpopup.component.scss']
})
export class DialogpopupComponent implements OnInit {
  public  username: any;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.username =  localStorage.getItem('username');
    }
  OkClick(): void {
      this.dialogRef.close();
    }
  CancelClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
