

export class ClienteNotFound extends Error {
  public statusCode: number = 400;

  constructor() {
    super('Cliente não encontrado');
  }
}