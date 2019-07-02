import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  model: Contact;
  error = "";

  constructor(private service: ContactService,
  private router: Router) { }

  ngOnInit() {
    this.model = new Contact();
  }

  onSubmit() {
    this.service.addContact(this.model).subscribe(
      (response) => { this.router.navigate(['/']); },
    error => this.error = "Error: Data is incorrect. Phone number must be numeric and unique.");
  }

}
