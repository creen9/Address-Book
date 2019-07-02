import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ContactService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")

    this.service.getContact(id).subscribe(data => this.contact = data);
  }
  back() {
    this.router.navigate(['/']);
  }
}
