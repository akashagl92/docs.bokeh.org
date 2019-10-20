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
      };var element = document.getElementById("e42bd4e9-d3d2-44cb-8bfd-da6a30410f79");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e42bd4e9-d3d2-44cb-8bfd-da6a30410f79' but no matching script tag was found. ")
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
                var docs_json = {"bb24d929-616e-4c51-b247-dae2b14b7ea0":{"roots":{"references":[{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"669e5947-ed26-4445-9c5f-e20e20832d1f","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58313065-6a9d-4c8b-9cf9-ce5b312cb269","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc88712d-5c58-4c42-9ef2-be3f2d0fb79a","type":"BasicTicker"}},"id":"cdaf1c4e-b06b-4f9f-a1c1-71664fb931b7","type":"Grid"},{"attributes":{"data_source":{"id":"041d0a0e-7810-4023-b2ba-f21bb79d60e6","type":"ColumnDataSource"},"glyph":{"id":"a7b679c5-32aa-486e-98d3-7289ff8cbc72","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6b3b8674-77a4-40ea-9499-ddf9ef24567d","type":"Circle"},"selection_glyph":null},"id":"e646cfc8-90cd-479b-becc-3bd717597db1","type":"GlyphRenderer"},{"attributes":{},"id":"d088baf5-42f7-4809-95f6-3300c4de90d1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"316a7265-c7b4-4280-9b6d-02d66b169bd2","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7b679c5-32aa-486e-98d3-7289ff8cbc72","type":"Circle"},{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f2f470-4a71-4a4e-881a-ad73663f4e90","type":"BasicTicker"}},"id":"da8ff6ed-7d95-4008-a996-34b67c2f8819","type":"Grid"},{"attributes":{"bounds":[2,4],"formatter":{"id":"25d087db-4f84-4ac7-a9f3-34296c28c023","type":"BasicTickFormatter"},"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f2f470-4a71-4a4e-881a-ad73663f4e90","type":"BasicTicker"}},"id":"5beddfd5-42b2-4c57-a52b-dcfa38041fc8","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"bb290035-f6a7-4e00-bde6-f8754ed66a65","type":"Title"},{"attributes":{"callback":null},"id":"d65ab58b-0e8e-4602-b6ac-0cafd1788aaf","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"041d0a0e-7810-4023-b2ba-f21bb79d60e6","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1e5305ec-3e12-4558-af6e-09ccfa925801","type":"DataRange1d"},{"attributes":{},"id":"25d087db-4f84-4ac7-a9f3-34296c28c023","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d088baf5-42f7-4809-95f6-3300c4de90d1","type":"BasicTickFormatter"},"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc88712d-5c58-4c42-9ef2-be3f2d0fb79a","type":"BasicTicker"}},"id":"84020b30-4b24-4dd0-a274-67c9d977b935","type":"LinearAxis"},{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"ae48f200-1d7d-485b-8d5d-6b88cd7febe2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"a6f5cc4a-a998-4c99-951c-e98302ed872f","type":"PanTool"},{"attributes":{"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"fa82725e-024b-4a82-a207-c091cf385b91","type":"ResetTool"},{"attributes":{},"id":"052126dc-af4c-4b29-9efe-5931a02fa1aa","type":"ToolEvents"},{"attributes":{},"id":"39f2f470-4a71-4a4e-881a-ad73663f4e90","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a6f5cc4a-a998-4c99-951c-e98302ed872f","type":"PanTool"},{"id":"ae48f200-1d7d-485b-8d5d-6b88cd7febe2","type":"WheelZoomTool"},{"id":"1af51783-1866-4517-bede-1a0005c44ea5","type":"BoxZoomTool"},{"id":"669e5947-ed26-4445-9c5f-e20e20832d1f","type":"SaveTool"},{"id":"fa82725e-024b-4a82-a207-c091cf385b91","type":"ResetTool"},{"id":"316a7265-c7b4-4280-9b6d-02d66b169bd2","type":"HelpTool"}]},"id":"d09c7118-5832-43e7-87c7-d0b892dc38c1","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b3b8674-77a4-40ea-9499-ddf9ef24567d","type":"Circle"},{"attributes":{},"id":"fc88712d-5c58-4c42-9ef2-be3f2d0fb79a","type":"BasicTicker"},{"attributes":{"below":[{"id":"5beddfd5-42b2-4c57-a52b-dcfa38041fc8","type":"LinearAxis"}],"left":[{"id":"84020b30-4b24-4dd0-a274-67c9d977b935","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5beddfd5-42b2-4c57-a52b-dcfa38041fc8","type":"LinearAxis"},{"id":"da8ff6ed-7d95-4008-a996-34b67c2f8819","type":"Grid"},{"id":"84020b30-4b24-4dd0-a274-67c9d977b935","type":"LinearAxis"},{"id":"cdaf1c4e-b06b-4f9f-a1c1-71664fb931b7","type":"Grid"},{"id":"58313065-6a9d-4c8b-9cf9-ce5b312cb269","type":"BoxAnnotation"},{"id":"e646cfc8-90cd-479b-becc-3bd717597db1","type":"GlyphRenderer"}],"title":{"id":"bb290035-f6a7-4e00-bde6-f8754ed66a65","type":"Title"},"tool_events":{"id":"052126dc-af4c-4b29-9efe-5931a02fa1aa","type":"ToolEvents"},"toolbar":{"id":"d09c7118-5832-43e7-87c7-d0b892dc38c1","type":"Toolbar"},"x_range":{"id":"1e5305ec-3e12-4558-af6e-09ccfa925801","type":"DataRange1d"},"y_range":{"id":"d65ab58b-0e8e-4602-b6ac-0cafd1788aaf","type":"DataRange1d"}},"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"58313065-6a9d-4c8b-9cf9-ce5b312cb269","type":"BoxAnnotation"},"plot":{"id":"0f51a593-87a6-4d89-bcbb-99c3a8c27556","subtype":"Figure","type":"Plot"}},"id":"1af51783-1866-4517-bede-1a0005c44ea5","type":"BoxZoomTool"}],"root_ids":["0f51a593-87a6-4d89-bcbb-99c3a8c27556"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bb24d929-616e-4c51-b247-dae2b14b7ea0","elementid":"e42bd4e9-d3d2-44cb-8bfd-da6a30410f79","modelid":"0f51a593-87a6-4d89-bcbb-99c3a8c27556"}];
                
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
