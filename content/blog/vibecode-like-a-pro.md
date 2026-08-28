## 1. TL;DR

The method is four stages with a verification gate between every stage: Specify, Prototype, Harden, Ship.

The full path is Stage 0 (idea to spec) -> Stage 1 (prototype the core loop) -> Stage 2 (harden into a real app) -> Stage 3 (production).

Inside Stage 2, work runs as tracer-bullet tickets: small vertical slices through all layers, one owner per file, tests first for logic, review before merge.

The operating rules that make this work in 2026: own the architecture (data model, module seams, API contracts, invariants), rent the implementation.

Generation is cheap and fast; your speed limit is how fast you can verify that the output is correct.

Use briefs, not vibes: every task goes out as Context, Objective, Boundaries, Verification.

Route models deliberately: Opus for planning and review, Sonnet for implementation, Haiku or Sonnet for tests, and never let the same model both write and review the same code.

Keep human-curated CLAUDE.md, AGENTS.md, and SPEC.md in the repo; they are the leverage that makes every agent run correct.

Commit before every agent change; git reset --hard is your eject button.

Direct answers to the five questions:

1. Idea to prototype to production: Specify -> Plan -> Prototype the core loop -> gate keep or throw -> lock the architecture -> tracer-bullet build loop with TDD -> review -> CI -> security audit -> deploy with rollback -> observe and iterate.

2. The moment an idea pops into your head: write the one-liner and a measurable success criterion, spend 30 minutes validating, draft the spec, run a plan-mode interview, approve the plan, then build the core loop with fake data the same day.

3. The skills to develop, ranked: verification, spec writing, decomposition, architecture judgment, context curation, orchestration, debugging discipline, git hygiene, terminal literacy, taste translation.

4. Tests: prototypes get manual test-after QA with zero ceremony; anything that ships gets test-first with the agent writing a failing test before implementation; new behavior always ships with a new test in the same PR.

5. Navigating an existing codebase: explore read-only before editing, map the architecture and conventions, make your first change a test or a doc fix, and never let an agent edit before you approve a plan.

Checklist:
- Spec exists and a plan is approved before any code.
- Every task has boundaries and validation commands.
- Tests and review are separate from generation.
- You can roll back any agent change with git.

## 2. Mindset shift: what "vibecoding like a pro" actually means

Pro vibecoding is not typing less; it is thinking more at the design layer and verifying obsessively at the quality layer.

The shift has four parts.

1. Own the architecture, rent the implementation.
The model is excellent at local coherence and bad at global coherence.
Left alone across sessions, it invents a third data-fetching approach and a second error-handling convention.
So you hold the data model, the module seams, the API contract, and the invariants; the model fills in the internals.
This is the single most repeated lesson across the corpus.

2. Verification over generation.
The bottleneck is no longer generation; it is verification.
Generation is effectively free; verification is scarce, and almost everyone optimizes the wrong side of that equation.
Your ceiling as a vibecoder is how fast you can tell whether the output is correct, not how pretty your prompts are.

3. You are the engineering manager, not the typist.
Delegate tasks, not judgment.
Architecture, API design, deciding what not to build, and full-context review stay human.
A prompter says "build me a dashboard"; a director specifies the three metrics, the data source, the refresh interval, and the loading state.

4. The human bottleneck was a feature, not a bug.
At agent speed, small mistakes compound before you feel pain.
Quality gates everywhere are what keep a fleet of agents from turning into a distributed mess you can no longer review.
If you lose understanding of your own system, you have lost the ability to fix it, extend it, or know when it is broken.

One more calibration: aim for agent-first working, with the conversation as primary and the IDE as inspection surface, not for full autonomous orchestration.
The orchestration level you adopt follows the number of agents you actually need: start with one agent plus subagents, add teams only when parallel work is genuinely separable, and cap your attention at 2 to 4 parallel agents.

Vibe coding also rewards strong engineers more than weak ones.
Mechanical work is automated; cognitive work is amplified.
The sources disagree on tone but agree on the core: fundamentals still decide who wins.

Checklist:
- You can state your data model, seams, and invariants without looking at code.
- You verify every agent claim yourself.
- You review every diff, not the summary.
- You run fewer agents than you think you need until the bottleneck proves otherwise.

## 3. The skills of a pro vibecoder, ranked

This list is ranked by leverage in 2026.

1. Verification.
This is the ceiling skill: reading diffs, running the tests and build yourself, questioning agent confidence.
Practice: after every session run git diff --stat and read the actual diff.
Check four things: files you did not ask about, new dependencies, swallowed errors, duplicated existing code.
Run the validation commands yourself even when the agent says it passed.

2. Spec writing.
Prompts must be specs: Context, Objective, Boundaries, Validation.
Practice: fill the template in the appendix for every task before opening the chat.
Review specs like code; a stated-but-wrong assumption is reviewable, an unstated assumption is a bug.

3. Work decomposition.
Break features into vertical slices with explicit dependencies, a rule of max 3 files per task, and one file one owner.
Practice: before building anything, write the tracer-bullet list and ask the agent to check it for missed dependencies.

