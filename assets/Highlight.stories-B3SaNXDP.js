import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aN as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Components/Highlight",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["yellow","blue","green","red","purple"]}}},r={args:{highlight:"important",children:"This is an important message that you should read carefully."}},t={args:{highlight:["React","Vue","Angular"],children:"We support React, Vue, and Angular frameworks for building modern web applications."}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(i,{highlight:"yellow",color:"yellow",children:"This text has yellow highlighting."}),e.jsx(i,{highlight:"blue",color:"blue",children:"This text has blue highlighting."}),e.jsx(i,{highlight:"green",color:"green",children:"This text has green highlighting."}),e.jsx(i,{highlight:"red",color:"red",children:"This text has red highlighting."}),e.jsx(i,{highlight:"purple",color:"purple",children:"This text has purple highlighting."})]})},s={args:{highlight:"REACT",children:"React is a JavaScript library. REACT makes UI development easier. react is popular.",caseSensitive:!1}},l={args:{highlight:"React",children:"React is a JavaScript library. REACT makes UI development easier. react is popular.",caseSensitive:!0}},n={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{highlight:"component",children:"A component is a reusable piece of UI. React components can be functional or class-based. Each component manages its own state and renders based on props."})})},o={render:()=>e.jsx("p",{style:{maxWidth:"500px",lineHeight:1.6},children:e.jsx(i,{highlight:["ZenKit UI","components","React"],children:"ZenKit UI is a comprehensive library of React components designed to help you build beautiful and accessible user interfaces. Our components are fully customizable and follow best practices for modern React development."})})};var h,c,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    highlight: 'important',
    children: 'This is an important message that you should read carefully.'
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    highlight: ['React', 'Vue', 'Angular'],
    children: 'We support React, Vue, and Angular frameworks for building modern web applications.'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,x,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Highlight highlight="yellow" color="yellow">
        This text has yellow highlighting.
      </Highlight>
      <Highlight highlight="blue" color="blue">
        This text has blue highlighting.
      </Highlight>
      <Highlight highlight="green" color="green">
        This text has green highlighting.
      </Highlight>
      <Highlight highlight="red" color="red">
        This text has red highlighting.
      </Highlight>
      <Highlight highlight="purple" color="purple">
        This text has purple highlighting.
      </Highlight>
    </div>
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,y,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    highlight: 'REACT',
    children: 'React is a JavaScript library. REACT makes UI development easier. react is popular.',
    caseSensitive: false
  }
}`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var v,H,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    highlight: 'React',
    children: 'React is a JavaScript library. REACT makes UI development easier. react is popular.',
    caseSensitive: true
  }
}`,...(S=(H=l.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var T,w,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Highlight highlight="component">
        A component is a reusable piece of UI. React components can be functional or class-based.
        Each component manages its own state and renders based on props.
      </Highlight>
    </div>
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var C,j,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <p style={{
    maxWidth: '500px',
    lineHeight: 1.6
  }}>
      <Highlight highlight={['ZenKit UI', 'components', 'React']}>
        ZenKit UI is a comprehensive library of React components designed to help you
        build beautiful and accessible user interfaces. Our components are fully
        customizable and follow best practices for modern React development.
      </Highlight>
    </p>
}`,...(A=(j=o.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const J=["Default","MultipleHighlights","Colors","CaseInsensitive","CaseSensitive","SearchResults","InParagraph"];export{s as CaseInsensitive,l as CaseSensitive,a as Colors,r as Default,o as InParagraph,t as MultipleHighlights,n as SearchResults,J as __namedExportsOrder,D as default};
