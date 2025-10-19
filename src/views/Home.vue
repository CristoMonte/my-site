<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-subtitle">{{ t('home.hero.subtitle') }}</p>
        <h1 class="hero-title">{{ t('home.hero.title') }}</h1>
        <div class="hero-buttons">
          <button class="btn-primary">
            {{ t('home.hero.smartDistribution') }}
          </button>
          <button class="btn-secondary">
            {{ t('home.hero.quality') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section">
      <div class="container">
        <h2 class="value-title">
          {{ t('home.value.title1') }} 
          <span class="highlight">{{ t('home.value.title2') }}</span> 
          {{ t('home.value.title3') }} 
          <span class="highlight">{{ t('home.value.title4') }}</span>
        </h2>
        <div class="divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
        </div>
        
        <div class="features-grid">
          <!-- Feature 1 -->
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <h3 class="feature-title">{{ t('home.features.costDown.title') }}</h3>
            <p class="feature-desc">{{ t('home.features.costDown.desc') }}</p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
              </svg>
            </div>
            <h3 class="feature-title">{{ t('home.features.spotBuy.title') }}</h3>
            <p class="feature-desc">{{ t('home.features.spotBuy.desc') }}</p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card">
            <div class="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="feature-title">{{ t('home.features.streamlining.title') }}</h3>
            <p class="feature-desc">{{ t('home.features.streamlining.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="container">
        <div class="video-container">
          <img :src="placeholderImage" alt="Company Video">
        </div>
      </div>
    </section>

    <!-- Advantage Section -->
    <section class="advantage-section">
      <div class="container">
        <h2 class="section-title">{{ t('home.advantages.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
        </div>

        <div class="advantages-grid">
          <!-- Advantage 1 -->
          <div class="advantage-item">
            <div class="advantage-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="advantage-content">
              <h3 class="advantage-title">{{ t('home.advantages.efficient.title') }}</h3>
              <p class="advantage-desc">{{ t('home.advantages.efficient.desc') }}</p>
            </div>
          </div>

          <!-- Advantage 2 -->
          <div class="advantage-item">
            <div class="advantage-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="advantage-content">
              <h3 class="advantage-title">{{ t('home.advantages.quality.title') }}</h3>
              <p class="advantage-desc">{{ t('home.advantages.quality.desc') }}</p>
            </div>
          </div>

          <!-- Advantage 3 -->
          <div class="advantage-item">
            <div class="advantage-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="advantage-content">
              <h3 class="advantage-title">{{ t('home.advantages.service.title') }}</h3>
              <p class="advantage-desc">{{ t('home.advantages.service.desc') }}</p>
            </div>
          </div>

          <!-- Advantage 4 -->
          <div class="advantage-item">
            <div class="advantage-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
            </div>
            <div class="advantage-content">
              <h3 class="advantage-title">{{ t('home.advantages.experience.title') }}</h3>
              <p class="advantage-desc">{{ t('home.advantages.experience.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
            </svg>
            <div class="stat-number">2370</div>
            <div class="stat-label">{{ t('home.stats.brands') }}</div>
          </div>
          <div class="stat-item">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <div class="stat-number">1352</div>
            <div class="stat-label">{{ t('home.stats.customers') }}</div>
          </div>
          <div class="stat-item">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
            <div class="stat-number">11323</div>
            <div class="stat-label">{{ t('home.stats.suppliers') }}</div>
          </div>
          <div class="stat-item">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <div class="stat-number">35528</div>
            <div class="stat-label">{{ t('home.stats.parts') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us & FAQ Section -->
    <section class="about-faq-section">
      <div class="container">
        <div class="about-faq-grid">
          <!-- About Us -->
          <div class="about-column">
            <h2 class="section-subtitle">{{ t('home.about.title') }}</h2>
            <h3 class="about-subtitle">{{ t('home.about.subtitle') }}</h3>
            <p class="about-desc">{{ t('home.about.desc') }}</p>
            <button class="btn-primary">{{ t('home.about.button') }}</button>
          </div>

          <!-- FAQ -->
          <div class="faq-column">
            <h2 class="section-subtitle">{{ t('home.faq.title') }}</h2>
            <div class="faq-list">
              <div class="faq-item">
                <button class="faq-question" @click="toggleFaq(0)">
                  <span>{{ t('home.faq.q1.question') }}</span>
                  <svg :class="{ 'rotate': openFaq === 0 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-show="openFaq === 0" class="faq-answer">
                  {{ t('home.faq.q1.answer') }}
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" @click="toggleFaq(1)">
                  <span>{{ t('home.faq.q2.question') }}</span>
                  <svg :class="{ 'rotate': openFaq === 1 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-show="openFaq === 1" class="faq-answer">
                  {{ t('home.faq.q2.answer') }}
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question" @click="toggleFaq(2)">
                  <span>{{ t('home.faq.q3.question') }}</span>
                  <svg :class="{ 'rotate': openFaq === 2 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-show="openFaq === 2" class="faq-answer">
                  {{ t('home.faq.q3.answer') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">{{ t('home.news.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
        </div>

        <div class="news-grid">
          <div class="news-card">
            <img :src="placeholderImage" alt="News 1">
            <div class="news-content">
              <p>{{ t('home.news.item1') }}</p>
            </div>
          </div>

          <div class="news-card">
            <img :src="placeholderImage" alt="News 2">
            <div class="news-content">
              <p>{{ t('home.news.item2') }}</p>
            </div>
          </div>

          <div class="news-card">
            <img :src="placeholderImage" alt="News 3">
            <div class="news-content">
              <p>{{ t('home.news.item3') }}</p>
            </div>
          </div>
        </div>

        <div class="news-button-container">
          <button class="btn-primary btn-with-icon">
            {{ t('home.news.button') }}
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const openFaq = ref(null)

const placeholderImage = computed(() => {
  // Import from views folder
  return new URL('./placeholder.jpeg', import.meta.url).href
})

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.home-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('./placeholder.jpeg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 58, 95, 0.8);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 0.875rem;
  letter-spacing: 0.3em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background-color: #3b5998;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.875rem;
}

.btn-primary:hover {
  background-color: #2d4373;
}

.btn-secondary {
  background-color: transparent;
  color: white;
  padding: 0.75rem 2rem;
  border: 2px solid white;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;
}

.btn-secondary:hover {
  background-color: white;
  color: #1e3a5f;
}

/* Value Section */
.value-section {
  padding: 4rem 0;
  background-color: white;
}

.value-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e3a5f;
}

.value-title .highlight {
  color: #3b5998;
  font-weight: bold;
}

.divider {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
}

.divider-line {
  width: 128px;
  height: 2px;
  background: linear-gradient(to right, transparent, #3b5998, transparent);
  position: relative;
}

.divider-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background-color: #3b5998;
  border-radius: 50%;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  text-align: center;
}

.feature-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-icon svg {
  width: 64px;
  height: 64px;
  color: #3b5998;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #1e3a5f;
}

.feature-desc {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Video Section */
.video-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background-color: #d1d5db;
  border-radius: 8px;
  overflow: hidden;
}

.video-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Advantage Section */
.advantage-section {
  padding: 4rem 0;
  background-color: white;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1e3a5f;
  font-weight: bold;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.advantage-item {
  display: flex;
  gap: 1rem;
}

.advantage-icon {
  flex-shrink: 0;
}

.advantage-icon svg {
  width: 48px;
  height: 48px;
  color: #3b5998;
}

.advantage-content {
  flex: 1;
}

.advantage-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e3a5f;
}

.advantage-desc {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Statistics Section */
.stats-section {
  padding: 3rem 0;
  background-color: #4a5568;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
  color: white;
}

.stat-item svg {
  width: 48px;
  height: 48px;
  margin: 0 auto 0.75rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* About & FAQ Section */
.about-faq-section {
  padding: 4rem 0;
  background-color: white;
}

.about-faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1e3a5f;
}

.about-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #3b5998;
}

.about-desc {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #374151;
  font-size: 0.9375rem;
}

.faq-question svg {
  width: 20px;
  height: 20px;
  color: #3b5998;
  transition: transform 0.3s;
  flex-shrink: 0;
  margin-left: 0.5rem;
}

.faq-question svg.rotate {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
}

/* News Section */
.news-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.news-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.news-card img {
  width: 100%;
  height: 192px;
  object-fit: cover;
}

.news-content {
  padding: 1rem;
}

.news-content p {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
}

.news-button-container {
  text-align: center;
}

.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-with-icon svg {
  width: 20px;
  height: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .value-title {
    font-size: 1.5rem;
  }

  .features-grid,
  .advantages-grid,
  .about-faq-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-buttons {
    flex-direction: column;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
