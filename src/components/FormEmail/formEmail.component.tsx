import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormEmailProps {
  onClose: () => void;
}

const FormEmailComponent: React.FC<FormEmailProps> = ({ onClose }) => {
  const [state, handleSubmit] = useForm("mdoqwzgy");

  if (state.succeeded) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
        <div className="bg-white p-6 rounded-lg">
          <p>Thanks for joining!</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="email" className="block">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-600"
          />
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600"
          />
          <div className="flex justify-between">
            <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400">
              Submit
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-800 text-white rounded-md">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEmailComponent;
