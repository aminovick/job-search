import { mount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const wrapperHelper = () =>
    mount(MainNav, {
      global: {
        stubs: {
          routerLink: RouterLinkStub,
          fontAwesomeIcon:true
        },
      },
    });

  it("displays company name", () => {
    const wrapper = wrapperHelper();
    expect(wrapper.text()).toMatch("Amine Careers");
  });
  it("display menu items for navigation", () => {
    const wrapper = wrapperHelper();
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
      const wrapper = wrapperHelper();
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logger in ", () => {
    it("prompts user to profile picture", async () => {
      const wrapper = wrapperHelper();
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnavigation menu whit additional information", async () => {
      const wraper = wrapperHelper();
      let subNav = wraper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(false);

      const loginButton = wraper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subNav = wraper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
