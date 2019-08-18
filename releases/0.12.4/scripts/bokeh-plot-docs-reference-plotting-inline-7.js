(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("9d1d3c1e-caf8-4e04-b8e6-89f0fc8d2d09");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d1d3c1e-caf8-4e04-b8e6-89f0fc8d2d09' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"7409de37-5470-403a-aab6-be235974eb14":{"roots":{"references":[{"attributes":{},"id":"e2fea710-ff9a-4f8c-935b-f56612fe393c","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5ffb6a7d-3d47-47ff-93f4-5f380fefdd9b","type":"BoxAnnotation"},"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"1f62dc36-3fe4-4c67-ab01-29886fb0f2f5","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2717435e-c379-4110-92f0-cdfc5542efcd","type":"ColumnDataSource"},"glyph":{"id":"c648a2ff-2562-455c-91f9-50d576addedf","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"990b61ab-3567-4595-888d-cffc56403bdf","type":"DiamondCross"},"selection_glyph":null},"id":"d6ca96d9-057c-44f3-9d86-8441afd4dabf","type":"GlyphRenderer"},{"attributes":{},"id":"7a7a1117-cf04-4ad9-a75e-afdc2db8aeba","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"50e497f0-3b0c-4f70-9d00-f745587c0577","type":"ResetTool"},{"attributes":{},"id":"b00fd0ee-6b93-45ed-a5b5-bfeeb85fcce0","type":"BasicTicker"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"e0655bd3-2bb1-44e9-a40a-ce893da85d61","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"990b61ab-3567-4595-888d-cffc56403bdf","type":"DiamondCross"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"867b8ab2-d277-45d8-aeb0-de922ae8df2e","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"adc5b49d-27ff-4204-9841-f7503ed6b906","type":"BasicTicker"}},"id":"6271cd41-07da-48d2-9cca-a3a4a1c85627","type":"Grid"},{"attributes":{"callback":null},"id":"f43ab43d-b933-461e-9e61-964a14450d26","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5ffb6a7d-3d47-47ff-93f4-5f380fefdd9b","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b00fd0ee-6b93-45ed-a5b5-bfeeb85fcce0","type":"BasicTicker"}},"id":"2a5fb7e1-570a-462a-b56b-d7ac4266aeb5","type":"Grid"},{"attributes":{"formatter":{"id":"7a7a1117-cf04-4ad9-a75e-afdc2db8aeba","type":"BasicTickFormatter"},"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b00fd0ee-6b93-45ed-a5b5-bfeeb85fcce0","type":"BasicTicker"}},"id":"9af3df0c-e58a-4984-b565-ca260926e2e6","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"c77d9167-1da6-4c9f-91da-0d4882086a67","type":"Title"},{"attributes":{},"id":"adc5b49d-27ff-4204-9841-f7503ed6b906","type":"BasicTicker"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"f7cdcbe9-9345-42a1-9a6f-ab916678a87f","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"e2fea710-ff9a-4f8c-935b-f56612fe393c","type":"BasicTickFormatter"},"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"adc5b49d-27ff-4204-9841-f7503ed6b906","type":"BasicTicker"}},"id":"f612cc67-fc9a-4700-a76c-602e31a5de64","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2717435e-c379-4110-92f0-cdfc5542efcd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"}},"id":"ff8d1f73-8c36-4958-876d-491955242eb5","type":"PanTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c648a2ff-2562-455c-91f9-50d576addedf","type":"DiamondCross"},{"attributes":{},"id":"7ac8932c-89c5-4117-845b-fabfa101fdb3","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ff8d1f73-8c36-4958-876d-491955242eb5","type":"PanTool"},{"id":"f7cdcbe9-9345-42a1-9a6f-ab916678a87f","type":"WheelZoomTool"},{"id":"1f62dc36-3fe4-4c67-ab01-29886fb0f2f5","type":"BoxZoomTool"},{"id":"e0655bd3-2bb1-44e9-a40a-ce893da85d61","type":"SaveTool"},{"id":"50e497f0-3b0c-4f70-9d00-f745587c0577","type":"ResetTool"},{"id":"867b8ab2-d277-45d8-aeb0-de922ae8df2e","type":"HelpTool"}]},"id":"7df8d3aa-aff9-4f2a-adee-294a158aee21","type":"Toolbar"},{"attributes":{"below":[{"id":"9af3df0c-e58a-4984-b565-ca260926e2e6","type":"LinearAxis"}],"left":[{"id":"f612cc67-fc9a-4700-a76c-602e31a5de64","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9af3df0c-e58a-4984-b565-ca260926e2e6","type":"LinearAxis"},{"id":"2a5fb7e1-570a-462a-b56b-d7ac4266aeb5","type":"Grid"},{"id":"f612cc67-fc9a-4700-a76c-602e31a5de64","type":"LinearAxis"},{"id":"6271cd41-07da-48d2-9cca-a3a4a1c85627","type":"Grid"},{"id":"5ffb6a7d-3d47-47ff-93f4-5f380fefdd9b","type":"BoxAnnotation"},{"id":"d6ca96d9-057c-44f3-9d86-8441afd4dabf","type":"GlyphRenderer"}],"title":{"id":"c77d9167-1da6-4c9f-91da-0d4882086a67","type":"Title"},"tool_events":{"id":"7ac8932c-89c5-4117-845b-fabfa101fdb3","type":"ToolEvents"},"toolbar":{"id":"7df8d3aa-aff9-4f2a-adee-294a158aee21","type":"Toolbar"},"x_range":{"id":"f43ab43d-b933-461e-9e61-964a14450d26","type":"DataRange1d"},"y_range":{"id":"56ed04b4-2cf0-40d7-bf22-88e953896ef9","type":"DataRange1d"}},"id":"cd1077af-4ed1-43cc-b924-03214d53f3f4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"56ed04b4-2cf0-40d7-bf22-88e953896ef9","type":"DataRange1d"}],"root_ids":["cd1077af-4ed1-43cc-b924-03214d53f3f4"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7409de37-5470-403a-aab6-be235974eb14","elementid":"9d1d3c1e-caf8-4e04-b8e6-89f0fc8d2d09","modelid":"cd1077af-4ed1-43cc-b924-03214d53f3f4"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
