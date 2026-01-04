import{j as e}from"./jsx-runtime-DiklIkkE.js";import{$ as r,a0 as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const v={title:"Components/Code",component:r,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs("p",{children:["Run ",e.jsx(r,{children:"npm install @zenkit-ui/core"})," to install the package."]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(r,{color:"default",children:"default"}),e.jsx(r,{color:"primary",children:"primary"}),e.jsx(r,{color:"secondary",children:"secondary"}),e.jsx(r,{color:"success",children:"success"}),e.jsx(r,{color:"warning",children:"warning"}),e.jsx(r,{color:"danger",children:"danger"})]})},a={render:()=>e.jsx(t,{language:"typescript",children:`import { Button } from '@zenkit-ui/core';

function App() {
  return <Button>Click me</Button>;
}`})},s={render:()=>e.jsx(t,{language:"javascript",showLineNumbers:!0,children:`function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');`})},c={render:()=>e.jsx(t,{language:"bash",copyable:!0,children:"npm install @zenkit-ui/core"})};var l,d,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <p>
      Run <Code>npm install @zenkit-ui/core</Code> to install the package.
    </p>
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <Code color="default">default</Code>
      <Code color="primary">primary</Code>
      <Code color="secondary">secondary</Code>
      <Code color="success">success</Code>
      <Code color="warning">warning</Code>
      <Code color="danger">danger</Code>
    </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,C,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <CodeBlock language="typescript">
    {\`import { Button } from '@zenkit-ui/core';

function App() {
  return <Button>Click me</Button>;
}\`}
    </CodeBlock>
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <CodeBlock language="javascript" showLineNumbers>
    {\`function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');\`}
    </CodeBlock>
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,B,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <CodeBlock language="bash" copyable>
      npm install @zenkit-ui/core
    </CodeBlock>
}`,...(j=(B=c.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const S=["Inline","Colors","Block","BlockWithLineNumbers","Copyable"];export{a as Block,s as BlockWithLineNumbers,n as Colors,c as Copyable,o as Inline,S as __namedExportsOrder,v as default};
