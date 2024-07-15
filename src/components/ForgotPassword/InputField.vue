<!-- src/components/InputField/InputField.vue -->
<template>
    <div class="input-field">
        <label :for="id">{{ label }}</label>
        <input :id="id" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder" :required="required" />
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: String,
        type: { type: String, default: 'text' },
        modelValue: String,
        placeholder: String,
        required: Boolean,
    },
    emits: ['update:modelValue'],
    computed: {
        id() {
            return `input-${this.label.toLowerCase().replace(/\s+/g, '-')}`;
        },
    },
};
</script>

<style scoped>
.input-field {
    margin-bottom: 40px;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    text-align: left;
    padding-left: 5px;
    font-weight: 400;
}

input {
    width: calc(100% - 10px);
    padding: 10px 5px;
    border: 0.1px solid #e1e3e6;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
}
</style>