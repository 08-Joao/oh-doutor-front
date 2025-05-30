export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  data: {
    token: string;
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  clinicId: string;
}