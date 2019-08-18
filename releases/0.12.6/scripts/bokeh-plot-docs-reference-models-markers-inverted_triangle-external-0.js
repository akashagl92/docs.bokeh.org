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
      };var element = document.getElementById("a1c022db-d460-4040-bd48-56de2dace78a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1c022db-d460-4040-bd48-56de2dace78a' but no matching script tag was found. ")
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
                var docs_json = {"71ac56a9-637a-4264-a919-593df5fa79ba":{"roots":{"references":[{"attributes":{},"id":"b4659166-3d65-45d9-90d3-ac5c443533a5","type":"ToolEvents"},{"attributes":{},"id":"5a0de0cd-8aa5-4ccd-ab11-1be5098317ff","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"43d5ee8d-62a3-4c49-8f26-762e3aecab6b","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2","type":"Plot"},"ticker":{"id":"5a0de0cd-8aa5-4ccd-ab11-1be5098317ff","type":"BasicTicker"}},"id":"126108fd-5c25-4907-a6b9-2296c8a70464","type":"Grid"},{"attributes":{},"id":"4f81694a-3491-43dc-b330-70418b33616c","type":"BasicTickFormatter"},{"attributes":{},"id":"65989fee-23a3-452b-90e4-02af924a0214","type":"BasicTickFormatter"},{"attributes":{},"id":"ff1ff5ce-186c-4567-9644-402ed45570bc","type":"LinearScale"},{"attributes":{},"id":"cd5beb84-ea46-452d-9778-0d3e3c0c1399","type":"LinearScale"},{"attributes":{"callback":null},"id":"8326a354-c6ac-4145-830c-5406387d6591","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e12d0c2a-a3ef-4f2d-a5cf-de3f8824e49a","type":"InvertedTriangle"},{"attributes":{"formatter":{"id":"65989fee-23a3-452b-90e4-02af924a0214","type":"BasicTickFormatter"},"plot":{"id":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2","type":"Plot"},"ticker":{"id":"5a0de0cd-8aa5-4ccd-ab11-1be5098317ff","type":"BasicTicker"}},"id":"37c9cfa9-7497-423f-91fc-b129ed9cc2ef","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dc7e95f1-e3a9-4966-848c-270f078a1476","type":"DataRange1d"},{"attributes":{"plot":{"id":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2","type":"Plot"},"ticker":{"id":"b945c746-8fc3-4e6f-aab0-dbd401b3a49e","type":"BasicTicker"}},"id":"9547401c-ca79-4daf-9f27-faf34997ccfd","type":"Grid"},{"attributes":{"below":[{"id":"16de1085-cd16-408d-8a24-5c87d89c54fd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"37c9cfa9-7497-423f-91fc-b129ed9cc2ef","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c3e3bdc3-1d1f-4fdf-8b02-16613d9cccaf","type":"GlyphRenderer"},{"id":"16de1085-cd16-408d-8a24-5c87d89c54fd","type":"LinearAxis"},{"id":"37c9cfa9-7497-423f-91fc-b129ed9cc2ef","type":"LinearAxis"},{"id":"9547401c-ca79-4daf-9f27-faf34997ccfd","type":"Grid"},{"id":"126108fd-5c25-4907-a6b9-2296c8a70464","type":"Grid"}],"title":null,"tool_events":{"id":"b4659166-3d65-45d9-90d3-ac5c443533a5","type":"ToolEvents"},"toolbar":{"id":"43d5ee8d-62a3-4c49-8f26-762e3aecab6b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8326a354-c6ac-4145-830c-5406387d6591","type":"DataRange1d"},"x_scale":{"id":"cd5beb84-ea46-452d-9778-0d3e3c0c1399","type":"LinearScale"},"y_range":{"id":"dc7e95f1-e3a9-4966-848c-270f078a1476","type":"DataRange1d"},"y_scale":{"id":"ff1ff5ce-186c-4567-9644-402ed45570bc","type":"LinearScale"}},"id":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2","type":"Plot"},{"attributes":{},"id":"b945c746-8fc3-4e6f-aab0-dbd401b3a49e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"460508b7-d277-4802-abb0-222c9375375b","type":"ColumnDataSource"},"glyph":{"id":"e12d0c2a-a3ef-4f2d-a5cf-de3f8824e49a","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null},"id":"c3e3bdc3-1d1f-4fdf-8b02-16613d9cccaf","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4f81694a-3491-43dc-b330-70418b33616c","type":"BasicTickFormatter"},"plot":{"id":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2","type":"Plot"},"ticker":{"id":"b945c746-8fc3-4e6f-aab0-dbd401b3a49e","type":"BasicTicker"}},"id":"16de1085-cd16-408d-8a24-5c87d89c54fd","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"460508b7-d277-4802-abb0-222c9375375b","type":"ColumnDataSource"}],"root_ids":["f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"71ac56a9-637a-4264-a919-593df5fa79ba","elementid":"a1c022db-d460-4040-bd48-56de2dace78a","modelid":"f7ba0eea-c7c9-4cb0-914e-57f5601ef8d2"}];
                
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
