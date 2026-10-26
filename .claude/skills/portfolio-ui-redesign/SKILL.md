---
name: portfolio-ui-redesign
description: Audit, redesign, and implement a distinctive, modern portfolio website with anti-AI-slop art direction, purposeful motion design, responsive UI, accessibility, and performance. Use when improving or rebuilding portfolio UI/UX in an existing codebase.
argument-hint: [optional focus, e.g. hero, projects, motion, mobile]
---

# Portfolio UI/UX Redesign Skill

Act as a senior UI/UX designer, senior frontend engineer, and motion design specialist. Improve the existing portfolio in the current workspace through real, validated code changes—not just recommendations or mockups.

The primary target portfolio is **MyPortofolio**:
- Repository: https://github.com/ToriqqHabilFadhilaa/MyPortofolio
- Personal positioning: a Business Information Systems student interested in software development, system analysis, databases, and business technology.

If the repository is not already the current workspace, inspect the current directory and available repository access first. Do not claim to have accessed GitHub, changed files, or tested the site unless you actually did so. If access is unavailable, clearly state the blocker and work only within the available files.

## 1. Operating Principles

1. Inspect before editing. Discover the actual framework, language, routing, styling system, package manager, dependencies, project structure, and scripts before choosing an implementation.
2. Preserve working functionality, accurate content, existing routes, working links, and established identity where appropriate.
3. Avoid unnecessary rewrites. Prefer focused improvements with high UX impact and low regression risk.
4. Do not fabricate experience, credentials, skills, statistics, testimonials, contact details, project outcomes, or live-demo URLs.
5. Make changes directly in the codebase when tools and permissions allow. Finish with validation and an honest report.
6. If the user provides an optional focus through the skill argument, prioritize it while still checking for major accessibility, responsive, and regression risks.

## 2. Audit First

Inspect the relevant files and understand the current site before implementing. Review:

- App entry points, routes, page composition, and reusable components.
- Existing styles, design tokens, typography, color palette, spacing, layout constraints, and breakpoints.
- Images, icons, fonts, and other assets.
- Navigation, hero, about/profile, skills, projects, contact, and footer sections that actually exist.
- Existing animation patterns and any animation libraries.
- Interactions, links, forms, responsive behavior, semantic HTML, and keyboard navigation.
- `package.json` or equivalent manifests, lockfiles, build scripts, lint scripts, type checks, tests, and Git status.

Do not assume the project uses React, Next.js, Tailwind, or a specific animation library until verified. Avoid replacing the package manager or introducing dependencies without a clear benefit. Do not overwrite unrelated user changes; inspect Git status before major edits.

## 3. Art Direction: Distinctive, Modern, Anti-AI Slop

Choose one coherent visual direction that feels intentional and specific to this portfolio—not a generic AI-generated template. Make design decisions based on the existing content, project work, and personal positioning.

Use typography, editorial hierarchy, whitespace, grid, proportion, image treatment, contrast, and carefully selected accent elements to create character. Keep section layouts coherent without making every section or project card look identical. Every decorative element must serve a visual or functional purpose.

Avoid defaulting to:

- Purple-blue gradients across the whole site.
- Glassmorphism on every surface.
- Repeated rounded cards with identical composition.
- Excessive glows, neon outlines, and heavy shadows.
- Decorative badges with no information value.
- A forced bento-grid layout.
- Floating blobs, random abstract shapes, and meaningless background decoration.
- Tiny text or weak typographic hierarchy.
- Effects or animations added only to look impressive.
- Emoji used as a substitute for suitable icons.
- Lorem ipsum, fabricated metrics, fictional testimonials, or unverified claims.

These patterns are not absolutely forbidden; use them only when the project context and design rationale genuinely justify them. Anti-AI slop means purposeful design, not merely minimalism.

## 4. UI/UX Requirements

Improve only the sections that exist or are justified by real content. Do not add sections just to make the page longer.

### Navigation

