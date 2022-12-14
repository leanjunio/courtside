import { baseTeamQueries } from '@courtside/data-access';
import {
  BasicCard,
  CircleButton,
  EmptyState,
  LoadingSpinner,
  PageWrapper,
} from '@courtside/ui';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { CreateTeamForm } from '../create-team';

export function ListTeams() {
  const { status, data } = baseTeamQueries.useGetAll();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);

  if (status === 'error') {
    enqueueSnackbar('Could not fetch teams');
  }

  let output: JSX.Element = <EmptyState entityName="Team" />;

  if (status === 'loading') {
    output = <LoadingSpinner />;
  }

  if (status === 'success' && data.length > 0) {
    output = (
      <div className="flex flex-col">
        {data.map((d) => (
          <BasicCard
            count={d.members?.length ?? 0}
            main={d.name}
            description={d.description}
          />
        ))}
      </div>
    );
  }

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <PageWrapper title="Teams">
      <div className="flex justify-center items-center h-full w-full">
        <CreateTeamForm onCancel={onCancel} isOpen={isOpen} />
        {output}
      </div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 m-10">
          <CircleButton label="Create Team" onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </PageWrapper>
  );
}
