<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="" alt="SIGMA" />
      </div>
      
      <nav class="nav">
        <router-link to="/" :class="{ active: $route.path === '/' }">
          {{ t('nav.home') }}
        </router-link>
        <router-link to="/about" :class="{ active: $route.path === '/about' }">
          {{ t('nav.about') }}
        </router-link>
        <router-link to="/service" :class="{ active: $route.path === '/service' }">
          {{ t('nav.service') }}
        </router-link>
        <router-link to="/quality" :class="{ active: $route.path === '/quality' }">
          {{ t('nav.quality') }}
        </router-link>
        <router-link to="/contact" :class="{ active: $route.path === '/contact' }">
          {{ t('nav.contact') }}
        </router-link>
        
        <div class="language-switcher">
          <button @click="toggleLanguage" class="lang-btn">
            {{ currentLang === 'en' ? '🇺🇸' : '🇨🇳' }}
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const currentLang = computed(() => locale.value)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3a5f;
  letter-spacing: 0.1em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav a {
  text-decoration: none;
  color: #374151;
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s;
  position: relative;
  padding: 0.5rem 0;
}

.nav a:hover,
.nav a.active {
  color: #3b5998;
}

.nav a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #3b5998;
}

.language-switcher {
  margin-left: 0.5rem;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.lang-btn:hover {
  border-color: #3b5998;
  box-shadow: 0 1px 2px 0 rgba(59, 89, 152, 0.1);
}

@media (max-width: 1024px) {
  .nav {
    gap: 1rem;
  }
  
  .nav a {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>