4. Architecture judgment, not syntax.
Hold the data model, module seams, API contracts, and invariants, and know what not to build.
Practice: for any non-trivial piece, ask for the interface first, argue over it, lock it, then say implement it.
Reviewing a 30-line interface takes two minutes; reviewing 400 lines built on a bad interface takes an hour.

5. Context curation.
Maintain CLAUDE.md, AGENTS.md, SPEC.md, and ARCHITECTURE.md as human-curated operating manuals.
Sources disagree on file size, from under 80 lines to 500; the verdict is: CLAUDE.md around 100 to 300 lines as an index, AGENTS.md under 80 lines of style, gotchas, architecture decisions, and test strategy.
Practice: update these files in the same PR as any architecture change, weekly otherwise, and never let agents edit them unsupervised.

6. Orchestration.
Run 2 to 3 parallel agents only on genuinely separable work.
Use WIP limits around 5, kill after 3 stuck iterations, check in every 5 to 10 minutes instead of hovering.
Practice: run one parallel task in worktrees this week, and write down what merged cleanly and what conflicted.

7. Debugging discipline.
Reproduce, trace to a root cause with evidence, propose two fixes with tradeoffs, recommend one, and wait for approval.
Change the information, not the phrasing: a second failed attempt with the same input is guess 2; a third, louder attempt is guess 3.
Practice: whenever a bug survives two fixes, paste the exact error, the file, and what you have ruled out, and demand a root-cause explanation before another edit.

8. Git hygiene.
Commit before every agent task; git reset --hard only works with fine-grained history.
Practice: make checkpoints a reflex, not a decision.

9. Terminal and code literacy.
You need cd, ls, grep, cat, curl, jq, ps, npm, git, and docker to inspect what the agent claims.
Practice: read one generated feature line by line each week and be able to explain it to someone else.

10. Taste translation.
Convert "make it premium" into measurable constraints: 1440px viewport, 12-column grid, 1200px max width, 8px base spacing, 120 to 160ms transitions, named fonts, an icon library.
Practice: for the next UI request, write five numeric constraints instead of one adjective.

11. Multi-model routing.
Know which model does planning, implementation, tests, and review.
Practice: keep a MODEL_ROUTING.md and update it every time a model surprises you.

Syntax memorization is deliberately not on the list; the sources agree it is the lowest-value skill in 2026, while product thinking, review, debugging, web fundamentals, databases, and security are the durable ones.

Checklist:
- You practice one skill deliberately each session.
- Your fallback when stuck is a fresh context plus more information, not a louder prompt.
- You can name the model you would use for each phase of tonight's work.

## 4. Environment setup

The tools are changing weekly; the process around them is the moat.
Here is the concrete starter setup.

1. Primary CLI: Claude Code.
Run it from the project root in a terminal or the VS Code extension, with the source view open to watch files change.
Modes: plan mode for any new feature, accept-edits for routine work, and never bypass permissions on a repository you cannot afford to lose.
Some sources prefer Cursor or Antigravity; the verdict is one primary agent tool you know deeply, plus a second model CLI as reviewer.
Alternatives such as Codex CLI, Gemini CLI, or Cursor are fine as the second tool.

2. Models.
Use Opus for planning, architecture, and review.
Use Sonnet for implementation; it is 60 to 70 percent cheaper and nearly as good for bounded coding.
Use Haiku for tests and bulk mechanical work.
Keep a second frontier model as reviewer, because the builder model carries a self-review bias.
Record all of this in MODEL_ROUTING.md.

3. Rules files and context.
Put CLAUDE.md at the repo root as an operating manual, not a README: architecture to read before changes, conventions, commands, boundaries, and current sprint context.
Put behavioral constraints in .claude/rules/: run tests before commit, no force-push, max 3 files per task, ask when uncertain.
For multi-agent tools, keep AGENTS.md under 80 lines; every agent reads it at session start, and a human approves every line.
A stale rules file is worse than none because it is confidently wrong.

4. Skills frameworks.
Install one workflow library and learn it before adding a second.
The three in the corpus:
- obra/superpowers: makes a full plan -> worktree -> TDD -> code-review workflow mandatory rather than optional; install with `/plugin install superpowers@claude-plugins-official`.
- mattpocock/skills: discipline primitives, strongest at alignment (`grill-me`, `grill-with-docs`), spec and ticket breakdown (`to-spec`, `to-tickets`), and disciplined debugging (`diagnosing-bugs`); install with `npx skills@latest add mattpocock/skills` to keep the files editable.
- gstack: a virtual engineering team with role commands (`/plan-eng-review`, `/review`, `/qa`, `/cso`, `/ship`) and guardrails such as `/freeze` and "zero silent failures"; install by cloning into `~/.claude/skills/gstack` and running `./setup`.
My verdict: start with obra/superpowers for the enforced workflow, add mattpocock's `to-spec` and `to-tickets` when decomposition is your bottleneck, and lift gstack's review and QA roles plus its guardrail rules into your own CLAUDE.md.
Keep 5 to 8 skills active, and judge each one the same way: does it change default behavior, or only add a command you must remember to invoke?

