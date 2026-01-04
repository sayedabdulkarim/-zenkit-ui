import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as B}from"./index-DRjF_FHU.js";import{bQ as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const F={title:"Utility/Resizable",component:t,parameters:{layout:"padded"},tags:["autodocs"]},r={render:()=>e.jsx(t,{defaultSize:{width:300,height:200},children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#f5f5f5",border:"1px solid #e0e0e0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Drag edges to resize"})})},d={render:()=>e.jsx(t,{defaultSize:{width:300,height:150},enable:{right:!0},children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#e6f7ff",border:"1px solid #91d5ff",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Resize horizontally only"})})},s={render:()=>e.jsx(t,{defaultSize:{width:300,height:150},enable:{bottom:!0},children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Resize vertically only"})})},a={render:()=>e.jsx(t,{defaultSize:{width:300,height:200},minWidth:200,maxWidth:500,minHeight:100,maxHeight:400,children:e.jsxs("div",{style:{width:"100%",height:"100%",background:"#fff7e6",border:"1px solid #ffd591",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("span",{children:"Min: 200x100"}),e.jsx("span",{children:"Max: 500x400"})]})})},o={render:()=>{const[n,f]=B.useState({width:300,height:200});return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"1rem"},children:["Current size: ",n.width,"px × ",n.height,"px"]}),e.jsx(t,{size:n,onResizeStop:(G,V,_,i)=>{f({width:n.width+i.width,height:n.height+i.height})},children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#f9f0ff",border:"1px solid #d3adf7",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Controlled resize"})})]})}},l={render:()=>e.jsx(t,{defaultSize:{width:300,height:200},grid:[50,50],children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#fff1f0",border:"1px solid #ffa39e",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Snaps to 50px grid"})})},h={render:()=>e.jsx(t,{defaultSize:{width:300,height:200},lockAspectRatio:!0,children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#e6fffb",border:"1px solid #87e8de",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Maintains aspect ratio"})})},c={render:()=>{const[n,f]=B.useState(200);return e.jsxs("div",{style:{display:"flex",height:"300px",border:"1px solid #e0e0e0",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(t,{size:{width:n,height:"100%"},enable:{right:!0},minWidth:100,maxWidth:400,onResizeStop:(G,V,_,i)=>{f(n+i.width)},children:e.jsxs("div",{style:{width:"100%",height:"100%",background:"#f5f5f5",padding:"1rem"},children:["Left Panel (",n,"px)"]})}),e.jsx("div",{style:{flex:1,padding:"1rem"},children:"Right Panel (flexible)"})]})}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 200
  }}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#f5f5f5',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Drag edges to resize
      </div>
    </Resizable>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,m,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 150
  }} enable={{
    right: true
  }}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#e6f7ff',
      border: '1px solid #91d5ff',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Resize horizontally only
      </div>
    </Resizable>
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,z,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 150
  }} enable={{
    bottom: true
  }}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#f6ffed',
      border: '1px solid #b7eb8f',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Resize vertically only
      </div>
    </Resizable>
}`,...(R=(z=s.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var w,j,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 200
  }} minWidth={200} maxWidth={500} minHeight={100} maxHeight={400}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#fff7e6',
      border: '1px solid #ffd591',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <span>Min: 200x100</span>
        <span>Max: 500x400</span>
      </div>
    </Resizable>
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,C,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState({
      width: 300,
      height: 200
    });
    return <div>
        <p style={{
        marginBottom: '1rem'
      }}>
          Current size: {size.width}px × {size.height}px
        </p>
        <Resizable size={size} onResizeStop={(e, direction, ref, d) => {
        setSize({
          width: size.width + d.width,
          height: size.height + d.height
        });
      }}>
          <div style={{
          width: '100%',
          height: '100%',
          background: '#f9f0ff',
          border: '1px solid #d3adf7',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            Controlled resize
          </div>
        </Resizable>
      </div>;
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var W,I,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 200
  }} grid={[50, 50]}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#fff1f0',
      border: '1px solid #ffa39e',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Snaps to 50px grid
      </div>
    </Resizable>
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,H,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Resizable defaultSize={{
    width: 300,
    height: 200
  }} lockAspectRatio>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#e6fffb',
      border: '1px solid #87e8de',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Maintains aspect ratio
      </div>
    </Resizable>
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var L,A,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [leftWidth, setLeftWidth] = useState(200);
    return <div style={{
      display: 'flex',
      height: '300px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
        <Resizable size={{
        width: leftWidth,
        height: '100%'
      }} enable={{
        right: true
      }} minWidth={100} maxWidth={400} onResizeStop={(e, direction, ref, d) => {
        setLeftWidth(leftWidth + d.width);
      }}>
          <div style={{
          width: '100%',
          height: '100%',
          background: '#f5f5f5',
          padding: '1rem'
        }}>
            Left Panel ({leftWidth}px)
          </div>
        </Resizable>
        <div style={{
        flex: 1,
        padding: '1rem'
      }}>
          Right Panel (flexible)
        </div>
      </div>;
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const J=["Default","Horizontal","Vertical","WithMinMax","Controlled","Grid","AspectRatio","SplitPane"];export{h as AspectRatio,o as Controlled,r as Default,l as Grid,d as Horizontal,c as SplitPane,s as Vertical,a as WithMinMax,J as __namedExportsOrder,F as default};
