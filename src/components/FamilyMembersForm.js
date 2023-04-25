import React, { Component } from "react";
import FamilyMemberForm from "./FamilyMemberForm";
import { connect } from "react-redux";
import { setFormData } from "../state/actions/policyFormActions";

class FamilyMembersForm extends Component {
  setData = (index, field, value) => {
    let { familyMembers = [] } = this.props;
    let familyMember = familyMembers[index];
    familyMember[field] = value;
    familyMembers[index] = { ...familyMember };
    this.props.setData("familyMembers", [...familyMembers]);
  };

  addFamilyMember = () => {
    let { familyMembers = [] } = this.props;
    familyMembers.push({});
    this.props.setData("familyMembers", [...familyMembers]);
  };

  removeFamilyMember = index => {
    let { familyMembers = [] } = this.props;
    this.props.setData("familyMembers", [
      ...familyMembers.slice(0, index),
      ...familyMembers.slice(index + 1)
    ]);
  };

  render() {
    let { familyMembers = [] } = this.props;

    return (
      <div>
        <h4>Family Members</h4>

        <div>
          {familyMembers.map((familyMember, index) => {
            return (
              <div key={index}>
                <FamilyMemberForm
                  familyMember={familyMember}
                  setData={(field, value) => {
                    this.setData(index, field, value);
                  }}
                />
                <div className="d-flex justify-content-end">
                  <a
                    className="link link-danger"
                    onClick={() => {
                      this.removeFamilyMember(index);
                    }}
                  >
                    Remove
                  </a>
                </div>
                <hr />
              </div>
            );
          })}
        </div>

        <div>
          <a className="link" onClick={this.addFamilyMember}>
            Add Family Member
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { policyForm } = state;
  let familyMembers = policyForm.formData.familyMembers || [];
  return { familyMembers: [...familyMembers] };
};

export default connect(
  mapStateToProps,
  { setData: setFormData }
)(FamilyMembersForm);
