import { Component,OnInit } from '@angular/core';
declare var bootstrap: any; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
 title = 'thinkgas';

  selectedTab: string = 'kit';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
ngOnInit(): void {
  const hasShownModal = sessionStorage.getItem('connectModalShown');

  if (!hasShownModal) {
    setTimeout(() => {
      const modalElement = document.getElementById('connectModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
        // Mark as shown so it doesn't appear again this session
        sessionStorage.setItem('connectModalShown', 'true');
      }
    }, 5000);
  }
}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      // Place API integration or further logic here

      form.reset(); // Clear the form after submission
    }
  }
  
  }

