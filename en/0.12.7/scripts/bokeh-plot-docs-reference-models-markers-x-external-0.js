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
      };var element = document.getElementById("54b63b2a-48eb-488a-852a-5a65c8266cf4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54b63b2a-48eb-488a-852a-5a65c8266cf4' but no matching script tag was found. ")
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
                var docs_json = {"278794d7-fdff-43cb-9c5a-a0fd720f3da2":{"roots":{"references":[{"attributes":{},"id":"c531e5ec-4069-4a3b-8b2b-3099b3c6ee8c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe","type":"Plot"},"ticker":{"id":"c531e5ec-4069-4a3b-8b2b-3099b3c6ee8c","type":"BasicTicker"}},"id":"d2343ead-6bb8-4207-a5b6-a351626f5904","type":"Grid"},{"attributes":{"callback":null},"id":"68bd3a6d-39ba-4ad4-b574-c5418dd657a0","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1583606e-5b31-4f50-ad9b-2ec6a20d6c2c","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"352ef70e-c81c-47bd-bf71-9a80a01e2766","type":"X"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"6736ec0a-6d1e-4a16-988b-cb3111ecc6de","type":"ColumnDataSource"},{"attributes":{},"id":"61763e60-9fd5-412c-80ba-a710ef8ea98d","type":"LinearScale"},{"attributes":{"callback":null},"id":"9e7f379c-b71a-4943-8635-75211e2e1140","type":"DataRange1d"},{"attributes":{"formatter":{"id":"aa23f501-b623-4109-9199-8fe311df4feb","type":"BasicTickFormatter"},"plot":{"id":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe","type":"Plot"},"ticker":{"id":"6c80ef0d-1cd0-4a22-947f-5d80ce00b08d","type":"BasicTicker"}},"id":"808e7297-b1b9-4948-9307-c95069eb8a87","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ae1c7af1-336a-4509-a905-617d9abeb60f","type":"BasicTickFormatter"},"plot":{"id":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe","type":"Plot"},"ticker":{"id":"c531e5ec-4069-4a3b-8b2b-3099b3c6ee8c","type":"BasicTicker"}},"id":"797f909c-1471-433f-8965-629a3fe244e3","type":"LinearAxis"},{"attributes":{},"id":"fafdaec4-f53c-4a44-9081-0a2bede8f549","type":"LinearScale"},{"attributes":{"below":[{"id":"808e7297-b1b9-4948-9307-c95069eb8a87","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"797f909c-1471-433f-8965-629a3fe244e3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"32b641eb-f229-458b-8390-775d1f75812b","type":"GlyphRenderer"},{"id":"808e7297-b1b9-4948-9307-c95069eb8a87","type":"LinearAxis"},{"id":"797f909c-1471-433f-8965-629a3fe244e3","type":"LinearAxis"},{"id":"1ce1d6be-d5c1-4788-a158-ad14f5e95d82","type":"Grid"},{"id":"d2343ead-6bb8-4207-a5b6-a351626f5904","type":"Grid"}],"title":null,"toolbar":{"id":"1583606e-5b31-4f50-ad9b-2ec6a20d6c2c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"68bd3a6d-39ba-4ad4-b574-c5418dd657a0","type":"DataRange1d"},"x_scale":{"id":"61763e60-9fd5-412c-80ba-a710ef8ea98d","type":"LinearScale"},"y_range":{"id":"9e7f379c-b71a-4943-8635-75211e2e1140","type":"DataRange1d"},"y_scale":{"id":"fafdaec4-f53c-4a44-9081-0a2bede8f549","type":"LinearScale"}},"id":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe","type":"Plot"},{"attributes":{},"id":"6c80ef0d-1cd0-4a22-947f-5d80ce00b08d","type":"BasicTicker"},{"attributes":{"plot":{"id":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe","type":"Plot"},"ticker":{"id":"6c80ef0d-1cd0-4a22-947f-5d80ce00b08d","type":"BasicTicker"}},"id":"1ce1d6be-d5c1-4788-a158-ad14f5e95d82","type":"Grid"},{"attributes":{},"id":"aa23f501-b623-4109-9199-8fe311df4feb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6736ec0a-6d1e-4a16-988b-cb3111ecc6de","type":"ColumnDataSource"},"glyph":{"id":"352ef70e-c81c-47bd-bf71-9a80a01e2766","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"57f4cbb7-c9da-4720-bcf4-b82b3a583bf4","type":"CDSView"}},"id":"32b641eb-f229-458b-8390-775d1f75812b","type":"GlyphRenderer"},{"attributes":{},"id":"ae1c7af1-336a-4509-a905-617d9abeb60f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6736ec0a-6d1e-4a16-988b-cb3111ecc6de","type":"ColumnDataSource"}},"id":"57f4cbb7-c9da-4720-bcf4-b82b3a583bf4","type":"CDSView"}],"root_ids":["4a1d4413-b3f0-4473-ba93-7a0d271ed8fe"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"278794d7-fdff-43cb-9c5a-a0fd720f3da2","elementid":"54b63b2a-48eb-488a-852a-5a65c8266cf4","modelid":"4a1d4413-b3f0-4473-ba93-7a0d271ed8fe"}];
                
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
