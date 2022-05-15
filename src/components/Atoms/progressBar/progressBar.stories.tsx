import { ProgressBar } from "./progressBar";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentProgressBarProps } from "./progressBar.d";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  parameters: {
    a11y: {
      // optional selector which element to inspect
      element: "#root",
      // optional flag to prevent the automatic check
      manual: false,
    },
  },
} as Meta;

const Template: any = (
  args: JSX.IntrinsicAttributes & ComponentProgressBarProps
) => (
  <>
    <section style={{ display: "flex", justifyContent: "center" }}>
      <ProgressBar {...args} />
    </section>
  </>
);

export const ProgressBarDefault = Template.bind({});
ProgressBarDefault.args = {
  children: "progressBar",
};
