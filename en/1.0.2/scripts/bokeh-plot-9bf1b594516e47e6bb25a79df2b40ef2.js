(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("a58d6196-d9cc-4209-b15b-efc14c57cdc6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a58d6196-d9cc-4209-b15b-efc14c57cdc6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"7413e79c-ae45-40d8-9a0f-86695223f8f7":{"roots":{"references":[{"attributes":{},"id":"19359","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19346","type":"Circle"},{"attributes":{"callback":null},"id":"19313","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"c":[1,2,1,2,1,1,1,1,1,3,1,5,4,1,6,2,1,1,2,2,5,4,4,6,2,1,2,1,4,5,11,8,9,11,9,2,1,1,4,7,3,9,14,4,16,1,2,1,2,1,4,10,13,15,12,6,4,2,1,4,6,7,15,10,12,3,7,4,1,1,1,5,6,11,14,11,7,6,2,1,1,1,2,2,4,6,6,8,11,4,3,1,2,4,2,3,3,6,3,2,2,2,1,1,2,1,1,2,4,4,3,1,1,2,2,1,1,1,2,1,1],"q":[-6,-4,-3,-3,-3,-3,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,13],"r":[3,1,-3,-1,0,1,-3,-1,0,2,-6,-3,-2,-1,0,1,2,3,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,4,6,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,0,-8,-7,-4,-3,3,-8,-7,-6,-5,-4,-1,-9,-7,-6,-4,-2,-1,-8,-5,-8]},"selected":{"id":"19357","type":"Selection"},"selection_policy":{"id":"19356","type":"UnionRenderers"}},"id":"19337","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19344","type":"ColumnDataSource"}},"id":"19348","type":"CDSView"},{"attributes":{"formatter":{"id":"19355","type":"BasicTickFormatter"},"plot":{"id":"19311","subtype":"Figure","type":"Plot"},"ticker":{"id":"19327","type":"BasicTicker"}},"id":"19326","type":"LinearAxis"},{"attributes":{"high":16,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"19336","type":"LinearColorMapper"},{"attributes":{"source":{"id":"19337","type":"ColumnDataSource"}},"id":"19343","type":"CDSView"},{"attributes":{"callback":null},"id":"19315","type":"DataRange1d"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"19342","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"19349","type":"HoverTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19345","type":"Circle"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"19336","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19339","type":"HexTile"},{"attributes":{},"id":"19331","type":"WheelZoomTool"},{"attributes":{},"id":"19322","type":"BasicTicker"},{"attributes":{},"id":"19317","type":"LinearScale"},{"attributes":{"data_source":{"id":"19337","type":"ColumnDataSource"},"glyph":{"id":"19339","type":"HexTile"},"hover_glyph":{"id":"19341","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"19340","type":"HexTile"},"selection_glyph":null,"view":{"id":"19343","type":"CDSView"}},"id":"19342","type":"GlyphRenderer"},{"attributes":{},"id":"19356","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"19310","type":"Title"},{"attributes":{},"id":"19353","type":"BasicTickFormatter"},{"attributes":{},"id":"19357","type":"Selection"},{"attributes":{"data_source":{"id":"19344","type":"ColumnDataSource"},"glyph":{"id":"19345","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19346","type":"Circle"},"selection_glyph":null,"view":{"id":"19348","type":"CDSView"}},"id":"19347","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"19353","type":"BasicTickFormatter"},"plot":{"id":"19311","subtype":"Figure","type":"Plot"},"ticker":{"id":"19322","type":"BasicTicker"}},"id":"19321","type":"LinearAxis"},{"attributes":{},"id":"19319","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"19321","type":"LinearAxis"}],"left":[{"id":"19326","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"19321","type":"LinearAxis"},{"id":"19325","type":"Grid"},{"id":"19326","type":"LinearAxis"},{"id":"19330","type":"Grid"},{"id":"19342","type":"GlyphRenderer"},{"id":"19347","type":"GlyphRenderer"}],"title":{"id":"19310","type":"Title"},"toolbar":{"id":"19333","type":"Toolbar"},"x_range":{"id":"19313","type":"DataRange1d"},"x_scale":{"id":"19317","type":"LinearScale"},"y_range":{"id":"19315","type":"DataRange1d"},"y_scale":{"id":"19319","type":"LinearScale"}},"id":"19311","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19355","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19311","subtype":"Figure","type":"Plot"},"ticker":{"id":"19322","type":"BasicTicker"},"visible":false},"id":"19325","type":"Grid"},{"attributes":{},"id":"19332","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"19311","subtype":"Figure","type":"Plot"},"ticker":{"id":"19327","type":"BasicTicker"},"visible":false},"id":"19330","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"19359","type":"Selection"},"selection_policy":{"id":"19358","type":"UnionRenderers"}},"id":"19344","type":"ColumnDataSource"},{"attributes":{},"id":"19327","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19331","type":"WheelZoomTool"},{"id":"19332","type":"ResetTool"},{"id":"19349","type":"HoverTool"}]},"id":"19333","type":"Toolbar"},{"attributes":{},"id":"19358","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19341","type":"HexTile"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19340","type":"HexTile"}],"root_ids":["19311"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"7413e79c-ae45-40d8-9a0f-86695223f8f7","roots":{"19311":"a58d6196-d9cc-4209-b15b-efc14c57cdc6"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();