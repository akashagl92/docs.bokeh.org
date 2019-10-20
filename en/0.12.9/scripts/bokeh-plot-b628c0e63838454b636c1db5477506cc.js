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
      };var element = document.getElementById("30a9b01a-c3aa-4e0e-9778-095fe3b7ace5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30a9b01a-c3aa-4e0e-9778-095fe3b7ace5' but no matching script tag was found. ")
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
                    var docs_json = {"a04a8702-c1c6-42a7-b723-fdbbde68fdd9":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e36ce3e1-81d7-4223-90ba-b1d16182ed7e","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9c7a67b1-5a08-4cdf-811f-392a2b762d34","type":"PanTool"},{"id":"7403ea1a-9c84-478c-ba47-7425110a2c11","type":"WheelZoomTool"},{"id":"705bc436-5d2d-4226-a1c5-8139c1387081","type":"BoxZoomTool"},{"id":"3892c9e7-0a3a-41a5-b508-eaa8a6d3fb36","type":"SaveTool"},{"id":"7d038975-8363-49d2-a300-f4d783ef694d","type":"ResetTool"},{"id":"57304c0c-a6b5-4c0c-99e2-33b3b355ddd8","type":"HelpTool"}]},"id":"fbdd7eeb-0d27-4a68-8b45-c3aa4e19be09","type":"Toolbar"},{"attributes":{"callback":null},"id":"97522eee-bb17-43a0-a03e-ad83c4c2a6ae","type":"DataRange1d"},{"attributes":{},"id":"9c7a67b1-5a08-4cdf-811f-392a2b762d34","type":"PanTool"},{"attributes":{"callback":null},"id":"91917c12-8f48-419a-af9e-9c5b96775da3","type":"DataRange1d"},{"attributes":{},"id":"b6377f89-2e4b-4199-8c6b-1c1f94c33eb6","type":"LinearScale"},{"attributes":{},"id":"e3699f5d-a948-437b-bc7b-98b7ae22c5cf","type":"BasicTickFormatter"},{"attributes":{},"id":"0d3f851e-3902-4376-9f97-c6d97c6ff0d0","type":"LinearScale"},{"attributes":{},"id":"3892c9e7-0a3a-41a5-b508-eaa8a6d3fb36","type":"SaveTool"},{"attributes":{"plot":{"id":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2d92c5a-8a78-4625-a712-8f9115048bc3","type":"BasicTicker"}},"id":"1451d528-665c-48ca-bb3b-fc8a0186913e","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"015b342a-fedc-45a3-a0ea-eb181f340fbe","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b90d4f24-8f8f-48e9-bfe9-78a51e0e23c3","type":"Circle"},{"attributes":{"formatter":{"id":"e8ada884-e63f-4187-b7fc-819e49e4dbe0","type":"BasicTickFormatter"},"plot":{"id":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2d92c5a-8a78-4625-a712-8f9115048bc3","type":"BasicTicker"}},"id":"eab98175-5da9-4666-a69d-95df33e71a54","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e36ce3e1-81d7-4223-90ba-b1d16182ed7e","type":"BoxAnnotation"}},"id":"705bc436-5d2d-4226-a1c5-8139c1387081","type":"BoxZoomTool"},{"attributes":{"source":{"id":"2b40a2c7-728e-42d6-aa97-cf91064ce17d","type":"ColumnDataSource"}},"id":"f7cf821b-c890-4f59-bac5-f336019d14da","type":"CDSView"},{"attributes":{},"id":"e2d92c5a-8a78-4625-a712-8f9115048bc3","type":"BasicTicker"},{"attributes":{},"id":"57304c0c-a6b5-4c0c-99e2-33b3b355ddd8","type":"HelpTool"},{"attributes":{"formatter":{"id":"e3699f5d-a948-437b-bc7b-98b7ae22c5cf","type":"BasicTickFormatter"},"plot":{"id":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ae9a761-4c3d-4924-8d2b-6afcd027638a","type":"BasicTicker"}},"id":"fc3335e4-6e22-44eb-8c8a-378f7028e4bf","type":"LinearAxis"},{"attributes":{},"id":"7d038975-8363-49d2-a300-f4d783ef694d","type":"ResetTool"},{"attributes":{},"id":"7ae9a761-4c3d-4924-8d2b-6afcd027638a","type":"BasicTicker"},{"attributes":{},"id":"e8ada884-e63f-4187-b7fc-819e49e4dbe0","type":"BasicTickFormatter"},{"attributes":{},"id":"7403ea1a-9c84-478c-ba47-7425110a2c11","type":"WheelZoomTool"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ae9a761-4c3d-4924-8d2b-6afcd027638a","type":"BasicTicker"}},"id":"6ccc0d71-b18c-430e-a021-08a9727a0f01","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ce8db10-5ad8-4827-b6c0-32b68169f555","type":"Circle"},{"attributes":{"data_source":{"id":"2b40a2c7-728e-42d6-aa97-cf91064ce17d","type":"ColumnDataSource"},"glyph":{"id":"0ce8db10-5ad8-4827-b6c0-32b68169f555","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b90d4f24-8f8f-48e9-bfe9-78a51e0e23c3","type":"Circle"},"selection_glyph":null,"view":{"id":"f7cf821b-c890-4f59-bac5-f336019d14da","type":"CDSView"}},"id":"41bd4dda-675c-409e-8fc2-28adf7751c6e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2b40a2c7-728e-42d6-aa97-cf91064ce17d","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"eab98175-5da9-4666-a69d-95df33e71a54","type":"LinearAxis"}],"left":[{"id":"fc3335e4-6e22-44eb-8c8a-378f7028e4bf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"eab98175-5da9-4666-a69d-95df33e71a54","type":"LinearAxis"},{"id":"1451d528-665c-48ca-bb3b-fc8a0186913e","type":"Grid"},{"id":"fc3335e4-6e22-44eb-8c8a-378f7028e4bf","type":"LinearAxis"},{"id":"6ccc0d71-b18c-430e-a021-08a9727a0f01","type":"Grid"},{"id":"e36ce3e1-81d7-4223-90ba-b1d16182ed7e","type":"BoxAnnotation"},{"id":"41bd4dda-675c-409e-8fc2-28adf7751c6e","type":"GlyphRenderer"}],"title":{"id":"015b342a-fedc-45a3-a0ea-eb181f340fbe","type":"Title"},"toolbar":{"id":"fbdd7eeb-0d27-4a68-8b45-c3aa4e19be09","type":"Toolbar"},"x_range":{"id":"97522eee-bb17-43a0-a03e-ad83c4c2a6ae","type":"DataRange1d"},"x_scale":{"id":"0d3f851e-3902-4376-9f97-c6d97c6ff0d0","type":"LinearScale"},"y_range":{"id":"91917c12-8f48-419a-af9e-9c5b96775da3","type":"DataRange1d"},"y_scale":{"id":"b6377f89-2e4b-4199-8c6b-1c1f94c33eb6","type":"LinearScale"}},"id":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7","subtype":"Figure","type":"Plot"}],"root_ids":["333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"a04a8702-c1c6-42a7-b723-fdbbde68fdd9","elementid":"30a9b01a-c3aa-4e0e-9778-095fe3b7ace5","modelid":"333ffd79-3a57-4f3c-8462-2cb6b2f1f4e7"}];
                
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
