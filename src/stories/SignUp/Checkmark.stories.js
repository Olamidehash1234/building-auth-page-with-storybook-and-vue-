// src/stories/Checkmark.stories.js
import Checkmark from '../../components/SignUp/Checkmark.vue'

export default {
  title: 'SignUp/Checkmark',
  component: Checkmark,
  argTypes: {
    status: { control: 'boolean' }
  }
}

// Template for the Checkmark component story
const Template = (args) => ({
  components: { Checkmark },
  setup() {
    return { args }
  },
  template: '<Checkmark v-bind="args" />'
})

// Story for Checkmark with valid status (green checkmark)
export const Valid = Template.bind({})
Valid.args = {
  status: true
}

// Story for Checkmark with invalid status (red cross)
export const Invalid = Template.bind({})
Invalid.args = {
  status: false
}
