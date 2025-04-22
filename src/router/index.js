import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/Pages/LandingPage.vue'
import ContactPage from '@/Pages/ContactPage.vue'
import GalleryPage from '@/Pages/GalleryPage.vue'
import AboutPage from '@/Pages/AboutPage.vue'
import ImpactPage from '@/Pages/ImpactPage.vue'
import InvolvedPage from '@/Pages/InvolvedPage.vue'
import BlogPage from '@/Pages/BlogPage.vue'
import DonationPage from '@/Pages/DonationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/impact',
      name: 'impact',
      component: ImpactPage,
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: InvolvedPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonationPage,
    },
  ],
})

export default router
