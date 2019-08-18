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
      };var element = document.getElementById("56c34ddb-2ab4-46e5-a5ce-231e10b4b298");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '56c34ddb-2ab4-46e5-a5ce-231e10b4b298' but no matching script tag was found. ")
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
                var docs_json = {"8d8c87c3-adeb-436a-a949-68e6fbc3ed30":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8e2a3d00-ed9b-46ec-b2ad-a531f6431741","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"9b97d6c2-6b0b-434b-885a-a9002bb9f433","type":"ColumnDataSource"},"glyph":{"id":"e085572a-31db-4053-a442-06f0a40b21aa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69daf6ec-bc73-4ea6-9ddc-3f06d55b1609","type":"Circle"},"selection_glyph":null},"id":"7e4b3acd-0e52-4583-a824-61f876178831","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"d950f222-ac77-4db9-91b4-8bd4d34d8c44","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ba49d97-16f9-4bd9-861e-ca33e1459564","type":"BasicTicker"}},"id":"75c935be-689b-4b24-bbd5-be801b855574","type":"Grid"},{"attributes":{},"id":"728afdb4-931d-4601-8da8-ae20a90f1781","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"69daf6ec-bc73-4ea6-9ddc-3f06d55b1609","type":"Circle"},{"attributes":{"format":"%4.1e"},"id":"db6752b3-7339-4b58-85ca-126189161889","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"7052c0ea-a92e-45b3-aa09-1b7150a6f668","type":"ResetTool"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"d6540eac-da6b-4d89-9969-420d38ee2b2f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"43bd1b79-a861-4bc0-8239-308de801ece8","type":"DataRange1d"},{"attributes":{"format":"%5.3f mu"},"id":"0406b307-7796-4a8d-b1a4-7288ca3fa6a5","type":"PrintfTickFormatter"},{"attributes":{"formatter":{"id":"0406b307-7796-4a8d-b1a4-7288ca3fa6a5","type":"PrintfTickFormatter"},"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ba49d97-16f9-4bd9-861e-ca33e1459564","type":"BasicTicker"}},"id":"0052738d-376f-494c-9aa4-fab182f4f161","type":"LinearAxis"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"5c3e9a2f-6a49-4055-8ab9-72bed5b6d17d","type":"HelpTool"},{"attributes":{},"id":"8ba49d97-16f9-4bd9-861e-ca33e1459564","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8e2a3d00-ed9b-46ec-b2ad-a531f6431741","type":"BoxAnnotation"},"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"8d8dbcf6-9d13-4a17-afef-0faf0375a621","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"09a7d02b-a027-4d62-a1d5-54e86bbbe2ae","type":"Title"},{"attributes":{},"id":"0cf9fd39-7ab2-4db4-ae16-a328dcd6ca45","type":"BasicTicker"},{"attributes":{},"id":"937d8db8-f871-4d1d-99ee-d02a3f94e849","type":"LinearScale"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cf9fd39-7ab2-4db4-ae16-a328dcd6ca45","type":"BasicTicker"}},"id":"8116ecde-0496-4ae0-9133-f2a8adedde0a","type":"Grid"},{"attributes":{},"id":"e4cb4425-3d19-4f71-a8a4-9669f18fe555","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9b97d6c2-6b0b-434b-885a-a9002bb9f433","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"db6752b3-7339-4b58-85ca-126189161889","type":"PrintfTickFormatter"},"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cf9fd39-7ab2-4db4-ae16-a328dcd6ca45","type":"BasicTicker"}},"id":"cdfc7f2b-4d89-4c75-bb10-07bc90bb4ba3","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e085572a-31db-4053-a442-06f0a40b21aa","type":"Circle"},{"attributes":{"below":[{"id":"cdfc7f2b-4d89-4c75-bb10-07bc90bb4ba3","type":"LinearAxis"}],"left":[{"id":"0052738d-376f-494c-9aa4-fab182f4f161","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cdfc7f2b-4d89-4c75-bb10-07bc90bb4ba3","type":"LinearAxis"},{"id":"8116ecde-0496-4ae0-9133-f2a8adedde0a","type":"Grid"},{"id":"0052738d-376f-494c-9aa4-fab182f4f161","type":"LinearAxis"},{"id":"75c935be-689b-4b24-bbd5-be801b855574","type":"Grid"},{"id":"8e2a3d00-ed9b-46ec-b2ad-a531f6431741","type":"BoxAnnotation"},{"id":"7e4b3acd-0e52-4583-a824-61f876178831","type":"GlyphRenderer"}],"title":{"id":"09a7d02b-a027-4d62-a1d5-54e86bbbe2ae","type":"Title"},"tool_events":{"id":"e4cb4425-3d19-4f71-a8a4-9669f18fe555","type":"ToolEvents"},"toolbar":{"id":"a0e17ec5-0dde-48db-8e89-db24278cf5ce","type":"Toolbar"},"x_range":{"id":"446086cf-c394-4fb5-bb76-3b246f5bf654","type":"DataRange1d"},"x_scale":{"id":"937d8db8-f871-4d1d-99ee-d02a3f94e849","type":"LinearScale"},"y_range":{"id":"43bd1b79-a861-4bc0-8239-308de801ece8","type":"DataRange1d"},"y_scale":{"id":"728afdb4-931d-4601-8da8-ae20a90f1781","type":"LinearScale"}},"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"446086cf-c394-4fb5-bb76-3b246f5bf654","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"af7b8b1f-be5a-499c-b527-4a9fd024db11","type":"PanTool"},{"id":"d6540eac-da6b-4d89-9969-420d38ee2b2f","type":"WheelZoomTool"},{"id":"8d8dbcf6-9d13-4a17-afef-0faf0375a621","type":"BoxZoomTool"},{"id":"d950f222-ac77-4db9-91b4-8bd4d34d8c44","type":"SaveTool"},{"id":"7052c0ea-a92e-45b3-aa09-1b7150a6f668","type":"ResetTool"},{"id":"5c3e9a2f-6a49-4055-8ab9-72bed5b6d17d","type":"HelpTool"}]},"id":"a0e17ec5-0dde-48db-8e89-db24278cf5ce","type":"Toolbar"},{"attributes":{"plot":{"id":"06ebe6ef-fb31-495f-a003-952d60ec85ee","subtype":"Figure","type":"Plot"}},"id":"af7b8b1f-be5a-499c-b527-4a9fd024db11","type":"PanTool"}],"root_ids":["06ebe6ef-fb31-495f-a003-952d60ec85ee"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"8d8c87c3-adeb-436a-a949-68e6fbc3ed30","elementid":"56c34ddb-2ab4-46e5-a5ce-231e10b4b298","modelid":"06ebe6ef-fb31-495f-a003-952d60ec85ee"}];
                
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
