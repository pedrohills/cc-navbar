export class User {
  constructor(
    public id: number,
    public username: string,
    public firstName: string,
    public lastName: string,
    public authorities: Array<any>,
    public groups: Array<any>,
    public accountExpired: boolean,
    public accountLocked: boolean,
    public credentialsExpired: boolean,
    public enabled: boolean,
    public ldap: boolean,
    public roles?: Set<string>
  ) {
    this.setSpringBootRoles();
  }

  static fromJsonList(array): Array<User> {
    return array.map(User.fromJson);
  }

  static fromJson({
    id,
    username,
    firstName,
    lastName,
    authorities,
    groups,
    accountExpired,
    accountLocked,
    credentialsExpired,
    enabled,
    ldap
  }): User {
    return new User(
      id,
      username,
      firstName,
      lastName,
      authorities,
      groups,
      accountExpired,
      accountLocked,
      credentialsExpired,
      enabled,
      ldap,
      new Set()
    );
  }

  static getEmpty(): User {
    return new User(0, '', '', '', [], [], true, true, true, false, false, new Set());
  }

  private setSpringBootRoles(): void {
    this.setSpringBootRolesFromAuthorities(this.authorities);
    this.setSpringBootRolesFromGroups(this.groups);
  }

  private setSpringBootRolesFromAuthorities(authorities: Array<any>): void {
    if (authorities.length) {
      authorities.forEach(authority => {
        this.roles.add(authority.authority);
      });
    }
  }

  private setSpringBootRolesFromGroups(groups: Array<any>): void {
    if (groups.length) {
      groups.forEach(group => {
        this.setSpringBootRolesFromAuthorities(group['authorities']);
        if (group['groups'].length) {
          this.setSpringBootRolesFromGroups(group['groups']);
        }
      });
    }
  }
}
