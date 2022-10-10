import { MdAdd } from 'react-icons/md';

type CircleButtonProps = {
  label: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function CircleButton({ label, ...props }: CircleButtonProps) {
  return (
    <button
      className="inline-block rounded-full border text-white p-3 bg-amber-600 hover:bg-opacity-90 hover:text-white focus:outline-none focus:ring"
      {...props}
    >
      <span className="sr-only">{label}</span>
      <MdAdd className="h-6 w-6" />
    </button>
  );
}
