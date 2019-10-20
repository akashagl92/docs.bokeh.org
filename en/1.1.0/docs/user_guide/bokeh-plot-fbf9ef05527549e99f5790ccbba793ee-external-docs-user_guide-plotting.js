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
      };var element = document.getElementById("11d32d45-61cf-41e9-bea7-d980d02960d8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '11d32d45-61cf-41e9-bea7-d980d02960d8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"76718bbd-f772-4b32-97cb-b641058598f0":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"28718","type":"Segment"},{"attributes":{"dimension":1,"ticker":{"id":"28699","type":"BasicTicker"}},"id":"28702","type":"Grid"},{"attributes":{},"id":"28704","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"28728","type":"Selection"},"selection_policy":{"id":"28727","type":"UnionRenderers"}},"id":"28716","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"28722","type":"Title"},{"attributes":{"ticker":{"id":"28694","type":"BasicTicker"}},"id":"28697","type":"Grid"},{"attributes":{},"id":"28726","type":"BasicTickFormatter"},{"attributes":{},"id":"28727","type":"UnionRenderers"},{"attributes":{},"id":"28707","type":"ResetTool"},{"attributes":{"formatter":{"id":"28726","type":"BasicTickFormatter"},"ticker":{"id":"28694","type":"BasicTicker"}},"id":"28693","type":"LinearAxis"},{"attributes":{},"id":"28689","type":"LinearScale"},{"attributes":{"formatter":{"id":"28724","type":"BasicTickFormatter"},"ticker":{"id":"28699","type":"BasicTicker"}},"id":"28698","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"28717","type":"Segment"},{"attributes":{"callback":null},"id":"28687","type":"DataRange1d"},{"attributes":{"below":[{"id":"28693","type":"LinearAxis"}],"center":[{"id":"28697","type":"Grid"},{"id":"28702","type":"Grid"}],"left":[{"id":"28698","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28719","type":"GlyphRenderer"}],"title":{"id":"28722","type":"Title"},"toolbar":{"id":"28709","type":"Toolbar"},"x_range":{"id":"28685","type":"DataRange1d"},"x_scale":{"id":"28689","type":"LinearScale"},"y_range":{"id":"28687","type":"DataRange1d"},"y_scale":{"id":"28691","type":"LinearScale"}},"id":"28684","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28699","type":"BasicTicker"},{"attributes":{},"id":"28694","type":"BasicTicker"},{"attributes":{"callback":null},"id":"28685","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28729","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"28729","type":"BoxAnnotation"}},"id":"28705","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"28716","type":"ColumnDataSource"},"glyph":{"id":"28717","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28718","type":"Segment"},"selection_glyph":null,"view":{"id":"28720","type":"CDSView"}},"id":"28719","type":"GlyphRenderer"},{"attributes":{"source":{"id":"28716","type":"ColumnDataSource"}},"id":"28720","type":"CDSView"},{"attributes":{},"id":"28703","type":"PanTool"},{"attributes":{},"id":"28724","type":"BasicTickFormatter"},{"attributes":{},"id":"28708","type":"HelpTool"},{"attributes":{},"id":"28728","type":"Selection"},{"attributes":{},"id":"28706","type":"SaveTool"},{"attributes":{},"id":"28691","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28703","type":"PanTool"},{"id":"28704","type":"WheelZoomTool"},{"id":"28705","type":"BoxZoomTool"},{"id":"28706","type":"SaveTool"},{"id":"28707","type":"ResetTool"},{"id":"28708","type":"HelpTool"}]},"id":"28709","type":"Toolbar"}],"root_ids":["28684"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"76718bbd-f772-4b32-97cb-b641058598f0","roots":{"28684":"11d32d45-61cf-41e9-bea7-d980d02960d8"}}];
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