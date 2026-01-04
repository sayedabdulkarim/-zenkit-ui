import{j as e}from"./jsx-runtime-DiklIkkE.js";import{av as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const U={title:"Data Entry/Dropzone",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx(r,{onDrop:o=>console.log("Dropped:",o)})},n={render:()=>e.jsx(r,{onDrop:o=>console.log("Dropped:",o),showPreview:!0,accept:"image/*"})},p={render:()=>e.jsxs(r,{onDrop:o=>console.log("Dropped:",o),multiple:!0,children:[e.jsx("p",{children:"📁 Drop multiple files here"}),e.jsx("p",{style:{color:"#888",fontSize:"0.875rem"},children:"or click to browse"})]})},t={render:()=>e.jsxs(r,{onDrop:o=>console.log("Dropped:",o),accept:"image/*",children:[e.jsx("p",{children:"🖼️ Drop images here"}),e.jsx("p",{style:{color:"#888",fontSize:"0.875rem"},children:"PNG, JPG, GIF only"})]})},l={render:()=>e.jsxs(r,{onDrop:o=>console.log("Dropped:",o),maxSize:5*1024*1024,children:[e.jsx("p",{children:"📦 Drop files here"}),e.jsx("p",{style:{color:"#888",fontSize:"0.875rem"},children:"Max file size: 5MB"})]})},i={render:()=>e.jsx(r,{onDrop:o=>console.log("Dropped:",o),disabled:!0,children:e.jsx("p",{children:"Upload disabled"})})},a={render:()=>e.jsx(r,{onDrop:o=>console.log("Dropped:",o),children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"☁️"}),e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Upload your files"}),e.jsx("p",{style:{color:"#888",marginBottom:"1rem"},children:"Drag and drop your files here or click to browse"}),e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",background:"#1890ff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Select Files"})]})})};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} />
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var D,u,g;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} showPreview accept="image/*" />
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} multiple>
      <p>📁 Drop multiple files here</p>
      <p style={{
      color: '#888',
      fontSize: '0.875rem'
    }}>or click to browse</p>
    </Dropzone>
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var z,y,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} accept="image/*">
      <p>🖼️ Drop images here</p>
      <p style={{
      color: '#888',
      fontSize: '0.875rem'
    }}>PNG, JPG, GIF only</p>
    </Dropzone>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,S,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} maxSize={5 * 1024 * 1024}>
      <p>📦 Drop files here</p>
      <p style={{
      color: '#888',
      fontSize: '0.875rem'
    }}>Max file size: 5MB</p>
    </Dropzone>
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,B,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)} disabled>
      <p>Upload disabled</p>
    </Dropzone>
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,k,G;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Dropzone onDrop={files => console.log('Dropped:', files)}>
      <div style={{
      textAlign: 'center'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>☁️</div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Upload your files</h3>
        <p style={{
        color: '#888',
        marginBottom: '1rem'
      }}>
          Drag and drop your files here or click to browse
        </p>
        <button type="button" style={{
        padding: '0.5rem 1rem',
        background: '#1890ff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Select Files
        </button>
      </div>
    </Dropzone>
}`,...(G=(k=a.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const E=["Default","WithPreview","Multiple","AcceptImages","MaxSize","Disabled","CustomContent"];export{t as AcceptImages,a as CustomContent,s as Default,i as Disabled,l as MaxSize,p as Multiple,n as WithPreview,E as __namedExportsOrder,U as default};
