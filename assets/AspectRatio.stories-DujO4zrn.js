import{j as e}from"./jsx-runtime-DiklIkkE.js";import{s as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const C={title:"Layout/AspectRatio",component:t,parameters:{layout:"padded"},tags:["autodocs"]},r={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{ratio:16/9,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300",alt:"Landscape",style:{objectFit:"cover",width:"100%",height:"100%"}})})})},i={render:()=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(t,{ratio:1,children:e.jsx("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.5rem"},children:"1:1"})})})},a={render:()=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(t,{ratio:3/4,children:e.jsx("div",{style:{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.5rem"},children:"3:4"})})})},n={render:()=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{ratio:16/9,children:e.jsx("iframe",{src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%",border:"none"}})})})},s={render:()=>e.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[1,4/3,16/9,21/9].map((o,R)=>e.jsx("div",{style:{width:"150px"},children:e.jsx(t,{ratio:o,children:e.jsx("div",{style:{background:"#ddd",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o.toFixed(2)})})},R))})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300" alt="Landscape" style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%'
      }} />
      </AspectRatio>
    </div>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '200px'
  }}>
      <AspectRatio ratio={1}>
        <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem'
      }}>
          1:1
        </div>
      </AspectRatio>
    </div>
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,x,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '200px'
  }}>
      <AspectRatio ratio={3 / 4}>
        <div style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem'
      }}>
          3:4
        </div>
      </AspectRatio>
    </div>
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,w,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>
      <AspectRatio ratio={16 / 9}>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
        width: '100%',
        height: '100%',
        border: 'none'
      }} />
      </AspectRatio>
    </div>
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,j,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      {[1, 4 / 3, 16 / 9, 21 / 9].map((ratio, i) => <div key={i} style={{
      width: '150px'
    }}>
          <AspectRatio ratio={ratio}>
            <div style={{
          background: '#ddd',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
              {ratio.toFixed(2)}
            </div>
          </AspectRatio>
        </div>)}
    </div>
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const F=["Default","Square","Portrait","Video","Ratios"];export{r as Default,a as Portrait,s as Ratios,i as Square,n as Video,F as __namedExportsOrder,C as default};
