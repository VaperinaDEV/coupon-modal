import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import { iconNode } from "discourse-common/lib/icon-library";

let icon = iconNode('percent');

export default {
  name: "coupon-modal",
  
  initialize() {
    withPluginApi("0.8.31", api => {
      if (api.getCurrentUser()) {
        api.createWidget("modal-button", {
          tagName: "a.vp-link.vp-modal.btn-default.btn.no-text.btn-icon",

          html() {
            return icon;
          },

          click() {
            showModal("couponModal");
          }
        });
      }     
    });
  }
};
