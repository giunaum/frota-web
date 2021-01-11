import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html'
  })
export class DialogComponent {

  confirm: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) {}

  cancel(): void {
    this.dialogRef.close();
  }
}