export function SectionHeading({ index, title }: { index: string; title: string }) {
  return <div className="section-heading"><span>{index}</span><h2>{title}</h2></div>;
}
