export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beard' | 'skin' | 'spa' | 'package';
  price: string;
  duration: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'haircut' | 'beard' | 'facial' | 'massage' | 'grooming';
  url: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  tagline: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  avatar: string;
  comment: string;
  verified: boolean;
}

export interface ChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentDetails {
  fullName: string;
  phoneNumber: string;
  selectedServices: string[];
  preferredDate: string;
  preferredTime: string;
  message?: string;
}
