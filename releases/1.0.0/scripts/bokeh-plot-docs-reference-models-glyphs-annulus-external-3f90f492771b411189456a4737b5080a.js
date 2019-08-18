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
      };var element = document.getElementById("bc875fd7-4cff-4773-b997-c262128e1b97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc875fd7-4cff-4773-b997-c262128e1b97' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"ebbd0b56-7acb-4be5-9cb7-af6f10f6d868":{"roots":{"references":[{"attributes":{"formatter":{"id":"27755","type":"BasicTickFormatter"},"plot":{"id":"27738","type":"Plot"},"ticker":{"id":"27745","type":"BasicTicker"}},"id":"27743","type":"LinearAxis"},{"attributes":{},"id":"27745","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"27758","type":"Selection"},"selection_policy":{"id":"27759","type":"UnionRenderers"}},"id":"27737","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"27749","type":"DataRange1d"},{"attributes":{},"id":"27758","type":"Selection"},{"attributes":{"callback":null},"id":"27753","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27750","type":"Toolbar"},{"attributes":{"below":[{"id":"27743","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27744","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27741","type":"GlyphRenderer"},{"id":"27743","type":"LinearAxis"},{"id":"27744","type":"LinearAxis"},{"id":"27746","type":"Grid"},{"id":"27748","type":"Grid"}],"title":null,"toolbar":{"id":"27750","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27753","type":"DataRange1d"},"x_scale":{"id":"27752","type":"LinearScale"},"y_range":{"id":"27749","type":"DataRange1d"},"y_scale":{"id":"27751","type":"LinearScale"}},"id":"27738","type":"Plot"},{"attributes":{},"id":"27751","type":"LinearScale"},{"attributes":{},"id":"27755","type":"BasicTickFormatter"},{"attributes":{},"id":"27757","type":"BasicTickFormatter"},{"attributes":{},"id":"27747","type":"BasicTicker"},{"attributes":{"plot":{"id":"27738","type":"Plot"},"ticker":{"id":"27745","type":"BasicTicker"}},"id":"27746","type":"Grid"},{"attributes":{"source":{"id":"27737","type":"ColumnDataSource"}},"id":"27742","type":"CDSView"},{"attributes":{"formatter":{"id":"27757","type":"BasicTickFormatter"},"plot":{"id":"27738","type":"Plot"},"ticker":{"id":"27747","type":"BasicTicker"}},"id":"27744","type":"LinearAxis"},{"attributes":{"data_source":{"id":"27737","type":"ColumnDataSource"},"glyph":{"id":"27740","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27742","type":"CDSView"}},"id":"27741","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"27740","type":"Annulus"},{"attributes":{"dimension":1,"plot":{"id":"27738","type":"Plot"},"ticker":{"id":"27747","type":"BasicTicker"}},"id":"27748","type":"Grid"},{"attributes":{},"id":"27752","type":"LinearScale"},{"attributes":{},"id":"27759","type":"UnionRenderers"}],"root_ids":["27738"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"ebbd0b56-7acb-4be5-9cb7-af6f10f6d868","roots":{"27738":"bc875fd7-4cff-4773-b997-c262128e1b97"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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