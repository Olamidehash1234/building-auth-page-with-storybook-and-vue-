// src/stories/ForgotPasswordConfirmation/CheckEmail.stories.js

import CheckEmail from '../../components/ForgotPasswordConfirmation/CheckEmail.vue';

export default {
  title: 'ForgotPasswordConfirmation/CheckEmail',
  component: CheckEmail,
};

const Template = () => ({
  components: { CheckEmail },
  template: '<CheckEmail />',
});

export const Default = Template.bind({});
