"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";

const ThemeSwitcher = dynamic(
  () => import("./ThemeSwitcher").then((m) => ({ default: m.ThemeSwitcher })),
  { ssr: false }
);

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  {
    ssr: false,
    loading: () => (
      <span className="theme-text-muted text-lg sm:text-xl md:text-2xl mt-3 block font-light tracking-wide">
        توسعه‌دهنده فول‌استک
      </span>
    ),
  }
);

const skills = [
  { name: "React", image: "/images/skills/react.png" },
  { name: "Vue", image: "/images/skills/vue.png" },
  { name: "Nuxtjs", image: "/images/skills/nuxtjs.png" },
  { name: "Tailwind", image: "/images/skills/tailwind.png" },
  { name: "Laravel", image: "/images/skills/laravel.png" },
  { name: "Livewire", image: "/images/skills/livewire.png" },
  { name: "MySQL", image: "/images/skills/mysql.png" },
  { name: "Next", image: "/images/skills/Next.js.png" },

];

const projects = [
  {
    id: 1,
    title: "وب سایت سفارش پکیج ژنتیکی",
    description: "سیستم مدیریت و سفارش پکیج های مختلف ژنتیکی.",
    image: "/images/projects/mirrogene.png",
    link: "https://panel.mirrogene.com",
  },
  {
    id: 2,
    title: "فیفا کارت",
    description: "سیستم خرید و ترید کارت های بازی فیفا.",
    image: "/images/projects/fifacard.png",
    link: "https://fifacards.ir/",
  },
  {
    id: 3,
    title: "وب سایت MSI",
    description: "سیستم کوپن امتیاز و خرید و سفارش محصولات MSI.",
    image: "/images/projects/msi-project.png",
    link: "https://club.msifarsi.com/",
  },
  {
    id: 4,
    title: "ویسینگ مپ",
    description: "سیستم آپلود فایل صوتی برای مکان های گردشگری مختلف.",
    image: "/images/projects/voicingmap.png",
    link: "https://voicingmap.com/en/app",
  },
  {
    id: 5,
    title: "کراش کوین",
    description: "وب سایت پرداخت با نوع جدید و امن",
    image: "/images/projects/crash-coin.png",
    link: "https://crash-coin.cash/",
  },
  {
    id: 6,
    title: "جاوید مال",
    description: "وب سایت فروشگاهی خرید لوازم آرایشی",
    image: "/images/projects/javidmal.png",
    link: "https://javidmal.com/",
  },
   {
    id: 7,
    title: "ملکینو",
    description: "وب سایت املاکی ثبت و معامله ملک",
    image: "/images/projects/melkinoo.jpg",
    link: "https://melkinoo.ir/",
  },
   {
    id: 8,
    title: "زر روز",
    description: "وب سایت خرید/فروش طلا و نقره انلاین",
    image: "/images/projects/zarrooz.png",
    link: "https://zarrooz.ir/",
  },
];

const socialLinks = [
  { icon: FaGithub, text: "گیتهاب", link: "https://github.com/amir13861010", brand: "github" },
  { icon: FaLinkedin, text: "لینکدین", link: "www.linkedin.com/in/amir-rezazadeh-934660241", brand: "linkedin" },
  { icon: HiMail, text: "ایمیل", link: "mailto:4amir.amro@gmail.com", brand: "email" },
  { icon: FaTelegram, text: "تلگرام", link: "https://t.me/am101012", brand: "telegram" },
  { icon: FaInstagram, text: "اینستاگرام", link: "https://instagram.com/amir_.webdev", brand: "instagram" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen page-bg flex flex-col items-center p-4 sm:p-6 md:p-10 relative overflow-hidden">
      <ThemeSwitcher />

      <div className="orb orb-1 w-[500px] h-[500px] -top-32 -right-32" aria-hidden="true" />
      <div className="orb orb-2 w-[400px] h-[400px] bottom-0 -left-24" aria-hidden="true" />
      <div className="orb orb-3 w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div
        className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover stars-overlay pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        className="w-full max-w-6xl liquid-glass-strong rounded-[2rem] p-6 sm:p-8 md:p-10 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <header className="flex flex-col sm:flex-row items-center gap-8">
          <motion.div
            className="avatar-ring shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/84017.jpg"
              alt="امیر محمد رضازاده — توسعه‌دهنده فول‌استک"
              width={144}
              height={144}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-white/20 shadow-2xl relative z-10"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>

          <div className="text-center sm:text-right w-full">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              امیر محمد رضازاده
            </motion.h1>

            <TypeAnimation
              sequence={["توسعه‌دهنده فول‌استک", 2000, "متخصص React و Laravel", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="theme-text-muted text-lg sm:text-xl md:text-2xl mt-3 block font-light tracking-wide"
            />

            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 theme-text-subtle text-sm sm:text-base mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full status-dot animate-pulse" aria-hidden="true" />
                ارومیه، ایران
              </span>
              <span className="hidden sm:inline theme-text-faint" aria-hidden="true">
                |
              </span>
              <span>متولد: ۱۳۸۶/۰۸/۰۹</span>
            </motion.div>
          </div>
        </header>

        <nav
          className="mt-8 flex flex-wrap justify-center sm:justify-end gap-3"
          aria-label="شبکه‌های اجتماعی"
        >
          <motion.div
            className="contents"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.brand}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.text}
                  className={`social-glass social-${link.brand}`}
                  variants={itemVariants}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                  {link.text}
                </motion.a>
              );
            })}
          </motion.div>
        </nav>

        <section aria-labelledby="skills-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="skills-heading" className="section-title mt-12">
              مهارت‌ها
            </h2>
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 list-none p-0 m-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="liquid-glass-card text-center p-5 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3">
                    <div
                      className="absolute inset-0 rounded-xl skill-glow blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />
                    <img
                      src={skill.image}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold theme-text-muted group-hover:text-[color:var(--foreground)] transition-colors">
                    {skill.name}
                  </h3>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        <section aria-labelledby="projects-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="projects-heading" className="section-title mt-12">
              نمونه کارها
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  className="liquid-glass-card overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={192}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 project-image-overlay" aria-hidden="true" />
                    <div className="absolute bottom-3 right-4 left-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="theme-text-muted text-sm sm:text-base text-right leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn flex items-center justify-center gap-2"
                    >
                      مشاهده پروژه
                      <HiOutlineExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <footer
          className="mt-12 pt-6 border-t theme-text-faint text-center text-sm"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          ساخته شده با ❤️ توسط امیر محمد رضازاده
        </footer>
      </motion.div>
    </main>
  );
}
