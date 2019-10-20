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
      };var element = document.getElementById("c1f94712-5c68-42bf-9d1f-5515310c0a3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c1f94712-5c68-42bf-9d1f-5515310c0a3f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c4b0aa21-d61b-4d92-ad6c-fceeac9dd635":{"roots":{"references":[{"attributes":{"callback":null},"id":"95024b88-f3fc-40e7-b423-3747f92f28c0","type":"DataRange1d"},{"attributes":{"high":18,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"4a0f3738-f552-45b4-a740-1863e8edc2b3","type":"LinearColorMapper"},{"attributes":{"source":{"id":"8996b5d4-d012-4521-95c9-7eeb84c8c578","type":"ColumnDataSource"}},"id":"de3639c8-e913-42f7-aede-0fc59c47ea21","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3c7239cd-15f2-4d91-9662-6f1664309a86","type":"HexTile"},{"attributes":{},"id":"c8ff1c58-6795-4c6b-a03c-573c98621ebe","type":"LinearScale"},{"attributes":{},"id":"e8179e61-a199-4bd2-b07d-c952290c2f02","type":"LinearScale"},{"attributes":{},"id":"9dd93044-a3a8-49f5-928b-3063ff9d9ae8","type":"UnionRenderers"},{"attributes":{},"id":"4ddd5eaf-9eae-4aa9-b9f7-d52c8295d919","type":"Selection"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"816c1694-428d-497a-a6e4-a83692fb6d88","type":"HoverTool"},{"attributes":{},"id":"8c2486e1-a274-4b42-bf3f-770f8b7f064a","type":"BasicTickFormatter"},{"attributes":{},"id":"02c06145-2113-469c-8329-29e9970ab9c3","type":"BasicTickFormatter"},{"attributes":{},"id":"2dc164ef-af8c-42d2-95af-2f29ef7d5e53","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"e5e47f6f-a4a5-4c73-97f5-e6edb3532c6d","type":"Title"},{"attributes":{"plot":{"id":"12621663-3b2d-4f36-add1-bb72f5493112","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea6cbd3f-2c69-408b-b34d-fc1fd5b2ea3c","type":"BasicTicker"},"visible":false},"id":"c6933fd7-1c4f-476b-970d-a971ada4d438","type":"Grid"},{"attributes":{"data_source":{"id":"8996b5d4-d012-4521-95c9-7eeb84c8c578","type":"ColumnDataSource"},"glyph":{"id":"630ad100-2f56-42f8-989e-db601f598217","type":"HexTile"},"hover_glyph":{"id":"3c7239cd-15f2-4d91-9662-6f1664309a86","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"64b16994-fe06-494b-b190-87808e50c530","type":"HexTile"},"selection_glyph":null,"view":{"id":"de3639c8-e913-42f7-aede-0fc59c47ea21","type":"CDSView"}},"id":"95b2676f-0665-48e5-bc83-0b75ddb8a57b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"12621663-3b2d-4f36-add1-bb72f5493112","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e24dcf8-b273-4753-b84a-9047a8edcce3","type":"BasicTicker"},"visible":false},"id":"5aa6d285-cbe3-4204-9b7c-ad9c001cd5f7","type":"Grid"},{"attributes":{},"id":"5d912352-2235-483a-b718-15190be02f43","type":"ResetTool"},{"attributes":{},"id":"1e24dcf8-b273-4753-b84a-9047a8edcce3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2a80df6a-0d02-4dce-8bd2-43676e178524","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"e3df69b5-50be-4ed7-8dc4-dd38790e31e3","type":"LinearAxis"}],"left":[{"id":"86b4e7df-7d4d-435a-974e-27423f4485f2","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"e3df69b5-50be-4ed7-8dc4-dd38790e31e3","type":"LinearAxis"},{"id":"c6933fd7-1c4f-476b-970d-a971ada4d438","type":"Grid"},{"id":"86b4e7df-7d4d-435a-974e-27423f4485f2","type":"LinearAxis"},{"id":"5aa6d285-cbe3-4204-9b7c-ad9c001cd5f7","type":"Grid"},{"id":"95b2676f-0665-48e5-bc83-0b75ddb8a57b","type":"GlyphRenderer"}],"title":{"id":"e5e47f6f-a4a5-4c73-97f5-e6edb3532c6d","type":"Title"},"toolbar":{"id":"e74ac462-7269-4548-8f21-8ce9c825a03e","type":"Toolbar"},"x_range":{"id":"2a80df6a-0d02-4dce-8bd2-43676e178524","type":"DataRange1d"},"x_scale":{"id":"c8ff1c58-6795-4c6b-a03c-573c98621ebe","type":"LinearScale"},"y_range":{"id":"95024b88-f3fc-40e7-b423-3747f92f28c0","type":"DataRange1d"},"y_scale":{"id":"e8179e61-a199-4bd2-b07d-c952290c2f02","type":"LinearScale"}},"id":"12621663-3b2d-4f36-add1-bb72f5493112","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ea6cbd3f-2c69-408b-b34d-fc1fd5b2ea3c","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2dc164ef-af8c-42d2-95af-2f29ef7d5e53","type":"WheelZoomTool"},{"id":"5d912352-2235-483a-b718-15190be02f43","type":"ResetTool"},{"id":"816c1694-428d-497a-a6e4-a83692fb6d88","type":"HoverTool"}]},"id":"e74ac462-7269-4548-8f21-8ce9c825a03e","type":"Toolbar"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,2,1,1,1,2,2,2,1,1,1,3,4,1,3,5,1,1,1,2,1,5,5,5,7,5,2,1,1,1,5,1,4,3,3,9,7,5,2,1,1,3,4,1,7,7,7,6,2,4,1,4,6,8,12,13,18,13,6,2,2,2,6,5,11,11,8,10,13,5,3,2,3,1,8,5,16,12,10,9,6,1,1,1,1,3,8,8,7,6,4,3,1,1,4,3,3,7,3,2,2,2,2,2,3,6,2,2,1,1,1,4,1,2,1,2,4,2,1,2,1,1,1,1,1],"q":[-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,10,10,10,11,11,12],"r":[-3,3,-1,0,1,2,5,-2,-1,0,1,2,3,5,-4,-3,-2,-1,0,2,3,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-7,-6,-5,-4,-3,-2,-1,0,1,2,4,-7,-6,-5,-4,-3,-2,-1,0,1,2,5,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,-11,-8,-7,-6,-5,-4,-3,-2,-1,2,-10,-7,-6,-5,-4,-3,-11,-10,-9,-8,-7,-6,-5,-4,-3,-6,-5,-4,-3,-1,-8,-5,-9]},"selected":{"id":"4ddd5eaf-9eae-4aa9-b9f7-d52c8295d919","type":"Selection"},"selection_policy":{"id":"9dd93044-a3a8-49f5-928b-3063ff9d9ae8","type":"UnionRenderers"}},"id":"8996b5d4-d012-4521-95c9-7eeb84c8c578","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"4a0f3738-f552-45b4-a740-1863e8edc2b3","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"630ad100-2f56-42f8-989e-db601f598217","type":"HexTile"},{"attributes":{"formatter":{"id":"8c2486e1-a274-4b42-bf3f-770f8b7f064a","type":"BasicTickFormatter"},"plot":{"id":"12621663-3b2d-4f36-add1-bb72f5493112","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea6cbd3f-2c69-408b-b34d-fc1fd5b2ea3c","type":"BasicTicker"}},"id":"e3df69b5-50be-4ed7-8dc4-dd38790e31e3","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"64b16994-fe06-494b-b190-87808e50c530","type":"HexTile"},{"attributes":{"formatter":{"id":"02c06145-2113-469c-8329-29e9970ab9c3","type":"BasicTickFormatter"},"plot":{"id":"12621663-3b2d-4f36-add1-bb72f5493112","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e24dcf8-b273-4753-b84a-9047a8edcce3","type":"BasicTicker"}},"id":"86b4e7df-7d4d-435a-974e-27423f4485f2","type":"LinearAxis"}],"root_ids":["12621663-3b2d-4f36-add1-bb72f5493112"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c4b0aa21-d61b-4d92-ad6c-fceeac9dd635","roots":{"12621663-3b2d-4f36-add1-bb72f5493112":"c1f94712-5c68-42bf-9d1f-5515310c0a3f"}}];
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