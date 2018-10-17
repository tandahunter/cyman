import { Component, OnDestroy, ChangeDetectorRef, Inject} from '@angular/core';
import { MediaMatcher } from '../../node_modules/@angular/cdk/layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  Area: string;
  ContainerNumber: string;
  ContainerType: string;
  CustomerName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy{

  animal: string;
  name: string;


  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  dataSource = [
      { Area: 'A1', ContainerNumber: "MSKU8979821", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'A1', ContainerNumber: "MSKU8979822", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'A1', ContainerNumber: "MSKU8979823", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'A1', ContainerNumber: "MSKU8979824", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'A1', ContainerNumber: "MSKU8979825", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'B1', ContainerNumber: "MSKU8979826", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'B1', ContainerNumber: "MSKU8979827", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'B1', ContainerNumber: "MSKU8979828", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'B1', ContainerNumber: "MSKU8979829", ContainerType: "GE20", CustomerName: 'FARGOSYS' },
      { Area: 'B1', ContainerNumber: "MSKU8979830", ContainerType: "GE20", CustomerName: 'FARGOSYS' }
  ];

  // dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   height: '400px',
  //   width: '600px',
  // });

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog(e): void {
    if (e.rowType !== 'group'){
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: e.data
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  }

  title = 'cyman';
}






@Component({
  selector: 'app.component-movement',
  templateUrl: 'app.component-movement.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}