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
      };var element = document.getElementById("97e25ed3-08b3-4be5-9f79-0a6d9ef0e7b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97e25ed3-08b3-4be5-9f79-0a6d9ef0e7b1' but no matching script tag was found. ")
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
                var docs_json = {"b7e988fa-22ca-4c42-9560-289c17c7d5e2":{"roots":{"references":[{"attributes":{"plot":{"id":"33484eae-2dab-4119-9d56-82ca4c3eb4f9","type":"Plot"},"ticker":{"id":"04969668-bf3b-4e4e-9b87-f87a20e1fa65","type":"BasicTicker"}},"id":"6b459d62-1414-48f0-80e1-2496d415ad31","type":"Grid"},{"attributes":{},"id":"40d58f3a-c352-4803-a490-d1c672c28931","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"864e75de-4c22-4e91-b347-921f48ce326e","type":"ColumnDataSource"}},"id":"401b3a7e-a439-47d9-b166-06f437b598c8","type":"CDSView"},{"attributes":{},"id":"4212470e-236d-4168-bb1c-fc21f7b35f48","type":"BasicTicker"},{"attributes":{"data_source":{"id":"864e75de-4c22-4e91-b347-921f48ce326e","type":"ColumnDataSource"},"glyph":{"id":"a6c0b903-4749-478b-ab19-e6703ec22311","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"401b3a7e-a439-47d9-b166-06f437b598c8","type":"CDSView"}},"id":"8a6e5510-f552-4df4-9069-1d317b277af4","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33484eae-2dab-4119-9d56-82ca4c3eb4f9","type":"Plot"},"ticker":{"id":"4212470e-236d-4168-bb1c-fc21f7b35f48","type":"BasicTicker"}},"id":"9cf14dc8-9728-4630-9d56-db95b518afe4","type":"Grid"},{"attributes":{"formatter":{"id":"40d58f3a-c352-4803-a490-d1c672c28931","type":"BasicTickFormatter"},"plot":{"id":"33484eae-2dab-4119-9d56-82ca4c3eb4f9","type":"Plot"},"ticker":{"id":"4212470e-236d-4168-bb1c-fc21f7b35f48","type":"BasicTicker"}},"id":"49a4b3e7-7792-4c64-a623-061bdf9e485c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dfdd68bf-c543-4e20-b53e-76285e7d4a41","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"864e75de-4c22-4e91-b347-921f48ce326e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"db400d0d-7a46-4a96-b736-84424b4da669","type":"Toolbar"},{"attributes":{},"id":"3645e5ba-102c-4eeb-8f61-2df40ba76391","type":"BasicTickFormatter"},{"attributes":{},"id":"20d02d1c-4bdb-4aae-8fc1-f59074383239","type":"LinearScale"},{"attributes":{},"id":"04969668-bf3b-4e4e-9b87-f87a20e1fa65","type":"BasicTicker"},{"attributes":{"below":[{"id":"67d65d1e-c287-4ad2-82cc-cba0f6439c94","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"49a4b3e7-7792-4c64-a623-061bdf9e485c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8a6e5510-f552-4df4-9069-1d317b277af4","type":"GlyphRenderer"},{"id":"67d65d1e-c287-4ad2-82cc-cba0f6439c94","type":"LinearAxis"},{"id":"49a4b3e7-7792-4c64-a623-061bdf9e485c","type":"LinearAxis"},{"id":"6b459d62-1414-48f0-80e1-2496d415ad31","type":"Grid"},{"id":"9cf14dc8-9728-4630-9d56-db95b518afe4","type":"Grid"}],"title":null,"toolbar":{"id":"db400d0d-7a46-4a96-b736-84424b4da669","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0ba79b5e-ff1f-4e27-bc13-2a50334bca38","type":"DataRange1d"},"x_scale":{"id":"6b600dab-276f-4a6f-a41e-204919fc26d6","type":"LinearScale"},"y_range":{"id":"dfdd68bf-c543-4e20-b53e-76285e7d4a41","type":"DataRange1d"},"y_scale":{"id":"20d02d1c-4bdb-4aae-8fc1-f59074383239","type":"LinearScale"}},"id":"33484eae-2dab-4119-9d56-82ca4c3eb4f9","type":"Plot"},{"attributes":{},"id":"6b600dab-276f-4a6f-a41e-204919fc26d6","type":"LinearScale"},{"attributes":{"callback":null},"id":"0ba79b5e-ff1f-4e27-bc13-2a50334bca38","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6c0b903-4749-478b-ab19-e6703ec22311","type":"SquareX"},{"attributes":{"formatter":{"id":"3645e5ba-102c-4eeb-8f61-2df40ba76391","type":"BasicTickFormatter"},"plot":{"id":"33484eae-2dab-4119-9d56-82ca4c3eb4f9","type":"Plot"},"ticker":{"id":"04969668-bf3b-4e4e-9b87-f87a20e1fa65","type":"BasicTicker"}},"id":"67d65d1e-c287-4ad2-82cc-cba0f6439c94","type":"LinearAxis"}],"root_ids":["33484eae-2dab-4119-9d56-82ca4c3eb4f9"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b7e988fa-22ca-4c42-9560-289c17c7d5e2","elementid":"97e25ed3-08b3-4be5-9f79-0a6d9ef0e7b1","modelid":"33484eae-2dab-4119-9d56-82ca4c3eb4f9"}];
                
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
