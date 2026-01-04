import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bV as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const W={title:"Components/ScrollShadow",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal","both"]},size:{control:"select",options:["sm","md","lg"]}}},o={render:()=>e.jsx(i,{style:{height:"200px",width:"300px"},children:Array.from({length:20}).map((t,r)=>e.jsxs("p",{children:["Item ",r+1,": Lorem ipsum dolor sit amet"]},r))})},a={render:()=>e.jsx(i,{orientation:"horizontal",style:{width:"400px"},children:e.jsx("div",{style:{display:"flex",gap:"1rem",padding:"1rem"},children:Array.from({length:15}).map((t,r)=>e.jsxs("div",{style:{minWidth:"100px",height:"80px",background:"#f0f0f0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:["Card ",r+1]},r))})})},d={render:()=>e.jsx(i,{orientation:"both",style:{height:"200px",width:"300px"},children:e.jsx("div",{style:{width:"600px"},children:Array.from({length:20}).map((t,r)=>e.jsxs("p",{style:{whiteSpace:"nowrap"},children:["Item ",r+1,": This is a very long line of text that extends beyond the container width"]},r))})})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Small Shadow"}),e.jsx(i,{size:"sm",style:{height:"150px",width:"200px"},children:Array.from({length:15}).map((t,r)=>e.jsxs("p",{children:["Item ",r+1]},r))})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Medium Shadow"}),e.jsx(i,{size:"md",style:{height:"150px",width:"200px"},children:Array.from({length:15}).map((t,r)=>e.jsxs("p",{children:["Item ",r+1]},r))})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Large Shadow"}),e.jsx(i,{size:"lg",style:{height:"150px",width:"200px"},children:Array.from({length:15}).map((t,r)=>e.jsxs("p",{children:["Item ",r+1]},r))})]})]})},l={render:()=>e.jsx(i,{orientation:"horizontal",style:{width:"100%",maxWidth:"600px"},children:e.jsx("div",{style:{display:"flex",gap:"1rem",padding:"1rem"},children:["React","Vue","Angular","Svelte","Solid","Preact","Qwik","Astro"].map(t=>e.jsxs("div",{style:{minWidth:"120px",padding:"1rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center",border:"1px solid #e9ecef"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"⚛️"}),e.jsx("div",{children:t})]},t))})})},n={render:()=>e.jsx(i,{hideScrollbar:!0,style:{height:"200px",width:"300px"},children:Array.from({length:20}).map((t,r)=>e.jsxs("p",{children:["Item ",r+1,": Content with hidden scrollbar"]},r))})};var p,h,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ScrollShadow style={{
    height: '200px',
    width: '300px'
  }}>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i}>Item {i + 1}: Lorem ipsum dolor sit amet</p>)}
    </ScrollShadow>
}`,...(c=(h=o.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var m,x,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ScrollShadow orientation="horizontal" style={{
    width: '400px'
  }}>
      <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem'
    }}>
        {Array.from({
        length: 15
      }).map((_, i) => <div key={i} style={{
        minWidth: '100px',
        height: '80px',
        background: '#f0f0f0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            Card {i + 1}
          </div>)}
      </div>
    </ScrollShadow>
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,S,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ScrollShadow orientation="both" style={{
    height: '200px',
    width: '300px'
  }}>
      <div style={{
      width: '600px'
    }}>
        {Array.from({
        length: 20
      }).map((_, i) => <p key={i} style={{
        whiteSpace: 'nowrap'
      }}>
            Item {i + 1}: This is a very long line of text that extends beyond the container width
          </p>)}
      </div>
    </ScrollShadow>
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,u,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div>
        <p>Small Shadow</p>
        <ScrollShadow size="sm" style={{
        height: '150px',
        width: '200px'
      }}>
          {Array.from({
          length: 15
        }).map((_, i) => <p key={i}>Item {i + 1}</p>)}
        </ScrollShadow>
      </div>
      <div>
        <p>Medium Shadow</p>
        <ScrollShadow size="md" style={{
        height: '150px',
        width: '200px'
      }}>
          {Array.from({
          length: 15
        }).map((_, i) => <p key={i}>Item {i + 1}</p>)}
        </ScrollShadow>
      </div>
      <div>
        <p>Large Shadow</p>
        <ScrollShadow size="lg" style={{
        height: '150px',
        width: '200px'
      }}>
          {Array.from({
          length: 15
        }).map((_, i) => <p key={i}>Item {i + 1}</p>)}
        </ScrollShadow>
      </div>
    </div>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var j,b,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ScrollShadow orientation="horizontal" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem'
    }}>
        {['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Preact', 'Qwik', 'Astro'].map(name => <div key={name} style={{
        minWidth: '120px',
        padding: '1rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center',
        border: '1px solid #e9ecef'
      }}>
            <div style={{
          fontSize: '2rem',
          marginBottom: '0.5rem'
        }}>⚛️</div>
            <div>{name}</div>
          </div>)}
      </div>
    </ScrollShadow>
}`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var z,_,k;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ScrollShadow hideScrollbar style={{
    height: '200px',
    width: '300px'
  }}>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i}>Item {i + 1}: Content with hidden scrollbar</p>)}
    </ScrollShadow>
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const V=["Vertical","Horizontal","Both","Sizes","CardList","HideScrollbar"];export{d as Both,l as CardList,n as HideScrollbar,a as Horizontal,s as Sizes,o as Vertical,V as __namedExportsOrder,W as default};
