import { Meta, Story } from "@storybook/react/types-6-0";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  // args: {} default args
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  title: "React Avançado",
  description: "TypeScript, ReactJS, NextJS e StyledComponents",
};

Basic.argTypes = {
  title: { control: "color" },
};
