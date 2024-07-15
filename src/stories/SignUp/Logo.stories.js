// src/stories/Logo.stories.js
import Logo from '../..//components/SignUp/Logo.vue'

export default {
  title: 'SignUp/Logo',
  component: Logo,
  parameters: {
    storySource: {
      source: 'SignUp/Logo'
    }
  }
}

export const Default = () => ({
  components: { Logo },
  template: '<Logo />'
})
