import{j as e}from"./jsx-runtime-DiklIkkE.js";import{da as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const L={title:"Feedback/Watermark",component:r,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsx(r,{content:"ZenKit UI",children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Document Content"}),e.jsx("p",{children:"This content is protected with a watermark."}),e.jsx("p",{children:"The watermark appears as a subtle overlay across the entire content area."})]})})},t={render:()=>e.jsx(r,{content:["ZenKit UI","Confidential"],children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Multi-line Watermark"}),e.jsx("p",{children:"This watermark has multiple lines of text."})]})})},s={render:()=>e.jsx(r,{content:"DRAFT",font:{color:"rgba(255, 0, 0, 0.15)",fontSize:24},rotate:-30,children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Custom Styled Watermark"}),e.jsx("p",{children:"This watermark uses custom font color and rotation."})]})})},n={render:()=>e.jsx(r,{content:"ZenKit",gap:[50,50],children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Dense Watermark Pattern"}),e.jsx("p",{children:"This watermark has a denser pattern with smaller gaps."})]})})},i={render:()=>e.jsx(r,{content:"ZenKit",gap:[200,200],children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Sparse Watermark Pattern"}),e.jsx("p",{children:"This watermark has a sparser pattern with larger gaps."})]})})},o={render:()=>e.jsx(r,{image:"https://via.placeholder.com/100x50?text=Logo",width:100,height:50,children:e.jsxs("div",{style:{height:"300px",background:"#f5f5f5",padding:"1rem"},children:[e.jsx("h3",{children:"Image Watermark"}),e.jsx("p",{children:"This watermark uses an image instead of text."})]})})},d={render:()=>e.jsx(r,{content:"Confidential",inherit:!1,children:e.jsxs("div",{style:{minHeight:"400px",background:"#fff",padding:"1rem"},children:[e.jsx("h3",{children:"Full Page Watermark"}),e.jsx("p",{children:"This watermark covers the entire page regardless of content size."}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h4",{children:"Section 1"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h4",{children:"Section 2"}),e.jsx("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})})};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Watermark content="ZenKit UI">
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Document Content</h3>
        <p>This content is protected with a watermark.</p>
        <p>The watermark appears as a subtle overlay across the entire content area.</p>
      </div>
    </Watermark>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,l,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Watermark content={['ZenKit UI', 'Confidential']}>
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Multi-line Watermark</h3>
        <p>This watermark has multiple lines of text.</p>
      </div>
    </Watermark>
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,f,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Watermark content="DRAFT" font={{
    color: 'rgba(255, 0, 0, 0.15)',
    fontSize: 24
  }} rotate={-30}>
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Custom Styled Watermark</h3>
        <p>This watermark uses custom font color and rotation.</p>
      </div>
    </Watermark>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,j,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Watermark content="ZenKit" gap={[50, 50]}>
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Dense Watermark Pattern</h3>
        <p>This watermark has a denser pattern with smaller gaps.</p>
      </div>
    </Watermark>
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var W,y,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Watermark content="ZenKit" gap={[200, 200]}>
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Sparse Watermark Pattern</h3>
        <p>This watermark has a sparser pattern with larger gaps.</p>
      </div>
    </Watermark>
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,T,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Watermark image="https://via.placeholder.com/100x50?text=Logo" width={100} height={50}>
      <div style={{
      height: '300px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <h3>Image Watermark</h3>
        <p>This watermark uses an image instead of text.</p>
      </div>
    </Watermark>
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var P,C,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Watermark content="Confidential" inherit={false}>
      <div style={{
      minHeight: '400px',
      background: '#fff',
      padding: '1rem'
    }}>
        <h3>Full Page Watermark</h3>
        <p>This watermark covers the entire page regardless of content size.</p>
        <div style={{
        marginTop: '2rem'
      }}>
          <h4>Section 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={{
        marginTop: '2rem'
      }}>
          <h4>Section 2</h4>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </Watermark>
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const z=["Default","MultiLine","CustomStyle","DensePattern","SparsePattern","WithImage","FullPage"];export{s as CustomStyle,a as Default,n as DensePattern,d as FullPage,t as MultiLine,i as SparsePattern,o as WithImage,z as __namedExportsOrder,L as default};
