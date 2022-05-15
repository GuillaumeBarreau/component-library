import { Block } from "./block";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentBlockProps } from "./block.d";

export default {
  title: "block",
  component: Block,
  parameters: {
    a11y: {
      // optional selector which element to inspect
      element: "#root",
      // optional flag to prevent the automatic check
      manual: false,
    },
  },
} as Meta;

const Template: any = (args: JSX.IntrinsicAttributes & ComponentBlockProps) => (
  <>
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Block {...args} />
    </section>
  </>
);

export const BlockDefault = Template.bind({});
BlockDefault.args = {
  children: "block",
};
