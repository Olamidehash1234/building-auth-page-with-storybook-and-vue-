<!-- File: src/components/SignUpPage/CheckEmail.vue -->
<template>
    <div class="check-email">
      <h2>Check Your Email</h2>
      <p>Account creation successful, check your email for account activation</p>
      <SignInButton />
    </div>
  </template>
  
  <script>
  import SignInButton from './SignInButton.vue';
  
  export default {
    name: 'CheckEmail',
    components: {
      SignInButton,
    },
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  .check-email {
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    font-size: 16px;
    margin-bottom: 0.5rem;
    font-weight: 700;
    text-align: center;
    font-family: open sans;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
    font-family: open sans;
  }
  </style>
  