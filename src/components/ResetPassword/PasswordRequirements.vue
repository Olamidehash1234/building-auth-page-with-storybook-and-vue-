<template>
    <ul class="password-requirements">
        <li :class="{ valid: password.length >= 8 }">✔ At least 8 characters</li>
        <li :class="{ 'valid': specialCharRegEx.test(password) }">✔ At least a special character</li>
        <li :class="{ 'valid': numericCharRegEx.test(password) }">✔ At least 1 numerical character</li>
        <li :class="{ 'valid': upperCaseCharRegEx.test(password) }">✔ At least 1 upper case character</li>
        <li :class="{ 'valid': lowerCaseCharRegEx.test(password) }">✔ At least 1 lower case character</li>
    </ul>
</template>

<script>
export default {
    name: 'PasswordRequirements',
    props: {
        password: {
            type: String,
            required: true,
        },
    },
    computed: {
        specialCharRegEx() {
            return /[!@#$%^&*(),.?":{}|<>]/;
        },
        numericCharRegEx() {
            return /\d/;
        },
        upperCaseCharRegEx() {
            return /[A-Z]/;
        },
        lowerCaseCharRegEx() {
            return /[a-z]/;
        },
    },
};
</script>

<style scoped>
.password-requirements {
    text-align: left;
    list-style-type: none;
    padding: 0;
    margin: 0 0 5 0;
}

.password-requirements li {
    margin-bottom: 10px;
    color: black;
}

.password-requirements li.valid {
    color: black;
}
</style>