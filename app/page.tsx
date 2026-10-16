"use client";

import Image from "next/image";
import { useState } from "react";

const moments = [
  { title: "That smile", caption: "A smile worth keeping forever.", extra: "This one deserves a spot right at the start.", image: "/anne-1.png" },
  { title: "The close-up", caption: "A little moment, captured just as it was.", extra: "Some photos don’t need a big story to be special.", image: "/anne-2.png" },
  { title: "The playful one", caption: "A little filter, a lot of personality.", extra: "The shy allegations are getting harder to believe.", image: "/anne-3.png" },
  { title: "A little mischief", caption: "Proof that she knows how to have fun.", extra: "Exhibit A in the case against 'I’m shy.'", image: "/anne-4.png" },
  { title: "Just Lady Anne", caption: "One of those photos you want to save.", extra: "A little reminder of what makes her, her.", image: "/anne-5.png" },
  { title: "Soft moments", caption: "Some moments feel extra lovely.", extra: "And this one belongs here.", image: "/anne-6.png" },
];

const tickerItems = [
  "NATURE LOVER",
  "PEACE SEEKER",
  "NOT ACTUALLY SHY",
  "CERTIFIED PINCH EXPERT",
  "FORMER 4 AM CLUB MEMBER",
  "SMALL BUT MIGHTY",
  "LOVER OF QUIET MOMENTS",
  "FULL OF SURPRISES",
  "SUNSHINE APPRECIATOR",
  "ONE OF A KIND",
];

const facts = [
  { theme: "fact-sage", icon: "❀", title: "A soft spot for nature", description: "Fresh air, peaceful places, and all the little beautiful things the world has to offer.", secret: "Best found somewhere with a view and absolutely no rush." },
  { theme: "fact-peach", icon: "☺", title: "“I’m shy,” she says", description: "A statement currently under review by everyone who has ever gotten to know her.", secret: "The investigation is ongoing. The evidence is not in her favor." },
  { theme: "fact-yellow", icon: "☾", title: "Former 4 AM club member", description: "Once upon a time, bedtime was more of a suggestion than an actual plan.", secret: "The moon probably knew her by name." },
  { theme: "fact-lilac", icon: "✳", title: "Small but mighty", description: "Proof that the biggest personalities sometimes come in the smallest packages.", secret: "Approach with care. The pinch radius is surprisingly large." },
];

function EmojiBurst({ emojis, count }: { emojis: string[]; count: number }) {
  if (count === 0) return null;
  return <div className="flying-emojis" key={count} aria-hidden="true">{emojis.map((emoji, index) => <span key={index}>{emoji}</span>)}</div>;
}

const pinchSteps = [
  { message: "🌿 All peaceful. Let's keep it that way.", button: "Press to tease Anne", reaction: "shh... peace.", icon: "🌿" },
  { message: "👀 She noticed. You can still stop.", button: "Tease her again", reaction: "I see you.", icon: "👀" },
  { message: "😒 She's giving you THE look.", button: "Keep teasing", reaction: "Really?", icon: "😒" },
  { message: "😠 Okay, now she's annoyed. Last chance.", button: "Press your luck", reaction: "Last chance!", icon: "😠" },
  { message: "🤏 PINCHED! Anne told you so.", button: "Say sorry to Anne", reaction: "Told you!", icon: "🤏" },
];

const gardenFlowers = ["🌼", "🌸", "✿", "🌺", "🌼", "🌷", "✿", "🌸", "🌻", "🌼", "🌺", "✿", "🌷", "🌸", "🌼", "🌻", "✿"];

const flyingEmojis = [
  ["♡", "💚", "✨", "♡", "🌿", "💚", "✨", "♡", "🌿", "♡"],
  ["👀", "✦", "🌿", "👀", "✨", "✦", "🌿", "👀", "✦", "✨"],
  ["😒", "💢", "✦", "😒", "💢", "✦", "😒", "💢", "✦", "💢"],
  ["😠", "💢", "⚡", "😠", "⚡", "💢", "😠", "⚡", "💢", "⚡"],
  ["🤏", "💥", "⚡", "🤏", "💥", "⚡", "🤏", "💥", "⚡", "💥"],
];

const compliments = [
  "I’m really glad we’re friends, Anne.",
  "You say you’re shy, but you always make me laugh.",
  "I like how you find joy in the little things, especially nature.",
  "Your pinch threats are surprisingly effective, by the way.",
  "Talking with you makes my day better.",
  "You’re a lot more fun than your ‘shy’ label suggests.",
  "I hope you get a quiet moment outside today.",
  "You make me smile without even trying.",
  "I promise to annoy you a little less. Maybe.",
  "You have a way of making simple conversations fun.",
  "I hope you know how much I appreciate you.",
  "You deserve a day as peaceful as your favorite place in nature.",
  "If I get pinched, at least I made you laugh first.",
  "The little moments with you are the ones I remember.",
  "I’m lucky I get to call you my friend.",
];

