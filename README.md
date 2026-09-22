# UTCCF website

This repository contains the official [University of Toronto Chinese Christian Fellowship website](https://www.utccf.com). The site is built with Next.js and is designed so that most yearly updates only require editing a few JSON files.

## Start here

The current website information lives in [`data/2026-27`](data/2026-27). These are the files most maintainers will use:

| What you want to change | File |
| --- | --- |
| Friday time, location, or description | [`data/2026-27/largeGroup.json`](data/2026-27/largeGroup.json) |
| Investment Group leaders and vision links | [`data/2026-27/igs.json`](data/2026-27/igs.json) |
| Ministry leaders and vision links | [`data/2026-27/ministries.json`](data/2026-27/ministries.json) |
| Committee names, roles, and vision links | [`data/2026-27/committee.json`](data/2026-27/committee.json) |
| Email, Instagram, Facebook, and Discord links | [`data/2026-27/contacts.json`](data/2026-27/contacts.json) |
| This year's theme and homepage photos | [`pages/index.js`](pages/index.js) |
| Full Firewood vision page | [`pages/vision.js`](pages/vision.js) |

The sources used to verify the current information are recorded in [`CONTENT-SOURCES.md`](CONTENT-SOURCES.md).

## The easiest way to make a small update

You need access to the [UofTCCF/utccf-main repository](https://github.com/UofTCCF/utccf-main). If you do not have access, contact [utccfcommittee@gmail.com](mailto:utccfcommittee@gmail.com).

For a name, role, time, or link change, you can edit directly on GitHub:

1. Open the relevant file from the table above.
2. Click the pencil icon near the top-right of the file.
3. Make the change without removing quotation marks, commas, brackets, or braces.
4. Click **Commit changes**.
5. Add a short description such as `Update IG 4 leaders`.
6. Wait for the deployment to finish, then check [utccf.com](https://www.utccf.com) on desktop and mobile.

GitHub may prevent a direct commit and ask you to create a pull request instead. That is fine: create the pull request and ask a repository maintainer to merge it.

## Editing the yearly information

The JSON files use a strict format. Text must stay inside double quotation marks. Items in a list need commas between them, but the final item does not need a comma.

### Change an Investment Group

Each group in `igs.json` looks like this:

```json
{
  "number": "1",
  "visionUrl": "https://docs.google.com/document/d/EXAMPLE/edit",
  "leaders": [
    {
      "name": "First Leader",
      "contact": []
    },
    {
      "name": "Second Leader",
      "contact": []
    }
  ]
}
```

- Change `number` only if the IG number changes.
- Replace a leader's `name` without changing the surrounding punctuation.
- Put the current Google Drive or Google Docs link in `visionUrl`.
- To add another leader, copy one complete leader block and add a comma between the blocks.
- To remove a vision button temporarily, set `"visionUrl": ""`.

### Change a ministry

Each ministry in `ministries.json` has a `name`, `visionUrl`, and `leaders` list. You can rename, add, or remove ministries by editing complete ministry blocks. Keep every ministry name unique.

### Change the committee

Each person in `committee.json` looks like this:

```json
{
  "name": "Committee Member",
  "position": "Role",
  "visionUrl": "https://docs.google.com/document/d/EXAMPLE/edit",
  "contact": []
}
```

Change `name`, `position`, or `visionUrl` as needed. To add a new committee member, copy a complete block and add a comma before it.

### Change Friday gathering details

Edit `largeGroup.json`:

```json
"meetingInfo": {
  "dayOfWeek": "Friday",
  "time": "6:30–9:30 p.m.",
  "location": "Cornerstone Presbyterian Church"
}
```

The homepage currently displays the time and location. Weekly announcements link to the UTCCF Instagram account.

### Change contact links

Edit `contacts.json`. Use these formats:

```json
{
  "type": "Email",
  "link": "mailto:example@gmail.com"
}
```

```json
{
  "type": "Instagram",
  "link": "https://instagram.com/example"
}
```

Supported labels include `Email`, `Instagram`, `Facebook`, and `Discord`.

## Google Drive and vision links

The website links directly to the source visions in Google Drive. Before adding a link:

1. Open the file in Google Drive.
2. Click **Share**.
3. Under **General access**, choose **Anyone with the link**.
4. Set the role to **Viewer**.
5. Copy the link into the appropriate `visionUrl` field.
6. Test the link in a private or incognito browser window where you are not signed into the CCF Google account.

If an incognito visitor sees **Request access**, the website link is not ready. Do not use links copied from Drive search results or links that only work for members of the CCF organization.

The homepage **Explore Firewood** button opens `/vision`. The full text on that page is written directly in `pages/vision.js`; update it carefully from the approved vision document and preserve the section headings and Bible references.

## Updating homepage photos

Optimized homepage images live in [`public/images/community`](public/images/community). The slideshow order, alt text, dimensions, and crop positions are defined in the `heroSlides` list near the top of `pages/index.js`.

To replace or add a photo:

1. Export a WebP image at high quality. Use a descriptive lowercase filename such as `fall-retreat.webp`.
2. Put it in `public/images/community`.
3. Add or replace an item in the `heroSlides` list in `pages/index.js`.
4. Enter the image's real pixel width and height.
5. Write useful alt text describing the scene.
6. Preview both desktop and mobile crops. Adjust `objectPosition` and `mobilePosition` if faces or important details are cut off.

Example:

```js
{
  src: "/images/community/fall-retreat.webp",
  alt: "CCF students gathered during fall retreat",
  width: 4000,
  height: 2667,
  objectPosition: "50% 50%",
  mobilePosition: "60% 50%",
},
```

Do not commit original camera files. The `ccf-photoassets` folder is intentionally ignored by Git.

## Starting a new fellowship year

Do not overwrite the previous year's data. Keep it as an archive.

1. Copy `data/2026-27` to a new folder such as `data/2027-28`.
2. Update all five JSON files in the new folder.
3. In `pages/index.js`, change the five imports from `../data/2026-27/...` to the new folder.
4. In `pages/index.js`, update the homepage title, description, and wordmark year.
5. In `components/nav/nav.js`, update the year beside the UTCCF name.
6. In `pages/vision.js`, update the page title, description, header label, and approved vision text.
7. Update `CONTENT-SOURCES.md` with links to the new authoritative Drive files and the date they were checked.
8. Test every Drive link in an incognito browser window.
9. Run the checks below before deploying.

Use an en dash in year ranges: `2027–28`, not `2027-28`.

## Preview changes on a computer

Install [Node.js](https://nodejs.org), then open a terminal in the repository folder.

The first time only:

```bash
npm install
```

For a live preview while editing:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Most changes appear after saving the file.

Before committing or deploying, stop the preview with `Ctrl+C`, then run:

```bash
npm run build
```

The update is ready when the build says `Compiled successfully`. Also open the homepage and `/vision` at narrow mobile width and check that every external link opens the expected public page.

## Publish changes from a computer

```bash
git status
git add data/2026-27/igs.json
git commit -m "Update IG leaders"
git push
```

Replace the file and commit message with the change you actually made. Avoid `git add .` unless you have reviewed every changed file shown by `git status`.

The production site is normally deployed from GitHub. After pushing or merging, wait for the hosting deployment to finish and verify [utccf.com](https://www.utccf.com).

## Pre-deployment checklist

- [ ] Names, roles, times, and locations match the current approved source.
- [ ] Every vision link works in an incognito window without requesting access.
- [ ] `npm run build` completes successfully.
- [ ] The homepage looks correct on desktop and mobile.
- [ ] `/vision` looks correct on desktop and mobile.
- [ ] Navigation, contact, social, and vision links go to the intended destination.
- [ ] No private notes, screening responses, personal files, or unpublished contact details were committed.
- [ ] `CONTENT-SOURCES.md` records where time-sensitive information came from.

## Getting help

For repository access, incorrect information, or deployment problems, contact [the current UTCCF committee](mailto:utccfcommittee@gmail.com). Include the page, the incorrect text or broken link, and the approved replacement information.