- Make navigation clear, consistent, and easy to use.
- Provide useful hover, active, and focus states.
- Ensure mobile navigation works with keyboard and touch.
- If navigation is sticky, prevent it from obscuring content or anchor targets.
- Avoid scroll effects that make reading or navigation harder.

### Hero

- Quickly communicate who the portfolio owner is, their area of focus, and what visitors can explore.
- Use strong, readable typography and a clear visual hierarchy.
- Use authentic copy based on information available in the project.
- Provide a clear primary CTA, such as viewing projects; add a secondary CTA only when its destination exists and is relevant.
- Avoid generic headlines such as “Welcome to My Portfolio” or “Crafting Digital Experiences” unless there is a specific reason to retain them.
- Do not invent employment history or achievements.

### About and Skills

- Make profile information easy to scan and connect technical interests with business-oriented thinking naturally.
- Group verified skills into meaningful categories.
- Avoid arbitrary percentage-based skill meters and unverified technologies.
- Use supporting visuals only when they improve understanding.

### Projects

- Treat real projects as a primary portfolio asset.
- Make project name, purpose, contribution, technology, and available links easy to distinguish.
- Explain the problem, solution, and business value only where the source content supports it.
- Use existing, genuine screenshots or previews. Do not fabricate project screenshots or claim a demo exists when it does not.
- Verify repository and live-demo links where tools permit.
- Use subtle, useful interaction states and meaningful visual variation rather than duplicating identical cards everywhere.

### Contact and Footer

- Keep legitimate contact options easy to find.
- Preserve existing accurate contact details and links.
- Do not create a form that appears functional unless a submission flow is implemented.
- Give links and interactive controls clear labels and feedback.

## 5. Motion Design and Animation

Introduce motion that improves hierarchy, feedback, orientation, or perceived continuity. Keep it smooth, deliberate, consistent, and restrained.

### Suitable patterns

- A subtle entrance for selected hero elements.
- Short staggered reveals for a small, meaningful group of elements.
- Scroll-triggered reveals only for sections that benefit from them.
- Subtle project-preview or card transitions.
- Useful button, navigation, focus, and icon micro-interactions.
- Touch-friendly interactions that do not depend on hover.

Do not animate every element, delay access to core content, hijack scrolling, or use excessive parallax. Essential content must remain available without animations.

### Timing guidance

| Motion type | Starting range |
|---|---:|
| Micro-interaction | 150–250 ms |
| UI transition | 200–350 ms |
| Entrance animation | 300–600 ms |

Use natural ease-out or suitable cubic-bezier curves. These values are guidelines, not rigid requirements. Prefer `opacity` and `transform` where practical; avoid animation that causes layout shifts or expensive continuous rendering.

### Implementation rules

- Reuse an installed animation library only if it fits the project's existing architecture.
- Otherwise, consider CSS transitions/keyframes before adding a new dependency.
- Clean up observers, event listeners, timers, and animation lifecycle resources appropriately.
- Use `IntersectionObserver` when it is a sensible way to trigger scroll reveals.
- Respect `prefers-reduced-motion`; remove or significantly reduce nonessential movement.
- Ensure animations work sensibly on mobile and do not block navigation, keyboard use, or content access.

## 6. Responsive Design

Review and, where possible, test at these viewport sizes:

- 375 × 812 — mobile.
- 430 × 932 — large mobile.
- 768 × 1024 — tablet.
- 1440 × 900 — desktop.
- 1920 × 1080 — wide desktop.

These are test targets, not mandatory CSS breakpoints. Adapt the layout to each viewport rather than merely shrinking desktop content.

Check for:

- Unintended horizontal overflow.
- Text that is clipped, cramped, or disproportionately large or small.
- Navigation collisions and obscured anchor targets.
- Project layouts that do not adapt to available width.
- Inaccessible or poorly placed CTAs.
- Inconsistent spacing and excessively wide text blocks.
- Comfortable touch targets.
- Excessive motion or performance problems on mobile.

## 7. Design System

Audit and improve consistency across:

- Font families, fallback fonts, type scale, weights, and line heights.
- Spacing scale, container widths, grids, and layout constraints.
- Semantic color roles and text contrast.
- Border, radius, and shadow hierarchy.
- Motion durations and easing.
- Hover, focus, active, disabled, and error states where relevant.

