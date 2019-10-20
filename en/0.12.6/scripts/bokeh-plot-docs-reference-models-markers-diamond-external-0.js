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
      };var element = document.getElementById("fbc13a0b-474c-4732-9839-9acc76fdf511");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fbc13a0b-474c-4732-9839-9acc76fdf511' but no matching script tag was found. ")
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
                var docs_json = {"3128d9b9-f45c-44cf-a483-b44ff48ccec3":{"roots":{"references":[{"attributes":{"callback":null},"id":"8e9fc579-2ee3-48c2-9689-d5f91e337966","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab","type":"Plot"},"ticker":{"id":"8746054d-3903-4fbf-b855-116acc054d25","type":"BasicTicker"}},"id":"e437558c-b672-45d1-b65f-c162c7593718","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"63010b2b-45c7-496f-b83b-de59f4be46c7","type":"ColumnDataSource"},{"attributes":{},"id":"dcd2310d-e13b-434e-83c8-aea0530cc6c5","type":"BasicTickFormatter"},{"attributes":{},"id":"8746054d-3903-4fbf-b855-116acc054d25","type":"BasicTicker"},{"attributes":{"plot":{"id":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab","type":"Plot"},"ticker":{"id":"98148686-025f-42d2-a7c9-b2318f1496ce","type":"BasicTicker"}},"id":"30710413-6a3b-4cdf-9c84-27254bf26345","type":"Grid"},{"attributes":{"below":[{"id":"baf46c4a-ec6b-4784-8341-06c61fb8f9a6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fb6499f7-52ca-4a72-b1e2-e0082f0c3ee0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e12d2f16-b44d-4b5d-b1ba-c6776bcd0d6b","type":"GlyphRenderer"},{"id":"baf46c4a-ec6b-4784-8341-06c61fb8f9a6","type":"LinearAxis"},{"id":"fb6499f7-52ca-4a72-b1e2-e0082f0c3ee0","type":"LinearAxis"},{"id":"30710413-6a3b-4cdf-9c84-27254bf26345","type":"Grid"},{"id":"e437558c-b672-45d1-b65f-c162c7593718","type":"Grid"}],"title":null,"tool_events":{"id":"6583d47f-b786-47e0-b8a5-71bcf783d1e8","type":"ToolEvents"},"toolbar":{"id":"59a17869-dfaa-4693-a985-35671a520762","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8e9fc579-2ee3-48c2-9689-d5f91e337966","type":"DataRange1d"},"x_scale":{"id":"3e099dd9-91ff-4d95-8ede-f16f947c43d9","type":"LinearScale"},"y_range":{"id":"67796a66-3e26-4001-a604-676e93bdf2e3","type":"DataRange1d"},"y_scale":{"id":"8471d1f1-a9f9-4754-b953-7797c35cf643","type":"LinearScale"}},"id":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab","type":"Plot"},{"attributes":{},"id":"98148686-025f-42d2-a7c9-b2318f1496ce","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"59a17869-dfaa-4693-a985-35671a520762","type":"Toolbar"},{"attributes":{"data_source":{"id":"63010b2b-45c7-496f-b83b-de59f4be46c7","type":"ColumnDataSource"},"glyph":{"id":"f785e4aa-a31c-447e-b045-775ce28efeb0","type":"Diamond"},"hover_glyph":null,"muted_glyph":null},"id":"e12d2f16-b44d-4b5d-b1ba-c6776bcd0d6b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f32ff2d1-1905-413d-ae95-4442f653b397","type":"BasicTickFormatter"},"plot":{"id":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab","type":"Plot"},"ticker":{"id":"8746054d-3903-4fbf-b855-116acc054d25","type":"BasicTicker"}},"id":"fb6499f7-52ca-4a72-b1e2-e0082f0c3ee0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"dcd2310d-e13b-434e-83c8-aea0530cc6c5","type":"BasicTickFormatter"},"plot":{"id":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab","type":"Plot"},"ticker":{"id":"98148686-025f-42d2-a7c9-b2318f1496ce","type":"BasicTicker"}},"id":"baf46c4a-ec6b-4784-8341-06c61fb8f9a6","type":"LinearAxis"},{"attributes":{},"id":"6583d47f-b786-47e0-b8a5-71bcf783d1e8","type":"ToolEvents"},{"attributes":{},"id":"3e099dd9-91ff-4d95-8ede-f16f947c43d9","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f785e4aa-a31c-447e-b045-775ce28efeb0","type":"Diamond"},{"attributes":{"callback":null},"id":"67796a66-3e26-4001-a604-676e93bdf2e3","type":"DataRange1d"},{"attributes":{},"id":"8471d1f1-a9f9-4754-b953-7797c35cf643","type":"LinearScale"},{"attributes":{},"id":"f32ff2d1-1905-413d-ae95-4442f653b397","type":"BasicTickFormatter"}],"root_ids":["3287c7a1-4cad-4b00-90ed-d403bcbcd3ab"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"3128d9b9-f45c-44cf-a483-b44ff48ccec3","elementid":"fbc13a0b-474c-4732-9839-9acc76fdf511","modelid":"3287c7a1-4cad-4b00-90ed-d403bcbcd3ab"}];
                
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
