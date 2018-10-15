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
        component: GraficosComponent,
        data: { breadcrumb: 'Gráficos Internos' }
      },
      {
        path: "relatorios",
        component: RelatoriosComponent
      },
      {
        path: "usuarios",        
        data: { breadcrumb: 'Todos os Usuários' },
        children: [
          {
            path: "",
            component: UsuariosComponent
          },
          {
            path: "listar-todos",
            component: UsuariosComponent
          },
          {
            path: "teste",
            component: UsuariosComponent,
            data: { breadcrumb: 'Teste' }
          },
          {
            path: "cadastrar-novo",
            component: UsuariosComponent,
            data: { breadcrumb: 'Cadastrar Novo' }
          }
        ]
      },
      {
        path: "arquivos",
        children: [
          {
            path: "",
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
