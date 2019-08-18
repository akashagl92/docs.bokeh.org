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
      };var element = document.getElementById("aff6aab1-8a8c-4687-bfb9-0b3c726cd5e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aff6aab1-8a8c-4687-bfb9-0b3c726cd5e2' but no matching script tag was found. ")
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
                    var docs_json = {"3c814741-3192-4e52-92e5-2d9a49fbb537":{"roots":{"references":[{"attributes":{},"id":"7f3ccc4c-6b11-484f-8c58-4de206dde2e8","type":"LinearScale"},{"attributes":{"below":[{"id":"5ab86dbe-34f1-4363-a419-4b6e4ee46038","type":"LinearAxis"}],"left":[{"id":"05e4cf6a-7018-4783-ba37-2cbe70d3a39e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5ab86dbe-34f1-4363-a419-4b6e4ee46038","type":"LinearAxis"},{"id":"7039bd79-c21e-4872-a026-319b90653a78","type":"Grid"},{"id":"05e4cf6a-7018-4783-ba37-2cbe70d3a39e","type":"LinearAxis"},{"id":"db7d5730-db21-439c-bdcb-411ea0d77d41","type":"Grid"},{"id":"6d9ff628-0a81-4a1c-9fe2-7dc3b5fefe80","type":"BoxAnnotation"},{"id":"7c668386-ae05-40bb-ae89-80425786f2ff","type":"GlyphRenderer"}],"title":{"id":"8a68e791-20d5-4840-bcdd-c47e2737e8f8","type":"Title"},"toolbar":{"id":"6d25cd81-f7c6-499e-8224-a5436f2068ca","type":"Toolbar"},"x_range":{"id":"577211b1-3083-4883-be6d-731bb28d12d9","type":"DataRange1d"},"x_scale":{"id":"7f3ccc4c-6b11-484f-8c58-4de206dde2e8","type":"LinearScale"},"y_range":{"id":"d47e975b-665f-40b6-b2fc-7af96bde80c1","type":"DataRange1d"},"y_scale":{"id":"37baeaaf-d670-4cd6-a035-ab04296fb162","type":"LinearScale"}},"id":"0431314e-5b4b-44bb-a692-a203b9cf9d9d","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5c7e862-b2c0-4d73-9da8-3fbe022a86b9","type":"Line"},{"attributes":{"callback":null},"id":"577211b1-3083-4883-be6d-731bb28d12d9","type":"DataRange1d"},{"attributes":{},"id":"0e4c58ab-db3e-4100-9445-9d3c05d39d9e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0431314e-5b4b-44bb-a692-a203b9cf9d9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e4c58ab-db3e-4100-9445-9d3c05d39d9e","type":"BasicTicker"}},"id":"db7d5730-db21-439c-bdcb-411ea0d77d41","type":"Grid"},{"attributes":{"plot":{"id":"0431314e-5b4b-44bb-a692-a203b9cf9d9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad6b0694-7631-4b3f-9f69-61b300730478","type":"BasicTicker"}},"id":"7039bd79-c21e-4872-a026-319b90653a78","type":"Grid"},{"attributes":{"callback":null},"id":"d47e975b-665f-40b6-b2fc-7af96bde80c1","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0dc84773-febc-4e58-9b45-58323253941a","type":"ColumnDataSource"},"glyph":{"id":"ac325aea-5cbf-477a-adf0-413bfe1775ca","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f5c7e862-b2c0-4d73-9da8-3fbe022a86b9","type":"Line"},"selection_glyph":null,"view":{"id":"e811a5cb-a264-41df-9517-2093b7ffcf1f","type":"CDSView"}},"id":"7c668386-ae05-40bb-ae89-80425786f2ff","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac325aea-5cbf-477a-adf0-413bfe1775ca","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6d9ff628-0a81-4a1c-9fe2-7dc3b5fefe80","type":"BoxAnnotation"},{"attributes":{},"id":"57c78323-a7ad-4037-be6e-0b5b69b9f068","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"8a68e791-20d5-4840-bcdd-c47e2737e8f8","type":"Title"},{"attributes":{"source":{"id":"0dc84773-febc-4e58-9b45-58323253941a","type":"ColumnDataSource"}},"id":"e811a5cb-a264-41df-9517-2093b7ffcf1f","type":"CDSView"},{"attributes":{},"id":"ad6b0694-7631-4b3f-9f69-61b300730478","type":"BasicTicker"},{"attributes":{},"id":"22d0b147-f0cc-40c0-b650-941434c2fb40","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"57c78323-a7ad-4037-be6e-0b5b69b9f068","type":"PanTool"},{"id":"22d0b147-f0cc-40c0-b650-941434c2fb40","type":"WheelZoomTool"},{"id":"4b594ac5-7ba8-46fa-a85e-a19b705b81e5","type":"BoxZoomTool"},{"id":"5cfb0c58-1892-4c8b-a957-736dfdf02a93","type":"SaveTool"},{"id":"dba5ead4-9d2f-4ab6-8ca5-fac6fabe62d2","type":"ResetTool"},{"id":"e44b58a5-ee71-48d6-b379-a216c36ed087","type":"HelpTool"}]},"id":"6d25cd81-f7c6-499e-8224-a5436f2068ca","type":"Toolbar"},{"attributes":{"overlay":{"id":"6d9ff628-0a81-4a1c-9fe2-7dc3b5fefe80","type":"BoxAnnotation"}},"id":"4b594ac5-7ba8-46fa-a85e-a19b705b81e5","type":"BoxZoomTool"},{"attributes":{},"id":"5cfb0c58-1892-4c8b-a957-736dfdf02a93","type":"SaveTool"},{"attributes":{},"id":"dba5ead4-9d2f-4ab6-8ca5-fac6fabe62d2","type":"ResetTool"},{"attributes":{},"id":"e44b58a5-ee71-48d6-b379-a216c36ed087","type":"HelpTool"},{"attributes":{},"id":"37baeaaf-d670-4cd6-a035-ab04296fb162","type":"LinearScale"},{"attributes":{},"id":"a2fd74af-b1a8-4078-b12e-55763ede565a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"578bf5fe-ea7c-47ce-ad06-dee7cc54181d","type":"BasicTickFormatter"},"plot":{"id":"0431314e-5b4b-44bb-a692-a203b9cf9d9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e4c58ab-db3e-4100-9445-9d3c05d39d9e","type":"BasicTicker"}},"id":"05e4cf6a-7018-4783-ba37-2cbe70d3a39e","type":"LinearAxis"},{"attributes":{},"id":"578bf5fe-ea7c-47ce-ad06-dee7cc54181d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a2fd74af-b1a8-4078-b12e-55763ede565a","type":"BasicTickFormatter"},"plot":{"id":"0431314e-5b4b-44bb-a692-a203b9cf9d9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad6b0694-7631-4b3f-9f69-61b300730478","type":"BasicTicker"}},"id":"5ab86dbe-34f1-4363-a419-4b6e4ee46038","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0dc84773-febc-4e58-9b45-58323253941a","type":"ColumnDataSource"}],"root_ids":["0431314e-5b4b-44bb-a692-a203b9cf9d9d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3c814741-3192-4e52-92e5-2d9a49fbb537","elementid":"aff6aab1-8a8c-4687-bfb9-0b3c726cd5e2","modelid":"0431314e-5b4b-44bb-a692-a203b9cf9d9d"}];
                
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
