import { Badge } from "./badge";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentBadgeProps } from "./badge.d";

export default {
  title: "Badge",
  component: Badge,
  parameters: {
    a11y: {
      // optional selector which element to inspect
      element: "#root",
      // optional flag to prevent the automatic check
      manual: false,
    },
  },
} as Meta;

const Template: any = (args: JSX.IntrinsicAttributes & ComponentBadgeProps) => (
  <>
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Badge {...args} />
    </section>
  </>
);

export const BadgeDefault = Template.bind({});
BadgeDefault.args = {
  children: "badge",
};
