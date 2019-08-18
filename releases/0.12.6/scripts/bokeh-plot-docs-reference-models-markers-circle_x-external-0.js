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
      };var element = document.getElementById("606871ab-38c0-4bcd-ba83-e4bfde97cdfc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '606871ab-38c0-4bcd-ba83-e4bfde97cdfc' but no matching script tag was found. ")
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
                var docs_json = {"238fd367-9fa0-498d-9da7-851648e79a10":{"roots":{"references":[{"attributes":{},"id":"208a6689-9d4e-4717-a3fc-59ca3380e807","type":"LinearScale"},{"attributes":{"callback":null},"id":"a61ad9a5-12dd-42d3-849d-c35580b5416b","type":"DataRange1d"},{"attributes":{"callback":null},"id":"65bf07bc-e941-4e1d-8a3f-0ea2d388d080","type":"DataRange1d"},{"attributes":{},"id":"9a705a18-3a03-4ae3-84e1-ffae907e8c36","type":"ToolEvents"},{"attributes":{},"id":"73026e89-2686-427d-94b9-54ba54bb0f2d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"73026e89-2686-427d-94b9-54ba54bb0f2d","type":"BasicTickFormatter"},"plot":{"id":"119e5c78-5093-4cf1-9998-f1258105478b","type":"Plot"},"ticker":{"id":"ffa44f96-f2ae-4a5a-81d9-4a7a76139d59","type":"BasicTicker"}},"id":"0a7186b0-ca53-4727-abeb-314f94358bcf","type":"LinearAxis"},{"attributes":{},"id":"ffa44f96-f2ae-4a5a-81d9-4a7a76139d59","type":"BasicTicker"},{"attributes":{},"id":"f80d759a-bcf1-4977-81e3-af79a91fcba0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c59d3a74-dfda-4b78-bc0e-07fe2e07fb6f","type":"BasicTickFormatter"},"plot":{"id":"119e5c78-5093-4cf1-9998-f1258105478b","type":"Plot"},"ticker":{"id":"f80d759a-bcf1-4977-81e3-af79a91fcba0","type":"BasicTicker"}},"id":"67202a83-59b9-42aa-93f6-8a9d256f68f1","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"34f58850-dc31-4a86-8ddc-1acb0df311bb","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"216177c9-2920-44ff-bcff-72ccd3a03ed5","type":"CircleX"},{"attributes":{},"id":"c59d3a74-dfda-4b78-bc0e-07fe2e07fb6f","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ffe9a4e7-29bb-4354-942c-7fb52ee13595","type":"Toolbar"},{"attributes":{"plot":{"id":"119e5c78-5093-4cf1-9998-f1258105478b","type":"Plot"},"ticker":{"id":"f80d759a-bcf1-4977-81e3-af79a91fcba0","type":"BasicTicker"}},"id":"91f4c89a-c5e6-4c06-8b75-a06800c255f7","type":"Grid"},{"attributes":{"below":[{"id":"67202a83-59b9-42aa-93f6-8a9d256f68f1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0a7186b0-ca53-4727-abeb-314f94358bcf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f6443f6e-0fc5-4974-b2d8-25b5d92e22bd","type":"GlyphRenderer"},{"id":"67202a83-59b9-42aa-93f6-8a9d256f68f1","type":"LinearAxis"},{"id":"0a7186b0-ca53-4727-abeb-314f94358bcf","type":"LinearAxis"},{"id":"91f4c89a-c5e6-4c06-8b75-a06800c255f7","type":"Grid"},{"id":"cdfd5f65-f380-47cc-91dd-b28eb4bb7567","type":"Grid"}],"title":null,"tool_events":{"id":"9a705a18-3a03-4ae3-84e1-ffae907e8c36","type":"ToolEvents"},"toolbar":{"id":"ffe9a4e7-29bb-4354-942c-7fb52ee13595","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"65bf07bc-e941-4e1d-8a3f-0ea2d388d080","type":"DataRange1d"},"x_scale":{"id":"208a6689-9d4e-4717-a3fc-59ca3380e807","type":"LinearScale"},"y_range":{"id":"a61ad9a5-12dd-42d3-849d-c35580b5416b","type":"DataRange1d"},"y_scale":{"id":"0c81f8c7-16e4-462b-b482-b7c5012c2b56","type":"LinearScale"}},"id":"119e5c78-5093-4cf1-9998-f1258105478b","type":"Plot"},{"attributes":{"data_source":{"id":"34f58850-dc31-4a86-8ddc-1acb0df311bb","type":"ColumnDataSource"},"glyph":{"id":"216177c9-2920-44ff-bcff-72ccd3a03ed5","type":"CircleX"},"hover_glyph":null,"muted_glyph":null},"id":"f6443f6e-0fc5-4974-b2d8-25b5d92e22bd","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"119e5c78-5093-4cf1-9998-f1258105478b","type":"Plot"},"ticker":{"id":"ffa44f96-f2ae-4a5a-81d9-4a7a76139d59","type":"BasicTicker"}},"id":"cdfd5f65-f380-47cc-91dd-b28eb4bb7567","type":"Grid"},{"attributes":{},"id":"0c81f8c7-16e4-462b-b482-b7c5012c2b56","type":"LinearScale"}],"root_ids":["119e5c78-5093-4cf1-9998-f1258105478b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"238fd367-9fa0-498d-9da7-851648e79a10","elementid":"606871ab-38c0-4bcd-ba83-e4bfde97cdfc","modelid":"119e5c78-5093-4cf1-9998-f1258105478b"}];
                
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
