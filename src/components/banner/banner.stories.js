import { QiskitBanner } from "./";

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
  template: `<qiskit-banner :no-x-padding="${args.paddingXNone}" class="${args.style}">${args.default}</qiskit-banner>`,
});

export const ShortContent = Template.bind({});
ShortContent.args = {
  default: "Lorem ipsum dolor sit amet",
};

export const LongContent = Template.bind({});
LongContent.args = {
  default:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  default: "Lorem ipsum dolor sit amet",
  style: "height: 100px;",
};

export const WithLink = Template.bind({});
WithLink.args = {
  default: "Lorem ipsum dolor sit amet. <a href='#'>Click here!</a>",
};

export const WithoutHorizontalPadding = Template.bind({});
WithoutHorizontalPadding.args = {
  default: "Lorem ipsum dolor sit amet",
  paddingXNone: true,
};
