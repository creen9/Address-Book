import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  searchString = "";
  izbira = "firstName";
  p = 1;
  preparedId: number;

  constructor(private service: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.service.getContacts(this.searchString, this.izbira).subscribe(data => this.contacts = data);
  }

  prepare(id) {
    this.preparedId = id;
  }

  delete(id) {
    this.service.deleteContact(id).subscribe(response => window.location.reload());
  }

  search() {
    this.service.getContacts(this.searchString, this.izbira).subscribe(data => this.contacts = data);
  }
}
