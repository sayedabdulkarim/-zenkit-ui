import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bU as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Data Display/ScrollArea",component:t,parameters:{layout:"centered"},tags:["autodocs"]},l=Array.from({length:50}).map((n,r)=>`Item ${r+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`).join(`

`),i={render:()=>e.jsx(t,{style:{height:"300px",width:"400px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:e.jsx("div",{style:{padding:"1rem"},children:l.split(`

`).map((n,r)=>e.jsx("p",{style:{margin:"0 0 1rem"},children:n},r))})})},s={render:()=>e.jsx(t,{style:{height:"100px",width:"400px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:e.jsx("div",{style:{display:"flex",gap:"1rem",padding:"1rem",width:"max-content"},children:Array.from({length:20}).map((n,r)=>e.jsxs("div",{style:{width:"100px",height:"60px",background:"#f0f0f0",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:["Item ",r+1]},r))})})},d={render:()=>e.jsx(t,{style:{height:"300px",width:"400px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:e.jsx("div",{style:{width:"800px",padding:"1rem"},children:l.split(`

`).map((n,r)=>e.jsxs("p",{style:{margin:"0 0 1rem",whiteSpace:"nowrap"},children:[n," - Extended content that makes this line very long to demonstrate horizontal scrolling."]},r))})})},o={render:()=>e.jsx(t,{scrollbarSize:"thin",style:{height:"300px",width:"400px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:e.jsx("div",{style:{padding:"1rem"},children:l.split(`

`).map((n,r)=>e.jsx("p",{style:{margin:"0 0 1rem"},children:n},r))})})},a={render:()=>e.jsx(t,{scrollHideDelay:0,style:{height:"300px",width:"400px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:e.jsx("div",{style:{padding:"1rem"},children:l.split(`

`).map((n,r)=>e.jsx("p",{style:{margin:"0 0 1rem"},children:n},r))})})};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ScrollArea style={{
    height: '300px',
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <div style={{
      padding: '1rem'
    }}>
        {longContent.split('\\n\\n').map((text, i) => <p key={i} style={{
        margin: '0 0 1rem'
      }}>{text}</p>)}
      </div>
    </ScrollArea>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ScrollArea style={{
    height: '100px',
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      width: 'max-content'
    }}>
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} style={{
        width: '100px',
        height: '60px',
        background: '#f0f0f0',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            Item {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,u,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ScrollArea style={{
    height: '300px',
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <div style={{
      width: '800px',
      padding: '1rem'
    }}>
        {longContent.split('\\n\\n').map((text, i) => <p key={i} style={{
        margin: '0 0 1rem',
        whiteSpace: 'nowrap'
      }}>
            {text} - Extended content that makes this line very long to demonstrate horizontal scrolling.
          </p>)}
      </div>
    </ScrollArea>
}`,...(b=(u=d.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,f,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ScrollArea scrollbarSize="thin" style={{
    height: '300px',
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <div style={{
      padding: '1rem'
    }}>
        {longContent.split('\\n\\n').map((text, i) => <p key={i} style={{
        margin: '0 0 1rem'
      }}>{text}</p>)}
      </div>
    </ScrollArea>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,w,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ScrollArea scrollHideDelay={0} style={{
    height: '300px',
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  }}>
      <div style={{
      padding: '1rem'
    }}>
        {longContent.split('\\n\\n').map((text, i) => <p key={i} style={{
        margin: '0 0 1rem'
      }}>{text}</p>)}
      </div>
    </ScrollArea>
}`,...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const H=["Default","Horizontal","Both","Thin","Hidden"];export{d as Both,i as Default,a as Hidden,s as Horizontal,o as Thin,H as __namedExportsOrder,D as default};
