# Signal Garden

**Your saved internet had a plot.**

Signal Garden turns the fragments in a WhatsApp self chat, X bookmarks and voice notes into source-linked creative work. Instead of producing one more summary, it puts you and three specialist agents in a Switch room to find a thread worth following.

## The Track 02 workflow

1. You choose which fragments enter the room.
2. **Archivist** finds motifs and marks each observation with source IDs.
3. **Mycelium** connects distant fragments and proposes a project you can start in under an hour.
4. **Editor** challenges unsupported claims and drafts an optional X post.
5. You decide what to keep. The post stays behind an approval gate and opens in X's composer only when you approve it.

Switch is where the people and agents collaborate: they share one room, their own instructions and a visible sequence of handoffs. The app prepares a source-linked brief for that room; it does not simulate a live agent conversation.

The twelve sample fragments are fictional. They lead to **The Unofficial City Index**, a field guide to the quiet acts that make a neighbourhood feel alive. The example outcome and room dialogue in the app are labeled as illustrative.

## Run locally

Requires Node.js 20 or newer. No dependencies or build step are needed.

~~~sh
npm start
~~~

Open http://localhost:4173.

## Set up the Switch room

1. Follow the [Switch quickstart](https://docs.switchagents.ai/switch-rooms/getting-started) to start Switch Console and sign in to a supported agent provider.
2. Import **switch/garden-room.template.yaml** in Switch Console. The template defaults to Codex and creates the Archivist, Mycelium and Editor agents plus the **garden-cross-pollination** room. Choose a messaging bridge available to your server.
3. Open the room in the connected chat app. In Signal Garden, select fragments and choose **Prepare a brief for this room**.
4. Paste the copied brief into the room. The agents hand off an evidence map, creative idea and editorial challenge; you make the final call.

The template follows the format in Switch's [triage pair example](https://github.com/sandbox-quantum/switch/blob/main/examples/agent-templates/triage-pair.template.yaml).

## Bring in your own fragments

- Export a WhatsApp self chat as a text file and choose **Bring in your saves**. Messages by “You” or “Me” are preferred when names appear in the export.
- Import X bookmarks from a JSON archive.
- Add voice notes as transcripts with **Capture a thought**.

Imports are processed in your browser and capped at 250 fragments each. There is no account login, backend, analytics or external AI call in the app. Content only leaves the browser when you copy selected fragments into a Switch room or open an approved post in X.

## Blog

The build story is a designed article at **blog/index.html**. Its public URL after GitHub Pages is enabled is:

https://chknaren6.github.io/Signal-Garden/blog/

## Deploy

The repository includes a GitHub Pages workflow at **.github/workflows/pages.yml**. In the repository settings, open Pages and set the publishing source to **GitHub Actions**. Push to **main** to build the static files and deploy both the app and the article. GitHub documents this setup in [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## How it is built

- Plain HTML, CSS and browser JavaScript.
- Browser local storage for captures and edits.
- A small Node.js server for local use; GitHub Pages serves the same static app and article.
- The X handoff uses a prefilled composer after a human approval; there is no automatic publishing.
