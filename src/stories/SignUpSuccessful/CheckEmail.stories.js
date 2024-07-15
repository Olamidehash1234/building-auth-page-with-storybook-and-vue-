// src/stories/SignUpSuccessful/CheckEmail.stories.js
import CheckEmail from '../../components/SignUpSuccessful/CheckEmail.vue';

export default {
  title: 'SignUpSuccessful/CheckEmail',
  component: CheckEmail,
  parameters: {
    storySource: {
      source: 'SignUpSuccessful/CheckEmail',
    },
  },
};

export const Default = () => ({
  components: { CheckEmail },
  template: '<CheckEmail />',
});