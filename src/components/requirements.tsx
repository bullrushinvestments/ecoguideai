import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: 'text' | 'number' | 'email' | 'select' | 'checkbox';
    options?: Array<{ label: string; value: string }>;
    isRequired?: boolean;
  }>;
}

interface IFormValues {
  [key: string]: any;
}

const GatherRequirements: React.FC<IRequirement> = ({ title, description, requirements }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Form data submitted:', data);
      setSubmittedData(data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={twMerge("max-w-2xl mx-auto p-4 bg-white rounded shadow-md", "sm:p-6")}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {description && <p className="mb-4 text-gray-700">{description}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {requirements.map((requirement, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={requirement.name} className="block mb-1 font-medium text-gray-700">
              {requirement.name}
            </label>
            {requirement.type === 'text' && (
              <input
                id={requirement.name}
                type="text"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'number' && (
              <input
                id={requirement.name}
                type="number"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'email' && (
              <input
                id={requirement.name}
                type="email"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'select' && (
              <select
                id={requirement.name}
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {requirement.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {requirement.type === 'checkbox' && (
              <div className="flex items-center">
                <input
                  id={requirement.name}
                  type="checkbox"
                  {...register(requirement.name, { required: requirement.isRequired })}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor={requirement.name} className="ml-2 block">
                  {requirement.name}
                </label>
              </div>
            )}
            {errors[requirement.name] && (
              <p className="mt-1 text-red-500">{`${requirement.name} is required`}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className={twMerge("w-full px-4 py-2 bg-blue-600 text-white rounded", "hover:bg-blue-700")}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submittedData && (
        <div className="mt-4 p-4 bg-gray-100 border-t">
          <h3 className="text-lg font-medium">Submitted Data</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: 'text' | 'number' | 'email' | 'select' | 'checkbox';
    options?: Array<{ label: string; value: string }>;
    isRequired?: boolean;
  }>;
}

interface IFormValues {
  [key: string]: any;
}

const GatherRequirements: React.FC<IRequirement> = ({ title, description, requirements }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Form data submitted:', data);
      setSubmittedData(data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={twMerge("max-w-2xl mx-auto p-4 bg-white rounded shadow-md", "sm:p-6")}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {description && <p className="mb-4 text-gray-700">{description}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {requirements.map((requirement, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={requirement.name} className="block mb-1 font-medium text-gray-700">
              {requirement.name}
            </label>
            {requirement.type === 'text' && (
              <input
                id={requirement.name}
                type="text"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'number' && (
              <input
                id={requirement.name}
                type="number"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'email' && (
              <input
                id={requirement.name}
                type="email"
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              />
            )}
            {requirement.type === 'select' && (
              <select
                id={requirement.name}
                {...register(requirement.name, { required: requirement.isRequired })}
                className={twMerge("w-full px-3 py-2 border rounded", "focus:border-blue-500 focus:outline-none")}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {requirement.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {requirement.type === 'checkbox' && (
              <div className="flex items-center">
                <input
                  id={requirement.name}
                  type="checkbox"
                  {...register(requirement.name, { required: requirement.isRequired })}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor={requirement.name} className="ml-2 block">
                  {requirement.name}
                </label>
              </div>
            )}
            {errors[requirement.name] && (
              <p className="mt-1 text-red-500">{`${requirement.name} is required`}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className={twMerge("w-full px-4 py-2 bg-blue-600 text-white rounded", "hover:bg-blue-700")}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submittedData && (
        <div className="mt-4 p-4 bg-gray-100 border-t">
          <h3 className="text-lg font-medium">Submitted Data</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;