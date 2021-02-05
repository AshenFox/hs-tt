import { all, takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_CLIENTS,
  GET_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
} from '../constants/Clients';
import {
  clientsLoaded,
  clientLoaded,
  setLoading,
  clientDeleted,
} from '../actions/Clients';
import ClientsApi from '../api/Clients';
import { message } from 'antd';

export function* getClientsWorker() {
  yield takeLatest(GET_CLIENTS, function* () {
    try {
      yield put(setLoading(true));
      const clients = yield call(ClientsApi.get.clients);

      yield put(clientsLoaded(clients));
      yield put(setLoading(false));
    } catch (err) {
      message.error({ content: `Something went wrong`, duration: 2 });
      console.error(err);
    }
  });
}

export function* getClientWorker() {
  yield takeLatest(GET_CLIENT, function* (action) {
    const {
      payload: { id },
    } = action;

    try {
      yield put(setLoading(true));
      const client = yield call(ClientsApi.get.client, id);

      yield put(clientLoaded(client));
      yield put(setLoading(false));
    } catch (err) {
      message.error({ content: `Something went wrong`, duration: 2 });
      console.error(err);
    }
  });
}

export function* deleteClientWorker() {
  yield takeLatest(DELETE_CLIENT, function* (action) {
    const {
      payload: { id },
    } = action;

    try {
      yield call(ClientsApi.delete.client, id);
      yield put(clientDeleted(id));
      message.success({ content: `Deleted user ${id}`, duration: 2 });
    } catch (err) {
      message.error({ content: `Something went wrong`, duration: 2 });
      console.error(err);
    }
  });
}

export function* editClientWorker() {
  yield takeLatest(EDIT_CLIENT, function* (action) {
    const {
      payload: { id, data, key, history },
    } = action;

    try {
      yield call(ClientsApi.put.client, id, data);
      message.success({ content: 'Done!', key, duration: 2 });
      history.push('/app/main/clients/clientlist');
    } catch (err) {
      message.error({ content: `Something went wrong`, duration: 2 });
      console.error(err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    getClientsWorker(),
    getClientWorker(),
    deleteClientWorker(),
    editClientWorker(),
  ]);
}
