import { signupSchema, useSignup } from '@courtside/data-access';
import { CreateUserDto } from '@courtside/entities';
import { EmailField, PasswordField, TextField } from '@courtside/ui/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const { reset, handleSubmit, control } = useForm<CreateUserDto>({
    resolver: zodResolver(signupSchema),
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const signup = useSignup();

  const onSubmit = (data: CreateUserDto) => {
    reset();
    signup.mutate(data, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <TextField control={control} name="firstName" label="First Name" />
      <TextField control={control} name="lastName" label="Last Name" />

      <div className="col-span-6">
        <EmailField control={control} name="email" label="Email" />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <PasswordField control={control} name="password" label="Password" />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <PasswordField
          control={control}
          name="passwordConfirmation"
          label="Password Confirmation"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?{' '}
          <a href="/login" className="text-gray-700 underline">
            Log in
          </a>
          .
        </p>
      </div>
    </form>
  );
}
