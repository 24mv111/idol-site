import { useMemo, useState } from "react";
import { answerOffsets, idolGroups, questions, type IdolGroup } from "./data";
import { strengthByGroup } from "./strengthData";

type Screen = "home" | "quiz" | "result";

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="推し、見つけて？">
      <span aria-hidden="true">♡</span>
      <span>推し、見つけて？</span>
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) {
  return (
    <button
      className={`action-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="screen home-screen">
      {/* 背景の星 */}
      <div className="star-bg" aria-hidden="true">
        <span className="bg-star star-1">✦</span>
        <span className="bg-star star-2">✧</span>
        <span className="bg-star star-3">✦</span>
        <span className="bg-star star-4">✧</span>
        <span className="bg-star star-5">✦</span>
        <span className="bg-star star-6">✦</span>
        <span className="bg-star star-7">✧</span>
        <span className="bg-star star-8">✦</span>
        <span className="bg-star star-9">✧</span>
        <span className="bg-star star-10">✦</span>
        <span className="bg-star star-11">✧</span>
        <span className="bg-star star-12">✦</span>
        <span className="bg-star star-13">✦</span>
        <span className="bg-star star-14">✧</span>
        <span className="bg-star star-15">✦</span>
      </div>
      {/* ハート・星 */}
      <div className="decor decor-heart" aria-hidden="true">
        ♡
      </div>

      <div className="decor decor-star" aria-hidden="true">
        ✦
      </div>

      <div className="decor decor-heart-2" aria-hidden="true">
        ♡
      </div>

      <div className="decor decor-heart-3" aria-hidden="true">
        ♡
      </div>

      <div className="decor decor-star-2" aria-hidden="true">
        ✦
      </div>

      <div className="decor decor-star-3" aria-hidden="true">
        ✦
      </div>

      <div className="decor decor-star-4" aria-hidden="true">
        ✧
      </div>

      {/* ドット */}
      <div className="decor decor-dot dot-1" aria-hidden="true"></div>
      <div className="decor decor-dot dot-2" aria-hidden="true"></div>

      {/* 背景の光 */}
      <div className="decor decor-glow glow-1" aria-hidden="true"></div>
      <div className="decor decor-glow glow-2" aria-hidden="true"></div>

      {/* 白い光の流線 */}
      <div className="idol-line idol-line-1" aria-hidden="true"></div>
      <div className="idol-line idol-line-2" aria-hidden="true"></div>
      <div className="idol-line idol-line-3" aria-hidden="true"></div>
      <div className="idol-line idol-line-4" aria-hidden="true"></div>

      {/* 細かいキラキラ */}
      <div className="mini-sparkle sparkle-1" aria-hidden="true">
        ✦
      </div>
      <div className="mini-sparkle sparkle-2" aria-hidden="true">
        ✧
      </div>
      <div className="mini-sparkle sparkle-3" aria-hidden="true">
        ✦
      </div>
      <div className="mini-sparkle sparkle-4" aria-hidden="true">
        ✧
      </div>
      <div className="mini-sparkle sparkle-5" aria-hidden="true">
        ✦
      </div>
      <div className="mini-sparkle sparkle-6" aria-hidden="true">
        ✧
      </div>
      <div className="mini-sparkle sparkle-7" aria-hidden="true">
        ✦
      </div>
      <div className="mini-sparkle sparkle-8" aria-hidden="true">
        ✧
      </div>
      {/* 大きな半透明の丸 */}
      <div className="dream-circle dream-circle-1" aria-hidden="true"></div>
      <div className="dream-circle dream-circle-2" aria-hidden="true"></div>
      <div className="dream-circle dream-circle-3" aria-hidden="true"></div>
      <div className="dream-circle dream-circle-4" aria-hidden="true"></div>

      {/* ぼんやりした光 */}
      <div className="bokeh bokeh-1" aria-hidden="true"></div>
      <div className="bokeh bokeh-2" aria-hidden="true"></div>
      <div className="bokeh bokeh-3" aria-hidden="true"></div>
      <div className="bokeh bokeh-4" aria-hidden="true"></div>
      <div className="bokeh bokeh-5" aria-hidden="true"></div>
      <div className="bokeh bokeh-6" aria-hidden="true"></div>
      {/* ペンライト */}
      <div className="penlight penlight-1" aria-hidden="true"></div>
      <div className="penlight penlight-2" aria-hidden="true"></div>
      <div className="penlight penlight-3" aria-hidden="true"></div>
      <div className="penlight penlight-4" aria-hidden="true"></div>
      {/* ペンライト */}
      <div className="penlight penlight-1" aria-hidden="true"></div>
      <div className="penlight penlight-2" aria-hidden="true"></div>
      <div className="penlight penlight-3" aria-hidden="true"></div>
      <div className="penlight penlight-4" aria-hidden="true"></div>
      <div className="penlight penlight-5" aria-hidden="true"></div>
      <div className="penlight penlight-6" aria-hidden="true"></div>
      <div className="penlight penlight-7" aria-hidden="true"></div>
      <div className="penlight penlight-8" aria-hidden="true"></div>

      <section className="home-card">
        <p className="eyebrow">YOUR IDOL MATCH</p>
        <div className="title-lockup">
          <span className="title-sparkle" aria-hidden="true">
            ✦
          </span>
          <h1>推し、見つけて？</h1>
          <span className="title-heart" aria-hidden="true">
            ♡
          </span>
        </div>
        <p className="home-lead">あなたに合うアイドルを見つけよう。</p>
        <div className="tiny-divider" aria-hidden="true">
          <span />
          <span>♡</span>
          <span />
        </div>
        <p className="home-copy">
          いくつかの質問に答えるだけで、
          <br />
          あなたにぴったりのアイドルをご紹介します。
        </p>
        <ActionButton onClick={onStart}>
          診断をはじめる <span aria-hidden="true">→</span>
        </ActionButton>
        <p className="home-note">全10問・所要時間 約2分</p>
      </section>
    </main>
  );
}

function QuizScreen({
  current,
  answers,
  onSelect,
  onBack,
  onNext,
}: {
  current: number;
  answers: Array<number | null>;
  onSelect: (answer: number) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const question = questions[current];
  const number = String(current + 1).padStart(2, "0");

  return (
    <main className="screen quiz-screen">
      {/* 背景の星 */}
      <div className="star-bg" aria-hidden="true">
        <span className="bg-star star-1">✦</span>
        <span className="bg-star star-2">✧</span>
        <span className="bg-star star-3">✦</span>
        <span className="bg-star star-4">✧</span>
        <span className="bg-star star-5">✦</span>
        <span className="bg-star star-6">✦</span>
        <span className="bg-star star-7">✧</span>
        <span className="bg-star star-8">✦</span>
        <span className="bg-star star-9">✧</span>
        <span className="bg-star star-10">✦</span>
        <span className="bg-star star-11">✧</span>
        <span className="bg-star star-12">✦</span>
        <span className="bg-star star-13">✦</span>
        <span className="bg-star star-14">✧</span>
        <span className="bg-star star-15">✦</span>
      </div>
      <header className="site-header">
        <BrandMark />
        <p>あなたの“好き”を聞かせてください</p>
      </header>
      <section className="quiz-card">
        <div className="question-meta">
          <div>
            <p className="eyebrow">QUESTION {number}</p>
            <p className="question-label">{question.label}</p>
          </div>
          <p className="question-count">
            <strong>{current + 1}</strong> / {questions.length}
          </p>
        </div>

        <h2>{question.text}</h2>
        <div
          className="answer-list"
          role="radiogroup"
          aria-label={question.text}
        >
          {question.options.map((option, index) => {
            const selected = answers[current] === index;
            return (
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                className={`answer-card${selected ? " selected" : ""}`}
                onClick={() => onSelect(index)}
                key={option}
              >
                <span className="answer-icon" aria-hidden="true">
                  {selected ? "♥" : "♡"}
                </span>
                <span>{option}</span>
                <span className="answer-check" aria-hidden="true">
                  {selected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>

        <div className="quiz-actions">
          <ActionButton onClick={onBack} variant="secondary">
            ← 戻る
          </ActionButton>
          <ActionButton onClick={onNext} disabled={answers[current] === null}>
            {current === questions.length - 1 ? "結果を見る" : "次へ"} →
          </ActionButton>
        </div>

        <div className="progress-block">
          <div className="progress-label">
            <span>PROGRESS</span>
            <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-valuenow={current + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
          >
            <span
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ResultCard({
  group,
  index,
  total,
}: {
  group: IdolGroup;
  index: number;
  total: number;
}) {
  return (
    <article className="result-card">
      <p className="match-number">{index + 1}位</p>
      <h2>{group.name}</h2>

      <div className="result-image">
        {group.image ? (
          <img src={group.image} alt={`${group.name}のグループ写真`} />
        ) : (
          <div className="image-placeholder" aria-label="グループ写真準備中">
            <span aria-hidden="true">✦</span>
            <p>PHOTO</p>
            <small>Coming soon</small>
          </div>
        )}
      </div>

      {group.copyright && <p className="image-copyright">{group.copyright}</p>}
      <div className="result-copy">
        <span aria-hidden="true">♡</span>
        <p>{group.description}</p>
      </div>

      {group.recommendedSongs.length > 0 && (
        <div className="recommended-songs">
          <h3>🎧 おすすめ楽曲</h3>

          <ul>
            {group.recommendedSongs.map((song) => (
              <li key={song}>{song}</li>
            ))}
          </ul>
        </div>
      )}

      {group.members.length > 0 && (
        <div className="pickup-members">
          <div className="pickup-title">
            <span></span>
            <p>♡ PICK UP MEMBERS ♡</p>
            <span></span>
          </div>

          <div className="member-grid">
            {group.members.map((member) => (
              <div className="member-card" key={member.name}>
                <img
                  src={member.image}
                  alt={`${member.name}の写真`}
                  className="member-image"
                />

                <h3>{member.name}</h3>
                <p className="member-furigana">{member.furigana}</p>

                <div className="member-profile">
                  <p>生年月日：{member.birthday}</p>
                  <p>出身地：{member.birthplace}</p>
                  <p>身長：{member.height}</p>
                  <p>血液型：{member.bloodType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function ResultScreen({
  results,
  onReset,
}: {
  results: IdolGroup[];
  onReset: () => void;
}) {
  return (
    <main className="screen result-screen">
      {/* 背景の星 */}
      <div className="star-bg" aria-hidden="true">
        <span className="bg-star star-1">✦</span>
        <span className="bg-star star-2">✧</span>
        <span className="bg-star star-3">✦</span>
        <span className="bg-star star-4">✧</span>
        <span className="bg-star star-5">✦</span>
        <span className="bg-star star-6">✦</span>
        <span className="bg-star star-7">✧</span>
        <span className="bg-star star-8">✦</span>
        <span className="bg-star star-9">✧</span>
        <span className="bg-star star-16">♡</span>
        <span className="bg-star star-17">✧</span>
        <span className="bg-star star-18">✦</span>
        <span className="bg-star star-19">♡</span>
        <span className="bg-star star-20">✧</span>
        <span className="bg-star star-21">•</span>
        <span className="bg-star star-22">✦</span>
        <span className="bg-star star-23">♡</span>

        <span className="bg-star star-24">✧</span>
        <span className="bg-star star-25">♡</span>
        <span className="bg-star star-26">✦</span>
        <span className="bg-star star-27">♡</span>
        <span className="bg-star star-28">•</span>
        <span className="bg-star star-29">✧</span>
        <span className="bg-star star-30">✦</span>
        <span className="bg-star star-10">✦</span>
        <span className="bg-star star-11">✧</span>
        <span className="bg-star star-12">✦</span>
        <span className="bg-star star-13">✦</span>
        <span className="bg-star star-14">✧</span>
        <span className="bg-star star-15">✦</span>
      </div>
      <header className="site-header">
        <BrandMark />
      </header>
      <section className="result-intro">
        <div className="complete-badge">
          <span>✦</span> ANALYSIS COMPLETE <span>✦</span>
        </div>
        <p>あなたにおすすめなのは…</p>
      </section>
      <section
        className={`result-grid${results.length === 1 ? " single" : ""}`}
      >
        {results.map((group, index) => (
          <ResultCard
            group={group}
            index={index}
            total={results.length}
            key={group.name}
          />
        ))}
      </section>
      <div className="reset-area">
        <ActionButton onClick={onReset}>もう一度診断する ↻</ActionButton>
        <p>新しい“推し”との出会いを、もう一度。</p>
      </div>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array(questions.length).fill(null),
  );

  const results = useMemo(() => {
    if (answers.some((answer) => answer === null)) return [];

    const genderAnswer = answers[0];

    const candidates = idolGroups.filter((group) => {
      if (genderAnswer === 0) return group.gender === "male";
      if (genderAnswer === 1) return group.gender === "female";
      return true;
    });

    const scored = candidates.map((group, originalIndex) => {
      let score = 0;

      const strengthCount = {
        high: 0,
        medium: 0,
        low: 0,
      };

      answers.forEach((answer, questionIndex) => {
        if (answer === null) return;

        const answerIndex = answerOffsets[questionIndex] + answer;

        // 今まで通りの点数計算
        score += group.points[answerIndex];

        // 強さを確認
        const strength = strengthByGroup[group.name]?.[answerIndex];

        if (strength === "high") {
          strengthCount.high += 1;
        }

        if (strength === "medium") {
          strengthCount.medium += 1;
        }

        if (strength === "low") {
          strengthCount.low += 1;
        }
      });

      return {
        group,
        score,
        strengthCount,
        originalIndex,
      };
    });

    const ranked = scored.sort((a, b) => {
      // ① まず通常の合計点
      if (a.score !== b.score) {
        return b.score - a.score;
      }

      // ② 同点なら「かなり当てはまる」の数
      if (a.strengthCount.high !== b.strengthCount.high) {
        return b.strengthCount.high - a.strengthCount.high;
      }

      // ③ それも同じなら「当てはまる」の数
      if (a.strengthCount.medium !== b.strengthCount.medium) {
        return b.strengthCount.medium - a.strengthCount.medium;
      }

      // ④ それも同じなら「やや当てはまる」の数
      if (a.strengthCount.low !== b.strengthCount.low) {
        return b.strengthCount.low - a.strengthCount.low;
      }

      // ⑤ 全部同じだった場合
      // data.ts に登録されている順番を使う
      return a.originalIndex - b.originalIndex;
    });

    // 上位3組だけを結果にする
    return ranked.slice(0, 3).map(({ group }) => group);
  }, [answers]);

  const start = () => {
    setCurrent(0);
    setScreen("quiz");
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setScreen("home");
  };

  const next = () => {
    if (answers[current] === null) return;
    if (current === questions.length - 1) {
      setScreen("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setCurrent((value) => value + 1);
  };

  const back = () => {
    if (current === 0) {
      setScreen("home");
      return;
    }
    setCurrent((value) => value - 1);
  };

  if (screen === "home") return <HomeScreen onStart={start} />;
  if (screen === "result")
    return <ResultScreen results={results} onReset={reset} />;
  return (
    <QuizScreen
      current={current}
      answers={answers}
      onSelect={(answer) => {
        setAnswers((previous) => {
          const nextAnswers = [...previous];
          nextAnswers[current] = answer;
          return nextAnswers;
        });
      }}
      onBack={back}
      onNext={next}
    />
  );
}
