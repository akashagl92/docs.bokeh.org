(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("9e6edc31-98d3-4d62-b27e-fcd95cb61958");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9e6edc31-98d3-4d62-b27e-fcd95cb61958' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"76695a5a-e64c-4fb6-b8de-4c3e8c7241f6":{"roots":{"references":[{"attributes":{},"id":"15337","type":"LinearScale"},{"attributes":{"formatter":{"id":"15374","type":"BasicTickFormatter"},"ticker":{"id":"15342","type":"BasicTicker"}},"id":"15341","type":"LinearAxis"},{"attributes":{"overlay":{"id":"15377","type":"BoxAnnotation"}},"id":"15353","type":"BoxZoomTool"},{"attributes":{},"id":"15375","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15351","type":"PanTool"},{"id":"15352","type":"WheelZoomTool"},{"id":"15353","type":"BoxZoomTool"},{"id":"15354","type":"SaveTool"},{"id":"15355","type":"ResetTool"},{"id":"15356","type":"HelpTool"}]},"id":"15357","type":"Toolbar"},{"attributes":{},"id":"15339","type":"LinearScale"},{"attributes":{"source":{"id":"15364","type":"ColumnDataSource"}},"id":"15368","type":"CDSView"},{"attributes":{},"id":"15374","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15366","type":"MultiLine"},{"attributes":{"callback":null},"id":"15335","type":"DataRange1d"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15365","type":"MultiLine"},{"attributes":{},"id":"15342","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15364","type":"ColumnDataSource"},"glyph":{"id":"15365","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15366","type":"MultiLine"},"selection_glyph":null,"view":{"id":"15368","type":"CDSView"}},"id":"15367","type":"GlyphRenderer"},{"attributes":{},"id":"15352","type":"WheelZoomTool"},{"attributes":{},"id":"15351","type":"PanTool"},{"attributes":{},"id":"15355","type":"ResetTool"},{"attributes":{},"id":"15354","type":"SaveTool"},{"attributes":{},"id":"15347","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15377","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"15372","type":"BasicTickFormatter"},"ticker":{"id":"15347","type":"BasicTicker"}},"id":"15346","type":"LinearAxis"},{"attributes":{"text":""},"id":"15370","type":"Title"},{"attributes":{},"id":"15356","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"15347","type":"BasicTicker"}},"id":"15350","type":"Grid"},{"attributes":{},"id":"15372","type":"BasicTickFormatter"},{"attributes":{},"id":"15376","type":"Selection"},{"attributes":{"below":[{"id":"15341","type":"LinearAxis"}],"center":[{"id":"15345","type":"Grid"},{"id":"15350","type":"Grid"}],"left":[{"id":"15346","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15367","type":"GlyphRenderer"}],"title":{"id":"15370","type":"Title"},"toolbar":{"id":"15357","type":"Toolbar"},"x_range":{"id":"15333","type":"DataRange1d"},"x_scale":{"id":"15337","type":"LinearScale"},"y_range":{"id":"15335","type":"DataRange1d"},"y_scale":{"id":"15339","type":"LinearScale"}},"id":"15332","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"15342","type":"BasicTicker"}},"id":"15345","type":"Grid"},{"attributes":{"callback":null},"id":"15333","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"15376","type":"Selection"},"selection_policy":{"id":"15375","type":"UnionRenderers"}},"id":"15364","type":"ColumnDataSource"}],"root_ids":["15332"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"76695a5a-e64c-4fb6-b8de-4c3e8c7241f6","roots":{"15332":"9e6edc31-98d3-4d62-b27e-fcd95cb61958"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();