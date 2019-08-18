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
      };var element = document.getElementById("76957d50-e257-4936-90bf-9fbdfc276fe1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '76957d50-e257-4936-90bf-9fbdfc276fe1' but no matching script tag was found. ")
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
                    var docs_json = {"61a39882-ce38-44f6-8a2c-79a15b7bc865":{"roots":{"references":[{"attributes":{},"id":"c7408cee-b855-49b1-9537-92f24fa1e364","type":"LinearScale"},{"attributes":{"plot":{"id":"9bd61148-f5ff-45d7-9605-43288b0d11fc","type":"Plot"},"ticker":{"id":"de7a51a1-fe38-4988-b6d2-246b7dac6103","type":"BasicTicker"}},"id":"4c53df8d-7566-4e78-8de3-301ef441947f","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aeca7261-9a48-4549-831a-d5c67edb0590","type":"Triangle"},{"attributes":{},"id":"156668ad-ebfe-4dec-addd-858cc92b0dcb","type":"BasicTickFormatter"},{"attributes":{},"id":"93712822-7d51-407a-8b2a-d4a805cd39ba","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"93712822-7d51-407a-8b2a-d4a805cd39ba","type":"BasicTickFormatter"},"plot":{"id":"9bd61148-f5ff-45d7-9605-43288b0d11fc","type":"Plot"},"ticker":{"id":"de7a51a1-fe38-4988-b6d2-246b7dac6103","type":"BasicTicker"}},"id":"122b8544-d788-479d-824e-748f5c51d410","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a904d393-cef8-4349-b781-a578c15d34a3","type":"Toolbar"},{"attributes":{"data_source":{"id":"bb85f3b8-a475-4d91-accf-4c3d50be5b9c","type":"ColumnDataSource"},"glyph":{"id":"aeca7261-9a48-4549-831a-d5c67edb0590","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5937de78-2307-4b0d-a741-04581e162643","type":"CDSView"}},"id":"eef95f58-5c1a-4fe0-90ac-c33c0d9631cd","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7aeb0bdc-d6b2-4cdf-ba55-273d45f4e24f","type":"DataRange1d"},{"attributes":{},"id":"de7a51a1-fe38-4988-b6d2-246b7dac6103","type":"BasicTicker"},{"attributes":{"callback":null},"id":"97479681-ef99-4f7f-a25c-8ef895f1bbd2","type":"DataRange1d"},{"attributes":{"below":[{"id":"122b8544-d788-479d-824e-748f5c51d410","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"de87819d-6f8f-4b06-8a67-99292c155e19","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"eef95f58-5c1a-4fe0-90ac-c33c0d9631cd","type":"GlyphRenderer"},{"id":"122b8544-d788-479d-824e-748f5c51d410","type":"LinearAxis"},{"id":"de87819d-6f8f-4b06-8a67-99292c155e19","type":"LinearAxis"},{"id":"4c53df8d-7566-4e78-8de3-301ef441947f","type":"Grid"},{"id":"5c15c7a6-1830-4e30-9a14-da3375a83bb3","type":"Grid"}],"title":null,"toolbar":{"id":"a904d393-cef8-4349-b781-a578c15d34a3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"97479681-ef99-4f7f-a25c-8ef895f1bbd2","type":"DataRange1d"},"x_scale":{"id":"93f35ac2-1e8d-4af8-ac99-d259641f3e94","type":"LinearScale"},"y_range":{"id":"7aeb0bdc-d6b2-4cdf-ba55-273d45f4e24f","type":"DataRange1d"},"y_scale":{"id":"c7408cee-b855-49b1-9537-92f24fa1e364","type":"LinearScale"}},"id":"9bd61148-f5ff-45d7-9605-43288b0d11fc","type":"Plot"},{"attributes":{"formatter":{"id":"156668ad-ebfe-4dec-addd-858cc92b0dcb","type":"BasicTickFormatter"},"plot":{"id":"9bd61148-f5ff-45d7-9605-43288b0d11fc","type":"Plot"},"ticker":{"id":"158ff9b2-ea8e-4539-b5f3-acbadb4a2e32","type":"BasicTicker"}},"id":"de87819d-6f8f-4b06-8a67-99292c155e19","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"bb85f3b8-a475-4d91-accf-4c3d50be5b9c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"9bd61148-f5ff-45d7-9605-43288b0d11fc","type":"Plot"},"ticker":{"id":"158ff9b2-ea8e-4539-b5f3-acbadb4a2e32","type":"BasicTicker"}},"id":"5c15c7a6-1830-4e30-9a14-da3375a83bb3","type":"Grid"},{"attributes":{"source":{"id":"bb85f3b8-a475-4d91-accf-4c3d50be5b9c","type":"ColumnDataSource"}},"id":"5937de78-2307-4b0d-a741-04581e162643","type":"CDSView"},{"attributes":{},"id":"158ff9b2-ea8e-4539-b5f3-acbadb4a2e32","type":"BasicTicker"},{"attributes":{},"id":"93f35ac2-1e8d-4af8-ac99-d259641f3e94","type":"LinearScale"}],"root_ids":["9bd61148-f5ff-45d7-9605-43288b0d11fc"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"61a39882-ce38-44f6-8a2c-79a15b7bc865","elementid":"76957d50-e257-4936-90bf-9fbdfc276fe1","modelid":"9bd61148-f5ff-45d7-9605-43288b0d11fc"}];
                
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
