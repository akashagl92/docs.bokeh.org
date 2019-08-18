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
      };var element = document.getElementById("4dd82336-c9df-48e9-9140-eb7630afdbde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4dd82336-c9df-48e9-9140-eb7630afdbde' but no matching script tag was found. ")
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
                    var docs_json = {"127f3c0b-178a-43b6-930a-e672ace716ec":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"722b0c68-942d-4af3-85ec-a57828538b17","type":"Segment"},{"attributes":{},"id":"e8aef0b7-b19d-4f97-b85e-62f84fcdd16d","type":"LinearScale"},{"attributes":{"below":[{"id":"05f562be-ad09-4a91-a762-7ccb38375a70","type":"LinearAxis"}],"left":[{"id":"c18e1d61-59a9-49c8-aced-0ef31c83e4df","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"05f562be-ad09-4a91-a762-7ccb38375a70","type":"LinearAxis"},{"id":"15483782-c662-4678-af66-4e9d9f79d398","type":"Grid"},{"id":"c18e1d61-59a9-49c8-aced-0ef31c83e4df","type":"LinearAxis"},{"id":"1c36184c-a1ef-4691-90c0-52fd0fc005c8","type":"Grid"},{"id":"2450cd36-b87e-4754-a112-602a4436543c","type":"BoxAnnotation"},{"id":"31a2eaba-afda-4ff7-8af2-87cf9c59a19d","type":"GlyphRenderer"}],"title":{"id":"8768e574-8e45-4024-9d4b-886e71a79867","type":"Title"},"toolbar":{"id":"3798b6d7-9383-4f94-9cf8-9a30ffe2667b","type":"Toolbar"},"x_range":{"id":"f977c12c-6984-417b-ac1b-e8565e52ded7","type":"DataRange1d"},"x_scale":{"id":"079c7e35-af2b-46f7-a326-f4a4b19b05c1","type":"LinearScale"},"y_range":{"id":"d01c83dd-4cda-4065-b4e4-0ed9b1d6fa0f","type":"DataRange1d"},"y_scale":{"id":"e8aef0b7-b19d-4f97-b85e-62f84fcdd16d","type":"LinearScale"}},"id":"3caed060-2170-4d4c-8d68-fb1900054c37","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"99f96a24-d8ad-49a3-bb33-0a9681052d54","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"8768e574-8e45-4024-9d4b-886e71a79867","type":"Title"},{"attributes":{"callback":null},"id":"d01c83dd-4cda-4065-b4e4-0ed9b1d6fa0f","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"39b3cc3e-1115-419d-b623-5b338883ee06","type":"ColumnDataSource"},{"attributes":{"source":{"id":"39b3cc3e-1115-419d-b623-5b338883ee06","type":"ColumnDataSource"}},"id":"626b15fa-ec9d-41b9-b297-09321f9aadb6","type":"CDSView"},{"attributes":{"overlay":{"id":"2450cd36-b87e-4754-a112-602a4436543c","type":"BoxAnnotation"}},"id":"dbb3a107-1076-481e-8218-35e5c3f013f7","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e6e3f43d-1545-461e-9942-021b864e6632","type":"BasicTickFormatter"},"plot":{"id":"3caed060-2170-4d4c-8d68-fb1900054c37","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3c6944a-9046-4fd5-9c92-1a43e7f253de","type":"BasicTicker"}},"id":"05f562be-ad09-4a91-a762-7ccb38375a70","type":"LinearAxis"},{"attributes":{},"id":"8b85ae70-0e89-4276-b7b7-74979bc54adb","type":"BasicTickFormatter"},{"attributes":{},"id":"4e24a6ed-dfac-4833-867a-7fccc653bf05","type":"PanTool"},{"attributes":{},"id":"3f3fef29-469c-43dc-bcbf-a58826e8e944","type":"HelpTool"},{"attributes":{},"id":"22e5dfc2-bd2e-4340-bbec-3ac98a827346","type":"SaveTool"},{"attributes":{},"id":"7007e4f3-4d87-4c29-a443-be9993f38d34","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"f977c12c-6984-417b-ac1b-e8565e52ded7","type":"DataRange1d"},{"attributes":{},"id":"0ae7a0d4-8b4d-4e30-b049-fb4aafa37151","type":"ResetTool"},{"attributes":{},"id":"079c7e35-af2b-46f7-a326-f4a4b19b05c1","type":"LinearScale"},{"attributes":{"data_source":{"id":"39b3cc3e-1115-419d-b623-5b338883ee06","type":"ColumnDataSource"},"glyph":{"id":"7e64ed38-25fc-4b4d-b61e-0969d892434f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"722b0c68-942d-4af3-85ec-a57828538b17","type":"Segment"},"selection_glyph":null,"view":{"id":"626b15fa-ec9d-41b9-b297-09321f9aadb6","type":"CDSView"}},"id":"31a2eaba-afda-4ff7-8af2-87cf9c59a19d","type":"GlyphRenderer"},{"attributes":{},"id":"e6e3f43d-1545-461e-9942-021b864e6632","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3caed060-2170-4d4c-8d68-fb1900054c37","subtype":"Figure","type":"Plot"},"ticker":{"id":"99f96a24-d8ad-49a3-bb33-0a9681052d54","type":"BasicTicker"}},"id":"1c36184c-a1ef-4691-90c0-52fd0fc005c8","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e24a6ed-dfac-4833-867a-7fccc653bf05","type":"PanTool"},{"id":"7007e4f3-4d87-4c29-a443-be9993f38d34","type":"WheelZoomTool"},{"id":"dbb3a107-1076-481e-8218-35e5c3f013f7","type":"BoxZoomTool"},{"id":"22e5dfc2-bd2e-4340-bbec-3ac98a827346","type":"SaveTool"},{"id":"0ae7a0d4-8b4d-4e30-b049-fb4aafa37151","type":"ResetTool"},{"id":"3f3fef29-469c-43dc-bcbf-a58826e8e944","type":"HelpTool"}]},"id":"3798b6d7-9383-4f94-9cf8-9a30ffe2667b","type":"Toolbar"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7e64ed38-25fc-4b4d-b61e-0969d892434f","type":"Segment"},{"attributes":{},"id":"e3c6944a-9046-4fd5-9c92-1a43e7f253de","type":"BasicTicker"},{"attributes":{"plot":{"id":"3caed060-2170-4d4c-8d68-fb1900054c37","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3c6944a-9046-4fd5-9c92-1a43e7f253de","type":"BasicTicker"}},"id":"15483782-c662-4678-af66-4e9d9f79d398","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2450cd36-b87e-4754-a112-602a4436543c","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"8b85ae70-0e89-4276-b7b7-74979bc54adb","type":"BasicTickFormatter"},"plot":{"id":"3caed060-2170-4d4c-8d68-fb1900054c37","subtype":"Figure","type":"Plot"},"ticker":{"id":"99f96a24-d8ad-49a3-bb33-0a9681052d54","type":"BasicTicker"}},"id":"c18e1d61-59a9-49c8-aced-0ef31c83e4df","type":"LinearAxis"}],"root_ids":["3caed060-2170-4d4c-8d68-fb1900054c37"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"127f3c0b-178a-43b6-930a-e672ace716ec","elementid":"4dd82336-c9df-48e9-9140-eb7630afdbde","modelid":"3caed060-2170-4d4c-8d68-fb1900054c37"}];
                
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
