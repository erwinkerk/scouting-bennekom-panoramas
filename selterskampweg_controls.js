PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": "function(){ var enabled = this.viewer.gyroscopeEnabled(); var gb = this.get('gyrobutton'); if (gb){ gb.skin = enabled?gb.enabledskin:gb.disabledskin; gb.updateSkins(); } }",
            "id": "updateGyroButton"
        },
        {
            "func": "function(a){ var d=this.viewer.get('thumbnailGallery');if (d&&!d.collapsing){d.collapsing = !0;if (!d.visible){ d.viewer.action('hideMap'); var th = (d.thumbnailHeight+2*d.thumbnailPadding); d.setVisible(true); d.style = 'opacity: 1.0;'; d.updateStyles(); var o = d.viewer.get('map'); if (!!o&&o.align==d.align){ d.height = o.height; d.updateSize(); } d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': th, 'onUpdate': function(a){ a.updateSize(); },'onComplete': function(a){ a.collapsing = !1; a.height = th; a.updateSize(); } });} else { d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize(); },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); } });}}}",
            "id": "toggleGallery"
        },
        {
            "func": "function(a){ var d=this.viewer.get('thumbnailGallery');if (d&&d.visible&&!d.collapsing){ d.collapsing = !0; d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize();  },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); }});}}",
            "id": "hideGallery"
        },
        {
            "func": "function(a){ var d = this.viewer.get('map'); if (d&&!d.collapsing){ d.collapsing = !0;  if (!d.visible){   d.viewer.action('hideGallery'); d.setVisible(true); d.style = 'opacity: 1.0;'; d.updateStyles();   var o = d.viewer.get('thumbnailGallery');   if (!!o&&o.align == d.align){ d.height = o.height; d.updateSize(); }   var dh = Math.min(Math.max(this.viewer.height()*0.6, 96), this.viewer.height() - 96);   d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : dh, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = dh; a.updateSize(); a.center(); } }); } else { d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : 0, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); } }); }}}",
            "id": "toggleMap"
        },
        {
            "func": "function(delay){ var d=this.viewer.get('map'); if (d&&d.visible&&!d.collapsing){  d.collapsing = !0; d.updateStyles();  d.tween({'time': 0.5, 'delay': delay, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize();  },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); }});}}",
            "id": "hideMap"
        },
        {
            "func": "function(){ var map = this.get('map'); if (map && map.visible){  var h = Math.min(Math.max(this.viewer.height()*0.6, 96),this.viewer.height()-96);  map.height = h; map.updateSize();}}",
            "id": "resizeMap"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } }",
            "id": "showMessage"
        },
        {
            "func": "function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; }",
            "id": "hideMessage"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } }",
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 24,
            "id": "showTbButton",
            "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true; tb.tween({'time': 0.75, 'yoff': 2,'transition':'easeOutExpo' ,'onInit': function(a){ a.setVisible(true); a.style = 'opacity: 1.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); } });this.tween({'time': 0.75, 'yoff': -52, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); },  'onUpdate': function(a){ a.updateAlign(); } ,'onComplete': function(a){ a.setVisible(false);  tb.running = false; }}); var ops=ops2=false; var btn = this.get('galleryBtnPrev'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : 8, 'onInit': function(a){ a.setVisible(true); },'onUpdate' : function(a){ if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } });btn = this.get('galleryBtnNext'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : 8, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a){ if (!ops2){a.style = 'opacity: 1.0;'; a.updateStyles(); ops2=true;}a.updateAlign(); } });}",
            "oninit": "function(){ this.setVisible(false);}",
            "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,192,64,64,0,0,24,24);shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,192,64,64,0,0,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,192,64,64,1,1,24,24)",
            "style": "transition: opacity 0.75s;",
            "width": 28,
            "xoff": 0,
            "yoff": -52
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "navLeftButton",
                    "index": 0,
                    "onclick": "function(){ var g = this.viewer.gallery(); if (!!g){ g.set(g.previous());}}",
                    "oninit": "function(){ var g = this.viewer.gallery(); if ((!!g) && g.length>1){ this.setVisible(true); } }",
                    "priority": 2,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,192,384,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,384,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,384,64,64,1,1,28,28);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true;this.viewer.action('hideGallery');  this.viewer.action('hideMap');tb.tween({'time': 0.75, 'yoff': -52, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); },'onComplete': function(a){ a.setVisible(false); tb.running = false; } });var ops=false; this.get('showTbButton').tween({ 'time': 0.75, 'yoff' : 0, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a) { if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } }); var btn = this.get('galleryBtnPrev'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : -40, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onComplete': function(a){ a.setVisible(false); }, 'onUpdate' : function(a){ a.updateAlign(); } });btn = this.get('galleryBtnNext'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : -40, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onComplete': function(a){ a.setVisible(false); }, 'onUpdate' : function(a){ a.updateAlign(); }});}",
                    "priority": 3,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,1,1,28,28);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "gallerybutton",
                    "index": 4,
                    "onclick": "function(){ this.viewer.action('toggleGallery'); }",
                    "oninit": "function(){var g = this.viewer.gallery(); if ((!!g) && g.length>1){ this.setVisible(true);}}",
                    "priority": 3,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,1,1,28,28);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "mapbutton",
                    "index": 3,
                    "onclick": "function(){ this.viewer.action('toggleMap'); }",
                    "oninit": "function(){var m = this.viewer.map(); if (!!m){ this.setVisible(true);}}",
                    "priority": 3,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,1,1,28,28);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": "function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} }",
                    "onscenechanged": "function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); }",
                    "priority": 3,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,1,1,28,28);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "hotspotsButton",
                    "index": 6,
                    "onclick": "function(){ this.viewer.toggleHotspots(); }",
                    "onscenechanged": "function(){ this.setVisible(this.viewer.hotspots()&&this.viewer.hotspots().length>0); } ",
                    "priority": 1,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,1,1,28,28);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,1,1,28,28);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,1,1,28,28);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,1,1,28,28);",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,1,1,28,28);",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,1,1,28,28);",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,1,1,28,28);",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "playbutton",
                    "index": 13,
                    "onclick": "function(){ if (this.viewer.isPlaying()) this.viewer.stopAutoPlay(); else this.viewer.startAutoPlay(); }",
                    "priority": 1,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,1,1,28,28)",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "disabledskin": "shadow(3,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "enabledskin": "shadow(3,2,2,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,64,128,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "id": "gyrobutton",
                    "index": 18,
                    "onclick": "function(){ var enabled = this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } ",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "visible": false,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "audiobutton",
                    "index": 17,
                    "onclick": "function(){ var o = this.get('gAudio'); if (!o) o = this.get('lAudio'); if (!!o){ o.isPlaying()?o.pause():o.play(); }   }",
                    "onscenechanged": "function(){ this.pauseskin = this.skin; this.pauseskinactive = this.skinactive; var o = this.get('gAudio')||this.get('lAudio'); this.setVisible(!!o); }",
                    "playskin": "dim(-2px,-2px,32px,32px,32,32);shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,2,2,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,2,2,28,28);",
                    "playskinactive": "dim(-2px,-2px,32px,32px,32,32);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,3,3,28,28);",
                    "priority": 3,
                    "skin": "dim(-2px,-2px,32px,32px,32,32);shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,2,2,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,2,2,28,28);",
                    "skinactive": "dim(-2px,-2px,32px,32px,32,32);shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,3,3,28,28);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": "function(){ this.viewer.toggleFullscreen();  } ",
                    "oninit": "function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ",
                    "priority": 3,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,1,1,28,28);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "navRightButton",
                    "index": 15,
                    "onclick": "function(){ var g = this.viewer.gallery(); if (!!g){ g.set(g.next());}}",
                    "oninit": "function(){ var g = this.viewer.gallery(); if ((!!g) && g.length>1){ this.setVisible(true); } }",
                    "priority": 2,
                    "skin": "shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,384,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,384,64,64,0,0,28,28);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,384,64,64,1,1,28,28);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 28,
            "buttonstyle": "border-radius: 50%; background-color: rgba(255,255,255,0.0); transition: background-color 250ms,box-shadow 250ms;",
            "buttonstyleactive": "background-color: rgba(255,255,255,0.4);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.4);",
            "buttonstylehover": "background-color: rgba(255,255,255,0.25);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.25);",
            "buttonwidth": 28,
            "galleryElement": {
                "align": "leftbottom",
                "contentstyle": "position: absolute; left: 4px; right: 4px; bottom: 4px; color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 11px; text-shadow: 0px 0px 2px #000, 0px 0px 2px #000; font-weight: normal; text-align:center; display: inline; overflow: hidden;",
                "edgeEffect": "tilt",
                "height": "0px",
                "id": "thumbnailGallery",
                "style": "opacity: 0; transition: opacity 0.5s",
                "thumbnailHeight": 90,
                "thumbnailPadding": 11,
                "thumbnailWidth": 90,
                "thumbstyle": "box-shadow: rgb(0, 0, 0) 1px 1px 3px 1.7px;",
                "thumbstylehover": "box-shadow: rgb(0, 0, 0) 1px 1px 3px 1.7px, 0px 0px 5px 4px rgba(255,255,255,0.5);",
                "visible": false
            },
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "mapElement": {
                "align": "lefttop",
                "apikey": "AIzaSyCI4Fn7u2AQk1cVI1WUh1bSxpuQjY4-viE",
                "contentstyle": "position: absolute; left: 4px; right: 4px; bottom: 4px; top: 4px; display: inline; overflow: hidden; box-shadow: rgb(0, 0, 0) 1px 1px 3px 1.7px;",
                "gmapstype": "osm",
                "gmarker": "{ url: 'pap_marker_redorange.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "gmarkeractive": "{ url: 'pap_marker_lima.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "height": "0px",
                "id": "map",
                "onmarkerclick": "function(){ this.viewer.action('hideMap',0.3); }",
                "radar": {
                    "radarcontext": "function(c){ c.lineWidth = 1; if (!this.fillStyle){ var w = c.canvas.width/2; this.fillStyle=c.createRadialGradient(w,w,0,w,w,w); this.fillStyle.addColorStop(0,'rgba(255,255,255,0.5)');this.fillStyle.addColorStop(1,'rgba(255,255,255,0.1)');} c.fillStyle = this.fillStyle; if (!this.strokeStyle){ var w = c.canvas.width/2; this.strokeStyle=c.createRadialGradient(w,w,0,w,w,w); this.strokeStyle.addColorStop(0,'#ccc');this.strokeStyle.addColorStop(1,'rgba(192,192,192,0.7)');} c.strokeStyle = this.strokeStyle;  }",
                    "radius": 0.99,
                    "width": 256
                },
                "style": "opacity: 0; transition: opacity 0.5s",
                "type": "gmap",
                "typecontrols": true,
                "visible": false,
                "zoom": 20,
                "zoomcontrols": true
            },
            "spacing": 8,
            "style": "max-width: 100%;background: rgba(0,0,0,0.0); opacity: 1.0; transition: opacity 0.75s;",
            "visible": true,
            "width": "500px",
            "yoff": 2
        }
    ],
