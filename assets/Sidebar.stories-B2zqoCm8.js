import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c4 as t,c5 as d,c6 as a,c7 as h,c8 as i,c9 as C}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const F={title:"Navigation/Sidebar",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},o=()=>e.jsx("span",{children:"🏠"}),c=()=>e.jsx("span",{children:"👥"}),y=()=>e.jsx("span",{children:"⚙️"}),l=()=>e.jsx("span",{children:"📄"}),x=()=>e.jsx("span",{children:"📊"}),n={render:()=>e.jsxs("div",{style:{display:"flex",height:"500px"},children:[e.jsxs(t,{children:[e.jsx(d,{children:e.jsx("strong",{children:"Dashboard"})}),e.jsxs(a,{children:[e.jsxs(h,{title:"Menu",children:[e.jsx(i,{icon:e.jsx(o,{}),active:!0,children:"Home"}),e.jsx(i,{icon:e.jsx(c,{}),children:"Users"}),e.jsx(i,{icon:e.jsx(l,{}),children:"Documents"}),e.jsx(i,{icon:e.jsx(x,{}),children:"Analytics"})]}),e.jsx(h,{title:"Settings",children:e.jsx(i,{icon:e.jsx(y,{}),children:"Settings"})})]}),e.jsx(C,{children:e.jsx(i,{children:"Logout"})})]}),e.jsxs("div",{style:{flex:1,padding:"1rem"},children:[e.jsx("h2",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area."})]})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",height:"500px"},children:[e.jsxs(t,{collapsed:!0,children:[e.jsx(d,{children:e.jsx("strong",{children:"D"})}),e.jsxs(a,{children:[e.jsx(i,{icon:e.jsx(o,{})}),e.jsx(i,{icon:e.jsx(c,{})}),e.jsx(i,{icon:e.jsx(l,{})}),e.jsx(i,{icon:e.jsx(x,{})}),e.jsx(i,{icon:e.jsx(y,{})})]})]}),e.jsx("div",{style:{flex:1,padding:"1rem"},children:e.jsx("h2",{children:"Main Content"})})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",height:"500px"},children:[e.jsxs(t,{children:[e.jsx(d,{children:e.jsx("strong",{children:"App"})}),e.jsxs(a,{children:[e.jsx(i,{icon:e.jsx(o,{}),active:!0,children:"Home"}),e.jsx(i,{icon:e.jsx(c,{}),badge:5,children:"Users"}),e.jsx(i,{icon:e.jsx(l,{}),badge:"New",children:"Documents"}),e.jsx(i,{icon:e.jsx(x,{}),children:"Analytics"})]})]}),e.jsx("div",{style:{flex:1,padding:"1rem"},children:"Content"})]})};var m,S,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '500px'
  }}>
      <Sidebar>
        <SidebarHeader>
          <strong>Dashboard</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup title="Menu">
            <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Users</SidebarItem>
            <SidebarItem icon={<FileIcon />}>Documents</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="Settings">
            <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem>Logout</SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1rem'
    }}>
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
      </div>
    </div>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,p,I;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '500px'
  }}>
      <Sidebar collapsed>
        <SidebarHeader>
          <strong>D</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<HomeIcon />} />
          <SidebarItem icon={<UsersIcon />} />
          <SidebarItem icon={<FileIcon />} />
          <SidebarItem icon={<ChartIcon />} />
          <SidebarItem icon={<SettingsIcon />} />
        </SidebarContent>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1rem'
    }}>
        <h2>Main Content</h2>
      </div>
    </div>
}`,...(I=(p=r.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var g,u,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '500px'
  }}>
      <Sidebar>
        <SidebarHeader>
          <strong>App</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
          <SidebarItem icon={<UsersIcon />} badge={5}>Users</SidebarItem>
          <SidebarItem icon={<FileIcon />} badge="New">Documents</SidebarItem>
          <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
        </SidebarContent>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1rem'
    }}>Content</div>
    </div>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const A=["Default","Collapsed","WithBadges"];export{r as Collapsed,n as Default,s as WithBadges,A as __namedExportsOrder,F as default};
