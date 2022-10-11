import { baseUserQueries } from '@courtside/data-access';
import { PageWrapper } from '@courtside/ui';

export function Details() {
  // const {} = baseUserQueries.useGetOne()
  return (
    <PageWrapper title="User Details">
      <div className="flex justify-center items-center h-full">Details</div>
    </PageWrapper>
  );
}