5. Subagents.
Define review agents in .claude/agents/ as markdown files with frontmatter name, description, tools, and model.
Create architecture-reviewer, test-reviewer, security-reviewer, and database-reviewer as read-only agents with tools limited to Read, Grep, and Glob.
Restart Claude Code after adding agents.
Use task-based subagents, not role-playing brainstormers; role agents produced bad results for open-ended ideation.

6. Hooks.
Hooks are enforcement where CLAUDE.md is only guidance.
Use a Stop hook to run lint, typecheck, and tests when the agent tries to finish and to keep the session open on red, a PostToolUse hook to reject dangerous commands and committed secrets, and a git pre-commit hook to block known failures.
That combination, plus a verify command that blocks session end until it passes, is what gives you zero silent failures.

7. MCP servers.
Add only what you need: Context7 for current docs, Supabase for database work, Chrome DevTools or Playwright for browser verification, GitHub for repos.
Every MCP server injects tool definitions into context on every request, so treat each as a cost center.
Prove an MCP useful on a small task, then convert the workflow to a skill or script.

8. Git hygiene.
One file, one owner.
Use a worktree per agent so parallel sessions never fight over files.
Set up the three helper scripts from the corpus, about a dozen lines of bash each: agent-spin (worktree plus branch plus agent), agent-merge (rebase, review, PR), agent-clean (remove finished worktrees).
Commit before every agent task, never force-push, and merge only through a PR that a human approves.

9. Sandboxes.
Run anything that executes third-party or generated code in Docker.
Use cloud async agents (Claude Code Web, Codex Web, Jules, Copilot Coding Agent) for long tasks on isolated VMs; the standard loop is describe task, approve plan, agent runs remotely, PR with evidence, human reviews.
For parallel experimentation, use playground workspaces and throw them away.

10. Session hygiene.
Learn /context, /compact, /clear, /resume, and checkpoints.
Auto-compact fires when context runs low (the corpus reports around 70 percent, but this is version-dependent); clear between unrelated tasks; compact during long related work.
One ticket, one session.

Checklist:
- Claude Code plus one review CLI are installed.
- CLAUDE.md and AGENTS.md exist and are human-curated.
- Four read-only review agents exist.
- Hooks run lint and tests at task completion.
- Worktrees are your default for parallel work.
- No secrets live outside .env.

## 5. Stage 0: Idea to spec

The moment an idea pops into your head, you resist opening a builder.
The corpus is unanimous that the hardest part is no longer the building; it is deciding what to build, and roughly 90 percent of failures are building the wrong thing.

The series of steps from idea to the first line of code:

1. Write the one-liner: "<App> helps <user> do <core job> so that <measurable outcome>."
2. Add one success metric you could test with a single real user in under two minutes.
3. Validate cheaply, within 30 to 60 minutes: search existing apps (a proven clone is already validated), read TikTok or Instagram comments where people describe the problem, and message three potential users.
4. Draft the spec with the template below.
5. Run a plan-mode interview: "Do not build anything yet. Interview me. Identify ambiguities, propose architecture, schema, API, pages, phases, and write SPEC.md and PLAN.md. Do not implement."
6. Review the plan for scope errors only: wrong page count, wrong stack, misunderstood requirements.
7. Lock the spec in-repo as docs/spec.md or SPEC.md, versioned like code, consumed by the agent on every generation.
When spec and code disagree, fix the spec and regenerate; code serves specifications.
8. Capture design intent too: a reference screenshot, a design-system file, or explicit color, spacing, and typography constraints.

Spec rigor: start at level 1, spec-first, where the spec informs the agent but the code becomes the source of truth during the build.
Graduate to level 2, spec-anchored, where spec and code stay in sync, for core systems that will acquire a future.

Copy-paste spec template:

```markdown
# SPEC: <Project name>

## Goal
<One sentence: who, what job, what outcome.>

## Target user
<One persona with the painful task.>

## Core workflow
1. <Step>
2. <Step>
3. <Step>
<Keep the action-to-reward loop under about 30 seconds.>

## Success criteria
- <Measurable, e.g. "a recruiter goes from job description to ranked candidates in under 2 minutes.">
- <One anti-goal, e.g. "no manual setup step.">

## Functional requirements (EARS)
- WHEN <condition> THE SYSTEM SHALL <behavior>.
- WHEN <condition> THE SYSTEM SHALL <behavior>.

## Non-functional requirements
- Performance: <number and budget, e.g. p95 under 200ms for the dashboard.>
- Security: <auth on every route, server-side validation only.>
- Accessibility: <keyboard, contrast, reduced motion.>
- Surface area: <stay at 5-7 screens unless justified.>

## Data model and contracts
- Entities: <name and key fields.>
- API: <endpoint, method, request, response, error shape.>
- Invariants: <e.g. "remember_token must never be null", "credits decremented exactly once per action.">

## Boundaries
- Do not modify: <files, systems, public interfaces.>
- Decisions already made: <no migration proposals, no framework swaps.>

## Non-goals
- <Explicit "won't do" item for v1.>
- <Explicit "won't do" item for v1.>

## Acceptance criteria (each becomes a test)
1. <Given/When/Then, testable.>
2. <Given/When/Then, testable.>

## Validation plan
- Commands: <lint, typecheck, test, build.>
- Manual flows: <the two flows a human will click through.>

## Approval points
- Plan approved before code.
- Destructive changes (migrations, deletions, deploys) require human approval.
```

