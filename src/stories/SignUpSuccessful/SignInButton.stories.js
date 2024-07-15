// src/stories/SignUpSuccessful/SignInButton.stories.js
import SignInButton from '../../components/SignUpSuccessful/SignInButton.vue';

export default {
  title: 'SignUpSuccessful/SignInButton',
  component: SignInButton,
  parameters: {
    storySource: {
      source: 'SignUpSuccessful/SignInButton',
    },
  },
};

export const Default = () => ({
  components: { SignInButton },
  template: '<SignInButton />',
}); 