"events": {
        "id": "mainEvents",
        "onexit": "function(){  var d=this.viewer.get('localData'); if (!!d&&d.infoTextBox){ this.viewer.action('hideMessage'); } this.viewer.gyroWasEnabled = this.viewer.gyroAvailable&&this.viewer.gyroscopeEnabled();\t}",
        "ongyroscopeavailable": "function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); available&&o.onclick(); } } ",
        "ongyroscopetoggle": "function(enabled){ this.viewer.action('updateGyroButton'); }",
        "oninit": "function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1); this.viewer.checkForGyroscope(); }",
        "onplay": "function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin;  o.sabackup = o.skinactive; o.skin = 'shadow(3,2,2,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.skinactive = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,1,1,28,28)'; o.updateSkins(); } } ",
        "onresize": "function(){ this.viewer.action('resizeMap');  }",
        "onscenechanged": "function(){ var o = this.get('gyrobutton'); if(!!o){ o.setVisible(this.viewer.gyroAvailable&&this.viewer.panoType()==0); this.viewer.gyroAvailable&&this.viewer.panoType()==0&&this.viewer.gyroWasEnabled&&o.onclick(); } if (this.viewer.isVRModeEnabled()){this.viewer.enableGyroscope(!0);}}",
        "onstartaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinhover = o.playskinhover; o.skinactive = o.playskinactive; o.updateSkins(); }} } ",
        "onstop": "function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup;  o.skinactive = o.sabackup; o.updateSkins(); } } ",
        "onstopaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinhover = o.pauseskinhover; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ",
        "onuseswebgl": "function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } "
    },
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    }
}
}