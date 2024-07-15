<template>
  <div class="form-container">
    <h2 class="sign-up">Sign-Up</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="account-type">Account Type <span class="red">*</span></label>
        <select id="account-type" v-model="form.accountType" required>
          <option value="Platform User">Merchant</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <!-- Input for Last Name -->
      <div class="form-group">
        <label for="last-name">Last Name <span class="red">*</span></label>
        <input type="text" id="last-name" v-model="form.lastName" required class="resizing" placeholder="Adeola">
      </div>

      <!-- Input for First Name -->
      <div class="form-group">
        <label for="first-name">First Name <span class="red">*</span></label>
        <input type="text" id="first-name" v-model="form.firstName" required placeholder="Olamide" class="resizing">
      </div>

      <!-- Input for Email -->
      <div class="form-group">
        <label for="email">Email <span class="red">*</span></label>
        <input type="email" id="email" v-model="form.email" required placeholder="lindaokolo@gmail.com"
          class="resizing">
      </div>

      <!-- Input for Password -->
      <div class="form-group">
        <label for="password">Password <span class="red">*</span></label>
        <input type="password" id="password" v-model="form.password" @input="validatePassword" class="resizing" />
        <div class="password-rules">
          <ul>
            <li>
              <Checkmark :status="isMinLength" required /> At least 8 characters
            </li>
            <li>
              <Checkmark :status="hasSpecialChar" required /> At least 1 special character
            </li>
            <li>
              <Checkmark :status="hasNumber" /> At least 1 numerical character
            </li>
            <li>
              <Checkmark :status="hasUpperCase" /> At least 1 upper case character
            </li>
            <li>
              <Checkmark :status="hasLowerCase" /> At least 1 lower case character
            </li>
          </ul>
        </div>
      </div>

      <!-- Terms and Conditions -->
      <div class="form-group terms-group">
        <input type="checkbox" id="terms" v-model="form.acceptTerms" required />
        <label for="terms" class="text"> I accept <a href="#" class="terms">Terms & Condition</a></label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="submit-button">Sign Up</button>

      <h4 class="seperator">-OR-</h4>

      <!-- Login Link -->
      <p class="login-text">Already have an account? <a href="#" class="sign-in">Sign In</a></p>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import Checkmark from './Checkmark.vue';

export default {
  name: 'SignUpFormComponent',
  components: { Checkmark },
  setup() {
    const form = reactive({
      accountType: 'Platform User',
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      acceptTerms: false,
    });

    // Computed properties to validate password rules
    const isMinLength = computed(() => form.password.length >= 8);
    const hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(form.password));
    const hasNumber = computed(() => /\d/.test(form.password));
    const hasUpperCase = computed(() => /[A-Z]/.test(form.password));
    const hasLowerCase = computed(() => /[a-z]/.test(form.password));

    const validatePassword = () => {
      console.log('Validating Password...');
    };

    const onSubmit = () => {
      console.log('Form Submitted:', form);
    };

    return {
      form,
      isMinLength,
      hasSpecialChar,
      hasNumber,
      hasUpperCase,
      hasLowerCase,
      validatePassword,
      onSubmit,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.sign-up {
  text-align: center;
  margin-bottom: 50px;
}

.text {
  font-style: italics !important;
}

.terms {
  text-decoration: none;
  color: black;
}

.form-container {
  font-family: 'Inter', sans-serif;
  width: 495px;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.form-group {
  margin-bottom: 1.5rem;
  /* margin-right: px; */
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  margin-right: 20px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-group-inline {
  display: flex;
}

.form-group-inline input {
  margin-right: 0.5rem;
}

.password-rules ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  color: #555;
}

.red {
  color: red;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #333;
}

.login-text {
  margin-top: 1rem;
  text-align: center;
  font-size: 16px;
  font-style: light !important;
}

.login-text a {
  color: #000;
  text-decoration: none;
}

.login-text a:hover {
  text-decoration: underline;
}

.terms-group {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.terms-group input[type="checkbox"] {
  width: auto;
  margin-right: 15px;
}

.terms-group label {
  display: inline;
  margin-bottom: 0;
}

.sign-in {
  font-weight: bold;
}

.seperator {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>