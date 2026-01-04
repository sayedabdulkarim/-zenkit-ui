import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cb as t,cc as r,cd as m}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const N={title:"Components/Skeleton",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},animation:{control:"select",options:["pulse","wave",!1]}}},a={args:{variant:"text",width:200}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Text"}),e.jsx(t,{variant:"text",width:200})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Circular"}),e.jsx(t,{variant:"circular",width:50,height:50})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Rectangular"}),e.jsx(t,{variant:"rectangular",width:200,height:100})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Rounded"}),e.jsx(t,{variant:"rounded",width:200,height:100})]})]})},s={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(t,{variant:"text",lines:4})})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Pulse (default)"}),e.jsx(t,{variant:"rectangular",width:200,height:50,animation:"pulse"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Wave"}),e.jsx(t,{variant:"rectangular",width:200,height:50,animation:"wave"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"No animation"}),e.jsx(t,{variant:"rectangular",width:200,height:50,animation:!1})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:32}),e.jsx(r,{size:40}),e.jsx(r,{size:56}),e.jsx(r,{size:72})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:300},children:e.jsx(m,{})}),e.jsx("div",{style:{width:300},children:e.jsx(m,{avatar:!1,lines:5})})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(r,{size:48}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"30%",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",lines:2})]})]})};var c,p,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 200
  }
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,h,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Text</p>
        <Skeleton variant="text" width={200} />
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Circular</p>
        <Skeleton variant="circular" width={50} height={50} />
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Rectangular</p>
        <Skeleton variant="rectangular" width={200} height={100} />
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Rounded</p>
        <Skeleton variant="rounded" width={200} height={100} />
      </div>
    </div>
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,y,j;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <Skeleton variant="text" lines={4} />
    </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,S,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Pulse (default)</p>
        <Skeleton variant="rectangular" width={200} height={50} animation="pulse" />
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Wave</p>
        <Skeleton variant="rectangular" width={200} height={50} animation="wave" />
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>No animation</p>
        <Skeleton variant="rectangular" width={200} height={50} animation={false} />
      </div>
    </div>
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,B,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <SkeletonAvatar size={32} />
      <SkeletonAvatar size={40} />
      <SkeletonAvatar size={56} />
      <SkeletonAvatar size={72} />
    </div>
}`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var A,C,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <div style={{
      width: 300
    }}>
        <SkeletonCard />
      </div>
      <div style={{
      width: 300
    }}>
        <SkeletonCard avatar={false} lines={5} />
      </div>
    </div>
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,I,P;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
      <SkeletonAvatar size={48} />
      <div style={{
      flex: 1
    }}>
        <Skeleton variant="text" width="30%" style={{
        marginBottom: '0.5rem'
      }} />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const V=["Default","Variants","MultipleLines","Animations","Avatar","Card","ContentPlaceholder"];export{n as Animations,l as Avatar,d as Card,o as ContentPlaceholder,a as Default,s as MultipleLines,i as Variants,V as __namedExportsOrder,N as default};
