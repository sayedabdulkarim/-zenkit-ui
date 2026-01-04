import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d8 as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const T={title:"Data Display/VirtualList",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s=i=>Array.from({length:i},(t,n)=>({id:n+1,name:`Item ${n+1}`,description:`This is the description for item ${n+1}`})),a={render:()=>{const i=s(1e3);return e.jsx(r,{data:i,height:400,width:400,itemHeight:50,renderItem:(t,n)=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #e2e8f0",background:n%2===0?"#fff":"#f8fafc"},children:e.jsx("span",{style:{fontWeight:500},children:t.name})}),getKey:t=>t.id})}},d={render:()=>{const i=s(500);return e.jsx(r,{data:i,height:400,width:400,itemHeight:t=>t%3===0?80:50,renderItem:(t,n)=>e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"8px 16px",borderBottom:"1px solid #e2e8f0",background:n%2===0?"#fff":"#f8fafc"},children:[e.jsx("span",{style:{fontWeight:500},children:t.name}),n%3===0&&e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:t.description})]}),getKey:t=>t.id})}},o={render:()=>{const i=s(100);return e.jsx("div",{style:{padding:"8px",background:"#f1f5f9",borderRadius:"8px"},children:e.jsx(r,{data:i,height:384,width:384,itemHeight:56,gap:8,renderItem:(t,n)=>e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",padding:"0 16px",background:"#fff",borderRadius:"8px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[e.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"#3b82f6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",marginRight:12,fontWeight:600,fontSize:"14px"},children:t.id}),e.jsx("span",{style:{fontWeight:500},children:t.name})]}),getKey:t=>t.id})})}},m={render:()=>e.jsx(r,{data:[],height:400,width:400,itemHeight:50,loading:!0,loadingComponent:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx("span",{children:"Loading items..."})}),renderItem:()=>null})},l={render:()=>e.jsx(r,{data:[],height:400,width:400,itemHeight:50,emptyComponent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},children:[e.jsx("span",{style:{fontSize:"3rem"},children:"📭"}),e.jsx("span",{style:{marginTop:"1rem",color:"#64748b"},children:"No items to display"})]}),renderItem:()=>null})},c={render:()=>{const i=s(1e4);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#64748b"},children:"Rendering 10,000 items with virtualization"}),e.jsx(r,{data:i,height:400,width:500,itemHeight:40,renderItem:(t,n)=>e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",borderBottom:"1px solid #e2e8f0",background:n%2===0?"#fff":"#f8fafc"},children:[e.jsx("span",{children:t.name}),e.jsxs("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:["Row ",n+1," of 10,000"]})]}),getKey:t=>t.id})]})}},p={render:()=>{const i=s(500);return e.jsx(r,{data:i,height:400,width:400,itemHeight:50,overscan:10,renderItem:(t,n)=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",padding:"0 16px",borderBottom:"1px solid #e2e8f0"},children:t.name}),getKey:t=>t.id})}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const items = generateItems(1000);
    return <VirtualList data={items} height={400} width={400} itemHeight={50} renderItem={(item, index) => <div style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: '1px solid #e2e8f0',
      background: index % 2 === 0 ? '#fff' : '#f8fafc'
    }}>
            <span style={{
        fontWeight: 500
      }}>{item.name}</span>
          </div>} getKey={item => item.id} />;
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,u,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const items = generateItems(500);
    return <VirtualList data={items} height={400} width={400} itemHeight={index => index % 3 === 0 ? 80 : 50} renderItem={(item, index) => <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8px 16px',
      borderBottom: '1px solid #e2e8f0',
      background: index % 2 === 0 ? '#fff' : '#f8fafc'
    }}>
            <span style={{
        fontWeight: 500
      }}>{item.name}</span>
            {index % 3 === 0 && <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>
                {item.description}
              </span>}
          </div>} getKey={item => item.id} />;
  }
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,j,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const items = generateItems(100);
    return <div style={{
      padding: '8px',
      background: '#f1f5f9',
      borderRadius: '8px'
    }}>
        <VirtualList data={items} height={384} width={384} itemHeight={56} gap={8} renderItem={(item, index) => <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
              <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#3b82f6',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 12,
          fontWeight: 600,
          fontSize: '14px'
        }}>
                {item.id}
              </div>
              <span style={{
          fontWeight: 500
        }}>{item.name}</span>
            </div>} getKey={item => item.id} />
      </div>;
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,w,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VirtualList data={[]} height={400} width={400} itemHeight={50} loading loadingComponent={<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }}>
          <span>Loading items...</span>
        </div>} renderItem={() => null} />
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,H,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <VirtualList data={[]} height={400} width={400} itemHeight={50} emptyComponent={<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }}>
          <span style={{
      fontSize: '3rem'
    }}>📭</span>
          <span style={{
      marginTop: '1rem',
      color: '#64748b'
    }}>No items to display</span>
        </div>} renderItem={() => null} />
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,k,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const items = generateItems(10000);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#64748b'
      }}>
          Rendering 10,000 items with virtualization
        </p>
        <VirtualList data={items} height={400} width={500} itemHeight={40} renderItem={(item, index) => <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        borderBottom: '1px solid #e2e8f0',
        background: index % 2 === 0 ? '#fff' : '#f8fafc'
      }}>
              <span>{item.name}</span>
              <span style={{
          color: '#64748b',
          fontSize: '0.875rem'
        }}>
                Row {index + 1} of 10,000
              </span>
            </div>} getKey={item => item.id} />
      </div>;
  }
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var z,B,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const items = generateItems(500);
    return <VirtualList data={items} height={400} width={400} itemHeight={50} overscan={10} renderItem={(item, index) => <div style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: '1px solid #e2e8f0'
    }}>
            {item.name}
          </div>} getKey={item => item.id} />;
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const _=["Default","VariableHeight","WithGap","LoadingState","EmptyState","LargeDataset","CustomOverscan"];export{p as CustomOverscan,a as Default,l as EmptyState,c as LargeDataset,m as LoadingState,d as VariableHeight,o as WithGap,_ as __namedExportsOrder,T as default};
