import{b as d}from"./iframe-DhmcHOqK.js";import{B as t}from"./Button-LgWMcC4P.js";import"./preload-helper-PPVm8Dsz.js";const a=({actions:o=null,description:i="Here's some support text.",heading:c="This is a standard card heading",media:p=null,showButton:l=!0,variant:m="standard"})=>d`
    <section class="card card--${m}">
      <div class="card__media">
        ${p??d`<span class="card__icon" aria-hidden="true">home</span>`}
      </div>
      <div class="card__content">
        <h3 class="card__heading">${c}</h3>
        <p class="card__description">${i}</p>
      </div>
      <div class="card__button-group">
        ${o??d`
          ${l?t({variant:"primary",label:"Primary"}):""}
          ${t({variant:"secondary",label:"Secondary"})}
        `}
      </div>
    </section>
  `,h={title:"Components/Card"},r={render:()=>d`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      ${a({variant:"standard"})}
      ${a({variant:"dark"})}
    </div>
  `},n={render:()=>a({variant:"standard"})},e={render:()=>a({variant:"dark"})},s={render:()=>a({variant:"standard",showButton:!1})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      \${Card({
    variant: 'standard'
  })}
      \${Card({
    variant: 'dark'
  })}
    </div>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => Card({
    variant: 'standard'
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => Card({
    variant: 'dark'
  })
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => Card({
    variant: 'standard',
    showButton: false
  })
}`,...s.parameters?.docs?.source}}};const g=["AllVariants","Standard","Dark","WithoutPrimaryButton"];export{r as AllVariants,e as Dark,n as Standard,s as WithoutPrimaryButton,g as __namedExportsOrder,h as default};
