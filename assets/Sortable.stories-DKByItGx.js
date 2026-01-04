import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{cg as i,K as A}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const L={title:"Data Display/Sortable",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"The direction of the sortable list"},disabled:{control:"boolean",description:"Disable sorting"}}},a={render:()=>{const[s,r]=o.useState([{id:"1",content:"Item 1"},{id:"2",content:"Item 2"},{id:"3",content:"Item 3"},{id:"4",content:"Item 4"},{id:"5",content:"Item 5"}]);return e.jsx(i,{items:s,onReorder:r,renderItem:n=>e.jsx("div",{style:{padding:"1rem",background:"#fff",border:"1px solid #e2e8f0",borderRadius:"8px",marginBottom:"0.5rem",cursor:"grab"},children:n.content}),getKey:n=>n.id,style:{width:300}})}},d={render:()=>{const[s,r]=o.useState([{id:"1",title:"First Task",priority:"High"},{id:"2",title:"Second Task",priority:"Medium"},{id:"3",title:"Third Task",priority:"Low"},{id:"4",title:"Fourth Task",priority:"High"}]);return e.jsx(i,{items:s,onReorder:r,renderItem:(n,{handleProps:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"0.75rem 1rem",background:"#fff",border:"1px solid #e2e8f0",borderRadius:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{...t,style:{cursor:"grab",marginRight:"0.75rem",color:"#94a3b8"},children:"⋮⋮"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:500},children:n.title}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:["Priority: ",n.priority]})]})]}),getKey:n=>n.id,style:{width:350}})}},m={render:()=>{const[s,r]=o.useState([{id:"1",label:"Tab 1"},{id:"2",label:"Tab 2"},{id:"3",label:"Tab 3"},{id:"4",label:"Tab 4"}]);return e.jsx(i,{items:s,onReorder:r,direction:"horizontal",renderItem:n=>e.jsx("div",{style:{padding:"0.5rem 1rem",background:"#f1f5f9",border:"1px solid #e2e8f0",borderRadius:"4px",marginRight:"0.5rem",cursor:"grab",whiteSpace:"nowrap"},children:n.label}),getKey:n=>n.id,style:{display:"flex"}})}},l={render:()=>{const[s,r]=o.useState([{id:"1",title:"Design homepage",status:"In Progress",assignee:"John"},{id:"2",title:"Implement API",status:"Todo",assignee:"Jane"},{id:"3",title:"Write tests",status:"Todo",assignee:"Bob"},{id:"4",title:"Deploy to staging",status:"Done",assignee:"Alice"}]),n={Todo:"#f59e0b","In Progress":"#3b82f6",Done:"#22c55e"};return e.jsx(i,{items:s,onReorder:r,renderItem:t=>e.jsxs(A,{style:{padding:"1rem",marginBottom:"0.75rem",cursor:"grab"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontWeight:500},children:t.title}),e.jsx("span",{style:{fontSize:"0.75rem",padding:"2px 8px",borderRadius:"9999px",background:n[t.status]+"20",color:n[t.status]},children:t.status})]}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Assigned to ",t.assignee]})]}),getKey:t=>t.id,style:{width:350}})}},c={render:()=>{const[s]=o.useState([{id:"1",content:"Item 1 (cannot drag)"},{id:"2",content:"Item 2 (cannot drag)"},{id:"3",content:"Item 3 (cannot drag)"}]);return e.jsx(i,{items:s,onReorder:()=>{},disabled:!0,renderItem:r=>e.jsx("div",{style:{padding:"1rem",background:"#f1f5f9",border:"1px solid #e2e8f0",borderRadius:"8px",marginBottom:"0.5rem",opacity:.7,cursor:"not-allowed"},children:r.content}),getKey:r=>r.id,style:{width:300}})}},p={render:()=>{const[s,r]=o.useState([{id:"1",emoji:"🍎",name:"Apple"},{id:"2",emoji:"🍌",name:"Banana"},{id:"3",emoji:"🍇",name:"Grapes"},{id:"4",emoji:"🍊",name:"Orange"},{id:"5",emoji:"🍓",name:"Strawberry"}]);return e.jsx(i,{items:s,onReorder:r,renderItem:(n,{isDragging:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1rem",background:t?"#e0f2fe":"#fff",border:`2px solid ${t?"#0ea5e9":"#e2e8f0"}`,borderRadius:"8px",marginBottom:"0.5rem",cursor:"grab",transition:"all 0.2s",transform:t?"scale(1.02)":"scale(1)",boxShadow:t?"0 4px 12px rgba(0,0,0,0.15)":"none"},children:[e.jsx("span",{style:{fontSize:"1.5rem"},children:n.emoji}),e.jsx("span",{style:{fontWeight:500},children:n.name})]}),getKey:n=>n.id,style:{width:300}})}},g={render:()=>{const[s,r]=o.useState([{id:"1",step:"Preheat oven to 350°F"},{id:"2",step:"Mix dry ingredients"},{id:"3",step:"Add wet ingredients"},{id:"4",step:"Pour into baking pan"},{id:"5",step:"Bake for 30 minutes"}]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#64748b"},children:"Drag to reorder recipe steps:"}),e.jsx(i,{items:s,onReorder:r,renderItem:(n,{index:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1rem",background:"#fff",border:"1px solid #e2e8f0",borderRadius:"8px",marginBottom:"0.5rem",cursor:"grab"},children:[e.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:"#3b82f6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600},children:t+1}),e.jsx("span",{children:n.step})]}),getKey:n=>n.id,style:{width:350}})]})}};var u,b,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      content: 'Item 1'
    }, {
      id: '2',
      content: 'Item 2'
    }, {
      id: '3',
      content: 'Item 3'
    }, {
      id: '4',
      content: 'Item 4'
    }, {
      id: '5',
      content: 'Item 5'
    }]);
    return <Sortable items={items} onReorder={setItems} renderItem={item => <div style={{
      padding: '1rem',
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      marginBottom: '0.5rem',
      cursor: 'grab'
    }}>
            {item.content}
          </div>} getKey={item => item.id} style={{
      width: 300
    }} />;
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,x,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      title: 'First Task',
      priority: 'High'
    }, {
      id: '2',
      title: 'Second Task',
      priority: 'Medium'
    }, {
      id: '3',
      title: 'Third Task',
      priority: 'Low'
    }, {
      id: '4',
      title: 'Fourth Task',
      priority: 'High'
    }]);
    return <Sortable items={items} onReorder={setItems} renderItem={(item, {
      handleProps
    }) => <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1rem',
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      marginBottom: '0.5rem'
    }}>
            <span {...handleProps} style={{
        cursor: 'grab',
        marginRight: '0.75rem',
        color: '#94a3b8'
      }}>
              ⋮⋮
            </span>
            <div style={{
        flex: 1
      }}>
              <div style={{
          fontWeight: 500
        }}>{item.title}</div>
              <div style={{
          fontSize: '0.75rem',
          color: '#64748b'
        }}>
                Priority: {item.priority}
              </div>
            </div>
          </div>} getKey={item => item.id} style={{
      width: 350
    }} />;
  }
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,S,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      label: 'Tab 1'
    }, {
      id: '2',
      label: 'Tab 2'
    }, {
      id: '3',
      label: 'Tab 3'
    }, {
      id: '4',
      label: 'Tab 4'
    }]);
    return <Sortable items={items} onReorder={setItems} direction="horizontal" renderItem={item => <div style={{
      padding: '0.5rem 1rem',
      background: '#f1f5f9',
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      marginRight: '0.5rem',
      cursor: 'grab',
      whiteSpace: 'nowrap'
    }}>
            {item.label}
          </div>} getKey={item => item.id} style={{
      display: 'flex'
    }} />;
  }
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,R,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      title: 'Design homepage',
      status: 'In Progress',
      assignee: 'John'
    }, {
      id: '2',
      title: 'Implement API',
      status: 'Todo',
      assignee: 'Jane'
    }, {
      id: '3',
      title: 'Write tests',
      status: 'Todo',
      assignee: 'Bob'
    }, {
      id: '4',
      title: 'Deploy to staging',
      status: 'Done',
      assignee: 'Alice'
    }]);
    const statusColors: Record<string, string> = {
      'Todo': '#f59e0b',
      'In Progress': '#3b82f6',
      'Done': '#22c55e'
    };
    return <Sortable items={items} onReorder={setItems} renderItem={item => <Card style={{
      padding: '1rem',
      marginBottom: '0.75rem',
      cursor: 'grab'
    }}>
            <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem'
      }}>
              <span style={{
          fontWeight: 500
        }}>{item.title}</span>
              <span style={{
          fontSize: '0.75rem',
          padding: '2px 8px',
          borderRadius: '9999px',
          background: statusColors[item.status] + '20',
          color: statusColors[item.status]
        }}>
                {item.status}
              </span>
            </div>
            <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>
              Assigned to {item.assignee}
            </div>
          </Card>} getKey={item => item.id} style={{
      width: 350
    }} />;
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var k,T,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [items] = useState([{
      id: '1',
      content: 'Item 1 (cannot drag)'
    }, {
      id: '2',
      content: 'Item 2 (cannot drag)'
    }, {
      id: '3',
      content: 'Item 3 (cannot drag)'
    }]);
    return <Sortable items={items} onReorder={() => {}} disabled renderItem={item => <div style={{
      padding: '1rem',
      background: '#f1f5f9',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      marginBottom: '0.5rem',
      opacity: 0.7,
      cursor: 'not-allowed'
    }}>
            {item.content}
          </div>} getKey={item => item.id} style={{
      width: 300
    }} />;
  }
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var D,K,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      emoji: '🍎',
      name: 'Apple'
    }, {
      id: '2',
      emoji: '🍌',
      name: 'Banana'
    }, {
      id: '3',
      emoji: '🍇',
      name: 'Grapes'
    }, {
      id: '4',
      emoji: '🍊',
      name: 'Orange'
    }, {
      id: '5',
      emoji: '🍓',
      name: 'Strawberry'
    }]);
    return <Sortable items={items} onReorder={setItems} renderItem={(item, {
      isDragging
    }) => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      background: isDragging ? '#e0f2fe' : '#fff',
      border: \`2px solid \${isDragging ? '#0ea5e9' : '#e2e8f0'}\`,
      borderRadius: '8px',
      marginBottom: '0.5rem',
      cursor: 'grab',
      transition: 'all 0.2s',
      transform: isDragging ? 'scale(1.02)' : 'scale(1)',
      boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
    }}>
            <span style={{
        fontSize: '1.5rem'
      }}>{item.emoji}</span>
            <span style={{
        fontWeight: 500
      }}>{item.name}</span>
          </div>} getKey={item => item.id} style={{
      width: 300
    }} />;
  }
}`,...(z=(K=p.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var P,W,C;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      step: 'Preheat oven to 350°F'
    }, {
      id: '2',
      step: 'Mix dry ingredients'
    }, {
      id: '3',
      step: 'Add wet ingredients'
    }, {
      id: '4',
      step: 'Pour into baking pan'
    }, {
      id: '5',
      step: 'Bake for 30 minutes'
    }]);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#64748b'
      }}>
          Drag to reorder recipe steps:
        </p>
        <Sortable items={items} onReorder={setItems} renderItem={(item, {
        index
      }) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        marginBottom: '0.5rem',
        cursor: 'grab'
      }}>
              <span style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#3b82f6',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 600
        }}>
                {index + 1}
              </span>
              <span>{item.step}</span>
            </div>} getKey={item => item.id} style={{
        width: 350
      }} />
      </div>;
  }
}`,...(C=(W=g.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const M=["Default","WithHandles","Horizontal","KanbanCards","Disabled","WithAnimation","OrderedList"];export{a as Default,c as Disabled,m as Horizontal,l as KanbanCards,g as OrderedList,p as WithAnimation,d as WithHandles,M as __namedExportsOrder,L as default};
