import { SET_FORM_DATA, GO_NEXT_PAGE, GO_PREV_PAGE } from "./actionTypes";

export const setFormData = (field, value) => ({
  type: SET_FORM_DATA,
  payload: {
    field,
    value
  }
});

export const goToNextPage = content => ({
  type: GO_NEXT_PAGE
});

export const goToPrevPage = content => ({
  type: GO_PREV_PAGE
});
