import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesForm from "./CategoriesForm";
import JourneyTypeForm from "./JourneyTypeForm";
import UserInfoForm from "./UserInfoForm";
import FamilyMembersForm from "./FamilyMembersForm";
import ProductSelectorForm from "./ProductSelectorForm";
import Summary from "./Summary";
import "./form_styles.css";
import {
  goToNextPage,
  goToPrevPage,
  setFormData
} from "../state/actions/policyFormActions";
import Errors from "./Errors";

class NewPolicyForm extends Component {
  render() {
    let { currentStep, totalSteps } = this.props;

    return (
      <div className="policy-form">
        <h3 className="text-center">New Policy</h3>

        <Errors />

        {currentStep === 1 && <CategoriesForm />}
        {currentStep === 2 && <JourneyTypeForm />}
        {currentStep === 3 && <UserInfoForm />}
        {currentStep === 4 && <FamilyMembersForm />}
        {currentStep === 5 && <ProductSelectorForm />}
        {currentStep === 6 && <Summary />}

        <div className="d-flex justify-content-bw mt-20">
          {currentStep > 1 ? (
            <button className="btn" onClick={this.props.goToPrevPage}>
              Back
            </button>
          ) : (
            <div></div>
          )}
          {currentStep < totalSteps && (
            <button className="btn" onClick={this.props.goToNextPage}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  return { ...policyForm };
};

export default connect(
  mapStateToProps,
  { setFormData, goToNextPage, goToPrevPage }
)(NewPolicyForm);
