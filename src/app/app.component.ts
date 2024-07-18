import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allEvent';
  // getData(data:string){
  //   console.warn(data);
  //  }


  loginForm:any=FormGroup;
constructor(private fb:FormBuilder){
  this.loginForm=this.fb.group({
    name:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
}

get name(){
  return this.loginForm.get('name')
}

get password(){
  return this.loginForm.get('password')
}

submit(){
  console.log(this.loginForm.value);
  this.isShow=!this.isShow;
}



isShow:boolean=false;
  reset(){
  //   this.isShow=!this.isShow;
    

  }
 
  ok(){
    this.loginForm.reset()
    this.isShow=false
  }

}
