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
      };var element = document.getElementById("79c93328-76ab-4532-b8b9-ecda9e97f705");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79c93328-76ab-4532-b8b9-ecda9e97f705' but no matching script tag was found. ")
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
                    var docs_json = {"288c18b7-998c-48fc-bde4-dca0c310d667":{"roots":{"references":[{"attributes":{"plot":{"id":"3207a6c0-8724-4852-8049-0a0c5d2a59b4","type":"Plot"},"ticker":{"id":"dcf9b4ff-a15c-4932-bf68-3608f54c04b6","type":"BasicTicker"}},"id":"16ab383c-817b-4101-8401-01a455c0ec94","type":"Grid"},{"attributes":{"source":{"id":"c228c885-6a00-46c6-8091-70e89f877e74","type":"ColumnDataSource"}},"id":"d0e7aae7-bae1-48f1-b1ab-368270f78a67","type":"CDSView"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9eb6411-2e10-4ba1-8a83-898c5693c52d","type":"Annulus"},{"attributes":{},"id":"9cf8ba3a-599b-4595-93b0-246cd610b5d7","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6ad5f775-dc2d-4e27-a4b2-c9d455f715fc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b44c0eb3-7a8b-4afe-9315-62c4cb5f28f6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b0cd27b3-b2b7-47b0-bc56-1ebe46ad3667","type":"GlyphRenderer"},{"id":"6ad5f775-dc2d-4e27-a4b2-c9d455f715fc","type":"LinearAxis"},{"id":"b44c0eb3-7a8b-4afe-9315-62c4cb5f28f6","type":"LinearAxis"},{"id":"16ab383c-817b-4101-8401-01a455c0ec94","type":"Grid"},{"id":"ad594e79-5379-418a-8c61-9845cbaba055","type":"Grid"}],"title":null,"toolbar":{"id":"decee2df-f9c8-49de-bb74-43ac70c3db23","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"074d41bd-d3b4-45d2-8733-07bccd987f17","type":"DataRange1d"},"x_scale":{"id":"b24d3dc9-1a59-4dfb-825d-06a22d584d07","type":"LinearScale"},"y_range":{"id":"427568c0-b9ac-40f1-900a-dedf659d8a0b","type":"DataRange1d"},"y_scale":{"id":"1e10e2b5-ac73-4a54-bd15-dca549c5dcc8","type":"LinearScale"}},"id":"3207a6c0-8724-4852-8049-0a0c5d2a59b4","type":"Plot"},{"attributes":{},"id":"a5d4af70-2c2f-4489-a450-84f62705e13c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9b4acad7-5921-4058-8b29-a1255e2eb3da","type":"BasicTickFormatter"},"plot":{"id":"3207a6c0-8724-4852-8049-0a0c5d2a59b4","type":"Plot"},"ticker":{"id":"a5d4af70-2c2f-4489-a450-84f62705e13c","type":"BasicTicker"}},"id":"b44c0eb3-7a8b-4afe-9315-62c4cb5f28f6","type":"LinearAxis"},{"attributes":{},"id":"1e10e2b5-ac73-4a54-bd15-dca549c5dcc8","type":"LinearScale"},{"attributes":{"data_source":{"id":"c228c885-6a00-46c6-8091-70e89f877e74","type":"ColumnDataSource"},"glyph":{"id":"f9eb6411-2e10-4ba1-8a83-898c5693c52d","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d0e7aae7-bae1-48f1-b1ab-368270f78a67","type":"CDSView"}},"id":"b0cd27b3-b2b7-47b0-bc56-1ebe46ad3667","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"427568c0-b9ac-40f1-900a-dedf659d8a0b","type":"DataRange1d"},{"attributes":{},"id":"dcf9b4ff-a15c-4932-bf68-3608f54c04b6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3207a6c0-8724-4852-8049-0a0c5d2a59b4","type":"Plot"},"ticker":{"id":"a5d4af70-2c2f-4489-a450-84f62705e13c","type":"BasicTicker"}},"id":"ad594e79-5379-418a-8c61-9845cbaba055","type":"Grid"},{"attributes":{},"id":"9b4acad7-5921-4058-8b29-a1255e2eb3da","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"decee2df-f9c8-49de-bb74-43ac70c3db23","type":"Toolbar"},{"attributes":{},"id":"b24d3dc9-1a59-4dfb-825d-06a22d584d07","type":"LinearScale"},{"attributes":{"callback":null},"id":"074d41bd-d3b4-45d2-8733-07bccd987f17","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9cf8ba3a-599b-4595-93b0-246cd610b5d7","type":"BasicTickFormatter"},"plot":{"id":"3207a6c0-8724-4852-8049-0a0c5d2a59b4","type":"Plot"},"ticker":{"id":"dcf9b4ff-a15c-4932-bf68-3608f54c04b6","type":"BasicTicker"}},"id":"6ad5f775-dc2d-4e27-a4b2-c9d455f715fc","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c228c885-6a00-46c6-8091-70e89f877e74","type":"ColumnDataSource"}],"root_ids":["3207a6c0-8724-4852-8049-0a0c5d2a59b4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"288c18b7-998c-48fc-bde4-dca0c310d667","elementid":"79c93328-76ab-4532-b8b9-ecda9e97f705","modelid":"3207a6c0-8724-4852-8049-0a0c5d2a59b4"}];
                
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
