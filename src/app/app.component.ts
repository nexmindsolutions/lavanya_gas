import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thinkgas';

  selectedTab: string = 'kit';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  
}
