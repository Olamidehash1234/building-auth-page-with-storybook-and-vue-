<!-- src/components/ResetPassword/PasswordInput.vue -->
<template>
    <div class="input-field">
      <label :for="id">{{ label }}</label>
      <div class="input-wrapper">
        <input :id="id" :type="isPasswordVisible ? 'text' : 'password'" v-model="inputValue" @input="updateValue"
               :placeholder="placeholder" :required="required" />
        <span class="visibility-icon" @click="togglePasswordVisibility">
          <img :src="isPasswordVisible ? visibilityOnIcon : visibilityOffIcon" alt="Toggle visibility" />
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PasswordInput',
    props: {
      label: String,
      modelValue: String,
      placeholder: String,
      required: Boolean,
    },
    emits: ['update:modelValue'],
    data() {
      return {
        isPasswordVisible: false,
        inputValue: this.modelValue,
      };
    },
    computed: {
      id() {
        return `input-${this.label.toLowerCase().replace(/\s+/g, '-')}`;
      },
      visibilityOnIcon() {
        return '/src/assets/vision.png'; 
      },
      visibilityOffIcon() {
        return '/src/assets/visible.png'; 
      },
    },
    methods: {
      togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
      },
      updateValue() {
        this.$emit('update:modelValue', this.inputValue);
      },
    },
    watch: {
      modelValue(newValue) {
        this.inputValue = newValue;
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    margin-bottom: 10px;
    width: 100%;
    margin-right:50px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: left;
    font-weight: 700;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  input {
    width: 495px !important;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  
  .visibility-icon {
    position: absolute;
    right: 10px;
    top: 55%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .visibility-icon img {
    width: 20px;
    height: 20px;
  }
  </style>
  