/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{b as e}from"./chunk-f7b6af08.js";class r{constructor(){this.translucent=!1}hostData(){return{class:Object.assign({},e(this.color),{"card-header-translucent":this.translucent})}}render(){return t("slot",null)}static get is(){return"ion-card-header"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return".sc-ion-card-header-md-h{display:block;position:relative;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:16px}"}static get styleMode(){return"md"}}class a{hostData(){return{class:e(this.color),role:"heading","aria-level":"3"}}render(){return t("slot",null)}static get is(){return"ion-card-subtitle"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-card-subtitle-md-h{display:block;position:relative;color:var(--color);--color:var(--ion-text-color-step-450, #737373);margin:0 0 8px;padding:0;font-size:14px}.ion-color.sc-ion-card-subtitle-md-h{color:var(--ion-color-base)}"}static get styleMode(){return"md"}}class s{hostData(){return{class:e(this.color),role:"heading","aria-level":"2"}}render(){return t("slot",null)}static get is(){return"ion-card-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-card-title-md-h{display:block;position:relative;color:var(--color);--color:var(--ion-text-color-step-150, #262626);margin:0;padding:0;font-size:24px;line-height:1.2}.ion-color.sc-ion-card-title-md-h{color:var(--ion-color-base)}"}static get styleMode(){return"md"}}export{r as IonCardHeader,a as IonCardSubtitle,s as IonCardTitle};