Specs need review like code needs review.
A stated-but-wrong requirement is fixable; an unstated assumption is a production bug.

Checklist:
- One-liner and success metric written.
- Thirty minutes of validation done.
- SPEC.md committed before any code.
- Plan-mode interview completed and approved.
- Acceptance criteria are testable.

## 6. Stage 1: Prototype

A prototype is an experiment that answers one question: does the core loop work, and is it worth hardening?

Goals: prove the core loop end-to-end with fake data, find the binding constraint, and put the result in front of one real user.

What to ignore: auth, payments, a real database, test suites, security, scale, migrations, and design polish, unless design is the product.

The build order that works most often in the corpus: input -> core logic -> local JSON or static files as the database -> output, then UI polish.
Build the main functionality first, and add auth last, because middleware generated after all pages exist covers every page, while auth added first often secures only the first page.
This is a prototype heuristic; a real app designs auth into the architecture from the start.

The loop:

1. Timebox one day for most apps, a few hours for a page.
2. Build ugly first: functionality before style.
3. One feature per prompt; test manually in the browser after every change.
4. Paste exact console errors and screenshots back into the agent; do not paraphrase.
5. Commit after every working step.
6. Keep context fresh: one chat per unit of work, /clear between tasks, and maintain a handoff file like updates.md so progress survives token exhaustion and model changes.
7. If visual quality matters, pin a reference screenshot and loop screenshot-compare at 80, then 90, then 95 percent fidelity.
8. Run no more than 2 to 3 parallel variations, in playgrounds, then pick and drop the rest.

When the prototype is done: the core loop demonstrably works end-to-end with fake data, you have watched a real user do it, and you can name the binding risk.
The binding risk is the hardest 20 percent, such as the matching algorithm, the video generation, or the import fidelity.

The gate: keep or throw away.
If you keep, archive the prototype as a reference and expect to rebuild the binding-constraint code.
Reuse the boring, correct parts; throw away the experiment.
Never promote a prototype to production by piling fixes on it; that is how architectural decay starts.
The corpus rule is: vibe the prototypes, spec what ships.

Sources disagree on whether prototype code can ever be kept; the verdict is keep only code that is boring and obviously correct, and never keep the code that taught you the lesson.

Checklist:
- Timebox set and respected.
- Core loop works with fake data.
- Manual QA after every change, not only at the end.
- Commits after every working step.
- A real user has tried it.
- Keep or throw decision made in writing.

## 7. Stage 2: Harden into a real app

Hardening is where you stop renting judgment and start holding architecture.

1. Rewrite the spec into SPEC.md with acceptance criteria that each map to a test.
2. Lock the architecture: data model, module seams, API contracts, invariants.
Write ARCHITECTURE.md with every decision, its date, the reason, and a do-not-relitigate list so agents stop proposing migrations you already rejected.
For any non-trivial piece, review the interface before any implementation.

3. Pick the boring stack, not the exciting one.
The corpus default is Next.js plus TypeScript plus Tailwind plus shadcn/ui, with Supabase or Postgres for data, and Vercel for hosting.
Add Python or FastAPI only when it genuinely earns its place.
Ask the two-questions test: what is the simplest architecture that satisfies the requirement, and what would we remove if we had to build this in one weekend?
Do not build distributed microservices for a SaaS with 14 users.

4. Scaffold quality systems on day one: CI running lint, typecheck, test, and build on every commit; verification hooks; a TEST_STRATEGY section in AGENTS.md; and a CLAUDE.md operating manual.

5. Break the work into tracer-bullet tickets.
Each ticket is one vertical slice through all layers, for example profile fetch -> API route -> page with edit form -> validation -> toast, with one acceptance criterion from the spec.
Keep tasks small enough to review, max 3 files per task unless you explicitly scope more, with one owner per file and explicit dependency edges.

6. Run the build loop per ticket:
- The agent writes a short implementation plan; you approve it.
- The agent writes the failing test first for logic work.
- The agent implements the smallest change and runs the relevant tests after every step.
- The agent fixes failures instead of bypassing them.
- Diff checkpoint plus read-only review agent.
- You read the diff, merge, and update context files in the same PR if architecture changed.

7. For overnight or long work, use the Ralph loop: feature branch, sandbox, iteration and time and token limits, auto-retry with error feedback, kill and reassign after 3 stuck iterations, agent opens a PR, a human reviews and merges.
Set MAX_ITERATIONS around 8 and pause at about 85 percent of token budget.

8. Bridge parallel subagents with report files such as DATA.md, LOGIC.md, and API.md so dependent agents read reports instead of re-exploring.

9. Keep one ticket, one session; reset context between tickets.
Short sessions beat long ones because context drift resolves to the most recent claim, not the most important one.

