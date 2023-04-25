import {
  SET_FORM_DATA,
  GO_NEXT_PAGE,
  GO_PREV_PAGE
} from "../actions/actionTypes";
import Validator from "../reducers/Validator";

const initialState = {
  formData: {},
  currentStep: 1,
  totalSteps: 6,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_DATA: {
      const { field, value } = action.payload;
      let { formData = {} } = state;
      formData[field] = value;
      return {
        ...state,
        formData: { ...formData }
      };
    }

    case GO_NEXT_PAGE: {
      let errors = validate(state.currentStep, state.formData);
      if (Object.keys(errors).length > 0) {
        return {
          ...state,
          errors: errors
        };
      } else {
        return {
          ...state,
          currentStep: state.currentStep + 1,
          errors: {}
        };
      }
    }

    case GO_PREV_PAGE: {
      return {
        ...state,
        currentStep: state.currentStep - 1,
        errors: {}
      };
    }

    default:
      return state;
  }
}

function validate(currentStep, formData) {
  let errors = {};
  if (currentStep === 1) {
    if (!formData.category) {
      errors.category = true;
    }
  } else if (currentStep === 2) {
    if (!formData.journeyType) {
      errors.journeyType = true;
    }
  } else if (currentStep === 3) {
    if (!Validator.validateUserInfo(formData.userInfo)) {
      errors.userInfo = true;
    }
  } else if (currentStep === 4) {
    if (!Validator.validateFamilyMembers(formData.familyMembers)) {
      errors.familyMembers = true;
    }
  } else if (currentStep === 5) {
    if (!formData.selectedProduct) {
      errors.selectedProduct = true;
    }
  }
  return errors;
}
