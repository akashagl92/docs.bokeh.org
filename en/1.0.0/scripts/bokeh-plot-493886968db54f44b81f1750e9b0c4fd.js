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
      };var element = document.getElementById("1eabf16b-85c6-4f16-aeac-62c528f2e574");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1eabf16b-85c6-4f16-aeac-62c528f2e574' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"b09d39cf-3b7c-4ea9-8233-7ac1b7008b59":{"roots":{"references":[{"attributes":{},"id":"19321","type":"BasicTicker"},{"attributes":{},"id":"19326","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19326","type":"BasicTicker"},"visible":false},"id":"19329","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19340","type":"HexTile"},{"attributes":{"source":{"id":"19343","type":"ColumnDataSource"}},"id":"19347","type":"CDSView"},{"attributes":{},"id":"19354","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"c":[1,1,2,1,1,2,2,1,2,1,3,3,2,3,1,1,7,3,5,7,9,3,2,1,1,1,3,5,5,14,6,8,6,3,1,1,1,2,5,5,9,11,5,11,9,5,4,1,1,2,2,4,8,11,11,6,8,4,4,5,6,13,11,9,5,3,1,1,3,8,6,10,10,10,4,8,4,1,1,2,1,3,6,8,4,11,4,1,4,1,1,2,3,10,11,5,3,9,2,2,1,3,3,4,3,3,2,1,1,2,4,3,1,1,1,1,1,2,1,1,1,1],"q":[-5,-4,-3,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,11,11,11,12],"r":[1,1,1,-2,-1,1,2,-4,-3,-2,-1,0,1,2,3,-5,-4,-3,-2,-1,0,1,2,3,5,-7,-6,-5,-4,-3,-2,0,1,2,3,4,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-7,-6,-5,-4,-3,-2,-1,0,1,2,-6,-5,-4,-3,-2,-1,0,1,2,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,4,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-7,-6,-5,-4,-3,-2,-1,-8,-6,-5,-4,-3,-1,-13,-9,-6,-4,-1,-11,-8,-7,-8]},"selected":{"id":"19355","type":"Selection"},"selection_policy":{"id":"19356","type":"UnionRenderers"}},"id":"19336","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"19309","type":"Title"},{"attributes":{},"id":"19316","type":"LinearScale"},{"attributes":{"formatter":{"id":"19352","type":"BasicTickFormatter"},"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19321","type":"BasicTicker"}},"id":"19320","type":"LinearAxis"},{"attributes":{},"id":"19355","type":"Selection"},{"attributes":{},"id":"19331","type":"ResetTool"},{"attributes":{"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19321","type":"BasicTicker"},"visible":false},"id":"19324","type":"Grid"},{"attributes":{"data_source":{"id":"19336","type":"ColumnDataSource"},"glyph":{"id":"19338","type":"HexTile"},"hover_glyph":{"id":"19340","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"19339","type":"HexTile"},"selection_glyph":null,"view":{"id":"19342","type":"CDSView"}},"id":"19341","type":"GlyphRenderer"},{"attributes":{},"id":"19352","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"19312","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19345","type":"Circle"},{"attributes":{"high":14,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"19335","type":"LinearColorMapper"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"19320","type":"LinearAxis"}],"left":[{"id":"19325","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"19320","type":"LinearAxis"},{"id":"19324","type":"Grid"},{"id":"19325","type":"LinearAxis"},{"id":"19329","type":"Grid"},{"id":"19341","type":"GlyphRenderer"},{"id":"19346","type":"GlyphRenderer"}],"title":{"id":"19309","type":"Title"},"toolbar":{"id":"19332","type":"Toolbar"},"x_range":{"id":"19312","type":"DataRange1d"},"x_scale":{"id":"19316","type":"LinearScale"},"y_range":{"id":"19314","type":"DataRange1d"},"y_scale":{"id":"19318","type":"LinearScale"}},"id":"19310","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19330","type":"WheelZoomTool"},{"attributes":{},"id":"19356","type":"UnionRenderers"},{"attributes":{"source":{"id":"19336","type":"ColumnDataSource"}},"id":"19342","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19339","type":"HexTile"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"19357","type":"Selection"},"selection_policy":{"id":"19358","type":"UnionRenderers"}},"id":"19343","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19330","type":"WheelZoomTool"},{"id":"19331","type":"ResetTool"},{"id":"19348","type":"HoverTool"}]},"id":"19332","type":"Toolbar"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19344","type":"Circle"},{"attributes":{"data_source":{"id":"19343","type":"ColumnDataSource"},"glyph":{"id":"19344","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19345","type":"Circle"},"selection_glyph":null,"view":{"id":"19347","type":"CDSView"}},"id":"19346","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"19314","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"19335","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19338","type":"HexTile"},{"attributes":{},"id":"19358","type":"UnionRenderers"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"19341","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"19348","type":"HoverTool"},{"attributes":{},"id":"19357","type":"Selection"},{"attributes":{},"id":"19318","type":"LinearScale"},{"attributes":{"formatter":{"id":"19354","type":"BasicTickFormatter"},"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19326","type":"BasicTicker"}},"id":"19325","type":"LinearAxis"}],"root_ids":["19310"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"b09d39cf-3b7c-4ea9-8233-7ac1b7008b59","roots":{"19310":"1eabf16b-85c6-4f16-aeac-62c528f2e574"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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