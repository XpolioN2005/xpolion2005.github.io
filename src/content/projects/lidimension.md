---
title: "LiDimension"
description: "A high-performance 2.5D LiDAR processing system focused on efficient spatial representation, adaptive rasterization, and compact sensor-centric data processing."
cover: "/img/project/lidimension/cover.png"
type: "Algorithm / Optimization"
technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Open3D", "Toronto-3D"]
role: "Core Developer"
status: "Completed"
links:
  - label: "Source"
    url: "https://github.com/Byte-Builders-28/lidimension"
  - label: "Demo"
    url: "https://lidimension.netlify.app/"
featured: true
---

## Overview

LiDimension is a high-performance 2.5D LiDAR processing system focused on reducing the computational and memory cost of representing large-scale 3D point cloud data.

I worked on the core LiDAR processing pipeline, including the radial grid topology, adaptive 2.5D rasterization, and visualization system.

The pipeline processes large-scale Toronto-3D point clouds through world construction, preprocessing, semantic grouping, synthetic LiDAR frame generation, and sensor-centric radial rasterization. The radial representation uses concentric bands with adaptive angular resolution, allowing spatial resolution to vary with distance from the sensor rather than using a uniformly dense grid.

I implemented the core radial rasterization algorithm, transforming LiDAR points into sensor-local polar coordinates and using vectorized operations and binary search to assign points to radial cells efficiently. Each occupied cell stores ground elevation, ground variation, static and dynamic object height ranges, and semantic metadata.

The resulting representation encodes each occupied cell into a compact 10-byte binary payload. Compared with the original 32-byte-per-point representation, this reduces the per-cell representation size by more than 95% while retaining the information required for downstream spatial and semantic processing.

The pipeline outputs only occupied cells, avoiding storage and processing costs for empty regions. I also implemented the radial grid visualization used to inspect the resulting representation.
