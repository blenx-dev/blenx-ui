# Toggle Family Audit

This report covers `Toggle`, `ToggleGroup`, and `SegmentedControl` together, because their styling decisions shape one another and should feel like a single visual family.

## Summary

The family is functional, but the hierarchy is not seamless yet. `Toggle` still reads a bit too much like a generic button, `ToggleGroup` provides structure but not enough visual authorship, and `SegmentedControl` needs the strongest sense of polish because it is the mode-switching variant that users will compare against the best segmented controls in the ecosystem.

The fix is not to make every component look the same. The right approach is:

- keep `Toggle` as the lightweight standalone state control
- treat `ToggleGroup` as the structural tray that binds options together
- make `SegmentedControl` the most refined version of the pattern, with clearer selected-state hierarchy

## Required Fixes

### 1. Strengthen `Toggle` as a stateful control

- Severity: Major
  Location: [`packages/core/src/components/Toggle/toggle.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Toggle/toggle.css.ts)
  Problem: The pressed state is visible, but the component still reads like a generic button with a fill change instead of a distinct stateful control.
  Why it matters: If `Toggle` looks too close to a standard button, the family loses semantic clarity and the selected state feels under-designed.
  Recommended improvement: Keep the compact footprint, but strengthen the pressed treatment with a clearer selected surface, more obvious contrast, and a slightly more tactile depth cue.

### 2. Give `Toggle` and `ToggleGroup` one shared interaction grammar

- Severity: Major
  Location: [`packages/core/src/components/Toggle/toggle.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Toggle/toggle.css.ts), [`packages/core/src/components/ToggleGroup/toggle-group.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/ToggleGroup/toggle-group.css.ts)
  Problem: Hover, focus, pressed, and selected states exist, but they do not feel like they were authored as one system.
  Why it matters: Inconsistent state language makes the design system feel fragmented, even when every component is technically usable.
  Recommended improvement: Standardize the focus ring, hover behavior, and selected-state treatment across the family so the interaction language feels intentional.

### 3. Make `ToggleGroup` a stronger tray, not just a layout wrapper

- Severity: Major
  Location: [`packages/core/src/components/ToggleGroup/toggle-group.tsx`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/ToggleGroup/toggle-group.tsx), [`packages/core/src/components/ToggleGroup/toggle-group.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/ToggleGroup/toggle-group.css.ts)
  Problem: The group wrapper is structurally correct, but visually it does too little. It mostly clips radii and removes seams.
  Why it matters: A segmented group needs a clear outer container so the user can immediately understand that the controls belong together.
  Recommended improvement: Add a soft tray surface, subtle border, and a little more internal spacing so the group reads as a deliberate control surface.

### 4. Improve the selected segment hierarchy in `SegmentedControl`

- Severity: Critical
  Location: [`packages/core/src/components/SegmentedControl/segmented-control.tsx`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/SegmentedControl/segmented-control.tsx), [`packages/core/src/components/SegmentedControl/segmented-control.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/SegmentedControl/segmented-control.css.ts)
  Problem: `SegmentedControl` is the one variant users expect to feel polished and opinionated, but the visual hierarchy needs to be unmistakable: tray, segment, selected segment.
  Why it matters: Mode-switching controls live or die on clarity. If the selected option is too subtle, the component feels cheap and uncertain.
  Recommended improvement: Keep the tray treatment, but ensure the selected segment has a raised surface, stronger contrast, and enough separation from its neighbors to read immediately.

### 5. Tune spacing so the family feels cohesive without becoming bulky

- Severity: Major
  Location: [`packages/core/src/components/Toggle/toggle.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Toggle/toggle.css.ts), [`packages/core/src/components/SegmentedControl/segmented-control.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/SegmentedControl/segmented-control.css.ts)
  Problem: The family needs different density levels, but the spacing model should still feel related. If every control has its own rhythm, the hierarchy collapses.
  Why it matters: Spacing is part of visual identity. Consistent rhythm makes the components feel like one system instead of three adjacent patterns.
  Recommended improvement: Keep `Toggle` compact, give `ToggleGroup` moderate structure, and let `SegmentedControl` breathe a bit more so it becomes the premium version of the pattern.

### 6. Make vertical and horizontal group behavior visually equivalent

- Severity: Minor
  Location: [`packages/core/src/components/ToggleGroup/toggle-group.css.ts`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/ToggleGroup/toggle-group.css.ts)
  Problem: The horizontal and vertical variants use different seam-removal rules, but the visual weight is not yet balanced across orientations.
  Why it matters: Users should not feel like vertical mode is a second-class version of the same control.
  Recommended improvement: Preserve the same surface language in both orientations, then adapt radii and seam removal as implementation details rather than as separate visual identities.

### 7. Document the intended hierarchy clearly

- Severity: Minor
  Location: [`packages/core/src/components/Toggle/docs-meta.json`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/Toggle/docs-meta.json), [`packages/core/src/components/ToggleGroup/docs-meta.json`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/ToggleGroup/docs-meta.json), [`packages/core/src/components/SegmentedControl/docs-meta.json`](/Users/prashanthkumar/Developer/blenx-repo/packages/core/src/components/SegmentedControl/docs-meta.json)
  Problem: These components are related, but the intended use for each one is not obvious enough from the styling and naming alone.
  Why it matters: Clear documentation prevents accidental misuse and keeps the visual system consistent in downstream apps.
  Recommended improvement: Explain the hierarchy explicitly: `Toggle` for standalone on/off or pressed state, `ToggleGroup` for grouped controls, and `SegmentedControl` for single-select mode switching.

## Visual Direction

The family should read as:

- `Toggle`: compact, stateful, utility-focused
- `ToggleGroup`: structured, adaptable, and slightly more architectural
- `SegmentedControl`: refined, premium, and the clearest expression of selected choice

## Top Priority Fixes

1. Make the selected segment state unmistakable in `SegmentedControl`.
2. Give `ToggleGroup` a proper tray surface and stronger outer hierarchy.
3. Standardize the hover, focus, and pressed language across the family.
4. Strengthen `Toggle` so it looks intentionally stateful, not button-like.
5. Document the use-case split so consumers choose the right control by intent.
