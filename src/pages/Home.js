import { createHero } from '../components/Hero.js';
import { createAgencies } from '../components/Agencies.js';
import { createProperties } from '../components/Properties.js'; // Note the Capital P
import { createSellingProcess, createTestimonial } from '../components/SellingProcess.js';
import { createWhyChooseUs } from '../components/WhyChooseUs.js';
import { createValues } from '../components/Values.js';
import { createReviews } from '../components/Reviews.js';
import { createFAQ } from '../components/FAQ.js';

export function Home() {
  return `
    <div id="hero-placeholder" class="reveal active">${createHero()}</div>
    <div id="agencies-placeholder" class="reveal">${createAgencies()}</div>
    <div id="properties-placeholder" class="reveal">${createProperties()}</div>
    <div id="selling-process-placeholder" class="reveal">${createSellingProcess()}</div>
    <div id="testimonial-placeholder" class="reveal">${createTestimonial()}</div>
    <div id="why-choose-us-placeholder" class="reveal">${createWhyChooseUs()}</div>
    <div id="values-placeholder" class="reveal">${createValues()}</div>
    <div id="reviews-placeholder" class="reveal">${createReviews()}</div>
    <div id="faq-placeholder" class="reveal">${createFAQ()}</div>
  `;
}