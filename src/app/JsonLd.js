export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "امیر محمد رضازاده",
    jobTitle: "توسعه‌دهنده فول‌استک",
    address: {
      "@type": "PostalAddress",
      addressLocality: "ارومیه",
      addressCountry: "IR",
    },
    email: "4amir.amro@gmail.com",
    url: "https://github.com/amir13861010",
    sameAs: [
      "https://github.com/amir13861010",
      "https://t.me/am101012",
      "https://instagram.com/amir_.webdev",
    ],
    knowsAbout: ["React", "Vue", "Laravel", "Tailwind CSS", "MySQL"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
