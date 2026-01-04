import{j as r}from"./jsx-runtime-DiklIkkE.js";import{bj as n,bk as c,bl as a,bm as e,B as v,bn as B}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const A={title:"Navigation/Navbar",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},t={render:()=>r.jsxs(n,{children:[r.jsx(c,{children:r.jsx("strong",{children:"ZenKit"})}),r.jsxs(a,{children:[r.jsx(e,{active:!0,children:"Home"}),r.jsx(e,{children:"Features"}),r.jsx(e,{children:"Pricing"}),r.jsx(e,{children:"About"})]}),r.jsxs(a,{justify:"end",children:[r.jsx(e,{children:r.jsx(v,{variant:"outline",size:"sm",children:"Login"})}),r.jsx(e,{children:r.jsx(v,{size:"sm",children:"Sign Up"})})]})]})},s={render:()=>r.jsxs("div",{style:{height:"200vh"},children:[r.jsxs(n,{position:"sticky",children:[r.jsx(c,{children:r.jsx("strong",{children:"ZenKit"})}),r.jsxs(a,{children:[r.jsx(e,{active:!0,children:"Home"}),r.jsx(e,{children:"About"}),r.jsx(e,{children:"Contact"})]})]}),r.jsxs("div",{style:{padding:"2rem"},children:[r.jsx("p",{children:"Scroll down to see sticky navbar..."}),Array.from({length:20}).map((C,d)=>r.jsxs("p",{children:["Content line ",d+1]},d))]})]})},o={render:()=>r.jsxs(n,{bordered:!0,children:[r.jsx(c,{children:r.jsx("strong",{children:"ZenKit"})}),r.jsxs(a,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Products"}),r.jsx(e,{children:"Services"})]})]})},i={render:()=>r.jsxs(n,{children:[r.jsx(c,{children:r.jsx("strong",{children:"ZenKit"})}),r.jsxs(a,{children:[r.jsx(e,{active:!0,children:"Home"}),r.jsx(B,{trigger:r.jsx(e,{children:"Products ▼"}),items:[{key:"1",label:"Product A"},{key:"2",label:"Product B"},{key:"3",label:"Product C"}]}),r.jsx(e,{children:"Contact"})]})]})};var b,m,l;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Navbar>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem active>Home</NavbarItem>
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>Pricing</NavbarItem>
        <NavbarItem>About</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="outline" size="sm">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var N,u,h;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh'
  }}>
      <Navbar position="sticky">
        <NavbarBrand>
          <strong>ZenKit</strong>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem active>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarContent>
      </Navbar>
      <div style={{
      padding: '2rem'
    }}>
        <p>Scroll down to see sticky navbar...</p>
        {Array.from({
        length: 20
      }).map((_, i) => <p key={i}>Content line {i + 1}</p>)}
      </div>
    </div>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var j,x,p;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Navbar bordered>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Services</NavbarItem>
      </NavbarContent>
    </Navbar>
}`,...(p=(x=o.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var g,I,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Navbar>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem active>Home</NavbarItem>
        <NavbarMenu trigger={<NavbarItem>Products ▼</NavbarItem>} items={[{
        key: '1',
        label: 'Product A'
      }, {
        key: '2',
        label: 'Product B'
      }, {
        key: '3',
        label: 'Product C'
      }]} />
        <NavbarItem>Contact</NavbarItem>
      </NavbarContent>
    </Navbar>
}`,...(y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const H=["Default","Sticky","Bordered","WithMenu"];export{o as Bordered,t as Default,s as Sticky,i as WithMenu,H as __namedExportsOrder,A as default};
