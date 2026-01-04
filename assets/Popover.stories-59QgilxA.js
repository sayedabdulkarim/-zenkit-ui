import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bE as t,B as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Popover",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(t,{content:"This is popover content",children:e.jsx(o,{children:"Click me"})})},n={render:()=>e.jsx(t,{title:"Popover Title",content:"This is the popover body content with more details.",children:e.jsx(o,{children:"With Title"})})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"5rem"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(t,{content:"Top popover",placement:"top",children:e.jsx(o,{children:"Top"})})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{content:"Left popover",placement:"left",children:e.jsx(o,{children:"Left"})}),e.jsx(t,{content:"Right popover",placement:"right",children:e.jsx(o,{children:"Right"})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(t,{content:"Bottom popover",placement:"bottom",children:e.jsx(o,{children:"Bottom"})})})]})},i={render:()=>e.jsx(t,{content:"Hover triggered popover",trigger:"hover",children:e.jsx(o,{children:"Hover me"})})},c={render:()=>e.jsx(t,{title:"User Settings",content:e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 0.5rem"},children:"Manage your account settings and preferences."}),e.jsx(o,{size:"sm",children:"Go to Settings"})]}),children:e.jsx(o,{children:"Settings"})})};var p,a,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Popover content="This is popover content">
      <Button>Click me</Button>
    </Popover>
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,m,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Popover title="Popover Title" content="This is the popover body content with more details.">
      <Button>With Title</Button>
    </Popover>
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '5rem'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Popover content="Top popover" placement="top">
          <Button>Top</Button>
        </Popover>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <Popover content="Left popover" placement="left">
          <Button>Left</Button>
        </Popover>
        <Popover content="Right popover" placement="right">
          <Button>Right</Button>
        </Popover>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Popover content="Bottom popover" placement="bottom">
          <Button>Bottom</Button>
        </Popover>
      </div>
    </div>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,j,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Popover content="Hover triggered popover" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,B,P;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Popover title="User Settings" content={<div>
          <p style={{
      margin: '0 0 0.5rem'
    }}>Manage your account settings and preferences.</p>
          <Button size="sm">Go to Settings</Button>
        </div>}>
      <Button>Settings</Button>
    </Popover>
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const H=["Default","WithTitle","Placements","HoverTrigger","RichContent"];export{r as Default,i as HoverTrigger,s as Placements,c as RichContent,n as WithTitle,H as __namedExportsOrder,R as default};
