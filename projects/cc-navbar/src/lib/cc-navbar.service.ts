import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CcNavbarService {
  // Flag que determina se o sidenav está aberto ou fechado.
  // Por default, o sidenav vem aberto.
  public isOpen: boolean = false;

  // Bind do sidenav com o service
  public sideNav: MatSidenav;

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Trabalha o uso do sidenav, memorizando sua última configuração.
   *
   * @param router Injeção do router do Angular no service
   **/
  constructor(private router: Router) {
    // Pega a configuração do sidenav no localStorage
    let sidenav = JSON.parse(localStorage.getItem("sidenav"));

    // Ajusta o estado inicial do sidenav, default é aberto.
    this.isOpen = sidenav && sidenav.hasOwnProperty("isOpen")
      ? sidenav.isOpen
      : this.isOpen;
  }

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Alterna o estado do sidenav, em seguida salva seu estado no localStorage.
   *
   **/
  public toggle() {
    // Inversão do estado do sidenav
    this.isOpen = !this.isOpen;

    // Salvando a inversão no localStorage..
    localStorage.setItem("sidenav", JSON.stringify({ isOpen: this.isOpen }));
  }

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Altera o estado do sidenav, em seguida salva seu estado no localStorage.
   *
   **/
  public open() {
    // Inversão do estado do sidenav
    this.isOpen = true;

    // Salvando a inversão no localStorage..
    localStorage.setItem("sidenav", JSON.stringify({ isOpen: this.isOpen }));
  }

  /**
   * @author Pedro Henrique Araújo de Brito - gpedroemail&#64;gmail.com
   * 
   * Altera o estado do sidenav, em seguida salva seu estado no localStorage.
   *
   **/
  public close() {
    // Inversão do estado do sidenav
    this.isOpen = false;

    // Salvando a inversão no localStorage..
    localStorage.setItem("sidenav", JSON.stringify({ isOpen: this.isOpen }));
  }
}
