import{j as e}from"./jsx-runtime-DiklIkkE.js";import{m as n,n as r,o as t,p as a,B as u,q as f,r as C}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const H={title:"Components/AppShell",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},l={render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(r,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"0 1rem",height:"100%"},children:e.jsx("h2",{children:"Logo"})})}),e.jsx(t,{children:e.jsx("nav",{style:{padding:"1rem"},children:e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e.jsx("li",{style:{padding:"0.5rem 0"},children:"Dashboard"}),e.jsx("li",{style:{padding:"0.5rem 0"},children:"Users"}),e.jsx("li",{style:{padding:"0.5rem 0"},children:"Settings"})]})})}),e.jsx(a,{children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h1",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area of the application."})]})})]})},i={render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 1rem",height:"100%"},children:[e.jsx("h2",{children:"MyApp"}),e.jsx(u,{size:"sm",children:"Profile"})]})}),e.jsx(t,{children:e.jsx("nav",{style:{padding:"1rem"},children:"Navigation"})}),e.jsx(a,{children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h1",{children:"Main Content"}),e.jsx("p",{children:"Content with aside panel."})]})}),e.jsx(f,{children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Aside"}),e.jsx("p",{children:"Additional information"})]})})]})},s={render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(r,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"0 1rem",height:"100%"},children:e.jsx("h2",{children:"App with Footer"})})}),e.jsx(a,{children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h1",{children:"Main Content"}),e.jsx("p",{children:"This layout includes a footer."})]})}),e.jsx(C,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx("p",{children:"© 2024 MyApp. All rights reserved."})})})]})},d={render:()=>e.jsxs(n,{style:{height:"400px"},navbarCollapsed:!0,children:[e.jsx(r,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"0 1rem",height:"100%"},children:e.jsx("h2",{children:"Collapsed Nav"})})}),e.jsx(t,{collapsed:!0,children:e.jsxs("nav",{style:{padding:"0.5rem",textAlign:"center"},children:[e.jsx("div",{children:"🏠"}),e.jsx("div",{children:"👤"}),e.jsx("div",{children:"⚙️"})]})}),e.jsx(a,{children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h1",{children:"Collapsed Navigation"}),e.jsx("p",{children:"The navbar is in collapsed state showing only icons."})]})})]})};var p,h,o;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <AppShell style={{
    height: '400px'
  }}>
      <AppShellHeader>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        height: '100%'
      }}>
          <h2>Logo</h2>
        </div>
      </AppShellHeader>
      <AppShellNavbar>
        <nav style={{
        padding: '1rem'
      }}>
          <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
            <li style={{
            padding: '0.5rem 0'
          }}>Dashboard</li>
            <li style={{
            padding: '0.5rem 0'
          }}>Users</li>
            <li style={{
            padding: '0.5rem 0'
          }}>Settings</li>
          </ul>
        </nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{
        padding: '1rem'
      }}>
          <h1>Main Content</h1>
          <p>This is the main content area of the application.</p>
        </div>
      </AppShellMain>
    </AppShell>
}`,...(o=(h=l.parameters)==null?void 0:h.docs)==null?void 0:o.source}}};var c,g,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <AppShell style={{
    height: '400px'
  }}>
      <AppShellHeader>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        height: '100%'
      }}>
          <h2>MyApp</h2>
          <Button size="sm">Profile</Button>
        </div>
      </AppShellHeader>
      <AppShellNavbar>
        <nav style={{
        padding: '1rem'
      }}>Navigation</nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{
        padding: '1rem'
      }}>
          <h1>Main Content</h1>
          <p>Content with aside panel.</p>
        </div>
      </AppShellMain>
      <AppShellAside>
        <div style={{
        padding: '1rem'
      }}>
          <h3>Aside</h3>
          <p>Additional information</p>
        </div>
      </AppShellAside>
    </AppShell>
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,v,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AppShell style={{
    height: '400px'
  }}>
      <AppShellHeader>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        height: '100%'
      }}>
          <h2>App with Footer</h2>
        </div>
      </AppShellHeader>
      <AppShellMain>
        <div style={{
        padding: '1rem'
      }}>
          <h1>Main Content</h1>
          <p>This layout includes a footer.</p>
        </div>
      </AppShellMain>
      <AppShellFooter>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
          <p>© 2024 MyApp. All rights reserved.</p>
        </div>
      </AppShellFooter>
    </AppShell>
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,j,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AppShell style={{
    height: '400px'
  }} navbarCollapsed>
      <AppShellHeader>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        height: '100%'
      }}>
          <h2>Collapsed Nav</h2>
        </div>
      </AppShellHeader>
      <AppShellNavbar collapsed>
        <nav style={{
        padding: '0.5rem',
        textAlign: 'center'
      }}>
          <div>🏠</div>
          <div>👤</div>
          <div>⚙️</div>
        </nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{
        padding: '1rem'
      }}>
          <h1>Collapsed Navigation</h1>
          <p>The navbar is in collapsed state showing only icons.</p>
        </div>
      </AppShellMain>
    </AppShell>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const w=["Default","WithAside","WithFooter","CollapsedNavbar"];export{d as CollapsedNavbar,l as Default,i as WithAside,s as WithFooter,w as __namedExportsOrder,H as default};
