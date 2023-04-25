import React, { Component } from "react";
import PremiumUtils from "../utils/premium_utils";
import { connect } from "react-redux";

class Summary extends Component {
  getPremium = relation => {
    let { formData } = this.props;
    let { selectedProduct } = formData;
    return PremiumUtils.calculatePremium(selectedProduct, relation);
  };

  getTotalPremium = () => {
    let { formData } = this.props;
    let { selectedProduct } = formData;
    return PremiumUtils.calculateTotalPremium(
      selectedProduct,
      formData.familyMembers
    );
  };
  render() {
    let { formData } = this.props;

    let { familyMembers = [] } = formData;
    const formatPremium = PremiumUtils.formatPremium;

    return (
      <div>
        <h4>Product: {formData.selectedProduct}</h4>

        <h4>Premium</h4>
        <div>
          <div className="mb-5">Self: {formatPremium(this.getPremium())}</div>
          <hr />
          {familyMembers.map((familyMember, index) => {
            return (
              <div key={index}>
                <div className="mb-5">
                  <span style={{ textTransform: "capitalize" }}>
                    {familyMember.relation.toLowerCase()}
                  </span>
                  : {formatPremium(this.getPremium(familyMember.relation))}
                </div>
                <hr />
              </div>
            );
          })}
        </div>

        <div className="mb-5">
          <strong>
            Total Premium: {formatPremium(this.getTotalPremium())}
          </strong>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  return { formData: { ...policyForm.formData } };
};

export default connect(mapStateToProps)(Summary);
