import { CreateTeamDto, createTeamSchema } from '@courtside/data-access';
import { BasicModal, TextField } from '@courtside/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type CreateTeamFormProps = {
  isOpen: boolean;
  onSubmit: () => void;
  onCancel: () => void;
};
export function CreateTeamForm({
  isOpen,
  onSubmit,
  onCancel,
}: CreateTeamFormProps) {
  const { reset, handleSubmit, control } = useForm<CreateTeamDto>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: '',
    },
  });

  // const onSubmit = (data: CreateTeamDto) => {
  //   console.log({ data });

  //   // login.mutate(data, {
  //   //   onSuccess({ access_token, email, firstName, lastName }) {
  //   //     enqueueSnackbar(`Welcome ${firstName}!`, { variant: 'success' });
  //   //     localStorage.setItem('token', access_token);
  //   //     loginToState({
  //   //       email,
  //   //       firstName,
  //   //       lastName,
  //   //     });
  //   //     navigate('/dashboard');
  //   //   },
  //   //   onError(error) {
  //   //     if (error.response?.status === 404) {
  //   //       enqueueSnackbar(`Incorrect email or password`, {
  //   //         variant: 'error',
  //   //       });
  //   //     } else {
  //   //       enqueueSnackbar('An error occurred while logging in', {
  //   //         variant: 'error',
  //   //       });
  //   //     }
  //   //   },
  //   //   onSettled() {
  //   //     reset();
  //   //   },
  //   // });
  // };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <BasicModal
      isOpen={isOpen}
      onCancel={onCancel}
      description="Enter your team's details"
      title="Create a Team"
      onSubmit={onSubmit}
    >
      <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-6 gap-6">
        <TextField name="name" control={control} label="Team Name" />
      </form>
    </BasicModal>
  );
}
