import {
  SectionLabel,
  SectionHeading,
  P,
  IC,
  Callout,
  CodeBlock,
  StatRow,
  CardGrid,
  DecisionRow,
  ScreenBlock,
  SubHeading,
  Divider,
  Fn_Image,
} from "../reused/case-study-comp";
import { FadeSection } from "../reused/fade";

export default function AgriLinkCaseStudyBody() {
  return (
    <div className="space-y-0 divide-y divide-border">
      <FadeSection>
        <section className="pb-14">
          <SectionLabel>01</SectionLabel>
          <SectionHeading>Overview</SectionHeading>
          <P>
            <strong className="text-foreground font-medium">AgriLink</strong> is
            a digital marketplace built to connect smallholder farmers directly
            with buyers across Nigeria. Farmers list their produce, buyers
            browse and order, and every transaction is protected by an escrow
            payment system, funds are held until delivery is confirmed by both
            parties.
          </P>
          <P>
            The platform was built as part of the{" "}
            <strong className="text-foreground font-medium">
              Enyata Community × Interswitch Hackathon
            </strong>
            , working as a team with a backend engineer and a designer. The goal
            was to ship a real, working product, not a prototype, within the
            hackathon window.
          </P>
          <Callout>
            My role:{" "}
            <strong className="text-foreground font-medium">
              Frontend Engineer
            </strong>
            . I was responsible for the full frontend, architecture, migration
            from the original Lovable scaffold, state management, API
            integration, and production build. The project is{" "}
            <strong className="text-foreground font-medium">
              still under active development
            </strong>{" "}
            as we continue stabilizing the backend and wiring up remaining
            flows.
          </Callout>
          <StatRow
            stats={[
              { num: "Next.js 15", label: "Framework" },
              { num: "Tailwind v4", label: "Styling" },
              { num: "3 Roles", label: "Farmer · Buyer · Admin" },
              { num: "PHP + MySQL", label: "Backend" },
            ]}
          />
        </section>
      </FadeSection>

      {/* ── 02 The Problem ──────────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>02</SectionLabel>
          <SectionHeading>The Problem</SectionHeading>
          <P>
            Smallholder farmers in Nigeria largely sell through middlemen who
            set the prices and take a significant cut. The farmer gets paid
            less, the buyer pays more, and trust between both parties is low
            because there&apos;s no accountability layer.
          </P>
          <P>
            AgriLink addresses this by removing the middleman entirely. Farmers
            set their own prices. Buyers see exactly who they&apos;re buying
            from and where the produce is coming from. And the escrow system
            means neither party can be short-changed, payment only moves when
            delivery is confirmed.
          </P>
          <P>
            The challenge from a product standpoint: three completely different
            user types, farmers, buyers, and admins, each with their own
            workflows, navigation patterns, and permissions, all living in the
            same application.
          </P>
        </section>
      </FadeSection>

      {/* ── 03 Where We Started ─────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>03</SectionLabel>
          <SectionHeading>Where We Started</SectionHeading>
          <P>
            The project began as a{" "}
            <strong className="text-foreground font-medium">
              Lovable-generated Vite + React SPA
            </strong>
            . Lovable is an AI product builder, useful for rapid prototyping,
            but not where you want to stay for a production codebase. The
            generated code had everything in a single router file, no clear
            separation between concerns, and no meaningful folder structure.
          </P>
          <P>
            Rather than build on top of that codebase and inherit its
            limitations, I made the call to migrate the entire frontend to{" "}
            <strong className="text-foreground font-medium">
              Next.js with the App Router
            </strong>
            . The UI was preserved, components were extracted and rebuilt
            cleanly, but the foundation was replaced entirely.
          </P>
          <Callout>
            The migration wasn&apos;t about rewriting for the sake of it.
            Next.js&apos;s App Router gave us nested role-based layouts,
            server-side route protection via middleware, and a structure that
            could actually scale as features were added.
          </Callout>
        </section>
      </FadeSection>

      {/* ── 04 Architecture ─────────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>04</SectionLabel>
          <SectionHeading>Frontend Architecture</SectionHeading>
          <P>
            The core architectural decision was using{" "}
            <strong className="text-foreground font-medium">
              App Router route groups
            </strong>{" "}
            to isolate each user role. Each group gets its own{" "}
            <IC>layout.tsx</IC>, the farmer gets a sidebar, the buyer gets a
            bottom nav, the admin gets a full management sidebar, without any
            manual layout switching in page files.
          </P>

          {/* Folder tree inline, matches project structure */}
          <div className="bg-muted/40 border border-border rounded-lg px-2 sm:px-5 py-4 font-mono text-sm my-6">
            {[
              { indent: 0, type: "dir", name: "src/", note: "" },
              {
                indent: 1,
                type: "dir",
                name: "app/",
                note: "── Next.js App Router root",
              },
              {
                indent: 2,
                type: "dir",
                name: "(auth)/",
                note: "── login, register",
              },
              {
                indent: 2,
                type: "dir",
                name: "(farmer)/",
                note: "── farmer portal + sidebar layout",
              },
              {
                indent: 2,
                type: "dir",
                name: "(buyer)/",
                note: "── buyer marketplace + bottom nav layout",
              },
              {
                indent: 2,
                type: "dir",
                name: "(admin)/",
                note: "── admin dashboard + management layout",
              },
              {
                indent: 1,
                type: "dir",
                name: "components/",
                note: "── ui/, common/, layout/, farmer/, buyer/, admin/",
              },
              {
                indent: 1,
                type: "dir",
                name: "store/",
                note: "── Zustand: authStore, cartStore, uiStore",
              },
              {
                indent: 1,
                type: "dir",
                name: "queries/",
                note: "── TanStack Query hooks per domain",
              },
              {
                indent: 1,
                type: "dir",
                name: "services/",
                note: "── raw Axios API calls per domain",
              },
              {
                indent: 1,
                type: "dir",
                name: "hooks/",
                note: "── useAuth, useMobile",
              },
              {
                indent: 1,
                type: "dir",
                name: "lib/",
                note: "── axios instance, queryClient, mockData, utils",
              },
              {
                indent: 1,
                type: "dir",
                name: "types/",
                note: "── user, product, order, payment interfaces",
              },
              {
                indent: 1,
                type: "dir",
                name: "constants/",
                note: "── routes, queryKeys",
              },
              {
                indent: 1,
                type: "file",
                name: "middleware.ts",
                note: "── route protection + role guards",
              },
              {
                indent: 1,
                type: "file",
                name: "globals.css",
                note: "── Tailwind v4 theme + design tokens",
              },
            ].map(({ indent, type, name, note }) => (
              <div
                key={name}
                className="leading-[2]"
                style={{ paddingLeft: indent * 16 }}
              >
                <span
                  className={
                    type === "dir"
                      ? "text-teal-600 font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {name}
                </span>
                {note && (
                  <span className="text-muted-foreground/50 italic ml-2 text-[12px]">
                    {note}
                  </span>
                )}
              </div>
            ))}
          </div>

          <P>
            Route protection lives in a single <IC>middleware.ts</IC> file at
            the root. It reads the auth state from a cookie, checks the
            user&apos;s role, and redirects before any page renders. A farmer
            trying to access <IC>/admin</IC> gets bounced back to{" "}
            <IC>/farmer</IC>, no client-side flicker, no page load.
          </P>
        </section>
      </FadeSection>

      {/* ── 05 State Management ─────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>05</SectionLabel>
          <SectionHeading>State Management</SectionHeading>
          <P>
            State is split cleanly between two layers:{" "}
            <strong className="text-foreground font-medium">
              Zustand for client state
            </strong>{" "}
            and{" "}
            <strong className="text-foreground font-medium">
              TanStack Query for server state
            </strong>
            . These two things should never be mixed.
          </P>
          <CardGrid
            cards={[
              {
                num: "ZUSTAND",
                title: "Auth Store",
                body: "Holds the logged-in user, token, and isAuthenticated flag. Persists to localStorage and also writes a cookie so the server-side middleware can read it without a round trip.",
              },
              {
                num: "ZUSTAND",
                title: "Cart Store",
                body: "Tracks items a buyer adds before checkout. Persists across sessions so a buyer doesn&apos;t lose their cart on page refresh.",
              },
              {
                num: "ZUSTAND",
                title: "UI Store",
                body: "Sidebar open/close state and modal visibility. Shared across layout and page components without prop drilling.",
              },
              {
                num: "TANSTACK",
                title: "Query Layer",
                body: "Every API domain, listings, orders, payments, users, has its own query file with useQuery and useMutation hooks. Pages import from here, never directly from the service layer.",
              },
            ]}
          />
          <P>
            One specific decision worth calling out: the auth store writes the
            session to a cookie manually on every login and signup. This is
            necessary because Next.js middleware runs on the server and
            can&apos;t read <IC>localStorage</IC>. Without the cookie,
            middleware would have no way to know who&apos;s logged in, and every
            protected route would redirect to login incorrectly.
          </P>
        </section>
      </FadeSection>

      {/* ── 06 API Integration ──────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>06</SectionLabel>
          <SectionHeading>API Integration</SectionHeading>
          <P>
            The backend is a PHP REST API with MySQL, built by the team&apos;s
            backend engineer. Every endpoint returns a consistent{" "}
            <IC>{"{ success, message, data }"}</IC> envelope. Rather than
            unwrapping this shape in every page component, the Axios response
            interceptor handles it globally, by the time data reaches a query
            hook, it&apos;s already unwrapped.
          </P>
          <CodeBlock label="src/lib/axios.ts">{`// Response interceptor, unwrap { success, message, data }
api.interceptors.response.use(
  (response) => {
    if (response.data && "data" in response.data) {
      response.data = response.data.data;
    }
    return response;
  },
  (error) => {
    const message =
      error.response?.data?.error ??
      error.response?.data?.message ??
      "Something went wrong";

    if (error.response?.status === 401) {
      // Clear auth + redirect to login
      localStorage.removeItem("auth-storage");
      document.cookie = "auth-storage=;path=/;max-age=0";
      window.location.href = "/auth/login";
    }

    return Promise.reject(new Error(message));
  }
);`}</CodeBlock>
          <P>
            The services layer is separated from the query layer deliberately.
            Services contain only Axios calls, no React, no hooks, no side
            effects. Queries wrap services in <IC>useQuery</IC> or{" "}
            <IC>useMutation</IC>. This means when the API shape changes, only
            the service file needs updating.
          </P>

          <Divider>Mock → API Switch</Divider>
          <P>
            During development, the frontend ran entirely on mock data before
            the backend was ready. A single environment variable,{" "}
            <IC>NEXT_PUBLIC_API_READY</IC>, controls whether queries hit the
            real API or serve placeholder data. Flipping it to <IC>true</IC>{" "}
            activates all live queries at once. No conditional logic scattered
            across pages.
          </P>
          <CodeBlock label=".env.local">{`NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com/api
NEXT_PUBLIC_API_READY=true   # false = mock data, true = live API`}</CodeBlock>
        </section>
      </FadeSection>

      {/* ── 07 Role-Based Flows ─────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>07</SectionLabel>
          <SectionHeading>Role-Based Flows</SectionHeading>
          <P>
            Three distinct user experiences live in the same application. Each
            has its own layout, navigation, and set of actions.
          </P>

          <ScreenBlock title="↳ Farmer Portal">
            The farmer&apos;s world is centered on their listings and incoming
            orders. The dashboard shows active listings, pending orders, and
            total earnings at a glance. From the orders page, a farmer can
            accept or reject an order, accepting locks in the escrow, rejecting
            triggers a refund. The wallet page shows available balance (released
            escrow) versus pending balance (held escrow), with a withdraw flow
            for bank transfer.
          </ScreenBlock>

          <ScreenBlock title="↳ Buyer Marketplace">
            Buyers land on a filterable marketplace, searchable by crop name,
            farmer name, location, and crop type. Clicking a listing opens a
            detail page with a quantity stepper and a total price calculator.
            Hitting &quot;Buy Now&quot; routes to checkout, where the order is
            placed and payment goes into escrow. The buyer&apos;s orders page
            lets them confirm delivery once they&apos;ve received their produce,
            which releases the payment to the farmer.
          </ScreenBlock>

          <ScreenBlock title="↳ Admin Dashboard">
            Admins have a bird&apos;s-eye view of the platform, total users,
            active listings, transaction volume, and pending orders. The users
            table allows search, role filtering, and suspension. The listings
            table lets admins approve or suspend any listing. The payments table
            shows all escrow transactions with the ability to manually release
            or refund, a safety valve for disputes.
          </ScreenBlock>
        </section>
      </FadeSection>

      {/* ── 08 Key Decisions ────────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>08</SectionLabel>
          <SectionHeading>Key Decisions</SectionHeading>

          <DecisionRow
            left="Lovable (Vite SPA) as the starting point"
            right="Migrated to Next.js App Router, needed nested layouts per role and server-side route protection. Kept the UI, replaced the foundation."
          />
          <DecisionRow
            left="App Router vs Page Router"
            right="App Router. Three separate role portals with different layouts and auth rules map naturally to route groups. Page Router would have required manual layout wrapping on every page."
          />
          <DecisionRow
            left="React Context for auth (original Lovable code)"
            right="Replaced with Zustand. Context re-renders the entire tree on every auth state change. Zustand is selective, only components that subscribe to a specific slice re-render."
          />
          <DecisionRow
            left="Inline mock data in page components"
            right="Moved to query layer with placeholderData. Pages don't know or care whether data is mock or real, the query hook decides based on the API_READY flag."
          />
          <DecisionRow
            left="Tailwind CSS v3"
            right="Upgraded to Tailwind v4. CSS-first config means design tokens live in globals.css as native CSS variables, not in a JavaScript config file. Better dark mode support and no separate PostCSS setup."
          />
          <DecisionRow
            left="Generic updateStatus() for order actions"
            right="Split into dedicated accept(), reject(), confirmDelivery(), each mapping to a specific backend endpoint. Clearer intent, easier to debug, matches the API contract."
          />
        </section>
      </FadeSection>

      {/* ── 09 Challenges ───────────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>09</SectionLabel>
          <SectionHeading>Challenges</SectionHeading>

          <SubHeading>Migrating from React (Vite) to Next.js</SubHeading>
          <P>
            This was the heaviest part of the project. The original Lovable
            codebase was a standard Vite + React SPA, React Router for
            navigation, a single context for auth, everything client-side.
            Moving that to Next.js App Router meant touching virtually every
            file: replacing <IC>Link</IC> and <IC>useNavigate</IC> from React
            Router with Next.js equivalents, splitting the single{" "}
            <IC>DashboardLayout</IC> into role-specific <IC>layout.tsx</IC>{" "}
            files, converting the auth context to Zustand, and making sure every
            interactive component had <IC>&quot;use client&quot;</IC> at the
            top.
          </P>
          <P>
            What made it manageable was taking it one layer at a time, types
            first, then lib and stores, then shared components, then layouts,
            then pages, and running <IC>bun dev</IC> after each layer to catch
            breaks early. Trying to migrate everything at once and then debug
            would have been a nightmare. The step-by-step approach meant each
            problem was isolated and fixable on its own.
          </P>

          <SubHeading>Tailwind CSS v4 Breaking Styles</SubHeading>
          <P>
            We were on Tailwind v3 at the start. When we upgraded to v4
            mid-build, a chunk of the styling broke silently,things that looked
            fine in development started rendering incorrectly in production. The
            root cause was that v4 dropped the JavaScript config file entirely.
            Colors, fonts, and animations that were previously defined in{" "}
            <IC>tailwind.config.ts</IC> had to be moved into the CSS file itself
            using the new <IC>@theme</IC> block.
          </P>
          <P>
            The fix wasn&apos;t just a config change,it meant going through the
            globals CSS file and rewriting how every design token was declared.
            Custom colors like <IC>sidebar-background</IC> and status colors
            like <IC>success</IC> and <IC>warning</IC> had to be re-expressed as
            native CSS variables mapped through <IC>@theme</IC>. Once that was
            done, shadcn/ui components picked up the tokens correctly and the
            visual layer was stable again. The lesson: don&apos;t upgrade a
            styling framework mid-project unless you&apos;re ready to rewrite
            the foundation.
          </P>

          <SubHeading>CORS Errors After Connecting the Live API</SubHeading>
          <P>
            Once the backend was deployed and I swapped in the real API URL,
            every request the frontend made was blocked. The browser was
            rejecting responses because the backend wasn&apos;t sending the
            right headers to allow cross-origin requests,the frontend runs on a
            different domain than the API, so the browser treats every request
            as potentially unsafe until the server explicitly says otherwise.
          </P>
          <P>
            This wasn&apos;t a frontend fix,CORS is configured on the server,
            not the client. I flagged it to the backend engineer with the exact
            headers needed: <IC>Access-Control-Allow-Origin</IC>,{" "}
            <IC>Access-Control-Allow-Methods</IC>, and{" "}
            <IC>Access-Control-Allow-Headers</IC>. Once those were added to the
            PHP API&apos;s response headers, the requests went through cleanly.
            It&apos;s one of those issues that looks alarming in the browser
            console but has a straightforward fix once you understand
            what&apos;s actually happening.
          </P>
        </section>
      </FadeSection>

      {/* ── 10 Key Screens ──────────────────────────────────────────── */}
      <FadeSection>
        <section className="py-14">
          <SectionLabel>10</SectionLabel>
          <SectionHeading>Key Screens</SectionHeading>
          <P>
            A visual walkthrough of the core pages across all three user roles.
          </P>

          {/*
            IMAGE GUIDE, replace src values with actual screenshots:

            Landing page:
            - Hero section (full viewport, green gradient background, headline + CTA buttons)
            - How It Works section (3-step grid with icons)
            - Featured listings preview (3 product cards)
            - Trust section (dark green background, 3 benefit cards)

            Auth:
            - Login page (split layout, form left, green panel right)
            - Register page (role selector cards, Farmer / Buyer)

            Farmer portal:
            - Dashboard (stat cards row + recent orders table)
            - Listings page (product card grid with status badges)
            - Create listing form (dropdown + number inputs)
            - Orders page (order cards with Accept / Reject buttons)
            - Wallet page (balance cards + transaction history list)

            Buyer portal:
            - Marketplace (search + filter bar + listings grid)
            - Product detail (image + quantity stepper + Buy Now)
            - Checkout (order summary + payment panel)
            - Orders page (order cards with Confirm Delivery button)

            Admin portal:
            - Dashboard (4 stat cards + recent users + recent transactions)
            - Users table (search + role filter + suspend action)
            - Listings table (approve / suspend toggle)
            - Payments table (escrow status + release / refund actions)
          */}

          <ScreenBlock title="↳ Landing Page">
            <Fn_Image
              src="/home.png"
              alt="AgriLink landing page hero section"
            />
            <Fn_Image
              src="/section.py-16.png"
              alt="AgriLink featured listings section"
            />
            <Fn_Image
              src="/agri3.jpg"
              alt="AgriLink featured listings section"
            />
            <Fn_Image src="/section.py-2.png" alt="AgriLink trust section" />
          </ScreenBlock>

          <ScreenBlock title="↳ Auth, Login & Register">
            <Fn_Image src="/login.png" alt="AgriLink login page" />
            <Fn_Image
              src="/sign-up.png"
              alt="AgriLink register page with role selector"
            />
          </ScreenBlock>

          <ScreenBlock title="↳ Farmer Portal">
            <Fn_Image
              src="/farmers.png"
              alt="Farmer dashboard with stats and recent orders"
            />
            <Fn_Image src="/farmer-listing.png" alt="Farmer listings grid" />
            <Fn_Image
              src="/farmer-orders.png"
              alt="Farmer orders page with accept and reject"
            />
            <Fn_Image
              src="/farmer-wallet.png"
              alt="Farmer wallet with balance and transaction history"
            />
          </ScreenBlock>

          <ScreenBlock title="↳ Buyer Portal">
            <Fn_Image
              src="/buyer-marketplace.png"
              alt="Buyer marketplace with filters"
            />
            {/* <Fn_Image
              src="/buyer-orders.png"
              alt="Product detail with quantity stepper"
            /> */}
            {/* <Fn_Image
              src="/buyer-orders.png"
              alt="Checkout with order summary and payment"
            /> */}
            <Fn_Image
              src="/buyer-orders.png"
              alt="Buyer orders with confirm delivery"
            />
          </ScreenBlock>

          <ScreenBlock title="↳ Admin Portal">
            <Fn_Image src="/admin1.png" alt="Admin dashboard overview" />
            <Fn_Image src="/admin2.png" alt="Admin users management table" />
            <Fn_Image src="/admin3.png" alt="Admin users listing table" />
            <Fn_Image
              src="/admin4.png"
              alt="Admin payments and escrow management"
            />
          </ScreenBlock>
        </section>
      </FadeSection>

      {/* ── 11 Current State ────────────────────────────────────────── */}
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
                Full frontend migration to Next.js. All three role portals,
                farmer, buyer, admin, built and functional. Auth with role-based
                routing. All pages wired to TanStack Query with mock data
                fallback. Live API connected across all domains. Production
                build passing.
              </P>
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">
                ◷ Active Development
              </p>
              <P className="m-0">
                End-to-end flow testing across all user journeys. Notification
                system integration. Payment gateway (Interswitch) wiring.
                Performance optimization pass. Accessibility audit. Backend
                stabilization with the full API surface live.
              </P>
            </div>
          </div>
          <Callout>
            This project is actively being developed in collaboration with the
            backend engineer. The architecture is stable and the core flows are
            functional, what remains is hardening, testing, and wiring the final
            integrations before the submission deadline.
          </Callout>
        </section>
      </FadeSection>

      {/* ── Stack ───────────────────────────────────────────────────── */}
      <FadeSection>
        <section className="pt-14">
          <SectionLabel>Stack</SectionLabel>
          <SectionHeading>Full Tech Stack</SectionHeading>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Next.js 15",
              "TypeScript",
              "Tailwind CSS v4",
              "shadcn/ui",
              "Zustand",
              "TanStack Query v5",
              "Axios",
              "React Hook Form",
              "Zod",
              "Sonner",
              "Lucide React",
              "Bun",
              "PHP 8 (Backend)",
              "MySQL (Backend)",
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
