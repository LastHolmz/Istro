const page = ({ params }: { params: { id: string } }) => {
  return <div>id  {params.id} </div>;
};

export default page;
