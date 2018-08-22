export interface MenuItem {
    innerHtml: string,
    routerLink: string,
    roles?: string[],
    children?: MenuItem[]
}