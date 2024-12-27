<template>
  <div class="challenge-card" @click="selectChallenge">
    <div class="card-header">
      <h3>{{ days }} Day Challenge</h3>
      <div class="difficulty">
        <span :class="difficultyClass">{{ difficulty }}</span>
      </div>
    </div>
    <p class="description">Master coding concepts through daily practice</p>
    <div class="stats">
      <div class="stat">
        <span class="label">Problems</span>
        <span class="value">{{ days * 3 }}</span>
      </div>
      <div class="stat">
        <span class="label">Success Rate</span>
        <span class="value">98%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  days: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['select']);

const difficulty = computed(() => {
  if (props.days <= 10) return 'Beginner';
  if (props.days <= 20) return 'Intermediate';
  if (props.days <= 30) return 'Advanced';
  return 'Expert';
});

const difficultyClass = computed(() => {
  return `difficulty-${difficulty.value.toLowerCase()}`;
});

const selectChallenge = () => {
  emit('select', props.days);
};
</script>

<style lang="scss" scoped>
.challenge-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--primary-color);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      color: var(--text-primary);
      font-size: 1.25rem;
    }
  }

  .description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
}

.difficulty {
  span {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    
    &.difficulty-beginner { 
      background: rgba(44, 187, 93, 0.1);
      color: var(--success);
    }
    &.difficulty-intermediate { 
      background: rgba(255, 193, 7, 0.1);
      color: var(--warning);
    }
    &.difficulty-advanced { 
      background: rgba(255, 77, 79, 0.1);
      color: var(--danger);
    }
    &.difficulty-expert { 
      background: rgba(114, 46, 209, 0.1);
      color: #9d4edd;
    }
  }
}

.stats {
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .label {
      font-size: 0.85rem;
      color: var(--text-secondary);
    }

    .value {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-primary);
    }
  }
}</style>