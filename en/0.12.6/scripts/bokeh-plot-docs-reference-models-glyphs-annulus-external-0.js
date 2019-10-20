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
      };var element = document.getElementById("5dba3096-cc58-4b52-8d23-8eccfdbf3bc2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5dba3096-cc58-4b52-8d23-8eccfdbf3bc2' but no matching script tag was found. ")
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
                var docs_json = {"9bcd18a5-b6df-4f9a-a01e-3e24ffc4bfbc":{"roots":{"references":[{"attributes":{},"id":"95145476-cd4a-4864-8874-1ed5493672a8","type":"BasicTickFormatter"},{"attributes":{},"id":"248db8aa-3fcd-41ca-a09d-9cadb52a9e9c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"af1b56ba-800a-4a7c-933e-66a9d4ad7848","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"526e736c-529f-4b1d-b00b-17c7c475643e","type":"Plot"},"ticker":{"id":"fc47f0d9-30fd-40c9-a745-e51493b1af62","type":"BasicTicker"}},"id":"e58f15b5-50b0-41cf-baad-0852cfe046ab","type":"Grid"},{"attributes":{"formatter":{"id":"95145476-cd4a-4864-8874-1ed5493672a8","type":"BasicTickFormatter"},"plot":{"id":"526e736c-529f-4b1d-b00b-17c7c475643e","type":"Plot"},"ticker":{"id":"9d74d7d1-8d55-47d4-ab8b-07661b96b4e8","type":"BasicTicker"}},"id":"9fca6448-67a1-43e9-8773-e462a54111ca","type":"LinearAxis"},{"attributes":{"callback":null},"id":"117f6312-5efd-4eed-9671-3780f9d18dd3","type":"DataRange1d"},{"attributes":{},"id":"04de1037-2a7b-48c0-8a30-189fc8ceaf3c","type":"LinearScale"},{"attributes":{"data_source":{"id":"af1b56ba-800a-4a7c-933e-66a9d4ad7848","type":"ColumnDataSource"},"glyph":{"id":"3bcf50b2-9a7e-4af5-b53e-e37db8c88f5b","type":"Annulus"},"hover_glyph":null,"muted_glyph":null},"id":"44a08a57-e22c-4947-974e-9ecc1a5bd752","type":"GlyphRenderer"},{"attributes":{},"id":"9d74d7d1-8d55-47d4-ab8b-07661b96b4e8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7290623a-d3b9-4c23-bf86-b02aefe80d2b","type":"DataRange1d"},{"attributes":{},"id":"fc47f0d9-30fd-40c9-a745-e51493b1af62","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"526e736c-529f-4b1d-b00b-17c7c475643e","type":"Plot"},"ticker":{"id":"9d74d7d1-8d55-47d4-ab8b-07661b96b4e8","type":"BasicTicker"}},"id":"ea35e2f4-0171-4ad8-b27b-433e59f4fb5a","type":"Grid"},{"attributes":{"formatter":{"id":"248db8aa-3fcd-41ca-a09d-9cadb52a9e9c","type":"BasicTickFormatter"},"plot":{"id":"526e736c-529f-4b1d-b00b-17c7c475643e","type":"Plot"},"ticker":{"id":"fc47f0d9-30fd-40c9-a745-e51493b1af62","type":"BasicTicker"}},"id":"ac375b98-132d-4e16-9644-d433dee628ca","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bcf50b2-9a7e-4af5-b53e-e37db8c88f5b","type":"Annulus"},{"attributes":{},"id":"5b8e1331-5a50-4645-9d86-c1cc23bd255b","type":"ToolEvents"},{"attributes":{},"id":"0af8f883-6998-4452-8eda-2c24dbeade78","type":"LinearScale"},{"attributes":{"below":[{"id":"ac375b98-132d-4e16-9644-d433dee628ca","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9fca6448-67a1-43e9-8773-e462a54111ca","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"44a08a57-e22c-4947-974e-9ecc1a5bd752","type":"GlyphRenderer"},{"id":"ac375b98-132d-4e16-9644-d433dee628ca","type":"LinearAxis"},{"id":"9fca6448-67a1-43e9-8773-e462a54111ca","type":"LinearAxis"},{"id":"e58f15b5-50b0-41cf-baad-0852cfe046ab","type":"Grid"},{"id":"ea35e2f4-0171-4ad8-b27b-433e59f4fb5a","type":"Grid"}],"title":null,"tool_events":{"id":"5b8e1331-5a50-4645-9d86-c1cc23bd255b","type":"ToolEvents"},"toolbar":{"id":"cb854498-e891-4552-aafc-c5c41bf18a8c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117f6312-5efd-4eed-9671-3780f9d18dd3","type":"DataRange1d"},"x_scale":{"id":"04de1037-2a7b-48c0-8a30-189fc8ceaf3c","type":"LinearScale"},"y_range":{"id":"7290623a-d3b9-4c23-bf86-b02aefe80d2b","type":"DataRange1d"},"y_scale":{"id":"0af8f883-6998-4452-8eda-2c24dbeade78","type":"LinearScale"}},"id":"526e736c-529f-4b1d-b00b-17c7c475643e","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cb854498-e891-4552-aafc-c5c41bf18a8c","type":"Toolbar"}],"root_ids":["526e736c-529f-4b1d-b00b-17c7c475643e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9bcd18a5-b6df-4f9a-a01e-3e24ffc4bfbc","elementid":"5dba3096-cc58-4b52-8d23-8eccfdbf3bc2","modelid":"526e736c-529f-4b1d-b00b-17c7c475643e"}];
                
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
