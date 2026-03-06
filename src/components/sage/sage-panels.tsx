import { useState, useCallback, useEffect, useRef } from "react";
import s from "./sage.module.css";
import { TRANSCRIPT, CHAT_SUGGESTIONS } from "./sageData";
import { IcoSearch, IcoCopy, IcoMinus, IcoChevronRight } from "./sage-icons";

const MOCK_CHAT_RESPONSES: Record<string, string> = {
  "What were the key decisions made?":
    "Four key decisions emerged from this meeting: 1) The team will standardize on Inter font over the system default, as it tested better with the target demographic of 35-55 year old operators. 2) Grayscale color scheme was preferred over pure white backgrounds \u2014 Ashwin noted it feels more \u2018serious and trustworthy\u2019 for enterprise. 3) In-context chat is now a must-have for enterprise demos, as multiple prospects have specifically asked about it. 4) Reports section consolidation has clear value but needs a clearer UX before shipping \u2014 the current prototype confused 2 of 3 test users on first interaction.",
  "Summarize the enterprise feedback":
    "The enterprise feedback was overwhelmingly positive across all three demo sessions. Ashwin rated his confidence for enterprise demos at \u2018100% or more\u2019 with the new interface, noting that the prototype is self-explanatory without engineering context. The target demographic (35-55, primarily CoS and BizOps leaders) prefers professional, clear design over flashy UI. Technology and financial services sectors show the strongest pain points around organizational memory, with decision audit trails being the most-requested feature. Two prospects (Vantage and Relay) specifically mentioned they\u2019d pay a premium for SOC 2 compliance and SSO support.",
  "List all action items from this meeting":
    "Five action items were assigned during this meeting: 1) Schedule a follow-up design review with the broader team including sales reps \u2014 Justin to coordinate by Friday. 2) Iterate on size/spacing feedback for the memory section, specifically the card density that Ashwin flagged as \u2018too cramped on smaller screens.\u2019 3) Prepare an enterprise-specific demo script highlighting decision audit trails and team permissions \u2014 needed before the Vantage follow-up next Tuesday. 4) Prioritize the enterprise demo flow refinement in Sprint 14, targeting completion before SXSW. 5) Kristina to draft a security whitepaper that addresses SOC 2 timeline questions from prospects.",
  "What concerns were raised about feature adoption?":
    "Two main adoption concerns surfaced: First, risk radar has low adoption despite its technical value. Users consistently say \u2018we have meetings and OKRs\u2019 \u2014 it\u2019s too abstracted from their daily workflow and doesn\u2019t connect to the tools they already use. The team discussed reframing it as \u2018commitment tracking\u2019 to better match user mental models. Second, the weekly business reports and swim lanes remain the most popular features, but engagement drops off after the first 3 weeks unless a team champion actively promotes usage. Ashwin suggested building an \u2018aha moment\u2019 into the first week of onboarding to improve long-term retention.",
};

export function TranscriptPanel({ onClose }: { onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className={s.transcriptPanel}>
      <div className={s.transcriptHeader}>
        <span className={s.transcriptHeaderTitle}>Transcript</span>
        <div className={s.transcriptHeaderSpacer} />
        <div className={s.transcriptHeaderActions}>
          <button
            type="button"
            className={s.chromeIconBtn}
            aria-label="Search transcript"
          >
            <IcoSearch />
          </button>
          <button
            type="button"
            className={s.chromeIconBtn}
            aria-label="Copy transcript"
          >
            <IcoCopy />
          </button>
          <button
            type="button"
            className={s.chromeIconBtn}
            onClick={onClose}
            aria-label="Minimize transcript"
          >
            <IcoMinus />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className={s.transcriptScroll}>
        {TRANSCRIPT.map((line, i) => (
          <div
            key={i}
            className={
              line.isUser ? s.transcriptLineUser : s.transcriptLineOther
            }
          >
            <div className={s.transcriptLineHeader}>
              <div
                className={
                  line.isUser ? s.transcriptSpeakerYou : s.transcriptSpeaker
                }
              >
                {line.isUser ? "You" : line.speaker}
              </div>
              <span className={s.transcriptTime}>{line.time}</span>
            </div>
            <div className={s.transcriptBubble}>{line.text}</div>
          </div>
        ))}
      </div>
      <div className={s.transcriptBottom}>
        <div className={s.transcriptLive}>
          <div className={s.transcriptLiveDot} />
          Live
        </div>
        <div className={s.bottomBarLeft}>
          <button type="button" className={s.resumeBtn} onClick={onClose}>
            Back to Notes
          </button>
        </div>
        <div className={s.langSelector}>
          English <IcoChevronRight />
        </div>
      </div>
    </div>
  );
}

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSuggestion = useCallback((sug: string) => {
    setMessages((prev) => [...prev, { role: "user", text: sug }]);
    const response =
      MOCK_CHAT_RESPONSES[sug] ||
      "I can help with that. Let me look through the meeting notes...";
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
    }, 800);
  }, []);

  return (
    <div className={s.chatPanel}>
      <div className={s.chatHeader}>
        <span className={s.chatHeaderTitle}>Ask about this meeting</span>
        <button
          type="button"
          className={s.chromeIconBtn}
          onClick={onClose}
          aria-label="Minimize chat"
        >
          <IcoMinus />
        </button>
      </div>
      <div ref={scrollRef} className={s.chatScroll}>
        {messages.length === 0 && (
          <div className={s.chatSuggestions}>
            {CHAT_SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                type="button"
                className={s.chatSuggestBtn}
                onClick={() => handleSuggestion(sug)}
              >
                {sug}
              </button>
            ))}
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role === "user" ? s.chatUserMsg : s.chatAiMsg}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={s.chatInputBar}>
        <button type="button" className={s.askInputBtn} style={{ flex: 1 }}>
          Ask anything...
        </button>
      </div>
    </div>
  );
}
