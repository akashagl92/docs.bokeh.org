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
      };var element = document.getElementById("9282129c-5e71-45a8-9d46-8d5b1ce43367");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9282129c-5e71-45a8-9d46-8d5b1ce43367' but no matching script tag was found. ")
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
                    var docs_json = {"98a4148e-4c69-42e5-8d21-f2647771bfd9":{"roots":{"references":[{"attributes":{"callback":null},"id":"cf3eaade-3ed2-4008-b903-4f08a960680a","type":"DataRange1d"},{"attributes":{},"id":"87b2793a-45bb-4e54-b503-26d1d99656f1","type":"BasicTickFormatter"},{"attributes":{},"id":"12c8efb9-28ce-4d36-bbea-e9a33a678dd6","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ec2f76cf-9548-4fef-b148-af0591c0cb3e","type":"Toolbar"},{"attributes":{},"id":"75338251-1101-47fb-b776-de9c1c36d695","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c77612b1-468a-49de-bf90-2aa54486dbd2","type":"ColumnDataSource"},"glyph":{"id":"4c782e30-a85c-4308-9a06-641c7c0dfbb9","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3d941133-93ff-4901-b2c9-09ba074f5058","type":"CDSView"}},"id":"00f3635f-9766-4829-918d-a1f78d31ce26","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c782e30-a85c-4308-9a06-641c7c0dfbb9","type":"X"},{"attributes":{"formatter":{"id":"87b2793a-45bb-4e54-b503-26d1d99656f1","type":"BasicTickFormatter"},"plot":{"id":"616b2e95-4b26-48e3-9596-63db99509a02","type":"Plot"},"ticker":{"id":"5cf018c6-342b-4cc8-a4a5-67c9d950c7c1","type":"BasicTicker"}},"id":"55dbe41d-b1f0-4808-bb3b-fcb7f06ef6ee","type":"LinearAxis"},{"attributes":{"formatter":{"id":"110418f5-453b-439a-8adc-18ee67c04d7b","type":"BasicTickFormatter"},"plot":{"id":"616b2e95-4b26-48e3-9596-63db99509a02","type":"Plot"},"ticker":{"id":"75338251-1101-47fb-b776-de9c1c36d695","type":"BasicTicker"}},"id":"d11fd984-63c4-477d-abd6-50163fbed4c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"343ea6b9-d655-4b74-b20e-0bd47a5a112d","type":"DataRange1d"},{"attributes":{},"id":"30b1e2bd-cdaf-4a60-a635-ab7f230995ec","type":"LinearScale"},{"attributes":{"source":{"id":"c77612b1-468a-49de-bf90-2aa54486dbd2","type":"ColumnDataSource"}},"id":"3d941133-93ff-4901-b2c9-09ba074f5058","type":"CDSView"},{"attributes":{},"id":"5cf018c6-342b-4cc8-a4a5-67c9d950c7c1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"616b2e95-4b26-48e3-9596-63db99509a02","type":"Plot"},"ticker":{"id":"5cf018c6-342b-4cc8-a4a5-67c9d950c7c1","type":"BasicTicker"}},"id":"8f74a722-4c95-43f9-b7d3-833b681af619","type":"Grid"},{"attributes":{"plot":{"id":"616b2e95-4b26-48e3-9596-63db99509a02","type":"Plot"},"ticker":{"id":"75338251-1101-47fb-b776-de9c1c36d695","type":"BasicTicker"}},"id":"456021ae-ba14-47ca-a2f2-ece91ebed542","type":"Grid"},{"attributes":{},"id":"110418f5-453b-439a-8adc-18ee67c04d7b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d11fd984-63c4-477d-abd6-50163fbed4c9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"55dbe41d-b1f0-4808-bb3b-fcb7f06ef6ee","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"00f3635f-9766-4829-918d-a1f78d31ce26","type":"GlyphRenderer"},{"id":"d11fd984-63c4-477d-abd6-50163fbed4c9","type":"LinearAxis"},{"id":"55dbe41d-b1f0-4808-bb3b-fcb7f06ef6ee","type":"LinearAxis"},{"id":"456021ae-ba14-47ca-a2f2-ece91ebed542","type":"Grid"},{"id":"8f74a722-4c95-43f9-b7d3-833b681af619","type":"Grid"}],"title":null,"toolbar":{"id":"ec2f76cf-9548-4fef-b148-af0591c0cb3e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cf3eaade-3ed2-4008-b903-4f08a960680a","type":"DataRange1d"},"x_scale":{"id":"30b1e2bd-cdaf-4a60-a635-ab7f230995ec","type":"LinearScale"},"y_range":{"id":"343ea6b9-d655-4b74-b20e-0bd47a5a112d","type":"DataRange1d"},"y_scale":{"id":"12c8efb9-28ce-4d36-bbea-e9a33a678dd6","type":"LinearScale"}},"id":"616b2e95-4b26-48e3-9596-63db99509a02","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c77612b1-468a-49de-bf90-2aa54486dbd2","type":"ColumnDataSource"}],"root_ids":["616b2e95-4b26-48e3-9596-63db99509a02"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"98a4148e-4c69-42e5-8d21-f2647771bfd9","elementid":"9282129c-5e71-45a8-9d46-8d5b1ce43367","modelid":"616b2e95-4b26-48e3-9596-63db99509a02"}];
                
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
