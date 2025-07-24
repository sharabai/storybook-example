import{j as s}from"./jsx-runtime-D_zvdyIk.js";const d={title:"Flyhomes/Elements/Label",render:n,parameters:{layout:"centered",docs:{description:{component:"Displays an accessible label to associate with a control."}}},tags:["autodocs","UI","Button"],args:{}},e={args:{text:"Default",id:"element-label-default"}},a={args:{text:"Disabled",disabled:!0,id:"element-label-disabled"}};function n({text:r,disabled:l,id:t}){return s.jsxs("div",{className:"flex items-center gap-sm",children:[s.jsx("input",{id:t,disabled:l,type:"checkbox",className:"peer"}),s.jsx("label",{htmlFor:t,children:r})]})}e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Default",
    id: "element-label-default"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    disabled: true,
    id: "element-label-disabled"
  }
}`,...a.parameters?.docs?.source}}};const c=["Default","Disabled"];export{e as Default,a as Disabled,c as __namedExportsOrder,d as default};
