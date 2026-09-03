import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SpadModulesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(0,200,255,0.15),transparent_35%)]" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
                DIRACQ PRODUCTS
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                SPAD
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Modules
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                High-performance single-photon avalanche diode modules designed
                for precise photon detection and advanced quantum applications.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400"
                >
                  Contact Us
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  All Products
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_50%)]" />

                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_80px_rgba(0,200,255,0.2)]" />

                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(0,200,255,0.8)]" />

                <div className="absolute left-1/2 top-1/2 h-px w-4/5 -translate-x-1/2 bg-cyan-400/20" />

                <div className="absolute left-1/2 top-1/2 h-4/5 w-px -translate-y-1/2 bg-cyan-400/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              KEY CAPABILITIES
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Precision photon detection
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "High sensitivity",
                "Fast response",
                "Reliable operation",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <span className="text-sm text-cyan-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {item}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    Engineered for demanding photon detection and quantum
                    technology applications.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}