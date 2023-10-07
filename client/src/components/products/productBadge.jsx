export default function ProductBadge({ colors }) {
  return (
    <>
      <div>{colors.map((color) => badge(color))}</div>
    </>
  );
}

function badge(color) {
  const badgeClass = "badge filter rounded-4 bg-" + color;
  const badge = <span className={badgeClass}></span>;

  return badge;
}
