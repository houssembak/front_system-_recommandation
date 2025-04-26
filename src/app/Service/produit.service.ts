import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})



export class ProduitService {
    private API_URL = 'http://localhost:8081/api/produits';
    async ajouterProduit(token: string, produitData: FormData) {
        try {
            const response = await axios.post(`${this.API_URL}/ajouter`, produitData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de l\'ajout du produit:', error);
            throw error;
        }
    }

    async supprimerProduit(token: string, id: number) {
        try {
            const response = await axios.delete(`${this.API_URL}/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la suppression du produit:', error);
            throw error;
        }
    }

    async getProduitsParUtilisateur(token: string, utilisateurId: number) {
        try {
            const response = await axios.get(`${this.API_URL}/utilisateur/${utilisateurId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
            throw error;
        }
    }
    async getProduits(token: string) {
        if (!token) {
            throw new Error('Token manquant pour récupérer les produits.');
        }

        try {
            const response = await axios.get(`${this.API_URL}/all`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
            throw error;
        }
    }
}
