// src/stories/SignIn/SignInForm.stories.js
import SignInForm from '../../components/SignIn/SignInForm.vue';

export default {
  title: 'SignIn/SignInForm',
  component: SignInForm,
};

const Template = (args) => ({
  components: { SignInForm },
  setup() {
    return { args };
  },
  template: '<SignInForm v-bind="args" />',
});

export const Default = Template.bind({});