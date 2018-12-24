import { useState, useCallback } from "react";
import { produce } from "immer";

export function useStateImmutable(initial) {
  const [state, setState] = useState(produce(initial, draft => draft));

  return [
    state,
    useCallback(
      value =>
        setState(produce(typeof value === "function" ? value : draft => value)),
      []
    )
  ];
}
