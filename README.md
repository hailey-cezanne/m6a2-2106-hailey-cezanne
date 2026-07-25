# Module 6 - Activity 2 - Build a Mini Music Player

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

The player is **already built and styled** for you (a Spotify-style dark card, with
a working Audio / Video toggle). Your job is to make it *yours*: drop in your
favourite song and its music video, and write out the lyrics.

You only edit [`src/index.html`](src/index.html) - you do **not** need to touch the
CSS or the JavaScript.

## What to do

1. **Add your audio.** Put an audio file in a `media/` folder (or use a direct link
   to one), then set the `src` on the audio `<source>`:
   ```html
   <source src="media/my-song.mp3" type="audio/mpeg">
   ```
   Supported types: `.mp3` (`audio/mpeg`), `.ogg` (`audio/ogg`), `.wav`
   (`audio/wav`).

2. **Add your video.** Do the same for the music video:
   ```html
   <source src="media/my-video.mp4" type="video/mp4">
   ```
   Supported types: `.mp4` (`video/mp4`), `.webm` (`video/webm`), `.ogg`
   (`video/ogg`).

3. **Toggle between them.** Open the page and click **Audio** / **Video** - the
   toggle already works. Confirm both play.

4. **Write the lyrics.** Type or paste the song's lyrics inside the `.lyrics`
   element, under the player.

5. **Set the title and artist**, and fill in `student.json` with your details (keep
   it identical to your other activities; the `classCode` must match your repo
   name).

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

> **Tip on file size:** a full music video can be large. A short clip (a verse or a
> chorus) is plenty, and keeps your repo small.

## Reference

The module reference is in the course content: **Module 6 - Audio and Video**
(`Audio-and-Video-Reference.md`) - the `<audio>` / `<video>` elements, `<source>`,
attributes, and the supported file formats.

## Running the tests

```bash
npm install
npm test
```

The autograder is **7 checks** (1 point each):

- the page is valid HTML5
- an `<audio controls>` with a source
- the audio source is a supported file type (`.mp3` / `.ogg` / `.wav`)
- a `<video controls>` with a source
- the video source is a supported file type (`.mp4` / `.webm` / `.ogg`)
- the `.lyrics` area has the words written in
- `student.json` is completely filled in

## Set up your repo

1. **Create from the template** - *Use this template -> Create a new repository*.
2. **Owner = the `HAU-6INTROWEB` course org.**
3. **Name it** `m6a2-<classcode>-yourname`. The `<classcode>` must match
   `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m6a2-<classcode>-yourname.git
cd m6a2-<classcode>-yourname
```

## Confirm your submission

When your tests pass locally, **commit and push**:

```bash
git add -A
git commit -m "Music player complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, then the
latest **Autograde** run, and confirm the green check and the "7 / 7 tests passed"
summary.

## Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install anything on your own laptop. This repo is already configured:
open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button -> **Codespaces** tab -> **Create
codespace on main**. The first launch takes a minute; after that it is instant.

**Use it in VS Code (recommended).** Install the **GitHub Codespaces** extension
in VS Code, or from the running Codespace click the menu -> **Open in VS Code
Desktop**. Same environment, your own editor.

### Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces -> Default idle timeout -> 10 minutes ->
   Save.** This makes a Codespace auto-stop after 10 idle minutes.
2. **Stop it when you finish - do not just close the tab.** Stop it at
   **github.com/codespaces -> ... -> Stop codespace**, or run *Codespaces: Stop
   Current Codespace* from the Command Palette.
3. **Delete the Codespace once you have submitted.** After your final push:
   **github.com/codespaces -> ... -> Delete.** You can recreate it later from the
   green **Code** button.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI ->](https://tjakoen.github.io/notes/ten-times-zero)
