import{b as n}from"./iframe-DhmcHOqK.js";const c=({disabled:s=!1,icon:t,label:a="Button",onClick:b,size:l="large",variant:o="primary"})=>{const r=["btn",`btn--${o}`,`btn--${l}`].join(" ");return n`
    <button class=${r} ?disabled=${s} @click=${b}>
      ${t?n`<span class="btn__icon" aria-hidden="true">${t}</span>`:""}
      <span class="btn__label">${a}</span>
    </button>
  `};export{c as B};
