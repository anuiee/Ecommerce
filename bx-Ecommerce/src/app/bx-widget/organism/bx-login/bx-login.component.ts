import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxInputComponent } from '../../atom/bx-input/bx-input.component';
import { BxButtonSubmitComponent } from '../../atom/bx-button-submit/bx-button-submit.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BxSignupComponent } from '../bx-signup/bx-signup.component';
import { DatashareService } from '../../../core/datashare.service';
import { login } from '../../../core/Interface/data-typt';
import { BxUserHomeComponent } from '../bx-user-home/bx-user-home.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-login',
  standalone: true,
  imports: [CommonModule,
            BxInputComponent,
            BxButtonSubmitComponent,BxUserHomeComponent,
            FormsModule,ReactiveFormsModule,
            RouterModule,BxSignupComponent,RouterOutlet
          ],
 
  templateUrl: './bx-login.component.html',
  styleUrl: './bx-login.component.scss'
})
export class BxLoginComponent {
  showLogin:boolean=true;
  authError:String ="";
  myForm! : FormGroup;
  mySignupForm! : FormGroup;
  constructor(private formBuilder: FormBuilder,private datashare:DatashareService) {
//myform
    this.myForm = this.formBuilder.group({
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
    });
//mysignup form
    this.mySignupForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z .]+$')]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
  });
    }
//login method
    onLoginSubmit(data:login):void{
      if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.datashare.userLogin(data);
      this.datashare.isLoginError.subscribe((isError)=>{
            if(isError){
              this.authError="Email or Password is not correct";
            }
      })
      this.myForm.reset();
      }
      else{
        // alert('Please fill all required field');
        Swal.fire({
          title: "Please fill all required fileds",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        }
      }
//toggle methods
      openSignUp(){
        this.showLogin=false
      }
      openLogin(){
        this.showLogin=true;
      }

//signup method

    onSubmitSignUp() {
        if(this.mySignupForm.valid) {
        console.log(this.mySignupForm.value);
        this.datashare.addUser(this.mySignupForm.value).subscribe({
            next: ((res:any)=>{
            console.log(res);
            // alert('Registered Successfully')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Congratulation!Your account has been successfully created",
              showConfirmButton: false,
              timer: 1500,
            
            });
            })    
        });
        this.mySignupForm.reset();
        // alert('Form Submitted');
        }
        else{
         
            // alert('Please fill all required field');
            Swal.fire({
              title: "Please fill all required field",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            }
    }

    //
  }
