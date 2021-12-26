import { createContext, useContext } from "react";
import TodoStore from "./todo/todoStore";

const todoStore = new TodoStore();

export const store = {
  todoStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
