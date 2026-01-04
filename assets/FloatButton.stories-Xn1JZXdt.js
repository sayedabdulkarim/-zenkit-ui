import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aD as t,aE as C}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const k={title:"Utility/FloatButton",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},o=()=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),w=()=>e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),s={render:()=>e.jsx("div",{style:{height:"300px",position:"relative"},children:e.jsx(t,{icon:e.jsx(o,{})})})},i={render:()=>e.jsx("div",{style:{height:"300px",position:"relative"},children:e.jsx(t,{icon:e.jsx(o,{}),tooltip:"Add new item"})})},r={render:()=>e.jsxs("div",{style:{height:"300px",position:"relative",display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"},children:[e.jsx(t,{icon:e.jsx(o,{}),shape:"circle",style:{position:"relative"}}),e.jsx(t,{icon:e.jsx(o,{}),shape:"square",style:{position:"relative"}})]})},n={render:()=>e.jsxs("div",{style:{height:"300px",position:"relative",display:"flex",gap:"2rem",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(t,{icon:e.jsx(o,{}),variant:"default",style:{position:"relative"}}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(t,{icon:e.jsx(o,{}),variant:"primary",style:{position:"relative"}}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary"})]})]})},a={render:()=>e.jsx("div",{style:{height:"300px",position:"relative"},children:e.jsx(t,{icon:e.jsx(w,{}),badge:5})})},l={render:()=>e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsxs(C,{trigger:"hover",icon:e.jsx(o,{}),children:[e.jsx(t,{icon:e.jsx(w,{}),tooltip:"Message"}),e.jsx(t,{icon:e.jsx(o,{}),tooltip:"Add"})]})})};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '300px',
    position: 'relative'
  }}>
      <FloatButton icon={<PlusIcon />} />
    </div>
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,u,m;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '300px',
    position: 'relative'
  }}>
      <FloatButton icon={<PlusIcon />} tooltip="Add new item" />
    </div>
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,v,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '300px',
    position: 'relative',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <FloatButton icon={<PlusIcon />} shape="circle" style={{
      position: 'relative'
    }} />
      <FloatButton icon={<PlusIcon />} shape="square" style={{
      position: 'relative'
    }} />
    </div>
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,j,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '300px',
    position: 'relative',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <FloatButton icon={<PlusIcon />} variant="default" style={{
        position: 'relative'
      }} />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Default</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <FloatButton icon={<PlusIcon />} variant="primary" style={{
        position: 'relative'
      }} />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Primary</span>
      </div>
    </div>
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var I,B,F;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '300px',
    position: 'relative'
  }}>
      <FloatButton icon={<MessageIcon />} badge={5} />
    </div>
}`,...(F=(B=a.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var S,P,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    position: 'relative'
  }}>
      <FloatButtonGroup trigger="hover" icon={<PlusIcon />}>
        <FloatButton icon={<MessageIcon />} tooltip="Message" />
        <FloatButton icon={<PlusIcon />} tooltip="Add" />
      </FloatButtonGroup>
    </div>
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const A=["Default","WithTooltip","Shapes","Variants","WithBadge","Group"];export{s as Default,l as Group,r as Shapes,n as Variants,a as WithBadge,i as WithTooltip,A as __namedExportsOrder,k as default};
