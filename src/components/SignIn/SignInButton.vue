<!-- src/components/SignIn/Button.vue -->
<template>
    <button :type="type" class="button" @click="$emit('click')">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: String,
        type: { type: String, default: 'button' },
    },
    emits: ['click'],
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.button {
    font-family: inter;
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.button:hover {
    background-color: #333;
}
</style>