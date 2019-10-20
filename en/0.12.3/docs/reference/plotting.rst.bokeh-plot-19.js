document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("91e80326-2839-4247-94ff-688abe950b2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91e80326-2839-4247-94ff-688abe950b2c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"efa14c09-177a-4778-86e9-bf57377ce298":{"roots":{"references":[{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"897d3160-29cf-4071-b07d-2c4ced52dc44","type":"PanTool"},{"attributes":{"formatter":{"id":"742b7ea3-eac5-49f9-8bdf-85ed4b704833","type":"BasicTickFormatter"},"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"},"ticker":{"id":"5947f9ea-3967-4055-8fc6-b07300a39d3b","type":"BasicTicker"}},"id":"68c54ee8-a34e-4a8d-8f6c-3b6f48d3f076","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c4f52acd-0650-46c4-8f29-e13a9098180f","type":"Segment"},{"attributes":{"data_source":{"id":"a319bdf3-7311-4c5e-b036-187a24a4143c","type":"ColumnDataSource"},"glyph":{"id":"d5e71513-80a4-4447-81f1-d2d162445d48","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"c4f52acd-0650-46c4-8f29-e13a9098180f","type":"Segment"},"selection_glyph":null},"id":"e90c3a86-3dae-403f-bf88-23ae2b1383a8","type":"GlyphRenderer"},{"attributes":{},"id":"3db3a8aa-4344-4e41-830b-0e07559b7747","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"61758d98-aa3b-4d80-a8e7-7bea3a16bbcc","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"340f0212-9f18-4e97-a67d-d8a334342043","type":"BasicTickFormatter"},"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"},"ticker":{"id":"bfc37fc3-dd67-41e6-9dc3-6469bc6a8dc9","type":"BasicTicker"}},"id":"bf6e861d-e075-41de-9c4f-9bb44515787d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"},"ticker":{"id":"bfc37fc3-dd67-41e6-9dc3-6469bc6a8dc9","type":"BasicTicker"}},"id":"96379866-a137-46e5-918a-dccfe5477c1e","type":"Grid"},{"attributes":{},"id":"5947f9ea-3967-4055-8fc6-b07300a39d3b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4c87f4ac-c31d-4ea0-b08e-4a87879661f3","type":"DataRange1d"},{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"},"ticker":{"id":"5947f9ea-3967-4055-8fc6-b07300a39d3b","type":"BasicTicker"}},"id":"e883fdd9-d5af-48c8-ae23-590a11b37bdf","type":"Grid"},{"attributes":{},"id":"742b7ea3-eac5-49f9-8bdf-85ed4b704833","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"977626f9-14c1-4d9f-9f3b-8b72c410cd4d","type":"DataRange1d"},{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"9a3a04c1-fe51-488d-87ea-84429bcea0ba","type":"ResetTool"},{"attributes":{"overlay":{"id":"61758d98-aa3b-4d80-a8e7-7bea3a16bbcc","type":"BoxAnnotation"},"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"0e0bdf90-5323-46af-b8e0-641ca9917a05","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"15407b76-59c7-4da7-8b8e-c36a7c4df393","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"0500e7d8-0e80-4e12-b1fb-beec404ea120","type":"Title"},{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"9e0240b5-cf33-4e06-9b90-ef4b2ec6c839","type":"HelpTool"},{"attributes":{},"id":"340f0212-9f18-4e97-a67d-d8a334342043","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"a319bdf3-7311-4c5e-b036-187a24a4143c","type":"ColumnDataSource"},{"attributes":{},"id":"bfc37fc3-dd67-41e6-9dc3-6469bc6a8dc9","type":"BasicTicker"},{"attributes":{"plot":{"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}},"id":"6992589f-5a23-42cf-8211-feae71209a43","type":"SaveTool"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d5e71513-80a4-4447-81f1-d2d162445d48","type":"Segment"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"897d3160-29cf-4071-b07d-2c4ced52dc44","type":"PanTool"},{"id":"15407b76-59c7-4da7-8b8e-c36a7c4df393","type":"WheelZoomTool"},{"id":"0e0bdf90-5323-46af-b8e0-641ca9917a05","type":"BoxZoomTool"},{"id":"6992589f-5a23-42cf-8211-feae71209a43","type":"SaveTool"},{"id":"9a3a04c1-fe51-488d-87ea-84429bcea0ba","type":"ResetTool"},{"id":"9e0240b5-cf33-4e06-9b90-ef4b2ec6c839","type":"HelpTool"}]},"id":"4525aa99-9794-4994-bf83-20182a75d0c1","type":"Toolbar"},{"attributes":{"below":[{"id":"68c54ee8-a34e-4a8d-8f6c-3b6f48d3f076","type":"LinearAxis"}],"left":[{"id":"bf6e861d-e075-41de-9c4f-9bb44515787d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"68c54ee8-a34e-4a8d-8f6c-3b6f48d3f076","type":"LinearAxis"},{"id":"e883fdd9-d5af-48c8-ae23-590a11b37bdf","type":"Grid"},{"id":"bf6e861d-e075-41de-9c4f-9bb44515787d","type":"LinearAxis"},{"id":"96379866-a137-46e5-918a-dccfe5477c1e","type":"Grid"},{"id":"61758d98-aa3b-4d80-a8e7-7bea3a16bbcc","type":"BoxAnnotation"},{"id":"e90c3a86-3dae-403f-bf88-23ae2b1383a8","type":"GlyphRenderer"}],"title":{"id":"0500e7d8-0e80-4e12-b1fb-beec404ea120","type":"Title"},"tool_events":{"id":"3db3a8aa-4344-4e41-830b-0e07559b7747","type":"ToolEvents"},"toolbar":{"id":"4525aa99-9794-4994-bf83-20182a75d0c1","type":"Toolbar"},"x_range":{"id":"4c87f4ac-c31d-4ea0-b08e-4a87879661f3","type":"DataRange1d"},"y_range":{"id":"977626f9-14c1-4d9f-9f3b-8b72c410cd4d","type":"DataRange1d"}},"id":"3b90fb82-9507-4554-a36b-1faab995a338","subtype":"Figure","type":"Plot"}],"root_ids":["3b90fb82-9507-4554-a36b-1faab995a338"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"efa14c09-177a-4778-86e9-bf57377ce298","elementid":"91e80326-2839-4247-94ff-688abe950b2c","modelid":"3b90fb82-9507-4554-a36b-1faab995a338"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});