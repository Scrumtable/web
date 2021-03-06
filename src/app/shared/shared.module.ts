import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MaterialModule} from "./modules/material/material.module";

@NgModule({
    imports: [CommonModule,
    MaterialModule],
    exports: [CommonModule]
})
export class SharedModule { }
