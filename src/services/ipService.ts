import axios from 'axios';
import { IPDetails } from '../types/ip';

const API_TOKEN = 'YOUR_IPINFO_TOKEN'; // Free tier works for demo purposes

export const getIPDetails = async (ip?: string): Promise<IPDetails> => {
  try {
    const endpoint = ip ? `https://ipinfo.io/${ip}/json` : 'https://ipinfo.io/json';
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP details:', error);
    throw error;
  }
}