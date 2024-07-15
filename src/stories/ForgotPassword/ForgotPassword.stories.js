// src/stories/ForgotPasswordForm/ForgotPasswordForm.stories.js
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword.vue';

export default {
  title: 'ForgotPassword/ForgotPassword',
  component: ForgotPassword,
};

const Template = (args) => ({
  components: { ForgotPassword },
  setup() {
    return { args };
  },
  template: '<ForgotPassword v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
