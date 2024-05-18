import { Routes } from '@angular/router';

import { LearnMoreComponent } from "../learn-more/learn-more.component";
import { VermanSpecComponent } from "../verman-spec/verman-spec.component";


export const docRoutes: Routes = [
  { path: 'more', component: LearnMoreComponent },
  { path: 'verman-spec', component: VermanSpecComponent }
];
