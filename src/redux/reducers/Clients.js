import {
  CLIENTS_LOADED,
  CLIENT_LOADED,
  SET_LOADING,
  CLIENT_DELETED,
  VIEW_CLIENT,
  HIDE_CLIENT,
  RESET_FIELDS,
} from '../constants/Clients';

const initState = {
  list: {},
  active_client: null,
  show_profile: false,
  loading: false,
};

const clients = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLIENTS_LOADED:
      return { ...state, list: arr_to_obj(payload.list) };

    case CLIENT_LOADED:
      return {
        ...state,
        list: { ...state.list, [payload.client.id]: payload.client },
      };

    case SET_LOADING:
      return { ...state, loading: payload.loading };

    case CLIENT_DELETED:
      return {
        ...state,
        list: Object.fromEntries(
          Object.entries(state.list).filter(([id]) => id !== payload.id)
        ),
      };

    case VIEW_CLIENT:
      return {
        ...state,
        active_client: payload.id,
        show_profile: true,
      };

    case HIDE_CLIENT:
      return {
        ...state,
        active_client: null,
        show_profile: false,
      };

    case RESET_FIELDS:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default clients;

const arr_to_obj = (arr) => {
  return Object.fromEntries(
    arr.map((record) => [
      record.id,
      {
        ...record,
      },
    ])
  );
};
