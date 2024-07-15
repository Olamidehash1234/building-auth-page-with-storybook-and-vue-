<!-- src/components/ForgotPasswordConfirmation/CheckEmail.vue -->
<template>
    <div class="check-email">
      <h2>Check Your Email</h2>
      <p>A link has been sent to your email, click on it to reset your password</p>
      <Button label="Sign in" type="button" variant="primary" />
    </div>
  </template>
  
  <script>
  import Button from './Button.vue';
  
  export default {
    name: 'CheckEmail',
    components: { Button },
  };
  </script>
  
  <style scoped>
  
  .check-email {
    font-family: open sans;
    width: 300px;
    height: 207px;
    padding: 40px; 
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    justify-content: center;
  }
  
  
  
  h2 {
    margin-bottom: 30px;
    font-weight: 700;
  }
  
  p {
    margin-bottom: 40px; /* Consistent margin */
    font-size: 16px;
  }
  </style>
  