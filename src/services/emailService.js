/* eslint-disable no-undef */
import axios from 'axios'

export const sendEmail = async (emailData) => {
  try {
    const endpoint = 'http://localhost:3001/send'
    const response = await axios.post(endpoint, emailData)
    return response
  } catch {
    console.error('Error al enviar email:', error)
    throw error
  }
}
