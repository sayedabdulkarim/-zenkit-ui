import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a1 as n,a2 as a}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const w={title:"Components/Collapse",component:n,parameters:{layout:"padded"},tags:["autodocs"]},l={render:()=>e.jsxs(n,{defaultActiveKey:"1",children:[e.jsx(a,{panelKey:"1",header:"Panel 1",children:e.jsx("p",{children:"Content for panel 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}),e.jsx(a,{panelKey:"2",header:"Panel 2",children:e.jsx("p",{children:"Content for panel 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}),e.jsx(a,{panelKey:"3",header:"Panel 3",children:e.jsx("p",{children:"Content for panel 3. Ut enim ad minim veniam, quis nostrud exercitation."})})]})},r={render:()=>e.jsxs(n,{accordion:!0,defaultActiveKey:"1",children:[e.jsx(a,{panelKey:"1",header:"Section 1",children:e.jsx("p",{children:"Only one panel can be open at a time in accordion mode."})}),e.jsx(a,{panelKey:"2",header:"Section 2",children:e.jsx("p",{children:"Opening this will close the other panels."})}),e.jsx(a,{panelKey:"3",header:"Section 3",children:e.jsx("p",{children:"Click on headers to toggle panels."})})]})},o={render:()=>e.jsxs(n,{defaultActiveKey:"1",children:[e.jsx(a,{panelKey:"1",header:"Active Panel",children:e.jsx("p",{children:"This panel is active and functional."})}),e.jsx(a,{panelKey:"2",header:"Disabled Panel",disabled:!0,children:e.jsx("p",{children:"This content won't be visible."})}),e.jsx(a,{panelKey:"3",header:"Another Panel",children:e.jsx("p",{children:"This panel is also functional."})})]})},s={render:()=>e.jsxs(n,{defaultActiveKey:"1",children:[e.jsx(a,{panelKey:"1",header:"Settings",extra:e.jsx("span",{onClick:t=>t.stopPropagation(),children:"⚙️"}),children:e.jsx("p",{children:"Configure your settings here."})}),e.jsx(a,{panelKey:"2",header:"Notifications",extra:e.jsx("span",{onClick:t=>t.stopPropagation(),children:"🔔"}),children:e.jsx("p",{children:"Manage your notifications."})})]})},i={render:()=>e.jsxs(n,{bordered:!1,defaultActiveKey:"1",children:[e.jsx(a,{panelKey:"1",header:"Borderless Panel 1",children:e.jsx("p",{children:"A cleaner look without borders."})}),e.jsx(a,{panelKey:"2",header:"Borderless Panel 2",children:e.jsx("p",{children:"Suitable for minimal designs."})})]})};var p,d,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Collapse defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Panel 1">
        <p>Content for panel 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Panel 2">
        <p>Content for panel 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Panel 3">
        <p>Content for panel 3. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </CollapsePanel>
    </Collapse>
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,u,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Collapse accordion defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Section 1">
        <p>Only one panel can be open at a time in accordion mode.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Section 2">
        <p>Opening this will close the other panels.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Section 3">
        <p>Click on headers to toggle panels.</p>
      </CollapsePanel>
    </Collapse>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var C,P,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Collapse defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Active Panel">
        <p>This panel is active and functional.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Disabled Panel" disabled>
        <p>This content won't be visible.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Another Panel">
        <p>This panel is also functional.</p>
      </CollapsePanel>
    </Collapse>
}`,...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var y,K,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Collapse defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Settings" extra={<span onClick={e => e.stopPropagation()}>⚙️</span>}>
        <p>Configure your settings here.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Notifications" extra={<span onClick={e => e.stopPropagation()}>🔔</span>}>
        <p>Manage your notifications.</p>
      </CollapsePanel>
    </Collapse>
}`,...(f=(K=s.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};var j,g,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Collapse bordered={false} defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Borderless Panel 1">
        <p>A cleaner look without borders.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Borderless Panel 2">
        <p>Suitable for minimal designs.</p>
      </CollapsePanel>
    </Collapse>
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const B=["Default","Accordion","WithDisabled","WithExtra","Borderless"];export{r as Accordion,i as Borderless,l as Default,o as WithDisabled,s as WithExtra,B as __namedExportsOrder,w as default};
