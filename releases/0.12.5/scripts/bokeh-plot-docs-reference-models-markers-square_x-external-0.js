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
      };var element = document.getElementById("53ac09aa-092e-46d7-b9bd-7e13cd7a2880");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '53ac09aa-092e-46d7-b9bd-7e13cd7a2880' but no matching script tag was found. ")
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
                var docs_json = {"ab22625d-ea63-49d1-9c6b-546ed557aada":{"roots":{"references":[{"attributes":{},"id":"354b5e47-c846-4262-9bd8-720716e079b0","type":"BasicTicker"},{"attributes":{},"id":"06175a99-34d8-47a7-904c-30cf0175dda0","type":"ToolEvents"},{"attributes":{},"id":"f71062fa-355b-4822-bd97-3204655e40fd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16","type":"Plot"},"ticker":{"id":"354b5e47-c846-4262-9bd8-720716e079b0","type":"BasicTicker"}},"id":"e383d117-5244-4330-8ce2-7b075e8e63ee","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"6954cf30-5b71-4d92-a072-b43a19cfb964","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3957e0d2-3cc1-434d-b2f6-38aab7de9c49","type":"SquareX"},{"attributes":{"callback":null},"id":"6cc5f577-e364-40bf-a9ad-a48650fb5022","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1f563d76-fc12-4c14-878b-df7fcf111b6b","type":"Toolbar"},{"attributes":{"data_source":{"id":"6954cf30-5b71-4d92-a072-b43a19cfb964","type":"ColumnDataSource"},"glyph":{"id":"3957e0d2-3cc1-434d-b2f6-38aab7de9c49","type":"SquareX"},"hover_glyph":null,"muted_glyph":null},"id":"b3296a3f-d028-4869-8f3f-1415fbe6b7eb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1be75072-b80e-4834-b8e3-e5991b177675","type":"DataRange1d"},{"attributes":{},"id":"ad907515-425d-4b2d-9cd1-daea4cc6beb1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ad907515-425d-4b2d-9cd1-daea4cc6beb1","type":"BasicTickFormatter"},"plot":{"id":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16","type":"Plot"},"ticker":{"id":"354b5e47-c846-4262-9bd8-720716e079b0","type":"BasicTicker"}},"id":"f95a89e5-545e-4ac6-ad9d-ba6a0724c02a","type":"LinearAxis"},{"attributes":{},"id":"c4b6eeff-e0ba-4928-8ad3-a580ade242a1","type":"BasicTicker"},{"attributes":{"below":[{"id":"f95a89e5-545e-4ac6-ad9d-ba6a0724c02a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"3b5c42cb-4bf0-41ca-9497-6163d515b34f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b3296a3f-d028-4869-8f3f-1415fbe6b7eb","type":"GlyphRenderer"},{"id":"f95a89e5-545e-4ac6-ad9d-ba6a0724c02a","type":"LinearAxis"},{"id":"3b5c42cb-4bf0-41ca-9497-6163d515b34f","type":"LinearAxis"},{"id":"e383d117-5244-4330-8ce2-7b075e8e63ee","type":"Grid"},{"id":"c0d47783-4ce1-45a2-884a-55da5526cee9","type":"Grid"}],"title":null,"tool_events":{"id":"06175a99-34d8-47a7-904c-30cf0175dda0","type":"ToolEvents"},"toolbar":{"id":"1f563d76-fc12-4c14-878b-df7fcf111b6b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6cc5f577-e364-40bf-a9ad-a48650fb5022","type":"DataRange1d"},"y_range":{"id":"1be75072-b80e-4834-b8e3-e5991b177675","type":"DataRange1d"}},"id":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16","type":"Plot"},{"attributes":{"formatter":{"id":"f71062fa-355b-4822-bd97-3204655e40fd","type":"BasicTickFormatter"},"plot":{"id":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16","type":"Plot"},"ticker":{"id":"c4b6eeff-e0ba-4928-8ad3-a580ade242a1","type":"BasicTicker"}},"id":"3b5c42cb-4bf0-41ca-9497-6163d515b34f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16","type":"Plot"},"ticker":{"id":"c4b6eeff-e0ba-4928-8ad3-a580ade242a1","type":"BasicTicker"}},"id":"c0d47783-4ce1-45a2-884a-55da5526cee9","type":"Grid"}],"root_ids":["67da2ef6-a6ef-47a0-93fe-9a92c57d5a16"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ab22625d-ea63-49d1-9c6b-546ed557aada","elementid":"53ac09aa-092e-46d7-b9bd-7e13cd7a2880","modelid":"67da2ef6-a6ef-47a0-93fe-9a92c57d5a16"}];
                
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
