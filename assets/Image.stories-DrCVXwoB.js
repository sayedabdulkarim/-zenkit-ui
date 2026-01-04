import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aR as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Components/Image",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fit:{control:"select",options:["contain","cover","fill","none","scale-down"]},rounded:{control:"select",options:[!1,!0,"sm","md","lg","full"]}}},s={args:{src:"https://picsum.photos/300/200",alt:"Random image",width:300,height:200}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(t,{src:"https://picsum.photos/100/100?1",width:100,height:100,rounded:"sm"}),e.jsx(t,{src:"https://picsum.photos/100/100?2",width:100,height:100,rounded:"md"}),e.jsx(t,{src:"https://picsum.photos/100/100?3",width:100,height:100,rounded:"lg"}),e.jsx(t,{src:"https://picsum.photos/100/100?4",width:100,height:100,rounded:"full"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Cover"}),e.jsx(t,{src:"https://picsum.photos/400/300",width:150,height:150,fit:"cover",style:{border:"1px solid #ccc"}})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Contain"}),e.jsx(t,{src:"https://picsum.photos/400/300",width:150,height:150,fit:"contain",style:{border:"1px solid #ccc"}})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Fill"}),e.jsx(t,{src:"https://picsum.photos/400/300",width:150,height:150,fit:"fill",style:{border:"1px solid #ccc"}})]})]})},o={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:"Click to preview"}),e.jsx(t,{src:"https://picsum.photos/600/400",width:300,height:200,preview:!0,alt:"Click to preview"})]})},d={render:()=>e.jsx(t,{src:"https://invalid-url.example/image.jpg",width:200,height:200,fallback:e.jsx("div",{style:{width:200,height:200,background:"#f5f5f5",display:"flex",alignItems:"center",justifyContent:"center",color:"#999"},children:"Image not found"})})},c={render:()=>e.jsx(t,{src:"https://picsum.photos/300/200?delay=2000",width:300,height:200,placeholder:e.jsx("div",{style:{width:300,height:200,background:"linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite"}})})};var a,h,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Random image',
    width: 300,
    height: 200
  }
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var l,n,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Image src="https://picsum.photos/100/100?1" width={100} height={100} rounded="sm" />
      <Image src="https://picsum.photos/100/100?2" width={100} height={100} rounded="md" />
      <Image src="https://picsum.photos/100/100?3" width={100} height={100} rounded="lg" />
      <Image src="https://picsum.photos/100/100?4" width={100} height={100} rounded="full" />
    </div>
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var g,u,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <div>
        <p>Cover</p>
        <Image src="https://picsum.photos/400/300" width={150} height={150} fit="cover" style={{
        border: '1px solid #ccc'
      }} />
      </div>
      <div>
        <p>Contain</p>
        <Image src="https://picsum.photos/400/300" width={150} height={150} fit="contain" style={{
        border: '1px solid #ccc'
      }} />
      </div>
      <div>
        <p>Fill</p>
        <Image src="https://picsum.photos/400/300" width={150} height={150} fit="fill" style={{
        border: '1px solid #ccc'
      }} />
      </div>
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: '0.5rem'
    }}>Click to preview</p>
      <Image src="https://picsum.photos/600/400" width={300} height={200} preview alt="Click to preview" />
    </div>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,y,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Image src="https://invalid-url.example/image.jpg" width={200} height={200} fallback={<div style={{
    width: 200,
    height: 200,
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999'
  }}>
          Image not found
        </div>} />
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,k,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Image src="https://picsum.photos/300/200?delay=2000" width={300} height={200} placeholder={<div style={{
    width: 300,
    height: 200,
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite'
  }} />} />
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const O=["Default","Rounded","ObjectFit","WithPreview","WithFallback","WithPlaceholder"];export{s as Default,i as ObjectFit,r as Rounded,d as WithFallback,c as WithPlaceholder,o as WithPreview,O as __namedExportsOrder,P as default};
