import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = ' ';
  hideShow!: boolean;

 
  getPro(){
    this.hideShow! = !this.hideShow

  }

  datas:any = ''
  onSubmit(mydata:string){
    console.log(mydata)
    const jsonData = JSON.stringify(mydata)
    localStorage.setItem('mydata', jsonData)
  }
}
