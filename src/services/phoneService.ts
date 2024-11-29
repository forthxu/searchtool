import axios from 'axios';
import { PhoneDetails } from '../types/phone';

export const getPhoneDetails = async (phone: string): Promise<PhoneDetails> => {
  try {
    // Using a mock API response for demo purposes
    // In production, replace with actual phone lookup API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulated response based on common Chinese phone number patterns
    const areaCode = phone.substring(0, 3);
    let response: PhoneDetails = {
      province: '未知',
      city: '未知',
      operator: '未知',
      areaCode: areaCode,
      postCode: ''
    };
    
    // Basic operator detection
    if (areaCode.startsWith('13') || areaCode.startsWith('15')) {
      response.operator = '中国移动';
    } else if (areaCode.startsWith('18') || areaCode.startsWith('16')) {
      response.operator = '中国联通';
    } else if (areaCode.startsWith('14') || areaCode.startsWith('17')) {
      response.operator = '中国电信';
    }
    
    return response;
  } catch (error) {
    console.error('Error fetching phone details:', error);
    throw error;
  }
}