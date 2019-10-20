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
      };var element = document.getElementById("6e3b091f-e24d-4950-a2ea-dc32d0214d1a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e3b091f-e24d-4950-a2ea-dc32d0214d1a' but no matching script tag was found. ")
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
                var docs_json = {"738c7a45-c367-40d5-8aa0-72c72a965fb1":{"roots":{"references":[{"attributes":{"below":[{"id":"e710f2dc-b99b-460a-96e8-552d75b4b107","type":"LinearAxis"}],"left":[{"id":"173dec63-416c-4b1a-ae9d-1f95a7898da9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e710f2dc-b99b-460a-96e8-552d75b4b107","type":"LinearAxis"},{"id":"2d8e62d1-230f-41e1-9632-9bc2ff8800de","type":"Grid"},{"id":"173dec63-416c-4b1a-ae9d-1f95a7898da9","type":"LinearAxis"},{"id":"b3b513b9-f0a7-4048-8d51-eb6e91c3b3a1","type":"Grid"},{"id":"a7200002-2470-40b1-a6a3-7bbeb8ed8b72","type":"BoxAnnotation"},{"id":"ddcf25e7-1ac0-4137-9c75-1d4b5b96e3f4","type":"GlyphRenderer"}],"title":{"id":"48a5f87e-4641-4261-a887-202e38fbd18c","type":"Title"},"tool_events":{"id":"3575930e-c4da-4b33-a13f-dad9922b2c5f","type":"ToolEvents"},"toolbar":{"id":"ad928b11-c818-4e8b-9920-6c587c6c8a62","type":"Toolbar"},"x_range":{"id":"91826815-3af7-4e1d-8ced-67959cc1ec08","type":"DataRange1d"},"y_range":{"id":"ac540c5c-96c6-417c-bc05-da05e14f40fe","type":"DataRange1d"}},"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b86b6469-8595-4e8a-834a-7c21ac7f1425","type":"BasicTicker"}},"id":"b3b513b9-f0a7-4048-8d51-eb6e91c3b3a1","type":"Grid"},{"attributes":{},"id":"3575930e-c4da-4b33-a13f-dad9922b2c5f","type":"ToolEvents"},{"attributes":{"overlay":{"id":"a7200002-2470-40b1-a6a3-7bbeb8ed8b72","type":"BoxAnnotation"},"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"c56e3c1c-dbb2-4406-ab99-cba0385d8bf6","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5faf6cf1-a4e6-47bb-a526-2e03868158c4","type":"PanTool"},{"id":"28ba8ce1-da3d-44af-9c3d-aa7e6652c450","type":"WheelZoomTool"},{"id":"c56e3c1c-dbb2-4406-ab99-cba0385d8bf6","type":"BoxZoomTool"},{"id":"09d07151-7598-4b12-a89f-d3d6e4bbd21f","type":"SaveTool"},{"id":"bb1f1ea7-2f5a-4f08-8950-338e67b3aaab","type":"ResetTool"},{"id":"ea73610a-4bb8-4d2c-8e88-f41f06b8c9fe","type":"HelpTool"}]},"id":"ad928b11-c818-4e8b-9920-6c587c6c8a62","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"48a5f87e-4641-4261-a887-202e38fbd18c","type":"Title"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"bb1f1ea7-2f5a-4f08-8950-338e67b3aaab","type":"ResetTool"},{"attributes":{"data_source":{"id":"47d385c2-14b9-42a5-b99a-62ec41ffb054","type":"ColumnDataSource"},"glyph":{"id":"07207db0-2a6c-4ea4-8385-03d13a2a4e4c","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"34658536-e04e-42e8-beea-6a045fb163af","type":"SquareX"},"selection_glyph":null},"id":"ddcf25e7-1ac0-4137-9c75-1d4b5b96e3f4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"df18b988-8285-40fb-8f85-2305b702fba5","type":"BasicTicker"}},"id":"2d8e62d1-230f-41e1-9632-9bc2ff8800de","type":"Grid"},{"attributes":{"formatter":{"id":"7a9f0c26-6bcf-41be-ba81-b21ca4b446e4","type":"BasicTickFormatter"},"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"df18b988-8285-40fb-8f85-2305b702fba5","type":"BasicTicker"}},"id":"e710f2dc-b99b-460a-96e8-552d75b4b107","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"07207db0-2a6c-4ea4-8385-03d13a2a4e4c","type":"SquareX"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"47d385c2-14b9-42a5-b99a-62ec41ffb054","type":"ColumnDataSource"},{"attributes":{},"id":"df18b988-8285-40fb-8f85-2305b702fba5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"91826815-3af7-4e1d-8ced-67959cc1ec08","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a7200002-2470-40b1-a6a3-7bbeb8ed8b72","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"ea73610a-4bb8-4d2c-8e88-f41f06b8c9fe","type":"HelpTool"},{"attributes":{"formatter":{"id":"0fe8bbff-bafb-40de-9632-49a677525a63","type":"BasicTickFormatter"},"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b86b6469-8595-4e8a-834a-7c21ac7f1425","type":"BasicTicker"}},"id":"173dec63-416c-4b1a-ae9d-1f95a7898da9","type":"LinearAxis"},{"attributes":{},"id":"0fe8bbff-bafb-40de-9632-49a677525a63","type":"BasicTickFormatter"},{"attributes":{},"id":"b86b6469-8595-4e8a-834a-7c21ac7f1425","type":"BasicTicker"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"5faf6cf1-a4e6-47bb-a526-2e03868158c4","type":"PanTool"},{"attributes":{"callback":null},"id":"ac540c5c-96c6-417c-bc05-da05e14f40fe","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34658536-e04e-42e8-beea-6a045fb163af","type":"SquareX"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"09d07151-7598-4b12-a89f-d3d6e4bbd21f","type":"SaveTool"},{"attributes":{"plot":{"id":"02909a6a-c50b-446c-958b-9931085cb9bd","subtype":"Figure","type":"Plot"}},"id":"28ba8ce1-da3d-44af-9c3d-aa7e6652c450","type":"WheelZoomTool"},{"attributes":{},"id":"7a9f0c26-6bcf-41be-ba81-b21ca4b446e4","type":"BasicTickFormatter"}],"root_ids":["02909a6a-c50b-446c-958b-9931085cb9bd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"738c7a45-c367-40d5-8aa0-72c72a965fb1","elementid":"6e3b091f-e24d-4950-a2ea-dc32d0214d1a","modelid":"02909a6a-c50b-446c-958b-9931085cb9bd"}];
                
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
