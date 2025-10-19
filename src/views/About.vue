<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ t('about.hero.title') }}</h1>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section">
      <div class="container">
        <h2 class="section-title">{{ t('about.intro.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>
        <p class="intro-text">{{ t('about.intro.desc') }}</p>
      </div>
    </section>

    <!-- Industries We Serve -->
    <section class="industries-section">
      <div class="container">
        <h2 class="section-title">{{ t('about.industries.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <div class="industries-grid">
          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="32" r="20"/>
                <circle cx="32" cy="32" r="12"/>
                <line x1="32" y1="12" x2="32" y2="20"/>
                <line x1="32" y1="44" x2="32" y2="52"/>
                <line x1="12" y1="32" x2="20" y2="32"/>
                <line x1="44" y1="32" x2="52" y2="32"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.auto') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 32 L32 16 L48 32 L32 48 Z"/>
                <circle cx="32" cy="32" r="6"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.networking') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M32 12 L42 28 L32 44 L22 28 Z"/>
                <circle cx="32" cy="28" r="4"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.precision') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="16" y="16" width="32" height="32" rx="4"/>
                <line x1="24" y1="26" x2="40" y2="26"/>
                <line x1="24" y1="32" x2="40" y2="32"/>
                <line x1="24" y1="38" x2="40" y2="38"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.industrial') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="32" r="16"/>
                <path d="M32 16 L32 32 L42 38"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.power') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="24" r="8"/>
                <path d="M20 40 Q32 35 44 40"/>
                <circle cx="24" cy="45" r="3"/>
                <circle cx="40" cy="45" r="3"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.consumer') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M32 12 L32 28"/>
                <circle cx="32" cy="36" r="12"/>
                <line x1="24" y1="36" x2="40" y2="36"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.medical') }}</h3>
          </div>

          <div class="industry-item">
            <div class="industry-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="32" r="4"/>
                <path d="M32 16 L32 28"/>
                <path d="M32 36 L32 48"/>
                <path d="M16 32 L28 32"/>
                <path d="M36 32 L48 32"/>
                <path d="M20 20 L28 28"/>
                <path d="M36 36 L44 44"/>
                <path d="M44 20 L36 28"/>
                <path d="M28 36 L20 44"/>
              </svg>
            </div>
            <h3>{{ t('about.industries.telecom') }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">{{ t('about.timeline.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year-circle">2007</div>
            </div>
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2007.title') }}</h3>
              <p>{{ t('about.timeline.year2007.desc') }}</p>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2008.title') }}</h3>
              <ul>
                <li v-for="(item, index) in tm('about.timeline.year2008.items')" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="timeline-year">
              <div class="year-circle">2008-2011</div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year-circle">2012-2014</div>
            </div>
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2012.title') }}</h3>
              <ul>
                <li v-for="(item, index) in tm('about.timeline.year2012.items')" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2016.title') }}</h3>
              <ul>
                <li v-for="(item, index) in tm('about.timeline.year2016.items')" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="timeline-year">
              <div class="year-circle">2016-2017</div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year-circle">2018-2020</div>
            </div>
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2018.title') }}</h3>
              <ul>
                <li v-for="(item, index) in tm('about.timeline.year2018.items')" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content timeline-left">
              <h3>{{ t('about.timeline.year2021.title') }}</h3>
              <ul>
                <li v-for="(item, index) in tm('about.timeline.year2021.items')" :key="index">{{ item }}</li>
              </ul>
            </div>
            <div class="timeline-year">
              <div class="year-circle">2021-2023</div>
            </div>
            <div class="timeline-line"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Honors & Memberships -->
    <section class="honors-section">
      <div class="container">
        <h2 class="section-title">{{ t('about.honors.title') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <div class="honors-grid">
          <div class="honor-item" v-for="i in 7" :key="i">
            <img :src="placeholderImage" alt="Honor certificate">
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section">
      <div class="container">
        <div class="values-layout">
          <div class="values-left">
            <h2 class="section-title-left">{{ t('about.values.title') }}</h2>
            <div class="divider-left">
              <div class="divider-line"></div>
            </div>
            <div class="team-image">
              <img :src="placeholderImage" alt="Team photo">
            </div>
          </div>

          <div class="values-right">
            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="32" cy="32" r="20"/>
                  <path d="M32 20 L38 28 L32 36 L26 28 Z"/>
                </svg>
              </div>
              <div class="value-content">
                <h3>{{ t('about.values.satisfaction.title') }}</h3>
                <p>{{ t('about.values.satisfaction.desc') }}</p>
              </div>
            </div>

            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="32" cy="32" r="16"/>
                  <path d="M32 16 L32 32 L44 38"/>
                </svg>
              </div>
              <div class="value-content">
                <h3>{{ t('about.values.efficient.title') }}</h3>
                <p>{{ t('about.values.efficient.desc') }}</p>
              </div>
            </div>

            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="32" cy="32" r="20"/>
                  <circle cx="32" cy="32" r="12"/>
                  <circle cx="32" cy="32" r="4"/>
                </svg>
              </div>
              <div class="value-content">
                <h3>{{ t('about.values.integrity.title') }}</h3>
                <p>{{ t('about.values.integrity.desc') }}</p>
              </div>
            </div>

            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="24" cy="24" r="6"/>
                  <circle cx="40" cy="24" r="6"/>
                  <circle cx="32" cy="40" r="6"/>
                  <line x1="24" y1="24" x2="32" y2="40"/>
                  <line x1="40" y1="24" x2="32" y2="40"/>
                </svg>
              </div>
              <div class="value-content">
                <h3>{{ t('about.values.teamwork.title') }}</h3>
                <p>{{ t('about.values.teamwork.desc') }}</p>
              </div>
            </div>

            <div class="value-item">
              <div class="value-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M32 12 L32 28"/>
                  <circle cx="32" cy="36" r="12"/>
                  <path d="M26 42 L38 42"/>
                </svg>
              </div>
              <div class="value-content">
                <h3>{{ t('about.values.innovation.title') }}</h3>
                <p>{{ t('about.values.innovation.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const placeholderImage = computed(() => {
  return new URL('./placeholder.jpeg', import.meta.url).href
})
</script>

<style scoped>
.about-page {
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
  height: 300px;
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
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Common Styles */
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a5f;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.divider {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.divider-line {
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, transparent, #3b5998, transparent);
}

/* Intro Section */
.intro-section {
  padding: 4rem 0;
  background-color: white;
}

.intro-text {
  text-align: center;
  color: #4b5563;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9375rem;
}

/* Industries Section */
.industries-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top: 3rem;
}

.industry-item {
  text-align: center;
}

.industry-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  color: #3b5998;
}

.industry-icon svg {
  width: 100%;
  height: 100%;
}

.industry-item h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e3a5f;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Timeline Section */
.timeline-section {
  padding: 4rem 0;
  background-color: white;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 3rem auto 0;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 120px 1fr;
  align-items: center;
  margin-bottom: 3rem;
  min-height: 120px;
}

.timeline-year {
  display: flex;
  justify-content: center;
  z-index: 2;
}

.year-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #3b5998;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: bold;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 2px;
  height: 3rem;
  background-color: #d1d5db;
  transform: translateX(-50%);
}

.timeline-item:last-child .timeline-line {
  display: none;
}

.timeline-content {
  padding: 1rem 2rem;
}

.timeline-left {
  text-align: right;
  grid-column: 1;
  grid-row: 1;
}

.timeline-right {
  text-align: left;
  grid-row: 1;
}

.timeline-content h3 {
  font-size: 1rem;
  color: #1e3a5f;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.timeline-content p {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.timeline-content li {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.timeline-content li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3b5998;
  font-weight: bold;
}

.timeline-right li {
  padding-left: 1rem;
}

.timeline-left li {
  padding-left: 0;
  padding-right: 1rem;
}

.timeline-left li::before {
  left: auto;
  right: 0;
}

/* Honors Section */
.honors-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.honor-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.honor-item img {
  max-width: 100%;
  height: auto;
}

/* Values Section */
.values-section {
  padding: 4rem 0;
  background-color: white;
}

.values-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.values-left {
  position: sticky;
  top: 100px;
}

.section-title-left {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1e3a5f;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.divider-left {
  margin-bottom: 2rem;
}

.divider-left .divider-line {
  width: 150px;
  height: 2px;
  background: linear-gradient(to right, #3b5998, transparent);
}

.team-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.team-image img {
  width: 100%;
  height: auto;
  display: block;
}

.values-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.value-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.value-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  color: #3b5998;
}

.value-icon svg {
  width: 100%;
  height: 100%;
}

.value-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value-content p {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .industries-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .values-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .values-left {
    position: static;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .timeline-year {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 1rem;
  }

  .timeline-content {
    grid-column: 1;
    grid-row: 2;
    text-align: left !important;
    padding: 0;
  }

  .timeline-left,
  .timeline-right {
    grid-column: 1;
  }

  .timeline-left li {
    padding-left: 1rem;
    padding-right: 0;
  }

  .timeline-left li::before {
    left: 0;
    right: auto;
  }

  .timeline-line {
    left: 50px;
  }

  .honors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .industries-grid {
    grid-template-columns: 1fr;
  }

  .honors-grid {
    grid-template-columns: 1fr;
  }

  .value-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
