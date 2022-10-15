import { FieldError } from '@courtside/ui';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type EmailFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
};

export function EmailField<TFieldValues extends FieldValues>({
  label,
  name,
  control,
}: EmailFieldProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = errors[name]?.message?.toString();

        return (
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-base font-medium text-gray-700">
              {label}
            </label>

            <input
              className="mt-1 p-3 border w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...field}
            />
            <FieldError message={error} />
          </div>
        );
      }}
    />
  );
}
