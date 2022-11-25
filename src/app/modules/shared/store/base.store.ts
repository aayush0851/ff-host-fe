import { EntityState, EntityStore } from "@datorama/akita";

export interface BaseState<T> extends EntityState<T> {
  loaded?: boolean;
}

export abstract class BaseStore<T extends BaseState<G>, G> extends EntityStore<
  T,
  G
  > {
  constructor(initialState?: any) {
    super({
      ...initialState,
      loading: false,
      loaded: false,
    });
  }

  setLoaded(loaded = true) {
    this.update((state) => ({
      ...state,
      loading: false,
      loaded: loaded,
    }));
  }
}
