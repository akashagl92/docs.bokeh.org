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
      };var element = document.getElementById("acf42276-c5e8-4d2b-9239-06a7e3a55e72");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'acf42276-c5e8-4d2b-9239-06a7e3a55e72' but no matching script tag was found. ")
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
                    var docs_json = {"455a3cea-d42a-439b-8d6f-6ff3383fa865":{"roots":{"references":[{"attributes":{"plot":{"id":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"daab9cd7-fca8-421b-8956-c8fbc0634280","type":"BasicTicker"}},"id":"c2c0d168-1abc-45d3-ad5d-00173df7546c","type":"Grid"},{"attributes":{},"id":"72bd0276-6685-42f0-8e53-71ca2b5cecbe","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"72bd0276-6685-42f0-8e53-71ca2b5cecbe","type":"BasicTickFormatter"},"plot":{"id":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f9d3ddd-db91-455b-ab78-61b2b58cefc5","type":"BasicTicker"}},"id":"f0023b5c-3275-496d-aed8-d8b16b1f15b5","type":"LinearAxis"},{"attributes":{"source":{"id":"5b1e6cd3-d4c6-44b3-a1db-91cc74f2614a","type":"ColumnDataSource"}},"id":"352c1482-e32e-4f2b-b4ed-ed63297a7ff5","type":"CDSView"},{"attributes":{},"id":"0f9d3ddd-db91-455b-ab78-61b2b58cefc5","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"2e2a4a4b-cbd1-4902-b0c2-1fbfcfd13bcc","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f9d3ddd-db91-455b-ab78-61b2b58cefc5","type":"BasicTicker"}},"id":"140ccf65-4b67-4d18-ae21-81a3efdb0aac","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0a59dba-3d01-401d-bcc1-6a0719728eed","type":"X"},{"attributes":{},"id":"fefd6cf1-f7b7-487d-a87f-d0243b2b4dbb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"5b1e6cd3-d4c6-44b3-a1db-91cc74f2614a","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4c004eec-7bab-4e7d-b122-c7fea20d30f6","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"ab3d8e88-d8d5-4631-a535-78ecb6e59a07","type":"LinearAxis"}],"left":[{"id":"f0023b5c-3275-496d-aed8-d8b16b1f15b5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ab3d8e88-d8d5-4631-a535-78ecb6e59a07","type":"LinearAxis"},{"id":"c2c0d168-1abc-45d3-ad5d-00173df7546c","type":"Grid"},{"id":"f0023b5c-3275-496d-aed8-d8b16b1f15b5","type":"LinearAxis"},{"id":"140ccf65-4b67-4d18-ae21-81a3efdb0aac","type":"Grid"},{"id":"4c004eec-7bab-4e7d-b122-c7fea20d30f6","type":"BoxAnnotation"},{"id":"43a84f0e-d028-4876-88d6-21725827fbb3","type":"GlyphRenderer"}],"title":{"id":"2e2a4a4b-cbd1-4902-b0c2-1fbfcfd13bcc","type":"Title"},"toolbar":{"id":"0563bd00-5c09-4ca7-96fa-331221f3093f","type":"Toolbar"},"x_range":{"id":"d4e96eb1-b648-47e7-8b8d-19e0bd5ed281","type":"DataRange1d"},"x_scale":{"id":"b785d84f-5da6-4a49-81b9-3b01c6a54956","type":"LinearScale"},"y_range":{"id":"48391be4-c76a-495e-8e52-a2c1507d8cc7","type":"DataRange1d"},"y_scale":{"id":"1f059be9-4004-4c57-aeff-6a432c7ee40e","type":"LinearScale"}},"id":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c35961dd-62ea-400e-878c-8bfea72ecaaf","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c35961dd-62ea-400e-878c-8bfea72ecaaf","type":"PanTool"},{"id":"f0234d76-54c3-4dec-a9dd-b14b6e8703b2","type":"WheelZoomTool"},{"id":"48f78776-6ad0-4b85-80f6-7492eb3a4197","type":"BoxZoomTool"},{"id":"7a958b50-7a7e-4c0e-b1fc-fe11235457f7","type":"SaveTool"},{"id":"41434a3d-2835-488a-8629-8721d1892432","type":"ResetTool"},{"id":"8b7a5e86-87e4-4703-bc00-49cf626cba3c","type":"HelpTool"}]},"id":"0563bd00-5c09-4ca7-96fa-331221f3093f","type":"Toolbar"},{"attributes":{"data_source":{"id":"5b1e6cd3-d4c6-44b3-a1db-91cc74f2614a","type":"ColumnDataSource"},"glyph":{"id":"525e7c46-f8fb-432b-8c9e-66a54c248623","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e0a59dba-3d01-401d-bcc1-6a0719728eed","type":"X"},"selection_glyph":null,"view":{"id":"352c1482-e32e-4f2b-b4ed-ed63297a7ff5","type":"CDSView"}},"id":"43a84f0e-d028-4876-88d6-21725827fbb3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d4e96eb1-b648-47e7-8b8d-19e0bd5ed281","type":"DataRange1d"},{"attributes":{},"id":"f0234d76-54c3-4dec-a9dd-b14b6e8703b2","type":"WheelZoomTool"},{"attributes":{},"id":"daab9cd7-fca8-421b-8956-c8fbc0634280","type":"BasicTicker"},{"attributes":{"overlay":{"id":"4c004eec-7bab-4e7d-b122-c7fea20d30f6","type":"BoxAnnotation"}},"id":"48f78776-6ad0-4b85-80f6-7492eb3a4197","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"525e7c46-f8fb-432b-8c9e-66a54c248623","type":"X"},{"attributes":{},"id":"7a958b50-7a7e-4c0e-b1fc-fe11235457f7","type":"SaveTool"},{"attributes":{"formatter":{"id":"fefd6cf1-f7b7-487d-a87f-d0243b2b4dbb","type":"BasicTickFormatter"},"plot":{"id":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"daab9cd7-fca8-421b-8956-c8fbc0634280","type":"BasicTicker"}},"id":"ab3d8e88-d8d5-4631-a535-78ecb6e59a07","type":"LinearAxis"},{"attributes":{},"id":"41434a3d-2835-488a-8629-8721d1892432","type":"ResetTool"},{"attributes":{"callback":null},"id":"48391be4-c76a-495e-8e52-a2c1507d8cc7","type":"DataRange1d"},{"attributes":{},"id":"8b7a5e86-87e4-4703-bc00-49cf626cba3c","type":"HelpTool"},{"attributes":{},"id":"b785d84f-5da6-4a49-81b9-3b01c6a54956","type":"LinearScale"},{"attributes":{},"id":"1f059be9-4004-4c57-aeff-6a432c7ee40e","type":"LinearScale"}],"root_ids":["e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"455a3cea-d42a-439b-8d6f-6ff3383fa865","elementid":"acf42276-c5e8-4d2b-9239-06a7e3a55e72","modelid":"e5f0e1a8-10d8-4b6e-96aa-a2ab17d41b8b"}];
                
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
