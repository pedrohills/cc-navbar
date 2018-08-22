import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CcNavbarModule } from "dist/cc-navbar";
import { RouterModule } from "@angular/router";
import { GraficosComponent } from "./graficos/graficos.component";
import { ArquivosComponent } from "./arquivos/arquivos.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { RelatoriosComponent } from "./relatorios/relatorios.component";

@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
    ArquivosComponent,
    UsuariosComponent,
    RelatoriosComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: "graficos",
        component: GraficosComponent
      },
      {
        path: "relatorios",
        component: RelatoriosComponent
      },
      {
        path: "usuarios",
        children: [
          {
            path: "listar-todos",
            component: UsuariosComponent
          },
          {
            path: "cadastrar-novo",
            component: UsuariosComponent
          }
        ]
      },
      {
        path: "arquivos",
        children: [
          {
            path: "listar-todos",
            component: ArquivosComponent
          },
          {
            path: "fazer-upload",
            component: ArquivosComponent
          }
        ]
      },
      {
        path: "",
        redirectTo: "/graficos",
        pathMatch: "full"
      },
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    CcNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
