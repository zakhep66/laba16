export interface Worker {
  name: string;
  surname: string;
  patronymic: string;
  phone_number: string;
  email: string;
  birthdate: string;
  workplace: number;
  id?: number;
}

export enum MyWorkerPlace {
  it,
  sales,
  delivery,
  legal,
}