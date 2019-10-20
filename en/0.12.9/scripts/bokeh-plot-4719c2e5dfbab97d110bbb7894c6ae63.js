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
      };var element = document.getElementById("370e8377-a2e6-42f4-9511-c59ab791f072");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '370e8377-a2e6-42f4-9511-c59ab791f072' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"503dbd06-3fd9-4c8a-bf24-726bd5acba6a":{"roots":{"references":[{"attributes":{"plot":{"id":"b0248588-3de0-4071-9611-13627e74a1e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"33b2b702-8aa6-4506-b0a2-6677415acab5","type":"BasicTicker"}},"id":"c834ea01-3042-4684-bbe4-24e2c51a7ab4","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"5e9c401e-d15f-4705-a532-1a501e8b9e69","type":"Title"},{"attributes":{},"id":"f4c780c0-d3bc-401a-927b-5db9e1b88f3f","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"09c1905c-be7e-4a04-8253-6a1aafc6e5ce","type":"Circle"},{"attributes":{"callback":null},"id":"33091800-591e-4720-bc4e-06ddd21caff1","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"b0248588-3de0-4071-9611-13627e74a1e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f88926c5-f105-4180-a728-0995f41eb76b","type":"BasicTicker"}},"id":"0ec4ca62-9a2f-4988-b3ff-cefb83711db2","type":"Grid"},{"attributes":{"overlay":{"id":"5626ee88-1a0c-4ec9-8f5c-7e6547cd1b5d","type":"BoxAnnotation"}},"id":"bae3a3a7-7cd2-4750-ab49-664e063de5b5","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e34b6fde-e324-42c6-a339-4c0582e5274c","type":"PanTool"},{"id":"af9c4eab-e54b-4723-a549-74917e3dcf5a","type":"WheelZoomTool"},{"id":"bae3a3a7-7cd2-4750-ab49-664e063de5b5","type":"BoxZoomTool"},{"id":"bd7b7809-9a06-4f9c-a5c0-a13601293f17","type":"SaveTool"},{"id":"294660b9-23f7-477d-8e2b-4595fa92f743","type":"ResetTool"},{"id":"e9367253-d17b-4a65-a5b5-f6c38633a6e7","type":"HelpTool"}]},"id":"95f4ff90-ffca-447e-8617-ac9efae6355e","type":"Toolbar"},{"attributes":{},"id":"f88926c5-f105-4180-a728-0995f41eb76b","type":"BasicTicker"},{"attributes":{},"id":"17a47319-d535-4540-8474-111d9f86720b","type":"LinearScale"},{"attributes":{"formatter":{"id":"69971949-8101-4b28-a12a-e07cc8f54504","type":"BasicTickFormatter"},"plot":{"id":"b0248588-3de0-4071-9611-13627e74a1e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"33b2b702-8aa6-4506-b0a2-6677415acab5","type":"BasicTicker"}},"id":"2db5925e-a62d-4e2f-b61c-1214424be335","type":"LinearAxis"},{"attributes":{},"id":"af9c4eab-e54b-4723-a549-74917e3dcf5a","type":"WheelZoomTool"},{"attributes":{},"id":"294660b9-23f7-477d-8e2b-4595fa92f743","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c51ea172-41b4-438e-aae3-848c8a73d6a1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e21868d-f9b0-48f9-ab01-c30d9a71be31","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5626ee88-1a0c-4ec9-8f5c-7e6547cd1b5d","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f4c780c0-d3bc-401a-927b-5db9e1b88f3f","type":"BasicTickFormatter"},"plot":{"id":"b0248588-3de0-4071-9611-13627e74a1e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f88926c5-f105-4180-a728-0995f41eb76b","type":"BasicTicker"}},"id":"efa66f6e-9a3e-49ff-a6a8-7d88061626d7","type":"LinearAxis"},{"attributes":{},"id":"33b2b702-8aa6-4506-b0a2-6677415acab5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8e025b56-dcc9-4739-b1d3-2cbc6b54fbe3","type":"DataRange1d"},{"attributes":{},"id":"69971949-8101-4b28-a12a-e07cc8f54504","type":"BasicTickFormatter"},{"attributes":{},"id":"e34b6fde-e324-42c6-a339-4c0582e5274c","type":"PanTool"},{"attributes":{"below":[{"id":"2db5925e-a62d-4e2f-b61c-1214424be335","type":"LinearAxis"}],"left":[{"id":"efa66f6e-9a3e-49ff-a6a8-7d88061626d7","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"2db5925e-a62d-4e2f-b61c-1214424be335","type":"LinearAxis"},{"id":"c834ea01-3042-4684-bbe4-24e2c51a7ab4","type":"Grid"},{"id":"efa66f6e-9a3e-49ff-a6a8-7d88061626d7","type":"LinearAxis"},{"id":"0ec4ca62-9a2f-4988-b3ff-cefb83711db2","type":"Grid"},{"id":"5626ee88-1a0c-4ec9-8f5c-7e6547cd1b5d","type":"BoxAnnotation"},{"id":"1966a784-3efb-4577-830e-656f1e3e07e3","type":"GlyphRenderer"}],"title":{"id":"5e9c401e-d15f-4705-a532-1a501e8b9e69","type":"Title"},"toolbar":{"id":"95f4ff90-ffca-447e-8617-ac9efae6355e","type":"Toolbar"},"x_range":{"id":"33091800-591e-4720-bc4e-06ddd21caff1","type":"DataRange1d"},"x_scale":{"id":"17a47319-d535-4540-8474-111d9f86720b","type":"LinearScale"},"y_range":{"id":"8e025b56-dcc9-4739-b1d3-2cbc6b54fbe3","type":"DataRange1d"},"y_scale":{"id":"e56af86d-208d-4f61-b999-1c5ee5cb6fca","type":"LinearScale"}},"id":"b0248588-3de0-4071-9611-13627e74a1e4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e56af86d-208d-4f61-b999-1c5ee5cb6fca","type":"LinearScale"},{"attributes":{"source":{"id":"c51ea172-41b4-438e-aae3-848c8a73d6a1","type":"ColumnDataSource"}},"id":"afab5551-f801-4883-893e-069b5437680d","type":"CDSView"},{"attributes":{},"id":"e9367253-d17b-4a65-a5b5-f6c38633a6e7","type":"HelpTool"},{"attributes":{"data_source":{"id":"c51ea172-41b4-438e-aae3-848c8a73d6a1","type":"ColumnDataSource"},"glyph":{"id":"09c1905c-be7e-4a04-8253-6a1aafc6e5ce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8e21868d-f9b0-48f9-ab01-c30d9a71be31","type":"Circle"},"selection_glyph":null,"view":{"id":"afab5551-f801-4883-893e-069b5437680d","type":"CDSView"}},"id":"1966a784-3efb-4577-830e-656f1e3e07e3","type":"GlyphRenderer"},{"attributes":{},"id":"bd7b7809-9a06-4f9c-a5c0-a13601293f17","type":"SaveTool"}],"root_ids":["b0248588-3de0-4071-9611-13627e74a1e4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"503dbd06-3fd9-4c8a-bf24-726bd5acba6a","elementid":"370e8377-a2e6-42f4-9511-c59ab791f072","modelid":"b0248588-3de0-4071-9611-13627e74a1e4"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
