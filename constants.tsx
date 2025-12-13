import { Leaf, Ban, Heart, MapPin, Phone, Instagram, Clock, CheckCircle } from 'lucide-react';
import { Feature, MenuItem } from './types';
import React from 'react';

export const BUSINESS_NAME = "Gurparsad Creations";
export const TAGLINE_PUNJABI = "ਜੈਸਾ ਅੰਨ ਤੈਸਾ ਮਨ";
export const TAGLINE_ENGLISH = "Nourish Your Soul With Veg Delights";
export const SUB_TAGLINE = "Homemade Happiness";

export const CONTACT_INFO = {
  phone: "+1 (437) 994-6660",
  instagramHandle: "@gurparsadcreations",
  instagramUrl: "https://www.instagram.com/gurparsadcreations/?hl=en",
  location: "Brampton, ON (Available in GTA)",
  notice: "Kindly place your order 24 hours before."
};

export const ABOUT_CONTENT = {
  title: "Our Story",
  subtitle: "Baking with Purity & Love",
  description1: "Gurparsad Creations began with a simple but powerful belief: 'Jaisa Ann Taisa Mann' (As is the food, so is the mind). Located in the heart of Brampton, we are a passionate home-based bakery dedicated to serving our community with desserts that feed both the body and the soul.",
  description2: "We understand the importance of dietary choices and spiritual purity. That is why our kitchen is strictly vegetarian and eggless. We take pride in saying 'No' to preservatives, premixes, and sugary fondant, and 'Yes' to fresh cream, natural ingredients, and authentic homemade taste.",
};

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "100% Vegetarian",
    description: "Eggless delights made with purity and care.",
    icon: <Leaf className="w-8 h-8 text-green-600" />
  },
  {
    id: 2,
    title: "No Fondant",
    description: "We focus on flavor with fresh cream designs, avoiding sugary fondant.",
    icon: <Ban className="w-8 h-8 text-red-500" />
  },
  {
    id: 3,
    title: "No Premixes",
    description: "Scratch-made batters using natural ingredients. Pure handcrafted goodness.",
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />
  },
  {
    id: 4,
    title: "Fresh Cream",
    description: "Toppings made with fresh, homemade buttercream and whipped cream.",
    icon: <Heart className="w-8 h-8 text-primary" />
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "Classic Vanilla Muffin",
    description: "Soft, fluffy, and freshly baked muffins with a golden top. Perfect for breakfast.",
    imageUrl: "./images/vanilla_muffin.png",
    tags: ["Eggless", "Fresh"],
    category: "Muffins"
  },
  {
    id: 2,
    title: "Marble Muffins",
    description: "The perfect swirl of vanilla and chocolate batter for a delightful treat.",
    imageUrl: "./images/marble_muffin.png",
    tags: ["Bestseller", "No Premix"],
    category: "Muffins"
  },
  {
    id: 3,
    title: "Rose Swirl Cupcakes",
    description: "Beautifully piped floral designs using our signature homemade buttercream.",
    imageUrl: "./images/rose_cupcake.png",
    tags: ["Customizable", "Elegant"],
    category: "Cupcakes"
  },
  {
    id: 4,
    title: "Rasmalai Cake",
    description: "A fusion masterpiece. Cardamom spiced sponge soaked in saffron milk, topped with pistachios.",
    imageUrl: "./images/rasmalai_cake.png",
    tags: ["Fusion", "Premium"],
    category: "Cakes"
  },
  {
    id: 5,
    title: "Chocolate Truffle Cake",
    description: "Decadent, rich chocolate cake with a silky smooth ganache finish. A crowd favorite.",
    imageUrl: "./images/chocolate_truffle_cake.png",
    tags: ["Rich", "Chocolate Lovers"],
    category: "Cakes"
  },
  {
    id: 6,
    title: "Cake Pops",
    description: "Bite-sized spheres of happiness, dipped in chocolate. Perfect for parties and sweet tables.",
    imageUrl: "./images/cake_pops.png",
    tags: ["Kids Favorite", "Parties"],
    category: "Other"
  },
  {
    id: 7,
    title: "Blueberry Muffins",
    description: "Bursting with real blueberries and a hint of lemon zest.",
    imageUrl: "./images/blueberry_muffins.png",
    tags: ["Fruity", "Breakfast"],
    category: "Muffins"
  },
  {
    id: 8,
    title: "Pineapple Fresh Cream Cake",
    description: "Light vanilla sponge layered with fresh dairy cream and pineapple chunks.",
    imageUrl: "./images/pineapple_cake.png",
    tags: ["Classic", "Fresh"],
    category: "Cakes"
  }
];