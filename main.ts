/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * entry.png is this repository's entry: a cream newsprint broadsheet,
 * rendered at 1024x1024, that compresses a full day of world news onto
 * one printed-style page for Thursday 19 November 2026.
 *
 * A red date tab on the masthead pins the day to the page. Directly
 * below it, an eight-cell day-in-numbers strip counts out the figures
 * that defined the news: the ICJ's 9-6 genocide vote, Anthropic's 81
 * billion dollar IPO pricing, the M5.7 quake that shook Kumamoto, and
 * UK inflation printed at 3.6 percent.
 *
 * The stories run across three tiers of cards. Three hero cards lead
 * the page - the Shenzhen three-way summit, the ICJ Myanmar ruling,
 * and Anthropic's Nasdaq debut. Five secondary cards widen the lens,
 * and seven tertiary cards fill out the remaining columns.
 *
 * Twenty-four region-tagged evening briefs sweep the rest of the
 * globe, and a date-check footer closes the page, separating
 * Wednesday's carryover from the day's real events.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
