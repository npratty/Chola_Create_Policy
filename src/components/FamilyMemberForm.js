import React, { Component } from "react";
import { GENDER, RELATIONSHIPS } from "../utils/constants";

export default class FamilyMemberForm extends Component {
  render() {
    let { familyMember } = this.props;

    return (
      <div>
        <div className="mb-10">
          <div>Name</div>
          <div className="d-flex justify-content-bw">
            <input
              className="form-control"
              onChange={e => {
                this.props.setData("firstName", e.target.value);
              }}
              value={familyMember.firstName}
            />
            <input
              placeholder="Optional"
              className="form-control"
              onChange={e => {
                this.props.setData("middleName", e.target.value);
              }}
              value={familyMember.middleName}
            />
            <input
              className="form-control"
              onChange={e => {
                this.props.setData("lastName", e.target.value);
              }}
              value={familyMember.lastName}
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
                  this.props.setData("gender", GENDER.MALE);
                }}
                checked={familyMember.gender === GENDER.MALE}
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                onChange={() => {
                  this.props.setData("gender", GENDER.FEMALE);
                }}
                checked={familyMember.gender === GENDER.FEMALE}
              />
              Female
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div>Relation</div>
          <div>
            <select
              className="form-control"
              placeholder="Relation"
              value={familyMember.relation}
              onChange={e => {
                this.props.setData("relation", e.target.value);
              }}
            >
              <option value={null}>Select</option>
              <option value={RELATIONSHIPS.HUSBAND}>Husband</option>
              <option value={RELATIONSHIPS.WIFE}>Wife</option>
              <option value={RELATIONSHIPS.SON}>Son</option>
              <option value={RELATIONSHIPS.DAUGHTER}>Daughter</option>
              <option value={RELATIONSHIPS.BROTHER}>Brother</option>
              <option value={RELATIONSHIPS.SISTER}>Sister</option>
              <option value={RELATIONSHIPS.FATHER}>Father</option>
              <option value={RELATIONSHIPS.MOTHER}>Mother</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
