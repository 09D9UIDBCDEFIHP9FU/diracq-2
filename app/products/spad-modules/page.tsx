import Link from "next/link";
import Image from "next/image";

export default function SpadModulesPage() {
  return (
    <>
      <main className="min-h-screen bg-[#08111f] text-white pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-10 md:py-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(0,200,255,0.15),transparent_35%)]" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
                DIRACQ PRODUCTS
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[0.98] md:text-6xl lg:text-7xl">
                SPAD
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Modules
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-gray-400 md:text-lg md:leading-8">
                High-performance single-photon avalanche diode modules designed
                for precise photon detection and advanced quantum applications.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
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
            <div className="relative mt-2 md:mt-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-cyan-950/40">
                <Image
                  src="/images/spad-detector-module.jpg"
                  alt="Advanced electronics used in SPAD photon detection systems"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/85 via-transparent to-cyan-400/10" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
                      Photon detection
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Fast and precise counting
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-sm">
                    SPAD
                  </span>
                </div>
              </div>

              <div className="absolute -left-2 -top-2 h-9 w-9 rounded-tl-xl border-l-2 border-t-2 border-cyan-300/70" />
              <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-br-xl border-b-2 border-r-2 border-cyan-300/70" />
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