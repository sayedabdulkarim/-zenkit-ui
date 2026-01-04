import{j as e}from"./jsx-runtime-DiklIkkE.js";import{A as t,B as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Utility/Affix",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},i={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"1rem"},children:[e.jsx("p",{children:"Scroll down to see the affixed button stick to the top"}),e.jsx("div",{style:{marginTop:"200px"},children:e.jsx(t,{offsetTop:20,children:e.jsx(o,{colorScheme:"primary",children:"Affixed to Top"})})}),e.jsx("div",{style:{height:"1000px",marginTop:"20px",background:"#f5f5f5",padding:"1rem"},children:e.jsx("p",{children:"Scroll content..."})})]})},r={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"1rem"},children:[e.jsx("p",{children:"Scroll down - button affixes 100px from top"}),e.jsx("div",{style:{marginTop:"300px"},children:e.jsx(t,{offsetTop:100,children:e.jsx(o,{children:"100px from Top"})})}),e.jsx("div",{style:{height:"1000px",marginTop:"20px"},children:e.jsx("p",{children:"More content below..."})})]})},n={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"1rem"},children:[e.jsx("p",{children:"Scroll to the bottom to see the affixed button"}),e.jsx("div",{style:{height:"800px"},children:e.jsx("p",{children:"Scroll content..."})}),e.jsx(t,{offsetBottom:20,children:e.jsx(o,{colorScheme:"primary",children:"Affixed to Bottom"})}),e.jsx("div",{style:{height:"500px",marginTop:"20px"},children:e.jsx("p",{children:"More content below..."})})]})},s={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"1rem"},children:[e.jsx("p",{children:"Scroll down - check console for affix state changes"}),e.jsx("div",{style:{marginTop:"200px"},children:e.jsx(t,{offsetTop:20,onChange:C=>console.log("Affixed:",C),children:e.jsx(o,{children:"Watch Console"})})}),e.jsx("div",{style:{height:"1000px",marginTop:"20px"},children:e.jsx("p",{children:"Scroll content..."})})]})},d={render:()=>e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("p",{children:"The button affixes within its scrollable container"}),e.jsxs("div",{style:{height:"300px",overflow:"auto",border:"1px solid #e0e0e0",borderRadius:"8px",position:"relative"},children:[e.jsx("div",{style:{height:"100px",padding:"1rem"},children:e.jsx("p",{children:"Scroll within this container..."})}),e.jsx(t,{offsetTop:10,children:e.jsx(o,{colorScheme:"primary",children:"Affixed in Container"})}),e.jsx("div",{style:{height:"600px",padding:"1rem"},children:e.jsx("p",{children:"More scrollable content..."})})]})]})},p={render:()=>e.jsxs("div",{style:{height:"200vh",padding:"1rem"},children:[e.jsx("p",{children:"Multiple affixed elements at different positions"}),e.jsx("div",{style:{marginTop:"100px"},children:e.jsx(t,{offsetTop:20,children:e.jsx(o,{children:"First (20px)"})})}),e.jsx("div",{style:{marginTop:"200px"},children:e.jsx(t,{offsetTop:70,children:e.jsx(o,{colorScheme:"secondary",children:"Second (70px)"})})}),e.jsx("div",{style:{marginTop:"200px"},children:e.jsx(t,{offsetTop:120,children:e.jsx(o,{variant:"outline",children:"Third (120px)"})})}),e.jsx("div",{style:{height:"1000px",marginTop:"20px"},children:e.jsx("p",{children:"Scroll content..."})})]})};var l,c,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '1rem'
  }}>
      <p>Scroll down to see the affixed button stick to the top</p>
      <div style={{
      marginTop: '200px'
    }}>
        <Affix offsetTop={20}>
          <Button colorScheme="primary">Affixed to Top</Button>
        </Affix>
      </div>
      <div style={{
      height: '1000px',
      marginTop: '20px',
      background: '#f5f5f5',
      padding: '1rem'
    }}>
        <p>Scroll content...</p>
      </div>
    </div>
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '1rem'
  }}>
      <p>Scroll down - button affixes 100px from top</p>
      <div style={{
      marginTop: '300px'
    }}>
        <Affix offsetTop={100}>
          <Button>100px from Top</Button>
        </Affix>
      </div>
      <div style={{
      height: '1000px',
      marginTop: '20px'
    }}>
        <p>More content below...</p>
      </div>
    </div>
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var m,g,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '1rem'
  }}>
      <p>Scroll to the bottom to see the affixed button</p>
      <div style={{
      height: '800px'
    }}>
        <p>Scroll content...</p>
      </div>
      <Affix offsetBottom={20}>
        <Button colorScheme="primary">Affixed to Bottom</Button>
      </Affix>
      <div style={{
      height: '500px',
      marginTop: '20px'
    }}>
        <p>More content below...</p>
      </div>
    </div>
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var u,j,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '1rem'
  }}>
      <p>Scroll down - check console for affix state changes</p>
      <div style={{
      marginTop: '200px'
    }}>
        <Affix offsetTop={20} onChange={affixed => console.log('Affixed:', affixed)}>
          <Button>Watch Console</Button>
        </Affix>
      </div>
      <div style={{
      height: '1000px',
      marginTop: '20px'
    }}>
        <p>Scroll content...</p>
      </div>
    </div>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,S,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem'
  }}>
      <p>The button affixes within its scrollable container</p>
      <div style={{
      height: '300px',
      overflow: 'auto',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      position: 'relative'
    }}>
        <div style={{
        height: '100px',
        padding: '1rem'
      }}>
          <p>Scroll within this container...</p>
        </div>
        <Affix offsetTop={10}>
          <Button colorScheme="primary">Affixed in Container</Button>
        </Affix>
        <div style={{
        height: '600px',
        padding: '1rem'
      }}>
          <p>More scrollable content...</p>
        </div>
      </div>
    </div>
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var b,B,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh',
    padding: '1rem'
  }}>
      <p>Multiple affixed elements at different positions</p>
      <div style={{
      marginTop: '100px'
    }}>
        <Affix offsetTop={20}>
          <Button>First (20px)</Button>
        </Affix>
      </div>
      <div style={{
      marginTop: '200px'
    }}>
        <Affix offsetTop={70}>
          <Button colorScheme="secondary">Second (70px)</Button>
        </Affix>
      </div>
      <div style={{
      marginTop: '200px'
    }}>
        <Affix offsetTop={120}>
          <Button variant="outline">Third (120px)</Button>
        </Affix>
      </div>
      <div style={{
      height: '1000px',
      marginTop: '20px'
    }}>
        <p>Scroll content...</p>
      </div>
    </div>
}`,...(w=(B=p.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const D=["Default","OffsetTop","OffsetBottom","WithCallback","InContainer","Multiple"];export{i as Default,d as InContainer,p as Multiple,n as OffsetBottom,r as OffsetTop,s as WithCallback,D as __namedExportsOrder,R as default};
