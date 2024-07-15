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
.button {
    width: 100%;
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
    margin-top: 0;
}


</style>