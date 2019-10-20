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
      };var element = document.getElementById("f6e6f300-ccc8-4600-a63b-4fcc8d2f8a60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6e6f300-ccc8-4600-a63b-4fcc8d2f8a60' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"abfa53b9-6a5c-49e9-80a8-53be55108f18":{"roots":{"references":[{"attributes":{},"id":"9ce5c001-4db0-4d46-9e9d-f56598b8216d","type":"ToolEvents"},{"attributes":{"below":[{"id":"3b211cd3-fdaa-4068-bb42-3e6600711d6b","type":"LinearAxis"}],"left":[{"id":"74dfe2d9-d050-4887-bd39-990337d007dd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3b211cd3-fdaa-4068-bb42-3e6600711d6b","type":"LinearAxis"},{"id":"0a306c99-c4ed-4d2c-980b-c9a858feff52","type":"Grid"},{"id":"74dfe2d9-d050-4887-bd39-990337d007dd","type":"LinearAxis"},{"id":"014ced8c-0945-400d-a590-41da7ee3a151","type":"Grid"},{"id":"7c08ca27-b750-4b5a-9692-f6ecbd4de3d7","type":"BoxAnnotation"},{"id":"f71d156b-f0ef-4941-8109-01f8157c2344","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"9ce5c001-4db0-4d46-9e9d-f56598b8216d","type":"ToolEvents"},"toolbar":{"id":"2ecbb12d-c7ef-410b-8c39-0ce052e431ef","type":"Toolbar"},"x_range":{"id":"015b0a5a-73f2-411c-813d-59f16da63cb8","type":"DataRange1d"},"y_range":{"id":"00cb9524-ba0a-4c3a-87fc-d6dc740f0c28","type":"DataRange1d"}},"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"58e57d19-644a-4b27-944a-716a5fb35f19","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"}},"id":"008fd295-83c0-418c-b964-c8fab1bdfec8","type":"HoverTool"},{"attributes":{"formatter":{"id":"41088bbe-d745-46ae-b6b4-79ea07c37606","type":"BasicTickFormatter"},"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},"ticker":{"id":"49cfbd78-95b5-40f6-b34a-4b591d9e2c15","type":"BasicTicker"}},"id":"74dfe2d9-d050-4887-bd39-990337d007dd","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},"ticker":{"id":"49cfbd78-95b5-40f6-b34a-4b591d9e2c15","type":"BasicTicker"}},"id":"014ced8c-0945-400d-a590-41da7ee3a151","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a57f81c5-853a-4686-b523-d24e53556868","type":"BoxSelectTool"},{"id":"008fd295-83c0-418c-b964-c8fab1bdfec8","type":"HoverTool"}]},"id":"2ecbb12d-c7ef-410b-8c39-0ce052e431ef","type":"Toolbar"},{"attributes":{},"id":"41088bbe-d745-46ae-b6b4-79ea07c37606","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7c08ca27-b750-4b5a-9692-f6ecbd4de3d7","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"00cb9524-ba0a-4c3a-87fc-d6dc740f0c28","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b218a67-ab96-4734-b2e1-a5d545a0b46e","type":"Circle"},{"attributes":{},"id":"b4447379-c8fc-4ca7-a001-1e61a94547fe","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},"ticker":{"id":"a348f953-4eb6-486f-8c7d-8ebf714cdda8","type":"BasicTicker"}},"id":"0a306c99-c4ed-4d2c-980b-c9a858feff52","type":"Grid"},{"attributes":{},"id":"a348f953-4eb6-486f-8c7d-8ebf714cdda8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"7d8ff8d7-6136-4549-8edc-6204fa0877d7","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b4447379-c8fc-4ca7-a001-1e61a94547fe","type":"BasicTickFormatter"},"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},"ticker":{"id":"a348f953-4eb6-486f-8c7d-8ebf714cdda8","type":"BasicTicker"}},"id":"3b211cd3-fdaa-4068-bb42-3e6600711d6b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7d8ff8d7-6136-4549-8edc-6204fa0877d7","type":"ColumnDataSource"},"glyph":{"id":"0b218a67-ab96-4734-b2e1-a5d545a0b46e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58e57d19-644a-4b27-944a-716a5fb35f19","type":"Circle"},"selection_glyph":null},"id":"f71d156b-f0ef-4941-8109-01f8157c2344","type":"GlyphRenderer"},{"attributes":{},"id":"49cfbd78-95b5-40f6-b34a-4b591d9e2c15","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"7c08ca27-b750-4b5a-9692-f6ecbd4de3d7","type":"BoxAnnotation"},"plot":{"id":"9d132815-7524-4812-b573-1fb4c8daa050","subtype":"Figure","type":"Plot"},"renderers":[{"id":"f71d156b-f0ef-4941-8109-01f8157c2344","type":"GlyphRenderer"}]},"id":"a57f81c5-853a-4686-b523-d24e53556868","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"015b0a5a-73f2-411c-813d-59f16da63cb8","type":"DataRange1d"}],"root_ids":["9d132815-7524-4812-b573-1fb4c8daa050"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"abfa53b9-6a5c-49e9-80a8-53be55108f18","elementid":"f6e6f300-ccc8-4600-a63b-4fcc8d2f8a60","modelid":"9d132815-7524-4812-b573-1fb4c8daa050"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
