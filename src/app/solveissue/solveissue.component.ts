import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service'; 

@Component({
  selector: 'app-solveissue',
  templateUrl: './solveissue.component.html',
  styleUrls: ['./solveissue.component.css']  
})
export class SolveissueComponent implements OnInit {
  solveissues: any[] = [];
  currentIndex: number = 0;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues() {
    this.firestoreService.getsolveIssues().subscribe(
      issues => {
        this.solveissues = issues;  
      },
      error => console.error('Error fetching issues:', error)
    );
  }

  showNextIssue() {
    if (this.currentIndex < this.solveissues.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousIssue() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
