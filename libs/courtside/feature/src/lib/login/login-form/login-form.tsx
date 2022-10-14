import { useAuth0 } from '@auth0/auth0-react';
import {
  LoginUserDto,
  LoginUserSchema,
  useLogin,
} from '@courtside/data-access';
import { PasswordField, TextField } from '@courtside/ui/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const { reset, handleSubmit, register } = useForm<LoginUserDto>({
    resolver: zodResolver(LoginUserSchema),
  });
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const login = useLogin();

  const onSubmit = (data: LoginUserDto) => {
    reset();
    login.mutate(data, {
      onSuccess(data) {
        enqueueSnackbar('Welcome!', { variant: 'success' });
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard');
      },
      onError(error, { email }) {
        if (error.response?.status === 404) {
          enqueueSnackbar(`User with ${email} could not be found`, {
            variant: 'error',
          });
        } else {
          enqueueSnackbar('An error occurred while logging in', {
            variant: 'error',
          });
        }
      },
    });
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
      <PasswordField
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
          onClick={() => loginWithRedirect()}
          type="button"
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Login with Google Account
        </button>
        <p className="mt-4 text-sm sm:mt-0">
          <a onClick={() => onCancel()} className="text-gray-500 underline">
            Cancel
          </a>
        </p>
      </div>
    </form>
  );
}
