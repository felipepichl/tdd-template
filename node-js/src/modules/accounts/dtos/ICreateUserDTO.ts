interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export { ICreateUserDTO };
