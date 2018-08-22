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
    public roles?: Array<string>
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
      []
    );
  }

  static getEmpty(): User {
    return new User(0, "", "", "", [], [], true, true, true, false, false, []);
  }

  private setSpringBootRoles(): void {
    this.setSpringBootRolesFromAuthorities();
    this.setSpringBootRolesFromGroups();
  }

  private setSpringBootRolesFromAuthorities(): void {
    if(this.authorities.length) {
      this.authorities.forEach(authority => {
        this.roles.push(authority.authority)
      });
    }
  }

  private setSpringBootRolesFromGroups(): void {
    if(this.groups.length){
      this.groups.forEach(group => {
        if(group["authorities"].length) {
          group["authorities"].forEach(authority => this.roles.push(authority.authority));
        }
      });
    }
  }
}