Checklist:
- SPEC.md and ARCHITECTURE.md committed and reviewed.
- Stack chosen with the one-weekend test applied.
- CI green from the first commit.
- Tickets are vertical slices with explicit dependencies.
- Every logic-facing change ships with its test.
- A human reads every diff and merges every PR.

## 8. Testing: before or after, and how

The direct answer: the sources disagree, so here is the verdict.

One camp, mainly the skill frameworks superpowers and mattpocock, mandates TDD: red-green-refactor, tests before implementation.
Another camp, mainly practitioner transcripts, reports test-after: build a slice, run it manually, fix, repeat.
The practitioner consensus in the articles is in between: when the agent executes incrementally, add or update tests first, implement the smallest change required, run tests after each step, fix failures rather than bypassing them, and always require new tests for new behavior.

My verdict: prototypes get test-after manual QA with zero ceremony; anything that will ship gets test-first with the agent.
New behavior always ships with a new test in the same PR.
This honors the point both camps agree on: a failure after one file change is trivial to find, while the same failure after seven files is archaeology.

The recommended TDD loop with an agent:

1. Hand the agent the ticket as a spec: Context, Objective, Boundaries, Validation.
2. The agent writes the failing test or tests for the acceptance criterion first.
3. You or a review agent approve the test: does it test the right thing, and is the assertion non-vacuous?
4. The agent implements the smallest change that passes it.
5. Run the test; on failure, the agent fixes the implementation, never deletes or weakens the test.
6. The agent runs the affected suite plus lint and typecheck after each step.
7. The agent reports evidence: exact commands run, test output, and the diff.
8. The PR merges only with the new test and human review.

What to test first, ranked:

1. Acceptance criteria from the spec; for example, duplicate email returns HTTP 409.
2. Business logic and invariants; for example, a token must never be null, a credit decrements exactly once.
3. Auth and authorization, including every authenticated route tested signed-out.
4. Failure paths and error states, not only happy paths.
5. Idempotency and retry timing.
6. API and event backward compatibility.
7. Database queries against realistic indexes; the corpus example is a composite index on (status, created_at) taking a query from about 8 seconds at 10 million rows to about 2 milliseconds.
8. Destructive paths, tested against a sandbox.

Agent-written tests are not sufficient.
Agents write technically valid tests that miss the cases that matter, and tests that passed before a change do not guarantee they catch regressions from that change.
So keep human-written nasty tests: adversarial edge cases, race conditions, security exploits, boundary values, and a deliberately nasty fixture such as a two-column ligature-heavy PDF with a table spanning pages.
The security version of the nasty test is the rule "no exploit, no report": a pentest agent that executes real exploits in Docker and only reports proven vulnerabilities.

Evals apply wherever the behavior is nondeterministic, such as retrieval, classification, or prompting.
Before tuning anything, write 20 real queries, 10 easy and 10 hard, with the expected result each, and measure quality on every change.
Otherwise a switch of embedding models feels better in a way that is indistinguishable from noise.
Use public benchmarks only to select tools and skills, and ask of every skill: does this change the default behavior, or only add a command?

CI gates that matter:

- A Stop hook runs lint, typecheck, test, and build when the agent tries to finish; if it fails, the agent keeps working.
- A pre-commit test gate catches roughly 60 percent of issues that would reach code review.
- CI must run on every commit and fail the PR on red.
- A verify line in CLAUDE.md blocks session end until the command passes.
- Destructive operations, migrations, infra changes, and deploys get mandatory human approval; there is no autonomous path to production.
- Zero silent failures: reject any try/except that swallows an error, and demand evidence over claims.

Coverage: do not chase a percentage.
Require instead that new behavior is covered, acceptance criteria are covered, and failure paths are covered.
Audit coverage at release time as one of the ship gates.

Test placement: next to the code, in the same repo, with the test strategy documented in AGENTS.md under TEST_STRATEGY.
For UI and mobile work, add Playwright or browser-level checks for happy paths and keep manual device testing for what browsers cannot see: haptics, push notifications, status bar behavior, and thumb reach.

Checklist:
- Prototype: tested after every change, manually.
- Shipping code: failing test first, implementation second.
- New behavior never lands without a new test.
- Human nasty tests exist for the risky paths.
- CI blocks red, and hooks make silent failures visible.
- Evals exist for every nondeterministic component.

## 9. Stage 3: Production

1. Security gate first.
Run the audit in a fresh conversation with a second model and empty context, audit-only, then review findings, then authorize fixes, then re-test core functionality because auth middleware changes have broken assets and login routes in real projects, then re-run the audit once more in another fresh context.
The 80/20 checklist: exposed env vars and secrets, missing or misconfigured row-level security, client-side-only validation, hallucinated or outdated packages, missing auth middleware, verbose error responses, missing rate limiting, and unverified payment webhook signatures.
A human reads auth, payments, migrations, deletion logic, and anything adversarial line by line.

2. Observability.
Add error tracking such as Sentry, structured request logs, and one metric on the core loop.
Add a product analytics tool such as PostHog for activation and retention.
If a new user can fail silently, that is a production bug, not an analytics problem.

