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
      };var element = document.getElementById("361ee3a7-236b-4718-940e-ee19acb635ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '361ee3a7-236b-4718-940e-ee19acb635ea' but no matching script tag was found. ")
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
                    var docs_json = {"f75ee8bf-cd87-4e06-a288-a851a5dacd27":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ad30239-7a51-4305-a74a-772c160c6a6f","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1911a75a-d760-4efd-bc7d-e5eb7b6f29d8","type":"LinearAxis"}],"left":[{"id":"fcada09e-69fd-4575-8a79-540dc79c853e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1911a75a-d760-4efd-bc7d-e5eb7b6f29d8","type":"LinearAxis"},{"id":"de04f137-fbb9-4053-a65c-70f246945741","type":"Grid"},{"id":"fcada09e-69fd-4575-8a79-540dc79c853e","type":"LinearAxis"},{"id":"e498fee4-9b29-4788-b575-0a6fd8e5d7bc","type":"Grid"},{"id":"4ad30239-7a51-4305-a74a-772c160c6a6f","type":"BoxAnnotation"},{"id":"28d7b1a1-9ded-4679-9862-a604bd3f824a","type":"GlyphRenderer"}],"title":{"id":"4c583f23-6d09-4498-9be3-aaafb2c01780","type":"Title"},"toolbar":{"id":"aa7f514c-8de8-4669-86cf-d17efb945e3c","type":"Toolbar"},"x_range":{"id":"6157f3e9-3929-49b7-9e7b-c8086e9e558a","type":"DataRange1d"},"x_scale":{"id":"d6c5f337-bc67-404f-9f80-91e225f0f397","type":"LinearScale"},"y_range":{"id":"3c8bcc4a-04e7-4a88-bf97-9cf997ac7081","type":"DataRange1d"},"y_scale":{"id":"8aaefad4-b7ae-48ed-bbec-d31a2fde8d8b","type":"LinearScale"}},"id":"81e43325-53b6-4d39-afaf-9aa32a591f6f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fb422ce6-ac5d-419e-9441-a8c2eac4eb5b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb422ce6-ac5d-419e-9441-a8c2eac4eb5b","type":"PanTool"},{"id":"eab35bc5-0162-4c58-b435-1e56e30a5ad2","type":"WheelZoomTool"},{"id":"40cc508c-01dc-4b51-b5cf-a9843b653ea2","type":"BoxZoomTool"},{"id":"67cbf2e2-bcb7-4e0f-832c-9a0cb5705162","type":"SaveTool"},{"id":"1144efb7-03d4-4f1a-a702-0a02f7c235c7","type":"ResetTool"},{"id":"9e212ff0-fe71-4575-80db-db0e94b7de0e","type":"HelpTool"}]},"id":"aa7f514c-8de8-4669-86cf-d17efb945e3c","type":"Toolbar"},{"attributes":{"source":{"id":"4b789ae7-2b15-420d-a903-3bfe64a98771","type":"ColumnDataSource"}},"id":"fe19a9ed-fc78-47dd-9592-709f1cdb2020","type":"CDSView"},{"attributes":{"callback":null},"id":"6157f3e9-3929-49b7-9e7b-c8086e9e558a","type":"DataRange1d"},{"attributes":{},"id":"eab35bc5-0162-4c58-b435-1e56e30a5ad2","type":"WheelZoomTool"},{"attributes":{},"id":"6e94ec83-95dd-4783-98f0-68c704d65b66","type":"BasicTicker"},{"attributes":{"overlay":{"id":"4ad30239-7a51-4305-a74a-772c160c6a6f","type":"BoxAnnotation"}},"id":"40cc508c-01dc-4b51-b5cf-a9843b653ea2","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5603a6e6-3ffd-436f-954f-618a21bc2848","type":"InvertedTriangle"},{"attributes":{},"id":"67cbf2e2-bcb7-4e0f-832c-9a0cb5705162","type":"SaveTool"},{"attributes":{"formatter":{"id":"a9101f63-335a-4f53-b659-e5c164d8593e","type":"BasicTickFormatter"},"plot":{"id":"81e43325-53b6-4d39-afaf-9aa32a591f6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e94ec83-95dd-4783-98f0-68c704d65b66","type":"BasicTicker"}},"id":"1911a75a-d760-4efd-bc7d-e5eb7b6f29d8","type":"LinearAxis"},{"attributes":{},"id":"1144efb7-03d4-4f1a-a702-0a02f7c235c7","type":"ResetTool"},{"attributes":{"callback":null},"id":"3c8bcc4a-04e7-4a88-bf97-9cf997ac7081","type":"DataRange1d"},{"attributes":{},"id":"9e212ff0-fe71-4575-80db-db0e94b7de0e","type":"HelpTool"},{"attributes":{},"id":"d6c5f337-bc67-404f-9f80-91e225f0f397","type":"LinearScale"},{"attributes":{},"id":"15b6f601-d267-4627-8629-ada94912a07a","type":"BasicTickFormatter"},{"attributes":{},"id":"8aaefad4-b7ae-48ed-bbec-d31a2fde8d8b","type":"LinearScale"},{"attributes":{"plot":{"id":"81e43325-53b6-4d39-afaf-9aa32a591f6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e94ec83-95dd-4783-98f0-68c704d65b66","type":"BasicTicker"}},"id":"de04f137-fbb9-4053-a65c-70f246945741","type":"Grid"},{"attributes":{"formatter":{"id":"15b6f601-d267-4627-8629-ada94912a07a","type":"BasicTickFormatter"},"plot":{"id":"81e43325-53b6-4d39-afaf-9aa32a591f6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdbb38a4-6e68-4a07-a20c-3c701203d542","type":"BasicTicker"}},"id":"fcada09e-69fd-4575-8a79-540dc79c853e","type":"LinearAxis"},{"attributes":{},"id":"cdbb38a4-6e68-4a07-a20c-3c701203d542","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"4c583f23-6d09-4498-9be3-aaafb2c01780","type":"Title"},{"attributes":{},"id":"a9101f63-335a-4f53-b659-e5c164d8593e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"81e43325-53b6-4d39-afaf-9aa32a591f6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdbb38a4-6e68-4a07-a20c-3c701203d542","type":"BasicTicker"}},"id":"e498fee4-9b29-4788-b575-0a6fd8e5d7bc","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ea74269-25e8-4b6b-a1b2-3898ce623090","type":"InvertedTriangle"},{"attributes":{"data_source":{"id":"4b789ae7-2b15-420d-a903-3bfe64a98771","type":"ColumnDataSource"},"glyph":{"id":"5603a6e6-3ffd-436f-954f-618a21bc2848","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ea74269-25e8-4b6b-a1b2-3898ce623090","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"fe19a9ed-fc78-47dd-9592-709f1cdb2020","type":"CDSView"}},"id":"28d7b1a1-9ded-4679-9862-a604bd3f824a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4b789ae7-2b15-420d-a903-3bfe64a98771","type":"ColumnDataSource"}],"root_ids":["81e43325-53b6-4d39-afaf-9aa32a591f6f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"f75ee8bf-cd87-4e06-a288-a851a5dacd27","elementid":"361ee3a7-236b-4718-940e-ee19acb635ea","modelid":"81e43325-53b6-4d39-afaf-9aa32a591f6f"}];
                
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
