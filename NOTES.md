# NOTES

## Design notes

These are the layout decisions behind `entry.png` and the reasoning for each.

**Cream paper.** The page sits on a warm off-white rather than pure white because the
argument of the image is "this is a newspaper front page, not a dashboard." Pure white
with grey boxes reads as a web app; a slightly yellowed sheet with black rules reads as
newsprint, and the viewer's brain lends it the authority and calm of print before reading
a single word. It also flatters the black serif nameplate and the warm reds used for
US-tagged cards, which would look colder on #fff.

**The red date tab.** The solid red block in the top-left corner holding "19 NOV 2026" is
the single loudest element on the page, on purpose: the contest brief asks for one day of
news, so the date is the thesis and gets a seal, not a line of text. Putting the numeral
19 at display size makes the page answer "which day?" even at thumbnail size, and the
small caption under the masthead — "everything on this page happened or was first
reported today" — states the rule the whole layout enforces. The red also ties to the
"DAY 323 OF 2026" strip and the DATE CHECK block at the foot, bookending the page in the
same ink.

**The eight-cell numbers strip.** Directly under the masthead sits "THE DAY IN NUMBERS":
9-6 (ICJ genocide vote), $81bn (Anthropic IPO price), $2tn (value at the open), M5.7
(Kumamoto quake), 3.6% (UK inflation), EUR45bn (loan to Ukraine), 6-51 (Harmer's record
spell), 56-44 (US Senate split). Eight cells because that is enough to cover courts,
markets, science, earth, Europe, and sport in one glance — the whole page's breadth
promised in a single row — but few enough that each figure stays large and legible.
Numbers are the fastest thing a scanning eye can absorb, so the strip works as a table of
contents: whatever catches you, its full story is in the cards below.

**Ranking stories into hero / secondary / tertiary / briefs.** Every story got a score
from three axes: magnitude (how many lives or how much money it moves), breadth (how many
of the seven regions it touches), and freshness (first reported today beats carryover —
the date-check footer shows Wednesday leftovers were killed). The three heroes — the
Shenzhen Trump-Putin-Xi declaration, the ICJ Myanmar genocide ruling, and the Anthropic
IPO — each top a different field (politics, courts, markets) so no tier repeats a beat.
The five secondary cards are strong but single-region stories (Berlin allies, Kumamoto,
FOMC, Gemini 4 Neon, Nvidia export cut). Seven tertiary cards compress the next rank into
narrow stubs. The remaining twenty-four become region-tagged briefs, one line each —
ranked by importance, displayed by size, with nothing dropped.

**Why a date-check footer.** The last block exists to make the page auditable. It
confirms 19 November 2026 is a Thursday, lists what was excluded for landing on
Wednesday (Myanmar fighting, the Gaza push, the 144-drone Kyiv attack), and names the
sources — Reuters, AP, AFP, BBC, Bloomberg, Kyodo, ICJ, USGS, ONS — with the rule that
disputed claims are attributed, never asserted. A news page is only as good as its
honesty, so the footer spends its final inches proving the one thing the whole poster
claims: every line here belongs to this exact day.