3. Environments and config.
Keep local, staging, and production separate with per-environment config.
Fix every environment-specific URL before launch: auth callback URLs, webhook URLs, CORS origins, and asset domains still pointing at localhost are the classic launch breakers.

4. Deploy.
Deploy from a tagged commit through CI, never from a developer machine.
Ship to staging first, smoke it, then promote.
Keep a verified rollback path and test it once.
For risky paths, use feature flags so you can turn a feature off without redeploying.

5. Canary and post-deploy verification.
After release, run the core loop on production as a smoke test, watch console and error rates for the first hours, and check quota or credit side effects.
There are purpose-built canary agents; the minimum viable version is you clicking the real flow in an incognito window.

6. Docs.
Update the README quickstart and architecture docs to match what shipped, in the same PR as the change.
Update AGENTS.md and CLAUDE.md so future agents start from current reality.

7. Rollback drill.
Make rollback a script plus a known commit to return to, and prove it works in staging before you need it in production.

8. Human gates.
There is no autonomous path to production for destructive operations.
Apply the same review bar to AI code as to human code.
The machine sounds certain even when it is wrong; verify anyway.

Checklist:
- Fresh-context security audit passes twice.
- Secrets, row-level security, server-side validation, and webhook checks verified.
- Error tracking and one core-loop metric live.
- Staging smoke passed before production.
- Rollback tested once.
- Docs and context files match production.

## 10. Navigating an existing codebase

The playbook, in order.

First hour:

1. Clone the repo, install, run the tests, and boot the app.
2. Read README, CLAUDE.md, and AGENTS.md if they exist.
3. Run /init to scaffold a CLAUDE.md, then edit it into an operating manual.
4. Launch a read-only explore pass: "Understand this repository. Do not modify anything. Report the architecture, important files, dependencies, database structure, auth flow, major abstractions, and technical debt."
5. From the report, draw the map: the core loop in code, the conventions for errors, response types, and repositories, and the files marked do-not-modify.
6. Identify the build, lint, test, and environment setup commands.

Mapping stage:
Before any feature work, ask the agent to inspect the relevant modules and produce an implementation plan with files affected, patterns to follow, and tests required.
Approve the plan before any edit.
Follow existing conventions even when you dislike them; the repo's patterns beat your preferences.
Pin environment constraints exactly, such as OS and runtime versions, so the agent does not hallucinate a generic setup.

The safe first change:
Fix a small bug with a test, or add a test that documents existing behavior, or fix a wrong doc.
Never start with a refactor.

Debugging inside the codebase:
Reproduce first, then send the exact error, the file, and what you have ruled out.
Bring only the current file, the error, and ruled-out hypotheses to a fresh thread.
If the agent fails twice, the information is the problem, not the phrasing; add a log line and paste actual output.
Demand a root-cause explanation with two candidate fixes and a recommendation before any code change.

Where agents go wrong in existing code, and your counters:

- They invent a second convention for data fetching or error handling. Counter: point at the existing convention files in every prompt.
- They rewrite unrelated files. Counter: explicit boundaries, max 3 files, diff checkpoints.
- They relitigate settled decisions. Counter: ARCHITECTURE.md with a do-not-relitigate list.
- They duplicate existing utilities. Counter: name the relevant file in the prompt so it reuses it.
- They trust stale assumptions from context files. Counter: update context files in the same PR as changes, and ask the agent to re-read before big work.

Context management tools for existing code: /context, /compact, /clear, /resume, and checkpoints.
Parallel exploration uses worktrees and read-only scouts so nothing collides.
When a session has gone in circles, close the thread and start fresh with a handoff file rather than arguing with a corrupted context.

Checklist:
- Repo maps exist: architecture, conventions, forbidden files, commands.
- First change was a test or a doc fix.
- No edits happened before a reviewed plan.
- Debugging started from a repro, not a wish.

## 11. The verification system

The core design rule: separate generation from verification.
Never let the same agent both write and review the same code, and never let a self-reported "done" be the only signal.

The roles:

1. Builder (Sonnet) implements narrowly scoped tasks and provides evidence: exact commands run, test output, logs, and the diff.
2. Reviewer agents (Opus, or a different frontier model than the builder) are read-only with tools limited to Read, Grep, and Glob.
Create four: architecture-reviewer, test-reviewer, security-reviewer, database-reviewer.
Run them independently and consolidate findings by severity; fix critical and high, re-validate, and leave low-severity style debates for later.
3. Plan approval is a review gate that happens before code exists; it is far cheaper to reject a bad plan than to rework bad code.
4. Hooks are the deterministic layer: a Stop or SubagentStop hook runs lint and tests and refuses to let the agent finish while they fail, and a verify command blocks session end on red.
5. A dedicated reviewer teammate or a second CLI handles adversarial review, with roughly one reviewer per 3 to 4 builders.

