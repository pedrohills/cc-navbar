# ![Logotipo da Casa Civil] (https://raw.githubusercontent.com/casacivilce/cc-navbar/master/common/images/logotipo-horizontal-casa-civil-full-cores-gradiente.png)

# CC-NAVBAR

Módulo que utiliza uma lógica em conjunto com o Angular Material para facilitar a configuração dinâmica de uma Navbar e de um Sidenav com objetivo de padronizar nos sistemas organizacionais.

## Ambiente de desenvolvimento

Para iniciar um ambiente de desenvolvimento, utilize o comando `ng serve`. Navegue até o endereço `http://localhost:4200/`. O ambiente será automaticamente atualizado caso algum arquivo do projeto for atualizado enquanto o comando estiver sendo executado.

## Build do componente

Utilize o comando `ng build cc-navbar` para compilar o projeto. A compilação será enviada para a pasta `dist/`. Use a flag `--prod` para fazer uma compilação para produção.

## Instalação 

Veja a seguir como instalar este componente:

```bash
npm i @govce/cc-navbar --save
```

ou

```bash
yarn add @govce/cc-navbar
```

Adicione no seu arquivo style.scss:

```scss
@import "~@casa-civil-do-governo-do-estado-do-ceara/cc-material-themes/cc-default/cc-default.scss";
```

> Renomeie o arquivo style.css para style.scss, depois altere todas as referências do style.css no arquivo angular.json para style.scss.

Adicione no seu arquivo app.module.ts:

```ts
import { CcNavbarModule } from '@casacivilce/cc-navbar';

@NgModule({
    declarations: [...],
    imports: [
        BrowserModule,
        ...,
        CcNavbarModule
    ]
})
export class AppModule { }
```

## Utilização

Adicione no app.component.html uma entrada.
```html
<cc-navbar [menu]="menu"></cc-navbar>
```

Adicione no app.component.ts a configuração da entrada.
```ts
menu: MenuItem[] = [
    {
      innerHtml: "Menu1",
      routerLink: "/routerlinkMenu1"
    },
    {
      innerHtml: "Menu2",
      routerLink: "/routerlinkMenu2", // clique nesta opção será ignorada
      children: [
        {
          innerHtml: "Submenu 1",
          routerLink: "/routerlinkMenu2/submenu1",
          children: []
        },
        {
          innerHtml: "Submenu 2",
          routerLink: "/routerlinkMenu2/submenu2",
          roles: ["ROLE"],
          children: []
        }
      ]
    }
]
```

## Entradas (@Inputs)

|Entrada|Tipo|Padrão|Descrição|
|:--|:-:|:-:|:--|
|`title`|`string`|`"CC-NAVBAR"`|Título da aplicação que será exibido ao lado do botão do menu.|
|`menu`|`MenuItem[]`|`[]`|Estruturação do menu, seus itens e subitens.|
|`user`|`User`|`undefined`|Bind do usuário para ser trabalhado no sidenav, inclusive suas permissões.|
|`options`|`any`|`undefined`|Opções personalizadas para setar dinâmicamente qualquer configuração deste componente de uma vez.|
|`logotipo`|`Logotipo`|`logotipo`|Logotipo que ficará exibido no sidenav. Por padrão, o logotipo do Governo do Estado do Ceará é ajustado.|
|`accountUrl`|`string`|`"/accounts"`|Url que leva o usuário até a rota do seu perfil.|
|`logoutUrl`|`string`|`"#"`|Url de logout, pode ser utilizada bem com a flag `ignoreDefaultLogoutFunction`.|
|`logoutFunction`|`Function`|`this.logout`|Função que pode ser personalizada para execução do logout. Por padrão, logout da Casa Civil.|
|`ignoreDefaultLogoutFunction`|`boolean`|`false`|Utilizado como flag para ignorar a função padrão de logout.|