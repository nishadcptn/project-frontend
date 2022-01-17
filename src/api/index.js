import axios from "./axios";

const getTodos = () => {
  return axios.get(`/todos`).then(
    (res) => res,
    (error) => error.response
  );
};

const getCompletedTodos = (completed) => {
  return axios.get(`/todos/?completed=${completed}`).then(
    (res) => res,
    (error) => error.response
  );
};

const deleteTodos = (uuid) => {
  return axios.delete(`/todos/${uuid}`).then(
    (res) => res,
    (error) => error.response
  );
};

export { getTodos, getCompletedTodos, deleteTodos };
