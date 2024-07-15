<!-- src/components/ForgotPassword/ForgotPassword.vue -->
<template>
    <div class="forgot-password-form">
        <h2>Forgot Password?</h2>
        <form @submit.prevent="handleSubmit">
            <InputField v-model="email" label="Email Address" type="email" placeholder="lindaokolo@gmail.com"
                required />
            <Button label="Reset Password" type="submit" />
            <Button label="Back to Sign In" type="button" variant="secondary" />
        </form>
    </div>
</template>

<script>
import InputField from '../ForgotPassword/InputField.vue';
import Button from '../ForgotPassword/Button.vue';

export default {
    name: 'ForgotPasswordForm',
    components: { InputField, Button },
    data() {
        return {
            email: '',
        };
    },
    methods: {
        handleSubmit() {
            console.log('Reset Password for:', this.email);
            // Logic to handle password reset request
        },
    },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.forgot-password-form {
    font-family: open sans;
    width: 495px;
    height: auto;
    padding: 40px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button+button {
    margin-top: 20px;
}
</style>