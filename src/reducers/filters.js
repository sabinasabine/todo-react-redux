import { CHANGE_FILTER } from "../actions/constants";

const BASE_FILTER = "all";

const filters = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filters;
