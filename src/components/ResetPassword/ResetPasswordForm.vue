<!-- src/components/ResetPassword/ResetPasswordForm.vue -->
<template>
    <div class="reset-password-form">
      <h2>Reset Password</h2>
      <form @submit.prevent="handleSubmit">
        <PasswordInput v-model="newPassword" label="New Password" placeholder="Enter new password" required />
        <PasswordRequirements :password="newPassword" />
        <PasswordInput v-model="confirmPassword" label="Confirm Password" placeholder="Confirm new password" required />
        <p v-if="passwordMatch" class="password-match">✔ Password match</p>
        <Button :disabled="!passwordMatch" label="Reset Password" type="submit" />
      </form>
    </div>
  </template>
  
  <script>
  import PasswordInput from './PasswordInput.vue';
  import PasswordRequirements from './PasswordRequirements.vue';
  import Button from './Button.vue';
  
  export default {
    name: 'ResetPasswordForm',
    components: { PasswordInput, PasswordRequirements, Button },
    data() {
      return {
        newPassword: '',
        confirmPassword: '',
      };
    },
    computed: {
      passwordMatch() {
        return this.newPassword === this.confirmPassword && this.newPassword.length >= 8;
      },
    },
    methods: {
      handleSubmit() {
        if (this.passwordMatch) {
          console.log('Password reset to:', this.newPassword);
          // Logic to handle password reset
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  .reset-password-form {
    font-family: inter;
    width: 495px;
    padding: 40px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 40px;
    font-family: inter;
    font-weight: 700;
    font-size: 25px;
  }
  
  .password-match {
    color: black;
    margin-bottom: 30px;
    font-size: 14px;
    text-align: left;
  }
  </style>
  