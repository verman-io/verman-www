import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import { LearnMoreComponent } from "../learn-more/learn-more.component";
import { docRoutes } from "./doc.routes";
import { VermanSpecComponent } from '../verman-spec/verman-spec.component';

@NgModule({
  declarations: [
    LearnMoreComponent,
    VermanSpecComponent
  ],
    imports: [
      CommonModule, RouterModule, RouterModule.forChild(docRoutes), NgOptimizedImage,

      MatSidenavModule, MatDialogModule, MatButtonModule, MatInputModule, MatIconModule
    ]
})
export class DocModule { }
