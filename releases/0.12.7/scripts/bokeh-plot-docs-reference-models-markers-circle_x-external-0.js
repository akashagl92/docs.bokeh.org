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
      };var element = document.getElementById("71960118-f917-4ac2-ab95-94b33fa98364");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71960118-f917-4ac2-ab95-94b33fa98364' but no matching script tag was found. ")
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
                var docs_json = {"024fc961-35ce-401d-a027-c6fd1a85dae2":{"roots":{"references":[{"attributes":{"callback":null},"id":"4ebc1c82-761f-4f2b-8e5d-c8c82dfc9a6d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"cebf7684-1e83-433c-aa67-b976f63bca4c","type":"BasicTickFormatter"},"plot":{"id":"7bb7c912-0b64-474a-86ff-f4289d91932f","type":"Plot"},"ticker":{"id":"238cd591-d902-4101-8bfa-e62edd454a4a","type":"BasicTicker"}},"id":"b592685a-459d-4312-a76a-635b6be73d2f","type":"LinearAxis"},{"attributes":{},"id":"0b4fc256-5049-4a2c-ba2c-e6a522d633b3","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7bb7c912-0b64-474a-86ff-f4289d91932f","type":"Plot"},"ticker":{"id":"238cd591-d902-4101-8bfa-e62edd454a4a","type":"BasicTicker"}},"id":"40f95f85-6ffd-4cf4-80b6-4a22357be950","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"891b0965-c3a2-4781-aef4-1443c633fb6e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"aa95968c-803a-441c-a4b0-c52bd6671d0f","type":"Toolbar"},{"attributes":{"plot":{"id":"7bb7c912-0b64-474a-86ff-f4289d91932f","type":"Plot"},"ticker":{"id":"4bff6148-c750-434e-a67a-8b68a02ec246","type":"BasicTicker"}},"id":"5c69da77-4884-412e-bb3d-4e1ee520269f","type":"Grid"},{"attributes":{"formatter":{"id":"e0ee0fd5-ba65-44a4-8f03-acc257c1b981","type":"BasicTickFormatter"},"plot":{"id":"7bb7c912-0b64-474a-86ff-f4289d91932f","type":"Plot"},"ticker":{"id":"4bff6148-c750-434e-a67a-8b68a02ec246","type":"BasicTicker"}},"id":"7b0e0077-1dd0-4416-975f-82921cdf0293","type":"LinearAxis"},{"attributes":{},"id":"4bff6148-c750-434e-a67a-8b68a02ec246","type":"BasicTicker"},{"attributes":{},"id":"e0ee0fd5-ba65-44a4-8f03-acc257c1b981","type":"BasicTickFormatter"},{"attributes":{},"id":"df7121a5-a0c4-44fa-a1c4-172a10069eb7","type":"LinearScale"},{"attributes":{"data_source":{"id":"891b0965-c3a2-4781-aef4-1443c633fb6e","type":"ColumnDataSource"},"glyph":{"id":"c43d043e-fdbf-4f35-9823-dcba43cf1fdb","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c8629d1c-cb1c-436b-8d70-4587f90602a2","type":"CDSView"}},"id":"e28208c3-1db9-41ef-8c35-d17c92c7675f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7b0e0077-1dd0-4416-975f-82921cdf0293","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b592685a-459d-4312-a76a-635b6be73d2f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e28208c3-1db9-41ef-8c35-d17c92c7675f","type":"GlyphRenderer"},{"id":"7b0e0077-1dd0-4416-975f-82921cdf0293","type":"LinearAxis"},{"id":"b592685a-459d-4312-a76a-635b6be73d2f","type":"LinearAxis"},{"id":"5c69da77-4884-412e-bb3d-4e1ee520269f","type":"Grid"},{"id":"40f95f85-6ffd-4cf4-80b6-4a22357be950","type":"Grid"}],"title":null,"toolbar":{"id":"aa95968c-803a-441c-a4b0-c52bd6671d0f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9e1271e4-1b46-449a-bfcf-0a03c4ce5d69","type":"DataRange1d"},"x_scale":{"id":"0b4fc256-5049-4a2c-ba2c-e6a522d633b3","type":"LinearScale"},"y_range":{"id":"4ebc1c82-761f-4f2b-8e5d-c8c82dfc9a6d","type":"DataRange1d"},"y_scale":{"id":"df7121a5-a0c4-44fa-a1c4-172a10069eb7","type":"LinearScale"}},"id":"7bb7c912-0b64-474a-86ff-f4289d91932f","type":"Plot"},{"attributes":{"source":{"id":"891b0965-c3a2-4781-aef4-1443c633fb6e","type":"ColumnDataSource"}},"id":"c8629d1c-cb1c-436b-8d70-4587f90602a2","type":"CDSView"},{"attributes":{},"id":"238cd591-d902-4101-8bfa-e62edd454a4a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c43d043e-fdbf-4f35-9823-dcba43cf1fdb","type":"CircleX"},{"attributes":{"callback":null},"id":"9e1271e4-1b46-449a-bfcf-0a03c4ce5d69","type":"DataRange1d"},{"attributes":{},"id":"cebf7684-1e83-433c-aa67-b976f63bca4c","type":"BasicTickFormatter"}],"root_ids":["7bb7c912-0b64-474a-86ff-f4289d91932f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"024fc961-35ce-401d-a027-c6fd1a85dae2","elementid":"71960118-f917-4ac2-ab95-94b33fa98364","modelid":"7bb7c912-0b64-474a-86ff-f4289d91932f"}];
                
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
