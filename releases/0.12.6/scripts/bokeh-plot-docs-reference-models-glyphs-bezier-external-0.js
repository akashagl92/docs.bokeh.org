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
      };var element = document.getElementById("32128af9-c92d-4b21-9ef5-58587e697649");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32128af9-c92d-4b21-9ef5-58587e697649' but no matching script tag was found. ")
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
                var docs_json = {"f1854723-537a-4c4c-98e1-18839b00cc8b":{"roots":{"references":[{"attributes":{"data_source":{"id":"1c973799-a1f5-470d-8792-25264dafd3fb","type":"ColumnDataSource"},"glyph":{"id":"63b778fa-b705-4f6f-8600-cb7c6b69e239","type":"Bezier"},"hover_glyph":null,"muted_glyph":null},"id":"48581006-2c05-4712-8628-a073f8e4717f","type":"GlyphRenderer"},{"attributes":{},"id":"1c43250c-b786-4f05-9730-082b21d26cf1","type":"ToolEvents"},{"attributes":{"formatter":{"id":"4aa3ccd9-211d-4236-914c-7e8ecba3f05d","type":"BasicTickFormatter"},"plot":{"id":"42c02f36-ad88-4989-b6f1-e91e443d562f","type":"Plot"},"ticker":{"id":"59a5765f-c9ee-4095-814f-5a83619d0007","type":"BasicTicker"}},"id":"d566c536-f14b-4c6f-84c2-721d83e03f9c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0eb7b672-fb42-4081-ba95-e8b10954db5b","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1b1007df-1ec6-4068-b045-b40b4befbf2e","type":"Toolbar"},{"attributes":{"below":[{"id":"d566c536-f14b-4c6f-84c2-721d83e03f9c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"793266f4-d22a-4b3e-8f6c-7a6c82d38768","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"48581006-2c05-4712-8628-a073f8e4717f","type":"GlyphRenderer"},{"id":"d566c536-f14b-4c6f-84c2-721d83e03f9c","type":"LinearAxis"},{"id":"793266f4-d22a-4b3e-8f6c-7a6c82d38768","type":"LinearAxis"},{"id":"cc0606c6-f6bd-4df8-9020-ed5490e4b3ae","type":"Grid"},{"id":"9d9b5e2e-ef95-4e62-9dfd-e2a9bd0406ca","type":"Grid"}],"title":null,"tool_events":{"id":"1c43250c-b786-4f05-9730-082b21d26cf1","type":"ToolEvents"},"toolbar":{"id":"1b1007df-1ec6-4068-b045-b40b4befbf2e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0eb7b672-fb42-4081-ba95-e8b10954db5b","type":"DataRange1d"},"x_scale":{"id":"cf88dd28-4703-4a23-a561-d017c7e09fd0","type":"LinearScale"},"y_range":{"id":"d9b9f15a-1c59-44ad-a89d-1fa72ab95006","type":"DataRange1d"},"y_scale":{"id":"4187cfe6-3dfc-4b94-a375-59803f3d7bf4","type":"LinearScale"}},"id":"42c02f36-ad88-4989-b6f1-e91e443d562f","type":"Plot"},{"attributes":{"formatter":{"id":"627076ad-3f69-4f77-b0dc-278a3285d02d","type":"BasicTickFormatter"},"plot":{"id":"42c02f36-ad88-4989-b6f1-e91e443d562f","type":"Plot"},"ticker":{"id":"29b89e5e-e276-4894-860a-2b16f0e99d7b","type":"BasicTicker"}},"id":"793266f4-d22a-4b3e-8f6c-7a6c82d38768","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"42c02f36-ad88-4989-b6f1-e91e443d562f","type":"Plot"},"ticker":{"id":"29b89e5e-e276-4894-860a-2b16f0e99d7b","type":"BasicTicker"}},"id":"9d9b5e2e-ef95-4e62-9dfd-e2a9bd0406ca","type":"Grid"},{"attributes":{},"id":"29b89e5e-e276-4894-860a-2b16f0e99d7b","type":"BasicTicker"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"63b778fa-b705-4f6f-8600-cb7c6b69e239","type":"Bezier"},{"attributes":{},"id":"627076ad-3f69-4f77-b0dc-278a3285d02d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"42c02f36-ad88-4989-b6f1-e91e443d562f","type":"Plot"},"ticker":{"id":"59a5765f-c9ee-4095-814f-5a83619d0007","type":"BasicTicker"}},"id":"cc0606c6-f6bd-4df8-9020-ed5490e4b3ae","type":"Grid"},{"attributes":{},"id":"4aa3ccd9-211d-4236-914c-7e8ecba3f05d","type":"BasicTickFormatter"},{"attributes":{},"id":"59a5765f-c9ee-4095-814f-5a83619d0007","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xp01","xp02","x","y","ym01","xm01","yp01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"1c973799-a1f5-470d-8792-25264dafd3fb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d9b9f15a-1c59-44ad-a89d-1fa72ab95006","type":"DataRange1d"},{"attributes":{},"id":"4187cfe6-3dfc-4b94-a375-59803f3d7bf4","type":"LinearScale"},{"attributes":{},"id":"cf88dd28-4703-4a23-a561-d017c7e09fd0","type":"LinearScale"}],"root_ids":["42c02f36-ad88-4989-b6f1-e91e443d562f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f1854723-537a-4c4c-98e1-18839b00cc8b","elementid":"32128af9-c92d-4b21-9ef5-58587e697649","modelid":"42c02f36-ad88-4989-b6f1-e91e443d562f"}];
                
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
