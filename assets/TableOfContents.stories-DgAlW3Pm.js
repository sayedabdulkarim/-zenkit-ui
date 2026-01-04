import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as A}from"./index-DRjF_FHU.js";import{cF as d}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const U={title:"Components/TableOfContents",component:d,parameters:{layout:"centered"},tags:["autodocs"]},n=[{id:"intro",label:"Introduction",href:"#intro"},{id:"getting-started",label:"Getting Started",href:"#getting-started"},{id:"installation",label:"Installation",href:"#installation",children:[{id:"npm",label:"Using npm",href:"#npm"},{id:"yarn",label:"Using yarn",href:"#yarn"}]},{id:"usage",label:"Usage",href:"#usage"},{id:"api",label:"API Reference",href:"#api"}],i={args:{links:n},decorators:[t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{})})]},s={render:()=>{const[t,T]=A.useState("installation");return e.jsx("div",{style:{width:"250px"},children:e.jsx(d,{links:n,active:t,onLinkClick:O=>T(O)})})}},r={args:{links:[{id:"section-1",label:"Section 1",href:"#section-1",children:[{id:"subsection-1-1",label:"Subsection 1.1",href:"#subsection-1-1",children:[{id:"item-1-1-1",label:"Item 1.1.1",href:"#item-1-1-1"},{id:"item-1-1-2",label:"Item 1.1.2",href:"#item-1-1-2"}]},{id:"subsection-1-2",label:"Subsection 1.2",href:"#subsection-1-2"}]},{id:"section-2",label:"Section 2",href:"#section-2",children:[{id:"subsection-2-1",label:"Subsection 2.1",href:"#subsection-2-1"}]}]},decorators:[t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{})})]},o={args:{title:"Table of Contents",links:n},decorators:[t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{})})]},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("div",{style:{position:"sticky",top:"1rem",alignSelf:"flex-start",width:"200px"},children:e.jsx(d,{title:"Contents",links:n,active:"getting-started"})}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("section",{id:"intro",style:{marginBottom:"2rem"},children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet..."})]}),e.jsxs("section",{id:"getting-started",style:{marginBottom:"2rem"},children:[e.jsx("h2",{children:"Getting Started"}),e.jsx("p",{children:"To get started with our library..."})]}),e.jsxs("section",{id:"installation",style:{marginBottom:"2rem"},children:[e.jsx("h2",{children:"Installation"}),e.jsx("p",{children:"You can install using npm or yarn..."})]})]})]})},l={args:{links:n,offset:80},decorators:[t=>e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{})})]};var c,m,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    links: defaultLinks
  },
  decorators: [Story => <div style={{
    width: '250px'
  }}><Story /></div>]
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,u,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('installation');
    return <div style={{
      width: '250px'
    }}>
        <TableOfContents links={defaultLinks} active={active} onLinkClick={id => setActive(id)} />
      </div>;
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    links: [{
      id: 'section-1',
      label: 'Section 1',
      href: '#section-1',
      children: [{
        id: 'subsection-1-1',
        label: 'Subsection 1.1',
        href: '#subsection-1-1',
        children: [{
          id: 'item-1-1-1',
          label: 'Item 1.1.1',
          href: '#item-1-1-1'
        }, {
          id: 'item-1-1-2',
          label: 'Item 1.1.2',
          href: '#item-1-1-2'
        }]
      }, {
        id: 'subsection-1-2',
        label: 'Subsection 1.2',
        href: '#subsection-1-2'
      }]
    }, {
      id: 'section-2',
      label: 'Section 2',
      href: '#section-2',
      children: [{
        id: 'subsection-2-1',
        label: 'Subsection 2.1',
        href: '#subsection-2-1'
      }]
    }]
  },
  decorators: [Story => <div style={{
    width: '250px'
  }}><Story /></div>]
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Table of Contents',
    links: defaultLinks
  },
  decorators: [Story => <div style={{
    width: '250px'
  }}><Story /></div>]
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var k,j,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div style={{
      position: 'sticky',
      top: '1rem',
      alignSelf: 'flex-start',
      width: '200px'
    }}>
        <TableOfContents title="Contents" links={defaultLinks} active="getting-started" />
      </div>
      <div style={{
      flex: 1
    }}>
        <section id="intro" style={{
        marginBottom: '2rem'
      }}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </section>
        <section id="getting-started" style={{
        marginBottom: '2rem'
      }}>
          <h2>Getting Started</h2>
          <p>To get started with our library...</p>
        </section>
        <section id="installation" style={{
        marginBottom: '2rem'
      }}>
          <h2>Installation</h2>
          <p>You can install using npm or yarn...</p>
        </section>
      </div>
    </div>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,C,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    links: defaultLinks,
    offset: 80
  },
  decorators: [Story => <div style={{
    width: '250px'
  }}><Story /></div>]
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const D=["Default","WithActiveLink","Nested","WithTitle","Sticky","WithOffset"];export{i as Default,r as Nested,a as Sticky,s as WithActiveLink,l as WithOffset,o as WithTitle,D as __namedExportsOrder,U as default};
