import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as l}from"./index-DRjF_FHU.js";import{C as a,D as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const A={title:"Navigation/BottomNavigation",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},s={render:()=>{const[i,o]=l.useState("home");return e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("div",{style:{padding:"1rem"},children:e.jsxs("p",{children:["Active: ",i]})}),e.jsxs(a,{activeKey:i,onChange:o,children:[e.jsx(t,{itemKey:"home",icon:"🏠",label:"Home"}),e.jsx(t,{itemKey:"search",icon:"🔍",label:"Search"}),e.jsx(t,{itemKey:"favorites",icon:"❤️",label:"Favorites"}),e.jsx(t,{itemKey:"profile",icon:"👤",label:"Profile"})]})]})}},r={render:()=>{const[i,o]=l.useState("home");return e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsxs(a,{activeKey:i,onChange:o,children:[e.jsx(t,{itemKey:"home",icon:"🏠",label:"Home"}),e.jsx(t,{itemKey:"messages",icon:"💬",label:"Messages",badge:3}),e.jsx(t,{itemKey:"notifications",icon:"🔔",label:"Alerts",badge:12}),e.jsx(t,{itemKey:"profile",icon:"👤",label:"Profile"})]})})}},n={render:()=>{const[i,o]=l.useState("home");return e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsxs(a,{activeKey:i,onChange:o,showLabels:!1,children:[e.jsx(t,{itemKey:"home",icon:"🏠",label:"Home"}),e.jsx(t,{itemKey:"search",icon:"🔍",label:"Search"}),e.jsx(t,{itemKey:"add",icon:"➕",label:"Add"}),e.jsx(t,{itemKey:"favorites",icon:"❤️",label:"Favorites"}),e.jsx(t,{itemKey:"profile",icon:"👤",label:"Profile"})]})})}},m={render:()=>{const[i,o]=l.useState("home");return e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsxs(a,{activeKey:i,onChange:o,children:[e.jsx(t,{itemKey:"home",icon:"🏠",label:"Home"}),e.jsx(t,{itemKey:"explore",icon:"🧭",label:"Explore"}),e.jsx(t,{itemKey:"add",icon:"➕",label:"Create"}),e.jsx(t,{itemKey:"inbox",icon:"📥",label:"Inbox"}),e.jsx(t,{itemKey:"profile",icon:"👤",label:"Profile"})]})})}};var c,v,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('home');
    return <div style={{
      height: '400px',
      position: 'relative'
    }}>
        <div style={{
        padding: '1rem'
      }}>
          <p>Active: {active}</p>
        </div>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="search" icon="🔍" label="Search" />
          <BottomNavigationItem itemKey="favorites" icon="❤️" label="Favorites" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>;
  }
}`,...(d=(v=s.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var h,g,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('home');
    return <div style={{
      height: '400px',
      position: 'relative'
    }}>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="messages" icon="💬" label="Messages" badge={3} />
          <BottomNavigationItem itemKey="notifications" icon="🔔" label="Alerts" badge={12} />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>;
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var y,x,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('home');
    return <div style={{
      height: '400px',
      position: 'relative'
    }}>
        <BottomNavigation activeKey={active} onChange={setActive} showLabels={false}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="search" icon="🔍" label="Search" />
          <BottomNavigationItem itemKey="add" icon="➕" label="Add" />
          <BottomNavigationItem itemKey="favorites" icon="❤️" label="Favorites" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>;
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var K,u,f;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('home');
    return <div style={{
      height: '400px',
      position: 'relative'
    }}>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="explore" icon="🧭" label="Explore" />
          <BottomNavigationItem itemKey="add" icon="➕" label="Create" />
          <BottomNavigationItem itemKey="inbox" icon="📥" label="Inbox" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>;
  }
}`,...(f=(u=m.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const S=["Default","WithBadges","WithoutLabels","FiveItems"];export{s as Default,m as FiveItems,r as WithBadges,n as WithoutLabels,S as __namedExportsOrder,A as default};
