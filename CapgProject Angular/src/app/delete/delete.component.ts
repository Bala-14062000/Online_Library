import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  bookForm: any;
message:string="";
  constructor(private dataService:  DataService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  deleteBook(){
    this.dataService.deleteBook(this.bookForm.value.name).subscribe(data=>{
      this.message="Delected"
    });
  }

}
