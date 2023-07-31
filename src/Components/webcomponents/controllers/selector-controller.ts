/*
  selector-controller.ts

  The SelectorController syncronizes webcomponents with redux stores.

  It is important to note: although SelectorController provides a
  behavior similar to redux selectors, it is not a feature complete
  translation of redux selectors. 
*/

import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { Store, Action } from "@reduxjs/toolkit";

export type EqualityCheck = (a: unknown, b: unknown) => boolean;
export type Selector<S, R> = (state: S) => R;

/*
  Reactive controllers are a concise way of sharing behaviors
  across multiple components.

  Here, the behavior of 'subscribing to a redux store' is shared
  through a reactive controller.

  The following pattern subscribes any webcomponent to any redux store.
  A component will update after a specific store value changes. This is
  accomplished with a selector and an optional equality check.
*/
export class SelectorController<S, A extends Action, R = unknown>
  implements ReactiveController
{
  host: ReactiveControllerHost;
  store: Store<S, A>;
  selected: R;
  selector: Selector<S, R>;
  equalityCheck: EqualityCheck;
  unsubscribe: () => void;

  constructor(
    host: ReactiveControllerHost,
    store: Store<S, A>,
    selector: Selector<S, R>,
    equalityCheck: EqualityCheck = tripleEquals
  ) {
    this.host = host;
    host.addController(this);

    this.store = store;
    this.selector = selector;
    this.equalityCheck = equalityCheck;

    this.selected = selector(store.getState());
  }

  hostConnected() {
    this.unsubscribe = this.store.subscribe(() => {
      /* 
        Browser paints and component renders are expensive.

        The following logic prevents unnecessary updates and paints
        by only requesting updates when the cached value of a selector
        has changed.
      */

      const selected = this.selector(this.store.getState());
      if (!this.equalityCheck(this.selected, selected)) {
        this.selected = selected;
        this.host.requestUpdate();
      }
    });
  }

  hostDisconnected() {
    this.unsubscribe();
  }
}

const tripleEquals: EqualityCheck = (a, b) => a === b;

export const shallowEquals: EqualityCheck = (a, b) => {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) {
    return false;
  }

  for (const k of keys) {
    if (a[k] !== b[k]) {
      return false;
    }
  }

  return true;
};
