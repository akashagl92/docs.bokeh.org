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
      };var element = document.getElementById("53c28919-358b-4b6c-a715-87751f3304aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '53c28919-358b-4b6c-a715-87751f3304aa' but no matching script tag was found. ")
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
                var docs_json = {"e2a51bbc-e931-4eed-b100-ae05c8916193":{"roots":{"references":[{"attributes":{},"id":"e7974686-b0c3-4ac1-a908-d5cbb24c1f0d","type":"LinearScale"},{"attributes":{},"id":"b6ddd345-3905-4fc6-b049-74447c3bed85","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"89ea0845-5b78-40ea-bb25-a6f945a37dc3","type":"ColumnDataSource"}},"id":"bee49318-bcdf-48b2-9ea7-36e127d6938d","type":"CDSView"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"aec5a3f1-d7aa-41b2-bb47-2ab3edeead72","type":"Wedge"},{"attributes":{"overlay":{"id":"dd38a64a-0fbb-4dd4-88c7-a9ba214d77aa","type":"BoxAnnotation"}},"id":"3206157e-991e-4b45-b85b-2af7c3c08991","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"0300c8e0-1f04-40ed-afc9-54ccdea713d8","type":"LinearAxis"}],"left":[{"id":"ccbce39f-23c8-412b-bfa1-54aca516dd5f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0300c8e0-1f04-40ed-afc9-54ccdea713d8","type":"LinearAxis"},{"id":"31bf5aff-3eca-40c2-962a-43e4353c49c7","type":"Grid"},{"id":"ccbce39f-23c8-412b-bfa1-54aca516dd5f","type":"LinearAxis"},{"id":"569b94d2-85d0-4a89-9c18-8337b92c3eda","type":"Grid"},{"id":"dd38a64a-0fbb-4dd4-88c7-a9ba214d77aa","type":"BoxAnnotation"},{"id":"bff5b10e-675a-44a4-bbce-0b6d6f842ceb","type":"GlyphRenderer"}],"title":{"id":"f46a3247-452a-4775-a0cf-40f60ac2a8f2","type":"Title"},"toolbar":{"id":"4885f7d1-a58c-49f5-be57-cc52ceb6c7d8","type":"Toolbar"},"x_range":{"id":"52acb241-faff-4353-8b66-f3be77b63786","type":"DataRange1d"},"x_scale":{"id":"e7974686-b0c3-4ac1-a908-d5cbb24c1f0d","type":"LinearScale"},"y_range":{"id":"1f378c0b-8f59-4d2e-b758-7e957710eeff","type":"DataRange1d"},"y_scale":{"id":"5c04b78e-9753-4dc8-84e2-2af59d19b02e","type":"LinearScale"}},"id":"8becf738-98ca-4862-8c09-a849e6b09ff2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"687aae29-7a87-4ced-932b-da105b40654a","type":"SaveTool"},{"attributes":{},"id":"fb52158e-6223-4903-9a2b-ed7741006e40","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"f46a3247-452a-4775-a0cf-40f60ac2a8f2","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"89ea0845-5b78-40ea-bb25-a6f945a37dc3","type":"ColumnDataSource"},{"attributes":{},"id":"98638fb1-0386-48bc-9f02-d721020f82e6","type":"BasicTicker"},{"attributes":{},"id":"f43ce5b1-791b-44b6-904e-4bbf58f526f3","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"52acb241-faff-4353-8b66-f3be77b63786","type":"DataRange1d"},{"attributes":{},"id":"9d55e4dc-cf00-416e-b03b-50df8763f866","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"89ea0845-5b78-40ea-bb25-a6f945a37dc3","type":"ColumnDataSource"},"glyph":{"id":"b41b28b5-bdfc-4687-bf88-d9a9435eabee","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aec5a3f1-d7aa-41b2-bb47-2ab3edeead72","type":"Wedge"},"selection_glyph":null,"view":{"id":"bee49318-bcdf-48b2-9ea7-36e127d6938d","type":"CDSView"}},"id":"bff5b10e-675a-44a4-bbce-0b6d6f842ceb","type":"GlyphRenderer"},{"attributes":{},"id":"c9357eaa-32ea-49c0-90ed-ba3e1edad45c","type":"PanTool"},{"attributes":{"callback":null},"id":"1f378c0b-8f59-4d2e-b758-7e957710eeff","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9d55e4dc-cf00-416e-b03b-50df8763f866","type":"BasicTickFormatter"},"plot":{"id":"8becf738-98ca-4862-8c09-a849e6b09ff2","subtype":"Figure","type":"Plot"},"ticker":{"id":"26cfe02a-bf87-409f-a2a1-95ee284519ff","type":"BasicTicker"}},"id":"ccbce39f-23c8-412b-bfa1-54aca516dd5f","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c9357eaa-32ea-49c0-90ed-ba3e1edad45c","type":"PanTool"},{"id":"f43ce5b1-791b-44b6-904e-4bbf58f526f3","type":"WheelZoomTool"},{"id":"3206157e-991e-4b45-b85b-2af7c3c08991","type":"BoxZoomTool"},{"id":"687aae29-7a87-4ced-932b-da105b40654a","type":"SaveTool"},{"id":"fb52158e-6223-4903-9a2b-ed7741006e40","type":"ResetTool"},{"id":"6afd4f78-408f-4118-9e3a-a60100c1b02e","type":"HelpTool"}]},"id":"4885f7d1-a58c-49f5-be57-cc52ceb6c7d8","type":"Toolbar"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"b41b28b5-bdfc-4687-bf88-d9a9435eabee","type":"Wedge"},{"attributes":{"formatter":{"id":"b6ddd345-3905-4fc6-b049-74447c3bed85","type":"BasicTickFormatter"},"plot":{"id":"8becf738-98ca-4862-8c09-a849e6b09ff2","subtype":"Figure","type":"Plot"},"ticker":{"id":"98638fb1-0386-48bc-9f02-d721020f82e6","type":"BasicTicker"}},"id":"0300c8e0-1f04-40ed-afc9-54ccdea713d8","type":"LinearAxis"},{"attributes":{"plot":{"id":"8becf738-98ca-4862-8c09-a849e6b09ff2","subtype":"Figure","type":"Plot"},"ticker":{"id":"98638fb1-0386-48bc-9f02-d721020f82e6","type":"BasicTicker"}},"id":"31bf5aff-3eca-40c2-962a-43e4353c49c7","type":"Grid"},{"attributes":{},"id":"26cfe02a-bf87-409f-a2a1-95ee284519ff","type":"BasicTicker"},{"attributes":{},"id":"5c04b78e-9753-4dc8-84e2-2af59d19b02e","type":"LinearScale"},{"attributes":{},"id":"6afd4f78-408f-4118-9e3a-a60100c1b02e","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd38a64a-0fbb-4dd4-88c7-a9ba214d77aa","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"8becf738-98ca-4862-8c09-a849e6b09ff2","subtype":"Figure","type":"Plot"},"ticker":{"id":"26cfe02a-bf87-409f-a2a1-95ee284519ff","type":"BasicTicker"}},"id":"569b94d2-85d0-4a89-9c18-8337b92c3eda","type":"Grid"}],"root_ids":["8becf738-98ca-4862-8c09-a849e6b09ff2"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e2a51bbc-e931-4eed-b100-ae05c8916193","elementid":"53c28919-358b-4b6c-a715-87751f3304aa","modelid":"8becf738-98ca-4862-8c09-a849e6b09ff2"}];
                
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
