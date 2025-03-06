"use strict";(globalThis["webpackChunkphotobooth_project"]=globalThis["webpackChunkphotobooth_project"]||[]).push([[316],{7316:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(1347),o=a(7763);const c={class:"row full-width justify-center q-pa-xl"},r={class:"col-12 col-md-6 col-sm-8 q-mx-xl flex justify-center"},l={ref:"camera",autoplay:"",class:"full-width camera-container mirrored"},n={ref:"canvas",style:{display:"none"}},i={key:0,class:"countdown"},d={class:"col-12 col-md-2 col-sm-8"},u={class:"row q-col-gutter-sm q-pa-sm"},h=["src"];function g(e,t,a,g,m,p){const k=(0,s.g2)("q-btn"),v=(0,s.g2)("q-card"),w=(0,s.g2)("q-page");return(0,s.uX)(),(0,s.Wv)(w,{class:"flex flex-center"},{default:(0,s.k6)((()=>[t[0]||(t[0]=(0,s.Lk)("div",{class:"blurred-bg"},null,-1)),(0,s.Lk)("div",c,[(0,s.Lk)("div",r,[(0,s.Lk)("video",l,null,512),(0,s.Lk)("canvas",n,null,512),0===m.capturedImages.length||4===m.capturedImages.length?((0,s.uX)(),(0,s.Wv)(k,{key:0,color:"amber-10",label:0===m.capturedImages.length?"Let's take a photo!":"Retake all",class:"q-my-xl q-px-lg",size:"lg","no-caps":"",onClick:p.resetAndStartPhotoSequence},null,8,["label","onClick"])):(0,s.Q3)("",!0),4===m.capturedImages.length?((0,s.uX)(),(0,s.Wv)(k,{key:1,color:"dark",label:"Next",class:"q-my-xl q-ml-lg q-px-lg",size:"lg","no-caps":"",to:{path:"/download",query:{images:JSON.stringify(m.capturedImages)}}},null,8,["to"])):(0,s.Q3)("",!0)]),m.countdown>0?((0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(v,{class:"q-px-lg text-amber-10"},{default:(0,s.k6)((()=>[(0,s.eW)((0,o.v_)(m.countdown),1)])),_:1})])):(0,s.Q3)("",!0),(0,s.Lk)("div",d,[(0,s.Lk)("div",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.capturedImages,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"col-6 col-md-9 col-sm-6"},[e?((0,s.uX)(),(0,s.CE)("img",{key:0,src:e,class:"image-container mirrored"},null,8,h)):(0,s.Q3)("",!0)])))),128))])])])])),_:1})}const m={data(){return{countdown:0,capturedImages:[]}},mounted(){this.startCamera()},methods:{async startCamera(){try{const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}});this.$refs.camera.srcObject=e}catch(e){console.error("Error accessing the camera:",e)}},async resetAndStartPhotoSequence(){this.capturedImages=[],await this.$nextTick(),this.startPhotoSequence()},async startPhotoSequence(){for(let e=0;e<4;e++)await this.startCountdown(),this.takePhoto()},startCountdown(){return new Promise((e=>{this.countdown=3;const t=setInterval((()=>{this.countdown--,0===this.countdown&&(clearInterval(t),e())}),1e3)}))},takePhoto(){const e=this.$refs.camera,t=this.$refs.canvas,a=t.getContext("2d"),s=16/9,o=e.videoWidth,c=e.videoHeight,r=Math.floor(o/s),l=(c-r)/2;t.width=o,t.height=r,a.drawImage(e,0,l,o,r,0,0,o,r),this.capturedImages.push(t.toDataURL("image/png"))},setBackground(e){this.backgroundColor=e}}};var p=a(2968),k=a(5013),v=a(3211),w=a(2333),f=a(272),q=a.n(f);const y=(0,p.A)(m,[["render",g]]),b=y;q()(m,"components",{QPage:k.A,QBtn:v.A,QCard:w.A})}}]);