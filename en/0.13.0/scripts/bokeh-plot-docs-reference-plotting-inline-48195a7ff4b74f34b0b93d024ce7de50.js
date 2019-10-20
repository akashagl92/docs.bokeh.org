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
      };var element = document.getElementById("1ea928a2-dd1d-45d7-8835-e246550a69c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ea928a2-dd1d-45d7-8835-e246550a69c5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f88f1633-3c9d-422b-a69a-eb401ecf1c4a":{"roots":{"references":[{"attributes":{"data_source":{"id":"a0fda82b-1e1f-499d-81a4-a081790fac1e","type":"ColumnDataSource"},"glyph":{"id":"e29d6153-0e9f-4a0d-9be7-6a930b63e042","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3e142255-a24e-40a3-b582-0dbc651dc81e","type":"Annulus"},"selection_glyph":null,"view":{"id":"95d4abfe-b544-473a-a717-21282c7d2c61","type":"CDSView"}},"id":"03437fc0-5646-4a88-9962-c7d61969d942","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"e29d6153-0e9f-4a0d-9be7-6a930b63e042","type":"Annulus"},{"attributes":{},"id":"3d6eb707-8292-496a-96b7-f375ecfd08f9","type":"LinearScale"},{"attributes":{"source":{"id":"a0fda82b-1e1f-499d-81a4-a081790fac1e","type":"ColumnDataSource"}},"id":"95d4abfe-b544-473a-a717-21282c7d2c61","type":"CDSView"},{"attributes":{"formatter":{"id":"fb923403-8ac8-42c7-b34b-1bb89107f815","type":"BasicTickFormatter"},"plot":{"id":"062573f0-62af-454a-9eff-d9aa7d050be4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9dd17ae-2bdb-4446-9814-25f13e82a88b","type":"BasicTicker"}},"id":"ca806230-1634-4278-8c81-06dc1a216c92","type":"LinearAxis"},{"attributes":{},"id":"f8f4c3d9-f5ee-43d8-8b12-93a42ad2dc28","type":"ResetTool"},{"attributes":{"callback":null},"id":"aadf3ae0-d1ae-4d0a-90d8-2f04da59a13c","type":"DataRange1d"},{"attributes":{},"id":"fb923403-8ac8-42c7-b34b-1bb89107f815","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"105657cc-e21e-4d33-9362-197a1848541b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"062573f0-62af-454a-9eff-d9aa7d050be4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9dd17ae-2bdb-4446-9814-25f13e82a88b","type":"BasicTicker"}},"id":"066ecda3-7e06-4912-9c76-93b03253f912","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"3371a090-b445-460f-a1de-ccd6ac74b272","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"42550127-789e-46db-a74e-45d3155c050b","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"062573f0-62af-454a-9eff-d9aa7d050be4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c810287-b7be-4df8-b27d-7419491b93c2","type":"BasicTicker"}},"id":"6419074f-c743-4941-bfe0-818c82f0fe8c","type":"Grid"},{"attributes":{},"id":"9c810287-b7be-4df8-b27d-7419491b93c2","type":"BasicTicker"},{"attributes":{"overlay":{"id":"42550127-789e-46db-a74e-45d3155c050b","type":"BoxAnnotation"}},"id":"c41530c9-b117-4172-b800-7c0ddda282c4","type":"BoxZoomTool"},{"attributes":{},"id":"e5c39b58-0bd3-46d4-8ff5-e9380dcc0b78","type":"BasicTickFormatter"},{"attributes":{},"id":"7d9889b9-19e9-45a0-9739-ec09ff00b6bb","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e142255-a24e-40a3-b582-0dbc651dc81e","type":"Annulus"},{"attributes":{},"id":"f1ddcc71-35e8-4951-bc8e-d2907823c9ed","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8516d79a-a28f-480c-b048-c4bab31c0089","type":"PanTool"},{"id":"aab5c7b6-9ccd-4542-af7a-d3e41b1cee16","type":"WheelZoomTool"},{"id":"c41530c9-b117-4172-b800-7c0ddda282c4","type":"BoxZoomTool"},{"id":"8beccf2a-4bf3-46b6-8220-43009ad57c85","type":"SaveTool"},{"id":"f8f4c3d9-f5ee-43d8-8b12-93a42ad2dc28","type":"ResetTool"},{"id":"5e2712ee-1208-4ff8-8f34-283eb36f9a68","type":"HelpTool"}]},"id":"3610ad63-a45e-46a3-9ff7-231f8b896ebf","type":"Toolbar"},{"attributes":{},"id":"91c876f2-66b1-4ab5-b7e0-903158efee2c","type":"Selection"},{"attributes":{},"id":"5e2712ee-1208-4ff8-8f34-283eb36f9a68","type":"HelpTool"},{"attributes":{},"id":"8516d79a-a28f-480c-b048-c4bab31c0089","type":"PanTool"},{"attributes":{"formatter":{"id":"e5c39b58-0bd3-46d4-8ff5-e9380dcc0b78","type":"BasicTickFormatter"},"plot":{"id":"062573f0-62af-454a-9eff-d9aa7d050be4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c810287-b7be-4df8-b27d-7419491b93c2","type":"BasicTicker"}},"id":"ca13ba0d-33ac-480b-885e-7a875e803994","type":"LinearAxis"},{"attributes":{},"id":"aab5c7b6-9ccd-4542-af7a-d3e41b1cee16","type":"WheelZoomTool"},{"attributes":{},"id":"8beccf2a-4bf3-46b6-8220-43009ad57c85","type":"SaveTool"},{"attributes":{"below":[{"id":"ca13ba0d-33ac-480b-885e-7a875e803994","type":"LinearAxis"}],"left":[{"id":"ca806230-1634-4278-8c81-06dc1a216c92","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ca13ba0d-33ac-480b-885e-7a875e803994","type":"LinearAxis"},{"id":"6419074f-c743-4941-bfe0-818c82f0fe8c","type":"Grid"},{"id":"ca806230-1634-4278-8c81-06dc1a216c92","type":"LinearAxis"},{"id":"066ecda3-7e06-4912-9c76-93b03253f912","type":"Grid"},{"id":"42550127-789e-46db-a74e-45d3155c050b","type":"BoxAnnotation"},{"id":"03437fc0-5646-4a88-9962-c7d61969d942","type":"GlyphRenderer"}],"title":{"id":"3371a090-b445-460f-a1de-ccd6ac74b272","type":"Title"},"toolbar":{"id":"3610ad63-a45e-46a3-9ff7-231f8b896ebf","type":"Toolbar"},"x_range":{"id":"105657cc-e21e-4d33-9362-197a1848541b","type":"DataRange1d"},"x_scale":{"id":"7d9889b9-19e9-45a0-9739-ec09ff00b6bb","type":"LinearScale"},"y_range":{"id":"aadf3ae0-d1ae-4d0a-90d8-2f04da59a13c","type":"DataRange1d"},"y_scale":{"id":"3d6eb707-8292-496a-96b7-f375ecfd08f9","type":"LinearScale"}},"id":"062573f0-62af-454a-9eff-d9aa7d050be4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"91c876f2-66b1-4ab5-b7e0-903158efee2c","type":"Selection"},"selection_policy":{"id":"f1ddcc71-35e8-4951-bc8e-d2907823c9ed","type":"UnionRenderers"}},"id":"a0fda82b-1e1f-499d-81a4-a081790fac1e","type":"ColumnDataSource"},{"attributes":{},"id":"b9dd17ae-2bdb-4446-9814-25f13e82a88b","type":"BasicTicker"}],"root_ids":["062573f0-62af-454a-9eff-d9aa7d050be4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f88f1633-3c9d-422b-a69a-eb401ecf1c4a","roots":{"062573f0-62af-454a-9eff-d9aa7d050be4":"1ea928a2-dd1d-45d7-8835-e246550a69c5"}}];
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