---
id: task-fields
title: Task fields at a glance
sidebar_label: Task fields
sidebar_position: 1
description: Look up field meanings, defaults, and the rules that affect task views.
---

Use this reference when you create or edit a task. Select **Save task** after changing any field.

## Fields and defaults

| Field | Required? | Default | Purpose |
| --- | --- | --- | --- |
| Title | Yes | Empty | Names the action to complete. |
| Project | Has a default | Current project, or Inbox when created there | Gives the task one home. |
| Status | Has a default | To do | Tracks progress. |
| Priority | Has a default | Normal | Expresses importance. |
| Due date | No | Empty | Places unfinished work in Today or Upcoming. |
| Notes | No | Empty | Adds context or completion criteria. |

An empty title cannot be saved. Use a specific action rather than a project name.

## Status values

| Value | Meaning |
| --- | --- |
| To do | Work has not started. |
| In progress | Work has started. |
| Done | Work is complete. |

**Unfinished** includes To do and In progress. Marking a task Done keeps it in its project or Inbox, but removes it from Today and Upcoming.

## Priority values

- **Low:** useful work that can wait.
- **Normal:** the default level.
- **High:** important work that needs attention.

Priority does not set a due date or change a task's status.

## Date and view rules

Due dates are calendar dates, with no time of day. Today is based on your device's local date.

| Task state | Where to find it |
| --- | --- |
| Unfinished, due today or earlier | Today and its project or Inbox |
| Unfinished, due after today | Upcoming and its project or Inbox |
| Unfinished, without a due date | Its project or Inbox |
| Done, with any date or no date | Its project or Inbox with Status filter set to All |

:::note Date notation

When writing dates in notes or examples, use `YYYY-MM-DD` to avoid ambiguity. For example, `2026-11-06` means November 6, 2026. The date picker may display dates in your device's format.

:::

## Example task

```text
Title: Check the navigation links
Project: Website refresh
Status: To do
Priority: Normal
Due date: 2026-11-06
Notes: Open every link in the main navigation.
```

This is a reference example, not an import file. Enter each value in its matching field. Whether the task appears in Today or Upcoming depends on the current date.

See [Manage tasks](../guides/create-tasks.md) for the full procedure.
