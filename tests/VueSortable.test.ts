import { mount } from "@vue/test-utils";
import VueSortable from "../src/components/VueSortable.vue";
import { describe, it, expect } from "vitest";

describe("VueSortable", () => {
  it("renders items correctly", () => {
    const wrapper = mount(VueSortable, {
      props: {
        modelValue: ["Item 1", "Item 2"],
      },
      slots: {
        default: ({ item }: { item: string }) => `<div>${item}</div>`,
      },
    });

    expect(wrapper.text()).toContain("Item 1");
    expect(wrapper.text()).toContain("Item 2");
  });
});
