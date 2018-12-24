import * as React from "react";
import { useMemo, createContext } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const Context = createContext({});

export function Provider({ name = "hookstore", initial, children }) {
  const [store, setStore] = useLocalStorage(name, initial);
  const value = useMemo(() => ({ store, setStore }), [store]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
