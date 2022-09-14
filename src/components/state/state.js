import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  search: "",
});

export { useGlobalState, setGlobalState };
