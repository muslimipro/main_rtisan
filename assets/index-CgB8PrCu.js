import{B as T,m as z,o as n,c as r,H as C,b as F,ad as N,r as f,f as j,g as x,h as H,l as L,i as t,t as i,a0 as M,a_ as P,F as v,k as m,j as S,y as U,w as E}from"./index-CRqy2v5g.js";import{a as G}from"./index-BbReKCKG.js";import{s as q}from"./index-CsE7fwuf.js";import{_ as A}from"./MainHeader.vue_vue_type_script_setup_true_lang-B6pK3-mT.js";import"./index-DK15Ya2N.js";import"./index-DHTXTWdU.js";import"./index-CtlvT3kO.js";import"./logo-D1-3uCnC.js";var D=function(o){var e=o.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},O={root:function(o){var e=o.instance,c=o.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":c.autoResize,"p-textarea-sm p-inputfield-sm":c.size==="small","p-textarea-lg p-inputfield-lg":c.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},Y=T.extend({name:"textarea",theme:D,classes:O}),J={name:"BaseTextarea",extends:G,props:{autoResize:Boolean},style:Y,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},R={name:"Textarea",extends:J,inheritAttrs:!1,observer:null,mounted:function(){var o=this;this.autoResize&&(this.observer=new ResizeObserver(function(){o.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(o){this.autoResize&&this.resize(),this.writeValue(o.target.value,o)}},computed:{attrs:function(){return z(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},K=["value","disabled","aria-invalid"];function Q(a,o,e,c,p,u){return n(),r("textarea",z({class:a.cx("root"),value:a.d_value,disabled:a.disabled,"aria-invalid":a.invalid||void 0,onInput:o[0]||(o[0]=function(){return u.onInput&&u.onInput.apply(u,arguments)})},u.attrs),null,16,K)}R.render=Q;const W={GetRoadmap:X};async function X(a){const{data:o}=await C.post("/ai/roadmap",{prompt:a});return o}const Z={class:"flex flex-col items-center min-h-screen bg-slate-50 gap-6"},ee={key:1,class:"flex flex-1 justify-center px-4 md:px-28 py-8"},te={class:"flex gap-8"},ae={key:0,class:"flex flex-col"},oe={class:"relative flex flex-col justify-between w-[800px] min-h-28 bg-purple-100 border border-gray-100 rounded-3xl p-2 gap-2 shadow-md shadow-purple-300"},ne={class:"absolute right-5 bottom-5"},re={key:1,class:"flex flex-col w-full h-full gap-4"},se={class:"relative flex bg-slate-50 border border-gray-100 rounded-3xl p-5"},le={class:"flex flex-col flex-1"},ie={class:"text-xl font-bold"},de={key:0,class:"flex flex-col gap-2 w-full"},ce=["disabled"],ue={key:1,class:"flex items-center gap-2 text-xl"},pe=["title"],fe={class:"relative flex bg-slate-100 border border-gray-100 rounded-3xl p-5 gap-5"},he={class:"bg-white border border-gray-200 rounded-2xl p-4 w-1/3"},xe={class:"font-semibold mb-2"},be={class:"list-disc list-inside space-y-1"},ge=["href"],ve={key:1},me={class:"bg-white border border-gray-200 rounded-2xl p-4 w-2/3"},ye={class:"font-semibold mb-2"},_e={class:"list-decimal list-inside space-y-2"},we={class:"text-xl font-bold"},Ce=F({__name:"CreatorModeView",setup(a){const{t:o}=N(),e=U(),c=f(!0),p=f(!1),u=f(!1),y=f(""),_=f([]),w=f([]),d=f("");async function b(){if(d.value!="")try{p.value=!0;const l=await W.GetRoadmap(d.value);y.value=o("pages.creator.defaultName"),_.value=l.plan,w.value=l.components,c.value=!1,u.value=!1}catch(l){console.error("Error on GetRoadmap",l)}finally{p.value=!1}}return j(()=>{e.query.message&&(d.value=e.query.message,d.value.length>5&&(c.value=!1,b()))}),(l,h)=>{const B=q,V=R,k=E;return n(),r("div",Z,[x(H(A),{class:"bg-white"}),p.value?(n(),L(B,{key:0})):(n(),r("div",ee,[t("div",te,[c.value?(n(),r("div",ae,[t("div",oe,[x(V,{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=s=>d.value=s),placeholder:l.$t("pages.creator.placeholder"),variant:"filled",rows:"10",cols:"30",class:"bg-purple-50 w-full rounded-2xl h-36"},null,8,["modelValue","placeholder"]),t("div",ne,[x(k,{label:l.$t("pages.creator.getRoadmapLabel"),severity:"help",class:"rounded-2xl bg-purple-400 border border-purple-400",loading:p.value,onClick:b},null,8,["label","loading"])])])])):(n(),r("div",re,[t("div",se,[t("div",le,[t("h2",ie,i(y.value),1),u.value?(n(),r("div",de,[M(t("textarea",{"onUpdate:modelValue":h[1]||(h[1]=s=>d.value=s),disabled:p.value,class:"border rounded px-2 py-1 h-[80px] w-full resize-none text-xl disabled:bg-gray-100"},null,8,ce),[[P,d.value]]),x(k,{label:l.$t("pages.creator.modifyRoadmapLabel"),severity:"help",class:"rounded-full bg-purple-400 border border-purple-500 text-sm",loading:p.value,onClick:b},null,8,["label","loading"])])):(n(),r("div",ue,[t("span",null,i(d.value),1),t("button",{onClick:h[2]||(h[2]=s=>u.value=!0),class:"text-gray-500 hover:text-purple-500 transition-colors",title:l.$t("pages.creator.modify")}," ✏️ ",8,pe)]))])]),t("div",fe,[t("div",he,[t("h3",xe,i(l.$t("pages.creator.components")),1),t("ul",be,[(n(!0),r(v,null,m(w.value,(s,g)=>(n(),r("li",{key:g},[s.url!=""?(n(),r("a",{key:0,href:s.url,target:"_blank",rel:"noopener noreferrer",class:"font-bold"},i(s.name),9,ge)):(n(),r("span",ve,i(s.name),1)),S(" ("+i(s.count)+") ",1)]))),128))])]),t("div",me,[t("h3",ye,i(l.$t("pages.creator.plan")),1),t("div",_e,[(n(!0),r(v,null,m(_.value,(s,g)=>(n(),r("div",{key:g},[t("h2",we,i(s.name),1),(n(!0),r(v,null,m(s.steps,(I,$)=>(n(),r("div",{key:$},i($+1)+") "+i(I),1))),128))]))),128))])])])]))])]))])}}});export{Ce as default};
