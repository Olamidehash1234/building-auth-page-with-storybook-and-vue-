// src/stories/ForgotPasswordConfirmation/Button.stories.js

import Button from '../../components/ForgotPasswordConfirmation/Button.vue';

export default {
  title: 'ForgotPasswordConfirmation/Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sign in',
  type: 'button',
  variant: 'primary',
};
