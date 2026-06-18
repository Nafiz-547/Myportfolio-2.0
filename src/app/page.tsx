import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas selection:bg-azure selection:text-snow">
      {/* 1. GLOBAL NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 w-full bg-canvas/70 backdrop-blur-md border-b border-gray-200/50 transition-colors duration-300">
        <div className="max-w-300 mx-auto px-4 h-13.75 flex items-center justify-between">
          {/* Logo / Nama */}
          <Link
            href="/"
            className="text-body-sm font-semibold text-ink tracking-tight"
          >
            Muhammad Nafiz
          </Link>

          {/* Tautan Navigasi (Sembunyi di layar kecil) */}
          <div className="hidden md:flex gap-8 text-caption text-ink">
            <Link
              href="#philosophy"
              className="hover:text-azure transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="#experience"
              className="hover:text-azure transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="hover:text-azure transition-colors"
            >
              Projects
            </Link>
          </div>

          {/* CTA Button - Satu-satunya elemen berwarna biru Azure di navigasi */}
          <a
            href="mailto:muhamadnafiz547@gmail.com"
            className="bg-azure text-snow px-4.5 py-1.5 rounded-full text-caption font-normal hover:bg-blue-600 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="w-full max-w-300 mx-auto px-4 pt-32 pb-40 flex flex-col items-center text-center">
        {/* Eyebrow / Label Kecil */}
        <span className="text-body-sm text-graphite font-semibold tracking-tight uppercase mb-4">
          Portofolio 2026
        </span>

        {/* Headline Raksasa (SF Pro Display, weight 700, negative tracking ekstrim) */}
        <h1 className="text-heading-lg md:text-display font-bold text-ink leading-[1.04] tracking-[-1.5px] md:tracking-[-2.11px] max-w-4xl">
          Holistic Systems.
          <br />
          Intuitive Design.
        </h1>

        {/* Sub-teks (SF Pro Text, weight 400) */}
        <p className="mt-6 text-body md:text-subheading text-graphite leading-[1.47] tracking-[-0.1px] max-w-2xl">
          An Information Technology generalist bridging the gap between IT
          Governance, scalable infrastructure, and practical UI/UX Design.
        </p>

        {/* Tombol Aksi Sekunder */}
        <div className="mt-10 flex gap-4">
          <Link
            href="#projects"
            className="bg-ink text-snow px-6 py-3 rounded-full text-body hover:bg-gray-800 transition-colors duration-200"
          >
            View Projects
          </Link>
        </div>
      </main>

      {/* 3. EXPERIENCE & LEADERSHIP SECTION */}
      <section id="experience" className="w-full bg-snow py-32">
        <div className="max-w-300 mx-auto px-4">
          {/* Section Header (Rata Kiri) */}
          <div className="mb-16 px-12">
            <h2 className="text-heading font-bold text-ink tracking-[-0.6px] leading-[1.17]">
              Leading with Strategy.
            </h2>
            <p className="mt-4 text-subheading font-light text-ink tracking-[-0.2px] leading-[1.40] max-w-140">
              Building scalable frameworks, orchestrating technical growth, and
              fostering collaborative learning environments.
            </p>
          </div>

          {/* 2x2 Feature Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {/* Card 1: Protek Chairman */}
            <div className="bg-canvas rounded-3xl p-28 flex flex-col h-full">
              <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                Mar 2026 - Present
              </span>
              <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                Programming Teknokrat
              </h3>
              <p className="text-body text-graphite font-normal mb-6 grow leading-[1.47]">
                Chairman & Unit Lead. Orchestrating the strategic direction and
                fostering a collaborative growth environment for 5 specialized
                IT divisions.
              </p>
            </div>

            {/* Card 2: Protek Mentor */}
            <div className="bg-canvas rounded-3xl p-28 flex flex-col h-full">
              <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                Mar 2026 - Present
              </span>
              <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                UI/UX Student-Mentor
              </h3>
              <p className="text-body text-graphite font-normal mb-6 grow leading-[1.47]">
                Analyzing complex system problems to generate intuitive,
                user-oriented visual and architectural solutions for junior
                members.
              </p>
            </div>

            {/* Card 3: HITEKMASI */}
            <div className="bg-canvas rounded-3xl p-28 flex flex-col h-full">
              <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                Nov 2024 - Present
              </span>
              <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                Himpunan Mahasiswa TI
              </h3>
              <p className="text-body text-graphite font-normal mb-6 grow leading-[1.47]">
                Education Division Member. Spearheaded the conceptualization and
                launch of &quot;Code Camp Community,&quot; strengthening logic
                programming fundamentals.
              </p>
            </div>

            {/* Card 4: GDGoC */}
            <div className="bg-canvas rounded-3xl p-28 flex flex-col h-full">
              <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                Nov 2025 - Present
              </span>
              <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                Google Developers Group
              </h3>
              <p className="text-body text-graphite font-normal mb-6 grow leading-[1.47]">
                Participated in Study Jams focusing on cloud technicalities and
                UI/UX tracks, leveraging developer ecosystems for
                industry-standard digital workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="w-full bg-canvas py-32">
        <div className="max-w-300 mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 px-12">
            <h2 className="text-heading font-bold text-ink tracking-[-0.6px] leading-[1.17]">
              Selected Works.
            </h2>
            <p className="mt-4 text-subheading font-light text-ink tracking-[-0.2px] leading-[1.40] max-w-140">
              Translating complex user friction points into scalable,
              interactive prototypes and logical system architectures.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Project 1: SigerTrip (Text Left, Image Right) */}
            <div className="bg-snow rounded-3xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-[45%] p-40 md:p-14 flex flex-col justify-center order-2 md:order-1">
                <span className="text-caption font-semibold tracking-tight uppercase text-caution mb-2">
                  1st Place Winner • IST.CO 2026
                </span>
                <h3 className="text-heading font-bold text-ink tracking-[-0.6px] mb-4 leading-[1.17]">
                  SigerTrip.
                </h3>
                <p className="text-body text-graphite font-normal mb-8 leading-[1.47]">
                  A hyper-local tour provider platform optimizing regional
                  tourism. Features include SigerAI for automated routing and a
                  Hybrid Booking system integrated with WhatsApp API to empower
                  MSMEs.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://www.figma.com/deck/deiM5sdXZb7SjOyl9QaX0X/PPT_UIUX_IST.CO2026_UX-PROTEK_Universitas-Teknokrat-Indonesia_SigerTrip?node-id=2011-766&t=7QJhmcZqgsmtbKBa-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-medium text-cobalt-link hover:underline transition-all"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
              {/* Image Content - 55% */}
              <div className="w-full md:w-[55%] bg-silver-mist/10 flex items-center justify-center p-8 order-1 md:order-2 relative min-h-75">
                <Image
                  src="/projects/SigerTrip.jpeg"
                  alt="SigerTrip Presentation Slide"
                  fill
                  className="object-contain p-4 md:p-8 hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Project 2: Campus Crave (Image Left, Text Right) */}
            <div className="bg-snow rounded-3xl overflow-hidden flex flex-col md:flex-row">
              {/* Video Content - 55% */}
              <div className="w-full md:w-[55%] bg-silver-mist/10 flex items-center justify-center p-8 relative min-h-75">
                <video
                  src="/projects/CampusCrave.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-100 object-contain rounded-xl shadow-sm"
                />
              </div>
              <div className="w-full md:w-[45%] p-40 md:p-14 flex flex-col justify-center">
                <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                  GDGoC UI/UX Study Jam
                </span>
                <h3 className="text-heading font-bold text-ink tracking-[-0.6px] mb-4 leading-[1.17]">
                  Campus Crave.
                </h3>
                <p className="text-body text-graphite font-normal mb-8 leading-[1.47]">
                  A functional interactive prototype translated from a complex
                  design brief within a one-week sprint. Established consistent
                  visual UI themes prioritizing critical user flows under tight
                  deadlines.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://www.figma.com/design/wEkt7ww9C2BjFVT7x8mobQ/CampusCrave?node-id=171-355&t=xLXLq9rwhzJaSjFn-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-medium text-cobalt-link hover:underline transition-all"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
            {/* Grid for Project 3 & 4 (Zoom & SPADA) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {/* Project 3: Zoom-Inspired */}
              <div className="bg-snow rounded-3xl overflow-hidden flex flex-col h-full">
                {/* Image Content - 55% */}
                <div className="w-full md:w-full bg-silver-mist/10 flex items-center justify-center p-8 order-1 md:order-2 relative min-h-75">
                  <Image
                    src="/projects/zoom.jpeg"
                    alt="Zoom-Inspired UI Image"
                    fill
                    className="object-contain p-4 md:p-8 hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-40 flex flex-col grow">
                  <span className="text-caption font-semibold tracking-tight uppercase text-graphite mb-2">
                    MySkill Bootcamp
                  </span>
                  <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                    Video Conference App
                  </h3>
                  <p className="text-body text-graphite font-normal mb-8 grow leading-[1.47]">
                    An end-to-end interactive prototype delivering scalable
                    design components, structural information architecture, and
                    validated usability testing.
                  </p>
                  <a
                    href="https://www.figma.com/deck/FBlPatT9zhxRnvzhZXnV2H/Zoom-Revamp?node-id=2002-2&t=xLXLq9rwhzJaSjFn-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-medium text-cobalt-link hover:underline transition-all"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>

              {/* Project 4: SPADA Academic */}
              <div className="bg-snow rounded-[28px] overflow-hidden flex flex-col h-full">
                {/* Image Content - 55% */}
                <div className="w-full md:w-[100%] bg-silver-mist/10 flex items-center justify-center p-8 order-1 md:order-2 relative min-h-[300px]">
                  <Image
                    src="/projects/SPADA.jpeg"
                    alt="SPADA Academic UI Image"
                    fill
                    className="object-contain p-4 md:p-8 hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-[40px] flex flex-col flex-grow">
                  <span className="text-[12px] font-semibold tracking-tight uppercase text-graphite mb-2">
                    Conceptual Project
                  </span>
                  <h3 className="text-[28px] font-semibold text-ink tracking-[-0.07em] mb-4 leading-tight">
                    SPADA Academic
                  </h3>
                  <p className="text-[17px] text-graphite font-normal mb-8 flex-grow leading-[1.47]">
                    Explored end-to-end UI/UX design methodologies to simulate
                    essential student learning and administration workflows with
                    core visual hierarchies.
                  </p>
                  <a
                    href="https://www.figma.com/design/2REfsU5drIPBLnPoytV2wh/SPADA?node-id=31-18&t=xLXLq9rwhzJaSjFn-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] font-medium text-cobalt-link hover:underline transition-all"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full bg-canvas py-12 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-graphite font-normal">
            © 2026 Muhammad Nafiz.
          </p>
          <div className="flex gap-6 text-[12px] text-graphite">
            <a
              href="https://linkedin.com/in/muhammadnafiz547"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Nafiz-547"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:muhamadnafiz547@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
