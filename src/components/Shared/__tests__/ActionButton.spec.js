import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Sign In",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Sign In");
  });

  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Sign In",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
