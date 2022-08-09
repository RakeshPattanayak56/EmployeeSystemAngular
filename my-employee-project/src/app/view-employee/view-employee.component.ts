import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  data: Employee[]=[];
  item: string;
  filterValue:string;
  userName: string;
  loginTime: string;

  constructor(private employeeService: EmployeeService ){
  }
  ngOnInit(): void {
    this.getAllEmployeedetails();
   }
  getAllEmployeedetails = () =>{
    this.employeeService.getemployees().subscribe(
    (response) => {
      this.data = response;
    });
  }
  onEdit(data: { visible: boolean; }) {
    data.visible = true;
  }
  onRowSubmit(item: any) {
    this.updateEmployeedetails(item);
  }
  updateEmployeedetails(item:any){
    this.employeeService.updateEmployeedetails(item).subscribe(
      () => {
        this.item='';
        this.getAllEmployeedetails();
        alert("Edit Succefully");  
      }
    );
  }
  Search(){
    if(this.userName!=""){
    }else if (this.userName == ""){
      this.ngOnInit()
    }
    this.data = this.data.filter(res=>{
      return res.userName.toLowerCase().match(this.userName.toLowerCase());
    });
  }
  Filter(){
    debugger
    if(this.loginTime!=""){
    }else if(this.loginTime == ""){
      this.getAllEmployeedetails()
    }
    this.data = this.data.filter(res=>{
      return (new Date(res.loginTime)).toISOString().split('T')[0].match(this.loginTime);
    });
  }
  
}
