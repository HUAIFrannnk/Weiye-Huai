import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Weiye Huai's research experience in cross-cultural marketing, digital communication, consumer response, and multimodal interaction.",
  alternates: { canonical: "/research", languages: { en: "/research", "zh-CN": "/zh/research" } },
};

export default function ResearchPage() {
  return (
    <article className="page-shell article-page research-page">
      <h1>Research</h1>
      <p>
        My research examines how meaning and behavior change across markets,
        media platforms, and cultural contexts. I am interested in combining
        close qualitative reading with structured data collection to explain
        how audiences interpret brand communication and participate in digital
        communities.
      </p>

      <h2>Cross-cultural Social Media Marketing for Chinese Trend-Toy Brands</h2>
      <p className="research-meta-line">Research Lead · October 2025–June 2026</p>
      <p>
        This project investigates how Chinese trend-toy brands communicate with
        overseas audiences, using POP MART as the principal case. The study asks
        how a brand can maintain a recognizable global identity while adapting
        its creator partnerships, cultural references, campaign narratives, and
        community interactions to local markets.
      </p>
      <p>
        I led the comparative analysis of POP MART&apos;s localized operations on
        Instagram and TikTok. Our team broke down platform content by campaign
        theme, creator type, cultural reference, audience interaction, and brand
        storytelling function. We then combined KOL performance, campaign
        engagement, and audience-feedback data in a practical evaluation model.
      </p>
      <p>
        The project produced a framework for distinguishing surface-level
        localization from deeper cultural adaptation. Its recommendations focus
        on locally credible creator selection, differentiated content strategies,
        and the preservation of a coherent brand world across markets.
      </p>

      <h2>Online Game Marketing Communication from a Cultural Perspective</h2>
      <p className="research-meta-line">Core Team Member · October 2024–June 2025</p>
      <p>
        Using <em>Dungeon &amp; Fighter</em> as a case study, this project explores
        how players in different cultural and platform environments respond to
        game marketing communication. We treated user comments not merely as
        campaign reactions, but as evidence of community values, narrative
        expectations, and platform-specific participation.
      </p>
      <p>
        I collected and coded discussions from Bilibili, Weibo, YouTube, and
        Reddit. The analysis compared recurring themes, emotional positions,
        content formats, and the rhythm through which topics moved between
        official communication and player communities. This work resulted in a
        multidimensional map of cross-platform communication pathways.
      </p>
      <p>
        The study strengthened my interest in consumer-generated data and in the
        cultural assumptions embedded in apparently universal digital marketing
        strategies.
      </p>

      <h2>Cognitive Functions of Co-speech Gesture</h2>
      <p className="research-meta-line">Research Assistant · June–August 2024</p>
      <p>
        I assisted an SSCI-oriented research project on the cognitive and
        pragmatic roles of co-speech gesture in spoken interaction. The project
        examined how gesture works with language to shape emphasis, intention,
        interpretation, and the audience&apos;s cognitive load.
      </p>
      <p>
        My work included processing short-video interaction data and coding
        verbal behavior and accompanying gestures. Drawing on Speech Act theory,
        I helped distinguish communicative functions across recurring gesture
        patterns and supported the analysis of how non-verbal cues influence
        pragmatic meaning and audience cognition.
      </p>

      <h2>Methods and developing interests</h2>
      <ul>
        <li>Literature review and research-question development</li>
        <li>Cross-platform content collection and qualitative coding</li>
        <li>Campaign, creator, and audience-response analysis</li>
        <li>Comparative case studies across cultural contexts</li>
        <li>Python, SQL, Stata, and spreadsheet-based data work</li>
      </ul>
    </article>
  );
}
