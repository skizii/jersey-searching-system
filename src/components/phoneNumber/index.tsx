'use client';

import React from 'react';
import * as styles from './phoneNumber.css';

interface PhoneNumberProps {
  phone: string;
  className?: string;
}

export const PhoneNumber: React.FC<PhoneNumberProps> = ({ phone, className }) => {
  const formatPhoneNumber = (phoneNumber: string): string => {
    // Remove all non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    // Handle different country code lengths
    if (digitsOnly.startsWith('7') && digitsOnly.length === 11) {
      // Russian format: +7 777 777 77 77
      return `+${digitsOnly.slice(0, 1)} ${digitsOnly.slice(1, 4)} ${digitsOnly.slice(4, 7)} ${digitsOnly.slice(7, 9)} ${digitsOnly.slice(9)}`;
    } else if (digitsOnly.startsWith('77') && digitsOnly.length === 12) {
      // Kazakhstan format: +77 777 777 77 77
      return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 8)} ${digitsOnly.slice(8, 10)} ${digitsOnly.slice(10)}`;
    } else if (digitsOnly.startsWith('777') && digitsOnly.length === 13) {
      // Extended format: +777 777 777 77 77
      return `+${digitsOnly.slice(0, 3)} ${digitsOnly.slice(3, 6)} ${digitsOnly.slice(6, 9)} ${digitsOnly.slice(9, 11)} ${digitsOnly.slice(11)}`;
    } else if (digitsOnly.startsWith('44') && digitsOnly.length === 12) {
      // UK format: +44 1234 567 890
      return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 6)} ${digitsOnly.slice(6, 9)} ${digitsOnly.slice(9)}`;
    } else if (digitsOnly.startsWith('39') && digitsOnly.length === 12) {
      // Italy format: +39 123 456 7890
      return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 8)} ${digitsOnly.slice(8)}`;
    } else if (digitsOnly.startsWith('1') && digitsOnly.length === 11) {
      // US/Canada format: +1 234 567 8900
      return `+${digitsOnly.slice(0, 1)} ${digitsOnly.slice(1, 4)} ${digitsOnly.slice(4, 7)} ${digitsOnly.slice(7)}`;
    } else {
      // Default formatting for other numbers
      // Try to format as +XX XXX XXX XX XX
      if (digitsOnly.length >= 10) {
        const countryCode = digitsOnly.slice(0, Math.min(3, digitsOnly.length - 9));
        const remaining = digitsOnly.slice(countryCode.length);
        
        if (remaining.length === 9) {
          return `+${countryCode} ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6, 8)} ${remaining.slice(8)}`;
        } else if (remaining.length === 10) {
          return `+${countryCode} ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6, 8)} ${remaining.slice(8)}`;
        }
      }
      
      // Fallback: return original with basic spacing
      return phoneNumber;
    }
  };

  const formattedPhone = formatPhoneNumber(phone);

  return (
    <a 
      className={`${styles.phoneNumber} ${className || ''}`} 
      href={`tel:${phone}`}
    >
      {formattedPhone}
    </a>
  );
}; 