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
      };var element = document.getElementById("59f65820-965b-4541-ba93-0413e0de5941");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59f65820-965b-4541-ba93-0413e0de5941' but no matching script tag was found. ")
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
                var docs_json = {"2221a443-7c34-4a41-9e12-23bd25d5f1ab":{"roots":{"references":[{"attributes":{},"id":"35246a33-a01f-4b0e-a318-adc6acaa0fe3","type":"BasicTickFormatter"},{"attributes":{},"id":"d1fa4c09-aa56-435b-86b4-a63982679a32","type":"ToolEvents"},{"attributes":{"below":[{"id":"ac79d70a-1571-4911-83e0-322080c04e3b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9c9e88c6-fb3b-4d3e-b058-7bb4c363bf2f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7193c9f1-eadc-42e2-a94f-1401e2e58753","type":"GlyphRenderer"},{"id":"ac79d70a-1571-4911-83e0-322080c04e3b","type":"LinearAxis"},{"id":"9c9e88c6-fb3b-4d3e-b058-7bb4c363bf2f","type":"LinearAxis"},{"id":"e94fed93-a1a1-4066-9b5d-6e531619d8c5","type":"Grid"},{"id":"8edc99f6-e2c4-437e-88f9-eb20ff029474","type":"Grid"}],"title":null,"tool_events":{"id":"d1fa4c09-aa56-435b-86b4-a63982679a32","type":"ToolEvents"},"toolbar":{"id":"1e8b1a8d-bbc8-4274-90d3-b6ae569cfe1f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d441c2c7-1560-40cc-86f1-e66493ef4898","type":"DataRange1d"},"y_range":{"id":"58093895-5da5-4344-bd9d-015ad33410bc","type":"DataRange1d"}},"id":"14b61c23-35c1-42ca-9265-5e866f63b366","type":"Plot"},{"attributes":{"data_source":{"id":"11f25d3e-5666-4427-81dc-c5ad6b7d6611","type":"ColumnDataSource"},"glyph":{"id":"c03d343b-6d12-4054-b296-52f371102af0","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null},"id":"7193c9f1-eadc-42e2-a94f-1401e2e58753","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"14b61c23-35c1-42ca-9265-5e866f63b366","type":"Plot"},"ticker":{"id":"b6ebdb04-2af4-4eb6-b50d-a5d858841ae8","type":"BasicTicker"}},"id":"e94fed93-a1a1-4066-9b5d-6e531619d8c5","type":"Grid"},{"attributes":{"formatter":{"id":"35246a33-a01f-4b0e-a318-adc6acaa0fe3","type":"BasicTickFormatter"},"plot":{"id":"14b61c23-35c1-42ca-9265-5e866f63b366","type":"Plot"},"ticker":{"id":"b6ebdb04-2af4-4eb6-b50d-a5d858841ae8","type":"BasicTicker"}},"id":"ac79d70a-1571-4911-83e0-322080c04e3b","type":"LinearAxis"},{"attributes":{},"id":"6449fd30-7bc4-4539-8d76-ad411fd032fb","type":"BasicTickFormatter"},{"attributes":{},"id":"b6ebdb04-2af4-4eb6-b50d-a5d858841ae8","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6449fd30-7bc4-4539-8d76-ad411fd032fb","type":"BasicTickFormatter"},"plot":{"id":"14b61c23-35c1-42ca-9265-5e866f63b366","type":"Plot"},"ticker":{"id":"9bdd13d3-f2bc-485c-b810-deb720579cea","type":"BasicTicker"}},"id":"9c9e88c6-fb3b-4d3e-b058-7bb4c363bf2f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"14b61c23-35c1-42ca-9265-5e866f63b366","type":"Plot"},"ticker":{"id":"9bdd13d3-f2bc-485c-b810-deb720579cea","type":"BasicTicker"}},"id":"8edc99f6-e2c4-437e-88f9-eb20ff029474","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c03d343b-6d12-4054-b296-52f371102af0","type":"CircleCross"},{"attributes":{"callback":null},"id":"58093895-5da5-4344-bd9d-015ad33410bc","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"11f25d3e-5666-4427-81dc-c5ad6b7d6611","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1e8b1a8d-bbc8-4274-90d3-b6ae569cfe1f","type":"Toolbar"},{"attributes":{"callback":null},"id":"d441c2c7-1560-40cc-86f1-e66493ef4898","type":"DataRange1d"},{"attributes":{},"id":"9bdd13d3-f2bc-485c-b810-deb720579cea","type":"BasicTicker"}],"root_ids":["14b61c23-35c1-42ca-9265-5e866f63b366"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"2221a443-7c34-4a41-9e12-23bd25d5f1ab","elementid":"59f65820-965b-4541-ba93-0413e0de5941","modelid":"14b61c23-35c1-42ca-9265-5e866f63b366"}];
                
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
