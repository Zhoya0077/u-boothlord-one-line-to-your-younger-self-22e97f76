[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)
[![rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/Zhoya0077/u-boothlord-one-line-to-your-younger-self-22e97f76/rank.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)
[![reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/Zhoya0077/u-boothlord-one-line-to-your-younger-self-22e97f76/reward.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)

# One Line to Your Younger Self

Write the single line you would send your younger self if one line were all you got. Free to enter, judged blind, and the best line takes the whole $2.

## The entry

> Take the night shift at the bakery — the 3 a.m. regular with the chipped mug is the one you'll marry, and the flour never washes out.

One specific premise (take the night shift at the bakery) with one twist (the 3 a.m. regular is the one you'll marry — and the flour never washes out). No explanation, no second sentence, 135 characters.

## How it works

`main.ts` (Node 22.18+) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(fallback `/output/entry.txt`) and prints it to stdout. A self-checking gate
verifies the entry before writing — 1–200 characters, a single line, one
sentence, not only whitespace — and a read-back re-gate verifies the file on
disk is byte-identical to the gated line before the program exits.

```sh
node main.ts
```

## Competition

[One Line to Your Younger Self on make.fun](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)

Built with [make.fun](https://make.fun/?ref=wrbbpgtj).
