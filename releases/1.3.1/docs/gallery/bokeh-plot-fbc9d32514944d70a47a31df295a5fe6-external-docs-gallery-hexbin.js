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
      };var element = document.getElementById("2181d284-e6f7-4dd9-b98d-9720e8198174");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2181d284-e6f7-4dd9-b98d-9720e8198174' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"c67bd757-4074-4bb2-b1f0-34323488b110":{"roots":{"references":[{"attributes":{"formatter":{"id":"3988","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3994","type":"Selection"},"selection_policy":{"id":"3995","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{"high":16,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{},"id":"3994","type":"Selection"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3992","type":"Selection"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{},"id":"3990","type":"BasicTickFormatter"},{"attributes":{},"id":"3988","type":"BasicTickFormatter"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3990","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{},"id":"3993","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"c":[1,1,1,3,1,4,1,1,3,2,5,3,1,1,1,5,5,9,3,4,6,1,1,2,2,4,7,14,4,9,7,1,2,3,4,4,10,14,10,7,6,3,4,1,1,5,5,12,10,10,8,11,2,2,5,4,4,9,9,12,11,11,3,3,5,1,1,2,3,7,8,16,8,8,4,2,1,1,2,2,5,6,3,11,6,2,5,1,1,3,2,7,4,7,2,5,3,1,1,1,1,1,5,4,4,2,1,1,1,2,3,1,3,1,1,1,1,1,1],"q":[-5,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,11],"r":[2,-2,3,-1,0,1,2,3,-3,-2,-1,0,1,2,6,-3,-2,-1,0,1,2,3,4,-7,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,4,-9,-8,-7,-5,-4,-3,-2,-1,0,1,2,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,-11,-9,-7,-5,-4,0,-7,-6,-5,-1,-4]},"selected":{"id":"3992","type":"Selection"},"selection_policy":{"id":"3993","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{},"id":"3995","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{},"id":"3967","type":"WheelZoomTool"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"c67bd757-4074-4bb2-b1f0-34323488b110","roots":{"3946":"2181d284-e6f7-4dd9-b98d-9720e8198174"}}];
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