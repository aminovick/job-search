import TheHeadLine from "@/components/JobSearch/TheHeadLine.vue";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

describe("TheHeadLine", () => {
  beforeEach(()=>{
    jest.useFakeTimers();
  })
  afterEach(()=>{
    jest.useRealTimers();
  })
  it("displays introductory action verb", () => {
    const wrapper = mount(TheHeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("clear interval in onBeforeMount", () => {
    const wrapper = mount(TheHeadLine);
     wrapper.unmount();
    expect(clearInterval()).toHaveBeenCalled();
  });
  it("swap action verb  after first interval", async () => {
    const wrapper = mount(TheHeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
});
