import React from 'react';

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  tags: string[];
  category: 'Cakes' | 'Cupcakes' | 'Muffins' | 'Tea Time' | 'Other';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  phone: string;
  instagramUrl: string;
  location: string;
  email?: string;
}