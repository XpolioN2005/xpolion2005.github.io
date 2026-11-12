---
title: "Velo"
description: "A lightweight native command palette for Windows, built in Rust with a focus on fast startup, low memory usage, and minimal overhead."
type: "Software"
technologies: ["Rust", "Win32", "Direct2D", "DirectWrite"]
role: "Solo Developer"
status: "In Development"
links:
  - label: "Source"
    url: "https://github.com/xpolioN2005/velo"
featured: false
---

## Overview

Velo is a native command palette for Windows designed around fast startup, low memory usage, and a minimal runtime footprint. It is built directly with Rust and Windows APIs rather than relying on heavyweight application frameworks.

The current implementation provides a global hotkey, fuzzy command search, YAML-based command configuration, argument prompts, command execution, window persistence, and native Direct2D and DirectWrite rendering.

A core part of Velo is its command execution engine, which allows users to define their own commands and compose them into custom execution sequences. This makes Velo more than a simple launcher, providing a lightweight way to build and execute personalized workflows directly from the command palette.
