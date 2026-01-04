import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as s}from"./index-ChEI-nsM.js";import{M as o}from"./index-Dm06NFYK.js";import"./index-DRjF_FHU.js";import"./iframe-DWQTfndk.js";import"./index-DIvcuAjW.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"zenkit-ui",children:"ZenKit UI"}),`
`,n.jsxs(e.p,{children:["Welcome to ",n.jsx(e.strong,{children:"ZenKit UI"})," - A modern React component library built on ZenKit CSS."]}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Zero-runtime CSS"})," - Built on ZenKit CSS for optimal performance"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fully typed"})," - Written in TypeScript with complete type definitions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessible"})," - WCAG 2.1 AA compliant components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customizable"})," - CSS Variables for easy theming"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tree-shakeable"})," - Import only what you need"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"100+ Components"})," - Comprehensive component library"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @zenkit-ui/core zenkit-css
# or
pnpm add @zenkit-ui/core zenkit-css
`})}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Import ZenKit CSS in your app's entry point
import 'zenkit-css/dist/zenkit.css';

// Use components
import { Button } from '@zenkit-ui/core';

function App() {
  return (
    <Button variant="solid" colorScheme="primary">
      Click me
    </Button>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"packages",children:"Packages"}),`
`,n.jsx(e.h3,{id:"zenkit-uicore",children:"@zenkit-ui/core"}),`
`,n.jsx(e.p,{children:"Core components including:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Layout & Structure"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AppShell, Container, Grid, Flex, Stack, Group, Box, Center, AspectRatio"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Navigation"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Navbar, Sidebar, Breadcrumb, Menu, Tabs, Pagination, Steps, NavLink"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Data Entry"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Input, Select, Checkbox, Radio, Switch, Slider, DatePicker, Upload, Form"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Data Display"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Table, DataGrid, Card, Avatar, Badge, Tag, Timeline, Tree, Descriptions"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Feedback"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alert, Modal, Drawer, Toast, Notification, Progress, Skeleton, Spinner"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Overlay"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Popover, Tooltip, Dropdown, Dialog, Sheet, Popconfirm"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Utility"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Portal, Transition, ConfigProvider, FloatButton, Affix, VirtualList"}),`
`]}),`
`,n.jsx(e.h3,{id:"zenkit-uihooks",children:"@zenkit-ui/hooks"}),`
`,n.jsx(e.p,{children:"Reusable React hooks for building accessible UI components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useDisclosure"})," - Modal/dropdown open/close state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useClickOutside"})," - Click outside detection"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useFocusTrap"})," - Keyboard focus trapping"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useControllable"})," - Controlled/uncontrolled component state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useMediaQuery"})," - Responsive breakpoint detection"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useKeyboard"})," - Keyboard event handling"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useClipboard"})," - Copy to clipboard functionality"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useLocalStorage"})," - Persistent local storage state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useDebounce"})," - Debounced value updates"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useIntersection"})," - Intersection observer hook"]}),`
`]}),`
`,n.jsx(e.h2,{id:"component-categories",children:"Component Categories"}),`
`,n.jsx(e.p,{children:`| Category | Components |
|----------|-----------|
| Layout | AppShell, Container, Grid, Flex, Stack, Group, Box, Center |
| Navigation | Navbar, Menu, Tabs, Breadcrumb, Pagination, Steps |
| Forms | Input, Select, Checkbox, Radio, Switch, DatePicker, Form |
| Data Display | Table, Card, Avatar, Badge, Tag, List, Tree |
| Feedback | Alert, Modal, Toast, Progress, Spinner, Skeleton |
| Overlay | Popover, Tooltip, Dropdown, Dialog, Drawer |`}),`
`,n.jsx(e.h2,{id:"browser-support",children:"Browser Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome (latest)"}),`
`,n.jsx(e.li,{children:"Firefox (latest)"}),`
`,n.jsx(e.li,{children:"Safari (latest)"}),`
`,n.jsx(e.li,{children:"Edge (latest)"}),`
`]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/sayedabdulkarim/zenkit-ui",rel:"nofollow",children:"GitHub Repository"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/sayedabdulkarim/zenkit-css",rel:"nofollow",children:"ZenKit CSS"})}),`
`]})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
