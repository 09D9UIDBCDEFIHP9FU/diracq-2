import Navbar from "@/components/Navbar";
import Link from "next/link";

const products = [
  {
    title: "SPAD Modules",
    description:
      "High-performance single-photon avalanche diode modules designed for advanced photon detection applications.",
    href: "/products/spad-modules",
    number: "01",
  },
  {
    title: "InGaAs Detectors",
    description:
      "Advanced InGaAs detector solutions for high-speed and near-infrared photon detection.",
    href: "/products/ingaas-detectors",
    number: "02",
  },
  {
    title: "SNSPD Systems",
    description:
      "Ultra-sensitive superconducting nanowire single-photon detector systems for demanding applications.",
    href: "/products/snspd-systems",
    number: "03",
  },
  {
    title: "Tunable Lasers",
    description:
      "Precision tunable laser systems engineered for flexible wavelength control and advanced optical applications.",
    href: "/products/tunable-lasers",
    number: "04",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.12),transparent_35%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              OUR PRODUCTS
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Advanced Technologies
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Built for the Future
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              Explore DiracQ Systems&apos; advanced photonics and quantum
              technology solutions engineered for precision, performance and
              next-generation applications.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] lg:p-10"
                >
                  <div className="absolute right-6 top-6 text-5xl font-bold text-white/5 transition-colors duration-500 group-hover:text-cyan-400/10">
                    {product.number}
                  </div>

                  <div className="relative z-10">
                    <span className="text-sm font-medium tracking-[3px] text-cyan-400">
                      PRODUCT {product.number}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                      {product.title}
                    </h2>

                    <p className="mt-5 max-w-xl leading-7 text-gray-400">
                      {product.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 font-semibold text-white transition-all duration-300 group-hover:gap-5 group-hover:text-cyan-400">
                      Explore Product
                      <span className="text-xl">→</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}