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
      };var element = document.getElementById("36d6ea37-6770-418a-b8cc-42ad1b125f4a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36d6ea37-6770-418a-b8cc-42ad1b125f4a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"7a16940d-e0a3-4f5d-825a-664de192c7cc":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19349","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19343","type":"HexTile"},{"attributes":{"callback":null},"id":"19316","type":"DataRange1d"},{"attributes":{},"id":"19360","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19347","type":"ColumnDataSource"},"glyph":{"id":"19348","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19349","type":"Circle"},"selection_glyph":null,"view":{"id":"19351","type":"CDSView"}},"id":"19350","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19347","type":"ColumnDataSource"}},"id":"19351","type":"CDSView"},{"attributes":{},"id":"19357","type":"BasicTickFormatter"},{"attributes":{},"id":"19335","type":"ResetTool"},{"attributes":{"high":19,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"19339","type":"LinearColorMapper"},{"attributes":{},"id":"19359","type":"Selection"},{"attributes":{},"id":"19355","type":"BasicTickFormatter"},{"attributes":{},"id":"19334","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"19318","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"19361","type":"Selection"},"selection_policy":{"id":"19362","type":"UnionRenderers"}},"id":"19347","type":"ColumnDataSource"},{"attributes":{},"id":"19320","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19348","type":"Circle"},{"attributes":{},"id":"19322","type":"LinearScale"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,1,2,3,3,1,1,1,3,1,2,4,2,4,8,5,8,6,2,2,4,1,5,15,8,7,5,3,2,1,2,6,6,9,9,8,3,2,2,1,2,3,7,8,11,15,11,2,6,3,1,2,4,9,5,19,9,8,3,5,2,1,5,4,9,9,14,8,5,3,2,1,2,3,6,14,7,9,4,2,4,5,1,2,6,10,11,1,2,2,1,1,1,2,4,4,3,2,1,3,1,1,1,2,1,6,2,1,3,1,2,1,1,1,1,1,1,1],"q":[-3,-3,-3,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,12,13],"r":[-4,-1,0,-3,-2,1,-3,-2,-1,0,1,2,3,4,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,3,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-7,-6,-5,-4,-3,-2,-1,1,3,-10,-8,-7,-6,-5,-4,-3,-2,-9,-8,-7,-6,-5,-4,-2,-8,-7,-6,-5,-4,-3,-7,-6,-3,-8,-8]},"selected":{"id":"19359","type":"Selection"},"selection_policy":{"id":"19360","type":"UnionRenderers"}},"id":"19340","type":"ColumnDataSource"},{"attributes":{},"id":"19362","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19357","type":"BasicTickFormatter"},"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19325","type":"BasicTicker"}},"id":"19324","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"19313","type":"Title"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19344","type":"HexTile"},{"attributes":{},"id":"19325","type":"BasicTicker"},{"attributes":{"data_source":{"id":"19340","type":"ColumnDataSource"},"glyph":{"id":"19342","type":"HexTile"},"hover_glyph":{"id":"19344","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"19343","type":"HexTile"},"selection_glyph":null,"view":{"id":"19346","type":"CDSView"}},"id":"19345","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19325","type":"BasicTicker"},"visible":false},"id":"19328","type":"Grid"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"19345","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"19352","type":"HoverTool"},{"attributes":{"formatter":{"id":"19355","type":"BasicTickFormatter"},"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19330","type":"BasicTicker"}},"id":"19329","type":"LinearAxis"},{"attributes":{"source":{"id":"19340","type":"ColumnDataSource"}},"id":"19346","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19334","type":"WheelZoomTool"},{"id":"19335","type":"ResetTool"},{"id":"19352","type":"HoverTool"}]},"id":"19336","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"19324","type":"LinearAxis"}],"left":[{"id":"19329","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"19324","type":"LinearAxis"},{"id":"19328","type":"Grid"},{"id":"19329","type":"LinearAxis"},{"id":"19333","type":"Grid"},{"id":"19345","type":"GlyphRenderer"},{"id":"19350","type":"GlyphRenderer"}],"title":{"id":"19313","type":"Title"},"toolbar":{"id":"19336","type":"Toolbar"},"x_range":{"id":"19316","type":"DataRange1d"},"x_scale":{"id":"19320","type":"LinearScale"},"y_range":{"id":"19318","type":"DataRange1d"},"y_scale":{"id":"19322","type":"LinearScale"}},"id":"19314","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19361","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19330","type":"BasicTicker"},"visible":false},"id":"19333","type":"Grid"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"19339","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19342","type":"HexTile"},{"attributes":{},"id":"19330","type":"BasicTicker"}],"root_ids":["19314"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"7a16940d-e0a3-4f5d-825a-664de192c7cc","roots":{"19314":"36d6ea37-6770-418a-b8cc-42ad1b125f4a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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