import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      setError(null); // Clear error if successful
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          aria-invalid={errors.businessName ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.businessName && "border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This is required' })}
          aria-invalid={errors.description ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.description && "border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'This is required' })}
          aria-invalid={errors.contactEmail ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.contactEmail && "border-red-500")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("bg-blue-500 text-white w-full p-2 rounded-lg hover:bg-blue-600 focus:outline-none", loading && "cursor-not-allowed opacity-75")}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      setError(null); // Clear error if successful
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          aria-invalid={errors.businessName ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.businessName && "border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This is required' })}
          aria-invalid={errors.description ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.description && "border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'This is required' })}
          aria-invalid={errors.contactEmail ? true : false}
          className={twMerge("w-full px-3 py-2 rounded-lg", errors.contactEmail && "border-red-500")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("bg-blue-500 text-white w-full p-2 rounded-lg hover:bg-blue-600 focus:outline-none", loading && "cursor-not-allowed opacity-75")}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;