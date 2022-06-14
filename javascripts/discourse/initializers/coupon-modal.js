import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import { iconNode } from "discourse-common/lib/icon-library";
import { computed } from "@ember/object";

let icon = iconNode('ticket-alt');

export default {
  name: "coupon-modal",
  
  initialize(container) {
    withPluginApi("0.8.31", api => {
      if (api.getCurrentUser()) {
        api.createWidget("modal-button", {
          tagName: "a.vp-link.vp-modal.btn-default.btn.no-text.btn-icon",

          html() {
            return icon;
          },

          click() {
            showModal("couponModal");
          },
          couponLinks: computed(function () {
            return JSON.parse(settings.coupon_links);
          })
        });
      }
    });
  }
};
