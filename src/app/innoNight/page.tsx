"use client";
import { RegistrationForm } from "@/components/RegistrationForm/RegistrationForm";
import { useFormSubmit } from "@/components/RegistrationForm/useFormSubmit";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  profession: "",
};

export default function FormPage() {
  const { form, isSubmitting, error, handleChange, handleSubmit } =
    useFormSubmit(initialFormData);

  return (
    <RegistrationForm
      form={form}
      isSubmitting={isSubmitting}
      error={error}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
