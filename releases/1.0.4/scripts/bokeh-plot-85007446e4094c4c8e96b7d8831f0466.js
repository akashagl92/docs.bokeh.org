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
      };var element = document.getElementById("f85d66f1-282e-4fdb-8f8c-d3ab0645e87d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f85d66f1-282e-4fdb-8f8c-d3ab0645e87d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ee209ec0-9003-4708-ad3e-f3538596da81":{"roots":{"references":[{"attributes":{"plot":{"id":"17969","subtype":"Figure","type":"Plot"},"ticker":{"id":"17979","type":"BasicTicker"},"visible":false},"id":"17982","type":"Grid"},{"attributes":{"callback":null},"id":"17972","type":"DataRange1d"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"17990","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"17969","subtype":"Figure","type":"Plot"},"ticker":{"id":"17984","type":"BasicTicker"}},"id":"17987","type":"Grid"},{"attributes":{},"id":"18007","type":"UnionRenderers"},{"attributes":{},"id":"18006","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17991","type":"Line"},{"attributes":{},"id":"17974","type":"LinearScale"},{"attributes":{},"id":"17984","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"18008","type":"Selection"},"selection_policy":{"id":"18007","type":"UnionRenderers"}},"id":"17994","type":"ColumnDataSource"},{"attributes":{},"id":"17976","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"18006","type":"Selection"},"selection_policy":{"id":"18005","type":"UnionRenderers"}},"id":"17989","type":"ColumnDataSource"},{"attributes":{},"id":"18001","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17994","type":"ColumnDataSource"},"glyph":{"id":"17995","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17996","type":"Line"},"selection_glyph":null,"view":{"id":"17998","type":"CDSView"},"visible":false},"id":"17997","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17989","type":"ColumnDataSource"},"glyph":{"id":"17990","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17991","type":"Line"},"selection_glyph":null,"view":{"id":"17993","type":"CDSView"}},"id":"17992","type":"GlyphRenderer"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"17995","type":"Line"},{"attributes":{},"id":"17979","type":"BasicTicker"},{"attributes":{},"id":"18005","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17996","type":"Line"},{"attributes":{"formatter":{"id":"18003","type":"BasicTickFormatter"},"plot":{"id":"17969","subtype":"Figure","type":"Plot"},"ticker":{"id":"17979","type":"BasicTicker"},"visible":false},"id":"17978","type":"LinearAxis"},{"attributes":{"below":[{"id":"17978","type":"LinearAxis"}],"left":[{"id":"17983","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"17978","type":"LinearAxis"},{"id":"17982","type":"Grid"},{"id":"17983","type":"LinearAxis"},{"id":"17987","type":"Grid"},{"id":"17992","type":"GlyphRenderer"},{"id":"17997","type":"GlyphRenderer"}],"title":{"id":"17999","type":"Title"},"toolbar":{"id":"17988","type":"Toolbar"},"x_range":{"id":"17970","type":"DataRange1d"},"x_scale":{"id":"17974","type":"LinearScale"},"y_range":{"id":"17972","type":"DataRange1d"},"y_scale":{"id":"17976","type":"LinearScale"}},"id":"17969","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18003","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"17988","type":"Toolbar"},{"attributes":{"source":{"id":"17989","type":"ColumnDataSource"}},"id":"17993","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"17999","type":"Title"},{"attributes":{"callback":null},"id":"17970","type":"DataRange1d"},{"attributes":{},"id":"18008","type":"Selection"},{"attributes":{"formatter":{"id":"18001","type":"BasicTickFormatter"},"plot":{"id":"17969","subtype":"Figure","type":"Plot"},"ticker":{"id":"17984","type":"BasicTicker"}},"id":"17983","type":"LinearAxis"},{"attributes":{"source":{"id":"17994","type":"ColumnDataSource"}},"id":"17998","type":"CDSView"}],"root_ids":["17969"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"ee209ec0-9003-4708-ad3e-f3538596da81","roots":{"17969":"f85d66f1-282e-4fdb-8f8c-d3ab0645e87d"}}];
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