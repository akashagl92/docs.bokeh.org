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
      };var element = document.getElementById("30f6d9fc-8b4d-4420-84c2-2f6f7f39ac23");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30f6d9fc-8b4d-4420-84c2-2f6f7f39ac23' but no matching script tag was found. ")
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
                var docs_json = {"691b3635-b329-4a61-8110-1df1bd9cf5b5":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4360ab3-8795-40c8-a7b6-a12452ea26cf","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67104e0b-8c4c-4072-b2a8-376b579370a4","type":"PanTool"},{"id":"bf861752-06e8-4d25-b506-91d354d45b70","type":"WheelZoomTool"},{"id":"37ceb8bd-8da4-4358-b383-6927f604dd5f","type":"BoxZoomTool"},{"id":"97f4d3be-b1b2-4dae-9811-c4f9d56df4f2","type":"SaveTool"},{"id":"46a03b4a-bb14-4f57-a2ef-19f99b9e898e","type":"ResetTool"},{"id":"2e2aa9e3-d020-4565-95df-38a9968de893","type":"HelpTool"}]},"id":"997b333c-b90d-478c-9132-1a71c612ddfb","type":"Toolbar"},{"attributes":{},"id":"10d6d072-9e8f-49b5-8cd7-1645204d465b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"43aad499-ad67-4144-9d71-1524fe2b6150","type":"ColumnDataSource"},{"attributes":{},"id":"5949d9fb-e217-490a-9bb4-4724f9d64bb2","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b611ace6-d046-442d-ab2b-962e709580c8","type":"Square"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"},"ticker":{"id":"5949d9fb-e217-490a-9bb4-4724f9d64bb2","type":"BasicTicker"}},"id":"a90fc7a8-349b-4181-9dd3-0d85f403ba80","type":"Grid"},{"attributes":{"overlay":{"id":"d4360ab3-8795-40c8-a7b6-a12452ea26cf","type":"BoxAnnotation"},"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"37ceb8bd-8da4-4358-b383-6927f604dd5f","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"b296416e-7214-4288-bb50-9da0413a6f21","type":"DataRange1d"},{"attributes":{},"id":"a7dc74e4-5725-47e1-bbdd-597b55e73ef9","type":"ToolEvents"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"bf861752-06e8-4d25-b506-91d354d45b70","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"2e2aa9e3-d020-4565-95df-38a9968de893","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"6bcb0ef3-6c88-4140-ab6c-813b78fd6bbc","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"},"ticker":{"id":"0404bcb0-bb41-4656-9b40-78fbe7dc0b26","type":"BasicTicker"}},"id":"4fd86bdf-024e-4dd9-8590-08de73e48fe4","type":"Grid"},{"attributes":{},"id":"d3ca679a-4d6e-4371-baac-cb8de5049129","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"23a113f6-2944-4b8b-8e17-dfc6bd155c6c","type":"Square"},{"attributes":{"formatter":{"id":"10d6d072-9e8f-49b5-8cd7-1645204d465b","type":"BasicTickFormatter"},"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"},"ticker":{"id":"0404bcb0-bb41-4656-9b40-78fbe7dc0b26","type":"BasicTicker"}},"id":"fe23b1ba-2a2a-41f3-8b33-001c54506f01","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9863ea38-b73e-422e-8f36-541e46fca3a8","type":"DataRange1d"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"46a03b4a-bb14-4f57-a2ef-19f99b9e898e","type":"ResetTool"},{"attributes":{"formatter":{"id":"d3ca679a-4d6e-4371-baac-cb8de5049129","type":"BasicTickFormatter"},"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"},"ticker":{"id":"5949d9fb-e217-490a-9bb4-4724f9d64bb2","type":"BasicTicker"}},"id":"e32da8bf-cde5-46dd-8dee-8c6b55b73701","type":"LinearAxis"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"67104e0b-8c4c-4072-b2a8-376b579370a4","type":"PanTool"},{"attributes":{},"id":"0404bcb0-bb41-4656-9b40-78fbe7dc0b26","type":"BasicTicker"},{"attributes":{"data_source":{"id":"43aad499-ad67-4144-9d71-1524fe2b6150","type":"ColumnDataSource"},"glyph":{"id":"b611ace6-d046-442d-ab2b-962e709580c8","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23a113f6-2944-4b8b-8e17-dfc6bd155c6c","type":"Square"},"selection_glyph":null},"id":"324475ad-9841-4022-8a3b-0c6b2830aaba","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}},"id":"97f4d3be-b1b2-4dae-9811-c4f9d56df4f2","type":"SaveTool"},{"attributes":{"below":[{"id":"e32da8bf-cde5-46dd-8dee-8c6b55b73701","type":"LinearAxis"}],"left":[{"id":"fe23b1ba-2a2a-41f3-8b33-001c54506f01","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e32da8bf-cde5-46dd-8dee-8c6b55b73701","type":"LinearAxis"},{"id":"a90fc7a8-349b-4181-9dd3-0d85f403ba80","type":"Grid"},{"id":"fe23b1ba-2a2a-41f3-8b33-001c54506f01","type":"LinearAxis"},{"id":"4fd86bdf-024e-4dd9-8590-08de73e48fe4","type":"Grid"},{"id":"d4360ab3-8795-40c8-a7b6-a12452ea26cf","type":"BoxAnnotation"},{"id":"324475ad-9841-4022-8a3b-0c6b2830aaba","type":"GlyphRenderer"}],"title":{"id":"6bcb0ef3-6c88-4140-ab6c-813b78fd6bbc","type":"Title"},"tool_events":{"id":"a7dc74e4-5725-47e1-bbdd-597b55e73ef9","type":"ToolEvents"},"toolbar":{"id":"997b333c-b90d-478c-9132-1a71c612ddfb","type":"Toolbar"},"x_range":{"id":"b296416e-7214-4288-bb50-9da0413a6f21","type":"DataRange1d"},"y_range":{"id":"9863ea38-b73e-422e-8f36-541e46fca3a8","type":"DataRange1d"}},"id":"08a2ff85-355a-48f2-9539-64c5fc800221","subtype":"Figure","type":"Plot"}],"root_ids":["08a2ff85-355a-48f2-9539-64c5fc800221"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"691b3635-b329-4a61-8110-1df1bd9cf5b5","elementid":"30f6d9fc-8b4d-4420-84c2-2f6f7f39ac23","modelid":"08a2ff85-355a-48f2-9539-64c5fc800221"}];
                
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
