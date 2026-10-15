import Link from "next/link";
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
    <main>
      <section className="px-6 pb-24 pt-24 text-center">
        <h1 className="text-6xl font-light tracking-tight text-slate-900 sm:text-7xl">Duke IEEE</h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-500">
          Bridging the gap between industry, faculty, and students
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href={signupUrl}
            className="rounded-full bg-duke px-6 py-3 text-sm font-medium text-white transition hover:bg-duke/90"
          >
            Join Duke Groups
          </a>
          <a href={eventsUrl} className="text-sm font-medium text-duke hover:underline">
            View Events
          </a>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-light text-slate-900">About Duke IEEE</h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            IEEE is the world&apos;s largest technical professional organization for electrical and
            electronics engineering. Duke IEEE is a student-run, pre-professional society at Duke
            University for ECE and CS undergraduates that aims to bridge the gap between students,
            faculty, and industry.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Duke IEEE strives to accomplish this goal with initiatives both on and off campus,
            including hosting industry, alumni, and faculty speaker events, as well as facilitating
            undergraduate participation in conferences.
          </p>
          <p className="mt-8 text-lg font-medium text-duke">
            Duke IEEE boasts a network of over 400 students on campus
          </p>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-light text-slate-900">Supercomputing 2026</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            We&apos;re selecting undergraduates to attend SC26 with full funding for registration,
            travel, and lodging. Scan the QR code to apply — limited space, so fill it out ASAP!
          </p>
          <div className="mx-auto mt-10 max-w-md rounded-[2rem] bg-[#c6ef6a] p-4 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/blog/supercomputing-qr.png"
              alt="IEEE Supercomputing 2026 application flyer with QR code"
              className="w-full rounded-[1.4rem]"
            />
          </div>
          <Link
            href="/blog/supercomputing-26-st-louis"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-duke hover:underline"
          >
            Learn more <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 text-center">
        <h2 className="text-4xl font-light text-slate-900">Work at a Duke Startup</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
          Explore exciting opportunities at startups founded by Duke students and alumni.
        </p>
        <a
          href={startupsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-duke px-6 py-3 text-sm font-medium text-white transition hover:bg-duke/90"
        >
          Browse Opportunities
          <span aria-hidden>↗</span>
        </a>
      </section>

      <section className="bg-duke px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-light">Interested in Being an Industry Partner?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          Gain direct access to top Duke engineers and support the next generation of technology
          leaders.
        </p>
        <a href={`mailto:${email}`} className="mt-8 inline-flex items-center gap-2 text-lg">
          <span aria-hidden>✉</span>
          Contact us at <span className="underline">{email}</span>
        </a>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-light text-slate-900">Executive Team</h2>
            <p className="mt-4 text-lg text-slate-500">Meet the leaders driving Duke IEEE forward</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-full object-cover ring-8 ring-slate-100"
                />
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 font-medium text-duke">{member.role}</p>
                <p className="mt-4 text-left text-[15px] leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-light text-slate-900">Resources</h2>
            <p className="mt-4 text-lg text-slate-500">Quick access to important forms and tools</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-medium text-slate-900">Report Network Connection</h3>
              <p className="mt-2 text-slate-500">Report a connection to industry or an alumni</p>
              <a
                href={connectionFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-duke hover:underline"
              >
                Submit
              </a>
            </article>
            <article className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-medium text-slate-900">Schedule Meeting</h3>
              <p className="mt-2 text-slate-500">Book time with our executive team</p>
              <a
                href={meetingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-duke hover:underline"
              >
                Book
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
