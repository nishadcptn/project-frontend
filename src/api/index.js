import axios from "./axios";

const getTodos = () => {
  return axios.get(`/todos`).then(
    (res) => res,
    (error) => error.response
  );
};

const getSingleTodos = (uuid) => {
  return axios.get(`/todos/${uuid}`).then(
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

const createTodos = (data) =>{
  return axios.post(`/todos`,data).then(
    (res) => res,
    (error) => error
  );
}

const updateTodos = (uuid, data) =>{
  return axios.patch(`/todos/${uuid}`,data).then(
    (res) => res,
    (error) => error
  );
}
export { getTodos, getCompletedTodos, deleteTodos ,createTodos, updateTodos, getSingleTodos};
