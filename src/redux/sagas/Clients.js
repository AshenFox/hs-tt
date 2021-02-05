import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects';
import {
  GET_CLIENTS,
  GET_CLIENT,
  DELETE_CLIENT,
  VIEW_CLIENT,
} from '../constants/Clients';
import {
  clientsLoaded,
  clientLoaded,
  setLoading,
  clientDeleted,
} from '../actions/Clients';
import ClientsApi from '../api/Clients';
import { message } from 'antd';

export function* requestClientsWorker() {
  yield takeEvery(GET_CLIENTS, function* () {
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

/* export function* viewClientWorker() {
  yield takeLatest(VIEW_CLIENT, function* (action) {
    const {
      payload: { id },
    } = action;

    try {
      yield put(clientDeleted(id));
    } catch (err) {
      console.error(err);
    }
  });
} */

export default function* rootSaga() {
  yield all([
    fork(requestClientsWorker),
    fork(deleteClientWorker),
    /* fork(viewClientWorker), */
  ]);
}
