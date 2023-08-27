import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Flow2Component } from './page/flow2/flow2.component';
import { NavComponent } from './common/nav/nav.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { FormsModule } from '@angular/forms';

// Socket.io tutorial:
// https://www.ultimateakash.com/blog-details/IixDYGAKYAo=/How-to-Integrate-Socket.IO-with-Angular-2021
const socketConfig: SocketIoConfig = {
  url: 'http://localhost:19920',
  options: {
    transports: ['websocket'],
  },
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Flow2Component,
    NavComponent,
    DocumentListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
