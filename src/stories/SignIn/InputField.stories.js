// src/stories/SignIn/InputField.stories.js
import InputField from '../../components/SignIn/InputField.vue';

export default {
  title: 'SignIn/InputField',
  component: InputField,
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'email', 'password'] },
    },
    required: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'lindaokolo@gmail.com',
  required: true,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  required: true,
};