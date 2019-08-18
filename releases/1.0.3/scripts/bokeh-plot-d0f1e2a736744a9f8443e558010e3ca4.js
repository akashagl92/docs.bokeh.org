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
      };var element = document.getElementById("6cd25730-1c26-49b9-8ec0-d8c52146e9c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6cd25730-1c26-49b9-8ec0-d8c52146e9c7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"c294ab45-0426-4741-8572-0d8ce95781ce":{"roots":{"references":[{"attributes":{},"id":"14384","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14420","type":"Selection"},"selection_policy":{"id":"14421","type":"UnionRenderers"}},"id":"14408","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14415","type":"BasicTickFormatter"},"plot":{"id":"14374","subtype":"Figure","type":"Plot"},"ticker":{"id":"14389","type":"BasicTicker"}},"id":"14388","type":"LinearAxis"},{"attributes":{"data_source":{"id":"14408","type":"ColumnDataSource"},"glyph":{"id":"14409","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14410","type":"Circle"},"selection_glyph":null,"view":{"id":"14412","type":"CDSView"}},"id":"14411","type":"GlyphRenderer"},{"attributes":{},"id":"14393","type":"PanTool"},{"attributes":{"callback":null},"id":"14375","type":"DataRange1d"},{"attributes":{},"id":"14415","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14417","type":"BasicTickFormatter"},"plot":{"id":"14374","subtype":"Figure","type":"Plot"},"ticker":{"id":"14384","type":"BasicTicker"}},"id":"14383","type":"LinearAxis"},{"attributes":{},"id":"14420","type":"Selection"},{"attributes":{"plot":{"id":"14374","subtype":"Figure","type":"Plot"},"ticker":{"id":"14384","type":"BasicTicker"}},"id":"14387","type":"Grid"},{"attributes":{"overlay":{"id":"14401","type":"BoxAnnotation"}},"id":"14395","type":"BoxZoomTool"},{"attributes":{},"id":"14417","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"14377","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"14410","type":"Circle"},{"attributes":{},"id":"14421","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14393","type":"PanTool"},{"id":"14394","type":"WheelZoomTool"},{"id":"14395","type":"BoxZoomTool"},{"id":"14396","type":"SaveTool"},{"id":"14397","type":"ResetTool"},{"id":"14398","type":"HelpTool"}]},"id":"14399","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"14413","type":"Title"},{"attributes":{"below":[{"id":"14383","type":"LinearAxis"}],"left":[{"id":"14388","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14383","type":"LinearAxis"},{"id":"14387","type":"Grid"},{"id":"14388","type":"LinearAxis"},{"id":"14392","type":"Grid"},{"id":"14401","type":"BoxAnnotation"},{"id":"14411","type":"GlyphRenderer"}],"title":{"id":"14413","type":"Title"},"toolbar":{"id":"14399","type":"Toolbar"},"x_range":{"id":"14375","type":"DataRange1d"},"x_scale":{"id":"14379","type":"LinearScale"},"y_range":{"id":"14377","type":"DataRange1d"},"y_scale":{"id":"14381","type":"LinearScale"}},"id":"14374","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"14408","type":"ColumnDataSource"}},"id":"14412","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14401","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"14374","subtype":"Figure","type":"Plot"},"ticker":{"id":"14389","type":"BasicTicker"}},"id":"14392","type":"Grid"},{"attributes":{},"id":"14397","type":"ResetTool"},{"attributes":{},"id":"14379","type":"LinearScale"},{"attributes":{},"id":"14394","type":"WheelZoomTool"},{"attributes":{},"id":"14389","type":"BasicTicker"},{"attributes":{},"id":"14396","type":"SaveTool"},{"attributes":{},"id":"14398","type":"HelpTool"},{"attributes":{},"id":"14381","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"14409","type":"Circle"}],"root_ids":["14374"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"c294ab45-0426-4741-8572-0d8ce95781ce","roots":{"14374":"6cd25730-1c26-49b9-8ec0-d8c52146e9c7"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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