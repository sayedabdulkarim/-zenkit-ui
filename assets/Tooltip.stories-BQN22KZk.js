import{j as t}from"./jsx-runtime-DiklIkkE.js";import{c_ as e,B as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Tooltip",component:e,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>t.jsx(e,{content:"This is a tooltip",children:t.jsx(o,{children:"Hover me"})})},n={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"3rem"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(e,{content:"Top tooltip",placement:"top",children:t.jsx(o,{children:"Top"})})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx(e,{content:"Left tooltip",placement:"left",children:t.jsx(o,{children:"Left"})}),t.jsx(e,{content:"Right tooltip",placement:"right",children:t.jsx(o,{children:"Right"})})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(e,{content:"Bottom tooltip",placement:"bottom",children:t.jsx(o,{children:"Bottom"})})})]})},s={render:()=>t.jsx(e,{content:"Appears after 500ms",delay:500,children:t.jsx(o,{children:"Hover (delayed)"})})},i={render:()=>t.jsx(e,{content:"Won't appear",disabled:!0,children:t.jsx(o,{children:"Disabled tooltip"})})},a={render:()=>t.jsx(e,{content:"No arrow",arrow:!1,children:t.jsx(o,{children:"No arrow"})})},l={render:()=>t.jsx(e,{content:"This is a longer tooltip content that provides more detailed information about the element.",children:t.jsx(o,{children:"Hover for details"})})};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '3rem'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Top tooltip" placement="top">
          <Button>Top</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <Tooltip content="Left tooltip" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
    </div>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Tooltip content="Appears after 500ms" delay={500}>
      <Button>Hover (delayed)</Button>
    </Tooltip>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,T,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tooltip content="Won't appear" disabled>
      <Button>Disabled tooltip</Button>
    </Tooltip>
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var g,v,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Tooltip content="No arrow" arrow={false}>
      <Button>No arrow</Button>
    </Tooltip>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,D,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a longer tooltip content that provides more detailed information about the element.">
      <Button>Hover for details</Button>
    </Tooltip>
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const A=["Default","Placements","WithDelay","Disabled","NoArrow","LongContent"];export{r as Default,i as Disabled,l as LongContent,a as NoArrow,n as Placements,s as WithDelay,A as __namedExportsOrder,R as default};
