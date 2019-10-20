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
      };var element = document.getElementById("eb655043-9365-4659-af0b-e7b90799bc92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb655043-9365-4659-af0b-e7b90799bc92' but no matching script tag was found. ")
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
                var docs_json = {"4d0e2417-3242-404a-a58a-843e92bd9d9b":{"roots":{"references":[{"attributes":{},"id":"658188f6-5a94-498e-a3e9-0c832934d5ce","type":"BasicTicker"},{"attributes":{"below":[{"id":"51be3390-99db-40cd-a42e-c4db8d692277","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a2cd8609-02a2-4fa9-88d4-e2fdcb432f31","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"66b9492e-8447-4be7-8810-56ae5f7a91b3","type":"GlyphRenderer"},{"id":"51be3390-99db-40cd-a42e-c4db8d692277","type":"LinearAxis"},{"id":"a2cd8609-02a2-4fa9-88d4-e2fdcb432f31","type":"LinearAxis"},{"id":"0c1bc032-e4cf-45e9-bae8-6a7bb7e9ecb5","type":"Grid"},{"id":"010b5698-b44c-4168-80af-c2967d8456a7","type":"Grid"}],"title":null,"toolbar":{"id":"2966c7d4-1e7d-4c5b-8bf7-3f44dd6e5a2b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"60f29977-386c-4b08-b75e-13fcdbe16a66","type":"DataRange1d"},"x_scale":{"id":"9dc0fc58-62a2-4149-a81e-dcd6310bd0fb","type":"LinearScale"},"y_range":{"id":"ba91a40f-d657-455b-a097-b0d5baffb293","type":"DataRange1d"},"y_scale":{"id":"84d295a2-c38a-4ee3-8655-cae34ac992b4","type":"LinearScale"}},"id":"18cab7c1-26e0-4931-902d-758776df1a73","type":"Plot"},{"attributes":{"callback":null},"id":"60f29977-386c-4b08-b75e-13fcdbe16a66","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ba91a40f-d657-455b-a097-b0d5baffb293","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f06e3f41-b8e2-4350-bf27-efa107f0f8d1","type":"BasicTickFormatter"},"plot":{"id":"18cab7c1-26e0-4931-902d-758776df1a73","type":"Plot"},"ticker":{"id":"658188f6-5a94-498e-a3e9-0c832934d5ce","type":"BasicTicker"}},"id":"51be3390-99db-40cd-a42e-c4db8d692277","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2842b44-de3a-456c-b007-4e5bab4f5512","type":"Asterisk"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2966c7d4-1e7d-4c5b-8bf7-3f44dd6e5a2b","type":"Toolbar"},{"attributes":{},"id":"f06e3f41-b8e2-4350-bf27-efa107f0f8d1","type":"BasicTickFormatter"},{"attributes":{},"id":"84d295a2-c38a-4ee3-8655-cae34ac992b4","type":"LinearScale"},{"attributes":{},"id":"35f52b23-53cd-4e8d-9ffa-bdc213115b84","type":"BasicTickFormatter"},{"attributes":{},"id":"83f34ed5-f4eb-4f77-8631-ac049a3f4309","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ce48141f-8581-4f4a-95d2-ca857376d0ca","type":"ColumnDataSource"},"glyph":{"id":"f2842b44-de3a-456c-b007-4e5bab4f5512","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"33eda830-669e-4476-a3d0-ab2bdcaea6e4","type":"CDSView"}},"id":"66b9492e-8447-4be7-8810-56ae5f7a91b3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"18cab7c1-26e0-4931-902d-758776df1a73","type":"Plot"},"ticker":{"id":"658188f6-5a94-498e-a3e9-0c832934d5ce","type":"BasicTicker"}},"id":"0c1bc032-e4cf-45e9-bae8-6a7bb7e9ecb5","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"18cab7c1-26e0-4931-902d-758776df1a73","type":"Plot"},"ticker":{"id":"83f34ed5-f4eb-4f77-8631-ac049a3f4309","type":"BasicTicker"}},"id":"010b5698-b44c-4168-80af-c2967d8456a7","type":"Grid"},{"attributes":{"formatter":{"id":"35f52b23-53cd-4e8d-9ffa-bdc213115b84","type":"BasicTickFormatter"},"plot":{"id":"18cab7c1-26e0-4931-902d-758776df1a73","type":"Plot"},"ticker":{"id":"83f34ed5-f4eb-4f77-8631-ac049a3f4309","type":"BasicTicker"}},"id":"a2cd8609-02a2-4fa9-88d4-e2fdcb432f31","type":"LinearAxis"},{"attributes":{"source":{"id":"ce48141f-8581-4f4a-95d2-ca857376d0ca","type":"ColumnDataSource"}},"id":"33eda830-669e-4476-a3d0-ab2bdcaea6e4","type":"CDSView"},{"attributes":{},"id":"9dc0fc58-62a2-4149-a81e-dcd6310bd0fb","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ce48141f-8581-4f4a-95d2-ca857376d0ca","type":"ColumnDataSource"}],"root_ids":["18cab7c1-26e0-4931-902d-758776df1a73"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4d0e2417-3242-404a-a58a-843e92bd9d9b","elementid":"eb655043-9365-4659-af0b-e7b90799bc92","modelid":"18cab7c1-26e0-4931-902d-758776df1a73"}];
                
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
