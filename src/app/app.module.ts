import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsermanagementService } from './usermanagement.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicUserListComponent } from './dynamic-user-list/dynamic-user-list.component';

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
  ],
  providers: [UsermanagementService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
