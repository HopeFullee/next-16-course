interface Props {
  params: Promise<{
    id: string;
  }>;
}

const UserDetails = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <h1>Showing details for user #{id}</h1>
    </div>
  );
};

export default UserDetails;
