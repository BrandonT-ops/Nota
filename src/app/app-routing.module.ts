import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoBoardComponent } from './Pages/to-do-board/to-do-board.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { EventsBoardComponent } from './Pages/events-board/events-board.component';
import { NewEventBoardComponent } from './Pages/new-event-board/new-event-board.component';
import { NewToDoBoardComponent } from './Pages/new-to-do-board/new-to-do-board.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {path:'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  // {path:'', component:},
  {path:'note', component:NotesBoardComponent},
  {path:'events', component:EventsBoardComponent},
  {path:'to-dos', component:ToDoBoardComponent},
  {path:'stats', component:StatisticsBoardComponent},
  {path:'new-note', component:NewNoteBoardComponent},
  {path:'new-event', component:NewEventBoardComponent},
  {path:'new-to-do', component:NewToDoBoardComponent}
  // ,{path:'log-out', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
