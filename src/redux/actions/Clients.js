import {
  GET_CLIENTS,
  GET_CLIENT,
  CLIENTS_LOADED,
  CLIENT_LOADED,
  SET_LOADING,
  DELETE_CLIENT,
  EDIT_CLIENT,
  CLIENT_DELETED,
  VIEW_CLIENT,
  HIDE_CLIENT,
  RESET_FIELDS,
} from '../constants/Clients';

// saga
export const getClients = () => ({
  type: GET_CLIENTS,
});

export const getClient = (id) => ({
  type: GET_CLIENT,
  payload: { id },
});

export const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  payload: { id },
});

export const editClient = (id, data, key, history) => ({
  type: EDIT_CLIENT,
  payload: { id, data, key, history },
});

// store
export const clientsLoaded = (list) => ({
  type: CLIENTS_LOADED,
  payload: { list },
});

export const clientLoaded = (client) => ({
  type: CLIENT_LOADED,
  payload: { client },
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: { loading },
});

export const clientDeleted = (id) => ({
  type: CLIENT_DELETED,
  payload: { id },
});

export const viewClient = (id) => ({
  type: VIEW_CLIENT,
  payload: { id },
});

export const hideClient = () => ({
  type: HIDE_CLIENT,
});

export const resetFields = () => ({
  type: RESET_FIELDS,
});
