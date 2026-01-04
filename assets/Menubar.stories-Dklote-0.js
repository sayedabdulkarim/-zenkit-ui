import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bc as t,bd as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const S={title:"Navigation/Menubar",component:t,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsxs(t,{children:[e.jsx(r,{trigger:"File",items:[{key:"new",label:"New File",shortcut:"Cmd+N"},{key:"open",label:"Open...",shortcut:"Cmd+O"},{key:"save",label:"Save",shortcut:"Cmd+S"},{key:"divider1",type:"separator"},{key:"exit",label:"Exit"}]}),e.jsx(r,{trigger:"Edit",items:[{key:"undo",label:"Undo",shortcut:"Cmd+Z"},{key:"redo",label:"Redo",shortcut:"Cmd+Shift+Z"},{key:"divider1",type:"separator"},{key:"cut",label:"Cut",shortcut:"Cmd+X"},{key:"copy",label:"Copy",shortcut:"Cmd+C"},{key:"paste",label:"Paste",shortcut:"Cmd+V"}]}),e.jsx(r,{trigger:"View",items:[{key:"zoom-in",label:"Zoom In",shortcut:"Cmd++"},{key:"zoom-out",label:"Zoom Out",shortcut:"Cmd+-"},{key:"divider1",type:"separator"},{key:"fullscreen",label:"Fullscreen",shortcut:"F11"}]}),e.jsx(r,{trigger:"Help",items:[{key:"docs",label:"Documentation"},{key:"about",label:"About"}]})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(r,{trigger:"View",items:[{key:"toolbar",label:"Show Toolbar",type:"checkbox",checked:!0},{key:"sidebar",label:"Show Sidebar",type:"checkbox",checked:!0},{key:"statusbar",label:"Show Status Bar",type:"checkbox",checked:!1}]}),e.jsx(r,{trigger:"Format",items:[{key:"bold",label:"Bold",shortcut:"Cmd+B"},{key:"italic",label:"Italic",shortcut:"Cmd+I"},{key:"underline",label:"Underline",shortcut:"Cmd+U"}]})]})},o={render:()=>e.jsx(t,{children:e.jsx(r,{trigger:"File",items:[{key:"new",label:"New",children:[{key:"new-file",label:"New File"},{key:"new-folder",label:"New Folder"},{key:"new-project",label:"New Project"}]},{key:"open",label:"Open Recent",children:[{key:"recent-1",label:"document.txt"},{key:"recent-2",label:"project.json"},{key:"recent-3",label:"styles.css"}]},{key:"divider",type:"separator"},{key:"exit",label:"Exit"}]})})},s={render:()=>e.jsx(t,{children:e.jsx(r,{trigger:"File",items:[{key:"new",label:"New",icon:"📄"},{key:"open",label:"Open",icon:"📂"},{key:"save",label:"Save",icon:"💾"},{key:"divider",type:"separator"},{key:"print",label:"Print",icon:"🖨️"}]})})};var i,c,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu trigger="File" items={[{
      key: 'new',
      label: 'New File',
      shortcut: 'Cmd+N'
    }, {
      key: 'open',
      label: 'Open...',
      shortcut: 'Cmd+O'
    }, {
      key: 'save',
      label: 'Save',
      shortcut: 'Cmd+S'
    }, {
      key: 'divider1',
      type: 'separator'
    }, {
      key: 'exit',
      label: 'Exit'
    }]} />
      <MenubarMenu trigger="Edit" items={[{
      key: 'undo',
      label: 'Undo',
      shortcut: 'Cmd+Z'
    }, {
      key: 'redo',
      label: 'Redo',
      shortcut: 'Cmd+Shift+Z'
    }, {
      key: 'divider1',
      type: 'separator'
    }, {
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
    }]} />
      <MenubarMenu trigger="View" items={[{
      key: 'zoom-in',
      label: 'Zoom In',
      shortcut: 'Cmd++'
    }, {
      key: 'zoom-out',
      label: 'Zoom Out',
      shortcut: 'Cmd+-'
    }, {
      key: 'divider1',
      type: 'separator'
    }, {
      key: 'fullscreen',
      label: 'Fullscreen',
      shortcut: 'F11'
    }]} />
      <MenubarMenu trigger="Help" items={[{
      key: 'docs',
      label: 'Documentation'
    }, {
      key: 'about',
      label: 'About'
    }]} />
    </Menubar>
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,b,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu trigger="View" items={[{
      key: 'toolbar',
      label: 'Show Toolbar',
      type: 'checkbox',
      checked: true
    }, {
      key: 'sidebar',
      label: 'Show Sidebar',
      type: 'checkbox',
      checked: true
    }, {
      key: 'statusbar',
      label: 'Show Status Bar',
      type: 'checkbox',
      checked: false
    }]} />
      <MenubarMenu trigger="Format" items={[{
      key: 'bold',
      label: 'Bold',
      shortcut: 'Cmd+B'
    }, {
      key: 'italic',
      label: 'Italic',
      shortcut: 'Cmd+I'
    }, {
      key: 'underline',
      label: 'Underline',
      shortcut: 'Cmd+U'
    }]} />
    </Menubar>
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,k,m;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu trigger="File" items={[{
      key: 'new',
      label: 'New',
      children: [{
        key: 'new-file',
        label: 'New File'
      }, {
        key: 'new-folder',
        label: 'New Folder'
      }, {
        key: 'new-project',
        label: 'New Project'
      }]
    }, {
      key: 'open',
      label: 'Open Recent',
      children: [{
        key: 'recent-1',
        label: 'document.txt'
      }, {
        key: 'recent-2',
        label: 'project.json'
      }, {
        key: 'recent-3',
        label: 'styles.css'
      }]
    }, {
      key: 'divider',
      type: 'separator'
    }, {
      key: 'exit',
      label: 'Exit'
    }]} />
    </Menubar>
}`,...(m=(k=o.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var p,h,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu trigger="File" items={[{
      key: 'new',
      label: 'New',
      icon: '📄'
    }, {
      key: 'open',
      label: 'Open',
      icon: '📂'
    }, {
      key: 'save',
      label: 'Save',
      icon: '💾'
    }, {
      key: 'divider',
      type: 'separator'
    }, {
      key: 'print',
      label: 'Print',
      icon: '🖨️'
    }]} />
    </Menubar>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const j=["Default","WithCheckbox","WithSubmenus","WithIcons"];export{a as Default,l as WithCheckbox,s as WithIcons,o as WithSubmenus,j as __namedExportsOrder,S as default};
