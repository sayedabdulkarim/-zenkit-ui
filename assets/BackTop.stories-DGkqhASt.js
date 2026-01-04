import{j as e}from"./jsx-runtime-DiklIkkE.js";import{w as n,B as T}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const S={title:"Components/BackTop",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("h2",{children:"Scroll down to see the BackTop button"}),e.jsx("p",{children:"The button appears after scrolling 400px."}),Array.from({length:50}).map((a,t)=>e.jsxs("p",{children:["Content line ",t+1]},t)),e.jsx(n,{})]})},o={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("h2",{children:"Custom BackTop Button"}),e.jsx("p",{children:"Scroll down to see the custom button."}),Array.from({length:50}).map((a,t)=>e.jsxs("p",{children:["Content line ",t+1]},t)),e.jsx(n,{children:e.jsx(T,{size:"sm",style:{borderRadius:"50%",width:"40px",height:"40px",padding:0},children:"↑"})})]})},s={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("h2",{children:"Low Visibility Threshold"}),e.jsx("p",{children:"The button appears after scrolling just 100px."}),Array.from({length:50}).map((a,t)=>e.jsxs("p",{children:["Content line ",t+1]},t)),e.jsx(n,{visibilityHeight:100})]})},i={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[e.jsx("h2",{children:"Slow Scroll Animation"}),e.jsx("p",{children:"Takes 1 second to scroll to top."}),Array.from({length:50}).map((a,t)=>e.jsxs("p",{children:["Content line ",t+1]},t)),e.jsx(n,{duration:1e3})]})};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '20px'
  }}>
      <h2>Scroll down to see the BackTop button</h2>
      <p>The button appears after scrolling 400px.</p>
      {Array.from({
      length: 50
    }).map((_, i) => <p key={i}>Content line {i + 1}</p>)}
      <BackTop />
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var h,c,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '20px'
  }}>
      <h2>Custom BackTop Button</h2>
      <p>Scroll down to see the custom button.</p>
      {Array.from({
      length: 50
    }).map((_, i) => <p key={i}>Content line {i + 1}</p>)}
      <BackTop>
        <Button size="sm" style={{
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: 0
      }}>
          ↑
        </Button>
      </BackTop>
    </div>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '20px'
  }}>
      <h2>Low Visibility Threshold</h2>
      <p>The button appears after scrolling just 100px.</p>
      {Array.from({
      length: 50
    }).map((_, i) => <p key={i}>Content line {i + 1}</p>)}
      <BackTop visibilityHeight={100} />
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,j,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '20px'
  }}>
      <h2>Slow Scroll Animation</h2>
      <p>Takes 1 second to scroll to top.</p>
      {Array.from({
      length: 50
    }).map((_, i) => <p key={i}>Content line {i + 1}</p>)}
      <BackTop duration={1000} />
    </div>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const w=["Default","CustomContent","LowVisibility","SlowScroll"];export{o as CustomContent,r as Default,s as LowVisibility,i as SlowScroll,w as __namedExportsOrder,S as default};
