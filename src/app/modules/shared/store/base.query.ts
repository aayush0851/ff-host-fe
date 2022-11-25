import { EntityStore, QueryEntity } from "@datorama/akita";
import {BaseState} from "./base.store";

export abstract class BaseQuery<T extends BaseState<G>, G> extends QueryEntity<
  T,
  G
  > {
  constructor(protected store: EntityStore<T>) {
    super(store);
  }

  shouldCallApi = () =>
    !this.store.getValue().loading && !this.store.getValue().loaded;
}
