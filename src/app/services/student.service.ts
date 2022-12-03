import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Student } from "../interfaces/student.interface";
import {HttpClient} from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class StudentService{
    constructor(private httpClient: HttpClient){}

    getAllStudents(): Observable<Student[]>{
        return this.httpClient.get<Student[]>(`${environment.apiUrl}/university/all`)
    }

    addNewStudent(student: Student): Observable<Student>{
        return this.httpClient.post<Student>(`${environment.apiUrl}/university/add`, student)
    }

    delete(studentId: number): Observable<string>{
        return this.httpClient.delete<string>(`${environment.apiUrl}/university/delete/${studentId}`)
    }
}