The adversarial review prompt, in essence: you are a hostile senior engineer; do not praise anything; find problems; return findings ranked CRITICAL, HIGH, MEDIUM, LOW; do not modify anything; prove each claim.
For security, the strongest version executes real exploits in a sandbox and reports only proven vulnerabilities: no exploit, no report.
A cheaper variant is debate: one agent argues each finding is real, one argues it is not, and only the consensus list gets fixed.

Human gates, in order of importance:

- Read the diff, not the summary, checking the four things: unasked files, new dependencies, swallowed errors, duplicated code.
- Read line by line anything irreversible or adversarial: auth, payments, migrations, deletion logic, file paths built from user input, and the core insight of the product, which fails subtly and weeks later when it is wrong.
- Destructive operations require human approval; there is no autonomous path to production.
- Apply the same review bar to AI code as human code.
- For high-stakes releases, add a second-model zero-context audit, because the writer model is biased about its own output.

Evidence over claims is the closing rule: every finished task should end with commands run and outputs shown, not with "this should work".
The code you receive is only the second draft if a reviewer and a gate actually ran.

Checklist:
- Builder and reviewer are different models.
- Four read-only review agents exist.
- Plans are approved before code.
- Hooks block silent failures.
- A human reads every diff and every irreversible path.
- Evidence attached to every finished task.

## 12. Anti-patterns and how to avoid them

| Anti-pattern | Symptom | Fix |
|---|---|---|
| Vague mega-prompt | 40 files of spaghetti, wrong product | Spec first, plan approval, vertical slices, max 3 files |
| One agent writes and reviews | Self-review bias, confident wrongness | Different models for builder and reviewer |
| Context drift | Agent reverses earlier decisions, invents new conventions | One ticket per session, /clear, handoff files |
| Over-editing | Agent "improves" unrelated files | Explicit boundaries, diff checkpoints, max 3 files |
| New behavior, no new test | Green suite, silent regressions | New test in the same PR as new behavior |
| Architecture drift | Third data-fetching approach, second error convention | ARCHITECTURE.md, human holds seams and contracts |
| Stale context files | CLAUDE.md confidently wrong after a migration | Update in the same PR, human-curated, weekly refresh |
| Trusting summaries | Pretty report, subtly wrong code | Read the diff and run the commands yourself |
| Parallel agents, same file | Merge conflicts, locked files | One file one owner, git worktrees |
| YOLO mode with no gates | Unreviewable churn, destructive edits | Plan approval, hooks, human merges |
| Debugging in stale threads | Guess 3 after guess 2 | Fresh thread, repro, evidence, two candidate fixes |
| Dependency bloat | package.json ransom note | Justify every dependency, check stdlib and existing deps first |
| Hardcoded secrets | Keys in frontend or chat logs | .env plus .gitignore, secret scan hook |
| Over-engineered prototype | Microservices for 14 users | Simplest-architecture test, one-weekend removal question |
| Same-context security audit | Auditor misses its own mistakes | Fresh-context second model, audit twice |
| Stacking fixes | Layers of crust after failed attempts | git reset --hard to a clean commit, apply the clean fix once |
| Silent failures | Swallowed exceptions, "it works" without proof | Zero silent failures, hooks, evidence over claims |

Checklist:
- You recognize each row in your own sessions within seconds.
- Every fix you apply comes with its anti-pattern removed at the source.

## 13. The end-to-end runbook: idea in your head at 9am -> in production

This is the compressed runbook for a small real app; a larger product expands steps 10 to 18 over days instead of hours, but the sequence does not change.

1. 09:00. Write the one-liner and the measurable success criterion. (5 min)
2. 09:05. Validate: search competitors, read complaint comments, message 3 potential users. (30 min)
3. 09:35. Draft SPEC.md from the template in section 5. (20 min)
4. 09:55. Plan-mode interview: the agent asks clarifying questions and writes PLAN.md; you skim for scope and approve.
5. 10:15. Prototype the core loop with fake data in a sandbox; pin a reference screenshot if visuals matter.
6. 10:45. Slice one: input -> core transform -> output; manual test; commit.
7. 11:30. Slices two through four: persistence, edge states, error states; test after each; commit after each.
8. 12:30. Show the core loop to one real user; write down the friction.
9. 13:00. Keep or throw gate; archive the prototype as reference.
10. 13:30. Harden: boring stack, fresh scaffold, CI green, CLAUDE.md and ARCHITECTURE.md, MODEL_ROUTING.md.
11. 14:00. Tracer bullet one: first acceptance criterion; agent writes failing test, you approve it, implement, green; review and merge.
12. 14:45 to 17:30. Tracer bullets two through six: one acceptance criterion each, same TDD loop.
13. 17:30. Full suite, lint, typecheck, build, and manual smoke, on a real phone if mobile.
14. 18:00. Security gate: fresh-context second-model audit, fix critical and high only, re-test functionality, re-audit fresh.
15. 18:45. Observability: error tracker, core-loop metric, and a preview deploy.
16. 19:00. Deploy to production from a tagged commit; run the canary smoke in incognito.
17. 19:30. Watch the first hour of logs and metrics; run the rollback drill once.
18. 20:00. Docs: README quickstart plus updates to AGENTS.md and CLAUDE.md.
19. 20:30. Retro: write one surprising lesson, one new rule, and one prompt improvement.
20. 21:00. Done: a real user can sign up, do the core job, and you can roll back in one command.

