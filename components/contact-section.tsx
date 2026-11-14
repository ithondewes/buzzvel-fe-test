import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Have a question? We’re here to help. Whether you’re looking for the right course,
            learning with your team or interested in teaching with Luma, we’d love to hear from you.
          </p>
          <ul className="mt-8 grid gap-3">
            <li className="rounded-2xl bg-paper p-4">
              <p className="text-sm font-semibold">Email</p>
              <a href="mailto:contact@luma.com" className="text-sm text-blue hover:underline">
                contact@luma.com
              </a>
            </li>
            <li className="rounded-2xl bg-paper p-4">
              <p className="text-sm font-semibold">Response time</p>
              <p className="text-sm text-muted">Up to 24 hours on business days</p>
            </li>
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm sm:p-8">
          <h3 className="font-display text-2xl font-bold">Contact us</h3>
          <p className="mt-1 text-sm text-muted">Fill out the fields and we will get in touch.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
