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
      };var element = document.getElementById("c33158c0-b693-4f5e-9f56-c7fd92e0ef86");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c33158c0-b693-4f5e-9f56-c7fd92e0ef86' but no matching script tag was found. ")
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
                    var docs_json = {"201e4117-f4de-4b8e-becf-a17881d09ff1":{"roots":{"references":[{"attributes":{"formatter":{"id":"d7befd19-d1d2-4236-82b1-379259f3cd35","type":"BasicTickFormatter"},"plot":{"id":"7e701825-eb43-4c0d-a9df-66a47744da56","type":"Plot"},"ticker":{"id":"8309990c-e6e2-438f-a87e-b295ffce039a","type":"BasicTicker"}},"id":"f0bfd407-306c-4aa7-b5b8-d167ec07a4a0","type":"LinearAxis"},{"attributes":{"plot":{"id":"7e701825-eb43-4c0d-a9df-66a47744da56","type":"Plot"},"ticker":{"id":"8309990c-e6e2-438f-a87e-b295ffce039a","type":"BasicTicker"}},"id":"b77d830f-b623-462c-897a-a20558e0a313","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2a7fca03-b6d9-4ccb-b0f7-18cc24698888","type":"Toolbar"},{"attributes":{"source":{"id":"4afbf948-2a99-4a75-a37c-a9e944a694d1","type":"ColumnDataSource"}},"id":"c78c6695-fa3b-408d-b87f-8ed9a1d45928","type":"CDSView"},{"attributes":{"data_source":{"id":"4afbf948-2a99-4a75-a37c-a9e944a694d1","type":"ColumnDataSource"},"glyph":{"id":"500781ac-9148-4002-ae1b-7e43c8a824be","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c78c6695-fa3b-408d-b87f-8ed9a1d45928","type":"CDSView"}},"id":"fbeed7f4-d5f2-49be-ab91-e44d7d58a0d5","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"500781ac-9148-4002-ae1b-7e43c8a824be","type":"InvertedTriangle"},{"attributes":{},"id":"8309990c-e6e2-438f-a87e-b295ffce039a","type":"BasicTicker"},{"attributes":{},"id":"d8ff9aac-b356-462d-b58d-04ebfc19acae","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"4afbf948-2a99-4a75-a37c-a9e944a694d1","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"111b9012-40f4-4f28-8845-5a52ef5515aa","type":"DataRange1d"},{"attributes":{"below":[{"id":"f0bfd407-306c-4aa7-b5b8-d167ec07a4a0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"43db04a3-0382-4d2a-a745-19fc31b818fa","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fbeed7f4-d5f2-49be-ab91-e44d7d58a0d5","type":"GlyphRenderer"},{"id":"f0bfd407-306c-4aa7-b5b8-d167ec07a4a0","type":"LinearAxis"},{"id":"43db04a3-0382-4d2a-a745-19fc31b818fa","type":"LinearAxis"},{"id":"b77d830f-b623-462c-897a-a20558e0a313","type":"Grid"},{"id":"de3fa679-cec7-46b1-8aa4-8c4d0bc54053","type":"Grid"}],"title":null,"toolbar":{"id":"2a7fca03-b6d9-4ccb-b0f7-18cc24698888","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8fdc707b-f39b-4539-a0f9-cf6a769a8493","type":"DataRange1d"},"x_scale":{"id":"4bb0b729-6d27-4816-9e62-2be2c4b1e7b5","type":"LinearScale"},"y_range":{"id":"111b9012-40f4-4f28-8845-5a52ef5515aa","type":"DataRange1d"},"y_scale":{"id":"406a4bca-486e-4241-9ff7-fec5afd55ab0","type":"LinearScale"}},"id":"7e701825-eb43-4c0d-a9df-66a47744da56","type":"Plot"},{"attributes":{},"id":"406a4bca-486e-4241-9ff7-fec5afd55ab0","type":"LinearScale"},{"attributes":{"formatter":{"id":"4aa507e8-329f-4d59-969b-7c4ba8be1131","type":"BasicTickFormatter"},"plot":{"id":"7e701825-eb43-4c0d-a9df-66a47744da56","type":"Plot"},"ticker":{"id":"d8ff9aac-b356-462d-b58d-04ebfc19acae","type":"BasicTicker"}},"id":"43db04a3-0382-4d2a-a745-19fc31b818fa","type":"LinearAxis"},{"attributes":{},"id":"4bb0b729-6d27-4816-9e62-2be2c4b1e7b5","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7e701825-eb43-4c0d-a9df-66a47744da56","type":"Plot"},"ticker":{"id":"d8ff9aac-b356-462d-b58d-04ebfc19acae","type":"BasicTicker"}},"id":"de3fa679-cec7-46b1-8aa4-8c4d0bc54053","type":"Grid"},{"attributes":{},"id":"4aa507e8-329f-4d59-969b-7c4ba8be1131","type":"BasicTickFormatter"},{"attributes":{},"id":"d7befd19-d1d2-4236-82b1-379259f3cd35","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8fdc707b-f39b-4539-a0f9-cf6a769a8493","type":"DataRange1d"}],"root_ids":["7e701825-eb43-4c0d-a9df-66a47744da56"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"201e4117-f4de-4b8e-becf-a17881d09ff1","elementid":"c33158c0-b693-4f5e-9f56-c7fd92e0ef86","modelid":"7e701825-eb43-4c0d-a9df-66a47744da56"}];
                
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
