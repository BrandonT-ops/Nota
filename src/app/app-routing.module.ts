import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoBoardComponent } from './Pages/to-do-board/to-do-board.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { EventsBoardComponent } from './Pages/events-board/events-board.component';
import { NewEventBoardComponent } from './Pages/new-event-board/new-event-board.component';
import { NewNoteBoardComponent } from './Pages/new-note-board/new-note-board.component';
import { NotesBoardComponent } from './Pages/notes-board/notes-board.component';
import { StatisticsBoardComponent } from './Pages/statistics-board/statistics-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/note', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  // {path:'', component:},
  { path: 'note', component: NotesBoardComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventsBoardComponent, canActivate: [AuthGuard] },
  { path: 'to-dos', component: ToDoBoardComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatisticsBoardComponent, canActivate: [AuthGuard] },
  { path: 'new-note', component: NewNoteBoardComponent, canActivate: [AuthGuard] },
  { path: 'new-event', component: NewEventBoardComponent, canActivate: [AuthGuard] }
  // ,{path:'log-out', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