Checklist:
- No stage skipped, even when compressed.
- Every merge has a green suite and a human review.
- Security audit passed after the final build.
- Rollback proven, not assumed.

## 14. Appendix: copy-paste prompts and a CLAUDE.md starter

Prompt 1: the task spec (Context, Objective, Boundaries, Validation).

```
Context:
- Repo: <path>. Current behavior: <what exists today>.
- Files involved: <paths>. Conventions to follow: <point at the existing convention file>.

Objective: <one outcome, not a code shape>.

Boundaries:
- Do not modify: dispatch.ts, the payload schema, anything outside the listed files.
- Do not add dependencies or new abstractions without asking first.
- Max 3 files changed unless I explicitly widen the scope.

Verification:
- Add at least 2 new tests for the new behavior.
- Run: <test cmd> <lint cmd> <typecheck cmd> <build cmd>.
- End by pasting the exact commands you ran, their output, and the diff stat.
```

Prompt 2: plan before code.

```
Do not build anything yet. Interview me.
Ask about: the core user action, the data model, auth, edge cases, failure behavior, and the minimal surface area.
Then write PLAN.md with architecture, schema and API sketches, files to create, tests required, and a phased checklist.
Wait for my approval before editing any file.
```

Prompt 3: TDD request.

```
Write the failing test(s) for this acceptance criterion first:
<acceptance criterion>.
Show me the test and wait for approval before implementing.
Then implement the smallest change that passes it.
Do not modify or delete tests.
After each step run <test cmd> and report the output.
```

Prompt 4: adversarial review.

```
You are a hostile senior engineer reviewing this diff. Do not praise it.
Find bugs, security issues, boundary failures, race conditions, and specification mismatches.
Do not modify anything.
Return findings ranked CRITICAL, HIGH, MEDIUM, LOW, each with the file and line and a reproduction plan.
```

Prompt 5: fresh security audit.

```
You are an external security auditor seeing this codebase for the first time.
Do not modify anything; audit only.
Check: exposed secrets, row-level security on all tables, server-side validation, auth middleware on every route, rate limiting, dependency names and versions, verbosity of error messages, payment webhook signature verification, and startup env validation.
Rank findings by severity and give file and line for each.
```

Prompt 6: stuck-agent reset.

```
Stop. Do not write code.
Answer with evidence:
1. What exact behavior did we observe (logs, errors)?
2. What did we already rule out?
3. What is the most likely root cause, and why?
4. Give two candidate fixes with tradeoffs and recommend one.
Wait for my approval before changing anything.
```

Prompt 7: bug report format.

```
Repro: <exact steps that fail>.
Observed: <exact error text and screenshot>.
Expected: <behavior>.
File: <path> at <line>.
Ruled out: <hypotheses already tested and eliminated>.
```

CLAUDE.md starter:

```markdown
# CLAUDE.md - operating manual

## What this project is
<One paragraph: product, core loop, who uses it.>

## Architecture (read before any change)
- <Stack and data flow in 5 lines.>
- <Module seams and where the boundaries sit.>
- DO NOT modify: <forbidden files and directories.>
- Decisions: see docs/architecture.md for the do-not-relitigate list.

## Conventions
- Error handling: <one pattern, point at the file that defines it.>
- Response shapes: <one shape, point at the type.>
- Tests: <framework, placement, naming, one example.>
- Repository layer: <pattern and file.>

## Commands and validation
- Install: <cmd>
- Run: <cmd>
- Test: <cmd>
- Lint and typecheck: <cmd>
- Build: <cmd>

## Boundaries for agents
- Run tests before commit. No force-push.
- Max 3 files per task unless the human widens scope.
- Ask when uncertain; do not guess architecture.
- Never edit <files>.
- Verification hook: session may not end while "<test cmd>" fails.

## Current sprint
- Building: <one line>
- Blocked: <one line or none>
- Recent decisions: <last 3, one line each>
```

Keep CLAUDE.md between 100 and 300 lines, treat it as an index to deeper docs, and prune it like code.

Checklist:
- Prompts saved to your snippets for reuse.
- CLAUDE.md committed at the repo root.
- Rules and context files reviewed weekly.

---

## How this guide was built

Synthesized with DeepSeek (`deepseek-v4-pro` for the final pass, `deepseek-v4-flash` for extraction) from a corpus of 89 YouTube transcripts, 8 long-form articles (Addy Osmani on orchestrating coding agents, spec-driven development, Claude Code best practices, and others), 5 frontier-LLM opinions, and the gstack, mattpocock/skills, and obra/superpowers documentation.

Method: a map-reduce pass over the corpus - each source was distilled to structured notes tagged `[CONSENSUS]` or `[SPICY]`, then all notes were synthesized into this document.

Where the sources disagreed, the disagreement and a verdict are stated inline (see sections 8 and 6).

Tool names, model names, and specific numbers reflect the mid-2026 corpus and move fast; re-verify specifics against current docs before you rely on them.
