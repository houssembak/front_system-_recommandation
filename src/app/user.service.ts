import axios from 'axios';

export class UserService {
  private apiUrl = 'http://localhost:8081/api/utilisateurs';

  async signup(userData: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/register`, userData);
    
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : 'Erreur inconnue';
    }
  }
  async login(userData: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, userData);
      
      // Stocker le token JWT dans le localStorage
      localStorage.setItem('token', response.data.token);
      
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : 'Erreur inconnue';
    }
  }
}
