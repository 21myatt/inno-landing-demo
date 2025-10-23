import { useState } from "react";
import { FormData } from "./types";
import { submitToGoogleSheets } from "@/lib/googleSheets";

export function useFormSubmit(initialValues: FormData) {
  const [form, setForm] = useState<FormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitToGoogleSheets(form);
      //   alert("Form submitted successfully! Check your Google Sheet.");
      resetForm();
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
