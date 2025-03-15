

export class PrazoNotFound extends Error {
  public statusCode: number = 400;

  constructor() {
    super('Prazo não encontrado');
  }
}