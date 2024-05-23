interface IUserBasicInputcSchema {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface IUserLoginSchema {
  email: string;
  password: string;
}
type TypesInputs =
  | 'name'
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword';
