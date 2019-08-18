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
      };var element = document.getElementById("97556f58-33d5-4702-b291-07c731cce786");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97556f58-33d5-4702-b291-07c731cce786' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"fb3aa679-44c8-4220-a305-f061a415201e":{"roots":{"references":[{"attributes":{},"id":"be1d52fc-6022-4ee8-b454-29bb37f041c8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4cd2d250-4829-42a5-9464-04899461b44a","type":"DataRange1d"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"48bc9a04-fcb0-48d5-942c-16f174f1e913","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"ecc17d62-b872-4a0b-8112-22b705378d3e","type":"HoverTool"},{"attributes":{"callback":null,"data":{"c":[1,1,1,2,2,1,1,1,4,1,1,1,2,4,3,1,1,1,2,4,5,7,2,1,1,1,2,2,10,4,4,5,4,8,3,1,2,4,8,5,12,8,7,5,2,1,1,2,3,2,3,8,11,19,10,10,6,3,2,2,1,1,2,5,9,7,14,5,8,13,9,3,1,1,2,1,4,6,9,6,9,11,8,8,1,1,1,4,4,8,8,13,9,2,2,1,2,5,6,5,5,9,3,1,1,6,4,4,1,1,1,2,1,1,3,2,1,1,1,2,1,1,1,1],"q":[-5,-4,-4,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,11,11,12],"r":[1,-1,3,-1,1,-4,-3,-2,0,3,-5,-4,-2,0,1,4,-5,-4,-3,-2,-1,0,1,2,4,-6,-5,-4,-3,-2,-1,0,1,2,3,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,5,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-7,-6,-5,-4,-3,-2,-1,-8,-7,-6,-5,-3,0,-8,-6,-5,-7,-2,-4]},"selected":{"id":"b58520a7-334f-4ddb-8489-9100c882b02e","type":"Selection"},"selection_policy":{"id":"b74dfc4c-3f42-4717-b06c-99e49543a741","type":"UnionRenderers"}},"id":"7563091a-e557-41ce-a149-15d9fa4c6b09","type":"ColumnDataSource"},{"attributes":{},"id":"69b7ad57-3d11-4df1-baf4-efdddbc1425e","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e558c32b-fcc2-4c65-bdea-a6cf05842859","type":"ColumnDataSource"},"glyph":{"id":"4cfd941d-b227-42f7-bb2b-496775812269","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50364c8e-e079-4fb9-ae19-ab6b0b48d6b6","type":"Circle"},"selection_glyph":null,"view":{"id":"4a292fc0-2b3a-4aae-b9bd-804c82659a7a","type":"CDSView"}},"id":"9a910896-4f01-421d-85e6-7573b7f8062c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"a2180d42-8453-4c75-8c0a-eaa4cbf4613e","type":"BasicTickFormatter"},"plot":{"id":"c1026b9e-4d15-44b2-987e-effdebd1e6ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"be1d52fc-6022-4ee8-b454-29bb37f041c8","type":"BasicTicker"}},"id":"55421f89-6df1-477e-8f8c-b97007fd3701","type":"LinearAxis"},{"attributes":{},"id":"b58520a7-334f-4ddb-8489-9100c882b02e","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"b8cee777-c6fb-4899-bef5-8839f532e8e6","type":"HexTile"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"50364c8e-e079-4fb9-ae19-ab6b0b48d6b6","type":"Circle"},{"attributes":{},"id":"d4d5da9e-a44e-41dc-9c30-acd35b04527a","type":"LinearScale"},{"attributes":{"high":19,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"a9ebf451-7cfe-40a2-9db9-a066615b33b8","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"c1026b9e-4d15-44b2-987e-effdebd1e6ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"857aadb3-f83c-4840-a85a-c172c8dc30e5","type":"BasicTicker"},"visible":false},"id":"3d4221db-af98-41a1-9b80-f9964b996fc0","type":"Grid"},{"attributes":{},"id":"b74dfc4c-3f42-4717-b06c-99e49543a741","type":"UnionRenderers"},{"attributes":{},"id":"857aadb3-f83c-4840-a85a-c172c8dc30e5","type":"BasicTicker"},{"attributes":{},"id":"5d4e8d52-89de-4aa9-b236-c0f7f9f85f60","type":"Selection"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"fe8d85ed-c68e-4375-b079-4b7b60697e2a","type":"Title"},{"attributes":{"callback":null},"id":"4115cff0-3e5e-4a07-8ee8-56e8021b3293","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"81793ec3-5236-4b6d-9979-47cfee271980","type":"LinearAxis"}],"left":[{"id":"55421f89-6df1-477e-8f8c-b97007fd3701","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"81793ec3-5236-4b6d-9979-47cfee271980","type":"LinearAxis"},{"id":"3d4221db-af98-41a1-9b80-f9964b996fc0","type":"Grid"},{"id":"55421f89-6df1-477e-8f8c-b97007fd3701","type":"LinearAxis"},{"id":"bdbbe144-264d-4941-b4d7-778836b3da1b","type":"Grid"},{"id":"48bc9a04-fcb0-48d5-942c-16f174f1e913","type":"GlyphRenderer"},{"id":"9a910896-4f01-421d-85e6-7573b7f8062c","type":"GlyphRenderer"}],"title":{"id":"fe8d85ed-c68e-4375-b079-4b7b60697e2a","type":"Title"},"toolbar":{"id":"43e9d9d0-9067-410f-a8d8-a3f7698e89d3","type":"Toolbar"},"x_range":{"id":"4cd2d250-4829-42a5-9464-04899461b44a","type":"DataRange1d"},"x_scale":{"id":"d4d5da9e-a44e-41dc-9c30-acd35b04527a","type":"LinearScale"},"y_range":{"id":"4115cff0-3e5e-4a07-8ee8-56e8021b3293","type":"DataRange1d"},"y_scale":{"id":"e1f99258-bf2e-444f-a548-16479de7ecf5","type":"LinearScale"}},"id":"c1026b9e-4d15-44b2-987e-effdebd1e6ea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"5d4e8d52-89de-4aa9-b236-c0f7f9f85f60","type":"Selection"},"selection_policy":{"id":"9fab2c08-e5fc-447d-82bc-979cd0c5be64","type":"UnionRenderers"}},"id":"e558c32b-fcc2-4c65-bdea-a6cf05842859","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"c1026b9e-4d15-44b2-987e-effdebd1e6ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"be1d52fc-6022-4ee8-b454-29bb37f041c8","type":"BasicTicker"},"visible":false},"id":"bdbbe144-264d-4941-b4d7-778836b3da1b","type":"Grid"},{"attributes":{"formatter":{"id":"9e77b15e-71d1-4dc2-9605-2325402c6a87","type":"BasicTickFormatter"},"plot":{"id":"c1026b9e-4d15-44b2-987e-effdebd1e6ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"857aadb3-f83c-4840-a85a-c172c8dc30e5","type":"BasicTicker"}},"id":"81793ec3-5236-4b6d-9979-47cfee271980","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3b6d58ea-301b-40a1-a5f7-4c8c472df9f9","type":"HexTile"},{"attributes":{"data_source":{"id":"7563091a-e557-41ce-a149-15d9fa4c6b09","type":"ColumnDataSource"},"glyph":{"id":"ec873dc8-bc4f-4c44-8262-d8cd0d423585","type":"HexTile"},"hover_glyph":{"id":"3b6d58ea-301b-40a1-a5f7-4c8c472df9f9","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"b8cee777-c6fb-4899-bef5-8839f532e8e6","type":"HexTile"},"selection_glyph":null,"view":{"id":"5ed91bc4-ad26-423e-8775-9833fdbbfa26","type":"CDSView"}},"id":"48bc9a04-fcb0-48d5-942c-16f174f1e913","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7563091a-e557-41ce-a149-15d9fa4c6b09","type":"ColumnDataSource"}},"id":"5ed91bc4-ad26-423e-8775-9833fdbbfa26","type":"CDSView"},{"attributes":{},"id":"a2180d42-8453-4c75-8c0a-eaa4cbf4613e","type":"BasicTickFormatter"},{"attributes":{},"id":"b76643fe-5351-4674-b613-2d74a1fab6ce","type":"ResetTool"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"a9ebf451-7cfe-40a2-9db9-a066615b33b8","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"ec873dc8-bc4f-4c44-8262-d8cd0d423585","type":"HexTile"},{"attributes":{},"id":"e1f99258-bf2e-444f-a548-16479de7ecf5","type":"LinearScale"},{"attributes":{},"id":"9fab2c08-e5fc-447d-82bc-979cd0c5be64","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"4cfd941d-b227-42f7-bb2b-496775812269","type":"Circle"},{"attributes":{},"id":"9e77b15e-71d1-4dc2-9605-2325402c6a87","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e558c32b-fcc2-4c65-bdea-a6cf05842859","type":"ColumnDataSource"}},"id":"4a292fc0-2b3a-4aae-b9bd-804c82659a7a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69b7ad57-3d11-4df1-baf4-efdddbc1425e","type":"WheelZoomTool"},{"id":"b76643fe-5351-4674-b613-2d74a1fab6ce","type":"ResetTool"},{"id":"ecc17d62-b872-4a0b-8112-22b705378d3e","type":"HoverTool"}]},"id":"43e9d9d0-9067-410f-a8d8-a3f7698e89d3","type":"Toolbar"}],"root_ids":["c1026b9e-4d15-44b2-987e-effdebd1e6ea"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fb3aa679-44c8-4220-a305-f061a415201e","roots":{"c1026b9e-4d15-44b2-987e-effdebd1e6ea":"97556f58-33d5-4702-b291-07c731cce786"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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