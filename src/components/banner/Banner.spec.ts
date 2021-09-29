import { mount } from "@vue/test-utils";
import { QiskitBanner } from "./";

describe("QiskitBanner", () => {
  test("renders slot content", () => {
    const slotContent = "<b>Alert!</b> Very important message";
    const wrapper = mount(QiskitBanner, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.html()).toMatch(slotContent);
  });
});
