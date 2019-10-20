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
      };var element = document.getElementById("cab5ffbe-6aab-4858-ac9f-f45b6051aafb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cab5ffbe-6aab-4858-ac9f-f45b6051aafb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8ace1932-7176-4ac6-af41-2984d9d54fcc":{"roots":{"references":[{"attributes":{"formatter":{"id":"14490","type":"BasicTickFormatter"},"plot":{"id":"14456","subtype":"Figure","type":"Plot"},"ticker":{"id":"14472","type":"BasicTicker"}},"id":"14471","type":"LinearAxis"},{"attributes":{"source":{"id":"14479","type":"ColumnDataSource"}},"id":"14483","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14476","type":"TapTool"}]},"id":"14477","type":"Toolbar"},{"attributes":{"formatter":{"id":"14488","type":"BasicTickFormatter"},"plot":{"id":"14456","subtype":"Figure","type":"Plot"},"ticker":{"id":"14467","type":"BasicTicker"}},"id":"14466","type":"LinearAxis"},{"attributes":{"callback":null},"id":"14458","type":"DataRange1d"},{"attributes":{},"id":"14462","type":"LinearScale"},{"attributes":{"data_source":{"id":"14479","type":"ColumnDataSource"},"glyph":{"id":"14480","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14485","type":"Circle"},"selection_glyph":{"id":"14484","type":"Circle"},"view":{"id":"14483","type":"CDSView"}},"id":"14482","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14460","type":"DataRange1d"},{"attributes":{},"id":"14464","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14480","type":"Circle"},{"attributes":{"plot":{"id":"14456","subtype":"Figure","type":"Plot"},"ticker":{"id":"14467","type":"BasicTicker"}},"id":"14470","type":"Grid"},{"attributes":{"below":[{"id":"14466","type":"LinearAxis"}],"left":[{"id":"14471","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14466","type":"LinearAxis"},{"id":"14470","type":"Grid"},{"id":"14471","type":"LinearAxis"},{"id":"14475","type":"Grid"},{"id":"14482","type":"GlyphRenderer"}],"title":{"id":"14455","type":"Title"},"toolbar":{"id":"14477","type":"Toolbar"},"x_range":{"id":"14458","type":"DataRange1d"},"x_scale":{"id":"14462","type":"LinearScale"},"y_range":{"id":"14460","type":"DataRange1d"},"y_scale":{"id":"14464","type":"LinearScale"}},"id":"14456","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14488","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14491","type":"Selection"},"selection_policy":{"id":"14492","type":"UnionRenderers"}},"id":"14479","type":"ColumnDataSource"},{"attributes":{},"id":"14472","type":"BasicTicker"},{"attributes":{},"id":"14490","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"14456","subtype":"Figure","type":"Plot"},"ticker":{"id":"14472","type":"BasicTicker"}},"id":"14475","type":"Grid"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"14455","type":"Title"},{"attributes":{},"id":"14467","type":"BasicTicker"},{"attributes":{},"id":"14492","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"14485","type":"Circle"},{"attributes":{},"id":"14491","type":"Selection"},{"attributes":{"callback":null},"id":"14476","type":"TapTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"14484","type":"Circle"}],"root_ids":["14456"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"8ace1932-7176-4ac6-af41-2984d9d54fcc","roots":{"14456":"cab5ffbe-6aab-4858-ac9f-f45b6051aafb"}}];
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