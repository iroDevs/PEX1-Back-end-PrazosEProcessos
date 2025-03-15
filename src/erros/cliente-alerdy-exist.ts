

export class ClienteAlerdyExist extends Error {
  public statusCode: number = 400;

  constructor() {
    super('Já existe um cliente com esse número de processo');
  }
}