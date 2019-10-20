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
      };var element = document.getElementById("0c122bb0-4316-4e79-b774-3136f9c1ef2e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c122bb0-4316-4e79-b774-3136f9c1ef2e' but no matching script tag was found. ")
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
                var docs_json = {"1d93d329-b71a-45ee-b3c2-ae15fad9be13":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ad179c97-59d7-442e-b226-8243b2280779","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"28836a8c-6a88-4e75-90ce-2fdcddf3cf3e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ad179c97-59d7-442e-b226-8243b2280779","type":"ColumnDataSource"},"glyph":{"id":"b904ab45-017c-4d42-9e1e-689fe28c8f3d","type":"Square"},"hover_glyph":null,"muted_glyph":null},"id":"6a1c2af2-0c01-44e7-af87-ca97642d3e1b","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b904ab45-017c-4d42-9e1e-689fe28c8f3d","type":"Square"},{"attributes":{"formatter":{"id":"0b98144a-4eb0-496a-9916-201b45787ea2","type":"BasicTickFormatter"},"plot":{"id":"7ee6dda3-28bd-45fd-b849-9f3687bd1492","type":"Plot"},"ticker":{"id":"8ae5d7e2-5506-428c-be8d-7fe9f1132391","type":"BasicTicker"}},"id":"51fdb830-e84d-4a3c-a74b-20b95375638c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"851b06e8-892e-4718-8be2-f041cbfc9971","type":"BasicTickFormatter"},"plot":{"id":"7ee6dda3-28bd-45fd-b849-9f3687bd1492","type":"Plot"},"ticker":{"id":"6d221262-ed86-46d7-a735-804f5bcf69f4","type":"BasicTicker"}},"id":"62122d2a-3d41-4e45-9dee-0a329f7aeb1b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"45415dc6-1645-4bba-a7ed-e5095a3c8db9","type":"DataRange1d"},{"attributes":{},"id":"0b98144a-4eb0-496a-9916-201b45787ea2","type":"BasicTickFormatter"},{"attributes":{},"id":"851b06e8-892e-4718-8be2-f041cbfc9971","type":"BasicTickFormatter"},{"attributes":{},"id":"6d221262-ed86-46d7-a735-804f5bcf69f4","type":"BasicTicker"},{"attributes":{"below":[{"id":"51fdb830-e84d-4a3c-a74b-20b95375638c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"62122d2a-3d41-4e45-9dee-0a329f7aeb1b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6a1c2af2-0c01-44e7-af87-ca97642d3e1b","type":"GlyphRenderer"},{"id":"51fdb830-e84d-4a3c-a74b-20b95375638c","type":"LinearAxis"},{"id":"62122d2a-3d41-4e45-9dee-0a329f7aeb1b","type":"LinearAxis"},{"id":"acb75220-ab61-4aab-b0ad-ce5a30a7d8c6","type":"Grid"},{"id":"5a6daebf-abfb-4487-8475-2670bc91d01e","type":"Grid"}],"title":null,"tool_events":{"id":"53645430-6b0b-47ce-a4e8-4e7644d2b15b","type":"ToolEvents"},"toolbar":{"id":"a67d6853-e3b0-487d-b049-7dcab738f44e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"45415dc6-1645-4bba-a7ed-e5095a3c8db9","type":"DataRange1d"},"y_range":{"id":"28836a8c-6a88-4e75-90ce-2fdcddf3cf3e","type":"DataRange1d"}},"id":"7ee6dda3-28bd-45fd-b849-9f3687bd1492","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7ee6dda3-28bd-45fd-b849-9f3687bd1492","type":"Plot"},"ticker":{"id":"6d221262-ed86-46d7-a735-804f5bcf69f4","type":"BasicTicker"}},"id":"5a6daebf-abfb-4487-8475-2670bc91d01e","type":"Grid"},{"attributes":{},"id":"8ae5d7e2-5506-428c-be8d-7fe9f1132391","type":"BasicTicker"},{"attributes":{},"id":"53645430-6b0b-47ce-a4e8-4e7644d2b15b","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a67d6853-e3b0-487d-b049-7dcab738f44e","type":"Toolbar"},{"attributes":{"plot":{"id":"7ee6dda3-28bd-45fd-b849-9f3687bd1492","type":"Plot"},"ticker":{"id":"8ae5d7e2-5506-428c-be8d-7fe9f1132391","type":"BasicTicker"}},"id":"acb75220-ab61-4aab-b0ad-ce5a30a7d8c6","type":"Grid"}],"root_ids":["7ee6dda3-28bd-45fd-b849-9f3687bd1492"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1d93d329-b71a-45ee-b3c2-ae15fad9be13","elementid":"0c122bb0-4316-4e79-b774-3136f9c1ef2e","modelid":"7ee6dda3-28bd-45fd-b849-9f3687bd1492"}];
                
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
