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
      };var element = document.getElementById("115152bf-1ee0-4d4b-aa39-5ef398a83744");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '115152bf-1ee0-4d4b-aa39-5ef398a83744' but no matching script tag was found. ")
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
                var docs_json = {"23bb31ed-e3b3-4a89-aeba-57d36f57a8bb":{"roots":{"references":[{"attributes":{},"id":"da7addac-91b2-4836-84f8-f77d22e4f486","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5687398-2358-4928-8e5d-13af072ff9e5","type":"DiamondCross"},{"attributes":{"callback":null},"id":"f40d261f-3559-47fa-bf06-84447a13b0b4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"da7addac-91b2-4836-84f8-f77d22e4f486","type":"BasicTickFormatter"},"plot":{"id":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf","type":"Plot"},"ticker":{"id":"d662b6df-c8c9-4291-b032-eb5a2928f020","type":"BasicTicker"}},"id":"a10cb7dd-0ff7-49a7-8f73-9ca75af0e1ae","type":"LinearAxis"},{"attributes":{"below":[{"id":"a9deb1b8-f4b3-4862-ac2e-b3de31d2674e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a10cb7dd-0ff7-49a7-8f73-9ca75af0e1ae","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dd6672be-725f-411d-a60f-65341f1ca20b","type":"GlyphRenderer"},{"id":"a9deb1b8-f4b3-4862-ac2e-b3de31d2674e","type":"LinearAxis"},{"id":"a10cb7dd-0ff7-49a7-8f73-9ca75af0e1ae","type":"LinearAxis"},{"id":"1c67348f-f80c-4e7b-b3a3-9ab32fdb2b78","type":"Grid"},{"id":"b42ce1c5-838d-4da0-9748-c817450a2ceb","type":"Grid"}],"title":null,"tool_events":{"id":"048cea9b-6f47-48bf-bb60-345f816aa8ad","type":"ToolEvents"},"toolbar":{"id":"108a8648-92f4-4d90-af51-8311a1e31d7c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f40d261f-3559-47fa-bf06-84447a13b0b4","type":"DataRange1d"},"y_range":{"id":"9d962756-491f-4b7f-be8c-06267795df1e","type":"DataRange1d"}},"id":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf","type":"Plot"},{"attributes":{"callback":null},"id":"9d962756-491f-4b7f-be8c-06267795df1e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"03fc6f28-6e9b-4ba3-84c2-450a9c36c7fb","type":"ColumnDataSource"},"glyph":{"id":"d5687398-2358-4928-8e5d-13af072ff9e5","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null},"id":"dd6672be-725f-411d-a60f-65341f1ca20b","type":"GlyphRenderer"},{"attributes":{},"id":"5cd72e3c-0fb9-4b85-b6a0-643e35587611","type":"BasicTicker"},{"attributes":{},"id":"997ae1cb-451a-447d-963d-65c252742961","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf","type":"Plot"},"ticker":{"id":"d662b6df-c8c9-4291-b032-eb5a2928f020","type":"BasicTicker"}},"id":"b42ce1c5-838d-4da0-9748-c817450a2ceb","type":"Grid"},{"attributes":{"plot":{"id":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf","type":"Plot"},"ticker":{"id":"5cd72e3c-0fb9-4b85-b6a0-643e35587611","type":"BasicTicker"}},"id":"1c67348f-f80c-4e7b-b3a3-9ab32fdb2b78","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"108a8648-92f4-4d90-af51-8311a1e31d7c","type":"Toolbar"},{"attributes":{"formatter":{"id":"997ae1cb-451a-447d-963d-65c252742961","type":"BasicTickFormatter"},"plot":{"id":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf","type":"Plot"},"ticker":{"id":"5cd72e3c-0fb9-4b85-b6a0-643e35587611","type":"BasicTicker"}},"id":"a9deb1b8-f4b3-4862-ac2e-b3de31d2674e","type":"LinearAxis"},{"attributes":{},"id":"d662b6df-c8c9-4291-b032-eb5a2928f020","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"03fc6f28-6e9b-4ba3-84c2-450a9c36c7fb","type":"ColumnDataSource"},{"attributes":{},"id":"048cea9b-6f47-48bf-bb60-345f816aa8ad","type":"ToolEvents"}],"root_ids":["c1ac2db0-a77c-48e0-b973-7fb74232c8bf"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"23bb31ed-e3b3-4a89-aeba-57d36f57a8bb","elementid":"115152bf-1ee0-4d4b-aa39-5ef398a83744","modelid":"c1ac2db0-a77c-48e0-b973-7fb74232c8bf"}];
                
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
