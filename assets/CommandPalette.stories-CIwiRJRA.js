import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as m}from"./index-DRjF_FHU.js";import{a7 as a,B as d}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const A={title:"Navigation/CommandPalette",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l=[{id:"1",title:"Go to Home",category:"Navigation",shortcut:"G H"},{id:"2",title:"Go to Settings",category:"Navigation",shortcut:"G S"},{id:"3",title:"Go to Profile",category:"Navigation",shortcut:"G P"},{id:"4",title:"Create New File",category:"Actions",shortcut:"Cmd+N"},{id:"5",title:"Save",category:"Actions",shortcut:"Cmd+S"},{id:"6",title:"Delete",category:"Actions",shortcut:"Del"},{id:"7",title:"Toggle Dark Mode",category:"Preferences"},{id:"8",title:"Change Language",category:"Preferences"}],r={render:()=>{const[t,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open Command Palette (Cmd+K)"}),e.jsx(a,{open:t,onOpenChange:n,commands:l,onSelect:o=>{console.log("Selected:",o),n(!1)}})]})}},s={render:()=>{const[t,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(a,{open:t,onOpenChange:n,commands:l,placeholder:"Type a command or search...",onSelect:o=>n(!1)})]})}},c={render:()=>{const[t,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open Grouped"}),e.jsx(a,{open:t,onOpenChange:n,commands:l,grouped:!0,onSelect:o=>n(!1)})]})}},i={render:()=>{const[t,n]=m.useState(!1),o=[{id:"1",title:"Home",icon:"🏠",category:"Navigation"},{id:"2",title:"Settings",icon:"⚙️",category:"Navigation"},{id:"3",title:"Profile",icon:"👤",category:"Navigation"},{id:"4",title:"New File",icon:"📄",category:"Actions"},{id:"5",title:"Search",icon:"🔍",category:"Actions"}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open with Icons"}),e.jsx(a,{open:t,onOpenChange:n,commands:o,onSelect:N=>n(!1)})]})}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>
          Open Command Palette (Cmd+K)
        </Button>
        <CommandPalette open={open} onOpenChange={setOpen} commands={commands} onSelect={command => {
        console.log('Selected:', command);
        setOpen(false);
      }} />
      </>;
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,O,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <CommandPalette open={open} onOpenChange={setOpen} commands={commands} placeholder="Type a command or search..." onSelect={command => setOpen(false)} />
      </>;
  }
}`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var S,f,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Grouped</Button>
        <CommandPalette open={open} onOpenChange={setOpen} commands={commands} grouped onSelect={command => setOpen(false)} />
      </>;
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,P,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const commandsWithIcons = [{
      id: '1',
      title: 'Home',
      icon: '🏠',
      category: 'Navigation'
    }, {
      id: '2',
      title: 'Settings',
      icon: '⚙️',
      category: 'Navigation'
    }, {
      id: '3',
      title: 'Profile',
      icon: '👤',
      category: 'Navigation'
    }, {
      id: '4',
      title: 'New File',
      icon: '📄',
      category: 'Actions'
    }, {
      id: '5',
      title: 'Search',
      icon: '🔍',
      category: 'Actions'
    }];
    return <>
        <Button onClick={() => setOpen(true)}>Open with Icons</Button>
        <CommandPalette open={open} onOpenChange={setOpen} commands={commandsWithIcons} onSelect={command => setOpen(false)} />
      </>;
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const F=["Default","WithPlaceholder","Grouped","WithIcons"];export{r as Default,c as Grouped,i as WithIcons,s as WithPlaceholder,F as __namedExportsOrder,A as default};
