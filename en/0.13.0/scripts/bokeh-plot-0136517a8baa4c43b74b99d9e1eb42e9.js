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
      };var element = document.getElementById("4d477ce3-9185-48f8-a8a6-3e10c4ca2e0e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d477ce3-9185-48f8-a8a6-3e10c4ca2e0e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"798f42b1-24b9-4af9-9100-39b964c32101":{"roots":{"references":[{"attributes":{},"id":"e9a9b707-9a0f-4e26-a681-53e1b354423a","type":"ResetTool"},{"attributes":{"overlay":{"id":"9fee16e0-2839-44fa-abb9-6641c9fb82e7","type":"BoxAnnotation"}},"id":"17601465-2e87-4b61-926f-536a293e9681","type":"BoxZoomTool"},{"attributes":{},"id":"88793d64-602f-45ba-abc6-1ac89041a4cf","type":"WheelZoomTool"},{"attributes":{},"id":"747c4a0b-3a27-459b-8178-dd6eca9fc81a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6b286048-6fc0-4abf-91a9-6b38e3b3e9c1","type":"LinearAxis"}],"left":[{"id":"865318aa-8b1f-49f8-85d2-b238387bf38d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6b286048-6fc0-4abf-91a9-6b38e3b3e9c1","type":"LinearAxis"},{"id":"4f5698f8-1adf-430f-925c-ffa675d114cc","type":"Grid"},{"id":"865318aa-8b1f-49f8-85d2-b238387bf38d","type":"LinearAxis"},{"id":"a802e31d-9d3c-4a93-a0d2-f89469440505","type":"Grid"},{"id":"9fee16e0-2839-44fa-abb9-6641c9fb82e7","type":"BoxAnnotation"},{"id":"ef939e0d-e350-43a1-980a-481152c88dbc","type":"GlyphRenderer"}],"title":{"id":"5aff1372-37bf-4dcd-974b-ab68054e770e","type":"Title"},"toolbar":{"id":"50e4d080-c1db-4958-94f8-1d95fc743998","type":"Toolbar"},"x_range":{"id":"8682be6f-d4f1-4922-868f-927bff58f09c","type":"DataRange1d"},"x_scale":{"id":"f017b799-b6ce-42cd-9eee-0c2b06ab60f0","type":"LinearScale"},"y_range":{"id":"67b5ebf5-e47c-4fd4-b9a7-afe0dcd827e4","type":"DataRange1d"},"y_scale":{"id":"82be1371-2d4a-4095-8197-4cd421b81a32","type":"LinearScale"}},"id":"96445b6c-d27d-40f4-9593-9ffc33f69a0b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"96445b6c-d27d-40f4-9593-9ffc33f69a0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"feff9892-9c35-489f-9afb-ceac8dbb5943","type":"BasicTicker"}},"id":"4f5698f8-1adf-430f-925c-ffa675d114cc","type":"Grid"},{"attributes":{"data_source":{"id":"12b58977-292e-4c46-be2a-ab66a08b22e7","type":"ColumnDataSource"},"glyph":{"id":"263498d8-6c90-470b-afe1-424e19f81569","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"406daf10-da7b-43e6-9bbe-94df827a5086","type":"Patches"},"selection_glyph":null,"view":{"id":"079d16ea-9dee-401b-b768-1193f437c424","type":"CDSView"}},"id":"ef939e0d-e350-43a1-980a-481152c88dbc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"415f3974-4eb5-446a-83fd-7046c2b260dc","type":"PanTool"},{"id":"88793d64-602f-45ba-abc6-1ac89041a4cf","type":"WheelZoomTool"},{"id":"17601465-2e87-4b61-926f-536a293e9681","type":"BoxZoomTool"},{"id":"90fb3d0a-5e29-4651-8d89-d642ebb9061e","type":"SaveTool"},{"id":"e9a9b707-9a0f-4e26-a681-53e1b354423a","type":"ResetTool"},{"id":"6328f4b0-dbac-492a-869e-62cbcac8d9b8","type":"HelpTool"}]},"id":"50e4d080-c1db-4958-94f8-1d95fc743998","type":"Toolbar"},{"attributes":{"source":{"id":"12b58977-292e-4c46-be2a-ab66a08b22e7","type":"ColumnDataSource"}},"id":"079d16ea-9dee-401b-b768-1193f437c424","type":"CDSView"},{"attributes":{"callback":null},"id":"8682be6f-d4f1-4922-868f-927bff58f09c","type":"DataRange1d"},{"attributes":{},"id":"4609c8e9-ba16-48a5-97b7-49f268a3f57a","type":"BasicTicker"},{"attributes":{},"id":"415f3974-4eb5-446a-83fd-7046c2b260dc","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"406daf10-da7b-43e6-9bbe-94df827a5086","type":"Patches"},{"attributes":{},"id":"f017b799-b6ce-42cd-9eee-0c2b06ab60f0","type":"LinearScale"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"263498d8-6c90-470b-afe1-424e19f81569","type":"Patches"},{"attributes":{"callback":null},"id":"67b5ebf5-e47c-4fd4-b9a7-afe0dcd827e4","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"96445b6c-d27d-40f4-9593-9ffc33f69a0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4609c8e9-ba16-48a5-97b7-49f268a3f57a","type":"BasicTicker"}},"id":"a802e31d-9d3c-4a93-a0d2-f89469440505","type":"Grid"},{"attributes":{},"id":"82be1371-2d4a-4095-8197-4cd421b81a32","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"5aff1372-37bf-4dcd-974b-ab68054e770e","type":"Title"},{"attributes":{},"id":"b64ce2d9-e1e4-4267-a3be-869d8a3de0f3","type":"Selection"},{"attributes":{},"id":"42ed806e-70fc-48a5-a1eb-111ba32b94c5","type":"BasicTickFormatter"},{"attributes":{},"id":"90fb3d0a-5e29-4651-8d89-d642ebb9061e","type":"SaveTool"},{"attributes":{"formatter":{"id":"747c4a0b-3a27-459b-8178-dd6eca9fc81a","type":"BasicTickFormatter"},"plot":{"id":"96445b6c-d27d-40f4-9593-9ffc33f69a0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"feff9892-9c35-489f-9afb-ceac8dbb5943","type":"BasicTicker"}},"id":"6b286048-6fc0-4abf-91a9-6b38e3b3e9c1","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9fee16e0-2839-44fa-abb9-6641c9fb82e7","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"b64ce2d9-e1e4-4267-a3be-869d8a3de0f3","type":"Selection"},"selection_policy":{"id":"f4521069-8a78-431d-b18f-04541fe8a5f2","type":"UnionRenderers"}},"id":"12b58977-292e-4c46-be2a-ab66a08b22e7","type":"ColumnDataSource"},{"attributes":{},"id":"feff9892-9c35-489f-9afb-ceac8dbb5943","type":"BasicTicker"},{"attributes":{},"id":"f4521069-8a78-431d-b18f-04541fe8a5f2","type":"UnionRenderers"},{"attributes":{},"id":"6328f4b0-dbac-492a-869e-62cbcac8d9b8","type":"HelpTool"},{"attributes":{"formatter":{"id":"42ed806e-70fc-48a5-a1eb-111ba32b94c5","type":"BasicTickFormatter"},"plot":{"id":"96445b6c-d27d-40f4-9593-9ffc33f69a0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4609c8e9-ba16-48a5-97b7-49f268a3f57a","type":"BasicTicker"}},"id":"865318aa-8b1f-49f8-85d2-b238387bf38d","type":"LinearAxis"}],"root_ids":["96445b6c-d27d-40f4-9593-9ffc33f69a0b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"798f42b1-24b9-4af9-9100-39b964c32101","roots":{"96445b6c-d27d-40f4-9593-9ffc33f69a0b":"4d477ce3-9185-48f8-a8a6-3e10c4ca2e0e"}}];
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