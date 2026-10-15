import Link from "next/link";
import { Kicker, Rule } from "@/components/Rule";
import {
  connectionFormUrl,
  email,
  eventsUrl,
  meetingUrl,
  signupUrl,
  startupsUrl,
  team,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      <p className="font-mono text-[11px] tracking-[0.22em] text-blue uppercase">Student chapter</p>
      <h1 className="wordmark mt-4 text-4xl leading-[1.15] text-blue sm:text-6xl">DUKE IEEE</h1>
      <p className="mt-8 max-w-xl text-xl leading-snug">
        Bridging the gap between industry, faculty, and students.
      </p>
      <p className="mt-2 max-w-xl text-xl leading-snug font-medium">
        A student-run society for ECE and CS undergraduates at Duke.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] tracking-[0.16em] uppercase">
        <a href={signupUrl} className="text-blue underline decoration-blue/30 underline-offset-4">
          Join Duke Groups →
        </a>
        <a href={eventsUrl} className="text-ink underline decoration-ink/25 underline-offset-4 hover:text-blue">
          View events
        </a>
      </div>

      <Rule />

      <section>
        <Kicker index="01">About</Kicker>
        <h2 className="mt-3 text-4xl tracking-tight">About Duke IEEE</h2>
        <p className="mt-8 text-[1.125rem] leading-relaxed">
          IEEE is the world&apos;s largest technical professional organization for electrical and
          electronics engineering. Duke IEEE is a student-run, pre-professional society at Duke
          University for ECE and CS undergraduates that aims to bridge the gap between students,
          faculty, and industry.
        </p>
        <p className="mt-5 text-[1.125rem] leading-relaxed">
          Duke IEEE strives to accomplish this goal with initiatives both on and off campus,
          including hosting industry, alumni, and faculty speaker events, as well as facilitating
          undergraduate participation in conferences.
        </p>
        <p className="mt-8 font-mono text-[12px] tracking-[0.14em] text-blue uppercase">
          A network of over 400 students on campus
        </p>
      </section>

      <Rule />

      <section>
        <Kicker index="02">Conference</Kicker>
        <h2 className="mt-3 text-4xl tracking-tight">Supercomputing 2026</h2>
        <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed text-ink/90">
          We&apos;re selecting undergraduates to attend SC26 with full funding for registration,
          travel, and lodging. Scan the QR code to apply — limited space, so fill it out ASAP.
        </p>
        <figure className="figure-grid mt-8 border border-[#d5daf2] p-4 sm:p-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-blue uppercase">Fig. 01 — Application</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blog/supercomputing-qr.png"
            alt="IEEE Supercomputing 2026 application flyer with QR code"
            className="mx-auto w-full max-w-md"
          />
        </figure>
        <Link
          href="/blog/supercomputing-26-st-louis"
          className="mt-6 inline-flex font-mono text-[12px] tracking-[0.16em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
        >
          Learn more →
        </Link>
      </section>

      <Rule />

      <section>
        <Kicker index="03">Work</Kicker>
        <h2 className="mt-3 text-4xl tracking-tight">Work at a Duke Startup</h2>
        <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed">
          Explore exciting opportunities at startups founded by Duke students and alumni.
        </p>
        <a
          href={startupsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex font-mono text-[12px] tracking-[0.16em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
        >
          Browse opportunities →
        </a>
      </section>

      <Rule />

      <section className="border border-line bg-white/35 px-6 py-8 sm:px-8">
        <Kicker index="04">Partners</Kicker>
        <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">Interested in being an industry partner?</h2>
        <p className="mt-4 max-w-xl text-[1.125rem] leading-relaxed">
          Gain direct access to top Duke engineers and support the next generation of technology
          leaders.
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-6 inline-flex font-mono text-[12px] tracking-[0.14em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
        >
          {email}
        </a>
      </section>

      <Rule />

      <section>
        <Kicker index="05">People</Kicker>
        <h2 className="mt-3 text-4xl tracking-tight">Executive team</h2>
        <p className="mt-4 text-lg text-muted">Meet the leaders driving Duke IEEE forward.</p>
        <div className="mt-4">
          {team.map((member, index) => (
            <article key={member.name} className="grid grid-cols-[4.5rem_1fr] gap-5 border-t border-line py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="mt-1 aspect-square w-full object-cover"
              />
              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-blue uppercase">
                  {String(index + 1).padStart(2, "0")} · {member.role}
                </p>
                <h3 className="mt-1 text-2xl tracking-tight">{member.name}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/85">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Rule />

      <section>
        <Kicker index="06">Resources</Kicker>
        <h2 className="mt-3 text-4xl tracking-tight">Resources</h2>
        <p className="mt-4 text-lg text-muted">Quick access to important forms and tools.</p>
        <div className="mt-6 border-t border-line">
          <a
            href={connectionFormUrl}
            target="_blank"
            rel="noreferrer"
            className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-blue uppercase">Submit</span>
            <span>
              <span className="block text-xl">Report network connection</span>
              <span className="mt-1 block text-muted">Report a connection to industry or an alumni.</span>
            </span>
            <span className="font-mono text-[12px] text-blue">→</span>
          </a>
          <a
            href={meetingUrl}
            target="_blank"
            rel="noreferrer"
            className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-blue uppercase">Book</span>
            <span>
              <span className="block text-xl">Schedule meeting</span>
              <span className="mt-1 block text-muted">Book time with our executive team.</span>
            </span>
            <span className="font-mono text-[12px] text-blue">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
