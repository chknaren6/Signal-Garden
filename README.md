# Signal Garden - Track 2 

**Your saved internet had a plot.**

Signal Garden is a private creative studio for the things you save and forget: a line in your WhatsApp self chat, an X bookmark, a voice note you meant to return to. It helps you find the idea connecting those fragments, turn it into a small project, and keep the evidence attached.

It is built for people whose personal archive is full of sparks but short on follow-through. The goal is not another inbox or another AI summary. It is to turn a few chosen scraps into something you might actually make.

## The workflow

1. **Gather.** Import a WhatsApp text export or X bookmark JSON, or add a thought or voice-note transcript. Search, filter, and choose the fragments for this session.
2. **Find the thread.** Signal Garden builds a brief with the selected words, dates, and stable source IDs. Your Switch room works through the brief in three passes: evidence, creative connection, editorial challenge.
3. **Make it yours.** Bring the room’s idea or draft back to the dispatch desk. Edit it, check its source trail, and explicitly approve it before opening the X composer. Signal Garden never publishes for you.

The sample harvest, **The Unofficial City Index**, connects a self-chat thought about the city, a saved observation about who maintains it, and a voice-note transcript about unlabelled signs. The point is not that those fragments have one correct meaning. The point is that a surprising idea can be proposed with its roots still visible.

## Why Switch is part of the product

Signal Garden uses a shared Switch room as a small creative team, not as a single prompt with three character names. The room template in [`switch/garden-room.template.yaml`](switch/garden-room.template.yaml) defines three agents with distinct instructions and an ordered handoff:

- **Archivist** finds patterns in the words the person actually shared, quotes them, and attaches their source IDs.
- **Mycelium** uses that evidence to connect fragments and propose one small creative project, while naming the leap it is making.
- **Editor** challenges clichés, unsupported claims, and privacy leaks, then offers an optional short draft for the person to review.

The person chooses the material, asks the question, and makes the final call. The app prepares the room brief for a deliberate copy/paste handoff to the connected Switch bridge. It does not silently sync a private archive to an agent. The in-app room conversation is clearly marked as **illustrative**; use the actual Switch room exchange when demonstrating the agents.

## Run it locally

Requires Node.js 20 or newer. The app has no third-party runtime dependencies.

```sh
npm start
```

Open [http://localhost:4173](http://localhost:4173).

The included library is fictional demo material. To use your own, choose **Bring in your saves** and select a WhatsApp `.txt` export or X archive/bookmark `.json`; or use **Capture a thought** for a note or transcript. Imports are parsed in the browser, capped at 250 fragments per file, and saved in that browser’s local storage. Export a library copy from the app if you want a portable backup.

## Set up the Switch room

1. Install and start [Switch](https://docs.switchagents.ai/switch-rooms/getting-started), sign in to the provider you want to use, and connect a messaging bridge supported by your Switch server.
2. Import [`switch/garden-room.template.yaml`](switch/garden-room.template.yaml) in Switch Console. The template defaults to Codex and local agent workspaces; choose the provider, location, and bridge available in your setup.
3. Create the `garden-cross-pollination` room with the three agents. The template uses the first configured bridge unless you select another during setup.
4. In Signal Garden, select the fragments for the session and choose **Prepare a brief for this room**. Copy the brief into the room and let the agents complete their handoffs.
5. Bring the draft you want to keep into the dispatch desk. Edit it, mark it approved, and choose **Review in X** only if you want to inspect the prefilled composer.

The person remains in control at each boundary: which fragments leave the browser, which idea survives the room, and whether an approved draft is taken to X.

## Privacy and publishing

- There is no Signal Garden backend, account system, analytics, or external AI request in the app.
- Imports and edits stay in browser storage. The static deployment serves the interface and fictional starter library; it does not receive your imported personal archive.
- Copying a room brief places only the selected fragments on your clipboard. They reach Switch if you paste them into its connected bridge.
- Opening X requires an explicit approval in the app and opens a prefilled composer. You review and publish there yourself; the app has no X credentials and cannot post on your behalf.

## Deploy on Vercel

This is a static site. [`vercel.json`](vercel.json) tells Vercel to run the dependency-free build and publish `dist/`, which contains the app, sample data, and blog. No server process or environment variables are needed.

1. Import `chknaren6/Signal-Garden` into Vercel and deploy from `main`.
2. Keep the project root as the repository root. The included Vercel configuration sets the build command and output directory.
3. After the first deployment is Ready, open the production URL and check the app, imports panel, and `/blog/` article. Future pushes to `main` trigger a new deployment.

For a local production-output check, run:

```sh
npm run build
```

The Best Blog entry is included at [`/blog/`](blog/index.html): **“My saved internet had a plot.”**

## Repository map

| Path | What it does |
| --- | --- |
| `index.html`, `style.css`, `app.js` | The local-first archive, source map, Switch handoff, and approval-gated dispatch desk |
| `data/signals.json` | Fictional starter fragments for the sample harvest |
| `switch/garden-room.template.yaml` | The three-agent Switch room and their evidence-first handoff |
| `blog/` | The illustrated build story for the Best Blog side track |
| `server.mjs` | Small dependency-free local web server |
| `scripts/build.mjs`, `vercel.json` | Reproducible static output for Vercel |

## What is working in this submission

The browser workflow, imports, source-linked room brief, fictional starter harvest, human approval gate, X composer handoff, blog, and Switch room template are in the repository. The agent exchange shown in the app is example copy, not a recording of a live agent run. A demo should show the three configured agents responding in the connected Switch room, then show the user reviewing the result in Signal Garden.
