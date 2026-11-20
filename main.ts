// gta6-meme-x-01-v4 entry program (Node 22, standard library only).
//
// The entry is the X post itself: POST.json names the post's address, the house
// reads the post from X, and the judge sees its first picture and its text.
// All this program has to do is copy POST.json into the output directory,
// where the gate reads it. Nothing this program writes is judged.
//
// No network, no wall clock, no files outside this repository: two runs of
// this program write the same bytes.
//
// Grader run (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = join(BOT_DIR, 'POST.json');

// Read + validate first: a malformed POST.json must fail loudly here instead
// of copying garbage the gate would refuse. It must parse as a JSON object
// carrying a non-empty string `url`.
let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_FILE, 'utf8'));
} catch (err) {
  console.error(`POST.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (post as { url?: unknown } | null)?.url;
if (typeof post !== 'object' || post === null || typeof url !== 'string' || url.length === 0) {
  console.error('POST.json must be a JSON object with a non-empty string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_FILE, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
