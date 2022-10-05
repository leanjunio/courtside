import { forwardRef } from 'react';

type TextFieldProps = {
  label: string;
  htmlFor: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, htmlFor }, ref) => {
    return (
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>

        <input
          ref={ref}
          type="text"
          id={htmlFor}
          className="mt-1 p-3 border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>
    );
  }
);
