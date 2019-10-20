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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("16ad717e-20ea-4db8-9dae-3e1ddcbe4109");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '16ad717e-20ea-4db8-9dae-3e1ddcbe4109' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"a64ff248-5362-47f7-bb1d-f68855dd5d69":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["lon","lat"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"fe9d1e99-eb41-4bba-a15a-e3edf6751af5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"2d6d2ee3-d8a6-41d4-954e-6f2df0e681f3","type":"Circle"},{"attributes":{"lat":30.29,"lng":-97.73,"zoom":11},"id":"a6997e9a-c0a7-4df0-97da-d054f5e0ba83","type":"GMapOptions"},{"attributes":{},"id":"a8aecd3e-bf89-4b4b-b40d-0c0673d17f01","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"919a4199-c0a6-456c-bf97-e2908f2c8604","type":"BoxAnnotation"},"plot":{"id":"3f32d30e-c402-4149-b8d5-ae6b098a7bf5","type":"GMapPlot"}},"id":"612ca97f-b51e-4f6b-acc0-ed2806ae8371","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7f27775-786f-4d77-bbc2-938d46a2de9d","type":"PanTool"},{"id":"82ade675-a9bb-4f30-8de9-0e2b496c097c","type":"WheelZoomTool"},{"id":"612ca97f-b51e-4f6b-acc0-ed2806ae8371","type":"BoxSelectTool"}]},"id":"31723ce5-67f1-4306-8906-aed14dd626c5","type":"Toolbar"},{"attributes":{"plot":{"id":"3f32d30e-c402-4149-b8d5-ae6b098a7bf5","type":"GMapPlot"}},"id":"82ade675-a9bb-4f30-8de9-0e2b496c097c","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"7d53ad7c-d853-44d8-966f-7d6b4ee27d39","type":"DataRange1d"},{"attributes":{},"id":"848b8cb8-cdb6-46b9-bc10-ad98f815a256","type":"LinearScale"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"id":"a6997e9a-c0a7-4df0-97da-d054f5e0ba83","type":"GMapOptions"},"renderers":[{"id":"02ad5831-6cb3-4c4d-a8a6-4acb8b14613a","type":"GlyphRenderer"},{"id":"919a4199-c0a6-456c-bf97-e2908f2c8604","type":"BoxAnnotation"}],"title":{"id":"68f12991-8689-48cb-9fa4-e3b413f2825b","type":"Title"},"tool_events":{"id":"5f301dea-711d-4db6-b794-fc5c566a8604","type":"ToolEvents"},"toolbar":{"id":"31723ce5-67f1-4306-8906-aed14dd626c5","type":"Toolbar"},"x_range":{"id":"d4251973-f6b6-4307-866f-ba3f127332f3","type":"DataRange1d"},"x_scale":{"id":"a8aecd3e-bf89-4b4b-b40d-0c0673d17f01","type":"LinearScale"},"y_range":{"id":"7d53ad7c-d853-44d8-966f-7d6b4ee27d39","type":"DataRange1d"},"y_scale":{"id":"848b8cb8-cdb6-46b9-bc10-ad98f815a256","type":"LinearScale"}},"id":"3f32d30e-c402-4149-b8d5-ae6b098a7bf5","type":"GMapPlot"},{"attributes":{"plot":{"id":"3f32d30e-c402-4149-b8d5-ae6b098a7bf5","type":"GMapPlot"}},"id":"b7f27775-786f-4d77-bbc2-938d46a2de9d","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"919a4199-c0a6-456c-bf97-e2908f2c8604","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Austin"},"id":"68f12991-8689-48cb-9fa4-e3b413f2825b","type":"Title"},{"attributes":{},"id":"5f301dea-711d-4db6-b794-fc5c566a8604","type":"ToolEvents"},{"attributes":{"callback":null},"id":"d4251973-f6b6-4307-866f-ba3f127332f3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fe9d1e99-eb41-4bba-a15a-e3edf6751af5","type":"ColumnDataSource"},"glyph":{"id":"2d6d2ee3-d8a6-41d4-954e-6f2df0e681f3","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"02ad5831-6cb3-4c4d-a8a6-4acb8b14613a","type":"GlyphRenderer"}],"root_ids":["3f32d30e-c402-4149-b8d5-ae6b098a7bf5"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a64ff248-5362-47f7-bb1d-f68855dd5d69","elementid":"16ad717e-20ea-4db8-9dae-3e1ddcbe4109","modelid":"3f32d30e-c402-4149-b8d5-ae6b098a7bf5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
