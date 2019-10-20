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
      };var element = document.getElementById("265d025a-2033-4696-9dcb-0fb23d2adb88");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '265d025a-2033-4696-9dcb-0fb23d2adb88' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"2da266f0-ceed-4f26-a160-a242c2a9aac1":{"roots":{"references":[{"attributes":{},"id":"069e1b10-43ac-4e06-a1b8-c74de01ab47c","type":"BasicTickFormatter"},{"attributes":{},"id":"4a03b8a8-57ce-4661-a6b3-d7d7a519a520","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"532e67dc-5988-47c8-b6c3-70e7a2bfc6e5","type":"Toolbar"},{"attributes":{"callback":null},"id":"c2915e3e-4fd9-42fd-92b5-abb29d7468ed","type":"DataRange1d"},{"attributes":{"below":[{"id":"566014b3-5428-4962-88e0-0aae723b9aca","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"64c4fe56-cafa-4bca-a7fe-054633087d08","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0b37e5a2-849d-483f-b0ac-c1f0949380bf","type":"GlyphRenderer"},{"id":"566014b3-5428-4962-88e0-0aae723b9aca","type":"LinearAxis"},{"id":"64c4fe56-cafa-4bca-a7fe-054633087d08","type":"LinearAxis"},{"id":"0534199a-ef46-4d8e-b776-a813d607466a","type":"Grid"},{"id":"7cc72b1c-1697-44b5-8b7e-efed49b0df34","type":"Grid"}],"title":null,"toolbar":{"id":"532e67dc-5988-47c8-b6c3-70e7a2bfc6e5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c2915e3e-4fd9-42fd-92b5-abb29d7468ed","type":"DataRange1d"},"x_scale":{"id":"5489a259-2427-454f-8893-42239dd3b1ae","type":"LinearScale"},"y_range":{"id":"4de17101-9222-444b-b308-b114cec7bc8f","type":"DataRange1d"},"y_scale":{"id":"4a03b8a8-57ce-4661-a6b3-d7d7a519a520","type":"LinearScale"}},"id":"6e3cf86a-599f-4cc5-a108-060d768c0d3b","type":"Plot"},{"attributes":{"source":{"id":"cb0c2a01-7e56-407e-810f-03078ad3ba21","type":"ColumnDataSource"}},"id":"30bc8bec-856c-4f80-beb7-51679f4ce299","type":"CDSView"},{"attributes":{},"id":"dbd1ce0f-eb87-4972-ae2c-3efbe4e5248a","type":"BasicTickFormatter"},{"attributes":{},"id":"5489a259-2427-454f-8893-42239dd3b1ae","type":"LinearScale"},{"attributes":{"data_source":{"id":"cb0c2a01-7e56-407e-810f-03078ad3ba21","type":"ColumnDataSource"},"glyph":{"id":"fb04aa78-0a7e-4651-9e2c-e3d3793332ed","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30bc8bec-856c-4f80-beb7-51679f4ce299","type":"CDSView"}},"id":"0b37e5a2-849d-483f-b0ac-c1f0949380bf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"cb0c2a01-7e56-407e-810f-03078ad3ba21","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"dbd1ce0f-eb87-4972-ae2c-3efbe4e5248a","type":"BasicTickFormatter"},"plot":{"id":"6e3cf86a-599f-4cc5-a108-060d768c0d3b","type":"Plot"},"ticker":{"id":"820c4973-9667-4084-a88a-a2f8112ba8c9","type":"BasicTicker"}},"id":"64c4fe56-cafa-4bca-a7fe-054633087d08","type":"LinearAxis"},{"attributes":{},"id":"592e742b-1e62-47a0-8a5a-91a9f6097784","type":"BasicTicker"},{"attributes":{"plot":{"id":"6e3cf86a-599f-4cc5-a108-060d768c0d3b","type":"Plot"},"ticker":{"id":"592e742b-1e62-47a0-8a5a-91a9f6097784","type":"BasicTicker"}},"id":"0534199a-ef46-4d8e-b776-a813d607466a","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"6e3cf86a-599f-4cc5-a108-060d768c0d3b","type":"Plot"},"ticker":{"id":"820c4973-9667-4084-a88a-a2f8112ba8c9","type":"BasicTicker"}},"id":"7cc72b1c-1697-44b5-8b7e-efed49b0df34","type":"Grid"},{"attributes":{"formatter":{"id":"069e1b10-43ac-4e06-a1b8-c74de01ab47c","type":"BasicTickFormatter"},"plot":{"id":"6e3cf86a-599f-4cc5-a108-060d768c0d3b","type":"Plot"},"ticker":{"id":"592e742b-1e62-47a0-8a5a-91a9f6097784","type":"BasicTicker"}},"id":"566014b3-5428-4962-88e0-0aae723b9aca","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4de17101-9222-444b-b308-b114cec7bc8f","type":"DataRange1d"},{"attributes":{},"id":"820c4973-9667-4084-a88a-a2f8112ba8c9","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb04aa78-0a7e-4651-9e2c-e3d3793332ed","type":"Rect"}],"root_ids":["6e3cf86a-599f-4cc5-a108-060d768c0d3b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2da266f0-ceed-4f26-a160-a242c2a9aac1","elementid":"265d025a-2033-4696-9dcb-0fb23d2adb88","modelid":"6e3cf86a-599f-4cc5-a108-060d768c0d3b"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
