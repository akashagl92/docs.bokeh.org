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
      };var element = document.getElementById("2d05b3e3-6023-4802-b966-675b080d917a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d05b3e3-6023-4802-b966-675b080d917a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"3d9c5da1-146c-4c0c-ab9e-251d24e80b86":{"roots":{"references":[{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14550","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14559","type":"Selection"},"selection_policy":{"id":"14558","type":"UnionRenderers"}},"id":"14547","type":"ColumnDataSource"},{"attributes":{},"id":"14555","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14534","type":"LinearAxis"}],"left":[{"id":"14539","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14534","type":"LinearAxis"},{"id":"14538","type":"Grid"},{"id":"14539","type":"LinearAxis"},{"id":"14543","type":"Grid"},{"id":"14551","type":"GlyphRenderer"}],"title":{"id":"14523","type":"Title"},"toolbar":{"id":"14545","type":"Toolbar"},"x_range":{"id":"14526","type":"DataRange1d"},"x_scale":{"id":"14530","type":"LinearScale"},"y_range":{"id":"14528","type":"DataRange1d"},"y_scale":{"id":"14532","type":"LinearScale"}},"id":"14524","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14557","type":"BasicTickFormatter"},"plot":{"id":"14524","subtype":"Figure","type":"Plot"},"ticker":{"id":"14540","type":"BasicTicker"}},"id":"14539","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14549","type":"Circle"},{"attributes":{"callback":null},"id":"14526","type":"DataRange1d"},{"attributes":{"callback":null},"id":"14544","type":"TapTool"},{"attributes":{"callback":null},"id":"14528","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14547","type":"ColumnDataSource"},"glyph":{"id":"14548","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14549","type":"Circle"},"selection_glyph":{"id":"14550","type":"Circle"},"view":{"id":"14552","type":"CDSView"}},"id":"14551","type":"GlyphRenderer"},{"attributes":{},"id":"14557","type":"BasicTickFormatter"},{"attributes":{},"id":"14530","type":"LinearScale"},{"attributes":{"source":{"id":"14547","type":"ColumnDataSource"}},"id":"14552","type":"CDSView"},{"attributes":{},"id":"14540","type":"BasicTicker"},{"attributes":{},"id":"14559","type":"Selection"},{"attributes":{},"id":"14558","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14548","type":"Circle"},{"attributes":{},"id":"14532","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"14524","subtype":"Figure","type":"Plot"},"ticker":{"id":"14540","type":"BasicTicker"}},"id":"14543","type":"Grid"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"14523","type":"Title"},{"attributes":{"formatter":{"id":"14555","type":"BasicTickFormatter"},"plot":{"id":"14524","subtype":"Figure","type":"Plot"},"ticker":{"id":"14535","type":"BasicTicker"}},"id":"14534","type":"LinearAxis"},{"attributes":{"plot":{"id":"14524","subtype":"Figure","type":"Plot"},"ticker":{"id":"14535","type":"BasicTicker"}},"id":"14538","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14544","type":"TapTool"}]},"id":"14545","type":"Toolbar"},{"attributes":{},"id":"14535","type":"BasicTicker"}],"root_ids":["14524"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"3d9c5da1-146c-4c0c-ab9e-251d24e80b86","roots":{"14524":"2d05b3e3-6023-4802-b966-675b080d917a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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