export interface UserType {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface CreateUserType {
  name: string;
  email: string;
  gender: string;
  status: string;
}
