import{j as e}from"./jsx-runtime-DiklIkkE.js";import{l as r,B as o,I as A}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const k={title:"Components/AppBar",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{control:"select",options:["static","fixed","sticky"]},variant:{control:"select",options:["default","transparent","blur"]},color:{control:"select",options:["default","primary","dark"]}}},t={render:()=>e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 1rem"},children:[e.jsx("h2",{children:"MyApp"}),e.jsxs("nav",{style:{display:"flex",gap:"1rem"},children:[e.jsx("a",{href:"#",children:"Home"}),e.jsx("a",{href:"#",children:"About"}),e.jsx("a",{href:"#",children:"Contact"})]}),e.jsx(o,{size:"sm",children:"Sign In"})]})})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{color:"default",children:e.jsx("div",{style:{padding:"0 1rem"},children:"Default Color AppBar"})}),e.jsx(r,{color:"primary",children:e.jsx("div",{style:{padding:"0 1rem",color:"white"},children:"Primary Color AppBar"})}),e.jsx(r,{color:"dark",children:e.jsx("div",{style:{padding:"0 1rem",color:"white"},children:"Dark Color AppBar"})})]})},s={render:()=>e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 1rem"},children:[e.jsx("h2",{children:"Logo"}),e.jsx(A,{placeholder:"Search...",style:{width:"300px"}}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(o,{variant:"outline",size:"sm",children:"Log In"}),e.jsx(o,{size:"sm",children:"Sign Up"})]})]})})},i={render:()=>e.jsx("div",{style:{height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:e.jsx(r,{variant:"transparent",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 1rem",color:"white"},children:[e.jsx("h2",{children:"Transparent"}),e.jsxs("nav",{style:{display:"flex",gap:"1rem"},children:[e.jsx("a",{href:"#",style:{color:"white"},children:"Home"}),e.jsx("a",{href:"#",style:{color:"white"},children:"About"})]})]})})})},n={render:()=>e.jsx("div",{style:{position:"relative",height:"200px",background:"url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800) center/cover"},children:e.jsx(r,{variant:"blur",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 1rem"},children:[e.jsx("h2",{children:"Blur Effect"}),e.jsx(o,{size:"sm",children:"Action"})]})})})};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <AppBar>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '0 1rem'
    }}>
        <h2>MyApp</h2>
        <nav style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <Button size="sm">Sign In</Button>
      </div>
    </AppBar>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,h,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <AppBar color="default">
        <div style={{
        padding: '0 1rem'
      }}>Default Color AppBar</div>
      </AppBar>
      <AppBar color="primary">
        <div style={{
        padding: '0 1rem',
        color: 'white'
      }}>Primary Color AppBar</div>
      </AppBar>
      <AppBar color="dark">
        <div style={{
        padding: '0 1rem',
        color: 'white'
      }}>Dark Color AppBar</div>
      </AppBar>
    </div>
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,y,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AppBar>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '0 1rem'
    }}>
        <h2>Logo</h2>
        <Input placeholder="Search..." style={{
        width: '300px'
      }} />
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button variant="outline" size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </AppBar>
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,f,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }}>
      <AppBar variant="transparent">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 1rem',
        color: 'white'
      }}>
          <h2>Transparent</h2>
          <nav style={{
          display: 'flex',
          gap: '1rem'
        }}>
            <a href="#" style={{
            color: 'white'
          }}>Home</a>
            <a href="#" style={{
            color: 'white'
          }}>About</a>
          </nav>
        </div>
      </AppBar>
    </div>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,B,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    height: '200px',
    background: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800) center/cover'
  }}>
      <AppBar variant="blur">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 1rem'
      }}>
          <h2>Blur Effect</h2>
          <Button size="sm">Action</Button>
        </div>
      </AppBar>
    </div>
}`,...(w=(B=n.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const z=["Default","Colors","WithSearch","Transparent","Blur"];export{n as Blur,a as Colors,t as Default,i as Transparent,s as WithSearch,z as __namedExportsOrder,k as default};
