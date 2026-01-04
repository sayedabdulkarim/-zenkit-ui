import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aa as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Layout/Container",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"]},i=()=>e.jsx("div",{style:{background:"var(--primary)",color:"white",padding:"2rem",borderRadius:"var(--radius)",textAlign:"center"},children:"Container Content"}),n={render:()=>e.jsx(r,{children:e.jsx(i,{})})},t={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:["sm","md","lg","xl","xxl","fluid"].map(d=>e.jsxs("div",{children:[e.jsxs("p",{style:{textAlign:"center",marginBottom:"0.5rem"},children:["Size: ",d]}),e.jsx(r,{size:d,children:e.jsx(i,{})})]},d))})},a={render:()=>e.jsx(r,{size:"fluid",children:e.jsx(i,{})})},s={render:()=>e.jsx(r,{centered:!1,children:e.jsx(i,{})})},o={render:()=>e.jsx(r,{padding:!1,children:e.jsx("div",{style:{background:"var(--primary)",color:"white",padding:"2rem",textAlign:"center"},children:"Container without padding"})})};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Container>
      <Content />
    </Container>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {(['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'] as const).map(size => <div key={size}>
          <p style={{
        textAlign: 'center',
        marginBottom: '0.5rem'
      }}>Size: {size}</p>
          <Container size={size}>
            <Content />
          </Container>
        </div>)}
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,C,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Container size="fluid">
      <Content />
    </Container>
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,h,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Container centered={false}>
      <Content />
    </Container>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,z,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Container padding={false}>
      <div style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
        Container without padding
      </div>
    </Container>
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const N=["Default","Sizes","Fluid","NotCentered","NoPadding"];export{n as Default,a as Fluid,o as NoPadding,s as NotCentered,t as Sizes,N as __namedExportsOrder,D as default};
