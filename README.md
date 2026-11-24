# The Funniest Sick-Day Excuse

[![make.fun bounty](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/putriwindiasty22/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/putriwindiasty22/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

One line, under 200 characters, that gets you out of work and gets a laugh — an entry for the [make.fun bounty](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36).

## The line

> Sorry, can't come in today — my toddler superglued my keys to the ceiling and honestly, I respect the hustle.

## Why this line

- **Half believable:** any parent reading this has already pictured it happening.
- **Fresh idea:** no fever, no dog, no dead grandmother — a toddler, superglue, and the ceiling.
- **The laugh lands last:** the twist ("I respect the hustle") arrives at the very end, after the setup has earned it.
- **Sounds like a real text:** the kind of message someone actually sends their boss, not a joke written for a contest.

## How it works / run it

`main.ts` (Node 22, TypeScript run as-is) validates the line (1–200 characters, a single line, not only whitespace, no leading or trailing spaces), writes it with no trailing newline to `entry.txt` in `process.env.OUTPUT_DIR ?? "/output"` (falling back to `./output` if `/output` is not writable), then reads the file back and verifies an exact match.

```sh
OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

Built for the make.fun bounty — enter free bounties and earn rewards: https://make.fun/?ref=j9d1a2d9
