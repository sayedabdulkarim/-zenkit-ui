import{j as e}from"./jsx-runtime-DiklIkkE.js";import{co as n}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Spoiler",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
`,r={args:{maxHeight:100,children:t},decorators:[i=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{})})]},a={args:{maxHeight:80,showLabel:"Read more",hideLabel:"Read less",children:t},decorators:[i=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{})})]},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Max Height: 50px"}),e.jsx(n,{maxHeight:50,children:t})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Max Height: 100px"}),e.jsx(n,{maxHeight:100,children:t})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Max Height: 150px"}),e.jsx(n,{maxHeight:150,children:t})]})]})},s={args:{maxHeight:100,initialState:!0,children:t},decorators:[i=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{})})]},d={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsxs(n,{maxHeight:150,children:[e.jsx("h3",{children:"Article Title"}),e.jsx("p",{children:"This is the introduction paragraph that gives an overview of the article content. It should grab the reader's attention and make them want to continue reading."}),e.jsx("h4",{children:"Section 1"}),e.jsx("p",{children:"More detailed content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("h4",{children:"Section 2"}),e.jsx("p",{children:"Even more content in this section. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Point one"}),e.jsx("li",{children:"Point two"}),e.jsx("li",{children:"Point three"})]})]})})},l={args:{maxHeight:100,transitionDuration:0,children:t},decorators:[i=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{})})]};var c,m,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    maxHeight: 100,
    children: longText
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}><Story /></div>]
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,p,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    maxHeight: 80,
    showLabel: 'Read more',
    hideLabel: 'Read less',
    children: longText
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}><Story /></div>]
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,v,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '400px'
  }}>
      <div>
        <h4>Max Height: 50px</h4>
        <Spoiler maxHeight={50}>{longText}</Spoiler>
      </div>
      <div>
        <h4>Max Height: 100px</h4>
        <Spoiler maxHeight={100}>{longText}</Spoiler>
      </div>
      <div>
        <h4>Max Height: 150px</h4>
        <Spoiler maxHeight={150}>{longText}</Spoiler>
      </div>
    </div>
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,y,H;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    maxHeight: 100,
    initialState: true,
    children: longText
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}><Story /></div>]
}`,...(H=(y=s.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var f,b,q;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Spoiler maxHeight={150}>
        <h3>Article Title</h3>
        <p>
          This is the introduction paragraph that gives an overview of the article content.
          It should grab the reader's attention and make them want to continue reading.
        </p>
        <h4>Section 1</h4>
        <p>
          More detailed content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h4>Section 2</h4>
        <p>
          Even more content in this section. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </Spoiler>
    </div>
}`,...(q=(b=d.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var T,W,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    maxHeight: 100,
    transitionDuration: 0,
    children: longText
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}><Story /></div>]
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const P=["Default","CustomLabels","DifferentHeights","InitiallyExpanded","WithRichContent","NoTransition"];export{a as CustomLabels,r as Default,o as DifferentHeights,s as InitiallyExpanded,l as NoTransition,d as WithRichContent,P as __namedExportsOrder,R as default};
