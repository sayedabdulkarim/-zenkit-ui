# ZenKit UI - Comprehensive Component Library Specification

## Executive Summary

Complete component specification for ZenKit UI - a modern React component library designed to compete with Ant Design, Material-UI, Chakra UI, and others. Built on top of **[ZenKit CSS](https://www.npmjs.com/package/zenkit-css)** framework.

**Libraries Analyzed:**
- Ant Design (66 components)
- Material-UI (50+ components)
- Chakra UI v3 (55+ components)
- shadcn/ui (59 components)
- Radix UI (30 primitives)
- Mantine (138+ components)
- HeroUI/NextUI (45+ components)
- Headless UI (15+ components)

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Total Components | **186** |
| Phase 1-3 (Core) | 47 components |
| Phase 4 (Advanced) | 63 components |
| Phase 5-6 (Extended) | 48 components |
| Phase 7 (Parity) | 17 components |
| Phase 8 (New) | 11 components |
| zenkit-css Version | **1.4.1** |
| zenkit-css Files | **201 SCSS files (171 components)** |
| CSS Coverage | **100%** |
| Library Coverage | **99%+** (Ant, MUI, Mantine, Chakra, shadcn, HeroUI) |

---

## Component Categories

### 1. GENERAL (15 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Button** | P0 | All | variants, sizes, loading, icons, disabled | `_buttons.scss` |
| **ButtonGroup** | P1 | MUI, Mantine | grouped buttons, segmented, toggle mode | `_buttongroup.scss` |
| **Icon** | P0 | All | icon set integration, sizes, colors, spin | `_icon.scss` |
| **IconButton** | P1 | MUI, Chakra | icon-only button, sizes, tooltip support | `_iconbutton.scss` |
| **Typography** | P0 | All | Heading (H1-H6), Text, Link, Code, Quote | `_typography.scss` |
| **Chip** | P0 | MUI, Mantine, HeroUI | deletable badge, avatar, clickable, groups | `_chip.scss` |
| **CloseButton** | P1 | Chakra | standard close icon button | `_close-button.scss` |
| **Code** | P1 | Chakra, Mantine | inline code, code block, syntax highlighting | `_code.scss` |
| **Heading** | P1 | Mantine, Chakra | semantic heading levels | `_typography.scss` |
| **Text** | P1 | Mantine, Chakra | text component with variants | `_textcomponent.scss` |
| **ActionIcon** | P2 | Mantine | square icon-only button variant | `_actionicon.scss` |
| **UnstyledButton** | P3 | Mantine | base unstyled button primitive | `_unstyledbutton.scss` |
| **CopyButton** | P2 | Mantine | copy to clipboard button | `_copybutton.scss` |
| **ThemeIcon** | P2 | Mantine | themed icon container | `_themeicon.scss` |
| **Blockquote** | P2 | Mantine | styled blockquote | `_blockquote.scss` |

---

### 2. LAYOUT (18 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Grid** | P0 | All | 12-column, responsive, gap control | `_grid.scss` |
| **Flex** | P0 | All | direction, justify, align, wrap, gap | `_flex.scss` |
| **Space** | P0 | Ant, Chakra | horizontal/vertical spacing wrapper | `_spacing.scss` |
| **Container** | P0 | All | max-width, padding, centered | `_container.scss` |
| **Divider** | P1 | All | horizontal/vertical, with text, dashed | `_divider.scss` |
| **Stack** | P1 | MUI, Chakra | VStack/HStack convenience | `_stack.scss` |
| **AspectRatio** | P2 | shadcn, MUI | maintain ratio (16:9, 4:3, etc.) | `_aspectratio.scss` |
| **Masonry** | P2 | Ant, MUI, Mantine | Pinterest-style grid layout | `_masonry.scss` |
| **Splitter** | P2 | Chakra, shadcn | resizable panel divider | `_splitter.scss` |
| **Box** | P1 | Chakra, Mantine | base layout primitive | `_box.scss` |
| **Center** | P1 | Chakra, Mantine | centering utility component | `_center.scss` |
| **AbsoluteCenter** | P2 | Chakra | absolute centering utility | `_absolutecenter.scss` |
| **Group** | P1 | Mantine | horizontal layout with consistent gap | `_group.scss` |
| **Float** | P2 | Chakra | float/anchor element to container edge | `_floatcomponent.scss` |
| **SimpleGrid** | P1 | Chakra, Mantine | simple responsive grid | `_simplegrid.scss` |
| **Paper** | P2 | MUI, Mantine | elevated surface container | `_paper.scss` |
| **Overlay** | P1 | Mantine | full-screen backdrop overlay | `_overlay.scss` |
| **Separator** | P1 | shadcn, Radix | visual separator | `_divider.scss` |

---

### 3. NAVIGATION (18 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Menu** | P0 | All | items, submenu, icons, horizontal/vertical | `_menu.scss` |
| **Tabs** | P0 | All | tab list, panels, variants, icons, closable | `_tabs.scss` |
| **Dropdown** | P0 | All | trigger, menu items, placement, keyboard nav | `_dropdown.scss` |
| **Breadcrumb** | P0 | All | items, separator, icons | `_breadcrumb.scss` |
| **Pagination** | P1 | All | pages, page size, quick jumper | `_pagination.scss` |
| **Steps** | P1 | Ant, MUI | workflow steps, status, vertical/horizontal | `_steps.scss` |
| **Link** | P0 | All | href, target, underline variants | `_link.scss` |
| **Navbar** | P1 | MUI, HeroUI | logo, menu, user menu, mobile hamburger | `_navbar.scss` |
| **Sidebar** | P1 | shadcn, Chakra | collapsible, menu, responsive drawer | `_sidebar.scss` |
| **Anchor** | P1 | Ant Design | page table of contents, scroll spy | `_anchor.scss` |
| **CommandPalette** | P2 | Mantine, shadcn | Cmd+K search, spotlight | `_commandpalette.scss` |
| **ContextMenu** | P2 | shadcn, Radix | right-click menu | `_contextmenu.scss` |
| **SpeedDial** | P2 | MUI | floating action menu | `_speeddial.scss` |
| **BottomNavigation** | P2 | MUI | mobile bottom nav bar | `_bottomnav.scss` |
| **Menubar** | P1 | shadcn, Radix | horizontal application menubar | `_menubar.scss` |
| **NavigationMenu** | P1 | shadcn, Radix | complex nested navigation menus | `_navigationmenu.scss` |
| **Stepper** | P1 | Mantine, MUI | step-by-step workflow | `_steps.scss` |
| **NavLink** | P1 | Mantine | navigation link with active state | `_navlink.scss` |

---

### 4. DATA ENTRY (38 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Input** | P0 | All | types, prefix/suffix, clear, error state | `_forms.scss` |
| **Textarea** | P0 | All | rows, auto-grow, character counter | `_forms.scss` |
| **Select** | P0 | All | options, multiple, searchable, groups | `_select.scss` |
| **Checkbox** | P0 | All | checked, indeterminate, disabled | `_forms.scss` |
| **Radio** | P0 | All | group, horizontal/vertical | `_forms.scss` |
| **Switch** | P0 | All | toggle, sizes, loading | `_forms.scss` |
| **Form** | P0 | All | validation, layout, error handling | `_forms.scss` |
| **Slider** | P1 | All | min/max, range, marks, vertical | `_forms.scss` |
| **DatePicker** | P1 | Ant, MUI | date selection, range, presets | `_datepicker.scss` |
| **DateRangePicker** | P1 | HeroUI, Mantine | date range selection, dual calendar | `_daterange.scss` |
| **TimePicker** | P2 | Ant, HeroUI | time selection, 12/24 hour | `_timepicker.scss` |
| **DateTimePicker** | P2 | MUI, Mantine | combined date and time picker | `_datepicker.scss` |
| **Autocomplete** | P1 | All | suggestions, async, multiple | `_autocomplete.scss` |
| **Upload** | P1 | Ant, MUI | drag & drop, multiple, progress | `_upload.scss` |
| **NumberInput** | P1 | Mantine, Chakra | step, min/max, buttons | `_inputnumber.scss` |
| **Rate** | P2 | Ant, MUI | stars, half-star, custom icons | `_rating.scss` |
| **ColorPicker** | P2 | Ant, Mantine | hex, rgb, hsl, presets | `_colorpicker.scss` |
| **Mentions** | P2 | Ant | @mentions in textarea | `_mentions.scss` |
| **Cascader** | P2 | Ant | multi-level selection | `_cascader.scss` |
| **TreeSelect** | P2 | Ant | tree-based selection | `_treeselect.scss` |
| **Transfer** | P2 | Ant | dual list transfer | `_transfer.scss` |
| **InputOTP** | P2 | shadcn, HeroUI | OTP input fields | `_inputotp.scss` |
| **TagsInput** | P2 | MUI, Chakra, Mantine | multi-value tag input | `_tagsinput.scss` |
| **Dropzone** | P2 | Mantine | drag-drop file upload area | `_dropzone.scss` |
| **PasswordInput** | P1 | Mantine, HeroUI | password with visibility toggle | `_passwordinput.scss` |
| **PinInput** | P1 | Mantine, Chakra | PIN/code input, alphanumeric | `_pininput.scss` |
| **Fieldset** | P1 | Headless, Chakra | form field grouping, legend | `_fieldset.scss` |
| **Editable** | P1 | Chakra | inline editable text, headings | `_editable.scss` |
| **FileInput** | P1 | Mantine | file input field | `_fileinput.scss` |
| **RangeSlider** | P1 | Mantine | dual-thumb range slider | `_rangeslider.scss` |
| **MultiSelect** | P1 | Mantine | multi-selection dropdown | `_multiselect.scss` |
| **Combobox** | P1 | Mantine, Chakra | searchable select with autocomplete | `_combobox.scss` |
| **ColorInput** | P2 | Mantine | color input field | `_colorinput.scss` |
| **JsonInput** | P2 | Mantine | JSON text input with validation | `_jsoninput.scss` |
| **AngleSlider** | P2 | Mantine | circular/angle slider | `_angleslider.scss` |
| **CheckboxGroup** | P1 | Mantine, Chakra | grouped checkboxes | `_checkboxgroup.scss` |
| **CheckboxCard** | P2 | Mantine | checkbox as card | `_checkboxcard.scss` |
| **RadioCard** | P2 | Mantine | radio as card | `_radiocard.scss` |

---

### 5. DATA DISPLAY (38 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Table** | P0 | All | columns, sorting, filtering, pagination | `_table.scss` |
| **DataGrid** | P1 | MUI X | virtualized, editable cells, filtering | `_datagrid.scss` |
| **Card** | P0 | All | header, body, footer, variants | `_cards.scss` |
| **List** | P1 | All | items, header/footer, pagination | `_list.scss` |
| **Avatar** | P1 | All | image, initials, group, badge | `_avatar.scss` |
| **Badge** | P0 | All | count, dot, colors, overflow | `_badges.scss` |
| **Tag** | P1 | All | closable, colors, checkable | `_tag.scss` |
| **Tooltip** | P1 | All | content, placement, trigger | `_tooltip.scss` |
| **Popover** | P1 | All | content, title, trigger, placement | `_popover.scss` |
| **Collapse** | P1 | All | accordion, multiple, icons | `_accordion.scss` |
| **Skeleton** | P1 | All | loading placeholder, shapes | `_skeleton.scss` |
| **Image** | P1 | All | preview, fallback, lazy loading | `_image.scss` |
| **Empty** | P1 | Ant, shadcn | empty state with icon and action | `_empty.scss` |
| **Carousel** | P2 | Ant, shadcn | slides, autoplay, dots, arrows | `_carousel.scss` |
| **Timeline** | P2 | Ant, MUI | items, status, icons | `_timeline.scss` |
| **Tree** | P2 | Ant | hierarchical data, selectable, draggable | `_tree.scss` |
| **Calendar** | P2 | Ant, shadcn | month view, date selection | `_calendar.scss` |
| **Statistic** | P2 | Ant | value display, prefix/suffix | `_statistic.scss` |
| **Descriptions** | P2 | Ant | key-value pairs, columns | `_descriptions.scss` |
| **QRCode** | P2 | Ant | QR generation | `_qrcode.scss` |
| **Segmented** | P2 | Ant | button group toggle | `_segmented.scss` |
| **Kbd** | P2 | shadcn | keyboard key display | `_kbd.scss` |
| **ScrollArea** | P2 | Radix, shadcn | custom scrollbar | `_scrollarea.scss` |
| **HoverCard** | P1 | shadcn, Radix | enhanced popover on hover | `_hovercard.scss` |
| **Toggle** | P1 | shadcn, Radix | two-state toggle button | `_toggle.scss` |
| **ToggleGroup** | P1 | shadcn, Radix | group of toggle buttons | `_togglegroup.scss` |
| **Snippet** | P1 | HeroUI, Mantine | code with copy button | `_snippet.scss` |
| **ImageList** | P1 | MUI | image gallery, masonry, quilted | `_imagelist.scss` |
| **User** | P2 | HeroUI | avatar + name + description compound | `_user.scss` |
| **DataList** | P2 | Chakra | key-value data list display | `_datalist.scss` |
| **BackgroundImage** | P3 | Mantine | component for background images | `_backgroundimage.scss` |
| **Highlight** | P2 | Mantine | highlighted text | `_highlight.scss` |
| **Indicator** | P1 | Mantine | dot/badge indicator on elements | `_indicator.scss` |
| **ColorSwatch** | P2 | Mantine, Chakra | color preview display | `_colorswatch.scss` |
| **Spoiler** | P2 | Mantine | show more/less text | `_spoiler.scss` |
| **NumberFormatter** | P2 | Mantine | number display formatting | N/A (JS only) |
| **Disclosure** | P2 | HeroUI | expandable section | `_disclosure.scss` |
| **Listbox** | P2 | HeroUI | selectable list | `_listbox.scss` |

---

### 6. FEEDBACK (20 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Alert** | P0 | All | types (success, error, warning, info), closable | `_alerts.scss` |
| **AlertDialog** | P0 | shadcn, Radix | confirmation modal, destructive actions | `_alertdialog.scss` |
| **Modal** | P0 | All | title, content, footer, sizes, closable | `_modal.scss` |
| **Dialog** | P1 | Radix, shadcn | primitive modal dialog | `_modal.scss` |
| **Drawer** | P1 | All | placement, sizes, closable | `_drawer.scss` |
| **Notification** | P0 | All | toast notifications, positions | `_notification.scss` |
| **Toast** | P1 | shadcn, Radix | toast notifications | `_toast.scss` |
| **Message** | P1 | Ant | global messages | `_message.scss` |
| **Progress** | P1 | All | linear, percentage | `_progress.scss` |
| **CircularProgress** | P1 | HeroUI, MUI | circular/ring progress, indeterminate | `_circularprogress.scss` |
| **RingProgress** | P2 | Mantine | ring-shaped progress | `_ringprogress.scss` |
| **SemiCircleProgress** | P2 | Mantine | semi-circle progress | `_semicircleprogress.scss` |
| **Spinner** | P1 | All | loading indicator, sizes | `_spinners.scss` |
| **Result** | P2 | Ant | success/error pages | `_result.scss` |
| **Popconfirm** | P2 | Ant | confirmation popover | `_popconfirm.scss` |
| **Watermark** | P2 | Ant | watermark overlay | `_watermark.scss` |
| **Tour** | P1 | Ant Design | product tour, guided onboarding | `_tour.scss` |
| **Sheet** | P1 | shadcn, Radix | bottom sheet, action sheet | `_sheet.scss` |
| **LoadingOverlay** | P1 | Mantine | full overlay loader | `_loadingoverlay.scss` |
| **Backdrop** | P2 | MUI | backdrop overlay | `_backdrop.scss` |

---

### 7. UTILITY & ACCESSIBILITY (22 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **Provider** | P0 | All | theme, dark mode, locale | N/A (JS only) |
| **ConfigProvider** | P1 | Ant | global configuration | N/A (JS only) |
| **Portal** | P0 | All | render outside DOM hierarchy | N/A (JS only) |
| **Transition** | P1 | All | animation wrapper | `_animations.scss` |
| **Affix** | P2 | Ant | sticky positioning | `_affix.scss` |
| **FloatButton** | P2 | Ant | back to top, FAB | `_floatbutton.scss` |
| **BackTop** | P2 | Ant | back to top button | `_backtop.scss` |
| **Resizable** | P2 | shadcn | resizable panels | `_resizable.scss` |
| **VisuallyHidden** | P1 | Radix, Mantine | accessibility hidden text | `_accessibility.scss` |
| **FocusTrap** | P1 | Radix, Mantine | focus management | N/A (JS only) |
| **SkipNavLink** | P1 | Chakra | accessibility skip navigation | `_skipnavlink.scss` |
| **ClientOnly** | P2 | Chakra | client-side only rendering | N/A (JS only) |
| **ErrorBoundary** | P1 | React | error boundary wrapper | N/A (JS only) |
| **LazyLoad** | P2 | Custom | lazy loading wrapper | N/A (JS only) |
| **Label** | P1 | Radix, shadcn | form label | `_forms.scss` |
| **Pill** | P2 | Mantine | tag-like pill component | `_pill.scss` |
| **PillsInput** | P2 | Mantine | input with pills | `_pillsinput.scss` |
| **Mark** | P3 | Mantine | highlighted/marked text | `_mark.scss` |
| **FloatingIndicator** | P2 | Mantine | animated active indicator | `_floatingindicator.scss` |
| **FileButton** | P2 | Mantine | button that triggers file input | `_filebutton.scss` |
| **LinkOverlay** | P2 | Chakra | link overlay for cards | `_linkoverlay.scss` |
| **Toggletip** | P2 | Custom | toggle tooltip | `_toggletip.scss` |

---

### 8. ADVANCED & ENTERPRISE (17 components)

| Component | Priority | Libraries | Key Features | CSS Status |
|-----------|----------|-----------|--------------|------------|
| **VirtualList** | P1 | Custom | virtualized list for large data | `_virtuallist.scss` |
| **InfiniteScroll** | P1 | Custom | infinite scrolling | `_infinitescroll.scss` |
| **Sortable** | P2 | Custom | drag-and-drop sorting | `_sortable.scss` |
| **RichTextEditor** | P2 | Mantine | WYSIWYG editor | `_richtexteditor.scss` |
| **Chart** | P2 | Custom | chart component | `_chart.scss` |
| **Sparkline** | P2 | Custom | inline sparkline charts | `_sparkline.scss` |
| **Gauge** | P2 | Custom | gauge/meter display | `_gauge.scss` |
| **TableOfContents** | P2 | Mantine | page navigation | `_tableofcontents.scss` |
| **SplitButton** | P2 | Custom | button with dropdown | `_splitbutton.scss` |
| **Toolbar** | P1 | Radix | toolbar container | `_toolbar.scss` |
| **Burger** | P1 | Mantine | hamburger menu button | `_burger.scss` |
| **ScrollShadow** | P2 | HeroUI | scroll shadow indicator | `_scrollshadow.scss` |
| **RangeCalendar** | P2 | HeroUI | range date calendar | `_rangecalendar.scss` |
| **MonthPicker** | P2 | Mantine | month selection | `_monthpicker.scss` |
| **YearPicker** | P2 | Mantine | year selection | `_yearpicker.scss` |
| **AppShell** | P1 | Mantine | application layout shell | `_appshell.scss` |
| **AppBar** | P1 | MUI | application bar | `_appbar.scss` |

---

## Development Phases

### Phase 1: Core & Foundation - COMPLETED
**18 Components - Must-have essentials**

```
Button, Input, Form, Typography, Checkbox, Radio, Select, Textarea,
Switch, Grid, Flex, Space, Container, Alert, Modal, Provider, Card
```

### Phase 2: Navigation & Overlay - COMPLETED
**18 Components - Navigation and overlay components**

```
Menu, Tabs, Pagination, Breadcrumb, Dropdown, Tooltip, Popover,
Slider, Steps, Drawer, Notification, Progress, Spinner, Avatar,
Badge, Tag, Divider, Collapse
```

### Phase 3: Data Display - COMPLETED
**11 Components - Data visualization**

```
Table, List, Image, Timeline, Empty, Skeleton, Statistic,
Descriptions, Result, Rate, BackTop
```

### Phase 4: Advanced Components - COMPLETED
**63 Components**

```
ButtonGroup, Icon, IconButton, Chip, CloseButton, Code, Stack,
AspectRatio, Masonry, Splitter, Link, Navbar, Sidebar, Anchor,
CommandPalette, ContextMenu, SpeedDial, BottomNavigation, Menubar,
NavigationMenu, DatePicker, DateRangePicker, TimePicker, Autocomplete,
Upload, NumberInput, ColorPicker, Mentions, Cascader, TreeSelect,
Transfer, InputOTP, TagsInput, Dropzone, PasswordInput, PinInput,
Fieldset, Editable, DataGrid, Carousel, Tree, Calendar, QRCode,
Segmented, Kbd, ScrollArea, HoverCard, Toggle, ToggleGroup, Snippet,
ImageList, AlertDialog, Message, CircularProgress, Popconfirm,
Watermark, Tour, Sheet, ConfigProvider, Portal, Transition, Affix,
FloatButton, Resizable
```

### Phase 5: Extended Components - COMPLETED
**36 Components - Full library parity with Mantine, MUI, shadcn**

```
Toast, Dialog, Label, Separator, Heading, Text, Box, Center,
FileInput, RangeSlider, MultiSelect, Combobox, ColorInput, CopyButton,
CheckboxGroup, AppShell, AppBar, Paper, Backdrop, LoadingOverlay,
RingProgress, VisuallyHidden, FocusTrap, Highlight, Indicator, Spoiler,
Stepper, NavLink, Chart, JsonInput, AngleSlider, TableOfContents,
SemiCircleProgress, CheckboxCard, ScrollShadow, ColorSwatch, ThemeIcon
```

### Phase 6: Enterprise Features - COMPLETED
**14 Components - Enterprise-grade features**

```
RadioCard, Toolbar, SimpleGrid, Blockquote, VirtualList, InfiniteScroll,
SplitButton, NumberFormatter, Sortable, ErrorBoundary, RichTextEditor,
Sparkline, Gauge, LazyLoad
```

### Phase 7: Library Parity & Accessibility - COMPLETED
**17 Components - Full parity with Mantine, Chakra, HeroUI**

```
Group, AbsoluteCenter, Float, Overlay, ActionIcon, UnstyledButton,
FileButton, FloatingIndicator, Pill, PillsInput, Mark, User, DataList,
BackgroundImage, SkipNavLink, ClientOnly
```

### Phase 8: Additional Components - COMPLETED
**11 Components - Specialized components**

```
Burger, Disclosure, Listbox, LinkOverlay, Toggletip, DateTimePicker,
RangeCalendar, MonthPicker, YearPicker
```

---

## zenkit-css Coverage

### Current Status: v1.4.1 - FULL COVERAGE

**Update zenkitUI to use latest zenkit-css:**
```bash
pnpm update zenkit-css@1.4.1
```

**Total SCSS Files:** 201 files (171 component files)

**Component Categories:**
- Components: 171 files
- Layout: 2 files (container, grid)
- Utilities: 19 files
- Base: 3 files (reset, root, typography)
- Content: 3 files (tables, images, figures)
- Abstracts: 3 files (variables, functions, mixins)

**All 186 UI Components have CSS coverage in zenkit-css v1.4.1!**

### Component CSS Mapping Reference

Some components share CSS files or have different names:

| UI Component | CSS File |
|-------------|----------|
| Alert | `_alerts.scss` |
| Badge | `_badges.scss` |
| Button | `_buttons.scss` |
| Card | `_cards.scss` |
| Spinner | `_spinners.scss` |
| Rate | `_rating.scss` |
| Text | `_textcomponent.scss` |
| Float | `_floatcomponent.scss` |
| BottomNavigation | `_bottomnav.scss` |
| DateRangePicker | `_daterange.scss` |
| NumberInput | `_inputnumber.scss` |
| Collapse | `_accordion.scss` or `_collapse.scss` |
| Container | `layout/_container.scss` |
| Grid | `layout/_grid.scss` |
| Flex | `utilities/_flex.scss` |
| Space | `utilities/_spacing.scss` |
| Typography | `base/_typography.scss` |
| VisuallyHidden | `utilities/_accessibility.scss` |

### JS-Only Components (No CSS needed)
```
Provider, ConfigProvider, Portal, FocusTrap, ClientOnly,
ErrorBoundary, LazyLoad, NumberFormatter, Transition
```

---

## Cross-Cutting Requirements

### Theming System
- CSS Variables based (zenkit-css)
- Light/Dark mode support
- Custom color palettes
- Component-level overrides
- Tailwind compatibility

### Accessibility (WCAG 2.1 AA)
- Keyboard navigation
- Screen reader support
- Focus management
- ARIA attributes
- Color contrast
- Motion preferences

### TypeScript
- Full type definitions
- Strict mode
- Generic components
- IntelliSense support

### Responsive Design
- Mobile-first
- Breakpoints: xs, sm, md, lg, xl, 2xl
- Touch-friendly (48px+ tap targets)
- Responsive variants

### RTL Support
- Logical CSS properties
- Direction-aware icons
- Mirror animations

### SSR Compatibility
- Next.js support
- Hydration-safe
- No window/document in render

### Performance
- Tree-shaking
- Code splitting
- Virtual scrolling
- Lazy loading
- Bundle size targets

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18+ |
| Language | TypeScript 5+ |
| Styling | **zenkit-css** (CSS Variables) |
| Build | Vite / tsup |
| Testing | Vitest + React Testing Library |
| Docs | Storybook + Nextra |
| Linting | ESLint + Prettier |
| CI/CD | GitHub Actions |

---

## Project Structure

```
zenkit-ui/
├── packages/
│   ├── core/                 # 186 Core components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── ... (186 components)
│   ├── hooks/                # Custom hooks
│   ├── utils/                # Utilities
│   └── theme/                # Theming
├── apps/
│   ├── docs/                 # Documentation site
│   ├── storybook/            # Storybook
│   └── playground/           # Component playground
├── package.json
└── turbo.json
```

---

## Quality Checklist (Per Component)

- [ ] TypeScript types
- [ ] Props documentation
- [ ] Accessibility (ARIA, keyboard)
- [ ] Dark mode support
- [ ] RTL support
- [ ] Responsive variants
- [ ] Unit tests (>80%)
- [ ] Storybook stories
- [ ] API documentation
- [ ] Performance check
- [ ] zenkit-css integration

---

## Key Differentiators

1. **Built on zenkit-css** - Leverages existing CSS framework ([npm](https://www.npmjs.com/package/zenkit-css))
2. **186 Components** - Most comprehensive React component library
3. **Accessibility First** - Radix UI-level a11y
4. **Modern Styling** - CSS Variables + zero-runtime option
5. **Great DX** - TypeScript, docs, copy-paste friendly
6. **Enterprise Ready** - SSR, performance, security
7. **99%+ Library Coverage** - Covers Ant Design, MUI, Mantine, Chakra, shadcn, HeroUI

---

## References

- [zenkit-css on npm](https://www.npmjs.com/package/zenkit-css)
- [Ant Design Components](https://ant.design/components/overview)
- [Material-UI Components](https://mui.com/material-ui/all-components/)
- [Chakra UI Components](https://chakra-ui.com/docs/components)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Mantine Components](https://mantine.dev)
- [HeroUI Components](https://heroui.com)

---

*Document Version: 2.0*
*Total Components: 186*
*zenkit-css Version: 1.4.1 (201 SCSS files)*
*CSS Coverage: 100%*
*Last Updated: January 2026*
*Author: ZenKit Team*
