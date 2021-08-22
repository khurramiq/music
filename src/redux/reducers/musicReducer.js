import { musicConstants } from "../constants";
const { FILTERED_FILTERS, SELECTED_SORT_ITEM } = musicConstants;
const initialState = {
  // get
  filteredFilters: [],
  selectedSortItem: "Most Relevant",
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    // get
    case FILTERED_FILTERS:
      return {
        ...state,
        filteredFilters: action.payload,
      };
    case SELECTED_SORT_ITEM:
      return {
        ...state,
        selectedSortItem: action.payload,
      };
    default:
      return state;
  }
};
