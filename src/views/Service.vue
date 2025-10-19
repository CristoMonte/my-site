<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ t('service.hero.title') }}</h1>
      </div>
    </section>

    <!-- Tabs and Content Section -->
    <section class="tabs-section">
      <div class="container">
        <!-- Tabs Navigation -->
        <div class="tabs-nav">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="['tab-button', { active: activeTab === index }]"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Main Content -->
        <div class="main-content content-layout">
          <div class="sidebar">
            <div class="sidebar-item active">
              <h3>{{ t('service.sidebar.inquiry') }}</h3>
            </div>
            <div class="sidebar-item">
              <h3>{{ t('service.sidebar.services') }}</h3>
            </div>
          </div>
          <div class="content-box">
            <p class="content-text">
              Sigma distributes product short after a PCO with all available to supply Sigma offers multi recommendation brands based on your current design, Sigma offers BOM-based supply chain service with support SPEC needs which can integrate into accurately with current project.
            </p>
            </div>
        </div>
      </div>
    </section>

    <!-- Problems Section -->
    <section class="problems-section">
      <div class="container">
        <h2 class="section-title">{{ t('service.phases.title') }}</h2>
        
        <div class="problems-grid">
          <div class="problem-column">
            <div v-for="(problem, index) in tm('service.phases.problems').slice(0, 5)" :key="index" class="problem-item">
              <span class="check-icon">✓</span>
              <span>{{ problem }}</span>
            </div>
          </div>
          <div class="problem-column">
            <div v-for="(problem, index) in tm('service.phases.problems').slice(5)" :key="index" class="problem-item">
              <span class="check-icon">✓</span>
              <span>{{ problem }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions-section">
      <div class="container">
        <h2 class="section-title">{{ t('service.solutions.title') }}</h2>
        
        <div class="solutions-grid">
          <div class="solution-column">
            <div v-for="(item, index) in tm('service.solutions.items').slice(0, 5)" :key="index" class="solution-item">
              <span class="check-icon">✓</span>
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="solution-column">
            <div v-for="(item, index) in tm('service.solutions.items').slice(5)" :key="index" class="solution-item">
              <span class="check-icon">✓</span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Active Components Section -->
    <section class="components-section">
      <div class="container">
        <h2 class="section-title">{{ t('service.components.active') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <!-- Component Categories -->
        <div class="category-tabs">
          <button
            v-for="(category, index) in activeCategories"
            :key="index"
            :class="['category-tab', { active: activeCategory === index }]"
            @click="activeCategory = index"
          >
            {{ category }}
          </button>
        </div>

        <!-- Component Brands Grid -->
        <div class="brands-grid">
          <div v-for="brand in activeBrands" :key="brand" class="brand-item">{{ brand }}</div>
        </div>

        <!-- Navigation -->
        <div class="components-nav">
          <button class="nav-arrow">&lt; MEMORY</button>
          <button class="nav-arrow">DISCRETE COMPONENTS &gt;</button>
        </div>
      </div>
    </section>

    <!-- Passive Components Section -->
    <section class="passive-section">
      <div class="container">
        <h2 class="section-title">{{ t('service.components.passive') }}</h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <!-- Passive Categories -->
        <div class="category-tabs">
          <button
            v-for="(category, index) in passiveCategories"
            :key="index"
            :class="['category-tab', { active: passiveCategory === index }]"
            @click="passiveCategory = index"
          >
            {{ category }}
          </button>
        </div>

        <!-- Passive Brands Grid -->
        <div class="brands-grid">
          <div v-for="brand in passiveBrands" :key="brand" class="brand-item">{{ brand }}</div>
        </div>

        <!-- Navigation -->
        <div class="components-nav">
          <button class="nav-arrow">&lt; CRYSTALS</button>
          <button class="nav-arrow">CAPACITORS/RESISTORS &gt;</button>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="container">
        <h2 class="quote-title">{{ t('service.quote.title') }}</h2>
        <h3 class="quote-subtitle">{{ t('service.quote.subtitle') }}</h3>
        <div class="divider">
          <div class="divider-line"></div>
        </div>

        <div class="steps-grid">
          <div class="step-item">
            <div class="step-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M40 12 L48 20 L40 28 M16 36 L24 44 L16 52 M48 20 L16 44"/>
              </svg>
            </div>
            <p>{{ t('service.quote.steps.step1') }}</p>
          </div>

          <div class="step-item">
            <div class="step-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M12 16 L52 16 L52 48 L12 48 Z M12 16 L32 32 L52 16"/>
              </svg>
            </div>
            <p>{{ t('service.quote.steps.step2') }}</p>
          </div>

          <div class="step-item">
            <div class="step-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <circle cx="32" cy="24" r="8"/>
                <path d="M20 40 Q32 35 44 40 L44 52 L20 52 Z"/>
                <path d="M26 28 L28 32 L22 32 M38 28 L40 32 L34 32"/>
              </svg>
            </div>
            <p>{{ t('service.quote.steps.step3') }}</p>
          </div>

          <div class="step-item">
            <div class="step-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <circle cx="32" cy="32" r="20"/>
                <path d="M32 18 L32 32 L42 38"/>
              </svg>
            </div>
            <p>{{ t('service.quote.steps.step4') }}</p>
          </div>

          <div class="step-item">
            <div class="step-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <rect x="16" y="20" width="32" height="28" rx="2"/>
                <path d="M20 24 L44 24 M20 32 L36 32 M20 40 L32 40"/>
              </svg>
            </div>
            <p>{{ t('service.quote.steps.step5') }}</p>
          </div>
        </div>

        <div class="quote-button-container">
          <button class="btn-quote">{{ t('service.quote.button') }}</button>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">{{ t('service.contact.title') }}</h2>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <input
                type="text"
                v-model="formData.name"
                :placeholder="t('service.contact.namePlaceholder')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                v-model="formData.email"
                :placeholder="t('service.contact.emailPlaceholder')"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <textarea
              v-model="formData.message"
              :placeholder="t('service.contact.messagePlaceholder')"
              rows="6"
              required
            ></textarea>
          </div>

          <div class="form-button-container">
            <button type="submit" class="btn-submit">{{ t('service.contact.sendButton') }}</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// Tabs
const activeTab = ref(0)
const tabs = computed(() => [
  t('service.tabs.newProject'),
  t('service.tabs.riskyBid'),
  t('service.tabs.massProduction'),
  t('service.tabs.lastOrder'),
  t('service.tabs.projectEnds')
])

// Active Components
const activeCategory = ref(0)
const activeCategories = computed(() => [
  'IC',
  t('service.components.discrete'),
  t('service.components.memory')
])

const activeBrands = ref([
  'ADI', 'Allegro', 'Altera', 'Broadcom',
  'CXMT', 'Catalyst', 'China Logic', 'Macron',
  'Freescale', 'Infineon', 'IDT', 'Infineas',
  'Lattice', 'Linear', 'Linear Core', 'Intel',
  'Macroblock', 'Micrec', 'New Gate', 'MSL',
  'ON Semi', 'Richtek', 'Rohm', 'NXP',
  'Ritek', 'Sanken', 'Seiko', 'STML',
  'Sharp', 'Micron', 'ST', 'Texas',
  'Toshiba'
])

// Passive Components
const passiveCategory = ref(0)
const passiveCategories = computed(() => [
  t('service.components.capacitors'),
  t('service.components.connectors'),
  t('service.components.crystals'),
  t('service.components.relays'),
  t('service.components.switches'),
  t('service.components.inductors')
])

const passiveBrands = ref([
  'AVX', 'Becombong', 'Bourns', 'Epcos',
  'Johanson', 'Kemet', 'Elta', 'Keymin',
  'Littelfuse', 'Murata', 'NEC', 'Nichicon',
  'Panasonic', 'Rubycon', 'Beyoung', 'Samsung',
  'Taiyo', 'Taiwan', 'Wurth', 'Targy-Tou',
  'Vishay', 'TDK', 'ABI', 'Vishay',
  'YEON', 'Yageo'
])

// Form
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  // Add form submission logic here
  alert('Message sent successfully!')
  formData.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.service-page {
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

/* Tabs Section */
.tabs-section {
  background-color: white;
  padding: 0 0 3rem 0;
}

.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 0;
  padding: 0;
}

.tab-button {
  flex: 1;
  max-width: 200px;
  padding: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 0.05em;
}

.tab-button:hover {
  background-color: #e5e7eb;
}

.tab-button.active {
  background-color: white;
  color: #1e3a5f;
  border-bottom-color: #3b5998;
}

/* Content Layout */
.content-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  margin-top: 2rem;
  height: 130px;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.sidebar-item {
  background-color: #4a5568;
  padding: 1.5rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #3b5998;

  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
}

.sidebar-item h3 {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Main Content */
.content-box {
  background-color: #f9fafb;
  padding: 0.60rem;
  border-radius: 4px;
}

.content-text {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
}

.content-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: #3b5998;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #2d4373;
  text-decoration: underline;
}

/* Problems & Solutions Sections */
.problems-section,
.solutions-section {
  padding: 3rem 0;
}

.problems-section {
  background-color: #f3f4f6;
}

.solutions-section {
  background-color: white;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3a5f;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.problems-grid,
.solutions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.problem-column,
.solution-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.problem-item,
.solution-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #374151;
  font-size: 0.9375rem;
}

.check-icon {
  color: #3b5998;
  font-weight: bold;
  flex-shrink: 0;
}

/* Components Sections */
.components-section,
.passive-section {
  padding: 3rem 0;
}

.components-section {
  background-color: white;
}

.passive-section {
  background-color: #f9fafb;
}

.divider {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.divider-line {
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, transparent, #3b5998, transparent);
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-tab:hover {
  border-color: #3b5998;
  color: #3b5998;
}

.category-tab.active {
  background-color: #3b5998;
  border-color: #3b5998;
  color: white;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.brand-item {
  text-align: center;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  color: #374151;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.passive-section .brand-item {
  background-color: #f9fafb;
}

.brand-item:hover {
  border-color: #3b5998;
  color: #3b5998;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(59, 89, 152, 0.1);
}

.components-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-arrow {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: #3b5998;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-arrow:hover {
  color: #2d4373;
  text-decoration: underline;
}

/* Quote Section */
.quote-section {
  padding: 4rem 0;
  background-color: white;
  text-align: center;
}

.quote-title {
  font-size: 1.75rem;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.quote-subtitle {
  font-size: 1.5rem;
  color: #3b5998;
  font-weight: bold;
  margin-bottom: 2rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.step-item {
  text-align: center;
}

.step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  color: #3b5998;
}

.step-icon svg {
  width: 100%;
  height: 100%;
}

.step-item p {
  color: #374151;
  font-size: 0.8125rem;
  line-height: 1.5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.quote-button-container {
  margin-top: 2rem;
}

.btn-quote {
  padding: 1rem 3rem;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;
  letter-spacing: 0.05em;
}

.btn-quote:hover {
  background-color: #2d4373;
}

/* Contact Section */
.contact-section {
  padding: 3rem 0 4rem;
  background-color: #f9fafb;
}

.contact-form {
  max-width: 800px;
  margin: 2rem auto 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  width: 100%;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.9375rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b5998;
}

.form-group textarea {
  resize: vertical;
}

.form-button-container {
  text-align: center;
  margin-top: 2rem;
}

.btn-submit {
  padding: 1rem 4rem;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;
  letter-spacing: 0.05em;
}

.btn-submit:hover {
  background-color: #2d4373;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    flex-direction: row;
  }

  .problems-grid,
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .brands-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .tabs-nav {
    flex-wrap: wrap;
  }

  .tab-button {
    font-size: 0.625rem;
    padding: 0.75rem 0.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .category-tabs {
    gap: 0.5rem;
  }

  .category-tab {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .sidebar {
    flex-direction: column;
  }

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .components-nav {
    flex-direction: column;
  }
}
</style>
