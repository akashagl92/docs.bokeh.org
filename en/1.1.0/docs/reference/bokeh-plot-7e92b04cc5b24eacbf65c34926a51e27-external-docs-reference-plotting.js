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
      };var element = document.getElementById("7d273f86-00b7-4817-a218-ab1c0987bea1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7d273f86-00b7-4817-a218-ab1c0987bea1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5447200c-04da-48cd-bd14-fcb8d979e527":{"roots":{"references":[{"attributes":{},"id":"15026","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15012","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15056","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15030","type":"PanTool"},{"id":"15031","type":"WheelZoomTool"},{"id":"15032","type":"BoxZoomTool"},{"id":"15033","type":"SaveTool"},{"id":"15034","type":"ResetTool"},{"id":"15035","type":"HelpTool"}]},"id":"15036","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"15026","type":"BasicTicker"}},"id":"15029","type":"Grid"},{"attributes":{"data_source":{"id":"15043","type":"ColumnDataSource"},"glyph":{"id":"15044","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15045","type":"HexTile"},"selection_glyph":null,"view":{"id":"15047","type":"CDSView"}},"id":"15046","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"15053","type":"BasicTickFormatter"},"ticker":{"id":"15021","type":"BasicTicker"}},"id":"15020","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15014","type":"DataRange1d"},{"attributes":{"source":{"id":"15043","type":"ColumnDataSource"}},"id":"15047","type":"CDSView"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"15044","type":"HexTile"},{"attributes":{},"id":"15016","type":"LinearScale"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"15055","type":"Selection"},"selection_policy":{"id":"15054","type":"UnionRenderers"}},"id":"15043","type":"ColumnDataSource"},{"attributes":{},"id":"15018","type":"LinearScale"},{"attributes":{"text":""},"id":"15049","type":"Title"},{"attributes":{},"id":"15031","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"15056","type":"BoxAnnotation"}},"id":"15032","type":"BoxZoomTool"},{"attributes":{},"id":"15021","type":"BasicTicker"},{"attributes":{},"id":"15051","type":"BasicTickFormatter"},{"attributes":{},"id":"15053","type":"BasicTickFormatter"},{"attributes":{},"id":"15033","type":"SaveTool"},{"attributes":{},"id":"15030","type":"PanTool"},{"attributes":{"ticker":{"id":"15021","type":"BasicTicker"}},"id":"15024","type":"Grid"},{"attributes":{"below":[{"id":"15020","type":"LinearAxis"}],"center":[{"id":"15024","type":"Grid"},{"id":"15029","type":"Grid"}],"left":[{"id":"15025","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"15046","type":"GlyphRenderer"}],"title":{"id":"15049","type":"Title"},"toolbar":{"id":"15036","type":"Toolbar"},"x_range":{"id":"15012","type":"DataRange1d"},"x_scale":{"id":"15016","type":"LinearScale"},"y_range":{"id":"15014","type":"DataRange1d"},"y_scale":{"id":"15018","type":"LinearScale"}},"id":"15011","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15054","type":"UnionRenderers"},{"attributes":{},"id":"15034","type":"ResetTool"},{"attributes":{"formatter":{"id":"15051","type":"BasicTickFormatter"},"ticker":{"id":"15026","type":"BasicTicker"}},"id":"15025","type":"LinearAxis"},{"attributes":{},"id":"15055","type":"Selection"},{"attributes":{},"id":"15035","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"15045","type":"HexTile"}],"root_ids":["15011"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5447200c-04da-48cd-bd14-fcb8d979e527","roots":{"15011":"7d273f86-00b7-4817-a218-ab1c0987bea1"}}];
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