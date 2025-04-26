import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8081/api/contact';

  async sendMessage(name: string, email: string, subject: string, message: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/send`, {
        name,
        email,
        subject,
        message
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      throw error;
    }
  }

  async getMessages() {
    try {
      const response = await axios.get(`${this.apiUrl}/messages`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des messages :', error);
      throw error;
    }
  }
}
