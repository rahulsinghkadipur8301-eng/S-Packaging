export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Corrugated Packaging' | 'Printed Packaging' | 'Food Packaging' | 'Specialized Packaging';
  shortDescription: string;
  overview: string;
  primaryImage: string;
  galleryImages: string[];
  specifications: {
    productType: string;
    material: string;
    plyConstruction: string;
    application: string;
    customization: string;
    packagingRequirements: string;
  };
  features: string[];
  recommendedUse: string[];
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  mobileNumber: string;
  emailAddress: string;
  product: string;
  requiredQuantity: string;
  requiredBoxSize: string;
  customizationRequirements: string;
  message: string;
}

export interface InquiryRecord extends InquiryFormData {
  id: string;
  createdAt: string;
  inquiryDate: string;
  inquiryTime: string;
  status: 'new' | 'reviewed' | 'quoted' | 'contacted';
  emailDelivery: {
    dispatched: boolean;
    recipient: string;
    subject: string;
    method: 'smtp' | 'simulated_dispatch';
    sentAt: string;
    error?: string;
  };
}

export interface CompanyInfo {
  name: string;
  legalStatus: string;
  businessType: string;
  industry: string;
  proprietor: string;
  gstNo: string;
  gstRegistrationDate: string;
  annualTurnover: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    unit: string;
    building: string;
    landmark: string;
    area: string;
    city: string;
    pinCode: string;
    district: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  description: string;
}
