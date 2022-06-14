import { apiInitializer } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import { iconNode } from "discourse-common/lib/icon-library";

let icon = iconNode('ticket-alt');

export default apiInitializer("0.11.1", (api) => {

    if (api.getCurrentUser()) {
        
        couponLinks: computed(function () {
          return JSON.parse(settings.coupon_links);
        })
        
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
