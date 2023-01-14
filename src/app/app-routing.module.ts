import { ToDoBoardComponent } from './Pages/to-do-board/to-do-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { EventsBoardComponent } from './Pages/events-board/events-board.component';
import { StatisticsBoardComponent } from './Pages/statistics-board/statistics-board.component';
import { NotesBoardComponent } from './Pages/notes-board/notes-board.component';
import { NewNoteBoardComponent } from './Pages/new-note-board/new-note-board.component';
import { NewEventBoardComponent } from './Pages/new-event-board/new-event-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  // {path:'', component:},
  {path:'notes', component:NotesBoardComponent},
  {path:'events', component:EventsBoardComponent},
  {path:'to-dos', component:ToDoBoardComponent},
  {path:'stats', component:StatisticsBoardComponent},
  {path:'new-note', component:NewNoteBoardComponent},
  {path:'new-event', component:NewEventBoardComponent}
  // ,{path:'log-out', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
