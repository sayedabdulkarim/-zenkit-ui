import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cG as n,cH as s,cI as a,cJ as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Components/Tabs",component:n,parameters:{layout:"padded"},tags:["autodocs"]},i={render:()=>e.jsxs(n,{defaultActiveKey:"tab1",children:[e.jsxs(s,{children:[e.jsx(a,{tabKey:"tab1",children:"Home"}),e.jsx(a,{tabKey:"tab2",children:"Profile"}),e.jsx(a,{tabKey:"tab3",children:"Settings"})]}),e.jsx(t,{tabKey:"tab1",children:e.jsx("div",{style:{padding:"1rem"},children:"Home content goes here"})}),e.jsx(t,{tabKey:"tab2",children:e.jsx("div",{style:{padding:"1rem"},children:"Profile content goes here"})}),e.jsx(t,{tabKey:"tab3",children:e.jsx("div",{style:{padding:"1rem"},children:"Settings content goes here"})})]})},r={render:()=>e.jsxs(n,{defaultActiveKey:"tab1",variant:"pills",children:[e.jsxs(s,{children:[e.jsx(a,{tabKey:"tab1",children:"Home"}),e.jsx(a,{tabKey:"tab2",children:"Profile"}),e.jsx(a,{tabKey:"tab3",children:"Settings"})]}),e.jsx(t,{tabKey:"tab1",children:e.jsx("div",{style:{padding:"1rem"},children:"Home content"})}),e.jsx(t,{tabKey:"tab2",children:e.jsx("div",{style:{padding:"1rem"},children:"Profile content"})}),e.jsx(t,{tabKey:"tab3",children:e.jsx("div",{style:{padding:"1rem"},children:"Settings content"})})]})},d={render:()=>e.jsxs(n,{defaultActiveKey:"tab1",variant:"underline",children:[e.jsxs(s,{children:[e.jsx(a,{tabKey:"tab1",children:"Home"}),e.jsx(a,{tabKey:"tab2",children:"Profile"}),e.jsx(a,{tabKey:"tab3",children:"Settings"})]}),e.jsx(t,{tabKey:"tab1",children:e.jsx("div",{style:{padding:"1rem"},children:"Home content"})}),e.jsx(t,{tabKey:"tab2",children:e.jsx("div",{style:{padding:"1rem"},children:"Profile content"})}),e.jsx(t,{tabKey:"tab3",children:e.jsx("div",{style:{padding:"1rem"},children:"Settings content"})})]})},b={render:()=>e.jsxs(n,{defaultActiveKey:"tab1",children:[e.jsxs(s,{children:[e.jsx(a,{tabKey:"tab1",children:"Active"}),e.jsx(a,{tabKey:"tab2",disabled:!0,children:"Disabled"}),e.jsx(a,{tabKey:"tab3",children:"Another"})]}),e.jsx(t,{tabKey:"tab1",children:e.jsx("div",{style:{padding:"1rem"},children:"Active tab content"})}),e.jsx(t,{tabKey:"tab3",children:e.jsx("div",{style:{padding:"1rem"},children:"Another tab content"})})]})},l={render:()=>e.jsxs(n,{defaultActiveKey:"home",children:[e.jsxs(s,{children:[e.jsx(a,{tabKey:"home",icon:e.jsx("span",{children:"🏠"}),children:"Home"}),e.jsx(a,{tabKey:"user",icon:e.jsx("span",{children:"👤"}),children:"Profile"}),e.jsx(a,{tabKey:"settings",icon:e.jsx("span",{children:"⚙️"}),children:"Settings"})]}),e.jsx(t,{tabKey:"home",children:e.jsx("div",{style:{padding:"1rem"},children:"Home content"})}),e.jsx(t,{tabKey:"user",children:e.jsx("div",{style:{padding:"1rem"},children:"Profile content"})}),e.jsx(t,{tabKey:"settings",children:e.jsx("div",{style:{padding:"1rem"},children:"Settings content"})})]})};var c,o,y;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="tab1">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{
        padding: '1rem'
      }}>Home content goes here</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{
        padding: '1rem'
      }}>Profile content goes here</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{
        padding: '1rem'
      }}>Settings content goes here</div>
      </TabPanel>
    </Tabs>
}`,...(y=(o=i.parameters)==null?void 0:o.docs)==null?void 0:y.source}}};var T,m,h;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="tab1" variant="pills">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{
        padding: '1rem'
      }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{
        padding: '1rem'
      }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{
        padding: '1rem'
      }}>Settings content</div>
      </TabPanel>
    </Tabs>
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,K,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="tab1" variant="underline">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{
        padding: '1rem'
      }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{
        padding: '1rem'
      }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{
        padding: '1rem'
      }}>Settings content</div>
      </TabPanel>
    </Tabs>
}`,...(g=(K=d.parameters)==null?void 0:K.docs)==null?void 0:g.source}}};var v,x,j;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="tab1">
      <TabList>
        <Tab tabKey="tab1">Active</Tab>
        <Tab tabKey="tab2" disabled>Disabled</Tab>
        <Tab tabKey="tab3">Another</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{
        padding: '1rem'
      }}>Active tab content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{
        padding: '1rem'
      }}>Another tab content</div>
      </TabPanel>
    </Tabs>
}`,...(j=(x=b.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var P,u,f;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="home">
      <TabList>
        <Tab tabKey="home" icon={<span>🏠</span>}>Home</Tab>
        <Tab tabKey="user" icon={<span>👤</span>}>Profile</Tab>
        <Tab tabKey="settings" icon={<span>⚙️</span>}>Settings</Tab>
      </TabList>
      <TabPanel tabKey="home">
        <div style={{
        padding: '1rem'
      }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="user">
        <div style={{
        padding: '1rem'
      }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="settings">
        <div style={{
        padding: '1rem'
      }}>Settings content</div>
      </TabPanel>
    </Tabs>
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const W=["Default","Pills","Underline","WithDisabled","WithIcons"];export{i as Default,r as Pills,d as Underline,b as WithDisabled,l as WithIcons,W as __namedExportsOrder,D as default};
