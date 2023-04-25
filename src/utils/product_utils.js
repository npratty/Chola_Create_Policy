import { GENDER, RELATIONSHIPS } from "./constants";

export class ProductUtils {
  static getEligibleProducts(gender, familyMembers) {
    let products = [];

    if (familyMembers.length > 1) {
      products.push({ name: "Product A" });

      if (gender === GENDER.FEMALE) {
        products.push({ name: "Product B" });
      }
    }

    if (familyMembers.length >= 3) {
      let filtered = familyMembers.filter(
        familyMember =>
          familyMember.relation === RELATIONSHIPS.BROTHER ||
          familyMember.relation === RELATIONSHIPS.SISTER
      );
      if (filtered.length >= 1) {
        products.push({ name: "Product C" });
      }
    }

    products.push({ name: "Product D" });

    if (familyMembers.length > 1) {
      let filtered = familyMembers.filter(
        familyMember =>
          familyMember.relation === RELATIONSHIPS.FATHER ||
          familyMember.relation === RELATIONSHIPS.MOTHER
      );
      if (filtered.length >= 1) {
        products.push({ name: "Product E" });
      }
    }

    return products;
  }
}
