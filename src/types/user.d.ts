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

interface IUserDataContext {
  username: string;
  auth: boolean;
  isLogged: boolean;
}

type TypesInputs =
  | 'name'
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword';

interface JwtPayload {
  username: string;
}

interface IUserContext {
  user: IUserDataContext;
  updateUser: (newUser: IUserDataContext) => void;
  logoutUser: () => void;
}
