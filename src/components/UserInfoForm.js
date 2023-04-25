import React, { Component } from "react";
import { GENDER } from "../utils/constants";
import { connect } from "react-redux";
import { setFormData } from "../state/actions/policyFormActions";

class UserInfoForm extends Component {
  setData = (field, value) => {
    let { userInfo = {} } = this.props;
    userInfo[field] = value;
    this.props.setData("userInfo", userInfo);
  };

  render() {
    let { userInfo = {} } = this.props;

    return (
      <div>
        <h4>User Details</h4>

        <div className="mb-10">
          <div>Name</div>
          <div className="d-flex justify-content-bw">
            <input
              className="form-control"
              onChange={e => {
                this.setData("firstName", e.target.value);
              }}
              value={userInfo.firstName}
            />
            <input
              placeholder="Optional"
              className="form-control"
              onChange={e => {
                this.setData("middleName", e.target.value);
              }}
              value={userInfo.middleName}
            />
            <input
              className="form-control"
              onChange={e => {
                this.setData("lastName", e.target.value);
              }}
              value={userInfo.lastName}
            />
          </div>
        </div>

        <div className="mb-10">
          <div>Gender</div>
          <div className="d-flex ">
            <div>
              <input
                type="radio"
                onChange={() => {
                  this.setData("gender", GENDER.MALE);
                }}
                checked={userInfo.gender === GENDER.MALE}
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                onChange={() => {
                  this.setData("gender", GENDER.FEMALE);
                }}
                checked={userInfo.gender === GENDER.FEMALE}
              />
              Female
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div>Email</div>
          <div className="d-flex justify-content-bw">
            <input
              className="form-control"
              onChange={e => {
                this.setData("email", e.target.value);
              }}
              value={userInfo.email}
            />
          </div>
        </div>

        <div className="mb-10">
          <div>Mobile Number</div>
          <div className="d-flex justify-content-bw">
            <input
              className="form-control"
              onChange={e => {
                this.setData("mobileNumber", e.target.value);
              }}
              value={userInfo.mobileNumber}
            />
          </div>
        </div>

        <div className="mb-10">
          <div>Sum Insured</div>
          <div className="d-flex justify-content-bw">
            <select
              className="form-control"
              value={userInfo.sumInsured}
              onChange={e => {
                this.setData("sumInsured", e.target.value);
              }}
            >
              <option value={null}>Select</option>
              <option value={"500000"}>5 Lakhs</option>
              <option value={"1000000"}>10 Lakhs</option>
              <option value={"1500000"}>15 Lakhs</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  return { userInfo: { ...policyForm.formData.userInfo } };
};

export default connect(
  mapStateToProps,
  { setData: setFormData }
)(UserInfoForm);
