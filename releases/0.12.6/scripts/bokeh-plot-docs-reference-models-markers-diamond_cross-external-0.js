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
      };var element = document.getElementById("14db8993-1494-4815-b056-11b3e0f5d57c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '14db8993-1494-4815-b056-11b3e0f5d57c' but no matching script tag was found. ")
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
                var docs_json = {"8990248c-7496-4bcf-81eb-4eb5228af84e":{"roots":{"references":[{"attributes":{},"id":"145cbca1-ce6f-46f1-92ff-db7ce469597b","type":"LinearScale"},{"attributes":{},"id":"6987a443-694e-44c5-8825-0120cd6a1e6e","type":"LinearScale"},{"attributes":{"formatter":{"id":"deb47368-f9a5-4bbd-886d-0cf7e638da8c","type":"BasicTickFormatter"},"plot":{"id":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c","type":"Plot"},"ticker":{"id":"1772e67f-ea93-4064-acfd-9f62e64731a6","type":"BasicTicker"}},"id":"86f60488-2d59-4614-adc5-10c4070e021e","type":"LinearAxis"},{"attributes":{"below":[{"id":"86f60488-2d59-4614-adc5-10c4070e021e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e412d8a0-7df7-4644-8ef2-6ffc7cdc7b51","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"05de68d4-13f0-4e09-a995-cbcfbed19bc7","type":"GlyphRenderer"},{"id":"86f60488-2d59-4614-adc5-10c4070e021e","type":"LinearAxis"},{"id":"e412d8a0-7df7-4644-8ef2-6ffc7cdc7b51","type":"LinearAxis"},{"id":"71d37467-0ecb-4a5a-9a2b-9d3770023c3f","type":"Grid"},{"id":"ca2511b8-cd42-4fcc-a36b-c377fefa3d07","type":"Grid"}],"title":null,"tool_events":{"id":"773db9ae-a1cc-4672-b1d0-5e255b7888be","type":"ToolEvents"},"toolbar":{"id":"0d428451-d147-461d-8502-ad09b7c46f55","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fdeef3c2-cf72-427e-9b91-cdae86706154","type":"DataRange1d"},"x_scale":{"id":"145cbca1-ce6f-46f1-92ff-db7ce469597b","type":"LinearScale"},"y_range":{"id":"ea391ee7-0da9-4a24-b4ac-884200ed981f","type":"DataRange1d"},"y_scale":{"id":"6987a443-694e-44c5-8825-0120cd6a1e6e","type":"LinearScale"}},"id":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c","type":"Plot"},{"attributes":{"formatter":{"id":"e826aa9f-40e1-4f90-b69a-9ded3710d124","type":"BasicTickFormatter"},"plot":{"id":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c","type":"Plot"},"ticker":{"id":"dcbe2f0d-cb4a-4dfe-a7ae-8a8d90f8e6f8","type":"BasicTicker"}},"id":"e412d8a0-7df7-4644-8ef2-6ffc7cdc7b51","type":"LinearAxis"},{"attributes":{},"id":"deb47368-f9a5-4bbd-886d-0cf7e638da8c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9e84391a-be0c-48d1-888c-a09857f7f46f","type":"ColumnDataSource"},{"attributes":{},"id":"dcbe2f0d-cb4a-4dfe-a7ae-8a8d90f8e6f8","type":"BasicTicker"},{"attributes":{},"id":"1772e67f-ea93-4064-acfd-9f62e64731a6","type":"BasicTicker"},{"attributes":{},"id":"773db9ae-a1cc-4672-b1d0-5e255b7888be","type":"ToolEvents"},{"attributes":{"plot":{"id":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c","type":"Plot"},"ticker":{"id":"1772e67f-ea93-4064-acfd-9f62e64731a6","type":"BasicTicker"}},"id":"71d37467-0ecb-4a5a-9a2b-9d3770023c3f","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13233249-efee-4476-8952-e192f0146ca4","type":"DiamondCross"},{"attributes":{"callback":null},"id":"fdeef3c2-cf72-427e-9b91-cdae86706154","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9e84391a-be0c-48d1-888c-a09857f7f46f","type":"ColumnDataSource"},"glyph":{"id":"13233249-efee-4476-8952-e192f0146ca4","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null},"id":"05de68d4-13f0-4e09-a995-cbcfbed19bc7","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c","type":"Plot"},"ticker":{"id":"dcbe2f0d-cb4a-4dfe-a7ae-8a8d90f8e6f8","type":"BasicTicker"}},"id":"ca2511b8-cd42-4fcc-a36b-c377fefa3d07","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0d428451-d147-461d-8502-ad09b7c46f55","type":"Toolbar"},{"attributes":{"callback":null},"id":"ea391ee7-0da9-4a24-b4ac-884200ed981f","type":"DataRange1d"},{"attributes":{},"id":"e826aa9f-40e1-4f90-b69a-9ded3710d124","type":"BasicTickFormatter"}],"root_ids":["06f6888f-bdc8-4dfb-90ae-da447cab4d3c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"8990248c-7496-4bcf-81eb-4eb5228af84e","elementid":"14db8993-1494-4815-b056-11b3e0f5d57c","modelid":"06f6888f-bdc8-4dfb-90ae-da447cab4d3c"}];
                
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
