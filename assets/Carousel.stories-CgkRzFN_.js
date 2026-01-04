import{j as e}from"./jsx-runtime-DiklIkkE.js";import{O as r,Q as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const A={title:"Data Display/Carousel",component:r,parameters:{layout:"padded"},tags:["autodocs"]},c=[{bg:"#4a90d9",text:"Slide 1"},{bg:"#50c878",text:"Slide 2"},{bg:"#ff6b6b",text:"Slide 3"},{bg:"#ffd93d",text:"Slide 4"}],n={render:()=>e.jsx(r,{children:c.map((t,s)=>e.jsx(o,{children:e.jsx("div",{style:{height:"300px",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"2rem",fontWeight:"bold"},children:t.text})},s))})},a={render:()=>e.jsx(r,{autoplay:!0,interval:3e3,children:c.map((t,s)=>e.jsx(o,{children:e.jsx("div",{style:{height:"300px",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"2rem"},children:t.text})},s))})},i={render:()=>e.jsx(r,{arrows:!0,children:c.map((t,s)=>e.jsx(o,{children:e.jsx("div",{style:{height:"300px",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"2rem"},children:t.text})},s))})},l={render:()=>e.jsx(r,{dots:!0,dotsPosition:"bottom",children:c.map((t,s)=>e.jsx(o,{children:e.jsx("div",{style:{height:"300px",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"2rem"},children:t.text})},s))})},d={render:()=>e.jsx(r,{arrows:!0,dots:!0,children:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800","https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800"].map((t,s)=>e.jsx(o,{children:e.jsx("img",{src:t,alt:`Slide ${s+1}`,style:{width:"100%",height:"400px",objectFit:"cover"}})},s))})};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Carousel>
      {slides.map((slide, i) => <CarouselItem key={i}>
          <div style={{
        height: '300px',
        background: slide.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
            {slide.text}
          </div>
        </CarouselItem>)}
    </Carousel>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Carousel autoplay interval={3000}>
      {slides.map((slide, i) => <CarouselItem key={i}>
          <div style={{
        height: '300px',
        background: slide.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem'
      }}>
            {slide.text}
          </div>
        </CarouselItem>)}
    </Carousel>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Carousel arrows>
      {slides.map((slide, i) => <CarouselItem key={i}>
          <div style={{
        height: '300px',
        background: slide.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem'
      }}>
            {slide.text}
          </div>
        </CarouselItem>)}
    </Carousel>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,j,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Carousel dots dotsPosition="bottom">
      {slides.map((slide, i) => <CarouselItem key={i}>
          <div style={{
        height: '300px',
        background: slide.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem'
      }}>
            {slide.text}
          </div>
        </CarouselItem>)}
    </Carousel>
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,S,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Carousel arrows dots>
      {['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800'].map((src, i) => <CarouselItem key={i}>
          <img src={src} alt={\`Slide \${i + 1}\`} style={{
        width: '100%',
        height: '400px',
        objectFit: 'cover'
      }} />
        </CarouselItem>)}
    </Carousel>
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const E=["Default","Autoplay","WithArrows","WithDots","ImageCarousel"];export{a as Autoplay,n as Default,d as ImageCarousel,i as WithArrows,l as WithDots,E as __namedExportsOrder,A as default};
