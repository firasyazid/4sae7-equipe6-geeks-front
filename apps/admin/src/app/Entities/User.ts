class Role {
  id
  name:string
}

export class User {
  id?: number;
  username?: string;
  password?: string;
  roles?: Role[];
  lastName?: string;
  firstName?: string;
  tel?: string;
  email?: string;
  socialNumber?: string;
  enabled?:boolean;
  address?: string;
}
