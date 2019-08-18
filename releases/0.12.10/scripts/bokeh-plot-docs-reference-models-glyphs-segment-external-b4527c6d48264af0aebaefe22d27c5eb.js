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
      };var element = document.getElementById("650b28a6-e1e7-4b26-bfe9-9381793c7351");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '650b28a6-e1e7-4b26-bfe9-9381793c7351' but no matching script tag was found. ")
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
                    var docs_json = {"958413ed-bb9c-4b60-bded-60abff990e83":{"roots":{"references":[{"attributes":{},"id":"678a5288-52fe-4733-8031-f94f2b2c7f2c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"746fd544-4b7f-450e-924c-cd41edae228f","type":"ColumnDataSource"},"glyph":{"id":"b683ffba-83d3-4465-b787-e7bc3967b38e","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fe23cf52-d7fa-4742-85d3-86bcc8cbee9c","type":"CDSView"}},"id":"661b13d9-3c55-4309-a605-157d6ed4b278","type":"GlyphRenderer"},{"attributes":{"source":{"id":"746fd544-4b7f-450e-924c-cd41edae228f","type":"ColumnDataSource"}},"id":"fe23cf52-d7fa-4742-85d3-86bcc8cbee9c","type":"CDSView"},{"attributes":{},"id":"495cbe7c-da71-483e-a027-ff88e3430788","type":"LinearScale"},{"attributes":{"callback":null},"id":"dcaa52ec-6049-46b9-8162-342f198735bf","type":"DataRange1d"},{"attributes":{"plot":{"id":"2857277a-618b-4e41-96e9-76ac3a993b31","type":"Plot"},"ticker":{"id":"21286f4c-22f7-4a99-a1cf-536bdcbca2f3","type":"BasicTicker"}},"id":"21a21c2f-e28c-4822-8971-57bb89162c8f","type":"Grid"},{"attributes":{"formatter":{"id":"678a5288-52fe-4733-8031-f94f2b2c7f2c","type":"BasicTickFormatter"},"plot":{"id":"2857277a-618b-4e41-96e9-76ac3a993b31","type":"Plot"},"ticker":{"id":"21286f4c-22f7-4a99-a1cf-536bdcbca2f3","type":"BasicTicker"}},"id":"ac861e2b-76c5-4810-8748-c7d7999079c4","type":"LinearAxis"},{"attributes":{"below":[{"id":"ac861e2b-76c5-4810-8748-c7d7999079c4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"69529fad-6c30-4aba-a582-65f35ee2e8c9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"661b13d9-3c55-4309-a605-157d6ed4b278","type":"GlyphRenderer"},{"id":"ac861e2b-76c5-4810-8748-c7d7999079c4","type":"LinearAxis"},{"id":"69529fad-6c30-4aba-a582-65f35ee2e8c9","type":"LinearAxis"},{"id":"21a21c2f-e28c-4822-8971-57bb89162c8f","type":"Grid"},{"id":"3b014a77-7a32-43c5-88e9-8d0468a61f3c","type":"Grid"}],"title":null,"toolbar":{"id":"edf607cd-fc9e-4824-9680-6a66c0e4dfd7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"64f6c509-c8ee-478d-9415-888d2dda4509","type":"DataRange1d"},"x_scale":{"id":"495cbe7c-da71-483e-a027-ff88e3430788","type":"LinearScale"},"y_range":{"id":"dcaa52ec-6049-46b9-8162-342f198735bf","type":"DataRange1d"},"y_scale":{"id":"636189d6-87ad-4fcd-b15e-45421f80a70c","type":"LinearScale"}},"id":"2857277a-618b-4e41-96e9-76ac3a993b31","type":"Plot"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"b683ffba-83d3-4465-b787-e7bc3967b38e","type":"Segment"},{"attributes":{},"id":"379370ea-9340-4c59-8ba4-42b9afc28ada","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"edf607cd-fc9e-4824-9680-6a66c0e4dfd7","type":"Toolbar"},{"attributes":{"callback":null},"id":"64f6c509-c8ee-478d-9415-888d2dda4509","type":"DataRange1d"},{"attributes":{"formatter":{"id":"379370ea-9340-4c59-8ba4-42b9afc28ada","type":"BasicTickFormatter"},"plot":{"id":"2857277a-618b-4e41-96e9-76ac3a993b31","type":"Plot"},"ticker":{"id":"3f4214a9-088b-48fe-b453-1541743ea36e","type":"BasicTicker"}},"id":"69529fad-6c30-4aba-a582-65f35ee2e8c9","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"2857277a-618b-4e41-96e9-76ac3a993b31","type":"Plot"},"ticker":{"id":"3f4214a9-088b-48fe-b453-1541743ea36e","type":"BasicTicker"}},"id":"3b014a77-7a32-43c5-88e9-8d0468a61f3c","type":"Grid"},{"attributes":{},"id":"21286f4c-22f7-4a99-a1cf-536bdcbca2f3","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","xm01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"746fd544-4b7f-450e-924c-cd41edae228f","type":"ColumnDataSource"},{"attributes":{},"id":"3f4214a9-088b-48fe-b453-1541743ea36e","type":"BasicTicker"},{"attributes":{},"id":"636189d6-87ad-4fcd-b15e-45421f80a70c","type":"LinearScale"}],"root_ids":["2857277a-618b-4e41-96e9-76ac3a993b31"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"958413ed-bb9c-4b60-bded-60abff990e83","elementid":"650b28a6-e1e7-4b26-bfe9-9381793c7351","modelid":"2857277a-618b-4e41-96e9-76ac3a993b31"}];
                
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
