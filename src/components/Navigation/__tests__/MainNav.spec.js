import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  let wrapper
  beforeEach(() => {
     wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  });
  it("displays company name", () => {
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  it("display menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const menuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navigationManuItems = menuItems.map((item) => item.text());
    expect(navigationManuItems).toEqual([
      "Teams",
      "Locations",
      "Life at Boob Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logger out ", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logger in ", () => {
    it("prompts user to profile picture", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnavigation menu whit additional information", async () => {
      const wraper = shallowMount(MainNav);
      let subNav = wraper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(false);

      const loginButton = wraper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subNav = wraper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
