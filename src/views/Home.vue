<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Master Your Coding Skills</h1>
        <p class="hero-subtitle">Join millions of developers mastering algorithms and data structures</p>
        <button class="btn btn-large" @click="showSignup = true">Get Started</button>
      </div>
    </section>

    <section class="features container">
      <div class="feature-grid">
        <div class="feature">
          <div class="icon">📈</div>
          <h3>Progressive Learning</h3>
          <p>Start with basics and advance to complex algorithms</p>
        </div>
        <div class="feature">
          <div class="icon">🎯</div>
          <h3>Daily Challenges</h3>
          <p>Consistent practice with curated problems</p>
        </div>
        <div class="feature">
          <div class="icon">🌐</div>
          <h3>Multiple Languages</h3>
          <p>Code in your preferred programming language</p>
        </div>
      </div>
    </section>

    <section class="challenges container">
      <h2>Choose Your Path</h2>
      <div class="challenge-grid">
        <ChallengeCard 
          v-for="days in [10, 20, 30, 40]" 
          :key="days"
          :days="days"
          @select="selectChallenge"
        />
      </div>
    </section>
  </div>

  <!-- Language Selection Modal -->
  <div v-if="showLanguageModal" class="overlay" @click.self="showLanguageModal = false">
    <div class="modal language-modal">
      <h2>Choose Programming Language</h2>
      <div class="language-grid">
        <button 
          v-for="lang in languages" 
          :key="lang.name"
          class="language-btn"
          @click="startChallenge(lang.name)"
        >
          <span class="lang-icon">{{ lang.icon }}</span>
          <span class="lang-name">{{ lang.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ChallengeCard from '../components/ChallengeCard.vue';

const router = useRouter();
const showLanguageModal = ref(false);
const selectedDays = ref(null);

const languages = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'C++', icon: '⚡' }
];

const selectChallenge = (days) => {
  selectedDays.value = days;
  showLanguageModal.value = true;
};

const startChallenge = (language) => {
  showLanguageModal.value = false;
  router.push(`/challenge/${selectedDays.value}/${language.toLowerCase()}`);
};
</script>

<style lang="scss" scoped>
.hero {
  background: var(--bg-secondary);
  padding: 8rem 0;
  text-align: center;
  border-bottom: 1px solid var(--border-color);

  h1 {
    font-size: var(--font-size-4xl);
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, var(--primary-color), #4CAF50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  .hero-subtitle {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
  }

  .btn-large {
    font-size: var(--font-size-lg);
    padding: 0.8em 2em;
  }
}

.features {
  padding: 6rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature {
  padding: 2.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
  }
}

.challenges {
  padding: 6rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: var(--font-size-3xl);
  }
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.language-modal {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;

  h2 {
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .language-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .language-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }

    .lang-icon {
      font-size: 2.5rem;
    }

    .lang-name {
      color: var(--text-primary);
      font-size: var(--font-size-sm);
      font-weight: 500;
    }
  }
}
</style>