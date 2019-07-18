import { Component } from "@angular/core";
import { MenuItem } from "dist/cc-navbar";
import { User } from "dist/cc-navbar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "EDOWEB";
  user: User = undefined;
  menu: MenuItem[] = [
    {
      "innerHtml": "Modelos",
      "routerLink": "#",
      "roles": [
        "ROLE_EDOWEB_SUPERUSER",
        "ROLE_EDOWEB_MODELOS_READ"
      ],
      "children": [
        {
          "innerHtml": "Consultar Modelos",
          "routerLink": "/modelos",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_MODELOS_READ"
          ]
        },
        {
          "innerHtml": "Novo Modelo",
          "routerLink": "/modelos/novo",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_MODELO_CREATE"
          ]
        },
        {
          "innerHtml": "Consultar Def. Anexo",
          "routerLink": "/anexodefinicoes",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_MODELOS_READ"
          ]
        },
        {
          "innerHtml": "Nova Def. Anexo",
          "routerLink": "/anexodefinicoes/nova",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_MODELO_CREATE"
          ]
        }
      ]
    },
    {
      "innerHtml": "Documentos",
      "routerLink": "#",
      "roles": [
        "ROLE_EDOWEB_SUPERUSER",
        "ROLE_EDOWEB_DOCUMENTOS_ALL",
        "ROLE_EDOWEB_DOCUMENTOS_READ",
        "ROLE_EDOWEB_DOCUMENTO_CREATE"
      ],
      "children": [
        {
          "innerHtml": "Consultar Documentos",
          "routerLink": "/documentos",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_DOCUMENTOS_ALL",
            "ROLE_EDOWEB_DOCUMENTOS_READ"
          ]
        },
        {
          "innerHtml": "Novo Documento",
          "routerLink": "/documentos/novo",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_DOCUMENTOS_ALL",
            "ROLE_EDOWEB_DOCUMENTO_CREATE"
          ]
        }
      ]
    },
    {
      "innerHtml": "Corporativo",
      "routerLink": "#",
      "children": [
        {
          "innerHtml": "Consultar Orgãos",
          "routerLink": "/corporativo/orgaos",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ORGAOS_READ"
          ]
        },
        {
          "innerHtml": "Novo Órgão",
          "routerLink": "/corporativo/orgaos/novo",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ORGAO_CREATE"
          ]
        },
        {
          "innerHtml": "Consultar Integrações",
          "routerLink": "/corporativo/integracoes",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ORGAOS_READ"
          ]
        },
        {
          "innerHtml": "Nova Integração",
          "routerLink": "/corporativo/integracoes/novo",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ORGAO_CREATE"
          ]
        },
        {
          "innerHtml": "Consultar Assinaturas",
          "routerLink": "/corporativo/assinaturas",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ASSINATURAS_READ"
          ]
        },
        {
          "innerHtml": "Nova Assinatura",
          "routerLink": "/corporativo/assinaturas/nova",
          "roles": [
            "ROLE_EDOWEB_SUPERUSER",
            "ROLE_EDOWEB_ASSINATURA_CREATE"
          ]
        }
      ]
    },
    {
      "innerHtml": "Sobre",
      "routerLink": "#",
      "children": [
        {
          "innerHtml": "Versão: 0.7.0",
          "routerLink": "#"
        }
      ]
    }
  ];

  options = {
    accountUrl: "/teste",
    colorBreadcrumb: "accent"
  };

  constructor() {
    let userJson = {
      "id": 31,
      "username": "willker.gomes@casacivil.ce.gov.br",
      "firstName": "Antonio Willker",
      "lastName": "Gomes da Silva",
      "groups": [
        {
          "id": 11,
          "name": "Edoweb - Administrador SEPLAG - COMGE",
          "description": "Perfil com permissões administrativas da SEPLAG.",
          "groups": [
            {
              "id": 3,
              "name": "Edoweb - Gestor de Modelos",
              "description": "Perfil com permissões para acesso de consulta, criação, atualização, descartar, desativar e ativação/finalização de modelos.",
              "groups": [
                {
                  "id": 4,
                  "name": "Edoweb - Operador de Modelos",
                  "description": "Perfil com permissões para consultar, criar, atualizar e finalizar modelos apenas.",
                  "groups": [
                    {
                      "id": 9,
                      "name": "Edoweb - Usuário de Sistema",
                      "description": "Perfil com permissão de acesso básico ao sistema.",
                      "groups": [
                        
                      ],
                      "authorities": [
                        {
                          "id": 30,
                          "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                        },
                        {
                          "id": 2,
                          "description": "Segurança",
                          "application": {
                            "id": 3,
                            "name": "Segurança",
                            "path": "/security",
                            "description": null
                          },
                          "authority": "ROLE_SECURITY"
                        },
                        {
                          "id": 52,
                          "description": "Edoweb - Permissão para consulta de assinaturas.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                        },
                        {
                          "id": 24,
                          "description": "Edoweb - Permissão básica de acesso ao sistema.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB"
                        },
                        {
                          "id": 35,
                          "description": "Edoweb - Permissão para consulta de documentos.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                        },
                        {
                          "id": 48,
                          "description": "Edoweb - Permissão para consulta de órgãos.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB_ORGAOS_READ"
                        },
                        {
                          "id": 26,
                          "description": "Edoweb - Permissão para consulta de modelos.",
                          "application": {
                            "id": 12,
                            "name": "Edoweb",
                            "path": "/edoweb",
                            "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                          },
                          "authority": "ROLE_EDOWEB_MODELOS_READ"
                        }
                      ]
                    }
                  ],
                  "authorities": [
                    {
                      "id": 28,
                      "description": "Edoweb - Permissão para atualização de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_MODELO_UPDATE"
                    },
                    {
                      "id": 27,
                      "description": "Edoweb - Permissão para criação de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_MODELO_CREATE"
                    },
                    {
                      "id": 33,
                      "description": "Edoweb - Permissão para finalizar modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_MODELO_ATIVAR_UPDATE"
                    }
                  ]
                }
              ],
              "authorities": [
                {
                  "id": 29,
                  "description": "Edoweb - Permissão para descartar ou desativar modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_MODELO_DELETE"
                },
                {
                  "id": 34,
                  "description": "Edoweb - Permissão para acesso a todos os modelos sem verificar o grupo de usuários de permissão do órgão.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_MODELOS_READ_NO_USER_GRUPO_ORGAO_CHECK"
                }
              ]
            },
            {
              "id": 7,
              "name": "Edoweb - Gestor de Órgãos",
              "description": "Perfil com permissões para consultar, criar, atualizar e deletar órgãos.",
              "groups": [
                {
                  "id": 9,
                  "name": "Edoweb - Usuário de Sistema",
                  "description": "Perfil com permissão de acesso básico ao sistema.",
                  "groups": [
                    
                  ],
                  "authorities": [
                    {
                      "id": 30,
                      "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                    },
                    {
                      "id": 2,
                      "description": "Segurança",
                      "application": {
                        "id": 3,
                        "name": "Segurança",
                        "path": "/security",
                        "description": null
                      },
                      "authority": "ROLE_SECURITY"
                    },
                    {
                      "id": 52,
                      "description": "Edoweb - Permissão para consulta de assinaturas.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                    },
                    {
                      "id": 24,
                      "description": "Edoweb - Permissão básica de acesso ao sistema.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB"
                    },
                    {
                      "id": 35,
                      "description": "Edoweb - Permissão para consulta de documentos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                    },
                    {
                      "id": 48,
                      "description": "Edoweb - Permissão para consulta de órgãos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_ORGAOS_READ"
                    },
                    {
                      "id": 26,
                      "description": "Edoweb - Permissão para consulta de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_MODELOS_READ"
                    }
                  ]
                }
              ],
              "authorities": [
                {
                  "id": 49,
                  "description": "Edoweb - Permissão para criação de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAO_CREATE"
                },
                {
                  "id": 51,
                  "description": "Edoweb - Permissão para deleção de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAO_DELETE"
                },
                {
                  "id": 48,
                  "description": "Edoweb - Permissão para consulta de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAOS_READ"
                },
                {
                  "id": 50,
                  "description": "Edoweb - Permissão para atualização de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAO_UPDATE"
                }
              ]
            },
            {
              "id": 8,
              "name": "Edoweb - Gestor de Assinaturas",
              "description": "Perfil com permissões para consultar, criar, atualizar, desativar e ativar assinaturas.",
              "groups": [
                {
                  "id": 9,
                  "name": "Edoweb - Usuário de Sistema",
                  "description": "Perfil com permissão de acesso básico ao sistema.",
                  "groups": [
                    
                  ],
                  "authorities": [
                    {
                      "id": 30,
                      "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                    },
                    {
                      "id": 2,
                      "description": "Segurança",
                      "application": {
                        "id": 3,
                        "name": "Segurança",
                        "path": "/security",
                        "description": null
                      },
                      "authority": "ROLE_SECURITY"
                    },
                    {
                      "id": 52,
                      "description": "Edoweb - Permissão para consulta de assinaturas.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                    },
                    {
                      "id": 24,
                      "description": "Edoweb - Permissão básica de acesso ao sistema.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB"
                    },
                    {
                      "id": 35,
                      "description": "Edoweb - Permissão para consulta de documentos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                    },
                    {
                      "id": 48,
                      "description": "Edoweb - Permissão para consulta de órgãos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_ORGAOS_READ"
                    },
                    {
                      "id": 26,
                      "description": "Edoweb - Permissão para consulta de modelos.",
                      "application": {
                        "id": 12,
                        "name": "Edoweb",
                        "path": "/edoweb",
                        "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                      },
                      "authority": "ROLE_EDOWEB_MODELOS_READ"
                    }
                  ]
                }
              ],
              "authorities": [
                {
                  "id": 58,
                  "description": "Edoweb - Permissão para ativação de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURA_ATIVAR_UPDATE"
                },
                {
                  "id": 52,
                  "description": "Edoweb - Permissão para consulta de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                },
                {
                  "id": 55,
                  "description": "Edoweb - Permissão para desativação de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURA_DESATIVAR_DELETE"
                },
                {
                  "id": 54,
                  "description": "Edoweb - Permissão para atualização de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURA_UPDATE"
                },
                {
                  "id": 53,
                  "description": "Edoweb - Permissão para criação de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURA_CREATE"
                }
              ]
            },
            {
              "id": 9,
              "name": "Edoweb - Usuário de Sistema",
              "description": "Perfil com permissão de acesso básico ao sistema.",
              "groups": [
                
              ],
              "authorities": [
                {
                  "id": 30,
                  "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                },
                {
                  "id": 2,
                  "description": "Segurança",
                  "application": {
                    "id": 3,
                    "name": "Segurança",
                    "path": "/security",
                    "description": null
                  },
                  "authority": "ROLE_SECURITY"
                },
                {
                  "id": 52,
                  "description": "Edoweb - Permissão para consulta de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                },
                {
                  "id": 24,
                  "description": "Edoweb - Permissão básica de acesso ao sistema.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB"
                },
                {
                  "id": 35,
                  "description": "Edoweb - Permissão para consulta de documentos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                },
                {
                  "id": 48,
                  "description": "Edoweb - Permissão para consulta de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAOS_READ"
                },
                {
                  "id": 26,
                  "description": "Edoweb - Permissão para consulta de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_MODELOS_READ"
                }
              ]
            }
          ],
          "authorities": [
            
          ]
        },
        {
          "id": 13,
          "name": "Edoweb - Gestor de Setor",
          "description": "Perfil de permissões para assinar ou cancelar documentos.",
          "groups": [
            {
              "id": 9,
              "name": "Edoweb - Usuário de Sistema",
              "description": "Perfil com permissão de acesso básico ao sistema.",
              "groups": [
                
              ],
              "authorities": [
                {
                  "id": 30,
                  "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                },
                {
                  "id": 2,
                  "description": "Segurança",
                  "application": {
                    "id": 3,
                    "name": "Segurança",
                    "path": "/security",
                    "description": null
                  },
                  "authority": "ROLE_SECURITY"
                },
                {
                  "id": 52,
                  "description": "Edoweb - Permissão para consulta de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                },
                {
                  "id": 24,
                  "description": "Edoweb - Permissão básica de acesso ao sistema.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB"
                },
                {
                  "id": 35,
                  "description": "Edoweb - Permissão para consulta de documentos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                },
                {
                  "id": 48,
                  "description": "Edoweb - Permissão para consulta de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAOS_READ"
                },
                {
                  "id": 26,
                  "description": "Edoweb - Permissão para consulta de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_MODELOS_READ"
                }
              ]
            }
          ],
          "authorities": [
            {
              "id": 41,
              "description": "Edoweb - Permissão para cancelar documentos.",
              "application": {
                "id": 12,
                "name": "Edoweb",
                "path": "/edoweb",
                "description": "Aplicação para o Novo Diário Oficial Eletrônico"
              },
              "authority": "ROLE_EDOWEB_DOCUMENTO_CANCELAR_DELETE"
            },
            {
              "id": 40,
              "description": "Edoweb - Permissão para assinar documentos.",
              "application": {
                "id": 12,
                "name": "Edoweb",
                "path": "/edoweb",
                "description": "Aplicação para o Novo Diário Oficial Eletrônico"
              },
              "authority": "ROLE_EDOWEB_DOCUMENTO_ASSINAR_UPDATE"
            }
          ]
        },
        {
          "id": 15,
          "name": "Edoweb - Gestor Maior de Órgão",
          "description": "Perfil de permissões para assinar ou cancelar documentos para secretário, presidente, superintendente de órgãos ou empresas públicas.",
          "groups": [
            {
              "id": 9,
              "name": "Edoweb - Usuário de Sistema",
              "description": "Perfil com permissão de acesso básico ao sistema.",
              "groups": [],
              "authorities": [
                {
                  "id": 30,
                  "description": "Edoweb - Permissão para consulta de categorias de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_CATEGORIAS_READ"
                },
                {
                  "id": 2,
                  "description": "Segurança",
                  "application": {
                    "id": 3,
                    "name": "Segurança",
                    "path": "/security",
                    "description": null
                  },
                  "authority": "ROLE_SECURITY"
                },
                {
                  "id": 52,
                  "description": "Edoweb - Permissão para consulta de assinaturas.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ASSINATURAS_READ"
                },
                {
                  "id": 24,
                  "description": "Edoweb - Permissão básica de acesso ao sistema.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB"
                },
                {
                  "id": 35,
                  "description": "Edoweb - Permissão para consulta de documentos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_DOCUMENTOS_READ"
                },
                {
                  "id": 48,
                  "description": "Edoweb - Permissão para consulta de órgãos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_ORGAOS_READ"
                },
                {
                  "id": 26,
                  "description": "Edoweb - Permissão para consulta de modelos.",
                  "application": {
                    "id": 12,
                    "name": "Edoweb",
                    "path": "/edoweb",
                    "description": "Aplicação para o Novo Diário Oficial Eletrônico"
                  },
                  "authority": "ROLE_EDOWEB_MODELOS_READ"
                }
              ]
            }
          ],
          "authorities": [
            {
              "id": 41,
              "description": "Edoweb - Permissão para cancelar documentos.",
              "application": {
                "id": 12,
                "name": "Edoweb",
                "path": "/edoweb",
                "description": "Aplicação para o Novo Diário Oficial Eletrônico"
              },
              "authority": "ROLE_EDOWEB_DOCUMENTO_CANCELAR_DELETE"
            },
            {
              "id": 40,
              "description": "Edoweb - Permissão para assinar documentos.",
              "application": {
                "id": 12,
                "name": "Edoweb",
                "path": "/edoweb",
                "description": "Aplicação para o Novo Diário Oficial Eletrônico"
              },
              "authority": "ROLE_EDOWEB_DOCUMENTO_ASSINAR_UPDATE"
            }
          ]
        }
      ],
      "authorities": [],
      "accountExpired": false,
      "accountLocked": false,
      "credentialsExpired": false,
      "enabled": true,
      "ldap": true
    };
    this.user = User.fromJson(userJson);
  }
}
