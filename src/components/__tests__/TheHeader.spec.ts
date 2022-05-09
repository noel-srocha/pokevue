import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import TheHeader from "../TheHeader.vue";

describe("TheHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.text()).toContain("Developed by Manoel de Souza Rocha Neto");
  });
});
