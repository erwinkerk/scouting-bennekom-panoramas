PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 400; text-align:left; border-radius: 3px; border: rgba(0,0,0,0.66) solid 1px; box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.66);background: rgba(255,255,255,0.75);"
    },
"include": [
        {
            "src": "beukenbos_controls.js"
        },
        {
            "src": "panoStudioViewerGallery.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 2,
	        "restart": 5,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 81.90362456078908,
	        "minpan": 0,
	        "mintilt": -73.4762890367504
	    },
	"hotspot": [
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo0",
	                "maxwidth": "66%",
	                "onclick": "function(){ this.viewer.action('hideMessage'); } ",
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 400; text-align:left; border-radius: 3px; border: rgba(0,0,0,0.66) solid 1px; box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.66);background: rgba(255,255,255,0.75);",
	                "text": "<div style='padding: 16px;'>Magazijn</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": "function(){ this.viewer.action('toggleMessage',this.hsinfo); }",
	            "opacity": "1.00;1.00",
	            "position": "179.9394,1.4553",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.0667,
	                "frames": 32,
	                "height": 42,
	                "width": 102
	            },
	            "bitmap": "pap_perspectiveArrow.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "kampvuurkuil.html",
	            "opacity": "1.00;1.00",
	            "position": "231.5931,8.0027",
	            "target": "",
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.0667,
	                "frames": 32,
	                "height": 42,
	                "width": 102
	            },
	            "bitmap": "pap_perspectiveArrow.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "welpen-buiten.html",
	            "opacity": "1.00;1.00",
	            "position": "127.8006,5.8202",
	            "target": "",
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "beukenbos",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"beukenbos_tiles/beukenbos_t_1b_%0y_%0x.jpg"},"down":{"src":"beukenbos_tiles/beukenbos_t_1d_%0y_%0x.jpg"},"front":{"src":"beukenbos_tiles/beukenbos_t_1f_%0y_%0x.jpg"},"height":5670,"left":{"src":"beukenbos_tiles/beukenbos_t_1l_%0y_%0x.jpg"},"right":{"src":"beukenbos_tiles/beukenbos_t_1r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"beukenbos_tiles/beukenbos_t_1u_%0y_%0x.jpg"},"width":5670},{"back":{"src":"beukenbos_tiles/beukenbos_t_2b_%0y_%0x.jpg"},"down":{"src":"beukenbos_tiles/beukenbos_t_2d_%0y_%0x.jpg"},"front":{"src":"beukenbos_tiles/beukenbos_t_2f_%0y_%0x.jpg"},"height":2835,"left":{"src":"beukenbos_tiles/beukenbos_t_2l_%0y_%0x.jpg"},"right":{"src":"beukenbos_tiles/beukenbos_t_2r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"beukenbos_tiles/beukenbos_t_2u_%0y_%0x.jpg"},"width":2835},{"back":{"src":"beukenbos_tiles/beukenbos_t_3b_%0y_%0x.jpg"},"down":{"src":"beukenbos_tiles/beukenbos_t_3d_%0y_%0x.jpg"},"front":{"src":"beukenbos_tiles/beukenbos_t_3f_%0y_%0x.jpg"},"height":1418,"left":{"src":"beukenbos_tiles/beukenbos_t_3l_%0y_%0x.jpg"},"right":{"src":"beukenbos_tiles/beukenbos_t_3r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"beukenbos_tiles/beukenbos_t_3u_%0y_%0x.jpg"},"width":1418},{"back":{"src":"beukenbos_tiles/beukenbos_t_4b_%0y_%0x.jpg"},"down":{"src":"beukenbos_tiles/beukenbos_t_4d_%0y_%0x.jpg"},"front":{"src":"beukenbos_tiles/beukenbos_t_4f_%0y_%0x.jpg"},"height":709,"left":{"src":"beukenbos_tiles/beukenbos_t_4l_%0y_%0x.jpg"},"right":{"src":"beukenbos_tiles/beukenbos_t_4r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"beukenbos_tiles/beukenbos_t_4u_%0y_%0x.jpg"},"width":709},{"back":{"src":"beukenbos_tiles/beukenbos_t_5b_%0y_%0x.jpg"},"down":{"src":"beukenbos_tiles/beukenbos_t_5d_%0y_%0x.jpg"},"front":{"src":"beukenbos_tiles/beukenbos_t_5f_%0y_%0x.jpg"},"height":355,"left":{"src":"beukenbos_tiles/beukenbos_t_5l_%0y_%0x.jpg"},"right":{"src":"beukenbos_tiles/beukenbos_t_5r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"beukenbos_tiles/beukenbos_t_5u_%0y_%0x.jpg"},"width":355}],"multilevel":true,"preview":{"src":"beukenbos_tiles/beukenbos_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 12px; font-weight: bold; text-align:center;",
	            "text": "Beukenbos",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "shortdescription": "Beukenbos",
	        "tilt": 0
	    }
},
"version": "4.1"
}
}