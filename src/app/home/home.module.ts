import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeFacade } from './home.facade';
import { IssueComponent } from './components/issue/issue.component';
import { SharedModule } from '../shared/shared.module';
import { HomeState } from './state/home.state';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { IssueListComponent } from './containers/issue-list/issue-list.component';
import { DetailsComponent } from './containers/details/details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../shared/modules/material/material.module';
import { MiniIssueComponent } from './components/mini-issue/mini-issue.component';
import { DetailsIssueComponent } from './components/details-issue/details-issue.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TitleToolbarComponent } from './components/title-toolbar/title-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    DragDropModule,
    MatGridListModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    HomeComponent,
    IssueComponent,
    IssueListComponent,
    DetailsComponent,
    MiniIssueComponent,
    DetailsIssueComponent,
    TitleToolbarComponent,
  ],
  providers: [HomeFacade, HomeState],
})
export class HomeModule {}
