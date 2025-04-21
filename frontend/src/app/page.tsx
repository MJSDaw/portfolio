"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BackToTopButton from "../components/BackToTopButton";
import Image from "next/image";

export default function Home() {
  const { dictionary } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-4 sm:px-6 lg:px-8">
        <div className="absolute top-5 right-5">
          <LanguageSwitcher />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block">{dictionary.hero.greeting}</span>
            <span className="block text-blue-600 dark:text-blue-400">
              Moisés Santana
            </span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-2xl max-w-prose mx-auto">
            {dictionary.hero.role}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#proyectos"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all"
            >
              {dictionary.navigation.viewProjects}
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-all"
            >
              {dictionary.navigation.contact}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="py-20 bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {dictionary.about.title}
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden bg-gray-100">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    <Image
                      src="/me.jpg"
                      alt="Moisés Santana"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-gray-500 dark:text-gray-300">
                {dictionary.about.bio1}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-300">
                {dictionary.about.bio2}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MJSDaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/mjsdaw40296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.09 4.09 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mois%C3%A9s-jes%C3%BAs-santana-dom%C3%ADnguez-1b5487318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {dictionary.skills.title}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
            {[
              { name: "HTML/CSS", icon: "🌐" },
              { name: "JavaScript", icon: "📜" },
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "Next.js", icon: "▲" },
              { name: "Laravel", icon: "🔴" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Git", icon: "📊" },
              { name: "UI/UX", icon: "🎨" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow rounded-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center space-x-2 sm:space-x-3 md:space-x-4 transition-transform hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl">{skill.icon}</div>
                <div className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white truncate">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="py-20 bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {dictionary.projects.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: dictionary.projects.project1.title,
                description: dictionary.projects.project1.description,
                tags: ["React", "Next.js", "Tailwind CSS"],
                image: "/placeholder.jpg",
                link: "#",
              },
              {
                title: dictionary.projects.project2.title,
                description: dictionary.projects.project2.description,
                tags: ["Laravel", "MySQL", "Bootstrap"],
                image: "/placeholder.jpg",
                link: "#",
              },
              {
                title: dictionary.projects.project3.title,
                description: dictionary.projects.project3.description,
                tags: ["React", "Node.js", "MongoDB"],
                image: "/placeholder.jpg",
                link: "#",
              },
              {
                title: dictionary.projects.project4.title,
                description: dictionary.projects.project4.description,
                tags: ["Vue.js", "Firebase", "D3.js"],
                image: "/placeholder.jpg",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform hover:translate-y-[-4px]"
              >
                <div className="flex-shrink-0 h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex flex-col justify-between flex-1 p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      {dictionary.projects.viewProject} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {dictionary.contact.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg text-gray-500 dark:text-gray-300">
                {dictionary.contact.intro}
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <p>mjsdaw@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <p>+34 666 637 409</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {dictionary.contact.name}
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {dictionary.contact.email}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {dictionary.contact.message}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {dictionary.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Moisés Jesús Santana Domínguez.{" "}
            {dictionary.footer.rights}
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/MJSDaw"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/mjsdaw40296"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.09 4.09 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mois%C3%A9s-jes%C3%BAs-santana-dom%C3%ADnguez-1b5487318/"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </main>
  );
}
