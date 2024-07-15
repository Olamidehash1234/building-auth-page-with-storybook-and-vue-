// src/stories/Button/Button.stories.js
import Button from '../../components/ForgotPassword/Button.vue';

export default {
  title: 'ForgotPassword/Button',
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
  label: 'Reset Password',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Back to Sign In',
  variant: 'secondary',
};
