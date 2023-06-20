import { v4 as uuid } from 'uuid';

class UniqueEntityID {
  private value: string;

  constructor(id?: string) {
    this.value = id || uuid();
  }

  public equals(id?: UniqueEntityID): boolean {
    if (id === null || id === undefined) {
      return false;
    }

    if (!(id instanceof UniqueEntityID)) {
      return false;
    }

    return id.toValue() === this.value;
  }

  toString(): string {
    return String(this.value);
  }

  toValue(): string {
    return this.value;
  }
}

export { UniqueEntityID };
