import React, { Component } from "react";
import { ProductUtils } from "../utils/product_utils";
import { connect } from "react-redux";
import { setFormData } from "../state/actions/policyFormActions";

class ProductSelectorForm extends Component {
  getEligibleProducts = () => {
    let { userInfo, familyMembers = [] } = this.props;
    return ProductUtils.getEligibleProducts(userInfo.gender, familyMembers);
  };

  render() {
    let { selectedProduct } = this.props;
    let products = this.getEligibleProducts() || [];

    return (
      <div>
        <h4>Select Product</h4>

        <div>
          {products.map(product => {
            return (
              <div
                key={product.name}
                className="mb-10"
                onClick={() => {
                  this.props.setData("selectedProduct", product.name);
                }}
                style={{
                  padding: "30px",
                  border:
                    selectedProduct === product.name ? "2px solid" : "1px solid"
                }}
              >
                {product.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  let { formData } = policyForm;
  return { ...formData };
};

export default connect(
  mapStateToProps,
  { setData: setFormData }
)(ProductSelectorForm);
