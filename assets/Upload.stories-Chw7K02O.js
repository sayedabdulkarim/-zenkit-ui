import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d7 as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const I={title:"Data Entry/Upload",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx(r,{onUpload:o=>console.log("Uploaded:",o)})},a={render:()=>e.jsx(r,{type:"drag",onUpload:o=>console.log("Uploaded:",o),children:e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsx("p",{children:"📁 Drag files here or click to upload"}),e.jsx("p",{style:{color:"#888",fontSize:"0.875rem"},children:"Support for single or bulk upload"})]})})},l={render:()=>e.jsx(r,{multiple:!0,onUpload:o=>console.log("Uploaded:",o)})},d={render:()=>e.jsx(r,{accept:"image/*",type:"drag",onUpload:o=>console.log("Uploaded:",o),children:e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsx("p",{children:"🖼️ Upload images only"}),e.jsx("p",{style:{color:"#888",fontSize:"0.875rem"},children:"PNG, JPG, GIF up to 10MB"})]})})},t={render:()=>e.jsx(r,{showFileList:!0,multiple:!0,defaultFileList:[{uid:"1",name:"document.pdf",status:"done",size:1024e3},{uid:"2",name:"image.png",status:"done",size:512e3}],onUpload:o=>console.log("Uploaded:",o)})},n={render:()=>e.jsx(r,{disabled:!0,onUpload:o=>console.log("Uploaded:",o)})};var p,i,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Upload onUpload={files => console.log('Uploaded:', files)} />
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Upload type="drag" onUpload={files => console.log('Uploaded:', files)}>
      <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
        <p>📁 Drag files here or click to upload</p>
        <p style={{
        color: '#888',
        fontSize: '0.875rem'
      }}>
          Support for single or bulk upload
        </p>
      </div>
    </Upload>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var U,f,x;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Upload multiple onUpload={files => console.log('Uploaded:', files)} />
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,h,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Upload accept="image/*" type="drag" onUpload={files => console.log('Uploaded:', files)}>
      <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
        <p>🖼️ Upload images only</p>
        <p style={{
        color: '#888',
        fontSize: '0.875rem'
      }}>
          PNG, JPG, GIF up to 10MB
        </p>
      </div>
    </Upload>
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,D,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Upload showFileList multiple defaultFileList={[{
    uid: '1',
    name: 'document.pdf',
    status: 'done',
    size: 1024000
  }, {
    uid: '2',
    name: 'image.png',
    status: 'done',
    size: 512000
  }]} onUpload={files => console.log('Uploaded:', files)} />
}`,...(z=(D=t.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var F,b,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Upload disabled onUpload={files => console.log('Uploaded:', files)} />
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const M=["Default","Drag","Multiple","AcceptImages","WithFileList","Disabled"];export{d as AcceptImages,s as Default,n as Disabled,a as Drag,l as Multiple,t as WithFileList,M as __namedExportsOrder,I as default};