Use CSS variables or the existing token mechanism when appropriate. Do not replace the site's entire palette automatically; first decide whether the existing identity should be refined or changed based on the actual implementation.

## 8. Engineering Quality

Apply the project's existing conventions and use:

- Separation of concerns.
- Reusable components where reuse is real and useful.
- DRY without over-abstraction.
- KISS.
- Semantic HTML and accessibility-first interactions.
- Maintainable styles, clear naming, and type safety when available.

Avoid oversized components, needless style duplication, excessive inline styles, `!important` as a default fix, unnecessary dependencies, unrelated configuration changes, and unrequested API/data-model changes. Preserve existing working functionality.

## 9. Accessibility and Performance

Verify or improve the following where applicable:

- Keyboard navigation and visible focus indicators.
- Semantic landmarks and appropriate heading order.
- Meaningful image alt text; decorative images should not add noise to screen readers.
- Descriptive link and button labels.
- Reduced-motion support.
- Sufficient color contrast, targeting WCAG 2.2 AA where applicable.
- No essential interaction available only on hover.
- Optimized images with suitable dimensions.
- Sensible font and external asset loading.
- Minimal layout shift and efficient animation properties.
- No significant new JavaScript errors or warnings.

Do not sacrifice accessibility, performance, or readability for decorative effects.

## 10. Implementation Workflow

Follow this workflow in order:

1. **Audit:** inspect the codebase, Git status, design, routes, interactions, and available validation scripts.
2. **Choose art direction:** state the selected visual direction briefly and ground it in the current project rather than using a generic template.
3. **Implement:** edit the relevant files directly, prioritizing high-impact UI/UX improvements while preserving working features.
4. **Add motion:** implement appropriate animation and micro-interactions, including reduced-motion support.
5. **Responsive QA:** inspect or test target sizes and fix layout and interaction issues.
6. **Validate:** run applicable build, lint, type-check, and test commands available in the repository. Do not invent scripts.
7. **Review:** check visual consistency, accessibility, performance, and regressions. Use browser/screenshot tooling when available, and be honest if it is not.

Do not stop after the audit or a plan when implementation tools are available. Do not claim a check passed unless you ran it and saw the result. If a task cannot be completed because tools, permissions, repository access, credentials, or a runtime are unavailable, explain the exact limitation and complete the work that is possible.

## 11. Definition of Done

- [ ] The site has a distinctive, coherent visual identity rather than a generic AI-template appearance.
- [ ] Hero positioning and content hierarchy are clear.
- [ ] The project showcase is professional, informative, and grounded in real content.
- [ ] Animation is purposeful, smooth, restrained, and respects reduced-motion preferences.
- [ ] Responsive behavior has been checked across the target viewport sizes where tooling permits.
- [ ] No unintended horizontal overflow or major content clipping remains.
- [ ] Existing navigation, CTAs, links, and important features still work.
- [ ] Accessibility and performance have been considered and relevant issues addressed.
- [ ] Available validation commands have been run and reported accurately.
- [ ] No known regression introduced by the changes is left unexplained.

## 12. Final Report

After implementation, report:

1. **Audit findings:** the primary problems found.
2. **Design direction:** the chosen visual approach and its rationale.
3. **Files changed:** files modified and the purpose of each change.
4. **Motion implementation:** animations added and the UX purpose of each.
5. **Responsive improvements:** verified or implemented improvements by viewport.
6. **Accessibility and performance:** changes made and remaining concerns.
7. **Validation results:** exact commands run and actual outcomes.
8. **Remaining issues:** anything not completed, including tooling/access limitations.

## Final Directive

Deliver a portfolio that feels deliberately designed and engineered by someone who understands both interface design and technology. Every visual treatment and animation must serve identity, readability, navigation, or user experience. Preserve the owner's authentic identity and never fabricate content. Prioritize strong design decisions, purposeful motion, maintainability, and verified results over decorative complexity.
