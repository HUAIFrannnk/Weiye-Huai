export type TimelineItem = { period: string; title: string; organization: string; description: string };
export function Timeline({ index, heading, items }: { index: string; heading: string; items: TimelineItem[] }) {
  return <section className="timeline-section"><div className="timeline-title"><span>{index}</span><h2>{heading}</h2></div><div className="timeline-list">{items.map((item, i) => <article key={`${item.title}-${i}`} className="timeline-item"><p className="timeline-period">{item.period}</p><div><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p>{item.description}</p></div></article>)}</div></section>;
}
