import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
@Component({
  selector: 'app-spam-details',
  templateUrl: './spam-details.component.html',
  styleUrl: './spam-details.component.css'
})
export class SpamDetailsComponent implements OnInit {
// spam.component.ts

  spamIssues: any[] = [];
  currentIndex: number = 0;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.loadSpamIssues();
  }

  loadSpamIssues() {
    this.firestoreService.getSpamIssues().subscribe(spamIssues => {
      this.spamIssues = spamIssues;
      console.log(this.spamIssues)
      });
    
  }
  showNextIssue() {
    if (this.currentIndex < this.spamIssues.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousIssue() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log(this.spamIssues)
    }
  }
}


