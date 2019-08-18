(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("eb5d8ad3-766e-4254-a582-435368c54409");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb5d8ad3-766e-4254-a582-435368c54409' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"fbfc0e49-28b3-4304-96a2-72a1ac287e3d":{"roots":{"references":[{"attributes":{"source":{"id":"69c722b3-a364-4177-93c3-284e66b54098","type":"ColumnDataSource"}},"id":"3b85ef82-8b3b-48f2-b85b-95d087534be0","type":"CDSView"},{"attributes":{},"id":"adf4e137-d203-496f-b7f9-2b9e21bde459","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dace4748-0e7d-4248-8c2e-0135db5fd933","type":"Circle"},{"attributes":{"overlay":{"id":"77092a7c-8aa6-493c-ac8e-981059abe99e","type":"BoxAnnotation"}},"id":"c18153b5-7d9e-4de5-adf5-f1146f6f3f09","type":"BoxZoomTool"},{"attributes":{},"id":"3a904421-f11b-47d4-90e2-75924bc9e67f","type":"BasicTicker"},{"attributes":{},"id":"2a6067ed-9ed1-433d-9ad1-2f2a5df8c947","type":"SaveTool"},{"attributes":{"formatter":{"id":"adf4e137-d203-496f-b7f9-2b9e21bde459","type":"BasicTickFormatter"},"plot":{"id":"9f88e347-4424-4a16-87ec-aba581197019","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a904421-f11b-47d4-90e2-75924bc9e67f","type":"BasicTicker"}},"id":"4ccfa035-5a5c-407c-ad84-919c6c029a05","type":"LinearAxis"},{"attributes":{},"id":"21982a90-7e37-4978-bdd8-a65fd5bb9076","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"8f9d5e01-a9d1-460c-9c09-1ab0da1eb79c","type":"DataRange1d"},{"attributes":{},"id":"352569ec-2309-4e3a-86b4-e7285177bfb9","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77092a7c-8aa6-493c-ac8e-981059abe99e","type":"BoxAnnotation"},{"attributes":{},"id":"bbb59fd5-e9ac-4ce1-8052-aa5c7cbc7886","type":"BasicTicker"},{"attributes":{},"id":"f48e1368-a356-4be8-8a50-45bcdb26084a","type":"LinearScale"},{"attributes":{},"id":"781aeb02-f28f-4b30-a328-eaadf63f55e2","type":"HelpTool"},{"attributes":{"data_source":{"id":"69c722b3-a364-4177-93c3-284e66b54098","type":"ColumnDataSource"},"glyph":{"id":"961eb4cf-c992-42ec-b5c4-233fd135d171","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dace4748-0e7d-4248-8c2e-0135db5fd933","type":"Circle"},"selection_glyph":null,"view":{"id":"3b85ef82-8b3b-48f2-b85b-95d087534be0","type":"CDSView"}},"id":"30c0f7b0-c4a6-4612-be37-1595c91d84b3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0dd3c4e5-9411-4f1e-ab98-e322d7ef1e5b","type":"DataRange1d"},{"attributes":{},"id":"1c40f0e9-c89e-4572-91e3-8419d2c6d410","type":"LinearScale"},{"attributes":{"plot":{"id":"9f88e347-4424-4a16-87ec-aba581197019","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbb59fd5-e9ac-4ce1-8052-aa5c7cbc7886","type":"BasicTicker"}},"id":"5d7104ed-1637-4856-8ea2-5b4dde9e6892","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"69c722b3-a364-4177-93c3-284e66b54098","type":"ColumnDataSource"},{"attributes":{},"id":"91667b0a-204b-4c34-9372-2622b35e17d0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"352569ec-2309-4e3a-86b4-e7285177bfb9","type":"PanTool"},{"id":"21982a90-7e37-4978-bdd8-a65fd5bb9076","type":"WheelZoomTool"},{"id":"c18153b5-7d9e-4de5-adf5-f1146f6f3f09","type":"BoxZoomTool"},{"id":"2a6067ed-9ed1-433d-9ad1-2f2a5df8c947","type":"SaveTool"},{"id":"429b70c3-6ad0-4c2d-b2a4-41669242d1c6","type":"ResetTool"},{"id":"781aeb02-f28f-4b30-a328-eaadf63f55e2","type":"HelpTool"}]},"id":"00d75ea2-6f72-4a3f-bc92-503a243effec","type":"Toolbar"},{"attributes":{"formatter":{"id":"91667b0a-204b-4c34-9372-2622b35e17d0","type":"BasicTickFormatter"},"plot":{"id":"9f88e347-4424-4a16-87ec-aba581197019","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbb59fd5-e9ac-4ce1-8052-aa5c7cbc7886","type":"BasicTicker"}},"id":"ca193d2a-1e65-4e5c-a76f-afa60fba1c60","type":"LinearAxis"},{"attributes":{"below":[{"id":"ca193d2a-1e65-4e5c-a76f-afa60fba1c60","type":"LinearAxis"}],"left":[{"id":"4ccfa035-5a5c-407c-ad84-919c6c029a05","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ca193d2a-1e65-4e5c-a76f-afa60fba1c60","type":"LinearAxis"},{"id":"5d7104ed-1637-4856-8ea2-5b4dde9e6892","type":"Grid"},{"id":"4ccfa035-5a5c-407c-ad84-919c6c029a05","type":"LinearAxis"},{"id":"be486aca-2c94-469c-8458-0a333214a2ea","type":"Grid"},{"id":"77092a7c-8aa6-493c-ac8e-981059abe99e","type":"BoxAnnotation"},{"id":"30c0f7b0-c4a6-4612-be37-1595c91d84b3","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"00d75ea2-6f72-4a3f-bc92-503a243effec","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"8f9d5e01-a9d1-460c-9c09-1ab0da1eb79c","type":"DataRange1d"},"x_scale":{"id":"f48e1368-a356-4be8-8a50-45bcdb26084a","type":"LinearScale"},"y_range":{"id":"0dd3c4e5-9411-4f1e-ab98-e322d7ef1e5b","type":"DataRange1d"},"y_scale":{"id":"1c40f0e9-c89e-4572-91e3-8419d2c6d410","type":"LinearScale"}},"id":"9f88e347-4424-4a16-87ec-aba581197019","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"961eb4cf-c992-42ec-b5c4-233fd135d171","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"9f88e347-4424-4a16-87ec-aba581197019","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a904421-f11b-47d4-90e2-75924bc9e67f","type":"BasicTicker"}},"id":"be486aca-2c94-469c-8458-0a333214a2ea","type":"Grid"},{"attributes":{},"id":"429b70c3-6ad0-4c2d-b2a4-41669242d1c6","type":"ResetTool"}],"root_ids":["9f88e347-4424-4a16-87ec-aba581197019"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"fbfc0e49-28b3-4304-96a2-72a1ac287e3d","elementid":"eb5d8ad3-766e-4254-a582-435368c54409","modelid":"9f88e347-4424-4a16-87ec-aba581197019"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
