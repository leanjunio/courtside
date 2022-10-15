import {
  LoginUserDto,
  LoginUserSchema,
  useLogin,
} from '@courtside/data-access';
import { EmailField, PasswordField } from '@courtside/ui/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const { reset, handleSubmit, control } = useForm<LoginUserDto>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const login = useLogin();

  const onSubmit = (data: LoginUserDto) => {
    login.mutate(data, {
      onSuccess(data) {
        enqueueSnackbar('Welcome!', { variant: 'success' });
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard');
      },
      onError(error) {
        if (error.response?.status === 404) {
          enqueueSnackbar(`Incorrect email or password`, {
            variant: 'error',
          });
        } else {
          enqueueSnackbar('An error occurred while logging in', {
            variant: 'error',
          });
        }
      },
      onSettled() {
        reset();
      },
    });
  };

  const onCancel = () => {
    navigate(-1);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <EmailField name="email" control={control} label="Email" />
      <PasswordField control={control} name="password" label="Password" />

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Login
        </button>
        <p className="mt-4 text-sm sm:mt-0">
          <a
            role="button"
            onClick={onCancel}
            className="text-gray-500 underline"
          >
            Cancel
          </a>
        </p>
      </div>
    </form>
  );
}
