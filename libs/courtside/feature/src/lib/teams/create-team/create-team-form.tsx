import { baseTeamQueries } from '@courtside/data-access';
import { CreateTeamDto, createTeamSchema } from '@courtside/shared/dtos';
import { BasicModal, TextField } from '@courtside/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

type CreateTeamFormProps = {
  isOpen: boolean;
  onCancel: () => void;
};
export function CreateTeamForm({ isOpen, onCancel }: CreateTeamFormProps) {
  const { reset, handleSubmit, control } = useForm<CreateTeamDto>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: '',
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  const { mutate } = baseTeamQueries.useCreateOne();

  const onSubmit = (data: CreateTeamDto) => {
    mutate(data, {
      onSuccess() {
        enqueueSnackbar('Team Created', {
          variant: 'success',
        });
      },
      onError(error) {
        console.log(error);
      },
      onSettled() {
        console.log('did this run?');
        reset();
        onCancel();
      },
    });
  };

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
    >
      <form id="create team form" onSubmit={handleFormSubmit}>
        <TextField name="name" control={control} label="Team Name" />
        <TextField name="name" control={control} label="Team Name" />
      </form>
    </BasicModal>
  );
}
