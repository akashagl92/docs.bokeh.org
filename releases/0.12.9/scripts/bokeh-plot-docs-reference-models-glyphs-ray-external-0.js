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
      };var element = document.getElementById("5cdba6ca-c1c0-4848-89f2-e9c953e0357c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5cdba6ca-c1c0-4848-89f2-e9c953e0357c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"462848be-405c-4785-a8cd-9a9223415fb1":{"roots":{"references":[{"attributes":{"below":[{"id":"1ce42c1a-8237-4bf8-b694-792d23d8397b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"96ccec9e-2162-4b0a-989b-c72d61fcf785","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"db758cca-1b7f-4f1f-a975-9cd2b8b2651b","type":"GlyphRenderer"},{"id":"1ce42c1a-8237-4bf8-b694-792d23d8397b","type":"LinearAxis"},{"id":"96ccec9e-2162-4b0a-989b-c72d61fcf785","type":"LinearAxis"},{"id":"7837d836-f3bb-4168-8578-b26db8610305","type":"Grid"},{"id":"9168c708-ab13-4151-ba20-a9816c3ef290","type":"Grid"}],"title":null,"toolbar":{"id":"4669822b-b6a0-4ab5-b181-7fa49761212e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"73012df5-135b-450e-aa83-381092081020","type":"DataRange1d"},"x_scale":{"id":"e137ccca-385e-4054-85b4-5dfc7469931c","type":"LinearScale"},"y_range":{"id":"8f21ecf6-dfed-4784-92fb-9b8ec5cba122","type":"DataRange1d"},"y_scale":{"id":"33781e93-bf8b-4a7f-8bcf-5634643b47df","type":"LinearScale"}},"id":"59c1baad-020a-461c-9829-432cd6918817","type":"Plot"},{"attributes":{},"id":"169c6921-a5fc-4d4f-979c-62ef684092c9","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"5200c23f-1ca7-440e-aeec-baa812124f12","type":"Ray"},{"attributes":{"source":{"id":"d23d1497-2126-464d-b00a-af0551336b37","type":"ColumnDataSource"}},"id":"b22cb1d7-6746-49e3-9606-cc97025a7a81","type":"CDSView"},{"attributes":{},"id":"79563161-caa0-4a13-89a6-95f6f77d761b","type":"BasicTicker"},{"attributes":{"plot":{"id":"59c1baad-020a-461c-9829-432cd6918817","type":"Plot"},"ticker":{"id":"79563161-caa0-4a13-89a6-95f6f77d761b","type":"BasicTicker"}},"id":"7837d836-f3bb-4168-8578-b26db8610305","type":"Grid"},{"attributes":{"callback":null},"id":"73012df5-135b-450e-aa83-381092081020","type":"DataRange1d"},{"attributes":{},"id":"56293d76-b369-4e26-9fb6-91afee706723","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"169c6921-a5fc-4d4f-979c-62ef684092c9","type":"BasicTickFormatter"},"plot":{"id":"59c1baad-020a-461c-9829-432cd6918817","type":"Plot"},"ticker":{"id":"79563161-caa0-4a13-89a6-95f6f77d761b","type":"BasicTicker"}},"id":"1ce42c1a-8237-4bf8-b694-792d23d8397b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8f21ecf6-dfed-4784-92fb-9b8ec5cba122","type":"DataRange1d"},{"attributes":{},"id":"e137ccca-385e-4054-85b4-5dfc7469931c","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","l"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"d23d1497-2126-464d-b00a-af0551336b37","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d23d1497-2126-464d-b00a-af0551336b37","type":"ColumnDataSource"},"glyph":{"id":"5200c23f-1ca7-440e-aeec-baa812124f12","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b22cb1d7-6746-49e3-9606-cc97025a7a81","type":"CDSView"}},"id":"db758cca-1b7f-4f1f-a975-9cd2b8b2651b","type":"GlyphRenderer"},{"attributes":{},"id":"be0f64d6-a609-4912-8076-97f39ef927ee","type":"BasicTicker"},{"attributes":{"formatter":{"id":"56293d76-b369-4e26-9fb6-91afee706723","type":"BasicTickFormatter"},"plot":{"id":"59c1baad-020a-461c-9829-432cd6918817","type":"Plot"},"ticker":{"id":"be0f64d6-a609-4912-8076-97f39ef927ee","type":"BasicTicker"}},"id":"96ccec9e-2162-4b0a-989b-c72d61fcf785","type":"LinearAxis"},{"attributes":{},"id":"33781e93-bf8b-4a7f-8bcf-5634643b47df","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"59c1baad-020a-461c-9829-432cd6918817","type":"Plot"},"ticker":{"id":"be0f64d6-a609-4912-8076-97f39ef927ee","type":"BasicTicker"}},"id":"9168c708-ab13-4151-ba20-a9816c3ef290","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4669822b-b6a0-4ab5-b181-7fa49761212e","type":"Toolbar"}],"root_ids":["59c1baad-020a-461c-9829-432cd6918817"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"462848be-405c-4785-a8cd-9a9223415fb1","elementid":"5cdba6ca-c1c0-4848-89f2-e9c953e0357c","modelid":"59c1baad-020a-461c-9829-432cd6918817"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
