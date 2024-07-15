// src/stories/ResetPassword/ResetPasswordForm.stories.js

import ResetPasswordForm from '../../components/ResetPassword/ResetPasswordForm.vue';

export default {
  title: 'ResetPassword/ResetPasswordForm',
  component: ResetPasswordForm,
};

const Template = (args) => ({
  components: { ResetPasswordForm },
  setup() {
    return { args };
  },
  template: '<ResetPasswordForm v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
