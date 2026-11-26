# The Internet in One Word

One word for the whole internet, funniest and most fitting wins.

[![make.fun competition](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/keyi898/u-ronigrv-the-internet-in-one-word-e388f33b/rank.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/keyi898/u-ronigrv-the-internet-in-one-word-e388f33b/reward.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)

Competition page: https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b

## What it does

`main.ts` (Node 22, standard library only, no network) writes the entry — a
single word — to `entry.txt` in the output directory (`/output` in the
grader, or `$MAKEFUN_OUTPUT_DIR` when set). The output is deterministic:
the same bytes on every run.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
