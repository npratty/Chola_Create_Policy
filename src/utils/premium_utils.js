import { RELATIONSHIPS } from "./constants";

export default class PremiumUtils {
  static getProductPremium(product) {
    if (!product) {
      return "";
    }
    if (product === "Product A") {
      return 20000;
    }
    if (product === "Product B") {
      return 25000;
    }
    if (product === "Product C") {
      return 40000;
    }
    if (product === "Product D") {
      return 15000;
    }
    if (product === "Product E") {
      return 60000;
    }
  }

  static calculatePremium(product, relation) {
    if (!product) {
      return "";
    }
    let premium = this.getProductPremium(product);
    if (!relation) {
      return premium;
    }
    if (relation === RELATIONSHIPS.HUSBAND || relation === RELATIONSHIPS.WIFE) {
      return premium * 0.5;
    }
    if (relation === RELATIONSHIPS.SON || relation === RELATIONSHIPS.DAUGHTER) {
      return premium * 0.2;
    }
    if (
      relation === RELATIONSHIPS.BROTHER ||
      relation === RELATIONSHIPS.SISTER
    ) {
      return premium * 0.3;
    }
    if (
      relation === RELATIONSHIPS.FATHER ||
      relation === RELATIONSHIPS.MOTHER
    ) {
      return premium * 0.6;
    }
  }

  static calculateTotalPremium(product, familyMembers = []) {
    let premium = PremiumUtils.calculatePremium(product);

    familyMembers.forEach(familyMember => {
      premium += PremiumUtils.calculatePremium(product, familyMember.relation);
    });

    return premium;
  }

  static formatPremium(value) {
    if (!value) {
      return "";
    }
    return "Rs. " + value.toLocaleString();
  }
}
