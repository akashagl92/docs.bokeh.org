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
      };var element = document.getElementById("b2c13e76-1631-4221-8ef3-6a9ba4029310");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2c13e76-1631-4221-8ef3-6a9ba4029310' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"04ea04a6-15bb-4427-bcf4-a04ca63c02ec":{"roots":{"references":[{"attributes":{},"id":"33455","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"33414","subtype":"Figure","type":"Plot"},"ticker":{"id":"33429","type":"BasicTicker"},"visible":false},"id":"33432","type":"Grid"},{"attributes":{"high":17,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"33438","type":"LinearColorMapper"},{"attributes":{"callback":null},"id":"33415","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33433","type":"WheelZoomTool"},{"id":"33434","type":"ResetTool"},{"id":"33446","type":"HoverTool"}]},"id":"33435","type":"Toolbar"},{"attributes":{"data_source":{"id":"33439","type":"ColumnDataSource"},"glyph":{"id":"33441","type":"HexTile"},"hover_glyph":{"id":"33443","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"33442","type":"HexTile"},"selection_glyph":null,"view":{"id":"33445","type":"CDSView"}},"id":"33444","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"33417","type":"DataRange1d"},{"attributes":{},"id":"33433","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"33453","type":"BasicTickFormatter"},"plot":{"id":"33414","subtype":"Figure","type":"Plot"},"ticker":{"id":"33429","type":"BasicTicker"}},"id":"33428","type":"LinearAxis"},{"attributes":{"source":{"id":"33439","type":"ColumnDataSource"}},"id":"33445","type":"CDSView"},{"attributes":{},"id":"33434","type":"ResetTool"},{"attributes":{},"id":"33419","type":"LinearScale"},{"attributes":{"plot":{"id":"33414","subtype":"Figure","type":"Plot"},"ticker":{"id":"33424","type":"BasicTicker"},"visible":false},"id":"33427","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"33442","type":"HexTile"},{"attributes":{"plot":null,"text":""},"id":"33449","type":"Title"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"33443","type":"HexTile"},{"attributes":{},"id":"33421","type":"LinearScale"},{"attributes":{"callback":null,"data":{"c":[2,1,1,1,2,1,1,1,2,1,2,6,5,4,4,1,3,1,1,1,4,4,5,6,1,1,1,1,2,6,5,4,5,9,4,3,2,1,3,1,11,6,10,12,13,4,1,1,1,1,3,2,4,9,12,13,5,6,4,1,1,3,8,8,16,17,11,8,5,3,1,1,2,8,5,6,9,10,8,7,3,1,4,9,7,12,14,6,5,1,1,1,1,5,7,7,12,5,3,1,1,1,1,2,5,3,1,2,3,1,1,1,1,1,1,3,1,1],"q":[-3,-3,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,11],"r":[2,3,-4,-1,0,1,2,3,-5,-4,-3,-2,-1,0,1,2,3,5,-5,-4,-3,-2,-1,0,1,3,5,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-10,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-7,-6,-5,-4,-3,-2,-1,0,3,-7,-6,-5,-4,-3,-2,-1,3,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-10,-9,-8,-6,-4,-3,-1,-8,-6,-5,-4,-3,-2,-8,-7,-5,-6]},"selected":{"id":"33454","type":"Selection"},"selection_policy":{"id":"33455","type":"UnionRenderers"}},"id":"33439","type":"ColumnDataSource"},{"attributes":{},"id":"33451","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33451","type":"BasicTickFormatter"},"plot":{"id":"33414","subtype":"Figure","type":"Plot"},"ticker":{"id":"33424","type":"BasicTicker"}},"id":"33423","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"33438","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"33441","type":"HexTile"},{"attributes":{},"id":"33453","type":"BasicTickFormatter"},{"attributes":{},"id":"33424","type":"BasicTicker"},{"attributes":{},"id":"33429","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"33446","type":"HoverTool"},{"attributes":{},"id":"33454","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"33423","type":"LinearAxis"}],"left":[{"id":"33428","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"33423","type":"LinearAxis"},{"id":"33427","type":"Grid"},{"id":"33428","type":"LinearAxis"},{"id":"33432","type":"Grid"},{"id":"33444","type":"GlyphRenderer"}],"title":{"id":"33449","type":"Title"},"toolbar":{"id":"33435","type":"Toolbar"},"x_range":{"id":"33415","type":"DataRange1d"},"x_scale":{"id":"33419","type":"LinearScale"},"y_range":{"id":"33417","type":"DataRange1d"},"y_scale":{"id":"33421","type":"LinearScale"}},"id":"33414","subtype":"Figure","type":"Plot"}],"root_ids":["33414"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"04ea04a6-15bb-4427-bcf4-a04ca63c02ec","roots":{"33414":"b2c13e76-1631-4221-8ef3-6a9ba4029310"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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