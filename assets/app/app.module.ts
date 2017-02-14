import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { MessageComponent } from "./messages/message.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { ErrorComponent } from "./errors/error.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { routing } from './app.routing';
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
