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
      };var element = document.getElementById("710b0e1d-15d1-4734-875b-742605da95ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '710b0e1d-15d1-4734-875b-742605da95ec' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6e31f788-5454-4b32-bd5c-45ddef5b4358":{"roots":{"references":[{"attributes":{},"id":"32056","type":"ResetTool"},{"attributes":{"child":{"id":"32073","subtype":"Figure","type":"Plot"},"title":"line"},"id":"32112","type":"Panel"},{"attributes":{},"id":"32125","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32074","type":"DataRange1d"},{"attributes":{"formatter":{"id":"32119","type":"BasicTickFormatter"},"plot":{"id":"32033","subtype":"Figure","type":"Plot"},"ticker":{"id":"32043","type":"BasicTicker"}},"id":"32042","type":"LinearAxis"},{"attributes":{"below":[{"id":"32042","type":"LinearAxis"}],"left":[{"id":"32047","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32042","type":"LinearAxis"},{"id":"32046","type":"Grid"},{"id":"32047","type":"LinearAxis"},{"id":"32051","type":"Grid"},{"id":"32060","type":"BoxAnnotation"},{"id":"32070","type":"GlyphRenderer"}],"title":{"id":"32115","type":"Title"},"toolbar":{"id":"32058","type":"Toolbar"},"x_range":{"id":"32034","type":"DataRange1d"},"x_scale":{"id":"32038","type":"LinearScale"},"y_range":{"id":"32036","type":"DataRange1d"},"y_scale":{"id":"32040","type":"LinearScale"}},"id":"32033","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"32123","type":"BasicTickFormatter"},"plot":{"id":"32073","subtype":"Figure","type":"Plot"},"ticker":{"id":"32083","type":"BasicTicker"}},"id":"32082","type":"LinearAxis"},{"attributes":{},"id":"32052","type":"PanTool"},{"attributes":{"plot":{"id":"32033","subtype":"Figure","type":"Plot"},"ticker":{"id":"32043","type":"BasicTicker"}},"id":"32046","type":"Grid"},{"attributes":{"data_source":{"id":"32067","type":"ColumnDataSource"},"glyph":{"id":"32068","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32069","type":"Circle"},"selection_glyph":null,"view":{"id":"32071","type":"CDSView"}},"id":"32070","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32100","type":"BoxAnnotation"},{"attributes":{},"id":"32119","type":"BasicTickFormatter"},{"attributes":{},"id":"32127","type":"Selection"},{"attributes":{"callback":null},"id":"32036","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32069","type":"Circle"},{"attributes":{"formatter":{"id":"32121","type":"BasicTickFormatter"},"plot":{"id":"32033","subtype":"Figure","type":"Plot"},"ticker":{"id":"32048","type":"BasicTicker"}},"id":"32047","type":"LinearAxis"},{"attributes":{"source":{"id":"32067","type":"ColumnDataSource"}},"id":"32071","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32108","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32127","type":"Selection"},"selection_policy":{"id":"32128","type":"UnionRenderers"}},"id":"32067","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"32033","subtype":"Figure","type":"Plot"},"ticker":{"id":"32048","type":"BasicTicker"}},"id":"32051","type":"Grid"},{"attributes":{},"id":"32078","type":"LinearScale"},{"attributes":{"callback":null},"id":"32034","type":"DataRange1d"},{"attributes":{},"id":"32088","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32068","type":"Circle"},{"attributes":{},"id":"32093","type":"WheelZoomTool"},{"attributes":{"source":{"id":"32107","type":"ColumnDataSource"}},"id":"32111","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32092","type":"PanTool"},{"id":"32093","type":"WheelZoomTool"},{"id":"32094","type":"BoxZoomTool"},{"id":"32095","type":"SaveTool"},{"id":"32096","type":"ResetTool"},{"id":"32097","type":"HelpTool"}]},"id":"32098","type":"Toolbar"},{"attributes":{},"id":"32121","type":"BasicTickFormatter"},{"attributes":{},"id":"32057","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32130","type":"Selection"},"selection_policy":{"id":"32131","type":"UnionRenderers"}},"id":"32107","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"32107","type":"ColumnDataSource"},"glyph":{"id":"32108","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32109","type":"Line"},"selection_glyph":null,"view":{"id":"32111","type":"CDSView"}},"id":"32110","type":"GlyphRenderer"},{"attributes":{},"id":"32055","type":"SaveTool"},{"attributes":{"overlay":{"id":"32100","type":"BoxAnnotation"}},"id":"32094","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"32073","subtype":"Figure","type":"Plot"},"ticker":{"id":"32083","type":"BasicTicker"}},"id":"32086","type":"Grid"},{"attributes":{},"id":"32097","type":"HelpTool"},{"attributes":{},"id":"32130","type":"Selection"},{"attributes":{},"id":"32096","type":"ResetTool"},{"attributes":{},"id":"32131","type":"UnionRenderers"},{"attributes":{},"id":"32038","type":"LinearScale"},{"attributes":{},"id":"32095","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32060","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"32115","type":"Title"},{"attributes":{},"id":"32083","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32109","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"32117","type":"Title"},{"attributes":{},"id":"32048","type":"BasicTicker"},{"attributes":{},"id":"32043","type":"BasicTicker"},{"attributes":{},"id":"32040","type":"LinearScale"},{"attributes":{},"id":"32092","type":"PanTool"},{"attributes":{"child":{"id":"32033","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"32072","type":"Panel"},{"attributes":{"dimension":1,"plot":{"id":"32073","subtype":"Figure","type":"Plot"},"ticker":{"id":"32088","type":"BasicTicker"}},"id":"32091","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32052","type":"PanTool"},{"id":"32053","type":"WheelZoomTool"},{"id":"32054","type":"BoxZoomTool"},{"id":"32055","type":"SaveTool"},{"id":"32056","type":"ResetTool"},{"id":"32057","type":"HelpTool"}]},"id":"32058","type":"Toolbar"},{"attributes":{"formatter":{"id":"32125","type":"BasicTickFormatter"},"plot":{"id":"32073","subtype":"Figure","type":"Plot"},"ticker":{"id":"32088","type":"BasicTicker"}},"id":"32087","type":"LinearAxis"},{"attributes":{"below":[{"id":"32082","type":"LinearAxis"}],"left":[{"id":"32087","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32082","type":"LinearAxis"},{"id":"32086","type":"Grid"},{"id":"32087","type":"LinearAxis"},{"id":"32091","type":"Grid"},{"id":"32100","type":"BoxAnnotation"},{"id":"32110","type":"GlyphRenderer"}],"title":{"id":"32117","type":"Title"},"toolbar":{"id":"32098","type":"Toolbar"},"x_range":{"id":"32074","type":"DataRange1d"},"x_scale":{"id":"32078","type":"LinearScale"},"y_range":{"id":"32076","type":"DataRange1d"},"y_scale":{"id":"32080","type":"LinearScale"}},"id":"32073","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"32076","type":"DataRange1d"},{"attributes":{},"id":"32123","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"32072","type":"Panel"},{"id":"32112","type":"Panel"}]},"id":"32113","type":"Tabs"},{"attributes":{},"id":"32080","type":"LinearScale"},{"attributes":{},"id":"32053","type":"WheelZoomTool"},{"attributes":{},"id":"32128","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"32060","type":"BoxAnnotation"}},"id":"32054","type":"BoxZoomTool"}],"root_ids":["32113"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"6e31f788-5454-4b32-bd5c-45ddef5b4358","roots":{"32113":"710b0e1d-15d1-4734-875b-742605da95ec"}}];
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