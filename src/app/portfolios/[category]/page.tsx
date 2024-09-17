export default function PortfolioCategory({
  params,
}: {
  params: { category: string };
}) {
  console.log("PARAMS", params);
  return (
    <div>
      <h1>{params.category} Portfolio</h1>
      <p>This is the {params.category} portfolio.</p>
      {/* Here you'll later fetch and display images based on the category */}
    </div>
  );
}
