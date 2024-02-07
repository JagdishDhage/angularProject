
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../firestore.service'; 
@Component({
  selector: 'app-unsolvedetails',
  templateUrl: './unsolvedetails.component.html',
  styleUrl: './unsolvedetails.component.css'
})
export class UnsolvedetailsComponent {
  
  issue: any;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    this.route.paramMap.subscribe((params) => {
      const issueId = params.get('id');
      if (issueId) {
     
        this.firestoreService.getIssueById(issueId).subscribe((issue) => {
          this.issue = issue;
        });
        console.log(issueId)
      }
    });
  }
  
}
