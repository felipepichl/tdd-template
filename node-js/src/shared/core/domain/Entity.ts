import { UniqueEntityID } from './UniqueEntityID';

abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;

  protected readonly props: T;

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id || new UniqueEntityID();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}

export { Entity };
