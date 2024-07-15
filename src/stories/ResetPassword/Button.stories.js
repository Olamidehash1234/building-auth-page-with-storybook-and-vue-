// src/stories/ResetPassword/Button.stories.js

import Button from '../../components/ResetPassword/Button.vue';

export default {
  title: 'ResetPassword/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" @click="args.handleClick" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Reset Password',
  type: 'submit',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Sign in',
  type: 'button',
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  type: 'button',
  variant: 'primary',
  disabled: true,
};
