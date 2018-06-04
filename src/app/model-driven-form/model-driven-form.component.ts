import { Component, OnInit } from '@angular/core';
import { 
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  myform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });
  }
  onSubmit () {
    console.log("test");
  }
}
