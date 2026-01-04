import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ab as d}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const S={title:"Navigation/ContextMenu",component:d,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsx(d,{items:[{key:"cut",label:"Cut",shortcut:"Cmd+X"},{key:"copy",label:"Copy",shortcut:"Cmd+C"},{key:"paste",label:"Paste",shortcut:"Cmd+V"},{key:"divider",type:"divider"},{key:"delete",label:"Delete",shortcut:"Del"}],onSelect:n=>console.log("Selected:",n),children:e.jsx("div",{style:{padding:"4rem",background:"#f5f5f5",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center"},children:"Right-click here"})})},t={render:()=>e.jsx(d,{items:[{key:"new",label:"New",children:[{key:"file",label:"File"},{key:"folder",label:"Folder"},{key:"project",label:"Project"}]},{key:"open",label:"Open"},{key:"divider1",type:"divider"},{key:"share",label:"Share",children:[{key:"email",label:"Email"},{key:"link",label:"Copy Link"}]},{key:"divider2",type:"divider"},{key:"delete",label:"Delete",danger:!0}],onSelect:n=>console.log("Selected:",n),children:e.jsx("div",{style:{padding:"4rem",background:"#f0f8ff",border:"2px dashed #4a90d9",borderRadius:"8px",textAlign:"center"},children:"Right-click for submenu"})})},r={render:()=>e.jsx(d,{items:[{key:"edit",label:"Edit",icon:"✏️"},{key:"duplicate",label:"Duplicate",icon:"📋"},{key:"download",label:"Download",icon:"⬇️"},{key:"divider",type:"divider"},{key:"delete",label:"Delete",icon:"🗑️",danger:!0}],onSelect:n=>console.log("Selected:",n),children:e.jsx("div",{style:{padding:"4rem",background:"#fff5f5",border:"2px dashed #ff6b6b",borderRadius:"8px",textAlign:"center"},children:"Right-click for icons"})})},o={render:()=>e.jsx(d,{items:[{key:"cut",label:"Cut"},{key:"copy",label:"Copy"},{key:"paste",label:"Paste",disabled:!0},{key:"divider",type:"divider"},{key:"undo",label:"Undo",disabled:!0},{key:"redo",label:"Redo",disabled:!0}],onSelect:n=>console.log("Selected:",n),children:e.jsx("div",{style:{padding:"4rem",background:"#f5f5f5",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center"},children:"Some items disabled"})})};var i,a,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'cut',
    label: 'Cut',
    shortcut: 'Cmd+X'
  }, {
    key: 'copy',
    label: 'Copy',
    shortcut: 'Cmd+C'
  }, {
    key: 'paste',
    label: 'Paste',
    shortcut: 'Cmd+V'
  }, {
    key: 'divider',
    type: 'divider'
  }, {
    key: 'delete',
    label: 'Delete',
    shortcut: 'Del'
  }]} onSelect={key => console.log('Selected:', key)}>
      <div style={{
      padding: '4rem',
      background: '#f5f5f5',
      border: '2px dashed #ccc',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
        Right-click here
      </div>
    </ContextMenu>
}`,...(c=(a=l.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var s,y,b;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'new',
    label: 'New',
    children: [{
      key: 'file',
      label: 'File'
    }, {
      key: 'folder',
      label: 'Folder'
    }, {
      key: 'project',
      label: 'Project'
    }]
  }, {
    key: 'open',
    label: 'Open'
  }, {
    key: 'divider1',
    type: 'divider'
  }, {
    key: 'share',
    label: 'Share',
    children: [{
      key: 'email',
      label: 'Email'
    }, {
      key: 'link',
      label: 'Copy Link'
    }]
  }, {
    key: 'divider2',
    type: 'divider'
  }, {
    key: 'delete',
    label: 'Delete',
    danger: true
  }]} onSelect={key => console.log('Selected:', key)}>
      <div style={{
      padding: '4rem',
      background: '#f0f8ff',
      border: '2px dashed #4a90d9',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
        Right-click for submenu
      </div>
    </ContextMenu>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var u,p,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'edit',
    label: 'Edit',
    icon: '✏️'
  }, {
    key: 'duplicate',
    label: 'Duplicate',
    icon: '📋'
  }, {
    key: 'download',
    label: 'Download',
    icon: '⬇️'
  }, {
    key: 'divider',
    type: 'divider'
  }, {
    key: 'delete',
    label: 'Delete',
    icon: '🗑️',
    danger: true
  }]} onSelect={key => console.log('Selected:', key)}>
      <div style={{
      padding: '4rem',
      background: '#fff5f5',
      border: '2px dashed #ff6b6b',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
        Right-click for icons
      </div>
    </ContextMenu>
}`,...(k=(p=r.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var m,g,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'cut',
    label: 'Cut'
  }, {
    key: 'copy',
    label: 'Copy'
  }, {
    key: 'paste',
    label: 'Paste',
    disabled: true
  }, {
    key: 'divider',
    type: 'divider'
  }, {
    key: 'undo',
    label: 'Undo',
    disabled: true
  }, {
    key: 'redo',
    label: 'Redo',
    disabled: true
  }]} onSelect={key => console.log('Selected:', key)}>
      <div style={{
      padding: '4rem',
      background: '#f5f5f5',
      border: '2px dashed #ccc',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
        Some items disabled
      </div>
    </ContextMenu>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const R=["Default","WithSubMenu","WithIcons","DisabledItems"];export{l as Default,o as DisabledItems,r as WithIcons,t as WithSubMenu,R as __namedExportsOrder,S as default};
