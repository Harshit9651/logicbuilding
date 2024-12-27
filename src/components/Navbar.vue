<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <router-link to="/" class="logo">
      
        <span>CodeMaster</span>
      </router-link>
      <div class="nav-buttons">
        <template v-if="!isLoggedIn">
          <button class="btn btn-secondary" @click="showSignin = true">
          
            Sign In
          </button>
          <button class="btn" @click="showSignup = true">
         
            Sign Up
          </button>
        </template>
        <div v-else class="profile">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=282828" 
            alt="Profile" 
            class="avatar" 
          />
        </div>
      </div>
    </div>
  </nav>

  <!-- Sign In Modal -->
  <div v-if="showSignin" class="overlay" @click.self="showSignin = false">
    <div class="modal">
      <div class="modal-header">
        <h2>Welcome Back</h2>
        <button class="close-btn" @click="showSignin = false">×</button>
      </div>
      <form @submit.prevent="handleSignin">
        <div class="input-group">
          <label for="email">
            <i class="fas fa-envelope"></i>
            Email
          </label>
          <input type="email" id="email" v-model="signinEmail" required>
        </div>
        <div class="input-group">
          <label for="password">
            <i class="fas fa-lock"></i>
            Password
          </label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="signinPassword" 
              required
            >
            <button 
              type="button" 
              class="toggle-password"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn">
          <i class="fas fa-sign-in-alt"></i>
          Sign In
        </button>
      </form>
    </div>
  </div>

  <!-- Sign Up Modal -->
  <div v-if="showSignup" class="overlay" @click.self="showSignup = false">
    <div class="modal">
      <div class="modal-header">
        <h2>Create Account</h2>
        <button class="close-btn" @click="showSignup = false">×</button>
      </div>
      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label for="name">
            <i class="fas fa-user"></i>
            Name
          </label>
          <input type="text" id="name" v-model="signupName" required>
        </div>
        <div class="input-group">
          <label for="signup-email">
            <i class="fas fa-envelope"></i>
            Email
          </label>
          <input type="email" id="signup-email" v-model="signupEmail" required>
        </div>
        <div class="input-group">
          <label for="signup-password">
            <i class="fas fa-lock"></i>
            Password
          </label>
          <div class="password-input">
            <input 
              :type="showSignupPassword ? 'text' : 'password'" 
              id="signup-password" 
              v-model="signupPassword" 
              required
            >
            <button 
              type="button" 
              class="toggle-password"
              @click="showSignupPassword = !showSignupPassword"
            >
              <i :class="showSignupPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn">
          <i class="fas fa-user-plus"></i>
          Create Account
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const showSignin = ref(false);
const showSignup = ref(false);
const showPassword = ref(false);
const showSignupPassword = ref(false);

const signinEmail = ref('');
const signinPassword = ref('');
const signupName = ref('');
const signupEmail = ref('');
const signupPassword = ref('');

const handleSignin = () => {
  isLoggedIn.value = true;
  showSignin.value = false;
};

const handleSignup = () => {
  isLoggedIn.value = true;
  showSignup.value = false;
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0.75rem 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  
  img {
    height: 1.75rem;
    margin-right: 0.5rem;
  }
}

.nav-buttons {
  display: flex;
  gap: 0.75rem;
}

.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--primary-color);
}

.modal {
  background: var(--bg-secondary);
  padding: 0;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);

    h2 {
      margin: 0;
      color: var(--text-primary);
    }

    .close-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
      
      &:hover {
        color: var(--text-primary);
      }
    }
  }

  form {
    padding: 1.5rem;
  }
}

.input-group {
  margin-bottom: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    
    i {
      color: var(--text-secondary);
    }
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.95rem;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  .password-input {
    position: relative;
    
    .toggle-password {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 0;
      
      &:hover {
        color: var(--text-primary);
      }
    }
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
  
  i {
    font-size: 1rem;
  }
}
</style>