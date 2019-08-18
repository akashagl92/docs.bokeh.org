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
      };var element = document.getElementById("51f1562f-4a19-470a-9aeb-01b845c235a1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '51f1562f-4a19-470a-9aeb-01b845c235a1' but no matching script tag was found. ")
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
                var docs_json = {"8395c2e2-a03f-4722-ac57-8557a31bc237":{"roots":{"references":[{"attributes":{"formatter":{"id":"939722c7-2697-44e3-b053-d58ee6e22d2d","type":"BasicTickFormatter"},"plot":{"id":"918d8bba-670a-47a5-af49-9abacc35b2c8","type":"Plot"},"ticker":{"id":"9475199c-df58-4561-8386-0b61695973d2","type":"BasicTicker"}},"id":"b2da202e-fc36-4cb2-9e55-35571c189b34","type":"LinearAxis"},{"attributes":{},"id":"939722c7-2697-44e3-b053-d58ee6e22d2d","type":"BasicTickFormatter"},{"attributes":{},"id":"c999f8cc-f37c-4b5c-ac12-d82dbfc17b1c","type":"ToolEvents"},{"attributes":{},"id":"d01a2d88-ef42-4ad8-8a20-4db104d26d4a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"721d994a-593e-4a3b-9e05-40b66d6f58e8","type":"ColumnDataSource"},"glyph":{"id":"3ab58dcc-7d10-4095-8eb6-c115dd1e2709","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null},"id":"7125b916-60a7-4f4b-ad70-ed4d6e112875","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"918d8bba-670a-47a5-af49-9abacc35b2c8","type":"Plot"},"ticker":{"id":"9475199c-df58-4561-8386-0b61695973d2","type":"BasicTicker"}},"id":"32369078-8a17-46c6-8186-479e6aebd5ff","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1ea75640-d34e-4937-9cc5-d89a117565ce","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"721d994a-593e-4a3b-9e05-40b66d6f58e8","type":"ColumnDataSource"},{"attributes":{},"id":"9475199c-df58-4561-8386-0b61695973d2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"918d8bba-670a-47a5-af49-9abacc35b2c8","type":"Plot"},"ticker":{"id":"d01a2d88-ef42-4ad8-8a20-4db104d26d4a","type":"BasicTicker"}},"id":"8530163b-217a-4b87-935d-8d5ea3dd7612","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ab58dcc-7d10-4095-8eb6-c115dd1e2709","type":"Asterisk"},{"attributes":{"below":[{"id":"b2da202e-fc36-4cb2-9e55-35571c189b34","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"04275fbd-fc81-457f-9621-4246a5d3da89","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7125b916-60a7-4f4b-ad70-ed4d6e112875","type":"GlyphRenderer"},{"id":"b2da202e-fc36-4cb2-9e55-35571c189b34","type":"LinearAxis"},{"id":"04275fbd-fc81-457f-9621-4246a5d3da89","type":"LinearAxis"},{"id":"32369078-8a17-46c6-8186-479e6aebd5ff","type":"Grid"},{"id":"8530163b-217a-4b87-935d-8d5ea3dd7612","type":"Grid"}],"title":null,"tool_events":{"id":"c999f8cc-f37c-4b5c-ac12-d82dbfc17b1c","type":"ToolEvents"},"toolbar":{"id":"1ea75640-d34e-4937-9cc5-d89a117565ce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0acf8bbe-aa76-4468-a035-f4b7c966010d","type":"DataRange1d"},"y_range":{"id":"6a837633-a37b-4bc0-aa9f-4fa9192d0cfd","type":"DataRange1d"}},"id":"918d8bba-670a-47a5-af49-9abacc35b2c8","type":"Plot"},{"attributes":{"callback":null},"id":"6a837633-a37b-4bc0-aa9f-4fa9192d0cfd","type":"DataRange1d"},{"attributes":{},"id":"0bfc3c35-7d99-4821-9ed0-73f42c316e03","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0acf8bbe-aa76-4468-a035-f4b7c966010d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0bfc3c35-7d99-4821-9ed0-73f42c316e03","type":"BasicTickFormatter"},"plot":{"id":"918d8bba-670a-47a5-af49-9abacc35b2c8","type":"Plot"},"ticker":{"id":"d01a2d88-ef42-4ad8-8a20-4db104d26d4a","type":"BasicTicker"}},"id":"04275fbd-fc81-457f-9621-4246a5d3da89","type":"LinearAxis"}],"root_ids":["918d8bba-670a-47a5-af49-9abacc35b2c8"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8395c2e2-a03f-4722-ac57-8557a31bc237","elementid":"51f1562f-4a19-470a-9aeb-01b845c235a1","modelid":"918d8bba-670a-47a5-af49-9abacc35b2c8"}];
                
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
