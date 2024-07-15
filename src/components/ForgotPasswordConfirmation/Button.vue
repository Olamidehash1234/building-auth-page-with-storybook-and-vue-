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
    font-family: inter;
    width: 100%; 
    height: 45px; 
    padding: 8px 16px 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 40px; 
  }
  
  .button.primary {
    background-color: black;
    color: white;
  }
  
  
  </style>
  