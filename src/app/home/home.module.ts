import { NgModule } from "@angular/core";
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeFacade } from "./home.facade";
import { IssueComponent } from './components/issue/issue.component';
import { SharedModule } from "../shared/shared.module";
import { HomeState } from "./state/home.state";

import {DragDropModule} from '@angular/cdk/drag-drop';
import { IssueListComponent } from './containers/issue-list/issue-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { DetailsComponent } from './containers/details/details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MaterialModule} from "../shared/modules/material/material.module";
import { MiniIssueComponent } from './components/mini-issue/mini-issue.component';
import { DetailsIssueComponent } from './components/details-issue/details-issue.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, DragDropModule, NgxPaginationModule, MatGridListModule, MaterialModule],
    declarations: [
        HomeComponent,
        IssueComponent,
        IssueListComponent,
        DetailsComponent,
        MiniIssueComponent,
        DetailsIssueComponent
    ],
    providers: [HomeFacade, HomeState]
})
export class HomeModule { }
