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
      };var element = document.getElementById("b89219d4-f8c6-45e2-969b-37fc380c150c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b89219d4-f8c6-45e2-969b-37fc380c150c' but no matching script tag was found. ")
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
                var docs_json = {"7526bdcb-b03f-4afd-a84f-97f1f31270a5":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1b1b3d76-69dd-4762-ae2f-d3a749639da3","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c735bbef-1140-4d25-a494-1dfc5d48d80f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"12c65a61-4dad-44d3-92d8-15d2767e98ee","type":"DataRange1d"},{"attributes":{},"id":"b8607aa0-455b-46ad-a2a8-a888119dc29d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"14c5a20f-e3ed-4ad1-899e-b0e38b93f031","type":"DataRange1d"},{"attributes":{"plot":{"id":"5524c34e-2c79-428f-94ae-44aa9ea92e90","type":"Plot"},"ticker":{"id":"226093b1-eced-41b7-a96c-af14b8aa1c2a","type":"BasicTicker"}},"id":"92b4ada0-9dd6-4e22-b66b-bb800cb21aef","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"934f54b5-ce9d-4f21-a2db-88e5d4d8024a","type":"SquareCross"},{"attributes":{},"id":"f736657d-101a-4d0d-842c-603827740df3","type":"LinearScale"},{"attributes":{"formatter":{"id":"b8607aa0-455b-46ad-a2a8-a888119dc29d","type":"BasicTickFormatter"},"plot":{"id":"5524c34e-2c79-428f-94ae-44aa9ea92e90","type":"Plot"},"ticker":{"id":"209a5235-f7ac-4c0a-86a0-86f7a2e4157c","type":"BasicTicker"}},"id":"7e3feec6-9437-4b62-8905-f7bbe43e94da","type":"LinearAxis"},{"attributes":{},"id":"226093b1-eced-41b7-a96c-af14b8aa1c2a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c735bbef-1140-4d25-a494-1dfc5d48d80f","type":"ColumnDataSource"},"glyph":{"id":"934f54b5-ce9d-4f21-a2db-88e5d4d8024a","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null},"id":"47e26697-5fde-45ee-abed-4b88639ea61a","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a14f0673-6a5a-4c28-984f-e79ed901da66","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7e3feec6-9437-4b62-8905-f7bbe43e94da","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"47e26697-5fde-45ee-abed-4b88639ea61a","type":"GlyphRenderer"},{"id":"a14f0673-6a5a-4c28-984f-e79ed901da66","type":"LinearAxis"},{"id":"7e3feec6-9437-4b62-8905-f7bbe43e94da","type":"LinearAxis"},{"id":"92b4ada0-9dd6-4e22-b66b-bb800cb21aef","type":"Grid"},{"id":"f8ca6e3d-cd60-467d-b353-da62eea284f5","type":"Grid"}],"title":null,"tool_events":{"id":"bece559d-7514-48af-9516-a907e75f0663","type":"ToolEvents"},"toolbar":{"id":"1b1b3d76-69dd-4762-ae2f-d3a749639da3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"14c5a20f-e3ed-4ad1-899e-b0e38b93f031","type":"DataRange1d"},"x_scale":{"id":"f736657d-101a-4d0d-842c-603827740df3","type":"LinearScale"},"y_range":{"id":"12c65a61-4dad-44d3-92d8-15d2767e98ee","type":"DataRange1d"},"y_scale":{"id":"8071327e-4358-4dee-9f6f-8134d7a1866b","type":"LinearScale"}},"id":"5524c34e-2c79-428f-94ae-44aa9ea92e90","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"5524c34e-2c79-428f-94ae-44aa9ea92e90","type":"Plot"},"ticker":{"id":"209a5235-f7ac-4c0a-86a0-86f7a2e4157c","type":"BasicTicker"}},"id":"f8ca6e3d-cd60-467d-b353-da62eea284f5","type":"Grid"},{"attributes":{"formatter":{"id":"ecaaa43b-885a-4720-84e7-cc8d220261b5","type":"BasicTickFormatter"},"plot":{"id":"5524c34e-2c79-428f-94ae-44aa9ea92e90","type":"Plot"},"ticker":{"id":"226093b1-eced-41b7-a96c-af14b8aa1c2a","type":"BasicTicker"}},"id":"a14f0673-6a5a-4c28-984f-e79ed901da66","type":"LinearAxis"},{"attributes":{},"id":"ecaaa43b-885a-4720-84e7-cc8d220261b5","type":"BasicTickFormatter"},{"attributes":{},"id":"209a5235-f7ac-4c0a-86a0-86f7a2e4157c","type":"BasicTicker"},{"attributes":{},"id":"bece559d-7514-48af-9516-a907e75f0663","type":"ToolEvents"},{"attributes":{},"id":"8071327e-4358-4dee-9f6f-8134d7a1866b","type":"LinearScale"}],"root_ids":["5524c34e-2c79-428f-94ae-44aa9ea92e90"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7526bdcb-b03f-4afd-a84f-97f1f31270a5","elementid":"b89219d4-f8c6-45e2-969b-37fc380c150c","modelid":"5524c34e-2c79-428f-94ae-44aa9ea92e90"}];
                
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
