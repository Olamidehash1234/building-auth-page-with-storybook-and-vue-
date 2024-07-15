<!-- src/components/Checkmark.vue -->
<template>
    <span :class="['checkmark', status ? 'checkmark--valid' : 'checkmark--invalid']">
        {{ status ? '✔️' : '❌' }}
    </span>
</template>

<script>
export default {
    name: 'Checkmark',
    props: {
        status: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.checkmark {
    font-size: 0.9rem;
    margin-right: 0.5rem;
}

.checkmark--valid {
    color: black !important;
}

.checkmark--invalid {
    color: black !important;
}
</style>