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
      };var element = document.getElementById("b9332863-ca7f-45c6-a87c-952d3b10293c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9332863-ca7f-45c6-a87c-952d3b10293c' but no matching script tag was found. ")
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
                var docs_json = {"27e60154-2716-4cfa-a3c4-799728f6c4e0":{"roots":{"references":[{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"fb0d07fe-b58c-416a-8414-41ddd355ec69","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e399f0f-5251-4eb8-bae9-e4c6c6a1e9c6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"86bea3e5-ca84-476b-8f17-0885286f0bb8","type":"BasicTicker"}},"id":"3910b5d6-eee1-4c4d-a17b-110cb29a5358","type":"Grid"},{"attributes":{},"id":"46fb561a-9577-4daa-b634-a083e95f161d","type":"BasicTickFormatter"},{"attributes":{},"id":"86bea3e5-ca84-476b-8f17-0885286f0bb8","type":"BasicTicker"},{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"ccf4d121-0158-46ee-b3c1-ecc15b304059","type":"ResetTool"},{"attributes":{"data_source":{"id":"456a1cdc-e398-40f1-8381-2044ce12257b","type":"ColumnDataSource"},"glyph":{"id":"4392bf2b-a48e-431c-9d1c-229927db7ed5","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"685621fc-1968-40b5-b06f-c556f4d7b095","type":"Circle"},"selection_glyph":null},"id":"41792488-31b9-4fd3-a322-95dc27b839be","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d184c72-8b23-41dd-ab9f-d28948d65208","type":"PanTool"},{"id":"fb0d07fe-b58c-416a-8414-41ddd355ec69","type":"WheelZoomTool"},{"id":"9e7a778c-f79e-4201-98ed-d7d7356b73af","type":"BoxZoomTool"},{"id":"bcbbba52-227d-47b7-99ef-35637da83a8a","type":"SaveTool"},{"id":"ccf4d121-0158-46ee-b3c1-ecc15b304059","type":"ResetTool"},{"id":"f902e27d-c2f6-408b-aece-29c9d61e824c","type":"HelpTool"}]},"id":"78f4d4e0-29f4-44f5-b797-6af0f788e3c2","type":"Toolbar"},{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"bcbbba52-227d-47b7-99ef-35637da83a8a","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"685621fc-1968-40b5-b06f-c556f4d7b095","type":"Circle"},{"attributes":{"below":[{"id":"acf348d1-314c-4b61-8853-688c59666830","type":"LinearAxis"}],"left":[{"id":"b90707f5-3b73-432d-be54-c1b1a5579a02","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"acf348d1-314c-4b61-8853-688c59666830","type":"LinearAxis"},{"id":"3910b5d6-eee1-4c4d-a17b-110cb29a5358","type":"Grid"},{"id":"b90707f5-3b73-432d-be54-c1b1a5579a02","type":"LinearAxis"},{"id":"28737b4a-1bd8-4dc6-bcb0-a08a64483eaa","type":"Grid"},{"id":"1e399f0f-5251-4eb8-bae9-e4c6c6a1e9c6","type":"BoxAnnotation"},{"id":"41792488-31b9-4fd3-a322-95dc27b839be","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"44e351c6-22b0-4439-9637-e302369f18d4","type":"ToolEvents"},"toolbar":{"id":"78f4d4e0-29f4-44f5-b797-6af0f788e3c2","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"d228e999-8a64-4ef1-9300-0e8c3b530456","type":"DataRange1d"},"y_range":{"id":"c6d87a47-cf4a-45bc-829f-c46eb8e1fff3","type":"DataRange1d"}},"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"d228e999-8a64-4ef1-9300-0e8c3b530456","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"456a1cdc-e398-40f1-8381-2044ce12257b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"f902e27d-c2f6-408b-aece-29c9d61e824c","type":"HelpTool"},{"attributes":{},"id":"81821010-8c71-4e32-9b06-7ae2f2d79909","type":"BasicTicker"},{"attributes":{"formatter":{"id":"46fb561a-9577-4daa-b634-a083e95f161d","type":"BasicTickFormatter"},"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"81821010-8c71-4e32-9b06-7ae2f2d79909","type":"BasicTicker"}},"id":"b90707f5-3b73-432d-be54-c1b1a5579a02","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1e399f0f-5251-4eb8-bae9-e4c6c6a1e9c6","type":"BoxAnnotation"},"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"9e7a778c-f79e-4201-98ed-d7d7356b73af","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4392bf2b-a48e-431c-9d1c-229927db7ed5","type":"Circle"},{"attributes":{"formatter":{"id":"78bfabc9-56b5-4aa2-b72a-404295a4c0eb","type":"BasicTickFormatter"},"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"86bea3e5-ca84-476b-8f17-0885286f0bb8","type":"BasicTicker"}},"id":"acf348d1-314c-4b61-8853-688c59666830","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c6d87a47-cf4a-45bc-829f-c46eb8e1fff3","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"81821010-8c71-4e32-9b06-7ae2f2d79909","type":"BasicTicker"}},"id":"28737b4a-1bd8-4dc6-bcb0-a08a64483eaa","type":"Grid"},{"attributes":{"plot":{"id":"f118add5-b05f-4a84-ae07-d7c5182223ee","subtype":"Figure","type":"Plot"}},"id":"9d184c72-8b23-41dd-ab9f-d28948d65208","type":"PanTool"},{"attributes":{},"id":"78bfabc9-56b5-4aa2-b72a-404295a4c0eb","type":"BasicTickFormatter"},{"attributes":{},"id":"44e351c6-22b0-4439-9637-e302369f18d4","type":"ToolEvents"}],"root_ids":["f118add5-b05f-4a84-ae07-d7c5182223ee"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"27e60154-2716-4cfa-a3c4-799728f6c4e0","elementid":"b9332863-ca7f-45c6-a87c-952d3b10293c","modelid":"f118add5-b05f-4a84-ae07-d7c5182223ee"}];
                
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
