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
      };var element = document.getElementById("6e0a2e81-6de1-45bf-90ef-e25351d5cb05");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e0a2e81-6de1-45bf-90ef-e25351d5cb05' but no matching script tag was found. ")
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
                var docs_json = {"e7eb82b8-44a7-456c-a2e6-4f265fa55c06":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14aeac6c-5ee3-4408-9802-efd04a72c4bd","type":"Square"},{"attributes":{"formatter":{"id":"291bf434-ece1-471f-9683-40f3708447a8","type":"BasicTickFormatter"},"plot":{"id":"bd414cc3-e61b-4f36-a82b-56c323bff49a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a110de16-4fe4-4863-9d35-8023bb00afcf","type":"BasicTicker"}},"id":"99bd4cae-8f23-4113-b90c-5e1ba3056e36","type":"LinearAxis"},{"attributes":{"callback":null},"id":"214c880e-6b86-4f00-9ccf-6a63d58deda4","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e7de75a-9d55-4e42-a3f2-66865651be3f","type":"PanTool"},{"id":"46c37eb8-cb20-4cb8-87de-44979a847a43","type":"WheelZoomTool"},{"id":"c750ddbb-52e0-45b6-a64d-2262f88150ff","type":"BoxZoomTool"},{"id":"a0498427-741d-452d-acfe-202623e8813e","type":"SaveTool"},{"id":"bdc3e662-8449-49b9-b6af-cd9138a0bada","type":"ResetTool"},{"id":"53b21d39-0b1c-4382-b743-f5ea69156eff","type":"HelpTool"}]},"id":"f7893ec9-08fd-4126-bb53-bab7ea05931c","type":"Toolbar"},{"attributes":{"below":[{"id":"6cacc288-71f2-415e-9239-4a7df0838cd3","type":"LinearAxis"}],"left":[{"id":"99bd4cae-8f23-4113-b90c-5e1ba3056e36","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6cacc288-71f2-415e-9239-4a7df0838cd3","type":"LinearAxis"},{"id":"562b42fe-9885-4898-bbaf-e36641519753","type":"Grid"},{"id":"99bd4cae-8f23-4113-b90c-5e1ba3056e36","type":"LinearAxis"},{"id":"2ea2b432-9be8-4b3d-8c96-a7d8a5e22dcf","type":"Grid"},{"id":"ec275fff-48bb-4f39-8dc8-2b7e83e1b2aa","type":"BoxAnnotation"},{"id":"ef4ec6bc-24d7-45c2-8e23-0363bd93ceca","type":"GlyphRenderer"}],"title":{"id":"a2fe39ec-0e01-4adb-b051-32533482dbb9","type":"Title"},"toolbar":{"id":"f7893ec9-08fd-4126-bb53-bab7ea05931c","type":"Toolbar"},"x_range":{"id":"0486b10b-56ad-4737-b346-13eee01a7b76","type":"DataRange1d"},"x_scale":{"id":"b654e806-75f4-47c6-b2b6-7eb27a3b953c","type":"LinearScale"},"y_range":{"id":"214c880e-6b86-4f00-9ccf-6a63d58deda4","type":"DataRange1d"},"y_scale":{"id":"9ad08dd2-54c5-41f6-9cdf-aa3eafb7e2ae","type":"LinearScale"}},"id":"bd414cc3-e61b-4f36-a82b-56c323bff49a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a110de16-4fe4-4863-9d35-8023bb00afcf","type":"BasicTicker"},{"attributes":{"source":{"id":"1f74513a-acdb-475d-860b-3f5858210ff5","type":"ColumnDataSource"}},"id":"f6214c58-f67b-41c1-b770-1c1f3dbced50","type":"CDSView"},{"attributes":{"plot":{"id":"bd414cc3-e61b-4f36-a82b-56c323bff49a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f79242a-7f93-42d4-9a35-598b875e0dcc","type":"BasicTicker"}},"id":"562b42fe-9885-4898-bbaf-e36641519753","type":"Grid"},{"attributes":{},"id":"46c37eb8-cb20-4cb8-87de-44979a847a43","type":"WheelZoomTool"},{"attributes":{},"id":"53b21d39-0b1c-4382-b743-f5ea69156eff","type":"HelpTool"},{"attributes":{"overlay":{"id":"ec275fff-48bb-4f39-8dc8-2b7e83e1b2aa","type":"BoxAnnotation"}},"id":"c750ddbb-52e0-45b6-a64d-2262f88150ff","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a2fe39ec-0e01-4adb-b051-32533482dbb9","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"327241de-0563-4c1b-91c7-ecc7a0ae37c6","type":"Square"},{"attributes":{},"id":"a0498427-741d-452d-acfe-202623e8813e","type":"SaveTool"},{"attributes":{},"id":"bdc3e662-8449-49b9-b6af-cd9138a0bada","type":"ResetTool"},{"attributes":{},"id":"9ad08dd2-54c5-41f6-9cdf-aa3eafb7e2ae","type":"LinearScale"},{"attributes":{},"id":"291bf434-ece1-471f-9683-40f3708447a8","type":"BasicTickFormatter"},{"attributes":{},"id":"9f79242a-7f93-42d4-9a35-598b875e0dcc","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"bd414cc3-e61b-4f36-a82b-56c323bff49a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a110de16-4fe4-4863-9d35-8023bb00afcf","type":"BasicTicker"}},"id":"2ea2b432-9be8-4b3d-8c96-a7d8a5e22dcf","type":"Grid"},{"attributes":{"formatter":{"id":"2e3d3708-2bd1-48f3-b8a6-4b9319f62b0a","type":"BasicTickFormatter"},"plot":{"id":"bd414cc3-e61b-4f36-a82b-56c323bff49a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f79242a-7f93-42d4-9a35-598b875e0dcc","type":"BasicTicker"}},"id":"6cacc288-71f2-415e-9239-4a7df0838cd3","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"1f74513a-acdb-475d-860b-3f5858210ff5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"0486b10b-56ad-4737-b346-13eee01a7b76","type":"DataRange1d"},{"attributes":{},"id":"b654e806-75f4-47c6-b2b6-7eb27a3b953c","type":"LinearScale"},{"attributes":{},"id":"0e7de75a-9d55-4e42-a3f2-66865651be3f","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec275fff-48bb-4f39-8dc8-2b7e83e1b2aa","type":"BoxAnnotation"},{"attributes":{},"id":"2e3d3708-2bd1-48f3-b8a6-4b9319f62b0a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1f74513a-acdb-475d-860b-3f5858210ff5","type":"ColumnDataSource"},"glyph":{"id":"327241de-0563-4c1b-91c7-ecc7a0ae37c6","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14aeac6c-5ee3-4408-9802-efd04a72c4bd","type":"Square"},"selection_glyph":null,"view":{"id":"f6214c58-f67b-41c1-b770-1c1f3dbced50","type":"CDSView"}},"id":"ef4ec6bc-24d7-45c2-8e23-0363bd93ceca","type":"GlyphRenderer"}],"root_ids":["bd414cc3-e61b-4f36-a82b-56c323bff49a"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e7eb82b8-44a7-456c-a2e6-4f265fa55c06","elementid":"6e0a2e81-6de1-45bf-90ef-e25351d5cb05","modelid":"bd414cc3-e61b-4f36-a82b-56c323bff49a"}];
                
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
