export interface ListContactResponse {
  _id: string;
  heading: string;
  description: string;
  backgroundImage: string;
  contactInfo: ContactInfo[];
  formTitle: string;
  buttonText: string;
  bottomTitle: string;
  bottomDescription: string;
  bottomImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ContactInfo {
  title: string;
  value: string;
  _id: string;
}

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  serviceRequired: string;
  message: string;
}