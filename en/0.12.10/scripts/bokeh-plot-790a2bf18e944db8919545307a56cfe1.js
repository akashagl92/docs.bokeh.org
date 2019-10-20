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
      };var element = document.getElementById("d0acd30d-8eee-446c-8f11-3ea5676f7755");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0acd30d-8eee-446c-8f11-3ea5676f7755' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"8603a093-50ea-4aaf-9112-2f74d995efc6":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"eb4662a1-1fa8-44e4-aa61-43adba2c7d91","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"eb4662a1-1fa8-44e4-aa61-43adba2c7d91","type":"ColumnDataSource"},"glyph":{"id":"da43ef74-3816-4265-80dc-fd04efb87c30","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"88b8cbed-a40a-4c39-acd5-1e1cc5de19e0","type":"Annulus"},"selection_glyph":null,"view":{"id":"4dd47aa7-1b47-4672-8c05-dc1e1b7a33de","type":"CDSView"}},"id":"906852c8-aa2a-4d66-82b3-b8af2e7b2c6d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0aa47208-9ed9-4c7a-9777-3b14d9dcd9ec","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"fb37d90d-cb25-4e0d-9442-6131ded3a333","type":"LinearAxis"}],"left":[{"id":"d1d7840d-7e5d-4312-a896-3e3b8b537998","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fb37d90d-cb25-4e0d-9442-6131ded3a333","type":"LinearAxis"},{"id":"ddb01344-054d-400e-a798-2246378dd571","type":"Grid"},{"id":"d1d7840d-7e5d-4312-a896-3e3b8b537998","type":"LinearAxis"},{"id":"b6acd589-41b0-4efd-9c55-4dda363e230b","type":"Grid"},{"id":"0aa47208-9ed9-4c7a-9777-3b14d9dcd9ec","type":"BoxAnnotation"},{"id":"906852c8-aa2a-4d66-82b3-b8af2e7b2c6d","type":"GlyphRenderer"}],"title":{"id":"9276aeac-156b-4806-8fdd-c37abf40155b","type":"Title"},"toolbar":{"id":"b194a95f-fd6f-4748-b586-3164709d1814","type":"Toolbar"},"x_range":{"id":"9d537a5a-7975-4544-a1e7-a58db06cbf54","type":"DataRange1d"},"x_scale":{"id":"daff69ed-6629-4dba-96de-6ba213076314","type":"LinearScale"},"y_range":{"id":"21b9af3e-b796-4171-ba1e-dcdd23af2cc3","type":"DataRange1d"},"y_scale":{"id":"50889848-afa0-4205-a77d-bcd451116249","type":"LinearScale"}},"id":"5c605d11-ee09-490c-ae83-49e6f4a88100","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0a735dbe-09dd-4e1d-b45c-db2a12c882dc","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a735dbe-09dd-4e1d-b45c-db2a12c882dc","type":"PanTool"},{"id":"4368a5b8-be59-40c7-86b2-77fce421ccc9","type":"WheelZoomTool"},{"id":"dcab0680-244f-4d27-9530-13e9306b170a","type":"BoxZoomTool"},{"id":"09e08a35-781d-4bd0-80d2-9cad2b4c2eab","type":"SaveTool"},{"id":"15e3888e-81da-4a39-8556-fb0e04661e43","type":"ResetTool"},{"id":"5c3dd807-e842-4a62-8045-0f94740e18e3","type":"HelpTool"}]},"id":"b194a95f-fd6f-4748-b586-3164709d1814","type":"Toolbar"},{"attributes":{"source":{"id":"eb4662a1-1fa8-44e4-aa61-43adba2c7d91","type":"ColumnDataSource"}},"id":"4dd47aa7-1b47-4672-8c05-dc1e1b7a33de","type":"CDSView"},{"attributes":{"formatter":{"id":"44a9ef96-c98c-400e-bed8-fb0c3231ea70","type":"BasicTickFormatter"},"plot":{"id":"5c605d11-ee09-490c-ae83-49e6f4a88100","subtype":"Figure","type":"Plot"},"ticker":{"id":"23761cde-270b-4a83-acb1-86a6014c061f","type":"BasicTicker"}},"id":"fb37d90d-cb25-4e0d-9442-6131ded3a333","type":"LinearAxis"},{"attributes":{},"id":"4368a5b8-be59-40c7-86b2-77fce421ccc9","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9d537a5a-7975-4544-a1e7-a58db06cbf54","type":"DataRange1d"},{"attributes":{"overlay":{"id":"0aa47208-9ed9-4c7a-9777-3b14d9dcd9ec","type":"BoxAnnotation"}},"id":"dcab0680-244f-4d27-9530-13e9306b170a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"5c605d11-ee09-490c-ae83-49e6f4a88100","subtype":"Figure","type":"Plot"},"ticker":{"id":"23761cde-270b-4a83-acb1-86a6014c061f","type":"BasicTicker"}},"id":"ddb01344-054d-400e-a798-2246378dd571","type":"Grid"},{"attributes":{},"id":"09e08a35-781d-4bd0-80d2-9cad2b4c2eab","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"da43ef74-3816-4265-80dc-fd04efb87c30","type":"Annulus"},{"attributes":{},"id":"15e3888e-81da-4a39-8556-fb0e04661e43","type":"ResetTool"},{"attributes":{"callback":null},"id":"21b9af3e-b796-4171-ba1e-dcdd23af2cc3","type":"DataRange1d"},{"attributes":{},"id":"5c3dd807-e842-4a62-8045-0f94740e18e3","type":"HelpTool"},{"attributes":{},"id":"daff69ed-6629-4dba-96de-6ba213076314","type":"LinearScale"},{"attributes":{},"id":"44a9ef96-c98c-400e-bed8-fb0c3231ea70","type":"BasicTickFormatter"},{"attributes":{},"id":"50889848-afa0-4205-a77d-bcd451116249","type":"LinearScale"},{"attributes":{},"id":"139787e4-b258-4f92-b24d-f9c185a453c0","type":"BasicTickFormatter"},{"attributes":{},"id":"23761cde-270b-4a83-acb1-86a6014c061f","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"9276aeac-156b-4806-8fdd-c37abf40155b","type":"Title"},{"attributes":{"formatter":{"id":"139787e4-b258-4f92-b24d-f9c185a453c0","type":"BasicTickFormatter"},"plot":{"id":"5c605d11-ee09-490c-ae83-49e6f4a88100","subtype":"Figure","type":"Plot"},"ticker":{"id":"b334f23d-c695-40a2-8295-59f482b09946","type":"BasicTicker"}},"id":"d1d7840d-7e5d-4312-a896-3e3b8b537998","type":"LinearAxis"},{"attributes":{},"id":"b334f23d-c695-40a2-8295-59f482b09946","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5c605d11-ee09-490c-ae83-49e6f4a88100","subtype":"Figure","type":"Plot"},"ticker":{"id":"b334f23d-c695-40a2-8295-59f482b09946","type":"BasicTicker"}},"id":"b6acd589-41b0-4efd-9c55-4dda363e230b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"88b8cbed-a40a-4c39-acd5-1e1cc5de19e0","type":"Annulus"}],"root_ids":["5c605d11-ee09-490c-ae83-49e6f4a88100"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8603a093-50ea-4aaf-9112-2f74d995efc6","elementid":"d0acd30d-8eee-446c-8f11-3ea5676f7755","modelid":"5c605d11-ee09-490c-ae83-49e6f4a88100"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
