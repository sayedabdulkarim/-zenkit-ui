import{j as e}from"./jsx-runtime-DiklIkkE.js";import{b7 as n,b8 as t,b9 as m,ba as g,bb as u}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Components/Menu",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"]}}},i={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsxs(n,{defaultActiveKey:"home",children:[e.jsx(t,{itemKey:"home",icon:e.jsx("span",{children:"🏠"}),children:"Home"}),e.jsx(t,{itemKey:"dashboard",icon:e.jsx("span",{children:"📊"}),children:"Dashboard"}),e.jsxs(m,{subKey:"settings",title:"Settings",icon:e.jsx("span",{children:"⚙️"}),children:[e.jsx(t,{itemKey:"profile",children:"Profile"}),e.jsx(t,{itemKey:"account",children:"Account"}),e.jsx(t,{itemKey:"security",children:"Security"})]}),e.jsx(g,{}),e.jsx(t,{itemKey:"logout",icon:e.jsx("span",{children:"🚪"}),children:"Logout"})]})})},s={render:()=>e.jsxs(n,{mode:"horizontal",defaultActiveKey:"home",children:[e.jsx(t,{itemKey:"home",children:"Home"}),e.jsx(t,{itemKey:"products",children:"Products"}),e.jsx(t,{itemKey:"about",children:"About"}),e.jsx(t,{itemKey:"contact",children:"Contact"})]})},r={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsxs(n,{mode:"inline",defaultActiveKey:"dashboard",defaultOpenKeys:["reports"],children:[e.jsx(t,{itemKey:"dashboard",icon:e.jsx("span",{children:"📊"}),children:"Dashboard"}),e.jsxs(m,{subKey:"reports",title:"Reports",icon:e.jsx("span",{children:"📈"}),children:[e.jsx(t,{itemKey:"sales",children:"Sales Report"}),e.jsx(t,{itemKey:"analytics",children:"Analytics"}),e.jsx(t,{itemKey:"traffic",children:"Traffic"})]}),e.jsxs(m,{subKey:"users",title:"Users",icon:e.jsx("span",{children:"👥"}),children:[e.jsx(t,{itemKey:"list",children:"User List"}),e.jsx(t,{itemKey:"roles",children:"Roles"})]}),e.jsx(t,{itemKey:"settings",icon:e.jsx("span",{children:"⚙️"}),children:"Settings"})]})})},o={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsxs(n,{defaultActiveKey:"inbox",children:[e.jsxs(u,{title:"Main",children:[e.jsx(t,{itemKey:"inbox",children:"Inbox"}),e.jsx(t,{itemKey:"starred",children:"Starred"}),e.jsx(t,{itemKey:"sent",children:"Sent"})]}),e.jsxs(u,{title:"Categories",children:[e.jsx(t,{itemKey:"work",children:"Work"}),e.jsx(t,{itemKey:"personal",children:"Personal"}),e.jsx(t,{itemKey:"social",children:"Social"})]})]})})},a={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsxs(n,{defaultActiveKey:"home",children:[e.jsx(t,{itemKey:"home",children:"Home"}),e.jsx(t,{itemKey:"active",children:"Active Page"}),e.jsx(t,{itemKey:"disabled",disabled:!0,children:"Disabled Item"}),e.jsx(m,{subKey:"more",title:"More Options",disabled:!0,children:e.jsx(t,{itemKey:"option1",children:"Option 1"})})]})})};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <Menu defaultActiveKey="home">
        <MenuItem itemKey="home" icon={<span>🏠</span>}>Home</MenuItem>
        <MenuItem itemKey="dashboard" icon={<span>📊</span>}>Dashboard</MenuItem>
        <SubMenu subKey="settings" title="Settings" icon={<span>⚙️</span>}>
          <MenuItem itemKey="profile">Profile</MenuItem>
          <MenuItem itemKey="account">Account</MenuItem>
          <MenuItem itemKey="security">Security</MenuItem>
        </SubMenu>
        <MenuDivider />
        <MenuItem itemKey="logout" icon={<span>🚪</span>}>Logout</MenuItem>
      </Menu>
    </div>
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,y,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Menu mode="horizontal" defaultActiveKey="home">
      <MenuItem itemKey="home">Home</MenuItem>
      <MenuItem itemKey="products">Products</MenuItem>
      <MenuItem itemKey="about">About</MenuItem>
      <MenuItem itemKey="contact">Contact</MenuItem>
    </Menu>
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var M,K,x;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <Menu mode="inline" defaultActiveKey="dashboard" defaultOpenKeys={['reports']}>
        <MenuItem itemKey="dashboard" icon={<span>📊</span>}>Dashboard</MenuItem>
        <SubMenu subKey="reports" title="Reports" icon={<span>📈</span>}>
          <MenuItem itemKey="sales">Sales Report</MenuItem>
          <MenuItem itemKey="analytics">Analytics</MenuItem>
          <MenuItem itemKey="traffic">Traffic</MenuItem>
        </SubMenu>
        <SubMenu subKey="users" title="Users" icon={<span>👥</span>}>
          <MenuItem itemKey="list">User List</MenuItem>
          <MenuItem itemKey="roles">Roles</MenuItem>
        </SubMenu>
        <MenuItem itemKey="settings" icon={<span>⚙️</span>}>Settings</MenuItem>
      </Menu>
    </div>
}`,...(x=(K=r.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var I,b,j;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <Menu defaultActiveKey="inbox">
        <MenuGroup title="Main">
          <MenuItem itemKey="inbox">Inbox</MenuItem>
          <MenuItem itemKey="starred">Starred</MenuItem>
          <MenuItem itemKey="sent">Sent</MenuItem>
        </MenuGroup>
        <MenuGroup title="Categories">
          <MenuItem itemKey="work">Work</MenuItem>
          <MenuItem itemKey="personal">Personal</MenuItem>
          <MenuItem itemKey="social">Social</MenuItem>
        </MenuGroup>
      </Menu>
    </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,S,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <Menu defaultActiveKey="home">
        <MenuItem itemKey="home">Home</MenuItem>
        <MenuItem itemKey="active">Active Page</MenuItem>
        <MenuItem itemKey="disabled" disabled>Disabled Item</MenuItem>
        <SubMenu subKey="more" title="More Options" disabled>
          <MenuItem itemKey="option1">Option 1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const G=["Vertical","Horizontal","Inline","WithGroups","WithDisabled"];export{s as Horizontal,r as Inline,i as Vertical,a as WithDisabled,o as WithGroups,G as __namedExportsOrder,P as default};
