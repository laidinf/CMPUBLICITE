
/**
* @version 1.0.3
* @package PWebFBLikeBox
* @copyright © 2012 Majestic Media sp. z o.o., All rights reserved. http://www.perfect-web.co
* @license GNU General Public Licence http://www.gnu.org/licenses/gpl-3.0.html
* @author Piotr Moćko
*
* Mootools 1.3.2+, 1.4.5+
*/
var pwebBoxes=pwebBoxes||[];(function(a){pwebFBLikeBox=new Class({Implements:[Options],options:{id:"",prefix:"pwebfblikebox",open:"click",close:"click",closeOther:true,position:"left",top:-1,layout:"box",type:"html5"},initialize:function(c){this.setOptions(c);this.hidden=true;this.fx=new Fx.Tween(this.options.prefix,{property:this.options.position});this.width=0-a(this.options.prefix).getSize().x;a(this.options.prefix).setStyle(this.options.position,this.width).inject($$("body")[0]);if(this.options.open==this.options.close){a(this.options.prefix).addEvent(this.options.open,function(f){f.stop();this.toggleBox()}.bind(this))}else{a(this.options.prefix).addEvent(this.options.open,function(f){f.stop();this.toggleBox(1)}.bind(this));a(this.options.prefix).addEvent(this.options.close,function(f){f.stop();this.toggleBox(0)}.bind(this))}if(this.options.layout=="slidebox"){if(this.options.top>=0){a(this.options.prefix).setStyle("top",this.options.top)}}else{if(this.options.layout=="sidebar"){var d=a(this.options.prefix).getComputedSize();var b=window.getHeight()-d.computedTop-d.computedBottom;a(this.options.prefix).setStyles({top:0,height:b});var e=a(this.options.prefix+"_pretext");if(e){b=b-e.getSize().y-parseInt(e.getStyle("margin-bottom"))}if(this.options.type=="html5"){a(this.options.prefix+"_html5").setProperty("data-height",b)}else{if(this.options.type=="xfbml"){a(this.options.prefix+"_xfbml").setProperty("height",b)}else{a(this.options.prefix).setStyle("height",b)}}if(this.options.top>=0){a(this.options.prefix).getFirst().setStyle("top",this.options.top)}}}if(this.options.closeOther){pwebBoxes.push(this)}},close:function(){this.toggleBox(0)},toggleBox:function(b){if(typeof b=="undefined"){b=-1}if((!this.hidden&&b==-1)||b==0){this.fx.start(this.width);this.hidden=true}else{if((this.hidden&&b==-1)||b==1){if(this.options.closeOther){pwebBoxes.each(function(c){if(c.options.id!=this.options.id&&typeof c.close=="function"){c.close()}}.bind(this))}this.fx.start(0);this.hidden=false}}}})})(document.id);