import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e9ecef] px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#8f1131]">Design Pages</h1>
        <p className="mt-2 text-[#3f3f46]">
          Open each design using its dedicated route.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/transport-maritime"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Transport & Maritime - /transport-maritime
          </Link>
          <Link
            href="/ship-management"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Ship Management - /ship-management
          </Link>
          <Link
            href="/workflow-efficiency"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Workflow Efficiency - /workflow-efficiency
          </Link>
          <Link
            href="/vessel-landing"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Vessel Landing - /vessel-landing
          </Link>
          <Link
            href="/our-service"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Our Service - /our-service
          </Link>
          <Link
            href="/footer-dark"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Footer Dark - /footer-dark
          </Link>
          <Link
            href="/faq-section"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            FAQ Section - /faq-section
          </Link>
          <Link
            href="/latest-article"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Latest Article - /latest-article
          </Link>
          <Link
            href="/maritime-insights"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Maritime Insights - /maritime-insights
          </Link>
          <Link
            href="/who-we-are"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Who We Are - /who-we-are
          </Link>
          <Link
            href="/global-leaders"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            Global Leaders - /global-leaders
          </Link>
          <Link
            href="/what-we-do"
            className="rounded-xl border border-[#d7d9df] bg-[#f8f9fb] px-4 py-3 text-[#1f2937] transition-colors hover:bg-[#eef1f5]"
          >
            What We Do - /what-we-do
          </Link>
        </div>
      </section>
    </main>
  );
}
