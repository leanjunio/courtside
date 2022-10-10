import { CircleButton, PageWrapper } from '@courtside/ui';

export function ListTeams() {
  return (
    <PageWrapper title="Teams">
      <div className="flex justify-center items-center h-full">hello</div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 m-10">
          <CircleButton label="Create Team" />
        </div>
      </div>
    </PageWrapper>
  );
}
