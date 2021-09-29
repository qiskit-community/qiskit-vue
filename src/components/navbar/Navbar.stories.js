import { QiskitNavbar } from "./";

export default {
  title: "Components/QiskitNavbar",
  component: QiskitNavbar,
  argTypes: {},
};

const Template = (args) => ({
  components: { QiskitNavbar },
  setup() {
    return { args };
  },
  template: `<qiskit-navbar></qiskit-navbar>`,
});

export const Default = Template.bind({});
