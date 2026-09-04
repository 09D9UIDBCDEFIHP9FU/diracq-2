import Link from "next/link";
import Image from "next/image";

export default function SnspdSystemsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#08111f] text-white pt-24">
        <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.14),transparent_35%)]" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
                DIRACQ PRODUCTS
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[0.98] md:text-6xl lg:text-7xl">
                SNSPD
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Systems
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
                Ultra-sensitive superconducting nanowire single-photon
                detector systems engineered for advanced quantum and photonics
                research.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-cyan-500 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-400"
                >
                  Contact Us
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
                >
                  All Products
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-cyan-500/15 blur-3xl" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-cyan-400/25 bg-slate-900 shadow-2xl shadow-cyan-950/40">
                <Image
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1200&q=85"
                  alt="Photon detection equipment in a research laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/85 via-transparent to-cyan-400/10" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
                      Photon detection
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Built for quantum precision
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-sm">
                    SNSPD
                  </span>
                </div>
              </div>

              <div className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-xl border-l-2 border-t-2 border-cyan-300/70" />
              <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-br-xl border-b-2 border-r-2 border-cyan-300/70" />
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              KEY CAPABILITIES
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Ultra-sensitive photon detection
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "Ultra-low noise",
                "High detection efficiency",
                "Quantum applications",
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
                    Built for demanding research environments and advanced
                    quantum photonics applications.
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