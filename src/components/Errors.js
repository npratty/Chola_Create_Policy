import React from "react";
import { connect } from "react-redux";

function Errors({ errors }) {
  if (Object.keys(errors).length === 0) {
    return null;
  } else {
    return (
      <div className="error">
        Please enter valid value for all the fields
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  let { errors } = policyForm;
  return { errors };
};

export default connect(mapStateToProps)(Errors);
