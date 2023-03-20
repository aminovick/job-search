import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";
import { nextTick } from "vue";
describe("Subnav", () => {
  const wrapperHelper = () =>
    mount(SubNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const wrapper = wrapperHelper();
      wrapper.vm.onJobResultsPage = true;
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT display job count", async () => {
      const wrapper = wrapperHelper();
      wrapper.vm.onJobResultsPage = false;
      await nextTick();
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
