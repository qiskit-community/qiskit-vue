import QLogo from "./index.vue";

export default {
  title: "Components/QLogo",
  component: QLogo,
  argTypes: {},
};

const Template = (args) => ({
  components: { QLogo },
  setup() {
    return { args };
  },
  template: '<q-logo v-bind="args" />',
});

export const Standard = Template.bind({});
Standard.args = {};
