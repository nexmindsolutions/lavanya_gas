import { Component } from '@angular/core';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
onConnectSubmit(form: any) {
  if (form.valid) {
    console.log('Form Submitted:', form.value);
    // Optionally reset the form or send data to backend
    form.reset();
  }
}

}
