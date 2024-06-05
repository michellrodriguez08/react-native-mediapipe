"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[976],{9562:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(4848),i=r(8453),a=r(9489),s=r(7227);const o={sidebar_position:1},l="Installation",c={id:"intro",title:"Installation",description:"To integrate React Native MediaPipe into your project, follow these simple steps.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-native-mediapipe/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API",permalink:"/react-native-mediapipe/docs/category/api"}},u={},d=[{value:"Requirements",id:"requirements",level:3},{value:"Using npm",id:"using-npm",level:4},{value:"Using yarn",id:"using-yarn",level:4},{value:"Configuring to your Operating System",id:"configuring-to-your-operating-system",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To integrate React Native MediaPipe into your project, follow these simple steps."}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gradle minimum SDK 24 or higher"}),"\n",(0,t.jsx)(n.li,{children:"Android-SDK Version 26 or higher"}),"\n",(0,t.jsx)(n.li,{children:"iOS 12 or higher"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Open Terminal or Command Prompt:"})," Open your terminal or command prompt application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Navigate to Your Project Directory:"})," Navigate to your React Native project directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install React Native MediaPipe:"})," Run the following command to install React Native MediaPipe and its dependencies:"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-npm",children:"Using npm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install react-native-mediapipe react-native-vision-camera react-native-worklets-core\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-yarn",children:"Using yarn"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add react-native-mediapipe react-native-vision-camera react-native-worklets-core\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configuring Babel:"})," Navigate to the 'babel.config.js' file and add:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"module.exports = {\n  presets: ['module:@react-native/babel-preset'],\n  plugins: [['react-native-worklets-core/plugin']],\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configuring Gradle:"})," Navigate to the 'android/build.gradle' file and change minSdkVersion to 24"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gradle minimum SDK"})," must be 24 or higher to run"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"buildscript {\n    ext {\n        ...\n        minSdkVersion = 24 \n        ...\n    }\n    ...\n}\n\n"})}),"\n","\n",(0,t.jsx)(n.h3,{id:"configuring-to-your-operating-system",children:"Configuring to your Operating System"}),"\n",(0,t.jsxs)(a.A,{groupId:"operating-systems",children:[(0,t.jsxs)(s.A,{value:"Android",label:"Android",children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Give Permissions:"})," Navigate to your AndroidManifest.xml file and add:"]}),"\n"]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<uses-permission android:name="android.permission.CAMERA" />\n\n\x3c!-- optionally, if you want to record audio: --\x3e\n\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n'})})]}),(0,t.jsxs)(s.A,{value:"iOS",label:"iOS",children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Give Permissions:"})," Navigate to your info.plist file in the outermost tag:"]}),"\n"]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Camera.</string>\n\n\x3c!-- optionally, if you want to record audio: --\x3e\n\n<key>NSMicrophoneUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Microphone.</string>\n"})}),(0,t.jsx)("p",{children:(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Terminal Commands:"})," In your terminal run the following commands"]}),"\n"]})}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(n.p,{children:"cd ios\nbundle install\npod install"})})}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You will only need to run the ",(0,t.jsx)(n.strong,{children:"bundle install"})," command once."]})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const i={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),i=r(4164),a=r(4245),s=r(6347),o=r(6494),l=r(2814),c=r(5167),u=r(1269);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:r,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),x=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==t&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);