

export class ClienteAlerdyExist extends Error {
  constructor() {
    super('O cliente já existe');
  }
}