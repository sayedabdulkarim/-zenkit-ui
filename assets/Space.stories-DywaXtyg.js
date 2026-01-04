import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ch as n,B as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Layout/Space",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(n,{children:[e.jsx(t,{children:"Button 1"}),e.jsx(t,{children:"Button 2"}),e.jsx(t,{children:"Button 3"})]})},o={render:()=>e.jsxs(n,{direction:"vertical",children:[e.jsx(t,{fullWidth:!0,children:"Button 1"}),e.jsx(t,{fullWidth:!0,children:"Button 2"}),e.jsx(t,{fullWidth:!0,children:"Button 3"})]})},a={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:["xs","sm","md","lg","xl"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"0.5rem"},children:["Size: ",r]}),e.jsxs(n,{size:r,children:[e.jsx(t,{children:"Button 1"}),e.jsx(t,{children:"Button 2"}),e.jsx(t,{children:"Button 3"})]})]},r))})},i={render:()=>e.jsxs(n,{size:32,children:[e.jsx(t,{children:"Button 1"}),e.jsx(t,{children:"Button 2"}),e.jsx(t,{children:"Button 3"})]})},c={render:()=>e.jsxs(n,{divider:e.jsx("span",{style:{color:"var(--border)"},children:"|"}),children:[e.jsx("a",{href:"#",children:"Link 1"}),e.jsx("a",{href:"#",children:"Link 2"}),e.jsx("a",{href:"#",children:"Link 3"})]})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:["start","center","end","baseline"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"0.5rem"},children:["Align: ",r]}),e.jsxs(n,{align:r,size:"md",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})]},r))})},l={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(n,{wrap:!0,children:Array.from({length:10}).map((r,u)=>e.jsxs(t,{children:["Button ",u+1]},u))})})};var m,p,B;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Space>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
}`,...(B=(p=s.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var x,h,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <Button fullWidth>Button 1</Button>
      <Button fullWidth>Button 2</Button>
      <Button fullWidth>Button 3</Button>
    </Space>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var g,S,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size}>
          <p style={{
        marginBottom: '0.5rem'
      }}>Size: {size}</p>
          <Space size={size}>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Space>
        </div>)}
    </div>
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,y,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Space size={32}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var W,k,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Space divider={<span style={{
    color: 'var(--border)'
  }}>|</span>}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </Space>
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var D,A,b;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {(['start', 'center', 'end', 'baseline'] as const).map(align => <div key={align}>
          <p style={{
        marginBottom: '0.5rem'
      }}>Align: {align}</p>
          <Space align={align} size="md">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Space>
        </div>)}
    </div>
}`,...(b=(A=d.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var _,w,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Space wrap>
        {Array.from({
        length: 10
      }).map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
      </Space>
    </div>
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const q=["Default","Vertical","Sizes","CustomSize","WithDivider","Alignment","Wrap"];export{d as Alignment,i as CustomSize,s as Default,a as Sizes,o as Vertical,c as WithDivider,l as Wrap,q as __namedExportsOrder,R as default};
