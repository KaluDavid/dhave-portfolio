import {
  SectionLabel,
  SectionHeading,
  P,
  IC,
  Callout,
  CodeBlock,
  FolderTree,
  DecisionRow,
  ScreenBlock,
  SubHeading,
  Divider,
  Fn_Image,
} from "../reused/case-study-comp";
import { FadeSection, CardGrid } from "../reused/fade";

export default function VaxNowCaseStudyBody() {
  return (
    <div className="space-y-0 divide-y divide-border">
      <FadeSection>
        <section className="pb-14">
          <SectionLabel>01</SectionLabel>
          <SectionHeading>Overview</SectionHeading>
          <P>
            <strong className="text-foreground font-medium">VaxNow</strong> is a
            digital health awareness website built to promote the importance of
            vaccination. It educates users on vaccine safety, immunization
            records, and timely vaccination schedules, while funneling users
            toward the core mobile experience: the{" "}
            <strong className="text-foreground font-medium">
              ImmuniSafe app
            </strong>
            .
          </P>
          <P>
            The web product serves a distinct purpose from the mobile app. Where
            the app is transactional (records, reminders, appointments), the
            website is informational and persuasive. It had to be fast,
            credible, and seamless across all devices, the kind of site that
            someone lands on and actually reads.
          </P>
          <Callout>
            My role: <strong>Frontend Engineer</strong>. I was responsible for
            translating the designer&apos;s Figma handoff into production-ready
            React code, handling architecture, responsiveness, animation,
            performance, and deployment.
          </Callout>
          {/* <StatRow
            stats={[
              { num: "React 19", label: "Framework" },
              { num: "TS + Vite", label: "Toolchain" },
              { num: "Vercel", label: "Deployment" },
              { num: "19", label: "Commits" },
            ]}
          /> */}
        </section>
      </FadeSection>

      {/* ── 02 Project Context ─────────────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/ProjectContext.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>02</SectionLabel>
          <SectionHeading>Project Context</SectionHeading>
          <P>
            VaxNow sits in the ecosystem of a larger health-tech product,
            ImmuniSafe, as its public-facing web entry point. The challenge:
            most people discovering the platform would encounter it through this
            site first, before ever touching the app.
          </P>
          <P>
            That meant the website had to do real work. It couldn&apos;t be a
            static brochure. It needed to educate users who might be skeptical
            of vaccines, communicate trust through clear information hierarchy,
            and convert visitors to mobile app users, all while running fast on
            low-bandwidth connections in health-conscious demographics.
          </P>
          <P>
            The scope when I took over was: a Figma design existed, no codebase
            existed. Start from scratch, ship something production-ready.
          </P>
        </section>
      </FadeSection>
      <FadeSection>
        <section className="py-14">
          <SectionLabel>03</SectionLabel>
          <SectionHeading> Information Architecture</SectionHeading>
          <P>
            The site structure was implemented with clear navigation and
            predictable content grouping. Particular attention was paid to
            keeping critical information easy to find, especially for users with
            lower digital literacy.{" "}
          </P>

          <Fn_Image src="/project3_3.png" alt="Information architecture" />
        </section>
      </FadeSection>

      {/* ── 03 My Role & Contribution ──────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/MyRole.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>04</SectionLabel>
          <SectionHeading>My Role & Contribution</SectionHeading>
          <P>
            I owned the entire frontend, from project scaffolding to deployment.
            The designer owned the visual language; I owned the implementation.
          </P>
          <CardGrid
            cards={[
              {
                num: "BUILT",
                title: "Project Scaffold",
                body: "Configured Vite + React + TypeScript from scratch. Set up ESLint, testing with Vitest, and Tailwind CSS v4 integration.",
              },
              {
                num: "BUILT",
                title: "Component System",
                body: "Structured a maintainable component tree, layout, section, and UI-level components with clear separation of concerns.",
              },
              {
                num: "BUILT",
                title: "Animations & Motion",
                body: "Implemented Framer Motion for scroll-based reveals, hero animations, and the 3D tilt card effect via Atropos.",
              },
              {
                num: "BUILT",
                title: "Responsive Layout",
                body: "Ensured the layout held across all breakpoints, mobile-first using Tailwind&apos;s responsive utilities.",
              },
              {
                num: "BUILT",
                title: "Routing",
                body: "Set up React Router for page navigation, including handling SPA routing behavior on Vercel deployment.",
              },
              {
                num: "BUILT",
                title: "Deployment",
                body: "Deployed to Vercel with production build configuration, TypeScript compile step followed by Vite bundle.",
              },
            ]}
          />
          <P>
            Collaboration with the designer was iterative. I would build a
            section, share a Vercel preview link, and we&apos;d align on
            spacing, motion behavior, or any details that didn&apos;t translate
            1:1 from Figma to browser. That cycle repeated until the page felt
            right.
          </P>
        </section>
      </FadeSection>

      {/* ── 04 Engineering Approach ────────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/Approach.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>05</SectionLabel>
          <SectionHeading>Engineering Approach</SectionHeading>
          <P>
            Before touching code, I did two things: I read through the Figma
            file systematically to identify repeating patterns, and I assessed
            which sections would need the most custom logic versus pure layout.
          </P>
          <P>
            The mental model I used was:{" "}
            <strong className="text-foreground font-medium">
              think in sections, build in components
            </strong>
            . A landing page like this is essentially a stack of independent
            sections. Each section is its own rendering concern, its own layout,
            its own animation, sometimes its own data. That boundary matters for
            maintainability.
          </P>
          <Divider>Thinking Breakdown</Divider>
          <CardGrid
            cards={[
              {
                num: "PATTERN 1",
                title: "Identify Repeating UI Patterns",
                body: "Buttons, cards, section headers, badges, these appear across multiple sections. Extract early, compose everywhere.",
              },
              {
                num: "PATTERN 2",
                title: "Classify Sections by Complexity",
                body: "Hero (complex, animation + layout), Stats (simple, data-driven), FAQ (medium, toggle state), CTA (simple). Tackle complex sections first.",
              },
              {
                num: "PATTERN 3",
                title: "Motion as an Enhancement Layer",
                body: "Framer Motion was added after layout was stable, not before. Motion bugs are easier to debug when the base layout is solid.",
              },
            ]}
          />
          <P>
            For responsiveness, I used a mobile-first approach: build for small
            screens first, layer up with Tailwind&apos;s <IC>md:</IC> and{" "}
            <IC>lg:</IC> breakpoint prefixes. This keeps the CSS specificity
            clean and avoids the overriding hell that comes from a desktop-first
            approach.
          </P>
        </section>
      </FadeSection>

      {/* ── 05 Frontend Architecture ───────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/Architecture.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>06</SectionLabel>
          <SectionHeading>Frontend Architecture</SectionHeading>
          <P>
            The project uses a standard Vite + React + TypeScript setup. The{" "}
            <IC>src/</IC> directory is organized by concern:
          </P>
          <FolderTree />
          <P className="mt-5">
            <strong className="text-foreground font-medium">
              No global state management library was used.
            </strong>{" "}
            This was a deliberate call, the app is primarily presentational with
            no shared dynamic state between sections. React&apos;s built-in{" "}
            <IC>useState</IC> handles local component state (FAQ accordion
            toggles, mobile nav open/close). Pulling in Redux or Zustand for
            this would be overengineering.
          </P>
          <P>
            <strong className="text-foreground font-medium">
              React Router v7
            </strong>{" "}
            handles page navigation. Even though VaxNow is largely a single-page
            experience, routing was set up to support future expansion, an app
            download page, a resources page, or an about page could be added
            without restructuring.
          </P>
          <CodeBlock label="App.tsx">{`import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./pages/Layouts/PageLayout";
import Loader from "./components/Loader.tsx";
import Lazy from "./utils/Lazy.ts";

// Lazy components
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <Lazy.Home />,
      },
      {
        path: "features",
        element: <Lazy.Features />,
      },
      --*******--
    ],
  },
  {
    path: "*",
    element: <Lazy.Error />,
  },
  --********--
]);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
}`}</CodeBlock>
          <P>
            <strong className="text-foreground font-medium">
              Tailwind CSS v4
            </strong>{" "}
            was used for styling, integrated natively via the Vite plugin (
            <IC>@tailwindcss/vite</IC>). This eliminates the need for a separate
            PostCSS config and results in faster HMR during development.
            v4&apos;s CSS-first config approach also meant design tokens could
            be declared directly in <IC>index.css</IC> using native CSS
            variables, which plays better with the Framer Motion animation
            system.
          </P>
        </section>
      </FadeSection>

      {/* ── 07 Design → Code Translation ───────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/DesignToCode.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>07</SectionLabel>
          <SectionHeading>Design → Code Translation</SectionHeading>
          <P>
            Translating a Figma file faithfully involves more than eyeballing
            pixels. The job is to understand the <em>intent</em> of the design,
            the visual hierarchy, the spacing rhythm, the motion behavior, and
            implement that intent in a way that holds across browsers and screen
            sizes.
          </P>
          <Divider>Key Translation Decisions</Divider>
          <DecisionRow
            left="Exact px spacing values defined in Figma frames"
            right="Mapped to Tailwind spacing scale (py-16, gap-6), with custom tokens for non-standard values"
          />
          <DecisionRow
            left="3D tilt card effect on product mockup in hero"
            right="Used Atropos library, a battle-tested parallax tilt solution, rather than writing raw mouse-event transforms from scratch"
          />
          <DecisionRow
            left="Scroll-triggered fade-in animations on section entry"
            right="Framer Motion's whileInView prop, declarative, performant, and avoids manual IntersectionObserver boilerplate"
          />
          <DecisionRow
            left="Custom color palette with brand tones"
            right="Extended Tailwind's color config with the exact brand hex values to keep class names semantic and consistent"
          />
          <P className="mt-5">
            Pixel accuracy is real work. The most common drift points were: font
            rendering differences between Figma and Chrome, border-radius values
            that look correct at 1x but feel off at smaller sizes, and shadow
            values that need to be tuned per background color. I used browser
            devtools and Figma&apos;s inspect panel together to close those
            gaps.
          </P>
        </section>
      </FadeSection>

      {/* ── 08 Challenges & Decisions ──────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/Challenges.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>08</SectionLabel>
          <SectionHeading>Challenges & Decisions</SectionHeading>

          <SubHeading>Framer Motion Integration</SubHeading>
          <P>
            One of the challenges during development was working with Framer
            Motion for the first time. Beyond just learning the <IC>API</IC>,
            the real effort came from experimenting with how animations should
            behave within the product.
            <br />I went through multiple iterations, testing different motion
            patterns, adjusting transitions, and in some cases over-animating
            certain sections before pulling things back. This process helped me
            understand where <IC>animation</IC> adds clarity and where it
            becomes noise.
            <br />
            Over time, I refined the usage to be more intentional, focusing on
            subtle transitions that support the interface rather than distract
            from it.
          </P>

          <SubHeading>Handling Incomplete Designs</SubHeading>
          <P>
            Another challenge was working with screens that were not fully
            defined in the initial design.
            <br />
            In these cases, I had to step in and construct missing parts of the
            UI while staying consistent with the existing design system. This
            meant carefully following established patterns, spacing, typography,
            component structure, to ensure the additions felt native to the
            product.
            <br />
            The goal was to avoid introducing inconsistencies while still moving
            development forward. The final implementations aligned well with the
            original design direction and were validated positively by the
            designer.
          </P>

          <SubHeading>Atropos Integration with React</SubHeading>
          <P>
            Atropos is a vanilla JS library at its core; the React wrapper
            needed to be handled carefully to avoid ref conflicts with Framer
            Motion. The solution was to apply the Atropos tilt to a static
            container and let Framer Motion handle the parent-level entrance
            animation, keeping the two animation systems at different DOM levels
            so they don&apos;t interfere.
          </P>

          <SubHeading>TypeScript Strictness vs. Speed</SubHeading>
          <P>
            Early in the build, I had to decide: strict TypeScript mode or
            lenient? I opted for a middle ground, TypeScript was used for typing
            props and function signatures, but the build config wasn&apos;t at
            maximum strictness. For a project this size, strict null checks
            everywhere would slow development without meaningful safety gains.
            The type safety added value where it mattered most: component props
            and data shape definitions.
          </P>
        </section>
      </FadeSection>

      {/* ── 09 Performance & Optimization ──────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/Performance.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>09</SectionLabel>
          <SectionHeading>Performance & Optimization</SectionHeading>
          <P>
            A health information platform like VaxNow serves a wide range of
            users, including people on slower networks and mid-range devices.
            Because of this, performance wasn’t treated as an afterthought, but
            considered during development.
          </P>
          <CardGrid
            cards={[
              {
                num: "BUILD-OUTPUT",
                title: "Optimized Build Output",
                body: "The project uses Vite, which produces a lightweight and optimized bundle by removing unused code during the build process. TypeScript checks are also run before the build, helping catch errors early and ensuring stability before deployment.",
              },
              {
                num: "ROUTE-BASED",
                title: "Code Splitting with React Suspense",
                body: "To reduce the initial load size, I implemented code splitting using React.lazy and Suspense. This ensures that only the necessary parts of the application are loaded upfront, while other components are loaded on demand.",
              },
              {
                num: "IMAGES",
                title: "Lazy Loading Images",
                body: "Images were configured with loading=&apos;lazy&apos; to defer loading until they are needed. This helps reduce initial page weight and improves load performance, especially on slower connections.",
              },
              {
                num: "FRAMER",
                title: "GPU-Accelerated Motion",
                body: "For animations, I used Framer Motion in a way that avoids heavy rendering costs. Animations were limited to properties like transform and opacity, which are handled by the browser more efficiently. This ensures smooth motion without causing layout shifts or performance drops. Additionally, I avoided animating large sections of the DOM at once, which can lead to jank. Instead, I staggered animations and kept them focused on smaller elements to maintain a high frame rate.",
              },
            ]}
          />

          <CodeBlock label="LAZY.TS">{`import { lazy } from "react";
// Lazy components
const Lazy = {
  Home: lazy(() => import("../pages/Home/Home.tsx")),
  Features: lazy(() => import("../pages/Features/Features.tsx")),
  Recording: lazy(() => import("../pages/Keep_Recording/Recording.tsx")),
  Vaccine_Education: lazy(
    () => import("../pages/Vaccine_Education/Vaccine_Education.tsx")
  ),
  Pricing: lazy(() => import("../pages/Pricing/Pricing.tsx")),
  Career: lazy(() => import("../pages/Career/Career.tsx")),
  Security: lazy(() => import("../pages/Security/Security.tsx")),
  Contact_Us: lazy(() => import("../pages/Mini-Pages/Contact/Contact_Us.tsx")),
  FAQ_Page: lazy(() => import("../pages/Mini-Pages/FAQ_Page.tsx")),
  Copy_Right: lazy(() => import("../pages/Mini-Pages/Copy_Right.tsx")),
  Terms_Of_Service: lazy(
    () => import("../pages/Mini-Pages/Terms/Terms_Of_Service.tsx")
  ),
  Get_Started: lazy(
    () => import("../pages/Mini-Pages/Get_Started/Get_Started.tsx")
  ),
  DownloadApp: lazy(
    () => import("../pages/Mini-Pages/DownloadApp/DownloadApp.tsx")
  ),
  Privacy_Policy: lazy(() => import("../pages/Mini-Pages/Privacy_Policy.tsx")),
  Error: lazy(() => import("../components/Error.tsx")),
};
export default Lazy;`}</CodeBlock>
          <P>
            The project is deployed on Vercel, which provides edge caching and
            global CDN distribution by default. Combined with Vite’s optimized
            bundle, this allows the application to load quickly and deliver
            content efficiently without requiring heavy post-deployment
            optimizations.
          </P>
        </section>
      </FadeSection>

      {/* ── 07 Key Screens & Implementation ────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/KeyScreens.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>10</SectionLabel>
          <SectionHeading>Key Screens & Implementation</SectionHeading>
          <P>
            The site is structured as a single-page experience with clearly
            delineated sections. Here&apos;s how the major ones were approached:
          </P>
          <ScreenBlock title="↳ Hero Section">
            The section contains the headline, subtext, CTA buttons, and a
            3D-tilted app mockup. The tilt is handled by Atropos, it attaches
            mouse event listeners and applies CSS 3D transforms, making the
            mockup respond to cursor movement. The entire hero content animates
            in on mount using Framer Motion&apos;s <IC>initial / animate</IC>{" "}
            props with staggered delays on each element. The layout uses a
            two-column grid on desktop, collapses to a centered single column on
            mobile.
          </ScreenBlock>

          <ScreenBlock title="↳ Features / Why VaxNow Section">
            A grid of feature cards, icon, heading, and body text. These are
            data-driven: an array of feature objects maps directly to card
            components. The scroll-triggered animation uses Framer Motion&apos;s{" "}
            <IC>whileInView</IC> to stagger each card in from below as the user
            scrolls. This pattern scales well, adding a new feature is one array
            entry, not a new component.
          </ScreenBlock>
          <ScreenBlock title="↳ Stats Section">
            A row of numerical statistics, vaccine coverage rates, user counts,
            or health impact data. Implemented as a data-driven list rendered
            with <IC>.map()</IC>. Numbers are styled with large display
            typography. The section is deliberately simple, no animation here,
            because the numbers do the work visually.
          </ScreenBlock>
          <ScreenBlock title="↳ FAQ / Accordion Section">
            An accordion component with question/answer pairs. State is managed
            with a local <IC>useState</IC> for the currently open index. Framer
            Motion&apos;s <IC>AnimatePresence</IC> handles the height animation
            on expand/collapse, this approach animates to/from unmounted state
            cleanly without any <IC>max-height</IC> CSS hacks that tend to
            produce janky results on variable-length content.
          </ScreenBlock>
          <ScreenBlock title="↳ Navigation">
            A top nav with logo, links, and a mobile hamburger menu. On desktop,
            links are displayed inline. On mobile, links are hidden behind a
            slide-in drawer triggered by the menu button. The open/closed state
            lives in a <IC>useState</IC> within the Navbar component. A{" "}
            <IC>useEffect</IC> locks body scroll when the drawer is open, a
            small detail that prevents the background from scrolling while the
            menu is active.
          </ScreenBlock>
          <ScreenBlock title="↳ CTA / App Download Section">
            A full-width conversion section with app store badges linking to the
            ImmuniSafe mobile app. The implementation is a straightforward
            layout section, but the positioning is critical, it acts as the
            page&apos;s conversion funnel endpoint, so the visual weight and
            typography had to be tuned to feel conclusive, not just another
            section.
          </ScreenBlock>
        </section>
      </FadeSection>

      <FadeSection>
        <section className="py-14">
          <SectionLabel>12</SectionLabel>
          <SectionHeading>Screen Display</SectionHeading>
          <P>
            A list of visual representation of the key screens and components of
            the VaxNow website, showcasing the design and implementation details
            of selected sections.
          </P>
          <ScreenBlock title="↳ Home page">
            <Fn_Image src="/project3_1.png" alt="VaxNow Hero Section" />
            <Fn_Image src="/project3_5.png" alt="VaxNow landing Section" />
            <Fn_Image src="/project3_6.png" alt="VaxNow landing Section" />
            <Fn_Image src="/project3_7.png" alt="VaxNow footer Section" />
          </ScreenBlock>
          <ScreenBlock title="↳ Feature screen Section">
            <Fn_Image src="/project3_8.png" alt="VaxNow feature Section" />
            <Fn_Image src="/project3_9.png" alt="VaxNow feature Section" />
            <Fn_Image src="/project3_10.png" alt="VaxNow feature Section" />
          </ScreenBlock>
          <ScreenBlock title="↳ Record Keeping screen Section">
            <Fn_Image
              src="/project3_11.png"
              alt="VaxNow record keeping Section"
            />
            <Fn_Image
              src="/project3_12.png"
              alt="VaxNow record keeping Section"
            />
          </ScreenBlock>
          <ScreenBlock title="↳ Vaccine Education screen Section">
            <Fn_Image
              src="/project3_13.png"
              alt="VaxNow vaccine education Section"
            />
            <Fn_Image
              src="/project3_14.png"
              alt="VaxNow vaccine education Section"
            />
          </ScreenBlock>
        </section>
      </FadeSection>

      {/* ── 10 Collaboration ───────────────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/Collaboration.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>13</SectionLabel>
          <SectionHeading>Collaboration</SectionHeading>
          <P>
            The designer handled the Figma side, while I focused on the code.
            Our main point of connection was Vercel preview links, every
            meaningful update had a live link I could share for review.
          </P>
          <P>
            The workflow was pretty straightforward: I’d build a section, send
            the preview, the designer would check it on their end (sometimes on
            different screen sizes), then we’d go over what needed adjustment. A
            lot of the back-and-forth came down to motion details, things like
            timing, easing, and getting spacing right across breakpoints.
          </P>
          <P>
            One thing that helped a lot was being clear about tradeoffs. If a
            design detail was possible but would take extra time or add
            unnecessary complexity, I’d call it out early and suggest a simpler
            option that still achieved almost the same result. Most of the time,
            we went with the simpler approach, which kept things moving without
            sacrificing quality.
          </P>
          <Callout>
            What matters most isn’t the tools, it’s knowing when to pause and
            clarify a design before coding. It’s a lot easier than reworking a
            whole section later.
          </Callout>
        </section>
      </FadeSection>

      {/* ── 11 Current State ───────────────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/CurrentState.tsx */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>11</SectionLabel>
          <SectionHeading>Current State</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 bg-muted/30 border border-border rounded-lg p-5">
            <div>
              <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-emerald-600 mb-2 font-medium">
                ✓ Shipped
              </p>
              <P className="m-0">
                Hero, Features, Stats, FAQ, CTA, Navigation, Footer, all
                sections built and deployed to Vercel.
              </P>
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">
                ◷ In Progress / Planned
              </p>
              <P className="m-0">
                Additional content pages (resources, about), further test
                coverage expansion, accessibility audit and ARIA improvements.
              </P>
            </div>
          </div>
          <P className="mt-5">
            The site is live and functional at <IC>vax-now.vercel.app</IC>. The
            codebase has 19 commits and is structured to be handed off or
            extended by another engineer without a long onboarding period.
          </P>
        </section>
      </FadeSection>

      {/* ── Stack ──────────────────────────────────────────────────── */}
      {/* Abstract to: sections/case-study/vaxnow/TechStack.tsx */}
      <FadeSection>
        <section className="pt-14">
          <SectionLabel>Stack</SectionLabel>
          <SectionHeading>Full Tech Stack</SectionHeading>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "React 19",
              "TypeScript 5.7",
              "Vite 6",
              "Tailwind CSS v4",
              "Framer Motion 12",
              "Motion 12",
              "React Router v7",
              "Atropos 2",
              "React Icons",
              "Vitest",
              "ESLint",
              "Vercel",
            ].map((p) => (
              <span
                key={p}
                className="sm:text-[11px] text-sm font-mono px-3 py-1 bg-muted border border-border text-muted-foreground rounded-full tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </section>
      </FadeSection>
    </div>
  );
}
