export interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
}

export interface FormField {
  name: keyof FormData;
  type: string;
  placeholder: string;
  required: boolean;
}
