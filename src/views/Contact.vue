<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ t('contact.hero.title') }}</h1>
      </div>
    </section>

    <!-- Offices Title Section -->
    <section class="offices-title-section">
      <div class="container">
        <h2 class="section-title">
          {{ t('contact.offices.title') }} <span class="highlight">{{ t('contact.offices.services') }}</span>
        </h2>
        <div class="divider">
          <div class="divider-line"></div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="locations-section">
      <!-- Hongkong -->
      <div class="location-item">
        <div class="location-info left">
          <h3>{{ t('contact.locations.hongkong.title') }}</h3>
          <p>{{ t('contact.locations.hongkong.address') }}</p>
          <p>{{ t('contact.locations.hongkong.contact') }}</p>
          <p>{{ t('contact.locations.hongkong.tel') }}</p>
          <p>{{ t('contact.locations.hongkong.email') }}</p>
        </div>
        <div class="location-image right">
          <img :src="placeholderImage" alt="Hongkong">
        </div>
      </div>

      <!-- Shenzhen -->
      <div class="location-item reverse">
        <div class="location-image left">
          <img :src="placeholderImage" alt="Shenzhen">
        </div>
        <div class="location-info right">
          <h3>{{ t('contact.locations.shenzhen.title') }}</h3>
          <p>{{ t('contact.locations.shenzhen.address') }}</p>
          <p>{{ t('contact.locations.shenzhen.contact') }}</p>
          <p>{{ t('contact.locations.shenzhen.email') }}</p>
        </div>
      </div>

      <!-- Suzhou -->
      <div class="location-item">
        <div class="location-info left">
          <h3>{{ t('contact.locations.suzhou.title') }}</h3>
          <p>{{ t('contact.locations.suzhou.address') }}</p>
          <p>{{ t('contact.locations.suzhou.contact') }}</p>
          <p>{{ t('contact.locations.suzhou.tel') }}</p>
          <p>{{ t('contact.locations.suzhou.email') }}</p>
        </div>
        <div class="location-image right">
          <img :src="placeholderImage" alt="Suzhou">
        </div>
      </div>

      <!-- Singapore -->
      <div class="location-item reverse">
        <div class="location-image left">
          <img :src="placeholderImage" alt="Singapore">
        </div>
        <div class="location-info right">
          <h3>{{ t('contact.locations.singapore.title') }}</h3>
          <p>{{ t('contact.locations.singapore.address') }}</p>
          <p>{{ t('contact.locations.singapore.contact') }}</p>
          <p>{{ t('contact.locations.singapore.tel') }}</p>
          <p>{{ t('contact.locations.singapore.email') }}</p>
        </div>
      </div>

      <!-- USA -->
      <div class="location-item">
        <div class="location-info left">
          <h3>{{ t('contact.locations.usa.title') }}</h3>
          <p>{{ t('contact.locations.usa.address') }}</p>
          <p>{{ t('contact.locations.usa.contact') }}</p>
          <p>{{ t('contact.locations.usa.email') }}</p>
        </div>
        <div class="location-image right">
          <img :src="placeholderImage" alt="USA">
        </div>
      </div>
    </section>

    <!-- Contact Form and Social Section -->
    <section class="form-social-section">
      <div class="container">
        <div class="form-social-grid">
          <!-- Contact Form -->
          <div class="form-column">
            <h2 class="form-title">{{ t('contact.form.title') }}</h2>
            <div class="form-divider">
              <div class="divider-line"></div>
            </div>
            <p class="form-subtitle">{{ t('contact.form.subtitle') }}</p>

            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <input
                  type="text"
                  v-model="formData.name"
                  :placeholder="t('contact.form.namePlaceholder')"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="email"
                  v-model="formData.email"
                  :placeholder="t('contact.form.emailPlaceholder')"
                  required
                />
              </div>

              <div class="form-group">
                <textarea
                  v-model="formData.message"
                  :placeholder="t('contact.form.messagePlaceholder')"
                  rows="8"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-submit">{{ t('contact.form.submitButton') }}</button>
            </form>
          </div>

          <!-- Social QR Code -->
          <div class="social-column">
            <h2 class="social-title">{{ t('contact.social.title') }}</h2>
            <div class="social-divider">
              <div class="divider-line"></div>
            </div>
            <div class="qr-code">
              <qrcode-vue :value="qrValue" :size="size" level="H" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'

const { t } = useI18n()

const qrValue = ref('https://example.com')
const size = ref(200)

const placeholderImage = computed(() => {
  return new URL('./placeholder.jpeg', import.meta.url).href
})

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  alert('Message sent successfully!')
  formData.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-page {
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

/* Offices Title Section */
.offices-title-section {
  padding: 4rem 0 2rem;
  background-color: white;
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
  color: #1e3a5f;
  font-weight: 600;
}

.divider {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.divider-line {
  width: 300px;
  height: 2px;
  background: linear-gradient(to right, transparent, #d1d5db, transparent);
}

/* Locations Section */
.locations-section {
  background-color: white;
}

.location-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.location-item.reverse {
  direction: ltr;
}

.location-info {
  background-color: #5bc5d4;
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.location-info p {
  margin-bottom: 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.6;
}

.location-image {
  overflow: hidden;
  height: 300px;
}

.location-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.left {
  grid-column: 1;
}

.right {
  grid-column: 2;
}

/* Form and Social Section */
.form-social-section {
  padding: 4rem 0;
  background-color: white;
}

.form-social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.form-title,
.social-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e3a5f;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-divider,
.social-divider {
  margin-bottom: 1.5rem;
}

.form-divider .divider-line,
.social-divider .divider-line {
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, #d1d5db, transparent);
}

.form-subtitle {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  background-color: #f9fafb;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b5998;
  background-color: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;
  letter-spacing: 0.1em;
}

.btn-submit:hover {
  background-color: #2d4373;
}

/* QR Code Section */
.qr-code {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.qr-code img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  background-color: white;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .location-item {
    grid-template-columns: 1fr;
  }

  .location-item.reverse .location-info {
    order: 1;
  }

  .location-item.reverse .location-image {
    order: 2;
  }

  .left,
  .right {
    grid-column: 1;
  }

  .form-social-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .location-info {
    padding: 2rem;
  }

  .location-info h3 {
    font-size: 1.25rem;
  }

  .location-info p {
    font-size: 0.875rem;
  }

  .qr-code img {
    max-width: 250px;
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

  .location-info {
    padding: 1.5rem;
  }

  .form-social-grid {
    gap: 2rem;
  }

  .qr-code img {
    max-width: 200px;
  }
}
</style>
