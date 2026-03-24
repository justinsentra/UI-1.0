import type { ReportDetail } from "../types";

const reportDetailMap: Record<string, ReportDetail> = {
  // ─── REPORTS ───────────────────────────────────────────────────────

  // Divisional Overview (latest: rpt-co-1)
  "rpt-co-1": {
    id: "rpt-co-1",
    title: "Divisional Overview",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "The AI Strategy & Tech Partnerships division had a high-velocity week across vendor evaluation, competitive positioning, and internal deployment expansion. The team completed Phase 2 evaluations of Anthropic, OpenAI, and Google for firm-wide LLM deployment, with Anthropic's Claude emerging as the frontrunner for regulated financial services use cases.",
          "On the competitive front, Morgan Vale accelerated their internal AI platform rollout, prompting an updated response strategy. Internally, the Sentra pilot is expanding from 60 to 200 seats across IB Coverage and TMT groups following strong adoption metrics and positive feedback from Managing Directors on meeting intelligence capabilities.",
        ],
      },
      {
        heading: "Key Developments",
        paragraphs: [
          "AI Vendor Evaluations: Completed head-to-head benchmarking of Anthropic Claude, OpenAI GPT-5, and Google Gemini Ultra across document analysis, trade surveillance, and KYC automation use cases. Claude demonstrated superior performance on regulatory document comprehension and citation accuracy, critical for our compliance requirements.",
          "Morgan Vale Competitive Response: Goldman announced expansion of their internal GS AI platform to 10,000 seats across IB and Asset Management. Our competitive analysis identifies three areas where JPM can leapfrog: agentic workflows for deal execution, cross-divisional knowledge graphs, and client-facing AI advisory tools.",
          "Sentra Pilot Expansion: The organizational memory pilot is scaling from 60 seats (IB Coverage) to 200 seats spanning IB Coverage and TMT groups. Adoption rate is at 78% weekly active usage, with Managing Directors citing pre-meeting briefs and decision tracking as highest-value features.",
          "Regulatory Landscape: OCC issued updated guidance on AI model risk management in banking. Our framework is aligned, but the new requirements around explainability and audit trails accelerate the need for source-cited AI outputs across all internal tools.",
        ],
      },
      {
        heading: "Risks & Concerns",
        paragraphs: [
          "The Goldman competitive threat is real — their GS AI platform has a 6-month head start on internal deployment at scale. However, their approach is vertically siloed, lacking the cross-divisional context layer that our strategy emphasizes. We need to move faster on the firm-wide knowledge graph initiative to maintain our differentiation.",
          "Model risk management review for GenAI tools is creating a 4-6 week bottleneck in vendor onboarding. The MRM team is understaffed relative to the volume of AI tools entering evaluation. Escalation to the CTO office is recommended.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "AI Infrastructure Modernization Progress",
        paragraphs: [
          "The cloud migration from on-prem GPU clusters to a hybrid architecture is 65% complete. Phase 1 (development and testing workloads) migrated to CloudPrime GovCloud with full data residency compliance. Phase 2 (production inference serving) is in security review, with VPC configurations and encryption-at-rest requirements being validated by InfoSec.",
          "On-prem Titan Compute X900 cluster utilization is at 87%, up from 72% last quarter. The capacity constraint is driving urgency on the hybrid cloud strategy — without additional compute, the model fine-tuning pipeline will bottleneck within 6 weeks.",
        ],
      },
      {
        heading: "Client-Facing AI Initiatives",
        paragraphs: [
          "AI-powered client advisory tools are being piloted with three coverage teams in TMT. The tools synthesize earnings transcripts, SEC filings, and internal research notes to generate pre-meeting briefing documents for client calls. Early feedback from coverage bankers: 'This saves me 45 minutes per client meeting.'",
          "The deal analytics dashboard, powered by internal LLMs, is now surfacing cross-sell opportunities across the coverage universe. Initial results show a 12% increase in identified revenue opportunities within the first two weeks of deployment across the pilot group.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-strategy" },
      { type: "slack", label: "#tech-partnerships" },
      { type: "google-meet", label: "AI Strategy Weekly" },
      { type: "google-meet", label: "Tech Partnerships Review" },
      { type: "google-meet", label: "Vendor Evaluation Sync" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send Anthropic partnership proposal" },
      { icon: "calendar", label: "Schedule AI vendor evaluation sync" },
      { icon: "mail", label: "Follow up with Goldman competitive analysis" },
    ],
  },

  // Deal Pipeline & Partnerships (latest: rpt-gtm-1)
  "rpt-gtm-1": {
    id: "rpt-gtm-1",
    title: "Deal Pipeline & Partnerships",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Technology partnership deal flow accelerated this week with three active negotiations advancing to term sheet stage and two new opportunities entering the pipeline. The Anthropic enterprise agreement is the highest-priority deal, with potential to position JPM as the first major bank with a dedicated Claude deployment for regulated financial services.",
          "The Sentra firm-wide deployment proposal moved from pilot validation to procurement review, and Bloomberg's AI integration partnership entered technical due diligence. Combined, the active pipeline represents $47M in estimated annual contract value across five strategic technology partnerships.",
        ],
      },
      {
        heading: "Active Deal Pipeline",
        paragraphs: [
          "Anthropic Enterprise Agreement ($18M ACV): Term sheet negotiation in progress. Key open items include data residency requirements, model fine-tuning rights for proprietary financial data, and dedicated inference capacity guarantees. Legal review flagged IP ownership clauses that need renegotiation. Target close: end of Q1.",
          "Sentra Firm-Wide Deployment ($4.2M ACV): Pilot results validated — 78% weekly active usage across 60 seats in IB Coverage. Procurement has the proposal; vendor risk assessment scheduled for next week. Expansion to 200 seats in IB Coverage and TMT groups approved by division heads pending procurement sign-off.",
          "Bloomberg AI Integration ($12M ACV): Technical due diligence phase. Bloomberg Terminal integration would enable real-time AI-powered research synthesis for 8,000+ JPM analysts. Architecture review meeting with Bloomberg's CTO scheduled for Thursday.",
          "Databricks Lakehouse Platform ($8M ACV): Discovery phase for unified data platform to support AI/ML workloads across divisions. Competing against Snowflake's proposal. POC environment being provisioned.",
          "Palantir AIP Evaluation ($5M ACV): Early-stage evaluation for trade surveillance and compliance use cases. Initial demo impressed the compliance team, but concerns around vendor lock-in and data sovereignty need resolution.",
        ],
      },
      {
        heading: "Partnership Pipeline Health",
        paragraphs: [
          "Pipeline velocity is strong — three deals progressed stages this week. The Anthropic deal is the bellwether; landing it positions us favorably for the firm-wide AI strategy budget allocation in Q2.",
          "Risk item: Databricks and Palantir deals may create vendor overlap in the data platform layer. Need to align with Enterprise Architecture on the target state before advancing both.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Anthropic Partnership — Strategic Value Analysis",
        paragraphs: [
          "Beyond the direct deployment value, the Anthropic partnership carries significant strategic weight. JPM would gain early access to new model capabilities, dedicated safety and alignment research support for financial services, and co-development rights for banking-specific fine-tuning.",
          "Competitive intelligence suggests Goldman is in parallel discussions with OpenAI. If we close Anthropic first, we establish a differentiated AI foundation that Goldman cannot easily replicate. The exclusivity window in our proposed terms is critical.",
        ],
      },
      {
        heading: "Revenue Impact Modeling",
        paragraphs: [
          "Conservative estimates for AI tool deployment ROI across the deal pipeline: Anthropic integration saves ~$32M annually in analyst productivity gains, Sentra reduces meeting overhead by ~$8M across covered divisions, Bloomberg AI integration increases research output velocity by an estimated 40%.",
          "Total first-year ROI across the active pipeline is projected at 3.2x the combined ACV, well above the firm's 2.0x threshold for technology investments.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#tech-partnerships" },
      { type: "slack", label: "#deal-pipeline" },
      { type: "google-meet", label: "Anthropic Term Sheet Review" },
      { type: "google-meet", label: "Bloomberg Technical Due Diligence" },
      { type: "google-meet", label: "Sentra Pilot Review" },
      { type: "google-meet", label: "Partnership Pipeline Sync" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send revised Anthropic term sheet to legal" },
      { icon: "calendar", label: "Schedule Bloomberg CTO architecture review" },
      { icon: "mail", label: "Follow up with Sentra on procurement timeline" },
    ],
  },

  // AI Strategy & Roadmap (latest: rpt-ps-1)
  "rpt-ps-1": {
    id: "rpt-ps-1",
    title: "AI Strategy & Roadmap",
    dateRange: "Feb 17 – 21, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "The firm-wide AI strategy advanced on multiple fronts this week, with key decisions on build vs. buy for LLM infrastructure and the model risk management framework for GenAI entering final review. The internal AI platform roadmap was presented to the Operating Committee, receiving conditional approval pending MRM compliance sign-off.",
          "Agentic workflow pilots in Investment Banking and Asset Management showed strong early results, validating the thesis that AI-driven automation of repetitive knowledge work can meaningfully improve banker productivity without compromising the quality of client deliverables.",
        ],
      },
      {
        heading: "Build vs. Buy — LLM Infrastructure",
        paragraphs: [
          "The strategic question of the quarter: should JPM build proprietary LLM infrastructure or partner with foundation model providers? The analysis favors a hybrid approach — leverage external models (Anthropic, OpenAI) for general capabilities while building proprietary fine-tuned models for trade surveillance, credit risk, and regulatory compliance.",
          "Cost modeling shows the hybrid approach reduces infrastructure spend by 35% compared to full in-house development while maintaining the data sovereignty and model governance requirements mandated by OCC guidance. The CTO office endorsed this direction pending board review.",
          "Key risk: building proprietary models requires a 12-18 month ramp-up in ML engineering talent. The current team of 45 AI/ML engineers needs to grow to 80+ by year-end to execute the roadmap.",
        ],
      },
      {
        heading: "AI Use Case Prioritization",
        paragraphs: [
          "Document Analysis & Due Diligence (live): AI-powered analysis of SEC filings, credit agreements, and M&A documentation. Currently deployed to 300 IB analysts with 4.2x throughput improvement on standard deal documentation review.",
          "Trade Surveillance Enhancement (pilot): LLM-based pattern detection for anomalous trading activity, complementing existing rule-based systems. Pilot running in Equities with compliance team oversight. False positive rate reduced by 62% vs. legacy system.",
          "KYC Automation (design phase): Automated extraction and verification of client identity documents, beneficial ownership structures, and sanctions screening. Expected to reduce KYC processing time from 14 days to 3 days for standard onboarding.",
          "Meeting Intelligence via Sentra (expanding): Organizational memory platform capturing decision history, commitments, and context across meetings. Expanding from 60 to 200 seats based on strong pilot metrics.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Agentic Workflow Pilots",
        paragraphs: [
          "The IB agentic workflow pilot connected deal team meeting outputs directly into the pitchbook generation pipeline, allowing an AI agent to update client presentations based on strategic discussions without manual intervention. Senior bankers reported saving 2-3 hours per deal on routine deck updates.",
          "In Asset Management, an agentic workflow for portfolio review preparation is synthesizing market data, internal research, and client correspondence to generate pre-meeting briefing packages. Portfolio managers describe it as 'having a junior analyst who never sleeps and never misses a data point.'",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-strategy" },
      { type: "slack", label: "#ai-platform" },
      { type: "google-meet", label: "AI Strategy Operating Committee" },
      { type: "google-meet", label: "MRM Framework Review" },
      { type: "google-meet", label: "Agentic Workflow Pilot Readout" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Schedule MRM compliance sign-off meeting" },
      { icon: "mail", label: "Share build vs. buy analysis with CTO office" },
      { icon: "clock", label: "Review agentic workflow pilot metrics" },
    ],
  },

  // Technology Infrastructure (latest: rpt-eng-1)
  "rpt-eng-1": {
    id: "rpt-eng-1",
    title: "Technology Infrastructure",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "AI platform infrastructure delivered a critical week of reliability improvements and security hardening. GPU cluster utilization optimization reduced idle compute costs by 22%, model serving latency for the document analysis pipeline dropped below the 200ms SLA threshold, and the data pipeline health check surfaced three anomalies that were remediated before impacting production workloads.",
          "The quarterly security audit completed with two medium-severity findings related to VPC peering configurations. SOC 2 Type II audit preparations are 80% complete, and FedRAMP authorization conversations with the PMO advanced to the documentation phase.",
        ],
      },
      {
        heading: "AI Platform Reliability",
        paragraphs: [
          "GPU Cluster Utilization: On-prem X900 cluster utilization optimized from 87% to 92% through improved job scheduling and workload balancing. Inference serving now runs on dedicated partitions separate from training workloads, eliminating the latency spikes that impacted production last month.",
          "Model Serving Latency: P95 latency for the document analysis API dropped from 340ms to 185ms after migrating to batched inference with dynamic batching. This brings all client-facing AI endpoints within the 200ms SLA for the first time.",
          "Data Pipeline Health: The real-time market data ingestion pipeline processed 2.3B events this week with zero data loss. Three anomalies detected in the KYC document processing pipeline — all traced to malformed PDFs from a single vendor, now filtered at ingestion.",
          "Model Registry: 47 models in production across 12 use cases. All models now have automated drift detection and performance monitoring. Two models flagged for retraining based on accuracy degradation over the past 30 days.",
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "Quarterly Security Audit: Two medium-severity findings — (1) overly permissive VPC peering between the AI development and production environments, and (2) incomplete encryption-at-rest coverage for model artifact storage in the staging environment. Remediation PRs submitted; expected closure by Friday.",
          "SOC 2 Type II: 80% of controls documented and evidence collected. Remaining gaps in access review documentation and incident response testing. Target completion: end of March for auditor engagement.",
          "FedRAMP Authorization: Initial conversations with the FedRAMP PMO progressed to the documentation phase. The hybrid cloud architecture creates complexity around the authorization boundary — working with InfoSec to define the scope.",
        ],
      },
      {
        heading: "Data Residency & Model Risk",
        paragraphs: [
          "All production AI workloads now enforce data residency within US-East regions. Cross-region replication for disaster recovery uses encrypted transit with customer-managed keys. Audit logs demonstrate 100% compliance with the firm's data localization policy.",
          "Model Risk Management (MRM) framework for GenAI models is in final review. Key addition: mandatory human-in-the-loop review for any AI-generated content that reaches clients or regulators. Automated bias testing integrated into the CI/CD pipeline for all model deployments.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Infrastructure Incident Review",
        paragraphs: [
          "The GPU memory fragmentation issue that caused intermittent OOM errors on the inference cluster was root-caused to a memory allocator bug in the CUDA 12.3 driver. Workaround deployed (explicit memory pool pre-allocation) while waiting for the upstream fix from Titan Compute. No client-facing impact due to automatic failover to the backup cluster.",
          "Key takeaway: the redundant inference architecture paid for itself this week. Investment in multi-cluster failover means infrastructure incidents no longer translate to SLA breaches. Monitoring coverage expanded to include GPU memory fragmentation as a leading indicator.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-platform" },
      { type: "slack", label: "#infosec" },
      { type: "slack", label: "#incidents" },
      { type: "google-meet", label: "Infrastructure Weekly Review" },
      { type: "google-meet", label: "Security Audit Readout" },
      { type: "google-meet", label: "SOC 2 Preparation Sync" },
    ],
    suggestedActions: [
      {
        icon: "calendar",
        label: "Schedule VPC remediation review with InfoSec",
      },
      { icon: "clock", label: "Review SOC 2 evidence collection progress" },
      { icon: "mail", label: "Share FedRAMP scope document with PMO" },
    ],
  },

  // Talent Acquisition (latest: rpt-hp-1)
  "rpt-hp-1": {
    id: "rpt-hp-1",
    title: "Talent Acquisition",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "The AI Strategy & Tech Partnerships talent pipeline is active with six candidates across three critical roles. The urgency for AI/ML engineering hires has intensified as the firm-wide AI platform roadmap requires a 75% headcount increase by year-end. Compensation benchmarking against Big Tech companies remains the primary challenge — total comp packages for senior ML engineers at Google DeepMind and Meta FAIR are running 20-30% above JPM's current bands.",
        ],
      },
      {
        heading: "AI/ML Engineers (3 candidates)",
        paragraphs: [
          "Candidate A (ex-Google DeepMind): 8 years in large-scale model training and inference optimization. Led the deployment of Gemini's financial services fine-tuning pipeline. Strong expertise in distributed training across GPU clusters. On-site scheduled for next Tuesday.",
          "Candidate B (ex-Meta FAIR): 6 years in NLP research with a focus on document understanding and information extraction — directly relevant to our KYC automation and due diligence use cases. Published at NeurIPS and ICML. Phone screen completed; advancing to technical round.",
          "Candidate C (ex-Payvine): 5 years building ML infrastructure for fraud detection and risk scoring. Experience with real-time model serving at scale and A/B testing frameworks. Particularly strong on the MLOps and model monitoring side. Initial conversation went well; scheduling technical assessment.",
        ],
      },
      {
        heading: "AI Strategy & Partnership Managers (2 candidates)",
        paragraphs: [
          "Candidate D (ex-Palantir): 7 years in enterprise AI strategy and government/financial services deployments. Deep understanding of regulated industries and vendor evaluation frameworks. Would own the AI vendor evaluation process and partnership negotiations.",
          "Candidate E (ex-McKinsey Digital): 5 years in AI transformation advisory for Fortune 100 financial services clients. Strong analytical skills and executive communication. Would lead the build vs. buy analysis and internal stakeholder alignment across divisions.",
        ],
      },
      {
        heading: "Data Scientists (1 candidate)",
        paragraphs: [
          "Candidate F (ex-Two Sigma): 4 years in quantitative research and alternative data analysis. PhD in computational finance from Westbrook. Interested in transitioning from pure quant research to applied AI strategy. Would support the model risk management framework and AI use case validation.",
        ],
      },
      {
        heading: "Compensation & Open Roles",
        paragraphs: [
          "Senior AI/ML Engineer — Active (3 candidates). Comp range: $350-450K total. Google DeepMind offers at $480K+ are creating competitive pressure. Recommending a market adjustment for this role to close the gap.",
          "AI Strategy Manager — Active (2 candidates). Comp range: $280-350K total. Competitive with consulting exit packages but below Big Tech strategy roles.",
          "Senior Data Scientist — Active (1 candidate). Comp range: $300-380K total. Two Sigma comp is higher but candidate is motivated by the breadth of the AI strategy role.",
          "Head of AI Platform Engineering — Open (sourcing). This is the most critical hire — need someone to own the end-to-end AI platform architecture. Targeting VP-level from a top-tier tech company.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#talent-acquisition" },
      { type: "google-meet", label: "Hiring Pipeline Review" },
      { type: "google-meet", label: "Compensation Benchmarking Sync" },
    ],
    suggestedActions: [
      {
        icon: "calendar",
        label: "Confirm on-site schedule for NeuralForge candidate",
      },
      { icon: "mail", label: "Send comp adjustment proposal to HR" },
      {
        icon: "clock",
        label: "Review AI Platform Engineering job description",
      },
    ],
  },

  // Client Relationship Management (latest: rpt-cs-1)
  "rpt-cs-1": {
    id: "rpt-cs-1",
    title: "Client Relationship Management",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Internal client satisfaction with AI tools across divisions showed strong improvement this week, driven by the expanded rollout of document analysis capabilities in IB and the launch of meeting intelligence in Asset Management. Overall adoption rate for AI-powered tools reached 67% across covered divisions, up from 54% last month.",
          "Training completion rates remain a bottleneck — only 45% of eligible users have completed the mandatory AI tools onboarding module. Support ticket volume increased 18% week-over-week, primarily driven by new users in the TMT coverage group encountering onboarding friction.",
        ],
      },
      {
        heading: "Divisional Adoption Metrics",
        paragraphs: [
          "Investment Banking (Strong): 78% weekly active usage of AI tools across Coverage and M&A advisory teams. Pre-meeting briefs and deal document analysis are the highest-value features. Managing Directors in TMT and Healthcare coverage groups are the most active power users, averaging 12 AI-assisted workflows per week.",
          "Asset Management (Growing): 52% adoption in the first month of rollout. Portfolio review preparation and client correspondence drafting are the primary use cases. The fixed income team is requesting custom model fine-tuning for credit analysis — escalated to the AI platform team.",
          "Treasury Services (Early Stage): Pilot launched with 30 users in cash management. Focus on automated client reporting and payment pattern analysis. Too early for meaningful adoption metrics but engagement in training sessions is high.",
        ],
      },
      {
        heading: "Training & Support",
        paragraphs: [
          "Training Completion: 45% of eligible users (1,200 of 2,670) have completed the AI tools onboarding module. The bottleneck is scheduling — senior bankers consistently deprioritize training sessions. Recommending mandatory completion tied to Q2 performance reviews.",
          "Support Tickets: 340 tickets this week, up from 288 last week. Top issues: (1) document upload formatting errors (35%), (2) meeting transcription accuracy for multi-party calls (25%), (3) access provisioning delays (20%). The document upload issue has a known fix deploying Thursday.",
          "NPS Score: Internal NPS for AI tools is 42, up from 35 last month. Detractors primarily cite transcription accuracy and the lack of integration with Symphony (internal messaging). Promoters highlight time savings on deal preparation and client meeting prep.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Adoption Pattern Analysis",
        paragraphs: [
          "Across all divisions, three patterns define successful AI tool adoption: 1) Teams with a designated 'AI champion' (typically a VP or Director) show 2.3x higher adoption than those without. 2) Integration with existing workflows matters more than feature richness — the Bloomberg Terminal integration request from Equities Research is the top feature ask. 3) Trust builds through transparency — teams using tools with source citations show 40% higher retention than those using tools without.",
          "The strongest adoption signal comes from IB Coverage teams who use Sentra for meeting intelligence. These teams report that pre-meeting briefs with decision history and relationship context are 'transforming how we prepare for client calls.' This use case should be the centerpiece of the firm-wide expansion strategy.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-adoption" },
      { type: "slack", label: "#ai-support" },
      { type: "google-meet", label: "Divisional Adoption Review — IB" },
      { type: "google-meet", label: "Divisional Adoption Review — AM" },
      { type: "google-meet", label: "AI Training Program Sync" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Send training completion reminder to division heads",
      },
      { icon: "calendar", label: "Schedule AM custom model scoping session" },
      {
        icon: "mail",
        label: "Share adoption metrics with Operating Committee",
      },
    ],
  },

  // ─── RADARS ────────────────────────────────────────────────────────

  // Regulatory & Compliance (latest: radar-sxsw-1)
  "radar-sxsw-1": {
    id: "radar-sxsw-1",
    title: "Regulatory & Compliance",
    dateRange: "Feb 24, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "The regulatory landscape for AI in banking is tightening across multiple jurisdictions. Three significant regulatory developments this week require immediate attention: updated OCC guidance on AI model governance, SEC proposed rules on AI-driven trading algorithms, and new Fed supervisory expectations for model risk management in GenAI applications.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "OCC Guidance (SR 26-3): The OCC issued supplemental guidance on AI model governance in banking, expanding SR 11-7 requirements to explicitly cover large language models and generative AI. Key requirements include mandatory explainability documentation for all AI-generated outputs used in credit decisions, and quarterly model performance reviews with documented drift analysis.",
          "SEC Proposed Rules: The SEC's proposed rules on AI-driven trading would require firms to disclose the use of AI in algorithmic trading strategies and maintain audit trails of model decisions. Comment period closes April 15. Our legal team is drafting a response; the proposed disclosure requirements could impact our trade surveillance AI deployment timeline.",
          "Fed Supervisory Expectations: The Fed issued a supervisory letter outlining expectations for model risk management of GenAI tools. The letter emphasizes that existing MRM frameworks (SR 11-7) apply to GenAI but acknowledges the unique challenges around non-deterministic outputs and prompt sensitivity. Our MRM framework is 85% aligned; gap analysis underway.",
          "EU AI Act Implications: The EU AI Act's extraterritorial provisions may apply to JPM's European operations' use of US-hosted AI systems. Legal is assessing whether our London and Frankfurt offices' use of US-based AI tools triggers additional compliance requirements under the 'high-risk' AI system classification.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "The OCC guidance creates a potential 6-8 week delay in deploying new AI models to production if we need to retroactively document explainability for existing deployments. Recommending a prioritized documentation sprint for the top 10 production models.",
          "The SEC proposed rules, if adopted as written, would require significant changes to our trade surveillance AI architecture to support the audit trail requirements. Early engagement with the SEC through our industry association is critical.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#regulatory-affairs" },
      { type: "slack", label: "#ai-compliance" },
      { type: "google-meet", label: "Regulatory Impact Assessment" },
      { type: "google-meet", label: "Legal Review — SEC Proposed Rules" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Schedule MRM gap analysis review" },
      { icon: "mail", label: "Circulate OCC guidance summary to AI leads" },
      { icon: "clock", label: "Review SEC comment letter draft" },
    ],
  },

  // AI Vendor Landscape (latest: radar-pd-1)
  "radar-pd-1": {
    id: "radar-pd-1",
    title: "AI Vendor Landscape",
    dateRange: "Feb 24, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "AI vendor evaluations are in the final phase with Anthropic Claude emerging as the frontrunner for regulated financial services deployment. Head-to-head benchmarking across six banking-specific use cases is complete, and the evaluation committee is preparing recommendations for the Operating Committee presentation next week.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Anthropic Claude (Frontrunner): Demonstrated superior performance on regulatory document comprehension (94.2% accuracy vs. 89.1% for GPT-5 and 87.3% for Gemini), citation accuracy (97.8%), and instruction following in compliance-sensitive contexts. Enterprise agreement terms include dedicated capacity, custom fine-tuning, and on-prem deployment options. Data residency and SOC 2 requirements met.",
          "OpenAI GPT-5 Enterprise (Strong Contender): Best-in-class performance on code generation and quantitative analysis tasks. Enterprise tier pricing is competitive but the data processing agreement has unresolved clauses around training data usage. Legal flagged three provisions requiring renegotiation.",
          "Google Gemini Ultra (Pilot Phase): Running a limited pilot with 50 users in Equity Research for earnings transcript analysis. Multimodal capabilities (chart and table understanding) are a differentiator. However, latency is 2.3x higher than Claude for equivalent document analysis tasks.",
          "Cohere for Document Processing (Evaluation): Specialized evaluation for high-volume document classification and extraction in KYC workflows. Strong performance on structured document processing (invoices, identity documents) at 60% lower cost per token than general-purpose models. Recommended as a complementary tool alongside the primary LLM provider.",
        ],
      },
      {
        heading: "Evaluation Criteria & Benchmarks",
        paragraphs: [
          "All models were evaluated across six dimensions: accuracy on financial document comprehension, citation fidelity, latency at scale, data security and residency compliance, cost per inference, and vendor risk profile. Anthropic leads on 4 of 6 dimensions; OpenAI leads on code generation; Google leads on multimodal tasks.",
          "The MRM team has approved the evaluation methodology and will provide independent validation of results before the Operating Committee presentation. Final recommendation due by end of next week.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-vendor-eval" },
      { type: "slack", label: "#ai-strategy" },
      { type: "google-meet", label: "Vendor Evaluation Committee" },
      { type: "google-meet", label: "Anthropic Technical Deep Dive" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Review final benchmark results" },
      { icon: "calendar", label: "Schedule Operating Committee presentation" },
    ],
  },

  // Strategic Partnerships (latest: radar-part-1)
  "radar-part-1": {
    id: "radar-part-1",
    title: "Strategic Partnerships",
    dateRange: "Feb 25, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Strategic technology partnerships are advancing across five active engagements. The Anthropic enterprise agreement is the highest-priority deal, with the Sentra pilot expansion and Bloomberg AI integration close behind. Microsoft AssistAI rollout continues at scale while Palantir AIP is in early evaluation for compliance use cases.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Anthropic Enterprise Agreement: Term sheet under legal review. Dedicated Claude deployment for regulated financial services with custom fine-tuning rights. Key negotiation point: exclusivity window for banking-specific model capabilities. If signed, JPM becomes Anthropic's anchor financial services customer.",
          "Sentra Pilot Expansion: Organizational memory platform expanding from 60 to 200 seats. Pilot results exceeded benchmarks — 78% weekly active usage, 4.1-hour average weekly time savings per user, and 92% satisfaction among Managing Directors. Procurement vendor risk assessment scheduled for next Tuesday.",
          "Bloomberg AI Integration: Technical architecture review for integrating AI-powered research synthesis into Bloomberg Terminal workflows. Would serve 8,000+ JPM analysts across Equities Research, Fixed Income, and Economics. Bloomberg's API team is responsive; joint technical spec due in two weeks.",
          "Palantir AIP Evaluation: Early-stage evaluation for trade surveillance and regulatory compliance use cases. Initial demo showed strong capabilities for pattern detection across structured and unstructured data. Vendor risk team raised concerns around data sovereignty and the proprietary data model — assessment in progress.",
          "Microsoft AssistAI Rollout: Firm-wide deployment at 15,000 seats across corporate functions. Adoption is steady at 61% weekly active usage. Highest adoption in legal (78%) and finance (72%). Lowest in IB (34%) where bankers prefer specialized tools over general-purpose AssistAI.",
        ],
      },
      {
        heading: "Partnership Pipeline",
        paragraphs: [
          "Active: Anthropic (term sheet), Sentra (procurement review), Bloomberg (technical due diligence), Palantir (evaluation), Microsoft (rollout).",
          "Emerging: Databricks (data platform POC), Cohere (document processing evaluation).",
          "The combined book of business across active partnerships represents $47M in annual contract value.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#tech-partnerships" },
      { type: "google-meet", label: "Anthropic Partnership Review" },
      { type: "google-meet", label: "Sentra Pilot Expansion Planning" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send Anthropic term sheet redline to legal" },
      { icon: "calendar", label: "Schedule Bloomberg architecture review" },
    ],
  },

  // Market Risk Signals (latest: radar-churn-1)
  "radar-churn-1": {
    id: "radar-churn-1",
    title: "Market Risk Signals",
    dateRange: "Feb 26, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Multiple market risk signals converged this week that could impact the AI Strategy & Tech Partnerships division's budget and timeline. The Fed rate decision, rising AI infrastructure costs, intensifying talent competition, and regulatory uncertainty from proposed GenAI rules are creating headwinds that require proactive management.",
        ],
      },
      {
        heading: "Macroeconomic Signals",
        paragraphs: [
          "Fed Rate Decision (HIGH IMPACT): The Fed held rates steady but signaled a hawkish stance on inflation, reducing expectations for rate cuts in H2 2026. Impact on our division: technology investment budgets across the firm may face additional scrutiny in Q2 planning. The $47M partnership pipeline could see procurement delays if cost discipline tightens.",
          "AI Infrastructure Cost Inflation (MEDIUM IMPACT): GPU compute costs increased 15% quarter-over-quarter driven by demand from enterprise AI adoption. Titan Compute X900 pricing is firm with no volume discounts below 1,000-unit orders. Our on-prem cluster expansion budget is now 12% over initial estimates.",
        ],
      },
      {
        heading: "Talent Market Pressure",
        paragraphs: [
          "Competition for AI/ML talent intensified this week. Google DeepMind announced a 20% comp increase for senior researchers, and Anthropic's Series D valuation is driving aggressive equity packages that JPM's cash-heavy compensation cannot match. Three of our top candidates have competing offers.",
          "Mitigation: HR approved an accelerated hiring timeline for critical AI roles — reducing the interview-to-offer cycle from 6 weeks to 3 weeks. Also exploring research partnerships with universities (Westbrook, Ashmore, CMU) as an alternative talent pipeline.",
        ],
      },
      {
        heading: "Regulatory Uncertainty",
        paragraphs: [
          "The proposed GenAI rules from OCC and SEC (detailed in Regulatory & Compliance radar) create uncertainty around deployment timelines for AI tools in production banking workflows. If the SEC's proposed disclosure requirements for AI-driven trading are adopted as written, our trade surveillance AI pilot may need to be restructured.",
          "Risk appetite for new AI deployments may decrease in the short term as legal and compliance teams assess the regulatory landscape. Recommending proactive engagement with regulators through industry associations to shape the final rules.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#market-intelligence" },
      { type: "slack", label: "#ai-strategy" },
      { type: "google-meet", label: "Market Risk Assessment" },
      { type: "google-meet", label: "Talent Market Briefing" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Share budget impact analysis with CFO office" },
      { icon: "calendar", label: "Schedule accelerated candidate offers" },
      { icon: "mail", label: "Send regulatory risk summary to division heads" },
    ],
  },

  // Budget & Cost Management (latest: radar-exp-1)
  "radar-exp-1": {
    id: "radar-exp-1",
    title: "Budget & Cost Management",
    dateRange: "Feb 25, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "AI Strategy & Tech Partnerships division operating budget is $28.4M for FY2026, with $6.8M spent through February (24% burn rate, on pace). GPU compute costs and vendor licensing are the two largest line items, representing 62% of total spend. ROI tracking across AI initiatives shows a blended 2.8x return on deployed tools, above the firm's 2.0x threshold.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "GPU Compute Costs: On-prem cluster operating costs at $1.2M/month, up 15% from Q4 due to increased training workloads and the new inference serving partition. Cloud burst capacity (CloudPrime GovCloud) added $340K in February for peak workload overflow. Total compute spend is 8% over budget — the hybrid cloud migration should reduce this by Q3.",
          "AI Vendor Licensing: Current committed spend across AI vendors is $3.8M annually (Microsoft AssistAI $2.1M, various evaluation licenses $1.7M). The Anthropic enterprise agreement, if signed, would add $18M ACV but includes a $4.2M first-year discount. Net new vendor spend for FY2026 would be $13.8M, requiring a budget amendment.",
          "Cloud Infrastructure: CloudPrime GovCloud spend at $890K/month for AI workloads, up from $720K in January. Primary drivers: expanded model serving fleet, new data pipeline infrastructure for the KYC automation project, and disaster recovery environment provisioning.",
          "Headcount Budget: 45 FTEs currently, targeting 80 by year-end. Compensation budget for new hires estimated at $14.2M annually (loaded cost). Current run rate is $9.8M. The gap requires Q2 budget approval from the Operating Committee.",
        ],
      },
      {
        heading: "ROI Tracking",
        paragraphs: [
          "Document Analysis AI: $2.1M annual cost, $7.8M estimated productivity savings across 300 IB analysts. ROI: 3.7x.",
          "Meeting Intelligence (Sentra): $252K annual cost (60 seats), $1.1M estimated time savings based on pilot data. ROI: 4.4x. Expansion to 200 seats would increase cost to $840K with projected savings of $3.6M.",
          "Microsoft AssistAI: $2.1M annual cost, $4.8M estimated productivity savings across 15,000 seats. ROI: 2.3x. Below the average but justified by firm-wide coverage and baseline productivity improvement.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#ai-finance" },
      { type: "slack", label: "#budget-planning" },
      { type: "google-meet", label: "Monthly Budget Review" },
      { type: "google-meet", label: "ROI Analysis Sync" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Review GPU compute cost optimization plan" },
      {
        icon: "mail",
        label: "Submit Anthropic budget amendment to CFO office",
      },
    ],
  },

  // Competitive Intelligence (latest: radar-comp-1)
  "radar-comp-1": {
    id: "radar-comp-1",
    title: "Competitive Intelligence",
    dateRange: "Feb 26, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Competitive intelligence signals intensified this week as peer institutions accelerated their AI strategy execution. Morgan Vale, Morgan Stanley, Citi, Bank of America, and Wells Fargo all made notable moves in the AI space. JPM's differentiation lies in the breadth of our partnership approach and the depth of our model risk management framework, but the window for establishing a durable lead is narrowing.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Morgan Vale — GS AI Platform: Goldman expanded their internal AI platform to 10,000 seats across IB and Asset Management. Their approach is vertically integrated — proprietary models trained on Goldman's data, deployed on internal infrastructure. Strength: data moat from decades of deal history. Weakness: siloed by division with no cross-divisional knowledge graph. Their build-first strategy is expensive and slow to iterate.",
          "Morgan Stanley — Deloitte Partnership: Morgan Stanley deepened their Deloitte partnership for AI transformation, focusing on wealth management and client advisory. The partnership model gives them consulting bench strength but creates dependency. Their AI-powered 'Next Best Action' tool for financial advisors is reportedly seeing strong adoption in the wealth management division.",
          "Citi — AI-First Strategy: Citi's new CEO doubled down on the 'AI-first' strategy announced last quarter, committing $2B in AI investment over three years. Focus areas: trade operations automation, regulatory reporting, and client onboarding. Their aggressive spending creates pressure on JPM to match investment levels.",
          "Bank of America — Erica Evolution: BofA's Erica virtual assistant now handles 1.5B client interactions annually and is being extended to commercial banking. Their consumer AI advantage is significant but the technology doesn't translate easily to institutional banking where JPM has its primary book of business.",
          "Wells Fargo — LLM Deployment: Wells Fargo deployed an internal LLM for employee productivity, focusing on document summarization, email drafting, and meeting notes. Early adoption metrics are modest (38% weekly active usage). Their conservative approach reflects ongoing regulatory scrutiny — a constraint JPM doesn't face to the same degree.",
        ],
      },
      {
        heading: "Strategic Implications",
        paragraphs: [
          "Goldman's build-first approach creates a genuine competitive threat in IB where proprietary deal data is a moat. JPM's partnership-first strategy (Anthropic, Sentra, Bloomberg) trades data exclusivity for speed-to-market and vendor innovation. The right answer is likely a hybrid — and that's exactly what our build vs. buy analysis recommends.",
          "The most actionable insight: no peer institution has cracked the cross-divisional knowledge graph problem. This is JPM's biggest opportunity — connecting IB, AM, Treasury, and Commercial Banking intelligence into a unified organizational memory. The Sentra pilot in IB Coverage is the first step toward this vision.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#competitive-intel" },
      { type: "slack", label: "#ai-strategy" },
      { type: "google-meet", label: "Competitive Intelligence Briefing" },
      { type: "google-meet", label: "Goldman AI Platform Analysis" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Update competitive landscape deck for OpCo" },
      {
        icon: "mail",
        label: "Share Goldman competitive analysis with CTO office",
      },
    ],
  },
};

