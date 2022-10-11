import { baseTeamQueries } from '@courtside/data-access';
import { CircleButton, EmptyState, PageWrapper } from '@courtside/ui';

export function ListTeams() {
  const { data } = baseTeamQueries.useGetAll();

  console.log({ data });

  return (
    <PageWrapper title="Teams">
      <div className="flex justify-center items-center h-full">
        <EmptyState entityName="Team" />
      </div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 m-10">
          <CircleButton label="Create Team" />
        </div>
      </div>
    </PageWrapper>
  );
}
