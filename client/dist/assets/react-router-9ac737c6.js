import{r as a}from"./react-eb7ba1bc.js";import{i as p,g as U,r as O,j as y,p as L,m as S,A as M,s as T,a as w}from"./@remix-run-d753ad9e.js";/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},R.apply(this,arguments)}const I=a.createContext(null),k=a.createContext(null),E=a.createContext(null),b=a.createContext(null),v=a.createContext({outlet:null,matches:[],isDataRoute:!1}),j=a.createContext(null);function le(t,e){let{relative:r}=e===void 0?{}:e;x()||p(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:s,search:u}=W(t,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:y([n,s])),l.createHref({pathname:i,search:u,hash:o})}function x(){return a.useContext(b)!=null}function N(){return x()||p(!1),a.useContext(b).location}function J(t){a.useContext(E).static||a.useLayoutEffect(t)}function z(){let{isDataRoute:t}=a.useContext(v);return t?re():_()}function _(){x()||p(!1);let t=a.useContext(I),{basename:e,navigator:r}=a.useContext(E),{matches:n}=a.useContext(v),{pathname:l}=N(),o=JSON.stringify(U(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return J(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let d=O(i,JSON.parse(o),l,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:y([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,l,t])}const A=a.createContext(null);function V(t){let e=a.useContext(v).outlet;return e&&a.createElement(A.Provider,{value:t},e)}function ie(){let{matches:t}=a.useContext(v),e=t[t.length-1];return e?e.params:{}}function W(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=a.useContext(v),{pathname:l}=N(),o=JSON.stringify(U(n).map(s=>s.pathnameBase));return a.useMemo(()=>O(t,JSON.parse(o),l,r==="path"),[t,o,l,r])}function q(t,e){return G(t,e)}function G(t,e,r){x()||p(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(v),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=N(),c;if(e){var d;let f=typeof e=="string"?L(e):e;u==="/"||(d=f.pathname)!=null&&d.startsWith(u)||p(!1),c=f}else c=i;let m=c.pathname||"/",C=u==="/"?m:m.slice(u.length)||"/",g=S(t,{pathname:C}),h=Z(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:y([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:y([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return e&&h?a.createElement(b.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:M.Pop}},h):h}function K(){let t=te(),e=w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,o)}const Q=a.createElement(K,null);class X extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?a.createElement(v.Provider,{value:this.props.routeContext},a.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(I);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(v.Provider,{value:e},n)}function Z(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let o=t,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||p(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let d=i.route.id?s==null?void 0:s[i.route.id]:null,m=null;r&&(m=i.route.errorElement||Q);let C=e.concat(o.slice(0,c+1)),g=()=>{let h;return d?h=m:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(Y,{match:i,routeContext:{outlet:u,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(X,{location:r.location,revalidation:r.revalidation,component:m,error:d,children:g(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):g()},null)}var D=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function $(t){let e=a.useContext(I);return e||p(!1),e}function H(t){let e=a.useContext(k);return e||p(!1),e}function ee(t){let e=a.useContext(v);return e||p(!1),e}function F(t){let e=ee(),r=e.matches[e.matches.length-1];return r.route.id||p(!1),r.route.id}function te(){var t;let e=a.useContext(j),r=H(P.UseRouteError),n=F(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function re(){let{router:t}=$(D.UseNavigateStable),e=F(P.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,R({fromRouteId:e},o)))},[t,e])}function se(t){let{to:e,replace:r,state:n,relative:l}=t;x()||p(!1);let{matches:o}=a.useContext(v),{pathname:s}=N(),u=z(),i=O(e,U(o).map(d=>d.pathnameBase),s,l==="path"),c=JSON.stringify(i);return a.useEffect(()=>u(JSON.parse(c),{replace:r,state:n,relative:l}),[u,c,l,r,n]),null}function ue(t){return V(t.context)}function ne(t){p(!1)}function ce(t){let{basename:e="/",children:r=null,location:n,navigationType:l=M.Pop,navigator:o,static:s=!1}=t;x()&&p(!1);let u=e.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=L(n));let{pathname:c="/",search:d="",hash:m="",state:C=null,key:g="default"}=n,h=a.useMemo(()=>{let f=T(c,u);return f==null?null:{location:{pathname:f,search:d,hash:m,state:C,key:g},navigationType:l}},[u,c,d,m,C,g,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function de(t){let{children:e,location:r}=t;return q(B(e),r)}new Promise(()=>{});function B(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let o=[...e,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==ne&&p(!1),!n.props.index||!n.props.children||p(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=B(n.props.children,o)),r.push(s)}),r}export{E as N,ue as O,ce as R,z as a,N as b,W as c,se as d,ie as e,de as f,ne as g,le as u};
