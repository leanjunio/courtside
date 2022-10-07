import { LoginUserDto } from '@courtside/data-access';
import { TextField } from '@courtside/ui/fields';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const { reset, handleSubmit, register } = useForm<LoginUserDto>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginUserDto) => {
    reset();
    console.log(data);
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <TextField htmlFor="Email" label="Email" {...register('email')} />
      <TextField
        htmlFor="Password"
        label="Password"
        {...register('password')}
      />

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Login
        </button>
        <button
          onClick={onCancel}
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
