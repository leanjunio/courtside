type EmptyStateProps = {
  entityName: string;
};

export function EmptyState({ entityName }: EmptyStateProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">Create a {entityName}</h2>

      <p className="mx-auto mt-4 text-gray-500">
        We're unable to find any records at the moment. Please create one.
      </p>
    </div>
  );
}
