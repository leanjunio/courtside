import { baseUserQueries, CreateUserDto } from '@courtside/data-access';
import { EmailField, PasswordField, TextField } from '@courtside/ui/fields';
import { useForm } from 'react-hook-form';

export function SignupForm() {
  const { reset, handleSubmit, register } = useForm<CreateUserDto>();
  const signup = baseUserQueries.useCreateOne();

  const onSubmit = (data: CreateUserDto) => {
    reset();
    signup.mutate(data, {
      onSettled(data, error, variables, context) {
        console.log({ data, error, variables, context });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <TextField
        htmlFor="FirstName"
        label="First Name"
        {...register('firstName')}
      />
      <TextField
        htmlFor="LastName"
        label="Last Name"
        {...register('lastName')}
      />

      <div className="col-span-6">
        <EmailField htmlFor="Email" label="Email" {...register('email')} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <PasswordField
          htmlFor="Password"
          label="Password"
          {...register('password')}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <PasswordField
          htmlFor="PasswordConfirmation"
          label="Confirm Password"
          {...register('passwordConfirmation')}
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
