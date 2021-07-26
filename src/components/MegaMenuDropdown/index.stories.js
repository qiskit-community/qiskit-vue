import QiskitMegaMenuDropdown from "./index.vue";

export default {
  title: "Components/QiskitMegaMenuDropdown",
  component: QiskitMegaMenuDropdown,
  argTypes: {},
};

const Template = (args) => ({
  components: { QiskitMegaMenuDropdown },
  setup() {
    return { args };
  },
  template: '<qiskit-mega-menu-dropdown v-bind="args" />',
});

const menuColumn1 = [
  {
    title: { label: "Lorem ipsum dolor", url: "example.com" },
    content: [
      { label: "Sit amet", url: "example.com" },
      { label: "Consectetur adipiscing elit", url: "example.com" },
      { label: "Integer mattis nulla vitae nibh", url: "example.com" },
    ],
  },
  {
    title: { label: "Pharetra pharetra", url: "example.com" },
    content: [
      { label: "Pellentesque interdum semper", url: "example.com" },
      { label: "Justo", url: "example.com" },
      { label: "Suspendisse ut finibus elit", url: "example.com" },
    ],
  },
];

const menuColumn2 = [
  {
    title: { label: "Integer vitae ornare ipsum", url: "example.com" },
    content: [
      { label: "Eget ullamcorper lorem", url: "example.com" },
      { label: "Sed et felis scelerisque, malesuada", url: "example.com" },
      { label: "Ipsum ac", url: "example.com" },
    ],
  },
];

const menuColumn3 = [
  {
    title: { label: "Semper est", url: "example.com" },
    content: [
      { label: "Etiam ligula sem, scelerisque sit", url: "example.com" },
      { label: "Amet pretium ac egestas", url: "example.com" },
    ],
  },
  {
    title: { label: "Pharetra metus ut diam sapien", url: "example.com" },
    content: [
      { label: "Pulvinar sit amet iaculis id", url: "example.com" },
      { label: "Lacinia quis tortor", url: "example.com" },
      { label: "Praesent hendrerit vitae", url: "example.com" },
      { label: "Metus feugiat fringilla", url: "example.com" },
    ],
  },
];

export const SingleColumnContent = Template.bind({});
SingleColumnContent.args = {
  content: [menuColumn1],
  segmentComponentName: "Single column content mega menu dropdown",
};

export const MultipleColumnsContent = Template.bind({});
MultipleColumnsContent.args = {
  content: [menuColumn1, menuColumn2, menuColumn3],
  segmentComponentName: "Multiple column content mega menu dropdown",
};
