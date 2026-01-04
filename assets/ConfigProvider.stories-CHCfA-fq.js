import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a8 as r,B as o,I as i,a9 as R}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const k={title:"Utility/ConfigProvider",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{children:"Default Button"}),e.jsx(i,{placeholder:"Default Input"}),e.jsxs(R,{style:{width:"200px"},children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"})]})]})})},n={render:()=>e.jsx(r,{theme:{primaryColor:"#722ed1",borderRadius:"8px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{colorScheme:"primary",children:"Themed Button"}),e.jsx(i,{placeholder:"Themed Input"})]})})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{componentSize:"sm",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h4",{children:"Small"}),e.jsx(o,{children:"Small Button"}),e.jsx(i,{placeholder:"Small Input"})]})}),e.jsx(r,{componentSize:"md",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h4",{children:"Medium"}),e.jsx(o,{children:"Medium Button"}),e.jsx(i,{placeholder:"Medium Input"})]})}),e.jsx(r,{componentSize:"lg",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h4",{children:"Large"}),e.jsx(o,{children:"Large Button"}),e.jsx(i,{placeholder:"Large Input"})]})})]})},d={render:()=>e.jsx(r,{theme:{primaryColor:"#1890ff"},children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[e.jsx("h4",{children:"Outer Config (Blue)"}),e.jsx(o,{colorScheme:"primary",children:"Blue Button"}),e.jsx(r,{theme:{primaryColor:"#52c41a"},children:e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx("h4",{children:"Inner Config (Green)"}),e.jsx(o,{colorScheme:"primary",children:"Green Button"})]})})]})})},s={render:()=>e.jsx(r,{direction:"rtl",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",textAlign:"right"},children:[e.jsx("h4",{children:"Right-to-Left Layout"}),e.jsx(i,{placeholder:"RTL Input"}),e.jsx(o,{children:"RTL Button"})]})})},a={render:()=>e.jsx(r,{prefixCls:"zenkit",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{children:'Components use "zenkit" prefix for CSS classes'}),e.jsx(o,{children:"Prefixed Button"}),e.jsx(i,{placeholder:"Prefixed Input"})]})})};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ConfigProvider>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Button>Default Button</Button>
        <Input placeholder="Default Input" />
        <Select style={{
        width: '200px'
      }}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>
    </ConfigProvider>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ConfigProvider theme={{
    primaryColor: '#722ed1',
    borderRadius: '8px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Button colorScheme="primary">Themed Button</Button>
        <Input placeholder="Themed Input" />
      </div>
    </ConfigProvider>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,g,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <ConfigProvider componentSize="sm">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <h4>Small</h4>
          <Button>Small Button</Button>
          <Input placeholder="Small Input" />
        </div>
      </ConfigProvider>
      <ConfigProvider componentSize="md">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <h4>Medium</h4>
          <Button>Medium Button</Button>
          <Input placeholder="Medium Input" />
        </div>
      </ConfigProvider>
      <ConfigProvider componentSize="lg">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <h4>Large</h4>
          <Button>Large Button</Button>
          <Input placeholder="Large Input" />
        </div>
      </ConfigProvider>
    </div>
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,j,B;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ConfigProvider theme={{
    primaryColor: '#1890ff'
  }}>
      <div style={{
      padding: '1rem',
      border: '1px solid #e0e0e0',
      borderRadius: '8px'
    }}>
        <h4>Outer Config (Blue)</h4>
        <Button colorScheme="primary">Blue Button</Button>
        <ConfigProvider theme={{
        primaryColor: '#52c41a'
      }}>
          <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
            <h4>Inner Config (Green)</h4>
            <Button colorScheme="primary">Green Button</Button>
          </div>
        </ConfigProvider>
      </div>
    </ConfigProvider>
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,S,P;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ConfigProvider direction="rtl">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'right'
    }}>
        <h4>Right-to-Left Layout</h4>
        <Input placeholder="RTL Input" />
        <Button>RTL Button</Button>
      </div>
    </ConfigProvider>
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var I,D,L;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ConfigProvider prefixCls="zenkit">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p>Components use &quot;zenkit&quot; prefix for CSS classes</p>
        <Button>Prefixed Button</Button>
        <Input placeholder="Prefixed Input" />
      </div>
    </ConfigProvider>
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const M=["Default","CustomTheme","ComponentSize","Nested","RTL","PrefixCls"];export{l as ComponentSize,n as CustomTheme,t as Default,d as Nested,a as PrefixCls,s as RTL,M as __namedExportsOrder,k as default};
