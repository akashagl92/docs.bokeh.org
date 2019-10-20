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
      };var element = document.getElementById("553479af-42d0-49ea-b2dd-5afcc7959be2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '553479af-42d0-49ea-b2dd-5afcc7959be2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"5b73fdfd-d986-4840-afd5-859b4f4e0227":{"roots":{"references":[{"attributes":{},"id":"5e9f671f-beb0-499d-a3ad-0db20d53779a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9994a93b-ff11-4d9d-9838-f78cc4a362c4","type":"BasicTickFormatter"},"plot":{"id":"b7d893a4-6e8f-4240-9296-a006b2b9bae2","type":"Plot"},"ticker":{"id":"5e9f671f-beb0-499d-a3ad-0db20d53779a","type":"BasicTicker"}},"id":"df567c49-c899-4cc9-8d4e-0565cf57b2bd","type":"LinearAxis"},{"attributes":{"plot":{"id":"b7d893a4-6e8f-4240-9296-a006b2b9bae2","type":"Plot"},"ticker":{"id":"72e094f8-bb1d-4b39-8384-8d2762829065","type":"BasicTicker"}},"id":"c011bc47-ca6c-4647-9e12-9b9961ed44e3","type":"Grid"},{"attributes":{"source":{"id":"ddced69c-6030-46df-9329-8a25b753c1d0","type":"ColumnDataSource"}},"id":"4c91cfd9-c96f-4382-b742-240e0d2eb45e","type":"CDSView"},{"attributes":{},"id":"beca3e13-8490-49ec-a989-ef052e1c180a","type":"LinearScale"},{"attributes":{"below":[{"id":"f361fd8f-3e5b-4879-80bb-e9a6211a4e62","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"df567c49-c899-4cc9-8d4e-0565cf57b2bd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9bc2add2-b8ca-45a2-a01f-7e33448706c4","type":"GlyphRenderer"},{"id":"f361fd8f-3e5b-4879-80bb-e9a6211a4e62","type":"LinearAxis"},{"id":"df567c49-c899-4cc9-8d4e-0565cf57b2bd","type":"LinearAxis"},{"id":"c011bc47-ca6c-4647-9e12-9b9961ed44e3","type":"Grid"},{"id":"980e1c8d-49e3-43b0-855e-901fb6d22b8e","type":"Grid"}],"title":null,"toolbar":{"id":"e701cccc-4b64-4234-b4a2-1cf59f59ff32","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"51883980-24bd-4951-a3ec-99be4ca206c8","type":"DataRange1d"},"x_scale":{"id":"ea1d9812-43ec-4d95-9c02-0e9104bddcee","type":"LinearScale"},"y_range":{"id":"03f85081-1bbb-45b6-a20b-ce1d5796cd41","type":"DataRange1d"},"y_scale":{"id":"beca3e13-8490-49ec-a989-ef052e1c180a","type":"LinearScale"}},"id":"b7d893a4-6e8f-4240-9296-a006b2b9bae2","type":"Plot"},{"attributes":{},"id":"72e094f8-bb1d-4b39-8384-8d2762829065","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b7d893a4-6e8f-4240-9296-a006b2b9bae2","type":"Plot"},"ticker":{"id":"5e9f671f-beb0-499d-a3ad-0db20d53779a","type":"BasicTicker"}},"id":"980e1c8d-49e3-43b0-855e-901fb6d22b8e","type":"Grid"},{"attributes":{"data_source":{"id":"ddced69c-6030-46df-9329-8a25b753c1d0","type":"ColumnDataSource"},"glyph":{"id":"84091aaa-7eb2-47c9-89ab-5d90c2c8ce80","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4c91cfd9-c96f-4382-b742-240e0d2eb45e","type":"CDSView"}},"id":"9bc2add2-b8ca-45a2-a01f-7e33448706c4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e701cccc-4b64-4234-b4a2-1cf59f59ff32","type":"Toolbar"},{"attributes":{},"id":"af8a680a-2167-4440-b7b7-6df84b2d00d5","type":"BasicTickFormatter"},{"attributes":{},"id":"ea1d9812-43ec-4d95-9c02-0e9104bddcee","type":"LinearScale"},{"attributes":{},"id":"9994a93b-ff11-4d9d-9838-f78cc4a362c4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ddced69c-6030-46df-9329-8a25b753c1d0","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"51883980-24bd-4951-a3ec-99be4ca206c8","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"84091aaa-7eb2-47c9-89ab-5d90c2c8ce80","type":"Circle"},{"attributes":{"formatter":{"id":"af8a680a-2167-4440-b7b7-6df84b2d00d5","type":"BasicTickFormatter"},"plot":{"id":"b7d893a4-6e8f-4240-9296-a006b2b9bae2","type":"Plot"},"ticker":{"id":"72e094f8-bb1d-4b39-8384-8d2762829065","type":"BasicTicker"}},"id":"f361fd8f-3e5b-4879-80bb-e9a6211a4e62","type":"LinearAxis"},{"attributes":{"callback":null},"id":"03f85081-1bbb-45b6-a20b-ce1d5796cd41","type":"DataRange1d"}],"root_ids":["b7d893a4-6e8f-4240-9296-a006b2b9bae2"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"5b73fdfd-d986-4840-afd5-859b4f4e0227","elementid":"553479af-42d0-49ea-b2dd-5afcc7959be2","modelid":"b7d893a4-6e8f-4240-9296-a006b2b9bae2"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
