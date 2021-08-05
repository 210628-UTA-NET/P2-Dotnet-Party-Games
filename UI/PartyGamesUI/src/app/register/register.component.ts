import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { PartygameService } from '../services/partygame.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserGroup = new FormGroup({
    UserName: new FormControl(),
    Password: new FormControl(),
    isAdmin: new FormControl(),
  });

  constructor(private partyGameApi: PartygameService,private router: Router) { }

  ngOnInit(): void {}
  
  // this method call the service register method to add a user
  // parm: registerUserGroup 
  onSubmit(registerUserGroup:FormGroup) {
    const registerObserver ={
      next:x => alert('user created'),
      error: err => console.log(err)
    }    
    this.partyGameApi.register(registerUserGroup.value).subscribe(registerObserver);
    // calling the redirect method to redirect to home page 
    this.redirect("layout");
  }
  //redirection method
  redirect(page:string) {
    this.router.navigate([page]);
  }
  //cancel registration
  cancel(page:string)
  {
    window.location.href = page;
  }


}
