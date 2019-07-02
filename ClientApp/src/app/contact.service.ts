import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Contact } from "./contact.model";
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ContactService {
  rootURL = "https://localhost:44360";

  constructor(private http: HttpClient) { }

  getContacts(searchString, izbira) {
    return this.http.get<Contact[]>(this.rootURL + "/api/Contacts/", { params: { name: searchString, izbrano: izbira } });
  }

  getContact(id) {
    return this.http.get<Contact>(this.rootURL + "/api/Contacts/" + id);
  }

  addContact(contact: Contact) {
    return this.http.post<Contact>(this.rootURL + "/api/Contacts", contact);
  }

  editContact(id, contact: Contact) {
    return this.http.put(this.rootURL + "/api/Contacts/" + id, contact);
  }

  deleteContact(id) {
    return this.http.delete(this.rootURL + "/api/Contacts/" + id);
  }
}