const fallbackDetail: ReportDetail = {
  id: "fallback",
  title: "Weekly Review",
  dateRange: "",
  sections: [
    {
      heading: "Executive Summary",
      paragraphs: [
        "This report covers the standard weekly review period for the AI Strategy & Tech Partnerships division. Key developments include progress across vendor evaluations, partnership negotiations, infrastructure modernization, and divisional AI adoption initiatives.",
      ],
    },
    {
      heading: "Highlights",
      paragraphs: [
        "Technology infrastructure continued to stabilize with improved GPU cluster utilization and model serving performance. Partnership pipeline advanced with multiple deals progressing through procurement and legal review. Talent acquisition efforts focused on closing senior AI/ML engineering candidates.",
      ],
    },
  ],
  sources: [
    { type: "slack", label: "#ai-strategy" },
    { type: "google-meet", label: "Weekly Sync" },
  ],
  suggestedActions: [
    { icon: "mail", label: "Review action items from this period" },
  ],
};

export function getReportDetail(reportId: string): ReportDetail {
  if (reportDetailMap[reportId]) {
    return reportDetailMap[reportId];
  }

  const prefix = reportId.replace(/-\d+$/, "");
  const latestKey = `${prefix}-1`;
  if (reportDetailMap[latestKey]) {
    const latest = reportDetailMap[latestKey];
    return { ...latest, id: reportId };
  }

  return { ...fallbackDetail, id: reportId };
}
