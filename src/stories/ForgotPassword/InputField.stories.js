// src/stories/InputField/InputField.stories.js
import InputField from '../../components/ForgotPassword/InputField.vue';

export default {
  title: 'ForgotPassword/InputField',
  component: InputField,
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  type: 'email',
  placeholder: 'lindaokolo@gmail.com',
  required: true,
};
