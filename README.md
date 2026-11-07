# Signal Garden

**Your saved internet had a plot.**

Signal Garden turns fragments from a WhatsApp self chat, X bookmarks and voice notes into source-linked creative work. You choose what enters a Switch room. Three agents take distinct passes: Archivist traces evidence, Mycelium proposes a creative leap, and Editor challenges the draft. You decide what to keep and approve before opening X.

## The two-minute demo

### Before recording

1. Start Signal Garden locally with the command below.
2. In Switch Console, start a local server, sign in to **Codex**, and use the local **Mattermost** bridge.
3. Import **switch/garden-room.template.yaml** and create **garden-cross-pollination** with its three agents.
4. Open the app and the real Mattermost room side by side. The first three sample fragments are already selected.
5. Start recording before you send the prompt. Keep the actual Switch responses on screen. The dialogue shown inside the app is illustrative, not a live run.

### Spoken script and screen direction

| Time | Show | Say |
| --- | --- | --- |
| 0:00–0:12 | Signal Garden home screen | “My self chat, bookmarks and voice notes became a second brain with no memory. Signal Garden looks for the creative thread between them.” |
| 0:12–0:28 | Point to the three selected fictional fragments and the map | “These three saves become The Unofficial City Index. Every idea keeps the source IDs that led to it.” |
| 0:28–0:42 | Click **Ask your room to find a thread**, then **Copy room brief**. Paste it into Mattermost. | “I choose what leaves my browser. This brief gives the Switch room only those fragments and one question.” |
| 0:42–1:22 | Show the live room as Archivist, Mycelium and Editor hand off work | “Archivist maps the evidence. Mycelium makes the connection. Editor challenges unsupported claims and keeps the draft tied to its sources.” |
| 1:22–1:47 | Bring the Editor’s real draft into the dispatch desk, edit it, and mark it approved | “The post is a suggestion. I edit it and approve it before the X composer can open.” |
| 1:47–2:00 | Click **Review in X** and show the prefilled composer without posting | “The agents helped me find the thread. I still decide what gets published.” |

Keep the real agent exchange in the video. Trim idle waiting if needed; don’t replace it with the illustrative sample dialogue. Nothing needs to be posted publicly during the recording.

## Run locally

Requires Node.js 20 or newer. There are no dependencies or local build step.

~~~sh
npm start
~~~

Open http://localhost:4173.

## Set up the Switch room

1. Follow the [Switch quickstart](https://docs.switchagents.ai/switch-rooms/getting-started) to install Switch Console, start a local server, and sign in to Codex.
2. Connect the local Mattermost bridge. The template uses the first bridge configured on your server.
3. Import **switch/garden-room.template.yaml**. It creates three agents in a shared **garden-cross-pollination** room:
   - **garden-archivist** groups observations and quotes exact source IDs.
   - **garden-mycelium** connects fragments from different moments and proposes a small creative project.
   - **garden-editor** tests the idea for clichés and unsupported claims, then offers a post for human review.
4. In Signal Garden, select the fragments you want, choose **Ask your room to find a thread**, and copy the generated prompt into the Mattermost room.
5. Let the agents work in order in the shared room. Bring the post you want to keep back to the app, edit it, approve it, and choose whether to open X.

The template follows Switch’s [room-template example](https://github.com/sandbox-quantum/switch/blob/main/examples/agent-templates/triage-pair.template.yaml). The same template can use another bridge supported by your Switch server; name the bridge actually shown in your demo.

## Bring in your own fragments

- Export a WhatsApp self chat as a text file and choose **Bring in your saves**. Messages authored by “You” or “Me” are preferred when the export includes speaker names.
- Import X bookmarks from a JSON archive.
- Add voice notes as transcripts with **Capture a thought**.

Imports run in your browser and are capped at 250 fragments per file. The app has no backend, account login, analytics or external AI call. Content leaves the browser only when you copy selected fragments into a Switch room or open an approved draft in X.

The included twelve-fragment library is fictional. It creates a coherent demo without using anyone’s private messages. The sample outcome and room dialogue in the app are labeled illustrative.

## GitHub Pages deployment

The workflow at **.github/workflows/pages.yml** assembles the app and article, then deploys them to GitHub Pages on pushes to **main**.

Before the first deployment, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Then open **Actions**, select **Deploy Signal Garden to GitHub Pages**, and rerun the failed run.

If a run still fails, use the first red step to narrow it down:

- **Configure GitHub Pages** or **Publish to GitHub Pages**: check that Pages is enabled and its source is GitHub Actions.
- **Assemble the static site**: check that the repository contains **index.html**, **style.css**, **app.js**, **data/** and **blog/**.
- **Resource not accessible by integration**: check the repository’s Actions workflow permissions.
- **Artifact not found**: make sure the upload step completed before the publish step.

GitHub documents the required source setting and custom-workflow steps in [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

After deployment, the app is at https://chknaren6.github.io/Signal-Garden/ and the Best Blog article is at https://chknaren6.github.io/Signal-Garden/blog/.

## Project files

- **blog/index.html**, **blog/blog.css** and **blog/blog.js** — the illustrated build story.
- **switch/garden-room.template.yaml** — the three-agent Switch room.
- **index.html**, **style.css** and **app.js** — the personal source garden and dispatch desk.
- **server.mjs** — a small static server for local use.
