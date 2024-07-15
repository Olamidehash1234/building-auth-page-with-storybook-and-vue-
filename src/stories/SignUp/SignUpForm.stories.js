// src/stories/SignUpForm.stories.js
import SignUpFormComponent from '../../components/SignUp/SignUpForm.vue'

export default {
  title: 'SignUp/SignUpForm',
  component: SignUpFormComponent
}

// Define the Template constant
const Template = (args) => ({
  components: { SignUpFormComponent },
  setup() {
    return { args }
  },
  template: '<SignUpFormComponent v-bind="args" />'
})


export const Default = Template.bind({})
Default.args = {} 

