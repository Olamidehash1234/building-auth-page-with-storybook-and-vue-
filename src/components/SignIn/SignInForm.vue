<template>
    <div class="sign-in-form">
        <h2>Sign In</h2>
        <form @submit.prevent="handleSubmit">
            <InputField v-model="email" label="Email" type="email" placeholder="lindaokolo@gmail.com" required />
            <InputField v-model="password" label="Password" :type="isPasswordVisible ? 'text' : 'password'"
                placeholder="Enter your password" required :toggleVisibility="true"
                @toggleVisibility="togglePasswordVisibility" :isPasswordVisible="isPasswordVisible" />
            <a href="#" class="forgot-password">Forgot Password?</a>
            <Button label="Sign In" type="submit" />
        </form>
        <h4 class="separator">-OR-</h4>
        <p class="sign-up-link">
            Don't have an account? <a href="#" class="sign-up">Sign Up</a>
        </p>
    </div>
</template>

<script>
import InputField from './InputField.vue';
import Button from './SignInButton.vue';

export default {
    name: 'SignInForm',
    components: { InputField, Button },
    data() {
        return {
            email: '',
            password: '',
            isPasswordVisible: false,
        };
    },
    methods: {
        handleSubmit() {
            // Handle form submission logic here
            console.log('Form submitted', { email: this.email, password: this.password });
        },
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.sign-in-form {
    font-family: inter;
    width: 495px;
    padding: 45px !important;
    padding-right: 50px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 479px;
}

h2 {
    text-align: center;
    margin-bottom: 40px;
}

.forgot-password {
    display: block;
    text-align: right;
    margin-bottom: 30px;
    color: #ff0000;
    text-decoration: none;
}

.separator {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
}

.sign-up-link {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
    margin-bottom: 20px;
}

.sign-up {
    text-decoration: none;
    color: black;
    font-weight: 700;
}
</style>
