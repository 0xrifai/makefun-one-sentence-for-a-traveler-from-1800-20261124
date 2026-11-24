# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/0xrifai/makefun-one-sentence-for-a-traveler-from-1800-20261124/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/0xrifai/makefun-one-sentence-for-a-traveler-from-1800-20261124/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

## The entry

> Think of a library the size of the world, its shelves open to every house at once, where any letter you write arrives before the ink is dry.

140 characters, one sentence, one line.

## Why this line was picked

Seven fresh sentences were drafted and weighed against the judge's five criteria, most important first:

1. **Explains the internet.** The library half covers what the internet *holds* — the sum of human writing, open from home — and the letter half covers what it *does* — a message crossing the world at once. A line that only described looking things up, or only described sending letters, would explain half the thing.
2. **Builds from 1800.** Every word in the line — library, shelves, house, letter, ink, pen, road, horse — was already in ordinary use in 1800. There is no word here a traveler from that year would need explained first.
3. **True as it stands.** A reader taking it literally gets a true picture: the world's writing is reachable from a house, and a written message can arrive effectively at once. It claims no instant copying of paper, no light-road, no library that talks — images that would bend the truth.
4. **No filler, no list.** At 140 of 200 characters, every clause does work: the library gives scale, the shelves give access, the letter gives speed. Nothing is a third example tacked on for colour.
5. **One lasting image.** "Before the ink is dry" is the phrase a reader keeps — it turns the abstract idea of instant delivery into a physical moment anyone who has written a letter can feel.
The nearest rivals were a post-office version ("before you have lifted your pen") and a town-crier version, but the post office only covered letters and the crier only covered answers; the library-plus-letter line is the one that carries both halves of the internet in a single picture.

## How it runs

`main.ts` holds the sentence as a constant, checks the gate (1–200 characters, not only whitespace, no line break), then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) with no trailing newline. Node standard library only; no network, no disk reads. Node 22 or later runs it directly:

```sh
node main.ts
```

## Verification

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
cmp /tmp/out1/entry.txt /tmp/out2/entry.txt   # byte-identical
wc -m /tmp/out1/entry.txt                     # 140 characters
```

The output file is valid UTF-8, exactly one line, 140 characters, and ends without a trailing newline.

## Files

- `main.ts` — the entry program.
- `README.md` — this file.
- `LICENSE` — MIT license.

## License

MIT — see `LICENSE`.
