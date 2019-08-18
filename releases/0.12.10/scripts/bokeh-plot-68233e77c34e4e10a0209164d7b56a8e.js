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
      };var element = document.getElementById("7589e28d-ca22-4a4c-b450-c298a6ff46e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7589e28d-ca22-4a4c-b450-c298a6ff46e3' but no matching script tag was found. ")
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
                    var docs_json = {"a338d2af-3b54-44f2-a121-a8ae16e186a7":{"roots":{"references":[{"attributes":{},"id":"58289666-fa04-4a1e-bfc9-af53bc3db372","type":"LinearScale"},{"attributes":{"callback":null},"id":"0c6b689d-f4e0-406f-80f2-1f5a5f11a191","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"3e6fb83e-1746-4922-92a2-a0f39cba0535","type":"ColumnDataSource"},{"attributes":{},"id":"819c26b6-4d37-448e-9350-88f627853e5c","type":"HelpTool"},{"attributes":{},"id":"6db57307-96a8-4407-8604-2ce19c3ee99a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3e6fb83e-1746-4922-92a2-a0f39cba0535","type":"ColumnDataSource"},"glyph":{"id":"4eedbf0e-68e3-4a37-863b-c3d47343d67a","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a2b12690-ab68-4569-9cc5-7737950d81b5","type":"Arc"},"selection_glyph":null,"view":{"id":"bed33cd7-2d5e-473e-abd5-e7a226d91c48","type":"CDSView"}},"id":"cee07d70-d0b8-4716-898a-7d657eb7f1aa","type":"GlyphRenderer"},{"attributes":{},"id":"0cbfdabb-d99c-4765-93bd-4c8072ae2afc","type":"PanTool"},{"attributes":{"below":[{"id":"2f4413cd-41be-4337-aa40-53bf51041759","type":"LinearAxis"}],"left":[{"id":"910201a6-8253-427d-93d2-bc0483c135e2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2f4413cd-41be-4337-aa40-53bf51041759","type":"LinearAxis"},{"id":"ca5642c3-bd14-4c75-8863-9fab8ffb15a0","type":"Grid"},{"id":"910201a6-8253-427d-93d2-bc0483c135e2","type":"LinearAxis"},{"id":"e9903e29-a8d0-430a-bfd8-b1ad91c70f32","type":"Grid"},{"id":"5677772e-b031-4285-8ef5-6bbbc0d28674","type":"BoxAnnotation"},{"id":"cee07d70-d0b8-4716-898a-7d657eb7f1aa","type":"GlyphRenderer"}],"title":{"id":"e1928085-3f70-43f0-8ad4-0a13235a9735","type":"Title"},"toolbar":{"id":"a3183a96-8120-4af6-8559-c91ae1dca3c1","type":"Toolbar"},"x_range":{"id":"72736d8c-bc78-48c0-be37-6b17fb3fe49f","type":"DataRange1d"},"x_scale":{"id":"58289666-fa04-4a1e-bfc9-af53bc3db372","type":"LinearScale"},"y_range":{"id":"0c6b689d-f4e0-406f-80f2-1f5a5f11a191","type":"DataRange1d"},"y_scale":{"id":"d0323e4f-af94-4ed6-833d-797b574ac8c6","type":"LinearScale"}},"id":"a08bb688-6150-44cd-ae14-ad16d5ec0607","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1396ea7e-92ae-49a5-b602-a2bd6444f145","type":"SaveTool"},{"attributes":{"callback":null},"id":"72736d8c-bc78-48c0-be37-6b17fb3fe49f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0cbfdabb-d99c-4765-93bd-4c8072ae2afc","type":"PanTool"},{"id":"9ab76312-7ee8-4d30-bf08-af4b99553cdd","type":"WheelZoomTool"},{"id":"1b846926-2475-459d-b0ba-efc3a3a13e20","type":"BoxZoomTool"},{"id":"1396ea7e-92ae-49a5-b602-a2bd6444f145","type":"SaveTool"},{"id":"17f435f2-cd72-48c2-a1e9-7689ac1a7997","type":"ResetTool"},{"id":"819c26b6-4d37-448e-9350-88f627853e5c","type":"HelpTool"}]},"id":"a3183a96-8120-4af6-8559-c91ae1dca3c1","type":"Toolbar"},{"attributes":{"formatter":{"id":"6db57307-96a8-4407-8604-2ce19c3ee99a","type":"BasicTickFormatter"},"plot":{"id":"a08bb688-6150-44cd-ae14-ad16d5ec0607","subtype":"Figure","type":"Plot"},"ticker":{"id":"de0948cd-17f7-4917-b9fe-a7406428eb6b","type":"BasicTicker"}},"id":"910201a6-8253-427d-93d2-bc0483c135e2","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a08bb688-6150-44cd-ae14-ad16d5ec0607","subtype":"Figure","type":"Plot"},"ticker":{"id":"de0948cd-17f7-4917-b9fe-a7406428eb6b","type":"BasicTicker"}},"id":"e9903e29-a8d0-430a-bfd8-b1ad91c70f32","type":"Grid"},{"attributes":{},"id":"d0323e4f-af94-4ed6-833d-797b574ac8c6","type":"LinearScale"},{"attributes":{},"id":"e79ca9f3-4038-4faf-835a-137ff5a12c5a","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e1928085-3f70-43f0-8ad4-0a13235a9735","type":"Title"},{"attributes":{},"id":"17f435f2-cd72-48c2-a1e9-7689ac1a7997","type":"ResetTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2b12690-ab68-4569-9cc5-7737950d81b5","type":"Arc"},{"attributes":{"formatter":{"id":"f42b1684-e3ef-439d-965e-12c0e82a5e2a","type":"BasicTickFormatter"},"plot":{"id":"a08bb688-6150-44cd-ae14-ad16d5ec0607","subtype":"Figure","type":"Plot"},"ticker":{"id":"e79ca9f3-4038-4faf-835a-137ff5a12c5a","type":"BasicTicker"}},"id":"2f4413cd-41be-4337-aa40-53bf51041759","type":"LinearAxis"},{"attributes":{},"id":"de0948cd-17f7-4917-b9fe-a7406428eb6b","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"4eedbf0e-68e3-4a37-863b-c3d47343d67a","type":"Arc"},{"attributes":{},"id":"f42b1684-e3ef-439d-965e-12c0e82a5e2a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a08bb688-6150-44cd-ae14-ad16d5ec0607","subtype":"Figure","type":"Plot"},"ticker":{"id":"e79ca9f3-4038-4faf-835a-137ff5a12c5a","type":"BasicTicker"}},"id":"ca5642c3-bd14-4c75-8863-9fab8ffb15a0","type":"Grid"},{"attributes":{"source":{"id":"3e6fb83e-1746-4922-92a2-a0f39cba0535","type":"ColumnDataSource"}},"id":"bed33cd7-2d5e-473e-abd5-e7a226d91c48","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5677772e-b031-4285-8ef5-6bbbc0d28674","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"5677772e-b031-4285-8ef5-6bbbc0d28674","type":"BoxAnnotation"}},"id":"1b846926-2475-459d-b0ba-efc3a3a13e20","type":"BoxZoomTool"},{"attributes":{},"id":"9ab76312-7ee8-4d30-bf08-af4b99553cdd","type":"WheelZoomTool"}],"root_ids":["a08bb688-6150-44cd-ae14-ad16d5ec0607"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a338d2af-3b54-44f2-a121-a8ae16e186a7","elementid":"7589e28d-ca22-4a4c-b450-c298a6ff46e3","modelid":"a08bb688-6150-44cd-ae14-ad16d5ec0607"}];
                
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
