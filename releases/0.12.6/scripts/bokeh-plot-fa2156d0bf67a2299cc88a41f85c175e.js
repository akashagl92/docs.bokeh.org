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
      };var element = document.getElementById("05bfe445-3f66-4fe8-8b6d-115f893b77ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '05bfe445-3f66-4fe8-8b6d-115f893b77ed' but no matching script tag was found. ")
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
                var docs_json = {"b4f36d63-c25a-486c-ae67-1fc30c723b3e":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"b388a8df-4d77-43e0-9458-2db2364e4882","type":"Title"},{"attributes":{},"id":"7beeb059-799a-4a09-8813-ae4e922dabb0","type":"BasicTickFormatter"},{"attributes":{},"id":"e3751cfc-7bde-421d-8bfb-11f46194d5ce","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56297bf0-f588-45e8-9316-03f62808dcdf","type":"BoxAnnotation"},{"attributes":{},"id":"3d8f3362-8645-4c41-9a82-6537e25eefd9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"cbe19e7d-748d-4c67-aa9c-7e209d6d01b5","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"a448c14d-097b-47de-b821-ddcc91338db7","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"66b63652-c4a5-4c52-961b-594876818f60","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"a1f01dd5-7dfc-42a9-bd11-862ab47bb532","type":"DataRange1d"},{"attributes":{"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"5b592ec9-0c74-4444-bb85-4da438451a82","type":"PanTool"},{"attributes":{"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"6477ccb3-7d0d-4d34-97f1-b0914ebf5d4e","type":"ResetTool"},{"attributes":{"formatter":{"id":"3d8f3362-8645-4c41-9a82-6537e25eefd9","type":"BasicTickFormatter"},"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"65cd9b50-c066-43ed-9072-8a546b6b2c58","type":"BasicTicker"}},"id":"62df4682-1d4e-4225-8430-7724e3cde611","type":"LinearAxis"},{"attributes":{"bounds":[2,4],"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3751cfc-7bde-421d-8bfb-11f46194d5ce","type":"BasicTicker"}},"id":"f96bf155-16a0-47a0-a834-615135b49ab8","type":"Grid"},{"attributes":{"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"d321ea28-171f-4003-abd7-3a12665231e4","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f911b467-4d58-43b6-a38e-a6d3b3fe7fd6","type":"Circle"},{"attributes":{},"id":"1890c78c-8a5a-4bed-9a40-9f054b042468","type":"LinearScale"},{"attributes":{"below":[{"id":"ef1d2371-63d0-4f53-ae01-3b50d4e02396","type":"LinearAxis"}],"left":[{"id":"62df4682-1d4e-4225-8430-7724e3cde611","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ef1d2371-63d0-4f53-ae01-3b50d4e02396","type":"LinearAxis"},{"id":"f96bf155-16a0-47a0-a834-615135b49ab8","type":"Grid"},{"id":"62df4682-1d4e-4225-8430-7724e3cde611","type":"LinearAxis"},{"id":"507d2272-d61f-47e1-a2d9-539b49c4a2e1","type":"Grid"},{"id":"56297bf0-f588-45e8-9316-03f62808dcdf","type":"BoxAnnotation"},{"id":"0844642d-0116-4035-8c95-b9e8a7d319c5","type":"GlyphRenderer"}],"title":{"id":"b388a8df-4d77-43e0-9458-2db2364e4882","type":"Title"},"tool_events":{"id":"1c1e8b9d-b0d2-46f3-969f-63ec41f3ac58","type":"ToolEvents"},"toolbar":{"id":"a1740d59-3012-43b2-875f-c50c302b823e","type":"Toolbar"},"x_range":{"id":"a448c14d-097b-47de-b821-ddcc91338db7","type":"DataRange1d"},"x_scale":{"id":"732f31e2-4feb-4c3d-b097-6c42657a78cb","type":"LinearScale"},"y_range":{"id":"a1f01dd5-7dfc-42a9-bd11-862ab47bb532","type":"DataRange1d"},"y_scale":{"id":"1890c78c-8a5a-4bed-9a40-9f054b042468","type":"LinearScale"}},"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"66b63652-c4a5-4c52-961b-594876818f60","type":"ColumnDataSource"},"glyph":{"id":"8335a19e-cbae-42bf-9b64-f9b0fce920d3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f911b467-4d58-43b6-a38e-a6d3b3fe7fd6","type":"Circle"},"selection_glyph":null},"id":"0844642d-0116-4035-8c95-b9e8a7d319c5","type":"GlyphRenderer"},{"attributes":{},"id":"732f31e2-4feb-4c3d-b097-6c42657a78cb","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8335a19e-cbae-42bf-9b64-f9b0fce920d3","type":"Circle"},{"attributes":{"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"ac60e373-ea54-443d-96ff-4d5097f39080","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5b592ec9-0c74-4444-bb85-4da438451a82","type":"PanTool"},{"id":"cbe19e7d-748d-4c67-aa9c-7e209d6d01b5","type":"WheelZoomTool"},{"id":"97554b79-6d79-42c1-99c7-08e4d565c500","type":"BoxZoomTool"},{"id":"d321ea28-171f-4003-abd7-3a12665231e4","type":"SaveTool"},{"id":"6477ccb3-7d0d-4d34-97f1-b0914ebf5d4e","type":"ResetTool"},{"id":"ac60e373-ea54-443d-96ff-4d5097f39080","type":"HelpTool"}]},"id":"a1740d59-3012-43b2-875f-c50c302b823e","type":"Toolbar"},{"attributes":{},"id":"65cd9b50-c066-43ed-9072-8a546b6b2c58","type":"BasicTicker"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"65cd9b50-c066-43ed-9072-8a546b6b2c58","type":"BasicTicker"}},"id":"507d2272-d61f-47e1-a2d9-539b49c4a2e1","type":"Grid"},{"attributes":{"formatter":{"id":"7beeb059-799a-4a09-8813-ae4e922dabb0","type":"BasicTickFormatter"},"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3751cfc-7bde-421d-8bfb-11f46194d5ce","type":"BasicTicker"}},"id":"ef1d2371-63d0-4f53-ae01-3b50d4e02396","type":"LinearAxis"},{"attributes":{"overlay":{"id":"56297bf0-f588-45e8-9316-03f62808dcdf","type":"BoxAnnotation"},"plot":{"id":"eaae1f59-aa51-491d-9239-de73310ef0b8","subtype":"Figure","type":"Plot"}},"id":"97554b79-6d79-42c1-99c7-08e4d565c500","type":"BoxZoomTool"},{"attributes":{},"id":"1c1e8b9d-b0d2-46f3-969f-63ec41f3ac58","type":"ToolEvents"}],"root_ids":["eaae1f59-aa51-491d-9239-de73310ef0b8"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"b4f36d63-c25a-486c-ae67-1fc30c723b3e","elementid":"05bfe445-3f66-4fe8-8b6d-115f893b77ed","modelid":"eaae1f59-aa51-491d-9239-de73310ef0b8"}];
                
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
