import { CreateTeamDto, createTeamSchema } from '@courtside/data-access';
import { TextField } from '@courtside/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type CreateTeamFormProps = {
  onCancel: () => void;
};
export function CreateTeamForm({ onCancel }: CreateTeamFormProps) {
  const { reset, handleSubmit, control } = useForm<CreateTeamDto>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: CreateTeamDto) => {
    console.log({ data });

    // login.mutate(data, {
    //   onSuccess({ access_token, email, firstName, lastName }) {
    //     enqueueSnackbar(`Welcome ${firstName}!`, { variant: 'success' });
    //     localStorage.setItem('token', access_token);
    //     loginToState({
    //       email,
    //       firstName,
    //       lastName,
    //     });
    //     navigate('/dashboard');
    //   },
    //   onError(error) {
    //     if (error.response?.status === 404) {
    //       enqueueSnackbar(`Incorrect email or password`, {
    //         variant: 'error',
    //       });
    //     } else {
    //       enqueueSnackbar('An error occurred while logging in', {
    //         variant: 'error',
    //       });
    //     }
    //   },
    //   onSettled() {
    //     reset();
    //   },
    // });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <TextField name="name" control={control} label="Team Name" />

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          Submit
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
