import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getIssues(): Observable<any[]> {
    return this.firestore.collection('Issues').valueChanges();
  }

  getsolveIssues(): Observable<any[]> {
    return this.firestore.collection('solve-issues').valueChanges();
  }

  getSpamIssues(): Observable<any[]> {
    return this.firestore.collection('SpamFolder').valueChanges();
  }

  getIssueById(issueIds: string[]): Observable<any[]> {
    // Fetch multiple issues by their IDs
    const observables: Observable<any>[] = [];
    issueIds.forEach(issueId => {
      observables.push(this.firestore.collection('Issues').doc(issueId).valueChanges());
    });
    return forkJoin(observables); // Import 'forkJoin' from 'rxjs' at the top of the file
  }

  getUsers(): Observable<any[]> {
    return this.firestore.collection('Users').valueChanges();
  }

  transferData(data: any, destination: string): Observable<void> {
    const destinationRef = this.firestore.collection(destination).doc(data.id).ref as DocumentReference;
    const sourceRef = this.firestore.collection('Issues').doc(data.id).ref as DocumentReference;
  
    console.log(`Transfer Data to ${destination}:`, data);
  
    const batch = this.firestore.firestore.batch();
    batch.set(destinationRef, data);

    if (destination !== 'spam') {
      // Only delete from the source collection if the destination is not 'spam'
      batch.delete(sourceRef);
      console.log('Data deleted from source collection:', data);
    }
  
    return new Observable<void>(observer => {
      batch.commit().then(() => {
        console.log('Batch committed successfully.');
        observer.next();
        observer.complete();
      }).catch(error => {
        console.error('Error committing batch:', error);
        observer.error(error);
      });
    });
  }
}
