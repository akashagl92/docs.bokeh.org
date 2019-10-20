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
      };var element = document.getElementById("cb4843ca-bdbf-4e0d-9bec-e83303c7dd5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb4843ca-bdbf-4e0d-9bec-e83303c7dd5a' but no matching script tag was found. ")
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
                var docs_json = {"267f1869-b74f-4482-93c8-640118b82e1f":{"roots":{"references":[{"attributes":{"plot":{"id":"1575a6ba-241f-4156-901f-ede7429d6847","type":"GMapPlot"}},"id":"6b19637f-be9e-4292-8e7a-3ea06b8064b3","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"c2880652-d51a-4e1c-8dd2-5c5ad515ae6b","type":"BoxAnnotation"},"plot":{"id":"1575a6ba-241f-4156-901f-ede7429d6847","type":"GMapPlot"}},"id":"ae62f11f-bcfc-4671-8c5d-45bbd52050ac","type":"BoxSelectTool"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"lat":30.29,"lng":-97.73,"map_type":"roadmap","zoom":11},"renderers":[{"id":"e9c00022-1171-4291-8907-592461d45a33","type":"GlyphRenderer"},{"id":"c2880652-d51a-4e1c-8dd2-5c5ad515ae6b","type":"BoxAnnotation"}],"title":{"id":"bd68eacf-baec-4ec3-b676-0e8e138681b9","type":"Title"},"tool_events":{"id":"0ceb93f4-dfed-4e97-b8c7-27a4f22f8671","type":"ToolEvents"},"toolbar":{"id":"fb3cba54-eec5-4570-aa88-c0efb6fbc597","type":"Toolbar"},"x_range":{"id":"8e20a698-e8f0-4147-a05d-cf7f6e26d274","type":"DataRange1d"},"y_range":{"id":"1aed985a-5e78-42ee-89f5-14c7104592d0","type":"DataRange1d"}},"id":"1575a6ba-241f-4156-901f-ede7429d6847","type":"GMapPlot"},{"attributes":{"data_source":{"id":"ba3ec62a-a484-4497-858c-be4269aaff8a","type":"ColumnDataSource"},"glyph":{"id":"809adee2-4276-4f92-a142-ea083631907a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e9c00022-1171-4291-8907-592461d45a33","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["lon","lat"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"ba3ec62a-a484-4497-858c-be4269aaff8a","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eabf94b8-e227-4e34-968d-f380c4595b98","type":"PanTool"},{"id":"6b19637f-be9e-4292-8e7a-3ea06b8064b3","type":"WheelZoomTool"},{"id":"ae62f11f-bcfc-4671-8c5d-45bbd52050ac","type":"BoxSelectTool"}]},"id":"fb3cba54-eec5-4570-aa88-c0efb6fbc597","type":"Toolbar"},{"attributes":{},"id":"0ceb93f4-dfed-4e97-b8c7-27a4f22f8671","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"809adee2-4276-4f92-a142-ea083631907a","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2880652-d51a-4e1c-8dd2-5c5ad515ae6b","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"1aed985a-5e78-42ee-89f5-14c7104592d0","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Austin"},"id":"bd68eacf-baec-4ec3-b676-0e8e138681b9","type":"Title"},{"attributes":{"callback":null},"id":"8e20a698-e8f0-4147-a05d-cf7f6e26d274","type":"DataRange1d"},{"attributes":{"plot":{"id":"1575a6ba-241f-4156-901f-ede7429d6847","type":"GMapPlot"}},"id":"eabf94b8-e227-4e34-968d-f380c4595b98","type":"PanTool"}],"root_ids":["1575a6ba-241f-4156-901f-ede7429d6847"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"267f1869-b74f-4482-93c8-640118b82e1f","elementid":"cb4843ca-bdbf-4e0d-9bec-e83303c7dd5a","modelid":"1575a6ba-241f-4156-901f-ede7429d6847"}];
                
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
