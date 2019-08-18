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
      };var element = document.getElementById("9a621b56-eb03-4427-bc4f-6815c137c1d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a621b56-eb03-4427-bc4f-6815c137c1d6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"25f61026-70f2-4d3e-8db9-d3b4f37972bd":{"roots":{"references":[{"attributes":{"source":{"id":"7294","type":"ColumnDataSource"}},"id":"7299","type":"CDSView"},{"attributes":{"data_source":{"id":"7294","type":"ColumnDataSource"},"glyph":{"id":"7296","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7297","type":"Circle"},"selection_glyph":null,"view":{"id":"7299","type":"CDSView"}},"id":"7298","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7297","type":"Circle"},{"attributes":{"callback":{"id":"7307","type":"OpenURL"}},"id":"7291","type":"TapTool"},{"attributes":{"formatter":{"id":"7303","type":"BasicTickFormatter"},"plot":{"id":"7271","subtype":"Figure","type":"Plot"},"ticker":{"id":"7282","type":"BasicTicker"}},"id":"7281","type":"LinearAxis"},{"attributes":{},"id":"7303","type":"BasicTickFormatter"},{"attributes":{},"id":"7279","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7291","type":"TapTool"}]},"id":"7292","type":"Toolbar"},{"attributes":{},"id":"7277","type":"LinearScale"},{"attributes":{},"id":"7306","type":"Selection"},{"attributes":{"callback":null},"id":"7273","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"7271","subtype":"Figure","type":"Plot"},"ticker":{"id":"7287","type":"BasicTicker"}},"id":"7290","type":"Grid"},{"attributes":{},"id":"7287","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7275","type":"DataRange1d"},{"attributes":{"plot":{"id":"7271","subtype":"Figure","type":"Plot"},"ticker":{"id":"7282","type":"BasicTicker"}},"id":"7285","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7296","type":"Circle"},{"attributes":{"callback":null,"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"7306","type":"Selection"},"selection_policy":{"id":"7305","type":"UnionRenderers"}},"id":"7294","type":"ColumnDataSource"},{"attributes":{},"id":"7301","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"7281","type":"LinearAxis"}],"left":[{"id":"7286","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7281","type":"LinearAxis"},{"id":"7285","type":"Grid"},{"id":"7286","type":"LinearAxis"},{"id":"7290","type":"Grid"},{"id":"7298","type":"GlyphRenderer"}],"title":{"id":"7270","type":"Title"},"toolbar":{"id":"7292","type":"Toolbar"},"x_range":{"id":"7273","type":"DataRange1d"},"x_scale":{"id":"7277","type":"LinearScale"},"y_range":{"id":"7275","type":"DataRange1d"},"y_scale":{"id":"7279","type":"LinearScale"}},"id":"7271","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7305","type":"UnionRenderers"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"7307","type":"OpenURL"},{"attributes":{},"id":"7282","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"7270","type":"Title"},{"attributes":{"formatter":{"id":"7301","type":"BasicTickFormatter"},"plot":{"id":"7271","subtype":"Figure","type":"Plot"},"ticker":{"id":"7287","type":"BasicTicker"}},"id":"7286","type":"LinearAxis"}],"root_ids":["7271"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"25f61026-70f2-4d3e-8db9-d3b4f37972bd","roots":{"7271":"9a621b56-eb03-4427-bc4f-6815c137c1d6"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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