import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from './firestore.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';
import { NavComponent } from './nav/nav.component';
import { BodyModule } from './body/body.module';
import { BodyComponent } from './body/body/body.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CircularRepresentationComponent } from './circular-representation/circular-representation.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ChartCommonModule,  } from '@swimlane/ngx-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCard, MatCardModule } from '@angular/material/card';
import { SolveissueComponent } from './solveissue/solveissue.component';
import { UnsolveissuesComponent } from './unsolveissues/unsolveissues.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { SpamDetailsComponent } from './spam-details/spam-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CircularRepresentationComponent,
    BarGraphComponent,
    UserDataComponent,
    UnsolveissuesComponent,
    
    IssueDetailsComponent,
          SpamDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BodyModule,
    FirestoreModule,
    ChartCommonModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatProgressSpinnerModule,
    MatCard
  ],
  providers: [AuthService,FirestoreService], // Add FirestoreService as a provider
  bootstrap: [AppComponent],
})
export class AppModule {}
