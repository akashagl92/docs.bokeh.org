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
      };var element = document.getElementById("c234f33e-dca1-47dc-b99f-91ec913a1b37");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c234f33e-dca1-47dc-b99f-91ec913a1b37' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cddeae84-2ed8-4be1-931c-f9880ca804a4":{"roots":{"references":[{"attributes":{"overlay":{"id":"32522","type":"BoxAnnotation"}},"id":"32516","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32536","type":"BasicTickFormatter"},"plot":{"id":"32495","subtype":"Figure","type":"Plot"},"ticker":{"id":"32510","type":"BasicTicker"}},"id":"32509","type":"LinearAxis"},{"attributes":{"plot":{"id":"32495","subtype":"Figure","type":"Plot"},"ticker":{"id":"32505","type":"BasicTicker"}},"id":"32508","type":"Grid"},{"attributes":{},"id":"32502","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32530","type":"Circle"},{"attributes":{},"id":"32536","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32538","type":"BasicTickFormatter"},"plot":{"id":"32495","subtype":"Figure","type":"Plot"},"ticker":{"id":"32505","type":"BasicTicker"}},"id":"32504","type":"LinearAxis"},{"attributes":{"data_source":{"id":"32529","type":"ColumnDataSource"},"glyph":{"id":"32530","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32531","type":"Circle"},"selection_glyph":null,"view":{"id":"32533","type":"CDSView"}},"id":"32532","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"32534","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32531","type":"Circle"},{"attributes":{},"id":"32500","type":"LinearScale"},{"attributes":{},"id":"32515","type":"WheelZoomTool"},{"attributes":{},"id":"32505","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32514","type":"PanTool"},{"id":"32515","type":"WheelZoomTool"},{"id":"32516","type":"BoxZoomTool"},{"id":"32517","type":"SaveTool"},{"id":"32518","type":"ResetTool"},{"id":"32519","type":"HelpTool"}]},"id":"32520","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32522","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"32495","subtype":"Figure","type":"Plot"},"ticker":{"id":"32510","type":"BasicTicker"}},"id":"32513","type":"Grid"},{"attributes":{"callback":null},"id":"32496","type":"DataRange1d"},{"attributes":{"callback":null},"id":"32498","type":"DataRange1d"},{"attributes":{"below":[{"id":"32504","type":"LinearAxis"}],"left":[{"id":"32509","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32504","type":"LinearAxis"},{"id":"32508","type":"Grid"},{"id":"32509","type":"LinearAxis"},{"id":"32513","type":"Grid"},{"id":"32522","type":"BoxAnnotation"},{"id":"32532","type":"GlyphRenderer"}],"title":{"id":"32534","type":"Title"},"toolbar":{"id":"32520","type":"Toolbar"},"x_range":{"id":"32496","type":"DataRange1d"},"x_scale":{"id":"32500","type":"LinearScale"},"y_range":{"id":"32498","type":"DataRange1d"},"y_scale":{"id":"32502","type":"LinearScale"}},"id":"32495","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"32529","type":"ColumnDataSource"}},"id":"32533","type":"CDSView"},{"attributes":{},"id":"32541","type":"Selection"},{"attributes":{},"id":"32540","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32541","type":"Selection"},"selection_policy":{"id":"32540","type":"UnionRenderers"}},"id":"32529","type":"ColumnDataSource"},{"attributes":{},"id":"32518","type":"ResetTool"},{"attributes":{},"id":"32510","type":"BasicTicker"},{"attributes":{},"id":"32514","type":"PanTool"},{"attributes":{},"id":"32519","type":"HelpTool"},{"attributes":{},"id":"32517","type":"SaveTool"},{"attributes":{},"id":"32538","type":"BasicTickFormatter"}],"root_ids":["32495"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"cddeae84-2ed8-4be1-931c-f9880ca804a4","roots":{"32495":"c234f33e-dca1-47dc-b99f-91ec913a1b37"}}];
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