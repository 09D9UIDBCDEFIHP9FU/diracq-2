import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    desc: "Custom AI models tailored to your domain, from NLP to computer vision.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },
  {
    title: "Analytics Platform",
    slug: "analytics-platform",
    desc: "End-to-end analytics: ingestion, transformation, visualization and alerts.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
  {
    title: "Cloud Services",
    slug: "cloud-services",
    desc: "Managed cloud infra, deployments, and MLOps to scale your models.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  },
  {
    title: "Dashboard",
    slug: "dashboard",
    desc: "Custom dashboards with live metrics, segmentation and alerts.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Explore the product suite — click any card to learn more.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 text-sm text-cyan-600 font-medium">Learn more →</div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
