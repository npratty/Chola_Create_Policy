export default class Validator {
  static validateUserInfo(userInfo = {}) {
    let {
      firstName,
      middleName,
      lastName,
      gender,
      email,
      mobileNumber,
      sumInsured
    } = userInfo;

    // First name, Middle name, Last name (It should not be more than 15 characters)
    // b. Gender(Boolean)
    // c. Email (email to be validated)
    // d. Mobile number (Allow only numeric and length should 10)
    let valid =
      validateName(firstName) &&
      (!middleName || validateName(middleName)) &&
      validateName(lastName) &&
      !!gender &&
      validateEmail(email) &&
      validatePhone(mobileNumber) &&
      !!sumInsured;
    return valid;
  }

  static validateFamilyMembers(familyMembers = []) {
    let valid = true;
    familyMembers.forEach(familyMember => {
      let { firstName, middleName, lastName, gender, relation } = familyMember;
      if (
        !(
          validateName(firstName) &&
          (!middleName || validateName(middleName)) &&
          validateName(lastName) &&
          !!gender &&
          !!relation
        )
      ) {
        valid = false;
      }
    });
    return valid;
  }
}

function validateEmail(email) {
  let valid =
    email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return valid;
}
function validatePhone(phone) {
  let valid = phone && /^[0-9]{10}$/.test(phone);
  return valid;
}
function validateName(name) {
  let valid = name && name.length <= 15;
  return valid;
}
