import { makeAutoObservable } from "mobx";
import { getTodos, deleteTodos, createTodos, updateTodos, getSingleTodos } from "../../api";

class todoStore {
  todos = [];

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value) => {
    this.isLoading = value;
  };

  setTodos = (data) => {
    this.todos = data;
  };

  getAllTodos = async (successCB, errorCB) => {
    this.setLoading(true);

    const resp = await getTodos();

    if (resp.status === 200) {
      this.setTodos(resp.data);
      successCB();
    } else {
      errorCB(resp.data);
    }
    this.setLoading(false);
  };

  deleteTodos = async (uuid, successCB, errorCB) => {
    const resp = await deleteTodos(uuid);

    if (resp.status === 200) {
      successCB(resp.data);
    } else {
      errorCB(resp.data);
    }
    this.setLoading(false);
  };

  createTodoItem = async ( data, successCB, errorCB) =>{
    const resp = await createTodos(data);
    if (resp.status === 200) {
      successCB(resp.data);
    } else {
      errorCB(resp.data);
    }
    // this.setLoading(false);
  }

  updateTodoItem = async (uuid, data, successCB, errorCB) =>{
    const resp = await updateTodos(uuid, data);
    if (resp.status === 200) {
      successCB(resp.data);
    } else {
      errorCB(resp.data);
    }
    // this.setLoading(false);
  }

  getSingleTodoItem = async (uuid, successCB, errorCB) =>{
    const resp = await getSingleTodos(uuid);
    if (resp.status === 200) {
      successCB(resp.data);
    } else {
      errorCB(resp.data);
    }
    // this.setLoading(false);
  }
}
export default todoStore;
