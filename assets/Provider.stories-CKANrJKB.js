import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bH as r,bI as Z,K as B,L as b,B as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Provider",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t=()=>{const{theme:s,colorScheme:l,setTheme:c,toggleTheme:k}=Z();return e.jsx(B,{style:{width:"400px"},children:e.jsxs(b,{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Theme Settings"}),e.jsxs("p",{style:{marginBottom:"0.5rem"},children:[e.jsx("strong",{children:"Current Theme:"})," ",s]}),e.jsxs("p",{style:{marginBottom:"1rem"},children:[e.jsx("strong",{children:"Resolved Color Scheme:"})," ",l]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:[e.jsx(o,{variant:s==="light"?"solid":"outline",onClick:()=>c("light"),children:"Light"}),e.jsx(o,{variant:s==="dark"?"solid":"outline",onClick:()=>c("dark"),children:"Dark"}),e.jsx(o,{variant:s==="system"?"solid":"outline",onClick:()=>c("system"),children:"System"})]}),e.jsxs(o,{onClick:k,fullWidth:!0,children:["Toggle Theme (",l==="light"?"🌙":"☀️",")"]})]})})},a={render:()=>e.jsx(r,{children:e.jsx(t,{})})},n={render:()=>e.jsx(r,{defaultTheme:"dark",children:e.jsx(t,{})})},i={render:()=>e.jsx(r,{defaultTheme:"system",children:e.jsx(t,{})})},m={render:()=>e.jsx(r,{attribute:"class",children:e.jsx(t,{})})},d={render:()=>e.jsx(r,{storageKey:"my-app-theme",children:e.jsx(t,{})})};var h,u,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ZenKitProvider>
      <ThemeDemo />
    </ZenKitProvider>
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,g,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ZenKitProvider defaultTheme="dark">
      <ThemeDemo />
    </ZenKitProvider>
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,v,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ZenKitProvider defaultTheme="system">
      <ThemeDemo />
    </ZenKitProvider>
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var K,f,D;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ZenKitProvider attribute="class">
      <ThemeDemo />
    </ZenKitProvider>
}`,...(D=(f=m.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var C,S,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ZenKitProvider storageKey="my-app-theme">
      <ThemeDemo />
    </ZenKitProvider>
}`,...(P=(S=d.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const _=["Default","DefaultDark","DefaultSystem","WithClassAttribute","CustomStorageKey"];export{d as CustomStorageKey,a as Default,n as DefaultDark,i as DefaultSystem,m as WithClassAttribute,_ as __namedExportsOrder,R as default};
