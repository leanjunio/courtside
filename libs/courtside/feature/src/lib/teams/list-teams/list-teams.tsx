import { baseTeamQueries } from '@courtside/data-access';
import {
  BasicModal,
  CircleButton,
  EmptyState,
  LoadingSpinner,
  PageWrapper,
  TextField,
} from '@courtside/ui';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { CreateTeamForm } from '../create-team';

export function ListTeams() {
  const { status, data } = baseTeamQueries.useGetAll();
  const { enqueueSnackbar } = useSnackbar();
  const [modal, setModal] = useState(false);

  if (status === 'error') {
    enqueueSnackbar('Could not fetch teams');
  }

  let output: JSX.Element = <></>;

  if (status === 'loading') {
    output = <LoadingSpinner />;
  }

  if (status === 'success') {
    if (data.length === 0) {
      output = <EmptyState entityName="Team" />;
    } else {
      data.map((d) => <p>{d.name}</p>);
    }
  }

  return (
    <PageWrapper title="Teams">
      <div className="flex justify-center items-center h-full">
        <BasicModal
          isOpen={modal}
          setOpen={setModal}
          description="Enter your team's details"
          title="Create a Team"
        >
          <CreateTeamForm onCancel={() => console.log('cancel')} />
        </BasicModal>
        {output}
      </div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 m-10">
          <CircleButton label="Create Team" onClick={() => setModal(true)} />
        </div>
      </div>
    </PageWrapper>
  );
}
