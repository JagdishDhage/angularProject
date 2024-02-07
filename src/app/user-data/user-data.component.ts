// user-data.component.ts

import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  users: any[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.firestoreService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => console.error('Error fetching users:', error)
    );
  }
}
