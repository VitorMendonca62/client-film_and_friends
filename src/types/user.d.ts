interface IUserBasicInputcSchema {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type TypesInputs =
  | 'name'
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword';
