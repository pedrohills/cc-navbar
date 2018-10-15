import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CcNavbarComponent } from "./cc-navbar.component";
import { BrowserModule } from "@angular/platform-browser";

import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatExpansionModule,
  MatCardModule,
  MatTooltipModule
} from "@angular/material";
import { BreadcrumbsService } from "./services/breadcrumb.service";
import { CCBreadcrumbComponent } from "./cc-navbar-breadcrumb.component";

@NgModule({
  imports: [
    BrowserModule,
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
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [BreadcrumbsService],
  declarations: [CcNavbarComponent, CCBreadcrumbComponent],
  exports: [CcNavbarComponent]
})
export class CcNavbarModule {}
