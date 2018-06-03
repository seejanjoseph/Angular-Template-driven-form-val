import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
@Component({
  selector: 'app-template-form-val',
  templateUrl: './template-form-val.component.html',
  styleUrls: ['./template-form-val.component.css']
})

export class TemplateFormValComponent implements OnInit {  
  public user: User;

  constructor() { }
  
  ngOnInit() {
    this.user = {
      fullName: 'Prefilled anme',
      email:'test@email.com'
    };
  }

  onSubmit(model: User,) {
    console.log(this.user);
    console.log(model);
  }
}
