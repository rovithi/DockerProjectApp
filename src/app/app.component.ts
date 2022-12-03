import { Student } from './interfaces/student.interface';
import { StudentService } from './services/student.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ELEMENT_DATA: Student[] = []
  newStudentForm: FormGroup
  
  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'department', 'action']
  constructor(
    private studentService: StudentService,
    private fb: FormBuilder) { }

    ngOnInit(){
      this.newStudentForm = this.fb.group({
        name: new FormControl(null),
        surname: new FormControl(null),
        age: new FormControl(null),
        department: new FormControl(null)        
      })
      this.studentService.getAllStudents().subscribe(result=>{
        this.ELEMENT_DATA = result
      })

    }

    deleteStudent(element: Student){
      this.studentService.delete(element.id).subscribe()
    }


    onSave(){
      const newStudent = this.newStudentForm.value

      this.studentService.addNewStudent(newStudent).subscribe(response=>{
        this.ELEMENT_DATA = [...this.ELEMENT_DATA, newStudent]
      })
    }


  //  openDialog(action,obj) {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     width: '250px',
  //     data:obj
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event == 'Delete'){
  //       this.deleteRowData(result.data);
  //     }
  //   });
  // }

  // deleteRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     return value.id != row_obj.id;
  //   });
  // } 


}
