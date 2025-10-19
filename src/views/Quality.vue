<template>
  <div class="quality-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ t('quality.hero.title') }}</h1>
      </div>
    </section>

    <!-- Quality Diagram Section -->
    <section class="diagram-section">
      <div class="container">
        <div class="quality-diagram">
          <div class="quality-diagram-image">
            <img src="./placeholder.jpeg" alt="Quality Diagram" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          
          <!-- Labels -->
          <!-- <div class="diagram-labels">
            <div class="label label-top-left">{{ t('quality.diagram.system1') }}</div>
            <div class="label label-top-right">{{ t('quality.diagram.system2') }}</div>
            <div class="label label-bottom-right">{{ t('quality.diagram.system4') }}</div>
            <div class="label label-bottom-left">{{ t('quality.diagram.system3') }}</div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="resources-section">
      <div class="container">
        <h2 class="section-title">
          {{ t('quality.resources.title1') }} <span class="highlight">{{ t('quality.resources.title2') }}</span>
        </h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <div class="resources-grid">
          <!-- Original Source -->
          <div class="resource-card">
            <div class="resource-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="32" r="24"/>
                <path d="M20 32 L28 40 L44 24"/>
                <circle cx="32" cy="16" r="3"/>
                <circle cx="16" cy="32" r="3"/>
                <circle cx="48" cy="32" r="3"/>
                <circle cx="32" cy="48" r="3"/>
              </svg>
            </div>
            <h3>{{ t('quality.resources.original.title') }}</h3>
            <p>{{ t('quality.resources.original.desc') }}</p>
          </div>

          <!-- Traceable -->
          <div class="resource-card">
            <div class="resource-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="32" cy="24" r="8"/>
                <circle cx="32" cy="32" r="16"/>
                <circle cx="32" cy="32" r="24"/>
              </svg>
            </div>
            <h3>{{ t('quality.resources.traceable.title') }}</h3>
            <p>{{ t('quality.resources.traceable.desc') }}</p>
          </div>

          <!-- Lab Test -->
          <div class="resource-card">
            <div class="resource-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 12 L20 32 L16 48 L48 48 L44 32 L44 12 Z"/>
                <circle cx="32" cy="28" r="6"/>
                <line x1="24" y1="20" x2="40" y2="20"/>
              </svg>
            </div>
            <h3>{{ t('quality.resources.lab.title') }}</h3>
            <p>{{ t('quality.resources.lab.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Comment Section -->
    <section class="testimonial-section">
      <div class="testimonial-bg">
        <div class="testimonial-overlay"></div>
      </div>
      <div class="container">
        <h2 class="testimonial-title">
          {{ t('quality.testimonial.title1') }} <span class="highlight">{{ t('quality.testimonial.title2') }}</span>
        </h2>
        <div class="divider">
          <div class="divider-line-white"></div>
        </div>

        <div class="testimonial-content">
          <p class="testimonial-quote">{{ t('quality.testimonial.quote') }}</p>
          
          <div class="testimonial-indicators">
            <button 
              v-for="i in 3" 
              :key="i" 
              :class="['indicator', { active: activeTestimonial === i }]"
              @click="activeTestimonial = i"
            >
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeTestimonial = ref(2)
</script>

<style scoped>
.quality-page {
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

/* Diagram Section */
.diagram-section {
  padding: 5rem 0;
  background-color: white;
}

.quality-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quality-diagram-image {
  height: 480px;
  width: 480px;
  object-fit: cover;
  border-radius: 100%;
  overflow: hidden;
}

.diagram-labels {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.label {
  position: absolute;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  max-width: 120px;
  line-height: 1.3;
  text-transform: capitalize;
}

.label-top-left {
  top: 20%;
  left: 15%;
  transform: rotate(-25deg);
}

.label-top-right {
  top: 20%;
  right: 15%;
  transform: rotate(25deg);
}

.label-bottom-right {
  bottom: 20%;
  right: 12%;
  transform: rotate(-25deg);
}

.label-bottom-left {
  bottom: 25%;
  left: 15%;
  transform: rotate(25deg);
}

/* Resources Section */
.resources-section {
  padding: 5rem 0;
  background-color: #f9fafb;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #1e3a5f;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-title .highlight {
  color: #3b5998;
  font-weight: bold;
}

.divider {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.divider-line {
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, transparent, #3b5998, transparent);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
}

.resource-card {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: #d1d5db;
}

.resource-icon svg {
  width: 100%;
  height: 100%;
}

.resource-card h3 {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1e3a5f;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.resource-card p {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Testimonial Section */
.testimonial-section {
  position: relative;
  padding: 5rem 0;
  color: white;
}

.testimonial-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('./placeholder.jpeg');
  background-size: cover;
  background-position: center;
}

.testimonial-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 58, 95, 0.85);
}

.testimonial-section .container {
  position: relative;
  z-index: 10;
}

.testimonial-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.testimonial-title .highlight {
  color: white;
  font-weight: bold;
}

.divider-line-white {
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, transparent, white, transparent);
}

.testimonial-content {
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 3rem;
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.indicator {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  background-size: cover;
  background-position: center;
}

.indicator:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.5);
}

.indicator.active {
  background-color: #3b5998;
  border-color: #3b5998;
  transform: scale(1.15);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .label {
    font-size: 0.625rem;
    max-width: 100px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .testimonial-title {
    font-size: 1.5rem;
  }

  .quality-diagram {
    max-width: 400px;
  }

  .testimonial-quote {
    font-size: 1rem;
  }

  .indicator {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .quality-diagram {
    max-width: 300px;
  }

  .label {
    font-size: 0.5rem;
    max-width: 80px;
  }

  .testimonial-quote {
    font-size: 0.9375rem;
  }

  .indicator {
    width: 50px;
    height: 50px;
  }
}
</style>
