import{j as e}from"./jsx-runtime-DiklIkkE.js";import{b4 as t,b5 as c}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const v={title:"Layout/Masonry",component:t,parameters:{layout:"padded"},tags:["autodocs"]},m=[{height:200,color:"#ff6b6b"},{height:150,color:"#4ecdc4"},{height:250,color:"#45b7d1"},{height:180,color:"#96ceb4"},{height:220,color:"#ffeaa7"},{height:160,color:"#dfe6e9"},{height:280,color:"#a29bfe"},{height:140,color:"#fd79a8"},{height:200,color:"#81ecec"},{height:170,color:"#fab1a0"}],r={render:()=>e.jsx(t,{columns:3,gap:16,children:m.map((s,o)=>e.jsx(c,{children:e.jsxs("div",{style:{height:s.height,background:s.color,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#333",fontWeight:"bold"},children:["Item ",o+1]})},o))})},a={render:()=>e.jsx(t,{columns:2,gap:20,children:m.slice(0,6).map((s,o)=>e.jsx(c,{children:e.jsxs("div",{style:{height:s.height,background:s.color,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:["Item ",o+1]})},o))})},n={render:()=>e.jsx(t,{columns:4,gap:12,children:m.map((s,o)=>e.jsx(c,{children:e.jsx("div",{style:{height:s.height,background:s.color,borderRadius:"4px"}})},o))})},i={render:()=>e.jsx(t,{columns:3,gap:16,children:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300","https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300","https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300","https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300"].map((s,o)=>e.jsx(c,{children:e.jsx("img",{src:s,alt:`Gallery item ${o+1}`,style:{width:"100%",borderRadius:"8px",display:"block"}})},o))})};var l,d,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Masonry columns={3} gap={16}>
      {items.map((item, i) => <MasonryItem key={i}>
          <div style={{
        height: item.height,
        background: item.color,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
        fontWeight: 'bold'
      }}>
            Item {i + 1}
          </div>
        </MasonryItem>)}
    </Masonry>
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Masonry columns={2} gap={20}>
      {items.slice(0, 6).map((item, i) => <MasonryItem key={i}>
          <div style={{
        height: item.height,
        background: item.color,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            Item {i + 1}
          </div>
        </MasonryItem>)}
    </Masonry>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Masonry columns={4} gap={12}>
      {items.map((item, i) => <MasonryItem key={i}>
          <div style={{
        height: item.height,
        background: item.color,
        borderRadius: '4px'
      }} />
        </MasonryItem>)}
    </Masonry>
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,I,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Masonry columns={3} gap={16}>
      {['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300', 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300'].map((src, i) => <MasonryItem key={i}>
          <img src={src} alt={\`Gallery item \${i + 1}\`} style={{
        width: '100%',
        borderRadius: '8px',
        display: 'block'
      }} />
        </MasonryItem>)}
    </Masonry>
}`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const C=["Default","TwoColumns","FourColumns","ImageGallery"];export{r as Default,n as FourColumns,i as ImageGallery,a as TwoColumns,C as __namedExportsOrder,v as default};
