type FieldErrorProps = {
  message?: string;
};

export function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return <span className="text-xs p-2 text-red-500">{message}</span>;
}
