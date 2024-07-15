<!-- File: src/components/SignUpPage/SignInButton.vue -->
<template>
    <button class="sign-in-button">Sign In</button>
  </template>
  
  <script>
  export default {
    name: 'SignInButton',
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  .sign-in-button {
    font-family: inter;
    width: 245px;
    height: 33px;
    background-color: black;
    color: white;
    border: none;
    padding: 8px, 16px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .sign-in-button:hover {
    background-color: #333;
  }
  </style>
  