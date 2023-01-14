import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environment';
import { AuthService } from './shared/services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);
import { NotesBoardComponent } from './Pages/notes-board/notes-board.component';
import { EventsBoardComponent } from './Pages/events-board/events-board.component';
import { OptionsBarComponent } from './Pages/options-bar/options-bar.component';
import { SearchBarComponent } from './Pages/search-bar/search-bar.component';
import { StatisticsBoardComponent } from './Pages/statistics-board/statistics-board.component';
import { ToDoBoardComponent } from './Pages/to-do-board/to-do-board.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewNoteBoardComponent } from './Pages/new-note-board/new-note-board.component';
import { NewEventBoardComponent } from './Pages/new-event-board/new-event-board.component';
import {EventComponent }from './components/event/event.component';
import { NewToDoBoardComponent } from './Pages/new-to-do-board/new-to-do-board.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NotesBoardComponent,
    EventsBoardComponent,
    OptionsBarComponent,
    SearchBarComponent,
    StatisticsBoardComponent,
    ToDoBoardComponent,
    NotesComponent,
    NewNoteBoardComponent,
    NewEventBoardComponent,
    EventComponent,
    NewToDoBoardComponent,
    ToDoComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
