// src/stories/ResetPassword/PasswordInput.stories.js

import PasswordInput from '../../components/ResetPassword/PasswordInput.vue';

export default {
  title: 'ResetPassword/PasswordInput',
  component: PasswordInput,
};

const Template = (args) => ({
  components: { PasswordInput },
  setup() {
    return { args };
  },
  template: '<PasswordInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'New Password',
  placeholder: 'Enter new password',
  required: true,
};
