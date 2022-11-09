import { ComponentStory, ComponentMeta } from "@storybook/react";

import CrossContainer from ".";

// 👇 This default export determines where your story goes in the story list
export default {
  title: "Containers/Cross Container",
  component: CrossContainer,
  argTypes: {
    topLeft: {
      defaultValue: <div>hello</div>,
    },
  },
} as ComponentMeta<typeof CrossContainer>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CrossContainer> = (args) => (
  <CrossContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  topRight: <h1>Top Right</h1>,
  aside: <div>Aside component</div>,
  children: <div>Main content</div>,
};
