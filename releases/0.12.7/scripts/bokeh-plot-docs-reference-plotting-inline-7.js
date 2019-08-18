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
      };var element = document.getElementById("f5bc5360-40ce-44bf-9fd9-15d8159c74a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5bc5360-40ce-44bf-9fd9-15d8159c74a2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"fbc0ebbe-3579-4b4f-ae0f-6be764098189":{"roots":{"references":[{"attributes":{"source":{"id":"4888e4c1-956e-4d77-bc6c-8780ea4309c7","type":"ColumnDataSource"}},"id":"6fb42ef3-9037-4319-808e-40969792e8fc","type":"CDSView"},{"attributes":{"callback":null},"id":"f55aa67f-bd25-4c21-99f7-bdfa8cd28daf","type":"DataRange1d"},{"attributes":{},"id":"4891b220-0e1e-412e-a02b-184357da4d47","type":"WheelZoomTool"},{"attributes":{},"id":"b6da201a-3812-4349-ae29-1b5f806ab792","type":"BasicTickFormatter"},{"attributes":{},"id":"69d9fb6a-e700-4031-a376-c4077974b4e8","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"e6153d25-46a5-4f2b-ae82-07f7337d3fc0","type":"Title"},{"attributes":{"formatter":{"id":"cecd6ecf-c3f0-4835-9894-a3eafc1c3747","type":"BasicTickFormatter"},"plot":{"id":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9a4bb7c-41ef-4e8a-94c5-599cf73e86ae","type":"BasicTicker"}},"id":"52da5d30-6a78-4007-b07e-6ab4e9ea8392","type":"LinearAxis"},{"attributes":{},"id":"148b5ecf-3801-4e2d-8b44-4050a164de32","type":"LinearScale"},{"attributes":{"callback":null},"id":"67bb1556-d276-474f-add1-6bdce76d1b1b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"de81b99d-0eb9-4571-98ea-e41947b46988","type":"DiamondCross"},{"attributes":{"dimension":1,"plot":{"id":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"68fce26e-b34e-4589-ab62-d7bc0a647976","type":"BasicTicker"}},"id":"7740165a-75c6-4fde-b69e-f1eb99cb9916","type":"Grid"},{"attributes":{},"id":"ab243a1d-30e5-464b-ac20-9aa88c0e224a","type":"HelpTool"},{"attributes":{"data_source":{"id":"4888e4c1-956e-4d77-bc6c-8780ea4309c7","type":"ColumnDataSource"},"glyph":{"id":"c52ef040-d07b-4bfc-8d23-02fe1d31cfb4","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"de81b99d-0eb9-4571-98ea-e41947b46988","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"6fb42ef3-9037-4319-808e-40969792e8fc","type":"CDSView"}},"id":"1146ef7f-0e9e-4cd1-8bc1-acd378edd7b7","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"65e558ad-5709-4b8e-a0a3-8d59692ce19c","type":"BoxAnnotation"}},"id":"b953b3ed-e05c-4c81-a2e7-352a161899f4","type":"BoxZoomTool"},{"attributes":{},"id":"cecd6ecf-c3f0-4835-9894-a3eafc1c3747","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9a4bb7c-41ef-4e8a-94c5-599cf73e86ae","type":"BasicTicker"}},"id":"f615d676-3e70-4e3e-8723-ef7ef73fe5dc","type":"Grid"},{"attributes":{},"id":"5ba87031-bf35-41df-91f4-1279f9de9693","type":"ResetTool"},{"attributes":{},"id":"d9a4bb7c-41ef-4e8a-94c5-599cf73e86ae","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b6da201a-3812-4349-ae29-1b5f806ab792","type":"BasicTickFormatter"},"plot":{"id":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"68fce26e-b34e-4589-ab62-d7bc0a647976","type":"BasicTicker"}},"id":"b44ae870-1aeb-4655-af2a-3487a75f2902","type":"LinearAxis"},{"attributes":{},"id":"28e4e6da-9ee6-45d2-82b9-8f58bb629b2a","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"65e558ad-5709-4b8e-a0a3-8d59692ce19c","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"52da5d30-6a78-4007-b07e-6ab4e9ea8392","type":"LinearAxis"}],"left":[{"id":"b44ae870-1aeb-4655-af2a-3487a75f2902","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"52da5d30-6a78-4007-b07e-6ab4e9ea8392","type":"LinearAxis"},{"id":"f615d676-3e70-4e3e-8723-ef7ef73fe5dc","type":"Grid"},{"id":"b44ae870-1aeb-4655-af2a-3487a75f2902","type":"LinearAxis"},{"id":"7740165a-75c6-4fde-b69e-f1eb99cb9916","type":"Grid"},{"id":"65e558ad-5709-4b8e-a0a3-8d59692ce19c","type":"BoxAnnotation"},{"id":"1146ef7f-0e9e-4cd1-8bc1-acd378edd7b7","type":"GlyphRenderer"}],"title":{"id":"e6153d25-46a5-4f2b-ae82-07f7337d3fc0","type":"Title"},"toolbar":{"id":"cb896ab7-08a1-4577-b84d-40151813fd6e","type":"Toolbar"},"x_range":{"id":"f55aa67f-bd25-4c21-99f7-bdfa8cd28daf","type":"DataRange1d"},"x_scale":{"id":"69d9fb6a-e700-4031-a376-c4077974b4e8","type":"LinearScale"},"y_range":{"id":"67bb1556-d276-474f-add1-6bdce76d1b1b","type":"DataRange1d"},"y_scale":{"id":"148b5ecf-3801-4e2d-8b44-4050a164de32","type":"LinearScale"}},"id":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4888e4c1-956e-4d77-bc6c-8780ea4309c7","type":"ColumnDataSource"},{"attributes":{},"id":"d1621257-dbdf-44d9-a20d-2db5394a95ac","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d1621257-dbdf-44d9-a20d-2db5394a95ac","type":"PanTool"},{"id":"4891b220-0e1e-412e-a02b-184357da4d47","type":"WheelZoomTool"},{"id":"b953b3ed-e05c-4c81-a2e7-352a161899f4","type":"BoxZoomTool"},{"id":"28e4e6da-9ee6-45d2-82b9-8f58bb629b2a","type":"SaveTool"},{"id":"5ba87031-bf35-41df-91f4-1279f9de9693","type":"ResetTool"},{"id":"ab243a1d-30e5-464b-ac20-9aa88c0e224a","type":"HelpTool"}]},"id":"cb896ab7-08a1-4577-b84d-40151813fd6e","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c52ef040-d07b-4bfc-8d23-02fe1d31cfb4","type":"DiamondCross"},{"attributes":{},"id":"68fce26e-b34e-4589-ab62-d7bc0a647976","type":"BasicTicker"}],"root_ids":["6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"fbc0ebbe-3579-4b4f-ae0f-6be764098189","elementid":"f5bc5360-40ce-44bf-9fd9-15d8159c74a2","modelid":"6ba91dc2-eb93-480c-82f1-a8cfb7bd2adf"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
