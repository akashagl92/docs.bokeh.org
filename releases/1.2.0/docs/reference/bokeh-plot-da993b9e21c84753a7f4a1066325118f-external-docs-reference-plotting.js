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
      };var element = document.getElementById("133570af-0da8-4259-a54b-f97103717bfc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '133570af-0da8-4259-a54b-f97103717bfc' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"b948a12d-7185-4801-9c8b-7e88c40b1258":{"roots":{"references":[{"attributes":{},"id":"17346","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17386","type":"BoxAnnotation"},{"attributes":{},"id":"17348","type":"LinearScale"},{"attributes":{"formatter":{"id":"17382","type":"BasicTickFormatter"},"ticker":{"id":"17351","type":"BasicTicker"}},"id":"17350","type":"LinearAxis"},{"attributes":{},"id":"17351","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17374","type":"Wedge"},{"attributes":{},"id":"17356","type":"BasicTicker"},{"attributes":{"below":[{"id":"17350","type":"LinearAxis"}],"center":[{"id":"17354","type":"Grid"},{"id":"17359","type":"Grid"}],"left":[{"id":"17355","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17376","type":"GlyphRenderer"}],"title":{"id":"17378","type":"Title"},"toolbar":{"id":"17366","type":"Toolbar"},"x_range":{"id":"17342","type":"DataRange1d"},"x_scale":{"id":"17346","type":"LinearScale"},"y_range":{"id":"17344","type":"DataRange1d"},"y_scale":{"id":"17348","type":"LinearScale"}},"id":"17341","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17365","type":"HelpTool"},{"attributes":{},"id":"17363","type":"SaveTool"},{"attributes":{"callback":null},"id":"17344","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"17356","type":"BasicTicker"}},"id":"17359","type":"Grid"},{"attributes":{},"id":"17382","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17373","type":"ColumnDataSource"},"glyph":{"id":"17374","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17375","type":"Wedge"},"selection_glyph":null,"view":{"id":"17377","type":"CDSView"}},"id":"17376","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"17378","type":"Title"},{"attributes":{"overlay":{"id":"17386","type":"BoxAnnotation"}},"id":"17362","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17373","type":"ColumnDataSource"}},"id":"17377","type":"CDSView"},{"attributes":{},"id":"17364","type":"ResetTool"},{"attributes":{"formatter":{"id":"17380","type":"BasicTickFormatter"},"ticker":{"id":"17356","type":"BasicTicker"}},"id":"17355","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17375","type":"Wedge"},{"attributes":{"ticker":{"id":"17351","type":"BasicTicker"}},"id":"17354","type":"Grid"},{"attributes":{"callback":null},"id":"17342","type":"DataRange1d"},{"attributes":{},"id":"17360","type":"PanTool"},{"attributes":{},"id":"17361","type":"WheelZoomTool"},{"attributes":{},"id":"17380","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"17384","type":"Selection"},"selection_policy":{"id":"17385","type":"UnionRenderers"}},"id":"17373","type":"ColumnDataSource"},{"attributes":{},"id":"17384","type":"Selection"},{"attributes":{},"id":"17385","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17360","type":"PanTool"},{"id":"17361","type":"WheelZoomTool"},{"id":"17362","type":"BoxZoomTool"},{"id":"17363","type":"SaveTool"},{"id":"17364","type":"ResetTool"},{"id":"17365","type":"HelpTool"}]},"id":"17366","type":"Toolbar"}],"root_ids":["17341"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"b948a12d-7185-4801-9c8b-7e88c40b1258","roots":{"17341":"133570af-0da8-4259-a54b-f97103717bfc"}}];
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