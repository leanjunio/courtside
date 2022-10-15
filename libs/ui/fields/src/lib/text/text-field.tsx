import { forwardRef } from 'react';

export const TextField = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ label, htmlFor }, ref) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        type="text"
        id={htmlFor}
        className="mt-1 p-3 border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        ref={ref}
      />
    </div>
  );
});
