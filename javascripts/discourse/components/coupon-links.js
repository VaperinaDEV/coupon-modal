import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  
  couponLinks: computed(function () {
  return JSON.parse(settings.coupon_links);
  }),
});
