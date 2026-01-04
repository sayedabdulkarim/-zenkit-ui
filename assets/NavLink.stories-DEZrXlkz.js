import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as _}from"./index-DRjF_FHU.js";import{bi as a,y as u}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const K={title:"Components/NavLink",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["subtle","light","filled"]},color:{control:"select",options:["primary","secondary","success","warning","error"]}}},i={args:{label:"Dashboard",href:"#"}},n={args:{label:"Settings",icon:"⚙️",href:"#"}},o={args:{label:"Messages",description:"3 unread messages",icon:"💬",href:"#"}},t={render:()=>{const[s,v]=_.useState("dashboard"),q=[{id:"dashboard",label:"Dashboard",icon:"🏠"},{id:"users",label:"Users",icon:"👥"},{id:"settings",label:"Settings",icon:"⚙️"},{id:"analytics",label:"Analytics",icon:"📊"}];return e.jsx("div",{style:{width:"250px"},children:q.map(r=>e.jsx(a,{label:r.label,icon:r.icon,active:s===r.id,onClick:()=>v(r.id)},r.id))})}},l={render:()=>{const[s,v]=_.useState(!0);return e.jsxs("div",{style:{width:"250px"},children:[e.jsxs(a,{label:"Products",icon:"📦",opened:s,onClick:()=>v(!s),children:[e.jsx(a,{label:"All Products"}),e.jsx(a,{label:"Categories"}),e.jsx(a,{label:"Inventory"})]}),e.jsx(a,{label:"Orders",icon:"📋"}),e.jsx(a,{label:"Customers",icon:"👤"})]})}},c={render:()=>e.jsxs("div",{style:{width:"250px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{label:"Subtle (default)",icon:"📌",variant:"subtle",active:!0}),e.jsx(a,{label:"Light",icon:"📌",variant:"light",active:!0}),e.jsx(a,{label:"Filled",icon:"📌",variant:"filled",active:!0})]})},d={render:()=>e.jsxs("div",{style:{width:"250px"},children:[e.jsx(a,{label:"Inbox",icon:"📥",rightSection:e.jsx(u,{color:"primary",children:"5"})}),e.jsx(a,{label:"Drafts",icon:"📝",rightSection:e.jsx(u,{color:"secondary",children:"2"})}),e.jsx(a,{label:"Sent",icon:"📤"}),e.jsx(a,{label:"Trash",icon:"🗑️",rightSection:"⚠️"})]})},b={render:()=>e.jsxs("div",{style:{width:"250px"},children:[e.jsx(a,{label:"Primary",color:"primary",active:!0}),e.jsx(a,{label:"Secondary",color:"secondary",active:!0}),e.jsx(a,{label:"Success",color:"success",active:!0}),e.jsx(a,{label:"Warning",color:"warning",active:!0}),e.jsx(a,{label:"Error",color:"error",active:!0})]})},p={render:()=>e.jsxs("div",{style:{width:"250px"},children:[e.jsx(a,{label:"Available",icon:"✅"}),e.jsx(a,{label:"Disabled",icon:"🚫",disabled:!0}),e.jsx(a,{label:"Also Available",icon:"✅"})]})};var m,h,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Dashboard',
    href: '#'
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,y,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Settings',
    icon: '⚙️',
    href: '#'
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,j,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Messages',
    description: '3 unread messages',
    icon: '💬',
    href: '#'
  }
}`,...(L=(j=o.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var N,f,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('dashboard');
    const links = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '🏠'
    }, {
      id: 'users',
      label: 'Users',
      icon: '👥'
    }, {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️'
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: '📊'
    }];
    return <div style={{
      width: '250px'
    }}>
        {links.map(link => <NavLink key={link.id} label={link.label} icon={link.icon} active={active === link.id} onClick={() => setActive(link.id)} />)}
      </div>;
  }
}`,...(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,A,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [opened, setOpened] = useState(true);
    return <div style={{
      width: '250px'
    }}>
        <NavLink label="Products" icon="📦" opened={opened} onClick={() => setOpened(!opened)}>
          <NavLink label="All Products" />
          <NavLink label="Categories" />
          <NavLink label="Inventory" />
        </NavLink>
        <NavLink label="Orders" icon="📋" />
        <NavLink label="Customers" icon="👤" />
      </div>;
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,I,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <NavLink label="Subtle (default)" icon="📌" variant="subtle" active />
      <NavLink label="Light" icon="📌" variant="light" active />
      <NavLink label="Filled" icon="📌" variant="filled" active />
    </div>
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var P,B,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <NavLink label="Inbox" icon="📥" rightSection={<Badge color="primary">5</Badge>} />
      <NavLink label="Drafts" icon="📝" rightSection={<Badge color="secondary">2</Badge>} />
      <NavLink label="Sent" icon="📤" />
      <NavLink label="Trash" icon="🗑️" rightSection="⚠️" />
    </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var R,T,F;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <NavLink label="Primary" color="primary" active />
      <NavLink label="Secondary" color="secondary" active />
      <NavLink label="Success" color="success" active />
      <NavLink label="Warning" color="warning" active />
      <NavLink label="Error" color="error" active />
    </div>
}`,...(F=(T=b.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var M,U,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <NavLink label="Available" icon="✅" />
      <NavLink label="Disabled" icon="🚫" disabled />
      <NavLink label="Also Available" icon="✅" />
    </div>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Q=["Default","WithIcon","WithDescription","Active","Nested","Variants","WithRightSection","Colors","Disabled"];export{t as Active,b as Colors,i as Default,p as Disabled,l as Nested,c as Variants,o as WithDescription,n as WithIcon,d as WithRightSection,Q as __namedExportsOrder,K as default};
