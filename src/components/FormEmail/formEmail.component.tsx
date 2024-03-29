import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { variants } from '../../utils/effect.motion';

interface FormEmailProps {
  onClose: () => void;
}

const FormEmailComponent: React.FC<FormEmailProps> = ({ onClose }) => {
  const [state, handleSubmit] = useForm("mdoqwzgy");
  const animationVariants = variants(0);

  if (state.succeeded) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
        <div className="bg-white p-6 rounded-lg">
          <p>Thank you for contacting me, I will reply as soon as possible! ;)</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:text-title">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial="hidden"
      animate="visible"
      variants={animationVariants} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="email" className="block text-title">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-opacity-50 px-4 py-2 text-background"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-600"
          />
          <label htmlFor="message" className="block text-title">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-opacity-50 px-2 py-1 text-background h-36"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600"
          />
          <div className="flex justify-between">
            <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 hover:text-title">
              Submit
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:text-title">
              Close
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default FormEmailComponent;
