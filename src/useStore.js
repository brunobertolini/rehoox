import { useContext, useCallback } from "react";
import { path, split, assocPath } from "ramda";

import { Context } from "./Provider";

export function useStore(key) {
  const { store, setStore } = useContext(Context);
  const prop = split(".", key);
  const state = path(prop, store);

  const next = (data, draft) =>
    typeof data === "function" ? data(draft) : data;

  const setState = data =>
    setStore(draft => assocPath(prop, next(data, path(prop, draft)), draft));

  return [state, useCallback(setState, [])];
}
