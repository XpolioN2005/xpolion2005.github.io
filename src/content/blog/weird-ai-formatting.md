---
title: "Weird AI Formatting"
description: "A small rant about the strange formatting habits I keep seeing in AI-generated code."
pubDate: 2026-10-23
tags: ["AI", "Programming", "Developer Experience"]
draft: false
---

There is something about AI-generated code that has been bothering me for a while.

**The weird formatting.**

I'm talking specifically about how AI likes to turn perfectly normal lines of code into five-line structures for seemingly no reason.

For example, I'll get something like this:

```python
trajectory = create_waypoint_trajectory(
    waypoints,
    generator.step_distance,
)
```

And I'm just sitting there thinking:

Why?

This is two arguments. They're both short. The entire thing fits comfortably on one line.

```python
trajectory = create_waypoint_trajectory(waypoints, generator.step_distance)
```

Much better.

I'm not saying multiline calls are bad. They're useful when a function has a lot of arguments or the arguments themselves are long and complicated. But if everything fits nicely on one line, why stretch it across four?

## The Function Definitions Too

It's not just function calls. AI does the same thing with function definitions.

I'll see:

```python
def _validate_raster_output(
    cell_ids: np.ndarray,
    data: np.ndarray,
) -> tuple[np.ndarray, np.ndarray]:
```

Again, two arguments.

I'd personally write:

```python
def _validate_raster_output(cell_ids: np.ndarray, data: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
```

It's a long line, sure. But it's readable.

If there were eight arguments, complicated types, or something else making the line genuinely difficult to read, then I'd split it up without thinking twice.

The problem isn't multiline formatting itself. It's multiline formatting when there is no real reason for it.

## And That Trailing Comma

Then there is the trailing comma.

```python
trajectory = create_waypoint_trajectory(
    waypoints,
    generator.step_distance,
)
```

At this point, I'm already going, "Okay, okay... is there more?"

I know why trailing commas are useful. They make adding another argument easier and can make diffs cleaner. I have nothing against them.

But when the function call didn't need to be split across multiple lines in the first place, adding a trailing comma just makes the whole thing feel even more unnecessary.

It's such a small thing, but when you keep seeing it everywhere, you start wondering, "Are we missing something?"

## Maybe I'm Just Used to Writing Code Differently

I started learning to code roughly a year or so before AI coding tools became a normal part of people's workflow. So I already had some preferences by the time I started using them.

I like code to be compact when it can be compact.

Not compressed. Not clever. Not everything crammed into one line. Just compact enough that related things stay together.

If a function call fits on one line and is easy to understand, I'll keep it on one line. If it doesn't, I'll split it.

That's basically it.

I also like being able to scan code quickly. When every small expression gets broken into several lines, the code starts feeling unnecessarily tall. Sometimes it almost feels like the code is being formatted for a narrow screen, where everything is stacked vertically because there isn't much horizontal space.

But I'm usually looking at my code on a monitor with plenty of horizontal space. If I have that space, why not use it?

I don't want code to be unnecessarily wide either. There is obviously a point where a line becomes annoying to read. But there is a pretty big difference between keeping a line reasonably long and turning every small function call into a vertical block.

## I Still Read the Code

I think part of this bothers me because I don't use AI in a completely hands-off way.

I use it, but I still read the code.

I'm not at the point where I can just ask an agent to build something, accept the result, and move on without looking closely at what it actually wrote.

If AI generates a piece of code for me, I go through it. I'm checking the logic, changing things I don't like, and usually fixing little formatting decisions along the way.

And that's where this becomes annoying.

One weirdly formatted function isn't a big deal. But when an AI-generated file has dozens of these small formatting choices, I end up spending time cleaning them up.

The code works. The formatting just doesn't look like something I would write.

## I Don't Think AI Is Necessarily Wrong

To be fair, I don't think the AI is necessarily doing something objectively wrong here.

There are plenty of codebases where this style is completely normal.

Maybe the model has seen a lot of code formatted this way. Maybe it has learned that multiline arguments are generally considered safer or more readable. Maybe it's just following patterns that appear frequently in the code it was trained on.

I don't really know.

And honestly, this is probably one of those things where different developers will have completely different opinions.

Some people will look at the multiline version and think it's cleaner.

I look at it and think it takes up four lines when it needed one.

## There Is a Difference Between Readable and Vertical

This is probably the main point I'm trying to make.

More lines doesn't automatically mean more readable code.

Sometimes breaking something into multiple lines makes it much easier to understand.

For example:

```python
result = create_complex_trajectory(
    waypoints,
    generator.step_distance,
    generator.max_iterations,
    generator.smoothing_factor,
    generator.collision_settings,
)
```

That's perfectly reasonable to me. There is enough information there that putting everything on one line would make it harder to scan.

But this:

```python
result = process_data(
    input_data,
    config,
)
```

when both arguments are short?

I'll probably put that back on one line.

It's a small thing, but programming is full of small things like this.

## Anyway

I still use AI. I still find it useful.

I'm just probably never going to stop fixing its formatting.

Maybe this is just one of those personal preferences that comes from getting used to writing code a certain way.

And honestly, this is one of those small things that doesn't make sense to spend an afternoon fixing.

If the code works and the formatting is only slightly different from what I'd normally write, I don't want to spend hours fighting with it. But when these little decisions show up everywhere, they add up, and eventually I find myself cleaning them up anyway.

But every time I see a two-argument function call turned into four lines, I have the same thought:

**It really didn't need to be like that.**
