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
      };var element = document.getElementById("89b462ec-d7cf-4605-9590-34a4b053f3d2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89b462ec-d7cf-4605-9590-34a4b053f3d2' but no matching script tag was found. ")
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
                var docs_json = {"1c9f151b-e101-4f24-8aa4-0af9e6e2a660":{"roots":{"references":[{"attributes":{"callback":null},"id":"defca1e9-05d5-498c-ac38-0eba089225b4","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"f1eb5962-b71d-4850-aa48-b6261392ce9e","type":"ColumnDataSource"},{"attributes":{},"id":"014d1ab7-a907-48f1-a93d-09a427329552","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a10ee5f3-63f9-4aaf-a865-5ea7694ec36c","type":"DataRange1d"},{"attributes":{},"id":"4f1a0ef3-5104-43d9-bb35-bdc69cce3aa3","type":"ToolEvents"},{"attributes":{},"id":"9b55f6b1-68a7-4b55-a281-9519e641c0af","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"da74a014-72af-42e4-859b-c922d51aac3b","type":"Asterisk"},{"attributes":{},"id":"0740f04f-6db2-4aab-a53f-33d7a89b7abc","type":"BasicTickFormatter"},{"attributes":{},"id":"356c74ed-21cf-4b06-8fee-3972023b3228","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f13854f4-33cc-4c14-979b-9b3995b3c1cc","type":"Plot"},"ticker":{"id":"356c74ed-21cf-4b06-8fee-3972023b3228","type":"BasicTicker"}},"id":"b5c6f203-5fda-4e87-a417-0521c6da7f7b","type":"Grid"},{"attributes":{"formatter":{"id":"0740f04f-6db2-4aab-a53f-33d7a89b7abc","type":"BasicTickFormatter"},"plot":{"id":"f13854f4-33cc-4c14-979b-9b3995b3c1cc","type":"Plot"},"ticker":{"id":"014d1ab7-a907-48f1-a93d-09a427329552","type":"BasicTicker"}},"id":"be897d0f-4e94-4013-970e-27a2d48beae2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f1eb5962-b71d-4850-aa48-b6261392ce9e","type":"ColumnDataSource"},"glyph":{"id":"da74a014-72af-42e4-859b-c922d51aac3b","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null},"id":"3dc0f87d-cc07-4f79-990a-02e220461d61","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"16fb84a4-3c81-4464-aa4b-7cca598b920b","type":"Toolbar"},{"attributes":{},"id":"d32379db-235e-4a9b-a10b-2caae147ae3f","type":"LinearScale"},{"attributes":{"plot":{"id":"f13854f4-33cc-4c14-979b-9b3995b3c1cc","type":"Plot"},"ticker":{"id":"014d1ab7-a907-48f1-a93d-09a427329552","type":"BasicTicker"}},"id":"f964b5ba-7ae4-402d-91c7-19f1ed490e8a","type":"Grid"},{"attributes":{"formatter":{"id":"b617789a-7e3d-4446-8ed4-dfc0ba54581d","type":"BasicTickFormatter"},"plot":{"id":"f13854f4-33cc-4c14-979b-9b3995b3c1cc","type":"Plot"},"ticker":{"id":"356c74ed-21cf-4b06-8fee-3972023b3228","type":"BasicTicker"}},"id":"226fa1f4-eb63-43c4-88be-ea86ccda7e61","type":"LinearAxis"},{"attributes":{"below":[{"id":"be897d0f-4e94-4013-970e-27a2d48beae2","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"226fa1f4-eb63-43c4-88be-ea86ccda7e61","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3dc0f87d-cc07-4f79-990a-02e220461d61","type":"GlyphRenderer"},{"id":"be897d0f-4e94-4013-970e-27a2d48beae2","type":"LinearAxis"},{"id":"226fa1f4-eb63-43c4-88be-ea86ccda7e61","type":"LinearAxis"},{"id":"f964b5ba-7ae4-402d-91c7-19f1ed490e8a","type":"Grid"},{"id":"b5c6f203-5fda-4e87-a417-0521c6da7f7b","type":"Grid"}],"title":null,"tool_events":{"id":"4f1a0ef3-5104-43d9-bb35-bdc69cce3aa3","type":"ToolEvents"},"toolbar":{"id":"16fb84a4-3c81-4464-aa4b-7cca598b920b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"defca1e9-05d5-498c-ac38-0eba089225b4","type":"DataRange1d"},"x_scale":{"id":"9b55f6b1-68a7-4b55-a281-9519e641c0af","type":"LinearScale"},"y_range":{"id":"a10ee5f3-63f9-4aaf-a865-5ea7694ec36c","type":"DataRange1d"},"y_scale":{"id":"d32379db-235e-4a9b-a10b-2caae147ae3f","type":"LinearScale"}},"id":"f13854f4-33cc-4c14-979b-9b3995b3c1cc","type":"Plot"},{"attributes":{},"id":"b617789a-7e3d-4446-8ed4-dfc0ba54581d","type":"BasicTickFormatter"}],"root_ids":["f13854f4-33cc-4c14-979b-9b3995b3c1cc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1c9f151b-e101-4f24-8aa4-0af9e6e2a660","elementid":"89b462ec-d7cf-4605-9590-34a4b053f3d2","modelid":"f13854f4-33cc-4c14-979b-9b3995b3c1cc"}];
                
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
