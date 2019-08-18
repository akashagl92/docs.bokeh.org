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
      };var element = document.getElementById("49670cde-9367-47e8-b9d3-0577d5bc1559");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49670cde-9367-47e8-b9d3-0577d5bc1559' but no matching script tag was found. ")
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
                var docs_json = {"dc437ac7-b3d2-43f8-ad20-ae13ba10e263":{"roots":{"references":[{"attributes":{},"id":"393cb189-e1fb-4731-a0f0-bfd94248d15a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0","type":"Plot"},"ticker":{"id":"39ae8846-c1a5-48b6-a3c1-b3144ead164c","type":"BasicTicker"}},"id":"62f9dd6a-97ad-4f4e-9567-772ea7b9cc6f","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"367024f1-a35e-471a-ac36-e47b714a279e","type":"Toolbar"},{"attributes":{"below":[{"id":"95559e97-ed7e-4826-810f-cb5790460459","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6672e640-07b7-4de3-a823-ba11a0e56e5c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"647236e9-4535-48ce-87b0-9b6b4a5ac7c6","type":"GlyphRenderer"},{"id":"95559e97-ed7e-4826-810f-cb5790460459","type":"LinearAxis"},{"id":"6672e640-07b7-4de3-a823-ba11a0e56e5c","type":"LinearAxis"},{"id":"f352febb-da14-44ae-8a16-5b0f29bb2e5c","type":"Grid"},{"id":"62f9dd6a-97ad-4f4e-9567-772ea7b9cc6f","type":"Grid"}],"title":null,"toolbar":{"id":"367024f1-a35e-471a-ac36-e47b714a279e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cba5852f-2249-4cbc-bf47-ad950ac5d306","type":"DataRange1d"},"x_scale":{"id":"37f39f74-f229-4555-ba6d-a79be1fb6610","type":"LinearScale"},"y_range":{"id":"6ec3f2f7-37c7-45c6-a44c-f03dc43d7000","type":"DataRange1d"},"y_scale":{"id":"393cb189-e1fb-4731-a0f0-bfd94248d15a","type":"LinearScale"}},"id":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3623c8b6-d436-4e71-be69-62e8020404f4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"dc2ebd03-87a1-46c4-912b-243f46b10fd8","type":"BasicTickFormatter"},"plot":{"id":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0","type":"Plot"},"ticker":{"id":"39ae8846-c1a5-48b6-a3c1-b3144ead164c","type":"BasicTicker"}},"id":"6672e640-07b7-4de3-a823-ba11a0e56e5c","type":"LinearAxis"},{"attributes":{},"id":"5b713a70-d8b3-40b1-aff9-ffe7cb1a3ab4","type":"BasicTicker"},{"attributes":{"source":{"id":"3623c8b6-d436-4e71-be69-62e8020404f4","type":"ColumnDataSource"}},"id":"50a33301-ea62-4385-84fd-666f74c89328","type":"CDSView"},{"attributes":{"data_source":{"id":"3623c8b6-d436-4e71-be69-62e8020404f4","type":"ColumnDataSource"},"glyph":{"id":"b86440df-8571-4d21-b7e0-6ef0dccf9261","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"50a33301-ea62-4385-84fd-666f74c89328","type":"CDSView"}},"id":"647236e9-4535-48ce-87b0-9b6b4a5ac7c6","type":"GlyphRenderer"},{"attributes":{},"id":"37f39f74-f229-4555-ba6d-a79be1fb6610","type":"LinearScale"},{"attributes":{"plot":{"id":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0","type":"Plot"},"ticker":{"id":"5b713a70-d8b3-40b1-aff9-ffe7cb1a3ab4","type":"BasicTicker"}},"id":"f352febb-da14-44ae-8a16-5b0f29bb2e5c","type":"Grid"},{"attributes":{},"id":"39ae8846-c1a5-48b6-a3c1-b3144ead164c","type":"BasicTicker"},{"attributes":{},"id":"780c8ab4-d801-4e54-8881-a431c6a83c14","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"cba5852f-2249-4cbc-bf47-ad950ac5d306","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b86440df-8571-4d21-b7e0-6ef0dccf9261","type":"Square"},{"attributes":{"callback":null},"id":"6ec3f2f7-37c7-45c6-a44c-f03dc43d7000","type":"DataRange1d"},{"attributes":{},"id":"dc2ebd03-87a1-46c4-912b-243f46b10fd8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"780c8ab4-d801-4e54-8881-a431c6a83c14","type":"BasicTickFormatter"},"plot":{"id":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0","type":"Plot"},"ticker":{"id":"5b713a70-d8b3-40b1-aff9-ffe7cb1a3ab4","type":"BasicTicker"}},"id":"95559e97-ed7e-4826-810f-cb5790460459","type":"LinearAxis"}],"root_ids":["fb3f6d82-2d59-47bd-bce4-67b5b10533d0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"dc437ac7-b3d2-43f8-ad20-ae13ba10e263","elementid":"49670cde-9367-47e8-b9d3-0577d5bc1559","modelid":"fb3f6d82-2d59-47bd-bce4-67b5b10533d0"}];
                
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
