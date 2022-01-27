import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent implements OnInit {

  constructor() { }

  name = '';
  hideShow!: boolean;

 
  getPro(){
    this.hideShow! = !this.hideShow

  }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pswd: new FormControl('',[Validators.required,Validators.minLength(8)]),
    fn : new FormControl('',[Validators.required,Validators.minLength(5)]),
    ln : new FormControl('',[Validators.required,Validators.minLength(5)]),
    city : new FormControl('',Validators.required),
    state : new FormControl('',Validators.required),
    phone : new FormControl('',[Validators.required,Validators.minLength(10)]),
    coutry : new FormControl('',Validators.required),
    zipcode : new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
    check : new FormControl('',Validators.required)
    
  
  })

  get email(){
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }
  get fn(){
    return this.loginForm.controls;
  }
  get ln(){
    return this.loginForm.controls;
  }
  get city(){
    return this.loginForm.controls;
  }
  get state(){
    return this.loginForm.controls;
  }
  get phone(){
    return this.loginForm.controls;
  }
  get country(){
    return this.loginForm.controls;
  }
  get zipcode(){
    return this.loginForm.controls;
  }
  get check(){
    return this.loginForm.controls;
  }
  onSubmit(loginForm: any){
    console.log(loginForm)
  }

}
