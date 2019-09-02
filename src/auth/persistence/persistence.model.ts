
export interface IPersistence {
  persistenceType?: string | null;
}

export class Persistence implements IPersistence {
  constructor(public persistenceType?: string | null) {}
}