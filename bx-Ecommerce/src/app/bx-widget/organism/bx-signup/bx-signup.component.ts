import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BxButtonSubmitComponent } from '../../atom/bx-button-submit/bx-button-submit.component';
import { BxInputComponent } from '../../atom/bx-input/bx-input.component';
import { DatashareService } from '../../../core/datashare.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bx-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,
            BxButtonSubmitComponent,BxInputComponent,HttpClientModule,
            RouterModule
            ],
  templateUrl: './bx-signup.component.html',
  styleUrl: './bx-signup.component.scss'
})
export class BxSignupComponent {
  myForm! : FormGroup;
  constructor(private formBuilder: FormBuilder,private datashare:DatashareService) {

      this.myForm = this.formBuilder.group({
        name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z .]+$')]),
        password: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
    });
    }

    onSubmit() {
      if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.datashare.addUser(this.myForm.value).subscribe({
        next: ((res:any)=>{
          console.log(res);
          alert('Registered Successfully')
        })    
  });
  this.myForm.reset();
      // alert('Form Submitted');
     }
     else{
        alert('Please fill all required field');
     }
    }
}
