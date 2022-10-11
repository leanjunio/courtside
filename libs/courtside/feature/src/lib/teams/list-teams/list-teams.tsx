import { baseTeamQueries } from '@courtside/data-access';
import {
  CircleButton,
  EmptyState,
  LoadingSpinner,
  PageWrapper,
} from '@courtside/ui';
import { useSnackbar } from 'notistack';

export function ListTeams() {
  const { status, data } = baseTeamQueries.useGetAll();
  const { enqueueSnackbar } = useSnackbar();

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
      <div className="flex justify-center items-center h-full">{output}</div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 m-10">
          <CircleButton label="Create Team" />
        </div>
      </div>
    </PageWrapper>
  );
}
