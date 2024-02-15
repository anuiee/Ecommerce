import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BxInputComponent } from '../../atom/bx-input/bx-input.component';
import { BxSignupComponent } from '../bx-signup/bx-signup.component';
import { BxButtonSubmitComponent } from '../../atom/bx-button-submit/bx-button-submit.component';
import { DatashareService } from '../../../core/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bx-user-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,
            BxInputComponent,
            BxButtonSubmitComponent],
  templateUrl: './bx-user-profile.component.html',
  styleUrl: './bx-user-profile.component.scss'
})
export class BxUserProfileComponent {
  myForm! : FormGroup;
  user:any;
  constructor(private formBuilder: FormBuilder,private datashare:DatashareService,
              private routes:Router) {
    
    //local storage
      let data:any = localStorage.getItem('token');
      this.user = JSON.parse(data);
    //myform
      
          this.myForm = this.formBuilder.group({
          name: new FormControl(this.user[0].name,[Validators.required,Validators.pattern('[a-zA-Z .]+$')]),
          password: new FormControl(this.user[0].password,[Validators.required]),
          email: new FormControl(this.user[0].email,[Validators.required,Validators.email]),
        });
      }

  //onsubmit  method 
  onSubmit(inputData:any){
    this.datashare.updateprofile(inputData,this.user[0].id).subscribe({
      next: ((res:any)=>{
        console.log(res);
        alert('updated')
        
      })
    });
    this.myForm.reset();
    //  this.routes.navigate(['/login']);
}
  }

