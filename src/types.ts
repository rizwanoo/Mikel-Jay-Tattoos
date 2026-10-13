export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Black & Grey Realism' | 'Custom Designs' | 'Fine Line & Ornamental' | 'Cover-Up Tattoos';
  image: string;
  placement: string;
  dimensions: string;
  sessionTime: string;
  year: string;
  story: string;
  technique: string;
}

export type StyleCategory =
  | 'All'
  | 'Black & Grey Realism'
  | 'Custom Designs'
  | 'Fine Line & Ornamental'
  | 'Cover-Up Tattoos';

export interface BookingFormData {
  style: string;
  placement: string;
  size: string;
  colorType: 'Black & Grey' | 'Full Color' | 'Black & Grey with Crimson Accent';
  concept: string;
  referenceImages: string[];
  fullName: string;
  email: string;
  phone: string;
  preferredContact: 'Facebook Messenger' | 'Email' | 'Phone / Text';
  targetDate: string;
  timePreference: 'Morning (11AM - 2PM)' | 'Afternoon (2PM - 6PM)' | 'Evening (6PM - 9PM)' | 'Flexible';
  isFirstTattoo: boolean;
  preferredArtist: 'Mikel Ross' | 'Jay Vance' | 'Any Available Master';
  notes: string;
}
