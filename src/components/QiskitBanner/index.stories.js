import QiskitBanner from "./index.vue";

export default {
  title: "Components/QiskitBanner",
  component: QiskitBanner,
  argTypes: {},
};

const Template = (args) => ({
  components: { QiskitBanner },
  setup() {
    return { args };
  },
  template: '<qiskit-banner v-bind="args">Lorem ipsum</qiskit-banner>',
});

export const Standard = Template.bind({});
Standard.args = {};
