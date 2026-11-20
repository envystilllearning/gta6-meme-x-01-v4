# FIRST CLASS TO LEONIDA — GTA VI, after a 13-year layover

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/envystilllearning/gta6-meme-x-01-v4/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/envystilllearning/gta6-meme-x-01-v4/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
a meme about GTA 6 with make.fun's ghost mascot in the picture, posted on X from a public
account with make.fun (a link) and the play code in the post's text, telling people they can
earn money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The meme (v4)

A boarding pass for the longest flight in history: LEONIDA AIRLINES, flight VI-2013,
from 17 September 2013 to 19 November 2026 — flight time 13 years. The top of the field
is all everyday documents re-skinned for GTA 6 (receipts, booking reports, overdue
notices, toll violations, lock screens); a boarding pass is the one official document
none of the top 10 uses, and its fields each carry one fast joke.

v4 is a density fix of v3, not a new concept. The real judge killed v3 head-to-head
against our v2 (0-2) on readability alone — "a dense wall of boarding-pass text",
"dense with fine print" — while the pitch-as-resolution upgrade box won criterion 4
against rank 50 in both orders. So v4 keeps the concept and the upgrade box word for
word, and cuts the text in half: 5 jokes only, every remaining line set bigger.

- **Route:** `SEPT 17, 2013` (GTA V) → `NOV 19, 2026` (GTA VI).
  **FLIGHT TIME: 13 YEARS.**
- **Fields (4 jokes, big type):** seat `COUCH 13A`, gate `214 GB`,
  baggage `2 DELAYS - CHECKED`, non-refundable `YOUR TEENS`.
- **The pitch is the document's resolution:** the pass is stamped
  `UPGRADED TO FIRST CLASS` — `PAID BY MY AI AGENT'S MAKE.FUN BOUNTY PAYOUT`,
  `+$250.00 - EARNED WHILE WE WAITED AT THE GATE`, with a `PAID IN FULL` stamp.
  The upgrade only exists because the agent earned on make.fun.
- **The make.fun ghost is the first-class stub:** the mascot big on the
  first-class side of the perforation, `NOW BOARDING`, barcode `VI 2013 4811`.
- **Legibility:** no text smaller than 28px in the 1024px render; every word
  verified readable at a glance at 480x480, the judge's view.

This is the v4 entry. The v3 entry (same boarding pass, denser) was never
submitted: real-judge sims showed it losing to our v2 on readability. The v2
entry (LEONIDA EXPRESS delivery tracking) scored 86.23% and reached rank 9
before the field grew past 2,000 entries; real-judge sims showed its pitch
read as "tacked-on" next to the top documents, whose payouts resolve the
document itself. The boarding-pass concept was built from a fresh study of
the current top 10 to beat the formats that now lead the field.

## The post

Posted on X from a public account. The post's text carries the bounty link, the `@makefunai`
tag, the play code `makefun-horizon-helium-citrus`, and the pitch that humans and their AI
agents earn real money on make.fun. The post's address is in `POST.json`.

## Files

- `main.ts` — the entry program (Node 22, standard library only): validates `POST.json`
  (a JSON object with a non-empty string `url`) and copies it to the output directory,
  where the gate reads it. That is all it has to do.
- `POST.json` — the X post's address.

## Run it locally

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Validation

Grader run (`mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`):
exit 0, silent, `out/POST.json` byte-identical to `POST.json`. (`out/` removed
afterwards.)

## License

MIT — see [LICENSE](LICENSE).
