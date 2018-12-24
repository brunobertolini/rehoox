import { useEffect } from "react";

import { useStateImmutable } from "./useStateImmutable";

export const getItem = key => JSON.parse(window.localStorage.getItem(key));
export const setItem = (key, data) =>
  window.localStorage.setItem(key, JSON.stringify(data));

export function useLocalStorage(key, initial) {
  const [data, setData] = useStateImmutable(getItem(key) || initial);
  useEffect(() => data && setItem(key, data), [data]);
  return [data, setData];
}
