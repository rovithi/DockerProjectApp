import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from './interfaces/student.interface';
import { StudentService } from './services/student.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ELEMENT_DATA: Student[] = []
  
  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'department', 'action']
  constructor(
    private studentService: StudentService) { }

    ngOnInti(){
      this.studentService.getAllStudents().subscribe(result=>{
        this.ELEMENT_DATA = result
      })
    }


  /* openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  } */


}
