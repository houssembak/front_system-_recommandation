import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export class UserService {
  async getAllUsers() {
    const res = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return res.data;
  }
}
