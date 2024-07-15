// src/stories/ResetPassword/PasswordRequirements.stories.js

import PasswordRequirements from '../../components/ResetPassword/PasswordRequirements.vue';

export default {
  title: 'ResetPassword/PasswordRequirements',
  component: PasswordRequirements,
};

const Template = (args) => ({
  components: { PasswordRequirements },
  setup() {
    return { args };
  },
  template: '<PasswordRequirements v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  password: 'Password123!',
};
