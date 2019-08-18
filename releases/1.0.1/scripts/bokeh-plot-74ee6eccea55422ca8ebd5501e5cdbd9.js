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
      };var element = document.getElementById("79e5fb9f-19d0-4811-b7a9-d77cad023a47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79e5fb9f-19d0-4811-b7a9-d77cad023a47' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"c23e505f-239d-4412-99e7-174cb42c6645":{"roots":{"references":[{"attributes":{"callback":null,"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"7304","type":"Selection"},"selection_policy":{"id":"7305","type":"UnionRenderers"}},"id":"7293","type":"ColumnDataSource"},{"attributes":{},"id":"7301","type":"BasicTickFormatter"},{"attributes":{},"id":"7278","type":"LinearScale"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"7269","type":"Title"},{"attributes":{"below":[{"id":"7280","type":"LinearAxis"}],"left":[{"id":"7285","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7280","type":"LinearAxis"},{"id":"7284","type":"Grid"},{"id":"7285","type":"LinearAxis"},{"id":"7289","type":"Grid"},{"id":"7297","type":"GlyphRenderer"}],"title":{"id":"7269","type":"Title"},"toolbar":{"id":"7291","type":"Toolbar"},"x_range":{"id":"7272","type":"DataRange1d"},"x_scale":{"id":"7276","type":"LinearScale"},"y_range":{"id":"7274","type":"DataRange1d"},"y_scale":{"id":"7278","type":"LinearScale"}},"id":"7270","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7301","type":"BasicTickFormatter"},"plot":{"id":"7270","subtype":"Figure","type":"Plot"},"ticker":{"id":"7281","type":"BasicTicker"}},"id":"7280","type":"LinearAxis"},{"attributes":{},"id":"7303","type":"BasicTickFormatter"},{"attributes":{},"id":"7281","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7293","type":"ColumnDataSource"},"glyph":{"id":"7295","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7296","type":"Circle"},"selection_glyph":null,"view":{"id":"7298","type":"CDSView"}},"id":"7297","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7270","subtype":"Figure","type":"Plot"},"ticker":{"id":"7281","type":"BasicTicker"}},"id":"7284","type":"Grid"},{"attributes":{},"id":"7304","type":"Selection"},{"attributes":{"callback":null},"id":"7272","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7303","type":"BasicTickFormatter"},"plot":{"id":"7270","subtype":"Figure","type":"Plot"},"ticker":{"id":"7286","type":"BasicTicker"}},"id":"7285","type":"LinearAxis"},{"attributes":{},"id":"7305","type":"UnionRenderers"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"7306","type":"OpenURL"},{"attributes":{"dimension":1,"plot":{"id":"7270","subtype":"Figure","type":"Plot"},"ticker":{"id":"7286","type":"BasicTicker"}},"id":"7289","type":"Grid"},{"attributes":{},"id":"7286","type":"BasicTicker"},{"attributes":{"source":{"id":"7293","type":"ColumnDataSource"}},"id":"7298","type":"CDSView"},{"attributes":{"callback":{"id":"7306","type":"OpenURL"}},"id":"7290","type":"TapTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7290","type":"TapTool"}]},"id":"7291","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7296","type":"Circle"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7295","type":"Circle"},{"attributes":{"callback":null},"id":"7274","type":"DataRange1d"},{"attributes":{},"id":"7276","type":"LinearScale"}],"root_ids":["7270"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"c23e505f-239d-4412-99e7-174cb42c6645","roots":{"7270":"79e5fb9f-19d0-4811-b7a9-d77cad023a47"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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