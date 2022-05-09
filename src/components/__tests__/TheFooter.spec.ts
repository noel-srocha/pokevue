import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import TheFooter from "../TheFooter.vue";

describe("TheFooter", () => {
  it("renders properly", () => {
    const wrapper = mount(TheFooter);
    expect(wrapper.text()).toContain(
      "Disclaimer: Pokémon content was developed by Game Freak and Nintendo."
    );
    expect(wrapper.text()).toContain(
      "This website was developed by Manoel de Souza Rocha Neto"
    );
  });
});
