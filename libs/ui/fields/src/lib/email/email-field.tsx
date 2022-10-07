import React from 'react';

export const EmailField = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ htmlFor, label, onChange, onBlur, name }, ref) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        type="email"
        id={htmlFor}
        className="mt-1 p-3 border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  );
});
