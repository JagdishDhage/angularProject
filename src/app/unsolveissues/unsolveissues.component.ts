// unsolveissues.component.ts

import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unsolveissues',
  templateUrl: './unsolveissues.component.html',
  styleUrls: ['./unsolveissues.component.css']
})
export class UnsolveissuesComponent implements OnInit {
  issues: any[] = [];

  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const issueId = this.route.snapshot.params['id'];
    console.log('Issue ID from snapshot:', issueId);
  
    if (issueId) {
      this.firestoreService.getIssueById(issueId).subscribe((issue: any) => {
        console.log('Fetched Issue ID:', issue.id);
        this.issues = [issue];
      });
    } else {
      console.error('Issue ID is undefined.');
      this.loadIssues();
    }
  }
  
  

  loadIssues() {
    this.firestoreService.getIssues().subscribe(
      issues => {
        this.issues = issues;
      },
      error => console.error('Error fetching issues:', error)
    );
  }

  redirectToDetails(issueId: string) {
    console.log('Clicked on issue with ID:', issueId);
    if (issueId) {
      this.router.navigate(['/details', issueId]);
    } else {
      console.error('Issue ID is undefined.');
    }
  }
  
}
