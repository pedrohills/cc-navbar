import { User } from "./models/user";
import { Logotipo } from "./models/logotipo";
import { MenuItem } from "./models/menu-item";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { logotipo } from "./constants/logotipo.constant";
import { MatSidenav, matExpansionAnimations } from "@angular/material";
import { CcNavbarService } from "./cc-navbar.service";

@Component({
  selector: "cc-navbar",
  templateUrl: "./cc-navbar.component.html",
  styleUrls: ["./cc-navbar.component.scss"],
  animations: [
    // Uso da animação de rotação do expansion-panel no menu
    matExpansionAnimations.indicatorRotate
  ]
})
export class CcNavbarComponent implements OnInit {
  // Título da aplicação que será exibido ao lado do botão do menu...
  @Input()
  title: string = "CC-NAVBAR";

  // Estruturação do menu, seus itens e subitens.
  @Input()
  menu: MenuItem[] = [];

  // Bind do usuário para ser trabalhado no sidenav, inclusive suas permissões.
  @Input()
  user: User = undefined;

  // Bind do modo com que o sidenav será aberto
  @Input()
  mode: 'over' | 'push' | 'side' = 'over';

  // Opções personalizadas para setar dinâmicamente qualquer
  // configuração deste componente de um vez.
  @Input()
  options: any = undefined;

  // Logotipo que ficará exibido no sidenav.
  @Input()
  logotipo: Logotipo = logotipo;

  // Url que leva o usuário até a rota do seu perfil.
  @Input()
  accountUrl: string = "/accounts";

  // Url de logout, pode ser utilizada bem com a flag `ignoreDefaultLogoutFunction`.
  @Input()
  logoutUrl: string = "#";

  // Função padrão de logout da Casa Civil.
  @Input()
  logoutFunction: Function = this.logout;

  // Input utilizado como flag para ignorar a função
  // padrão de logout.
  @Input()
  ignoreDefaultLogoutFunction: boolean = false;

  // Opção para mostrar ou não o breadcrumb dinâmico abaixo da toolbar
  @Input()
  showBreadcrumb: boolean = true;

  // Opção para configurar a cor do breadcrumb entre primary ou accent
  @Input()
  colorBreadcrumb: "primary" | "accent" = "primary";

  // ViewChild utilizado para obter o sidenav da view, utilizar
  // no componente e passar para o service específico do sidenav.
  @ViewChild("sidenav")
  public sideNav: MatSidenav;

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Método construtor do cc-navbar, com a injeção das dependências
   * necessárias para o seu funcionamento.
   * 
   * @param http HttpClient injetado no componente devido ao baixo uso.
   * @param domSanitizer DomSanitizer utilizado na sanitização do logotipo.
   * @param sidenavService Utilizado como público para um melhor uso com a view.
   **/
  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    public sidenavService: CcNavbarService
  ) {}

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Inicializa o navbar completo, incluindo as
   * configurações iniciais personalizadas.
   **/
  ngOnInit() {
    // Sanitiza o valor que estiver no src do logotipo
    this.logotipo.src = this.domSanitizer.bypassSecurityTrustUrl(
      logotipo.src.toString()
    );
    // Seta no service o bind do sidenav
    this.sidenavService.sideNav = this.sideNav;
 
    // Verifica se há opções a serem setadas.
    if(this.options)
      // Itera cada opção a ser setada.
      for(let option in this.options)
        // Verifica se o componente tem a opção a ser setada e depois
        // realiza a atribuição da variável.
        if(this.hasOwnProperty(option)) this[option] = this.options[option];
  }
  
  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Função que realiza o logout do usuário na aplicação. 
   * É possível setar a flag `ignoreDefaultLogoutFunction`
   * para ignorar o uso dessa função e utilizar o redirecionamento
   * para trabalhar o logout em outro componente ou rota através
   * do ajuste do Input `logoutUrl`.
   **/
  logout(): void {
    // Ignora o uso da função default caso a flag
    // `ignoreDefaultLogoutFunction` esteja setada.
    if (!this.ignoreDefaultLogoutFunction) {
      // Faz o post para o security da Casa Civil a fim de invalidar
      // o token em uso pelo usuário.
      this.http.post("/security/logout", null).subscribe(() => {
        // Realiza um refresh na página.
        window.location.reload();
      });
    }
  }

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * Verifica se o usuário tem permissão para visualizar
   * determinado item.
   *
   * @param item item do menu iterado na view
   **/
  isAllowed(item: MenuItem): boolean {
    // Verifica se o objeto tem a propriedade roles.
    // Caso negativo, o item fica visivel na sidenav.
    if (!item.hasOwnProperty("roles")) return true;

    // Se não há usuário definido, todos os itens do menu
    // devem ficar visíveis.
    if(!this.user) {
      return true;
    } else {
      // Verifica se há interseção entre as roles
      // do usuário com as roles do item do menu.
      let result = this.user.roles.filter(role => {
        return item.roles.indexOf(role) !== -1;
      });
  
      // Retorna o resultado da interseção.
      return !!result.length;
    }
  }
}
