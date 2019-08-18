(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6148ce30-8457-4aad-8f3f-60b04b3a7297");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6148ce30-8457-4aad-8f3f-60b04b3a7297' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"85acd20b-c1b1-4c9d-b9da-649ce6e9e755":{"roots":{"references":[{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"formatter":{"id":"3990","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{},"id":"3995","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,1,1,1,3,1,2,2,1,1,1,1,1,3,3,4,2,1,2,4,1,10,3,4,3,1,1,1,6,7,2,10,8,10,2,1,8,10,10,11,10,7,10,2,2,1,2,2,8,9,12,10,14,5,2,5,1,3,5,9,7,22,15,6,1,3,1,1,2,1,8,2,13,8,7,9,5,2,1,1,5,4,4,4,7,5,5,2,1,1,2,4,5,2,6,7,6,5,4,1,1,2,2,6,2,1,1,3,2,1,3,1,1,1,1,2,3,1,1,1,1],"q":[-5,-4,-4,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,11,11,11,12],"r":[3,-3,-1,-4,-3,-2,0,-5,-3,-2,-1,0,1,2,3,-7,-6,-2,-1,0,2,5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,-8,-7,-6,-5,-3,-8,-7,-6,-5,-4,-3,-2,-10,-9,-7,-6,-10,-6,-4,-7]},"selected":{"id":"3992","type":"Selection"},"selection_policy":{"id":"3993","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"},{"attributes":{},"id":"3990","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3994","type":"Selection"},"selection_policy":{"id":"3995","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"high":22,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{},"id":"3994","type":"Selection"},{"attributes":{},"id":"3993","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{},"id":"3992","type":"Selection"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3988","type":"BasicTickFormatter"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3988","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"85acd20b-c1b1-4c9d-b9da-649ce6e9e755","roots":{"3946":"6148ce30-8457-4aad-8f3f-60b04b3a7297"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();