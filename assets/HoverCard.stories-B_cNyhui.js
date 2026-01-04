import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aO as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const C={title:"Data Display/HoverCard",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>e.jsx(r,{content:e.jsxs("div",{style:{padding:"1rem",maxWidth:"300px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem"},children:"User Profile"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"This is additional information that appears when you hover over the trigger element."})]}),children:e.jsx("span",{style:{textDecoration:"underline",cursor:"pointer"},children:"Hover over me"})})},t={render:()=>e.jsx(r,{content:e.jsxs("div",{style:{padding:"1rem",width:"280px"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"0.75rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"#1890ff",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"JD"}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0},children:"John Doe"}),e.jsx("p",{style:{margin:0,color:"#666",fontSize:"14px"},children:"@johndoe"})]})]}),e.jsx("p",{style:{margin:"0 0 0.75rem",fontSize:"14px"},children:"Software Engineer at Acme Inc. Building cool stuff with React and TypeScript."}),e.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"14px",color:"#666"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"142"})," Following"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"1.2k"})," Followers"]})]})]}),children:e.jsx("a",{href:"#",style:{color:"#1890ff"},children:"@johndoe"})})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",padding:"4rem"},children:[e.jsx(r,{content:e.jsx("div",{style:{padding:"0.5rem"},children:"Top content"}),side:"top",children:e.jsx("button",{children:"Top"})}),e.jsx(r,{content:e.jsx("div",{style:{padding:"0.5rem"},children:"Bottom content"}),side:"bottom",children:e.jsx("button",{children:"Bottom"})}),e.jsx(r,{content:e.jsx("div",{style:{padding:"0.5rem"},children:"Left content"}),side:"left",children:e.jsx("button",{children:"Left"})}),e.jsx(r,{content:e.jsx("div",{style:{padding:"0.5rem"},children:"Right content"}),side:"right",children:e.jsx("button",{children:"Right"})})]})},i={render:()=>e.jsx(r,{openDelay:500,closeDelay:200,content:e.jsx("div",{style:{padding:"1rem"},children:e.jsx("p",{style:{margin:0},children:"This card has a 500ms open delay and 200ms close delay."})}),children:e.jsx("span",{style:{textDecoration:"underline",cursor:"pointer"},children:"Hover with delay"})})};var s,d,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <HoverCard content={<div style={{
    padding: '1rem',
    maxWidth: '300px'
  }}>
          <h4 style={{
      margin: '0 0 0.5rem'
    }}>User Profile</h4>
          <p style={{
      margin: 0,
      color: '#666'
    }}>
            This is additional information that appears when you hover over the trigger element.
          </p>
        </div>}>
      <span style={{
      textDecoration: 'underline',
      cursor: 'pointer'
    }}>Hover over me</span>
    </HoverCard>
}`,...(a=(d=n.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <HoverCard content={<div style={{
    padding: '1rem',
    width: '280px'
  }}>
          <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '0.75rem'
    }}>
            <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: '#1890ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
              JD
            </div>
            <div>
              <h4 style={{
          margin: 0
        }}>John Doe</h4>
              <p style={{
          margin: 0,
          color: '#666',
          fontSize: '14px'
        }}>@johndoe</p>
            </div>
          </div>
          <p style={{
      margin: '0 0 0.75rem',
      fontSize: '14px'
    }}>
            Software Engineer at Acme Inc. Building cool stuff with React and TypeScript.
          </p>
          <div style={{
      display: 'flex',
      gap: '1rem',
      fontSize: '14px',
      color: '#666'
    }}>
            <span><strong>142</strong> Following</span>
            <span><strong>1.2k</strong> Followers</span>
          </div>
        </div>}>
      <a href="#" style={{
      color: '#1890ff'
    }}>@johndoe</a>
    </HoverCard>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    padding: '4rem'
  }}>
      <HoverCard content={<div style={{
      padding: '0.5rem'
    }}>Top content</div>} side="top">
        <button>Top</button>
      </HoverCard>
      <HoverCard content={<div style={{
      padding: '0.5rem'
    }}>Bottom content</div>} side="bottom">
        <button>Bottom</button>
      </HoverCard>
      <HoverCard content={<div style={{
      padding: '0.5rem'
    }}>Left content</div>} side="left">
        <button>Left</button>
      </HoverCard>
      <HoverCard content={<div style={{
      padding: '0.5rem'
    }}>Right content</div>} side="right">
        <button>Right</button>
      </HoverCard>
    </div>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,y,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <HoverCard openDelay={500} closeDelay={200} content={<div style={{
    padding: '1rem'
  }}>
          <p style={{
      margin: 0
    }}>This card has a 500ms open delay and 200ms close delay.</p>
        </div>}>
      <span style={{
      textDecoration: 'underline',
      cursor: 'pointer'
    }}>Hover with delay</span>
    </HoverCard>
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const H=["Default","UserCard","Positions","WithDelay"];export{n as Default,o as Positions,t as UserCard,i as WithDelay,H as __namedExportsOrder,C as default};
