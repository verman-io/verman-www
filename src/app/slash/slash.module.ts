import { NgModule} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SlashComponent } from './slash.component';
import { slashRoutes } from "./slash.routes";
import { MatIcon } from "@angular/material/icon";
@NgModule({
    declarations: [
      SlashComponent,
    ],
    imports: [
        CommonModule, RouterModule, RouterModule.forChild(slashRoutes), MatIcon, NgOptimizedImage,
    ],

})
export class SlashModule { }
