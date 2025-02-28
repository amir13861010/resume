"use client";

import React from "react";
import Head from "next/head";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const skills = [
  { name: "React", image: "./images/skills/react.png" },
  { name: "Vue", image: "./images/skills/vue.png" },
  { name: "Nuxtjs", image: "./images/skills/nuxtjs.png" },
  { name: "Tailwind", image: "./images/skills/tailwind.png" },
  { name: "Laravel", image: "./images/skills/laravel.png" },
  { name: "Livewire", image: "./images/skills/livewire.png" },
  { name: "MySQL", image: "./images/skills/mysql.png" },
];

const projects = [
  {
    id: 1,
    title: "وب سایت سفارش پکیج ژنتیکی",
    description: "سیستم مدیریت و سفارش پکیج های مختلف ژنتیکی.",
    image: "./images/projects/mirrogene.png",
    link: "https://panel.mirrogene.com",
  },
  {
    id: 2,
    title: "فیفا کارت",
    description: "سیستم خرید و ترید کارت های بازی فیفا.",
    image: "./images/projects/fifacard.png",
    link: "fifacards.ir",
  },
  {
    id: 3,
    title: "وب سایت MSI",
    description: "سیستم کوپن امتیاز و خرید و سفارش محصولات MSI.",
    image: "./images/projects/msi-project.png",
    link: "https://club.msifarsi.com/",
  },
  {
    id: 4,
    title: "ویسینگ مپ",
    description: "سیستم آپلود فایل صوتی برای مکان های گردشگری مختلف.",
    image: "./images/projects/voicingmap.png",
    link: "voicingmap.com",
  },
  {
    id: 5,
    title: "کراش کوین",
    description: "وب سایت پرداخت با نوع جدید و امن",
    image: "./images/projects/crash-coin.png",
    link: "https://crash-coin.cash/",
  },
  {
    id: 6,
    title: "جاوید مال",
    description: "وب سایت فروشگاهی خرید لوازم آرایشی",
    image: "./images/projects/javidmal.png",
    link: "javidmal.com",
  },
];

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>رزومه امیر محمد رضازاده | توسعه‌دهنده فول‌استک</title>
        <meta
          name="description"
          content="رزومه حرفه‌ای امیر محمد رضازاده، توسعه‌دهنده فول‌استک با تخصص در React و Laravel."
        />
        <meta name="keywords" content="رزومه, توسعه‌دهنده, React, Laravel" />
        <meta name="author" content="امیر محمد رضازاده" />
      </Head>

      <div
        dir="rtl"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover opacity-20"></div>

        <motion.div
          className="w-full max-w-6xl bg-gray-800/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-lg border border-gray-700/30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src="./images/84017.jpg"
              alt="امیر محمد رضازاده"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-gray-600/50 shadow-lg"
              loading="lazy"
            />
            <div className="text-center sm:text-right w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                امیر محمد رضازاده
              </h1>
              <TypeAnimation
                sequence={[
                  "توسعه‌دهنده فول‌استک",
                  2000,
                  "متخصص React و Laravel",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-2 block"
              />
              <div className="text-gray-400 text-sm sm:text-base md:text-lg mt-2">
                <span>ارومیه، ایران</span> | <span>تاریخ تولد: ۱۳۸۶/۰۸/۰۹</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap justify-center sm:justify-end gap-3">
            {[
              { icon: <GitHubIcon />, text: "گیتهاب", color: "#333", link: "https://github.com/amir13861010" },
              { icon: <LinkedInIcon />, text: "لینکدین", color: "#0A66C2", link: "https://linkedin.com/in/your-linkedin" },
              { icon: <EmailIcon />, text: "ایمیل", color: "#D14836", link: "mailto:4amir.amro@gmail.com" },
              { icon: <TelegramIcon />, text: "تلگرام", color: "#0088CC", link: "https://t.me/am101012" },
              { icon: <InstagramIcon />, text: "اینستاگرام", color: "#E4405F", link: "https://instagram.com/amir_.webdev" },
            ].map((link, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.text}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: link.color,
                      "&:hover": { backgroundColor: `${link.color}CC` },
                      gap: "8px",
                      borderRadius: "12px",
                      padding: "6px 12px",
                      fontSize: "0.875rem",
                    }}
                    startIcon={link.icon}
                  >
                    {link.text}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-10 border-b border-gray-600/30 pb-2 text-right">
            مهارت‌ها
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-gray-700/20 text-center p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow backdrop-blur-md border border-gray-700/30"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={skill.image}
                  alt={`مهارت ${skill.name}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Projects Section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-10 border-b border-gray-600/30 pb-2 text-right">
            نمونه کارها
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-700/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="h-40 sm:h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-label={project.title}
                ></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-right text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base text-right">
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#3b82f6",
                        color: "#3b82f6",
                        "&:hover": { backgroundColor: "#3b82f6", color: "#fff" },
                        marginTop: "1rem",
                        width: "100%",
                        borderRadius: "12px",
                      }}
                    >
                      مشاهده پروژه
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ResumePage;