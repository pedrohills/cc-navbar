import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CcNavbarComponent } from "./cc-navbar.component";

import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatExpansionModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  declarations: [CcNavbarComponent],
  exports: [CcNavbarComponent]
})
export class CcNavbarModule {}
