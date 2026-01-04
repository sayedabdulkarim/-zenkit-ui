import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d9 as r,B as d}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const C={title:"Components/VisuallyHidden",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"There is hidden text after this paragraph (only visible to screen readers):"}),e.jsx(r,{children:"This text is only visible to screen readers and other assistive technologies."}),e.jsx("p",{children:"And before this paragraph."})]})},s={render:()=>e.jsxs(d,{"aria-label":"Close",children:[e.jsx("span",{"aria-hidden":"true",children:"×"}),e.jsx(r,{children:"Close dialog"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs(d,{children:[e.jsx("span",{"aria-hidden":"true",children:"🏠"}),e.jsx(r,{children:"Home"})]}),e.jsxs(d,{children:[e.jsx("span",{"aria-hidden":"true",children:"⚙️"}),e.jsx(r,{children:"Settings"})]}),e.jsxs(d,{children:[e.jsx("span",{"aria-hidden":"true",children:"👤"}),e.jsx(r,{children:"Profile"})]})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("label",{htmlFor:"search",children:[e.jsx(r,{children:"Search"}),e.jsx("span",{"aria-hidden":"true",children:"🔍"})]}),e.jsx("input",{id:"search",type:"search",placeholder:"Search...",style:{padding:"0.5rem"}})]})},t={render:()=>e.jsxs("div",{children:[e.jsx("a",{href:"#main-content",style:{position:"absolute"},children:e.jsx(r,{focusable:!0,children:"Skip to main content"})}),e.jsxs("nav",{style:{padding:"1rem",background:"#f0f0f0"},children:[e.jsx("a",{href:"#",children:"Home"})," | ",e.jsx("a",{href:"#",children:"About"})," | ",e.jsx("a",{href:"#",children:"Contact"})]}),e.jsxs("main",{id:"main-content",style:{padding:"1rem"},children:[e.jsx("h1",{children:"Main Content"}),e.jsx("p",{children:"Focus the page and press Tab to see the skip link."})]})]})};var l,o,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>
      <p>There is hidden text after this paragraph (only visible to screen readers):</p>
      <VisuallyHidden>
        This text is only visible to screen readers and other assistive technologies.
      </VisuallyHidden>
      <p>And before this paragraph.</p>
    </div>
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var p,h,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Button aria-label="Close">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </Button>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,x,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button>
        <span aria-hidden="true">🏠</span>
        <VisuallyHidden>Home</VisuallyHidden>
      </Button>
      <Button>
        <span aria-hidden="true">⚙️</span>
        <VisuallyHidden>Settings</VisuallyHidden>
      </Button>
      <Button>
        <span aria-hidden="true">👤</span>
        <VisuallyHidden>Profile</VisuallyHidden>
      </Button>
    </div>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,g,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
      <label htmlFor="search">
        <VisuallyHidden>Search</VisuallyHidden>
        <span aria-hidden="true">🔍</span>
      </label>
      <input id="search" type="search" placeholder="Search..." style={{
      padding: '0.5rem'
    }} />
    </div>
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,v,H;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div>
      <a href="#main-content" style={{
      position: 'absolute'
    }}>
        <VisuallyHidden focusable>Skip to main content</VisuallyHidden>
      </a>
      <nav style={{
      padding: '1rem',
      background: '#f0f0f0'
    }}>
        <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
      </nav>
      <main id="main-content" style={{
      padding: '1rem'
    }}>
        <h1>Main Content</h1>
        <p>Focus the page and press Tab to see the skip link.</p>
      </main>
    </div>
}`,...(H=(v=t.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const F=["Default","IconButton","IconOnlyButton","FormLabel","SkipLink"];export{a as Default,i as FormLabel,s as IconButton,n as IconOnlyButton,t as SkipLink,F as __namedExportsOrder,C as default};
