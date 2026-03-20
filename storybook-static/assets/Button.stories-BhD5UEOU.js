import{b as t}from"./iframe-DhmcHOqK.js";import{B as e}from"./Button-LgWMcC4P.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Button"},a={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${e({variant:"primary",size:"large",label:"Primary Default"})}
        ${e({variant:"primary",size:"large",label:"Primary Disabled",disabled:!0})}
        ${e({variant:"secondary",size:"large",label:"Secondary Default"})}
        ${e({variant:"secondary",size:"large",label:"Secondary Disabled",disabled:!0})}
        ${e({variant:"outline",size:"large",label:"Outline Default"})}
        ${e({variant:"outline",size:"large",label:"Outline Disabled",disabled:!0})}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${e({variant:"primary",size:"default",label:"Primary Default"})}
        ${e({variant:"primary",size:"default",label:"Primary Disabled",disabled:!0})}
        ${e({variant:"secondary",size:"default",label:"Secondary Default"})}
        ${e({variant:"secondary",size:"default",label:"Secondary Disabled",disabled:!0})}
        ${e({variant:"outline",size:"default",label:"Outline Default"})}
        ${e({variant:"outline",size:"default",label:"Outline Disabled",disabled:!0})}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${e({variant:"primary",size:"large",label:"Primary Default",icon:"book"})}
        ${e({variant:"primary",size:"large",label:"Primary Disabled",icon:"book",disabled:!0})}
        ${e({variant:"secondary",size:"large",label:"Secondary Default",icon:"book"})}
        ${e({variant:"secondary",size:"large",label:"Secondary Disabled",icon:"book",disabled:!0})}
        ${e({variant:"outline",size:"large",label:"Outline Default",icon:"book"})}
        ${e({variant:"outline",size:"large",label:"Outline Disabled",icon:"book",disabled:!0})}
      </div>
    </div>
  `},n={render:()=>e({variant:"primary",size:"large",label:"Primary Button",icon:"book"})},r={render:()=>e({variant:"secondary",size:"large",label:"Secondary Button"})},l={render:()=>e({variant:"outline",size:"large",label:"Outline Button"})},i={render:()=>t`
    <div style="display: flex; gap: 16px;">
      ${e({variant:"primary",size:"large",label:"Primary",disabled:!0})}
      ${e({variant:"secondary",size:"large",label:"Secondary",disabled:!0})}
      ${e({variant:"outline",size:"large",label:"Outline",disabled:!0})}
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        \${Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary Default'
  })}
        \${Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary Disabled',
    disabled: true
  })}
        \${Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary Default'
  })}
        \${Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary Disabled',
    disabled: true
  })}
        \${Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline Default'
  })}
        \${Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline Disabled',
    disabled: true
  })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        \${Button({
    variant: 'primary',
    size: 'default',
    label: 'Primary Default'
  })}
        \${Button({
    variant: 'primary',
    size: 'default',
    label: 'Primary Disabled',
    disabled: true
  })}
        \${Button({
    variant: 'secondary',
    size: 'default',
    label: 'Secondary Default'
  })}
        \${Button({
    variant: 'secondary',
    size: 'default',
    label: 'Secondary Disabled',
    disabled: true
  })}
        \${Button({
    variant: 'outline',
    size: 'default',
    label: 'Outline Default'
  })}
        \${Button({
    variant: 'outline',
    size: 'default',
    label: 'Outline Disabled',
    disabled: true
  })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        \${Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary Default',
    icon: 'book'
  })}
        \${Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary Disabled',
    icon: 'book',
    disabled: true
  })}
        \${Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary Default',
    icon: 'book'
  })}
        \${Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary Disabled',
    icon: 'book',
    disabled: true
  })}
        \${Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline Default',
    icon: 'book'
  })}
        \${Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline Disabled',
    icon: 'book',
    disabled: true
  })}
      </div>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary Button',
    icon: 'book'
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary Button'
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline Button'
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 16px;">
      \${Button({
    variant: 'primary',
    size: 'large',
    label: 'Primary',
    disabled: true
  })}
      \${Button({
    variant: 'secondary',
    size: 'large',
    label: 'Secondary',
    disabled: true
  })}
      \${Button({
    variant: 'outline',
    size: 'large',
    label: 'Outline',
    disabled: true
  })}
    </div>
  \`
}`,...i.parameters?.docs?.source}}};const b=["AllVariants","Primary","Secondary","Outline","Disabled"];export{a as AllVariants,i as Disabled,l as Outline,n as Primary,r as Secondary,b as __namedExportsOrder,u as default};
