import { ref, onMounted } from 'vue'
import axiosInstance from '@/axiosconfig/axiosInstance'

export function useMembers() {
  const teamMembers = ref([])

  const fetchMembers = async () => {
    try {
      const response = await axiosInstance.get('/members/') // Use the axiosInstance, the base URL is handled by the instance
      teamMembers.value = response.data
    } catch (error) {
      console.error('Error fetching team members:', error)
      // Optional: Handle error in the UI or retry mechanism
    }
  }

  onMounted(fetchMembers)

  return {
    teamMembers,
  }
}
