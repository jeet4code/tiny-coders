import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm = this.fb.group({
    comment: [null],
  });
 
  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
