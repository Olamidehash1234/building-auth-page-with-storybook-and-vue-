<template>
    <button :type="type" :class="['button', variant]" @click="handleClick">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: String,
        type: { type: String, default: 'button' },
        variant: { type: String, default: 'primary' }, // primary or secondary
    },
    methods: {
        handleClick() {
            this.$emit('click');
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.button {
    width: calc(100% - 10px);
    /* max-width: 415px; */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
}

.button.primary {
    background-color: black;
    color: white;
    padding-top: 10px;
    font-family: inter;
    font-size: 14px;
}

.button.secondary {
    background-color: white;
    color: black;
    margin-top: 5px;
    font-weight: 700;
    font-size: 14px;
}
</style>