// ─── Shared prose primitives ────────────────────────────────────────────────
// These are intentionally simple — they inherit your existing font + color
// tokens. Pull them into their own file (components/article/Prose.tsx) when
// you want to reuse them across blog posts.

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function H2({ children }: ProseProps) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground mt-12 mb-4">
      {children}
    </h2>
  );
}

export function H3({ children }: ProseProps) {
  return (
    <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
      {children}
    </h3>
  );
}

export function P({ children, className = "" }: ProseProps) {
  return (
    <p className={`text-[15px] leading-[1.85] text-muted-foreground mb-5 ${className}`}>
      {children}
    </p>
  );
}

export function Strong({ children }: ProseProps) {
  return <strong className="text-foreground font-semibold">{children}</strong>;
}

export function Em({ children }: ProseProps) {
  return <em className="italic text-muted-foreground">{children}</em>;
}

export function IC({ children }: ProseProps) {
  return (
    <code className="text-[13px] font-mono bg-muted text-foreground px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

export function Pre({ children }: ProseProps) {
  return (
    <div className="rounded-lg overflow-hidden my-6 border border-border">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>
      <pre className="bg-zinc-950 px-5 py-4 overflow-x-auto text-[13px] font-mono leading-[1.8] text-zinc-300 whitespace-pre">
        {children}
      </pre>
    </div>
  );
}

export function Callout({ children }: ProseProps) {
  return (
    <div className="bg-muted/40 border-l-[3px] border-primary px-5 py-4 my-6 rounded-r-md">
      <p className="text-[14px] font-mono italic text-muted-foreground leading-relaxed m-0">
        {children}
      </p>
    </div>
  );
}

export function Divider({ children }: ProseProps) {
  return (
    <div className="flex items-center gap-3 my-8 text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground/50">
      <div className="flex-1 h-px bg-border" />
      {children}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-border">
      <table className="w-full text-[13px] font-mono">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border last:border-0 ${
                i % 2 === 0 ? "bg-background" : "bg-muted/20"
              }`}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ARTICLE 1 — Zustand vs Redux
// File: components/articles/ZustandVsRedux.tsx
// ════════════════════════════════════════════════════════════════════════════

export function ZustandVsRedux() {
  return (
    <article>
      <P>
        There is a point in almost every React developer's journey where{" "}
        <IC>useState</IC> and <IC>useContext</IC> stop feeling sufficient.
      </P>
      <P>
        Maybe you have authentication state that several parts of your
        application need to access. Maybe a shopping cart needs to be shared
        between completely different components. Maybe you have filters, selected
        items, modals, user preferences, or application-wide settings that
        multiple parts of your application need to read and update.
      </P>
      <P>That's usually when the question appears:</P>
      <Callout>
        <Strong>"Should I use Redux?"</Strong>
      </Callout>
      <P>
        And for a long time, Redux was almost synonymous with global state
        management in the React ecosystem. It is powerful, predictable, mature,
        and has an enormous ecosystem.
      </P>
      <P>But there is another question worth asking:</P>
      <Callout>
        "Do I actually need all of Redux's concepts for the problem I'm solving?"
      </Callout>
      <P>This is where Zustand becomes interesting.</P>

      <H2>First: Why Do We Need State Management?</H2>
      <P>
        Before comparing libraries, let's understand the problem they're solving.
        Imagine a small application where the navbar needs the user, the
        dashboard needs the user, the products page needs the cart, and the
        checkout page also needs the cart.
      </P>
      <P>
        You could pass everything through props — but eventually you might find
        yourself drilling user down through Dashboard → UserProfile → UserAvatar,
        even though the intermediate components don't actually care about that
        data. This is <Strong>prop drilling</Strong>.
      </P>
      <P>
        As applications grow, we often want a centralized place where shared
        application state can live. Components don't need to pass the state
        through every intermediate layer — they can subscribe to exactly what
        they need. That's the basic idea behind state management.
      </P>

      <H2>Redux: The Structured Approach</H2>
      <P>
        Redux is based around a centralized store and a predictable data flow. A
        component dispatches an action, the reducer determines how state changes,
        and the component re-renders with the new state.
      </P>
      <Pre>{`dispatch({ type: "counter/increment" });`}</Pre>
      <P>
        This structure is one of Redux's biggest strengths — it makes state
        changes explicit and predictable. But that predictability comes with
        concepts you need to understand before the whole system clicks.
      </P>

      <H2>The Redux Learning Curve</H2>
      <P>
        The difficult part isn't writing the code. It's understanding how all
        the pieces connect: Store → Actions → Reducers → Dispatch → Selectors →
        Middleware → Redux Toolkit → <IC>createSlice</IC> →{" "}
        <IC>configureStore</IC> → Provider → <IC>useSelector</IC> →{" "}
        <IC>useDispatch</IC> → <IC>createAsyncThunk</IC> →{" "}
        <IC>pending / fulfilled / rejected</IC> → <IC>extraReducers</IC> →
        TypeScript types for all of it.
      </P>
      <P>
        <Strong>
          Redux isn't necessarily difficult because each API is complicated.
        </Strong>{" "}
        It can feel difficult because there are several concepts to understand
        before the whole system clicks.
      </P>

      <H2>A Small Redux Example</H2>
      <Pre>{`// counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) { state.value += 1; },
    decrement(state) { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`}</Pre>
      <Pre>{`// Counter.tsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}`}</Pre>

      <H2>Zustand: A Game Changer</H2>
      <P>
        Zustand is a lightweight state-management library for React. Its API is
        deliberately small and hook-oriented. You create a store, put state and
        actions inside it, and consume the store directly from React components.
        No Provider. No configureStore. No separate action creators.
      </P>
      <Pre>{`import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));`}</Pre>
      <Pre>{`function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}`}</Pre>
      <P>That's the entire connection.</P>

      <H2>Why Selectors Matter</H2>
      <P>
        When you write <IC>useCounterStore((state) =&gt; state.count)</IC>,
        you're telling Zustand you're interested in <IC>count</IC>. Subscribing
        to the entire store causes the component to update on every state change.
        Atomic selections — one value at a time — keep re-renders tight.
      </P>

      <H2>Async Operations</H2>
      <P>
        In Zustand, async logic lives directly in the store as a plain async
        function. There is no special "async Redux equivalent" to learn before
        making a request.
      </P>
      <Pre>{`fetchUsers: async () => {
  set({ loading: true, error: null });
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    set({ users, loading: false });
  } catch {
    set({ loading: false, error: "Something went wrong" });
  }
},`}</Pre>
      <P>
        Redux Toolkit's <IC>createAsyncThunk</IC> is equally capable — it
        generates <IC>pending</IC>, <IC>fulfilled</IC>, and <IC>rejected</IC>{" "}
        lifecycle actions automatically. Redux gives you a very explicit
        state-transition model. Zustand gives you a more direct one.
      </P>

      <H2>Practical Comparison</H2>
      <Table
        headers={["Area", "Redux Toolkit", "Zustand"]}
        rows={[
          ["Mental model", "Store + actions + reducers", "Store + state + actions"],
          ["Boilerplate", "Low with RTK, but more structure", "Very low"],
          ["Learning curve", "Steeper", "Gentler"],
          ["Provider required", "Yes (React-Redux)", "No"],
          ["Async workflows", "createAsyncThunk + middleware", "Async functions in actions"],
          ["TypeScript", "Excellent", "Excellent"],
          ["DevTools", "Excellent", "Available"],
          ["Architecture", "More opinionated", "More flexible"],
          ["Large teams", "Strong conventions", "Requires team conventions"],
        ]}
      />

      <H2>When I Would Choose Zustand</H2>
      <P>I would seriously consider Zustand when:</P>
      <ul className="list-none space-y-2 mb-5 pl-0">
        {[
          "The application's global state is relatively straightforward (theme, auth UI, cart, filters, modals)",
          "The team values minimal ceremony",
          "You want a simple mental model — a developer can understand useStore((s) => s.count) without learning reducers first",
          "You're building a small-to-medium React application",
          "You want flexible architecture that can grow with slices and middleware",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] text-muted-foreground leading-relaxed">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <H2>When I Would Choose Redux Toolkit</H2>
      <ul className="list-none space-y-2 mb-5 pl-0">
        {[
          "The application has complex shared state where many parts interact in complicated ways",
          "The team needs strong, universal conventions",
          "Debugging state transitions is important — Redux DevTools shine here",
          "You're working in an existing Redux codebase",
          "Your organization already has Redux expertise and conventions",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] text-muted-foreground leading-relaxed">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <H2>One More Important Question</H2>
      <P>
        Before installing Zustand or Redux, ask:{" "}
        <Strong>does this state actually need to be global?</Strong> If the
        state belongs to one component or a small section of the tree, local
        React state may be exactly what you need. And if the main problem is
        fetching, caching, and synchronizing server data, a server-state library
        may be a better abstraction than either.
      </P>
      <Callout>
        The mistake isn't choosing Redux. The mistake isn't choosing Zustand.
        The mistake is choosing a state-management library before understanding
        the problem you're trying to solve.
      </Callout>
    </article>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ARTICLE 2 — What Happens When Frontend Calls an API
// File: components/articles/FrontendCallsApi.tsx
// ════════════════════════════════════════════════════════════════════════════

export function FrontendCallsApi() {
  return (
    <article>
      <P>
        You click <Strong>"Login."</Strong> A spinner appears. A moment later,
        you're either inside your dashboard or staring at an error message.
      </P>
      <P>
        From a user's perspective, almost nothing happened. But underneath that
        button click, your browser created an HTTP request, that request
        travelled across a network to a server, the server received it,
        validated the data, possibly queried a database, performed some business
        logic, created a response, and sent that response back to the browser.
        Then JavaScript had to process the response, update application state,
        and tell React to render the new UI.
      </P>
      <P>
        As frontend developers, we write things like{" "}
        <IC>const response = await fetch("/api/login");</IC> so often that it's
        easy to forget how much is happening behind that one line.
      </P>

      <H2>It Starts With an Event</H2>
      <P>
        The process usually starts with some user interaction — a button click, a
        form submit. React calls your handler, and inside that function you
        eventually call <IC>fetch()</IC>. This is the moment your frontend begins
        communicating with the server.
      </P>

      <H2>What Is fetch() Actually Doing?</H2>
      <P>
        <IC>fetch()</IC> is a Web API provided by modern browsers. At a high
        level, you're telling the browser: "Make a request to this URL and give
        me the result." But <IC>fetch()</IC> doesn't immediately give you the
        server's response. It gives you a <Strong>Promise</Strong>.
      </P>
      <Pre>{`const result = fetch("/api/users");
console.log(result); // Promise { <pending> }`}</Pre>
      <P>
        Why? Because the server hasn't responded yet. The browser has to send the
        request, wait for the server, receive the response, and make that
        response available to JavaScript. That takes time.
      </P>

      <H2>Why fetch() Returns a Promise</H2>
      <P>
        Network requests are asynchronous. If JavaScript stopped doing anything
        until the server responded, the entire browser would freeze. Instead,
        JavaScript starts the operation and continues doing other work. A Promise
        represents a value that will become available in the future — pending,
        then either fulfilled or rejected.
      </P>
      <P>
        This is why <IC>await</IC> is so useful: it pauses the async function
        until the Promise settles, then gives you its result — without freezing
        the entire browser.
      </P>

      <H2>The HTTP Request</H2>
      <Pre>{`fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "david@example.com",
    password: "secret123",
  }),
});`}</Pre>
      <P>An HTTP request contains several important pieces:</P>
      <ul className="list-none space-y-2 mb-5 pl-0">
        {[
          "Method — tells the server what kind of operation (GET, POST, PUT, PATCH, DELETE)",
          "URL — the address the request should go to",
          "Headers — metadata about the request (Content-Type, Authorization, etc.)",
          "Body — the actual data, serialized as JSON with JSON.stringify()",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] text-muted-foreground leading-relaxed">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <H2>What the Server Does</H2>
      <P>
        Your JavaScript does not directly call a database. It sends a request to
        a server. The backend might validate input, find the user, check the
        password, create a session or token, and build a response. The frontend
        doesn't necessarily know how any of this happens — that's the point of an
        API. It gives the frontend a controlled interface to backend functionality.
      </P>

      <H2>HTTP Status Codes</H2>
      <P>
        The server's response always includes a status code. These aren't random
        numbers — they describe what happened:
      </P>
      <Table
        headers={["Range", "Category", "Examples"]}
        rows={[
          ["2xx", "Success", "200 OK, 201 Created, 204 No Content"],
          ["4xx", "Client/request problem", "400 Bad Request, 401 Unauthorized, 404 Not Found"],
          ["5xx", "Server problem", "500 Internal Server Error, 502 Bad Gateway"],
        ]}
      />
      <Callout>
        A frontend developer should not treat every non-200 response as the same
        error. The status code contains useful information.
      </Callout>

      <H2>A Critical fetch() Gotcha</H2>
      <P>
        <Strong>
          A <IC>fetch()</IC> Promise can fulfill even when the server returns a
          4xx or 5xx status.
        </Strong>{" "}
        This surprises many developers. If the server responds with 401
        Unauthorized, the fetch Promise itself still fulfills. You need to
        inspect the response:
      </P>
      <Pre>{`if (!response.ok) {
  throw new Error("Request failed");
}`}</Pre>

      <H2>Two Async Steps</H2>
      <P>
        Even after <IC>fetch()</IC> resolves, the response body isn't
        automatically a JavaScript object. You need to read it:
      </P>
      <Pre>{`const response = await fetch(url);
const data = await response.json(); // second async step`}</Pre>

      <H2>Where React Comes In</H2>
      <P>
        React doesn't make the API request happen. JavaScript makes the request.
        The API responds. Then we update state, and React sees the state change
        and re-renders:
      </P>
      <Pre>{`const [user, setUser] = useState<User | null>(null);

async function login() {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  setUser(data.user); // → React schedules update → UI re-renders
}`}</Pre>

      <H2>Handling All the States</H2>
      <Pre>{`async function login() {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error("Login failed");
    const data = await response.json();
    setUser(data.user);
  } catch {
    setError("Unable to log you in");
  } finally {
    setLoading(false);
  }
}`}</Pre>

      <H2>Where Do Axios and TanStack Query Fit?</H2>
      <P>
        They don't replace HTTP — they sit on top of the underlying
        browser/network capabilities. Axios gives you a convenient client API.
        TanStack Query manages server state around those requests: caching,
        refetching, stale data, retries, optimistic updates. They solve different
        problems:
      </P>
      <ul className="list-none space-y-2 mb-5 pl-0">
        {[
          "fetch / Axios — make HTTP requests",
          "TanStack Query — manage server state around those requests",
          "Redux / Zustand — manage client/application state",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] text-muted-foreground leading-relaxed">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <Callout>
        Abstractions hide complexity. They don't remove it. The better you
        understand the layers underneath your abstractions, the better you can
        debug them.
      </Callout>

      <H2>The Mental Model</H2>
      <P>
        When something breaks, think in layers: Is the UI wrong? Is the state
        stale? Did the query fail? Did the HTTP request fail? Did the server
        reject the request? Did the backend business logic fail? Did the database
        operation fail?
      </P>
      <P>
        The next time you write <IC>const response = await fetch("/api/users");</IC>,
        remember you started a chain of events: user interaction → JavaScript →
        HTTP request → network → backend → business logic → database → HTTP
        response → browser → JavaScript → application state → React → UI.
      </P>
      <P>
        Once you understand those layers, APIs stop feeling like a magical black
        box. They're simply a series of systems communicating with one another.
      </P>
    </article>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ARTICLE 3 — From Figma to Production
// File: components/articles/FigmaToProduction.tsx
// ════════════════════════════════════════════════════════════════════════════

export function FigmaToProduction() {
  return (
    <article>
      <P>
        A Figma file can look perfect. Every spacing value is aligned. Every
        button is in place. Every screen looks exactly how it should. Then you
        open your code editor. And suddenly, you have questions.
      </P>
      <P>
        How should this page be structured? Which parts should become reusable
        components? What happens on mobile? What happens when the API is slow?
        What happens when there is no data? What happens when an error occurs?
      </P>
      <P>
        That is the real work between <Strong>Figma and production</Strong>.
      </P>

      <H2>1. I Don't Start by Writing JSX</H2>
      <P>
        One of the easiest mistakes to make is opening a Figma file and
        immediately starting to write components. Before writing code, I need to
        understand what I'm actually building. So I start by studying the design
        — looking for page structure, typography, colors, spacing, repeated UI
        patterns, responsive layouts, and especially all the states the design
        might not have shown: empty states, error states, loading states.
      </P>
      <P>
        The goal is to move from "I need to build this screen" to "I understand
        the system that produced this screen."
      </P>

      <H2>2. I Break the Design Into Sections</H2>
      <P>
        I don't immediately think "one huge component." Instead, I identify
        boundaries. For a dashboard, that might be: Navbar, Sidebar, and
        MainContent (which contains PageHeader, SummaryCards, and
        TransactionsTable). This gives me an initial component architecture.
      </P>

      <H2>3. I Look for Repetition</H2>
      <P>
        If I see three cards with the same structure but different data, I don't
        want three completely separate components. I want one:
      </P>
      <Pre>{`type SummaryCardProps = {
  title: string;
  value: string;
  change: string;
};

function SummaryCard({ title, value, change }: SummaryCardProps) {
  return (
    <article>
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{change}</span>
    </article>
  );
}`}</Pre>
      <P>
        This is one of the fundamental transitions from{" "}
        <Strong>design thinking to engineering thinking</Strong>.
      </P>

      <H2>4. I Identify What Is Static and What Is Dynamic</H2>
      <P>
        A Figma design usually shows one particular state of the application.
        "John Doe / john@example.com / $4,500" in the design will eventually
        become <IC>const {"{ data: user }"} = useQuery(["user"], fetchUser)</IC>.
        The visual design remains the same. The source of the data changes.{" "}
        <Strong>Figma describes the interface. The application determines
        how that interface behaves.</Strong>
      </P>

      <H2>5. I Think About Responsive Behavior Before Coding</H2>
      <P>
        A desktop design isn't a responsive specification. If Figma gives me a
        1440px layout, I can't simply shrink everything. I need to ask: Does the
        sidebar disappear? Does it become a drawer? Do cards stack? Does the
        table become horizontally scrollable? The mobile version isn't
        necessarily the desktop version made smaller — it can be a{" "}
        <Strong>different composition of the same product</Strong>.
      </P>

      <H2>6. I Build Layout Before Chasing Pixel Perfection</H2>
      <P>
        I establish the larger layout first, then work down into details. Page →
        Layout → Sections → Components → Elements → Typography and visual
        details. Rather than perfecting a tiny button while the overall page
        structure is still wrong.
      </P>

      <H2>7. I Translate Figma's Rules Into CSS</H2>
      <P>
        For example, Figma specifies Inter 16px weight 500, line-height 24px. In
        Tailwind: <IC>text-base font-medium leading-6</IC>. The tool changes.
        The underlying design principles don't. I understand what the design is
        communicating — spacing rhythm, visual hierarchy, motion intent — not
        just the pixel values.
      </P>

      <H2>8. Then the API Enters the Picture</H2>
      <Pre>{`export async function getTransactions() {
  const response = await fetch("/api/transactions");
  if (!response.ok) throw new Error("Failed to fetch transactions");
  return response.json();
}`}</Pre>
      <P>
        The design hasn't changed. But now the interface is connected to reality.
      </P>

      <H2>9. I Don't Build Only the "Happy Path"</H2>
      <P>
        Figma often shows: data exists, everything loaded, everything worked.
        Production doesn't work like that. An API can be loading. It can return
        nothing. It can fail. I think about at least four states: Loading,
        Success, Empty State, Error State. The production UI needs to handle all
        of them.
      </P>
      <Callout>
        Loading states are part of the design. A skeleton is often a better
        experience than a spinner, because it communicates the shape of what's
        coming rather than just "wait."
      </Callout>

      <H2>10. Accessibility Is Part of Production</H2>
      <P>
        A design can look perfect and still produce an inaccessible interface.
        Semantic HTML, keyboard navigation, focus states, form labels, color
        contrast, alt text — these should influence implementation from the
        beginning, not get bolted on at the end.
      </P>
      <Pre>{`// Bad
<div onClick={handleSubmit}>Submit</div>

// Better
<button onClick={handleSubmit}>Submit</button>`}</Pre>

      <H2>11. The Biggest Shift: From Screens to Systems</H2>
      <P>
        The biggest lesson I've learned from implementing designs is that
        frontend engineering isn't really about converting screens into JSX.
        It's about translating{" "}
        <Strong>design intent into software behavior</Strong>.
      </P>
      <P>
        A Figma file might tell me "put this button here." But engineering asks:
        What happens when they click it? What if the request fails? What if they
        click twice? What if they're on mobile? What if they're using a keyboard?
        That's where frontend engineering begins to separate itself from simply
        reproducing a visual design.
      </P>
      <Callout>
        Design shows what the product should look like. Engineering makes it
        behave like a product.
      </Callout>
    </article>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ARTICLE 4 — Sending Emails with Resend and Next.js
// File: components/articles/ResendNextjs.tsx
// ════════════════════════════════════════════════════════════════════════════

export function ResendNextjs() {
  return (
    <article>
      <P>
        Sending an email from a web application sounds simple. A user fills out
        a form, clicks Send, and an email arrives. But behind that button:
        Frontend Form → Next.js Server → Resend API → Email Provider →
        Recipient's Inbox.
      </P>
      <P>
        I recently needed to add email functionality to a Next.js application
        and used <Strong>Resend</Strong> to handle the actual delivery. What
        stood out was how little infrastructure was required — my Next.js
        application handled the application logic, and Resend handled delivery.
      </P>

      <H2>What Is Resend?</H2>
      <P>
        Resend is an email API designed for developers. Instead of managing an
        SMTP server yourself, your application can make an API request telling
        Resend who the email is from, who should receive it, the subject, and the
        content. Your application handles the <Strong>business logic</Strong>.
        Resend handles the <Strong>email delivery infrastructure</Strong>.
      </P>

      <H2>Why Not Send From the Browser?</H2>
      <Callout>
        Your Resend API key is a secret. Anything shipped to the browser can
        potentially be inspected by the user. The API key stays on the server.
      </Callout>
      <P>
        This is one of the reasons Next.js makes this workflow convenient: you
        can keep the email-sending logic inside a server-side environment. The
        browser never needs to know the API key exists.
      </P>

      <H2>Installing Resend</H2>
      <Pre>{`npm install resend`}</Pre>
      <Pre>{`# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx`}</Pre>
      <Pre>{`import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);`}</Pre>

      <H2>Creating the API Route</H2>
      <P>
        In a Next.js App Router application, create:
        <IC>app/api/send-email/route.ts</IC>. The route becomes{" "}
        <IC>POST /api/send-email</IC>, and our frontend sends form data there.
      </P>
      <Pre>{`// app/api/send-email/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const { data, error } = await resend.emails.send({
    from: "Website <onboarding@resend.dev>",
    to: ["you@example.com"],
    subject: \`New message from \${name}\`,
    html: \`
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> \${name}</p>
      <p><strong>Email:</strong> \${email}</p>
      <p><strong>Message:</strong> \${message}</p>
    \`,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true, data });
}`}</Pre>

      <H2>Connecting the Form</H2>
      <Pre>{`"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setIsSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed to send email");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your name" />
      <input name="email" type="email" placeholder="Your email" />
      <textarea name="message" placeholder="Your message" />
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}`}</Pre>

      <H2>Validate the Input</H2>
      <P>
        Never trust data simply because it came from your own frontend. A
        malicious user can bypass the UI and call your endpoint directly. The
        server should validate the request:
      </P>
      <Pre>{`import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const result = contactSchema.safeParse(body);

if (!result.success) {
  return Response.json({ error: "Invalid form data" }, { status: 400 });
}`}</Pre>

      <H2>Deployment</H2>
      <P>
        Everything can work perfectly on localhost and then fail after deployment.
        Why? Because your local <IC>.env.local</IC> has{" "}
        <IC>RESEND_API_KEY</IC> and your production environment doesn't — yet.
        Configure the environment variable in your deployment platform, and never
        commit it to Git.
      </P>

      <H2>The Three Boundaries</H2>
      <Table
        headers={["Layer", "Responsibility"]}
        rows={[
          ["Client", "Collect input · show loading states · show success/error feedback · basic UX validation"],
          ["Server", "Validate incoming data · protect secrets · control the email request · handle server-side errors"],
          ["Resend", "Process the email request · email delivery infrastructure"],
        ]}
      />
      <Callout>
        The goal isn't simply to make the email send. The goal is to build the
        entire flow correctly: User → UI → Request → Server → Validation →
        Resend → Email → User feedback.
      </Callout>

      <H2>The Mental Model</H2>
      <P>
        If you remember only one thing: Frontend says "I want to send this data."
        Next.js Server says "I can safely use the secret here." Resend says "I'll
        handle email delivery." That's the whole model.
      </P>
      <P>
        Sometimes the engineering challenge isn't "How do I build an email
        delivery system?" It's "How do I integrate an existing service correctly
        into my application?" With Next.js and Resend, the basic implementation
        is remarkably small. The engineering is in getting all the layers right.
      </P>
    </article>
  );
}