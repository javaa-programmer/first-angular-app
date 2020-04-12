import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsermanagementService } from './usermanagement.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicUserListComponent } from './dynamic-user-list/dynamic-user-list.component';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UserMgmtErrorHandler } from './UserMgmtErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DynamicUserListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [UsermanagementService, HttpClient,
      {
        provide: NgbDateAdapter,
        useClass: NgbDateNativeAdapter
      },
      {
        provide: ErrorHandler,
        useClass: UserMgmtErrorHandler

      }],

  

  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
