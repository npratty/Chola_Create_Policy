import React from "react";
import { connect } from "react-redux";
import { setFormData } from "../state/actions/policyFormActions";

function CategoriesForm({ category, setData }) {
  return (
    <div>
      <h4>Select Category</h4>

      <div>
        <select
          className="form-control"
          value={category}
          onChange={e => {
            setData("category", e.target.value);
          }}
        >
          <option value={null}>Select</option>
          <option value={"AGENCY"}>Agency</option>
          <option value={"PARTNERS"}>Partners</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  let { policyForm } = state;
  let { formData } = policyForm;
  return { category: formData.category };
};

export default connect(
  mapStateToProps,
  { setData: setFormData }
)(CategoriesForm);
