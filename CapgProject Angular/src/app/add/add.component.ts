import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  bookForm :any;
  message: string="";

  constructor(private dataService:  DataService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.bookForm=this.formBuilder.group({
      name: new FormControl(''),
      description:  new FormControl('')
    });

  }

saveBook(){
  
  let data=[{
    "name":this.bookForm.value.name,
    "description":this.bookForm.value.description

  }]



  this.dataService.saveBook(data).subscribe(data=>{
    this.message="Created Sucessfully"
  },(error)=>{
    this.message=error.message;
  })
}


}
