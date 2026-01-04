import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aS as i,aT as a}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const M={title:"Data Display/ImageList",component:i,parameters:{layout:"padded"},tags:["autodocs"]},r=[{src:"https://picsum.photos/seed/1/400/300",title:"Image 1"},{src:"https://picsum.photos/seed/2/400/400",title:"Image 2"},{src:"https://picsum.photos/seed/3/400/500",title:"Image 3"},{src:"https://picsum.photos/seed/4/400/350",title:"Image 4"},{src:"https://picsum.photos/seed/5/400/450",title:"Image 5"},{src:"https://picsum.photos/seed/6/400/300",title:"Image 6"}],o={render:()=>e.jsx(i,{cols:3,gap:8,children:r.map((s,t)=>e.jsx(a,{children:e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",display:"block"}})},t))})},m={render:()=>e.jsx(i,{cols:2,gap:16,children:r.map((s,t)=>e.jsx(a,{children:e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",display:"block"}})},t))})},c={render:()=>e.jsx(i,{cols:4,gap:4,children:r.map((s,t)=>e.jsx(a,{children:e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",display:"block"}})},t))})},l={render:()=>e.jsx(i,{cols:3,gap:8,children:r.map((s,t)=>e.jsxs(a,{children:[e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",display:"block"}}),e.jsx("div",{style:{padding:"0.5rem",background:"rgba(0,0,0,0.6)",color:"white",position:"absolute",bottom:0,left:0,right:0},children:s.title})]},t))})},n={render:()=>e.jsx(i,{variant:"masonry",cols:3,gap:8,children:r.map((s,t)=>e.jsx(a,{children:e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",display:"block"}})},t))})},g={render:()=>e.jsx(i,{variant:"quilted",cols:4,gap:4,rowHeight:120,children:r.map((s,t)=>e.jsx(a,{cols:t===0?2:1,rows:t===0?2:1,children:e.jsx("img",{src:s.src,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}})},t))})};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ImageList cols={3} gap={8}>
      {images.map((img, i) => <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        display: 'block'
      }} />
        </ImageListItem>)}
    </ImageList>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var I,u,y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ImageList cols={2} gap={16}>
      {images.map((img, i) => <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        display: 'block'
      }} />
        </ImageListItem>)}
    </ImageList>
}`,...(y=(u=m.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var L,j,x;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ImageList cols={4} gap={4}>
      {images.map((img, i) => <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        display: 'block'
      }} />
        </ImageListItem>)}
    </ImageList>
}`,...(x=(j=c.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var b,w,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ImageList cols={3} gap={8}>
      {images.map((img, i) => <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        display: 'block'
      }} />
          <div style={{
        padding: '0.5rem',
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}>
            {img.title}
          </div>
        </ImageListItem>)}
    </ImageList>
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,f,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((img, i) => <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        display: 'block'
      }} />
        </ImageListItem>)}
    </ImageList>
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,C,D;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ImageList variant="quilted" cols={4} gap={4} rowHeight={120}>
      {images.map((img, i) => <ImageListItem key={i} cols={i === 0 ? 2 : 1} rows={i === 0 ? 2 : 1}>
          <img src={img.src} alt={img.title} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} />
        </ImageListItem>)}
    </ImageList>
}`,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Q=["Default","TwoCols","FourCols","WithTitles","Masonry","Quilted"];export{o as Default,c as FourCols,n as Masonry,g as Quilted,m as TwoCols,l as WithTitles,Q as __namedExportsOrder,M as default};
