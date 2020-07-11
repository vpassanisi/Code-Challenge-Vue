import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Products from "@/components/Products.vue";
import Product from "@/components/Product.vue";
import Overlay from "@/components/Overlay.vue";
import { Carousel } from "vue-carousel";
import data from "@/DATA.json";

// Unit testing each component

// App.vue unit tests
describe("App.vue", () => {
  it("renders Products component when it mounts", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const wrapper = shallowMount(App, {
      propsData: {
        item: data,
      },
    });

    const products = wrapper.findComponent(Products);
    expect(products.exists()).toBe(true);
  });
});

// Products.vue unit tests
describe("Products.vue", () => {
  it("renders Product components when it mounts", () => {
    const wrapper = shallowMount(Products, {
      propsData: {
        data: data,
      },
    });

    const product = wrapper.findComponent(Product);
    expect(product.exists()).toBe(true);
  });
});

// Product.vue unit tests
describe("Product.vue", () => {
  it("sets hover to false on mouseleave", async () => {
    const wrapper = shallowMount(Product, {
      propsData: {
        item: data.groups[1],
      },
    });

    const product_div = wrapper.find("#product_div");
    expect(product_div.exists()).toBe(true);

    await product_div.trigger("mouseleave");

    expect(wrapper.vm.hover).toBe(false);
  });

  it("sets hover to true on mouseover", async () => {
    const wrapper = shallowMount(Product, {
      propsData: {
        item: data.groups[1],
      },
    });

    const product_div = wrapper.find("#product_div");
    expect(product_div.exists()).toBe(true);

    await product_div.trigger("mouseover");

    expect(wrapper.vm.hover).toBe(true);
  });

  it("mounts Overlay when clicked", async () => {
    const wrapper = shallowMount(Product, {
      propsData: {
        item: data.groups[1],
      },
    });

    const product_div = wrapper.find("#product_div");
    expect(product_div.exists()).toBe(true);

    await product_div.trigger("click");

    const overlay = wrapper.findComponent(Overlay);
    expect(overlay.exists()).toBe(true);
  });
});

// Overlay.vue unit tests
describe("Overlay.vue", () => {
  it("renders Carousel when mounted", async () => {
    const wrapper = shallowMount(Overlay, {
      propsData: {
        images: data.groups[1].images,
        hero: data.groups[1].hero,
      },
    });

    const carousel = wrapper.findComponent(Carousel);
    expect(carousel.exists()).toBe(true);
  });
});