export default function Home() {
  const [pinchStage, setPinchStage] = useState(0);
  const [burstCount, setBurstCount] = useState(0);
  const [gardenBloom, setGardenBloom] = useState(0);
  const [openFact, setOpenFact] = useState<number | null>(null);
  const [factBurstCount, setFactBurstCount] = useState(0);
  const [burstFactIndex, setBurstFactIndex] = useState<number | null>(null);
  const [openMoment, setOpenMoment] = useState<number | null>(null);
  const [momentBurstCount, setMomentBurstCount] = useState(0);
  const [burstMomentIndex, setBurstMomentIndex] = useState<number | null>(null);
  const [noteBurstCount, setNoteBurstCount] = useState(0);
  const [complimentIndex, setComplimentIndex] = useState(-1);

  return (
    <main>
      <header className="site-header wrap">
        <a className="brand" href="#home" aria-label="Lady Anne Appreciation Society, back to top">
          <span className="brand-mark">✳</span>
          <span>lady anne<span className="brand-dot">.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about"><span aria-hidden="true">01</span> The Anne Files</a>
          <a href="#moments"><span aria-hidden="true">02</span> The Scrapbook</a>
          <a href="#note"><span aria-hidden="true">03</span> A Little Letter</a>
        </nav>
        <a className="header-pill" href="#surprise">Try your luck <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero wrap" id="home">
        <EmojiBurst count={gardenBloom} emojis={["🌸", "✿", "🌿", "🌼", "✦", "🌸", "✿", "🌿", "🌼", "✦"]} />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-sparkle">✳</span> A VERY OFFICIAL APPRECIATION PAGE <span className="eyebrow-line" /></div>
          <h1>The world is a little <em>lovelier</em> with Lady Anne in it<span className="heading-period">.</span></h1>
          <p>A cozy little corner of the internet dedicated to nature, laughter, and a certain someone who definitely isn’t as shy as she says.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#about">Open the Anne files <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#moments">Flip through memories <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-footnote"><span className="tiny-flower">✿</span> Made with a lot of love (and a little teasing)</div>
          <button className="garden-button" type="button" onClick={() => setGardenBloom((count) => count + 1)}>{gardenBloom === 0 ? "Make the garden bloom" : gardenBloom < 4 ? "Grow more flowers" : "Bloom again"} <span aria-hidden="true">✿</span></button>
        </div>
        <div className="hero-art">
          <div className="art-sun" />
          <div className="art-hill art-hill-back" />
          <div className="art-hill art-hill-front" />
          <div className="hero-photo-frame"><Image src="/anne-2.png" alt="Lady Anne in a close-up selfie" fill sizes="(max-width: 700px) 45vw, (max-width: 1050px) 25vw, 240px" className="hero-photo" preload /></div>
          <div className="art-stem stem-one"><span>✿</span></div>
          <div className="art-stem stem-two"><span>✿</span></div>
          <div className="art-stem stem-three"><span>✿</span></div>
          <div className="art-sparkle sparkle-one">✧</div>
          <div className="art-sparkle sparkle-two">✧</div>
          <div className="photo-flowers" aria-hidden="true"><span>✿</span><span>✿</span><span>✿</span><span>✿</span></div>
          <div className="art-caption"><span className="caption-heart">♥</span> one of a kind, always</div>
          <div className="art-sticker"><span>100%</span><small>lovely human</small></div>
          {gardenBloom > 0 && <div className="garden-blooms" key={gardenBloom} aria-hidden="true">
                      {gardenFlowers.slice(0, Math.min(5 + gardenBloom * 3, gardenFlowers.length)).map((flower, index) => <span key={index}>{flower}</span>)}
                    </div>}
        </div>
      </section>

      <div className="ticker" aria-label="A few things about Lady Anne">
        <div className="ticker-inner">
          {[0, 1].map((copy) => <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
            {tickerItems.map((item) => <span className="ticker-item" key={item}>{item}<b aria-hidden="true">✳</b></span>)}
          </div>)}
        </div>
      </div>

      <section className="about-section wrap section-pad" id="about">
        <div className="section-heading"><div><span className="label">01 / THE PERSON</span><h2>A little about <em>her.</em></h2></div><p>Some facts, some affectionate allegations, and absolutely no exaggeration. Probably.</p></div>
        <div className="fact-grid">
          {facts.map((fact, index) => (
            <article className={`fact-card ${fact.theme} ${burstFactIndex === index ? "burst-card" : ""}`} key={fact.title}>
              {burstFactIndex === index && <EmojiBurst count={factBurstCount} emojis={["✿", "✦", "☺", "🌿", "✿", "✦", "☺", "🌿", "✿", "✦"]} />}
              <span className="fact-number">0{index + 1} —</span><span className="fact-icon">{fact.icon}</span>
              <h3>{fact.title}</h3><p>{fact.description}</p>
              <button className="reveal-button" type="button" aria-expanded={openFact === index} aria-controls={`fact-extra-${index}`} onClick={() => {
                setOpenFact((current) => current === index ? null : index);
                setBurstFactIndex(index);
                setFactBurstCount((count) => count + 1);
              }}>{openFact === index ? "Hide the little secret −" : "A little secret +"}</button>
              <p className="fact-secret" id={`fact-extra-${index}`} hidden={openFact !== index}>{fact.secret}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moments-section section-pad" id="moments">
        <div className="wrap"><div className="section-heading"><div><span className="label">02 / THE MEMORIES</span><h2>Little moments, <em>big smiles.</em></h2></div><p>A place for the photos and memories that make this little page hers.</p></div>
          <div className="moments-grid">{moments.map((moment, index) => <article className={`moment-card ${burstMomentIndex === index ? "burst-card" : ""}`} key={moment.title}>
            {burstMomentIndex === index && <EmojiBurst count={momentBurstCount} emojis={["📸", "✦", "♡", "🌼", "📸", "✦", "♡", "🌼", "✦", "♡"]} />}
            <div className="moment-image">
              <Image src={moment.image} alt={`Portrait of Lady Anne, photo ${index + 1}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" className="moment-photo" />
              <span className="moment-index">0{index + 1}</span>
            </div>
            <div className="moment-copy">
              <h3>{moment.title}</h3><p>{moment.caption}</p>
              <button className="reveal-button" type="button" aria-expanded={openMoment === index} aria-controls={`moment-extra-${index}`} onClick={() => {
                setOpenMoment((current) => current === index ? null : index);
                setBurstMomentIndex(index);
                setMomentBurstCount((count) => count + 1);
              }}>{openMoment === index ? "Close little note −" : "Open little note +"}</button>
              <p className="moment-secret" id={`moment-extra-${index}`} hidden={openMoment !== index}>{moment.extra}</p>
            </div>
          </article>)}</div>
          <p className="gallery-note">Six little snapshots of one very lovely person.</p>
        </div>
      </section>

      <section className="surprise-section wrap section-pad" id="surprise">
        <EmojiBurst count={burstCount} emojis={flyingEmojis[pinchStage]} />
        <div className="surprise-copy">
          <span className="label">03 / FAIR WARNING</span>
          <h2>Mess with the peace. <em>Meet the pinch.</em></h2>
          <p>Lady Anne likes her peace. Keep annoying her and, well... don’t say nobody warned you.</p>
          <div className="pinch-meter" aria-hidden="true">{[1, 2, 3, 4].map((step) => <span className={step <= pinchStage ? "filled" : ""} key={step} />)}</div>
          <p className="pinch-payoff" role="status" aria-live="polite">{pinchSteps[pinchStage].message}</p>
          <button className="button button-dark pinch-button" type="button" onClick={() => {
                      setPinchStage((stage) => stage === 4 ? 0 : stage + 1);
                      setBurstCount((count) => count + 1);
                    }}>
            {pinchSteps[pinchStage].button}
          </button>
        </div>
        <div className="surprise-art" data-stage={pinchStage} aria-hidden="true">
          <div className="surprise-circle"><span className="reaction-face" key={pinchStage}>{pinchSteps[pinchStage].icon}</span></div>
          <div className="surprise-bubble" key={`bubble-${pinchStage}`}>{pinchSteps[pinchStage].reaction}</div>
          {pinchStage > 0 && <div className="reaction-sparks" key={`sparks-${pinchStage}`}><span>{pinchStage < 2 ? "✦" : "💢"}</span><span>{pinchStage === 4 ? "⚡" : "✦"}</span><span>✳</span></div>}
          <div className="surprise-star">✳</div>
        </div>
      </section>

      <section className="note-section" id="note">
        <EmojiBurst count={noteBurstCount} emojis={["♡", "💚", "✦", "💛", "♡", "✦", "💚", "♡", "💛", "✦"]} />
        <div className="note-inner wrap">
          <span className="note-doodle" aria-hidden="true">✿</span><span className="label">A LITTLE NOTE, JUST FOR YOU</span>
          <h2>Dear Lady Anne,</h2>
          <p>Jokes aside, you make ordinary days more fun and the world a little warmer. I hope this tiny corner of the internet makes you smile as much as you make other people smile.</p>
          <p className="note-signoff">You’re pretty wonderful. Don’t forget it. <span>♡</span></p>
          <div className="compliment-box"><span>This is for uhh</span><button type="button" onClick={() => {
            setComplimentIndex((index) => (index + 1) % compliments.length);
            setNoteBurstCount((count) => count + 1);
          }}>{complimentIndex < 0 ? "Say something nice" : "Another one, please"}</button></div>
          <p className="compliment-text" role="status" aria-live="polite">{complimentIndex >= 0 ? compliments[complimentIndex] : "I made this for you, Anne. I hope it makes you smile."}</p>
        </div>
      </section>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">✳</span><span>lady anne<span className="brand-dot">.</span></span></a><p>Made for Lady Anne, with love and a tiny bit of mischief.</p><a href="#home">Back to the beginning ↑</a></footer>
    </main>
  );
}
