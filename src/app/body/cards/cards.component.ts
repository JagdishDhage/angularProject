import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  issues: any[] = [];
  solveIssues: any[] = [];
  spamIssues: any[] = [];
  issuesById: any[] = []; // Array to hold issues fetched by ID
  showAll = false;

  constructor(private firestoreService: FirestoreService, private router: Router) {}

  ngOnInit(): void {
    this.loadPreview();
  }

  loadPreview() {
    this.firestoreService.getIssues().subscribe(issues => {
      this.issues = issues.slice(0, 3);
    });

    this.firestoreService.getsolveIssues().subscribe(solveIssues => {
      this.solveIssues = solveIssues.slice(0, 3);
    });

    this.firestoreService.getSpamIssues().subscribe(spamIssues => {
      this.spamIssues = spamIssues.slice(0, 3);
    });
  }

  // Function to fetch issues by their IDs
  getIssuesById(issueIds: string[]) {
    this.firestoreService.getIssueById(issueIds).subscribe(issues => {
      this.issuesById = issues;
      console.log(this.issuesById)
    });
  }

  loadAll() {
    this.firestoreService.getIssues().subscribe(issues => {
      this.issues = issues;
      this.showAll = true;
    });

    this.firestoreService.getsolveIssues().subscribe(solveIssues => {
      this.solveIssues = solveIssues;
      this.showAll = true;
    });

    this.firestoreService.getSpamIssues().subscribe(spamIssues => {
      this.spamIssues = spamIssues;
      this.showAll = true;
    });
  }
}
