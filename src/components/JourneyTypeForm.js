import React from "react";
import { connect } from "react-redux";
import { setFormData } from "../state/actions/policyFormActions";

function JourneyTypeForm({ journeyType, setData }) {
  return (
    <div>
      <h4>Select Journey Type</h4>

      <div>
        <select
          className="form-control"
          value={journeyType}
          onChange={e => {
            setData("journeyType", e.target.value);
          }}
        >
          <option value={null}>Select</option>
          <option value={"NEW"}>New</option>
          <option value={"EXISTING"}>Existing</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  let { policyForm } = state;
  return { journeyType: policyForm.formData.journeyType };
};

export default connect(
  mapStateToProps,
  { setData: setFormData }
)(JourneyTypeForm);
