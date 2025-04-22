import { ref } from 'vue'
import axiosInstance from '@/axiosconfig/axiosInstance'

export function useContact() {
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const formMessage = ref('')
  const alertType = ref('')

  const submitForm = async (event) => {
    event.preventDefault()

    try {
      // Use axiosInstance without explicitly needing the baseURL
      await axiosInstance.post('api/contact/', {
        name: name.value,
        email: email.value,
        message: message.value,
      })

      formMessage.value = 'Your message has been sent successfully!'
      alertType.value = 'alert-success'

      name.value = ''
      email.value = ''
      message.value = ''
    } catch (error) {
      console.error(error) // Log the error for debugging
      formMessage.value = 'There was an error sending your message. Please try again.'
      alertType.value = 'alert-danger'
    }
  }

  return {
    name,
    email,
    message,
    formMessage,
    alertType,
    submitForm,
  }
}
