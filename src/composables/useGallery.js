import { ref, onMounted } from 'vue'
import axiosInstance from '@/axiosconfig/axiosInstance'

export function useGallery() {
  const images = ref([])
  const selectedImage = ref(null)

  const fetchImages = async () => {
    try {
      // Axios instance already includes the base URL
      const response = await axiosInstance.get('api/gallery/')
      images.value = response.data
    } catch (error) {
      console.error('Failed to fetch gallery images:', error)
    }
  }

  const openModal = (image) => {
    selectedImage.value = image
  }

  const closeModal = () => {
    selectedImage.value = null
  }

  const getRandomSpan = () => {
    return Math.floor(Math.random() * 2) + 1
  }

  onMounted(() => {
    fetchImages()
  })

  return {
    images,
    selectedImage,
    openModal,
    closeModal,
    getRandomSpan,
  }
}
