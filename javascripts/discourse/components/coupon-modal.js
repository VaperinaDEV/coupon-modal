import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  couponLinks: computed(function () {
    return JSON.parse(settings.coupon_links);
  }),
});
