import{j as a}from"./jsx-runtime-DiklIkkE.js";import{u as r,v as G}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const q={title:"Components/Avatar",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},shape:{control:"select",options:["circle","square","rounded"]}}},s={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User avatar"}},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[a.jsx(r,{src:"https://i.pravatar.cc/150?img=1",size:"xs"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=2",size:"sm"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=3",size:"md"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=4",size:"lg"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=5",size:"xl"})]})},e={render:()=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsx(r,{src:"https://i.pravatar.cc/150?img=1",shape:"circle"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=2",shape:"rounded"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=3",shape:"square"})]})},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsx(r,{fallback:"John Doe"}),a.jsx(r,{fallback:"Jane Smith"}),a.jsx(r,{fallback:"Bob"})]})},i={render:()=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsx(r,{}),a.jsx(r,{size:"lg"})]})},p={render:()=>a.jsxs(G,{max:4,children:[a.jsx(r,{src:"https://i.pravatar.cc/150?img=1"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=2"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=3"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=4"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=5"}),a.jsx(r,{src:"https://i.pravatar.cc/150?img=6"})]})};var o,m,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar'
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var v,d,n;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" />
      <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=3" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" />
    </div>
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var g,h,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" shape="circle" />
      <Avatar src="https://i.pravatar.cc/150?img=2" shape="rounded" />
      <Avatar src="https://i.pravatar.cc/150?img=3" shape="square" />
    </div>
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,j,A;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Avatar fallback="John Doe" />
      <Avatar fallback="Jane Smith" />
      <Avatar fallback="Bob" />
    </div>
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var f,y,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Avatar />
      <Avatar size="lg" />
    </div>
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,b,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4}>
      <Avatar src="https://i.pravatar.cc/150?img=1" />
      <Avatar src="https://i.pravatar.cc/150?img=2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" />
      <Avatar src="https://i.pravatar.cc/150?img=5" />
      <Avatar src="https://i.pravatar.cc/150?img=6" />
    </AvatarGroup>
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const B=["Default","Sizes","Shapes","WithFallback","WithoutImage","Group"];export{s as Default,p as Group,e as Shapes,t as Sizes,c as WithFallback,i as WithoutImage,B as __namedExportsOrder,q as default};
