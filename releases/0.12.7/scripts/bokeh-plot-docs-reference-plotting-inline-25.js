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
      };var element = document.getElementById("2654bfc8-c2ec-4312-a396-248fd829a401");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2654bfc8-c2ec-4312-a396-248fd829a401' but no matching script tag was found. ")
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
                var docs_json = {"5d5db8f3-63bc-400e-9bd7-3dff38c8d4b8":{"roots":{"references":[{"attributes":{"overlay":{"id":"2449da16-09d9-4641-8869-62dfd9f7afca","type":"BoxAnnotation"}},"id":"31ec3fc0-bd6f-46ca-a99e-c119f9def02f","type":"BoxZoomTool"},{"attributes":{},"id":"0ec33d5b-626c-49f4-a0a2-7004cf884053","type":"SaveTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b089ef86-5028-4eeb-ac1c-cd16f2b68c2e","type":"Wedge"},{"attributes":{},"id":"ccd79b04-41e1-4f4a-89e0-e5ffc1821fe2","type":"ResetTool"},{"attributes":{"callback":null},"id":"c80ae5f0-887f-45d9-8962-991a71d6e383","type":"DataRange1d"},{"attributes":{},"id":"f307f27d-b1ae-498c-aa0d-31d2b4799f88","type":"HelpTool"},{"attributes":{},"id":"ad7b3b7e-d922-45c6-bfa0-37477165e5a5","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"ab2e5008-34e7-4535-8d5d-dc1fa9dbe3c3","type":"Title"},{"attributes":{},"id":"ee5b37de-dbf9-417e-93a9-b61ed358135e","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"3910f898-bb3a-47c6-91e2-8536b8507adc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f71fc9f4-80bf-4394-bd2c-69c8884905a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"61f8233c-0fb7-45b2-ba2c-37a004aed67d","type":"BasicTicker"}},"id":"d80cbd87-2735-423d-8166-bf38d261bfc6","type":"Grid"},{"attributes":{"below":[{"id":"d64877ad-be3f-4b2d-9641-addc36f4c056","type":"LinearAxis"}],"left":[{"id":"d2264d54-6008-4354-8ea5-9d51533fd211","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d64877ad-be3f-4b2d-9641-addc36f4c056","type":"LinearAxis"},{"id":"d80cbd87-2735-423d-8166-bf38d261bfc6","type":"Grid"},{"id":"d2264d54-6008-4354-8ea5-9d51533fd211","type":"LinearAxis"},{"id":"fee62b15-a7fb-47be-83b2-e2afa75b3669","type":"Grid"},{"id":"2449da16-09d9-4641-8869-62dfd9f7afca","type":"BoxAnnotation"},{"id":"b09254fb-76d8-48e9-827d-e3c22c46dfef","type":"GlyphRenderer"}],"title":{"id":"ab2e5008-34e7-4535-8d5d-dc1fa9dbe3c3","type":"Title"},"toolbar":{"id":"4bf30a86-d1e3-4a68-8244-99fb187f44b2","type":"Toolbar"},"x_range":{"id":"c93600c5-e067-4ad3-a854-840b754db8a3","type":"DataRange1d"},"x_scale":{"id":"ad7b3b7e-d922-45c6-bfa0-37477165e5a5","type":"LinearScale"},"y_range":{"id":"c80ae5f0-887f-45d9-8962-991a71d6e383","type":"DataRange1d"},"y_scale":{"id":"ee5b37de-dbf9-417e-93a9-b61ed358135e","type":"LinearScale"}},"id":"f71fc9f4-80bf-4394-bd2c-69c8884905a2","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"3910f898-bb3a-47c6-91e2-8536b8507adc","type":"ColumnDataSource"}},"id":"63012250-6daf-43a0-b1bc-b0be991ce65d","type":"CDSView"},{"attributes":{"formatter":{"id":"3f0da45c-51b8-4118-8b9c-3e067432deb8","type":"BasicTickFormatter"},"plot":{"id":"f71fc9f4-80bf-4394-bd2c-69c8884905a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"61f8233c-0fb7-45b2-ba2c-37a004aed67d","type":"BasicTicker"}},"id":"d64877ad-be3f-4b2d-9641-addc36f4c056","type":"LinearAxis"},{"attributes":{},"id":"61f8233c-0fb7-45b2-ba2c-37a004aed67d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8af7c132-df04-4d40-bfb0-19a06a9ace0f","type":"BasicTickFormatter"},"plot":{"id":"f71fc9f4-80bf-4394-bd2c-69c8884905a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd90ad43-ebef-433b-8672-c01e6abd529d","type":"BasicTicker"}},"id":"d2264d54-6008-4354-8ea5-9d51533fd211","type":"LinearAxis"},{"attributes":{},"id":"bd90ad43-ebef-433b-8672-c01e6abd529d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f71fc9f4-80bf-4394-bd2c-69c8884905a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd90ad43-ebef-433b-8672-c01e6abd529d","type":"BasicTicker"}},"id":"fee62b15-a7fb-47be-83b2-e2afa75b3669","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"06cdbc34-a6f1-4edc-bb20-0cbcd92d1486","type":"PanTool"},{"id":"e0b16c6e-f287-4170-a753-adfecb15b093","type":"WheelZoomTool"},{"id":"31ec3fc0-bd6f-46ca-a99e-c119f9def02f","type":"BoxZoomTool"},{"id":"0ec33d5b-626c-49f4-a0a2-7004cf884053","type":"SaveTool"},{"id":"ccd79b04-41e1-4f4a-89e0-e5ffc1821fe2","type":"ResetTool"},{"id":"f307f27d-b1ae-498c-aa0d-31d2b4799f88","type":"HelpTool"}]},"id":"4bf30a86-d1e3-4a68-8244-99fb187f44b2","type":"Toolbar"},{"attributes":{},"id":"8af7c132-df04-4d40-bfb0-19a06a9ace0f","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"50cb2298-935e-4c02-8e66-831c20dc6243","type":"Wedge"},{"attributes":{},"id":"3f0da45c-51b8-4118-8b9c-3e067432deb8","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2449da16-09d9-4641-8869-62dfd9f7afca","type":"BoxAnnotation"},{"attributes":{},"id":"06cdbc34-a6f1-4edc-bb20-0cbcd92d1486","type":"PanTool"},{"attributes":{"callback":null},"id":"c93600c5-e067-4ad3-a854-840b754db8a3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3910f898-bb3a-47c6-91e2-8536b8507adc","type":"ColumnDataSource"},"glyph":{"id":"50cb2298-935e-4c02-8e66-831c20dc6243","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b089ef86-5028-4eeb-ac1c-cd16f2b68c2e","type":"Wedge"},"selection_glyph":null,"view":{"id":"63012250-6daf-43a0-b1bc-b0be991ce65d","type":"CDSView"}},"id":"b09254fb-76d8-48e9-827d-e3c22c46dfef","type":"GlyphRenderer"},{"attributes":{},"id":"e0b16c6e-f287-4170-a753-adfecb15b093","type":"WheelZoomTool"}],"root_ids":["f71fc9f4-80bf-4394-bd2c-69c8884905a2"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"5d5db8f3-63bc-400e-9bd7-3dff38c8d4b8","elementid":"2654bfc8-c2ec-4312-a396-248fd829a401","modelid":"f71fc9f4-80bf-4394-bd2c-69c8884905a2"}];
                
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
