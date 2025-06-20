import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   
  }


  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', form.value);
      // Send data to backend here if needed
      form.reset();
    }
  }
}
