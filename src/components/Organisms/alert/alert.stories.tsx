import { Alert } from './alert';
import { Meta } from "@storybook/react/types-6-0";
import { ComponentAlertProps } from "./alert.d";

export default {
  title: 'Alert',
  component: Alert,
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
  args: JSX.IntrinsicAttributes & ComponentAlertProps
) => <>
   <section style={ {display: "flex", justifyContent: "center"} }>
    <Alert {...args} /> 
  </section>
</>;

export const AlertDefault = Template.bind({});
AlertDefault.args = {
  children: "alert",
};
