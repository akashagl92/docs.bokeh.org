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
      };var element = document.getElementById("ca2e2047-007c-4154-b572-798d894e9757");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca2e2047-007c-4154-b572-798d894e9757' but no matching script tag was found. ")
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
                    var docs_json = {"4dff5b7a-eb48-43e2-b29c-349d8ab67efa":{"roots":{"references":[{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"245406a2-581f-4a62-807c-2fab7a1faccf","type":"OpenURL"},{"attributes":{"callback":null,"column_names":["x","y","color"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ea68d134-a0d3-45bc-9921-b31a6133e323","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea68d134-a0d3-45bc-9921-b31a6133e323","type":"ColumnDataSource"},"glyph":{"id":"6e8f142b-9491-4223-a8f6-3956ce689d0c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc0b0267-b6cd-4503-b1bb-7bd562faebe6","type":"Circle"},"selection_glyph":null,"view":{"id":"9fc6572b-f40c-421f-ba85-bfb2ec3864a9","type":"CDSView"}},"id":"9349febb-361b-4932-8e22-ead921a8604b","type":"GlyphRenderer"},{"attributes":{},"id":"06fcc09b-6acc-4134-b055-36b50c95fbcb","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"fc87f70a-4d23-45ae-870d-d8e5637e2c03","type":"Title"},{"attributes":{"callback":null},"id":"494216fc-5928-4402-b65d-77ebab0f7436","type":"DataRange1d"},{"attributes":{},"id":"582d61f1-746e-41d4-9864-6400908ba659","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc0b0267-b6cd-4503-b1bb-7bd562faebe6","type":"Circle"},{"attributes":{},"id":"279a609f-b8bc-4118-9e99-dd651eb2318d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"39c6d4be-041e-4f00-bbb8-e5b78aacf436","type":"BasicTickFormatter"},"plot":{"id":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"06fcc09b-6acc-4134-b055-36b50c95fbcb","type":"BasicTicker"}},"id":"ea8b9fcd-c318-4d22-89fe-202fc27e2abc","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e8f142b-9491-4223-a8f6-3956ce689d0c","type":"Circle"},{"attributes":{},"id":"39c6d4be-041e-4f00-bbb8-e5b78aacf436","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"582d61f1-746e-41d4-9864-6400908ba659","type":"BasicTicker"}},"id":"5f98d6ca-11e4-41d7-9cd8-d68a39ace25d","type":"Grid"},{"attributes":{"callback":null},"id":"d50db7aa-1c06-450b-9628-02ef9cbd5d31","type":"DataRange1d"},{"attributes":{"formatter":{"id":"279a609f-b8bc-4118-9e99-dd651eb2318d","type":"BasicTickFormatter"},"plot":{"id":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"582d61f1-746e-41d4-9864-6400908ba659","type":"BasicTicker"}},"id":"19164618-b6aa-4ab8-8184-b473f79e04c4","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0057267a-d7a7-43c8-8b8a-60c23b090a17","type":"TapTool"}]},"id":"444974df-0974-4788-9156-57ff5cbf263c","type":"Toolbar"},{"attributes":{"source":{"id":"ea68d134-a0d3-45bc-9921-b31a6133e323","type":"ColumnDataSource"}},"id":"9fc6572b-f40c-421f-ba85-bfb2ec3864a9","type":"CDSView"},{"attributes":{},"id":"07e35a56-b6a6-44bb-bce6-21b26d5243a3","type":"LinearScale"},{"attributes":{"plot":{"id":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"06fcc09b-6acc-4134-b055-36b50c95fbcb","type":"BasicTicker"}},"id":"7e6ed561-12a6-4f7f-9992-dd91fb1ae7f8","type":"Grid"},{"attributes":{},"id":"07436f36-48b1-43af-a705-9094a0c69834","type":"LinearScale"},{"attributes":{"below":[{"id":"ea8b9fcd-c318-4d22-89fe-202fc27e2abc","type":"LinearAxis"}],"left":[{"id":"19164618-b6aa-4ab8-8184-b473f79e04c4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ea8b9fcd-c318-4d22-89fe-202fc27e2abc","type":"LinearAxis"},{"id":"7e6ed561-12a6-4f7f-9992-dd91fb1ae7f8","type":"Grid"},{"id":"19164618-b6aa-4ab8-8184-b473f79e04c4","type":"LinearAxis"},{"id":"5f98d6ca-11e4-41d7-9cd8-d68a39ace25d","type":"Grid"},{"id":"9349febb-361b-4932-8e22-ead921a8604b","type":"GlyphRenderer"}],"title":{"id":"fc87f70a-4d23-45ae-870d-d8e5637e2c03","type":"Title"},"toolbar":{"id":"444974df-0974-4788-9156-57ff5cbf263c","type":"Toolbar"},"x_range":{"id":"494216fc-5928-4402-b65d-77ebab0f7436","type":"DataRange1d"},"x_scale":{"id":"07e35a56-b6a6-44bb-bce6-21b26d5243a3","type":"LinearScale"},"y_range":{"id":"d50db7aa-1c06-450b-9628-02ef9cbd5d31","type":"DataRange1d"},"y_scale":{"id":"07436f36-48b1-43af-a705-9094a0c69834","type":"LinearScale"}},"id":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":{"id":"245406a2-581f-4a62-807c-2fab7a1faccf","type":"OpenURL"}},"id":"0057267a-d7a7-43c8-8b8a-60c23b090a17","type":"TapTool"}],"root_ids":["4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"4dff5b7a-eb48-43e2-b29c-349d8ab67efa","elementid":"ca2e2047-007c-4154-b572-798d894e9757","modelid":"4556aebe-c295-45ff-ba3c-ee4e2a5ef2a2"}];
                
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
