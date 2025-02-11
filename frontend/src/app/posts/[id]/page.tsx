export default async function PostsById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div>O id do post é: {id}</div>;
}
