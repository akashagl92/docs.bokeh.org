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
      };var element = document.getElementById("f3509848-6bdc-44a7-a3c6-eac732112ee8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f3509848-6bdc-44a7-a3c6-eac732112ee8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"23d962c2-82e9-40fa-9b49-1c917193271f":{"roots":{"references":[{"attributes":{},"id":"34481","type":"Selection"},{"attributes":{},"id":"34457","type":"WheelZoomTool"},{"attributes":{},"id":"34442","type":"LinearScale"},{"attributes":{},"id":"34461","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"34481","type":"Selection"},"selection_policy":{"id":"34482","type":"UnionRenderers"}},"id":"34469","type":"ColumnDataSource"},{"attributes":{},"id":"34459","type":"SaveTool"},{"attributes":{},"id":"34482","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"34438","type":"DataRange1d"},{"attributes":{"overlay":{"id":"34483","type":"BoxAnnotation"}},"id":"34458","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"34446","type":"LinearAxis"}],"center":[{"id":"34450","type":"Grid"},{"id":"34455","type":"Grid"}],"left":[{"id":"34451","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"34472","type":"GlyphRenderer"}],"title":{"id":"34476","type":"Title"},"toolbar":{"id":"34462","type":"Toolbar"},"x_range":{"id":"34438","type":"DataRange1d"},"x_scale":{"id":"34442","type":"LinearScale"},"y_range":{"id":"34440","type":"DataRange1d"},"y_scale":{"id":"34444","type":"LinearScale"}},"id":"34437","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"34469","type":"ColumnDataSource"}},"id":"34473","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34483","type":"BoxAnnotation"},{"attributes":{},"id":"34460","type":"ResetTool"},{"attributes":{},"id":"34444","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34471","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34456","type":"PanTool"},{"id":"34457","type":"WheelZoomTool"},{"id":"34458","type":"BoxZoomTool"},{"id":"34459","type":"SaveTool"},{"id":"34460","type":"ResetTool"},{"id":"34461","type":"HelpTool"}]},"id":"34462","type":"Toolbar"},{"attributes":{"callback":null},"id":"34440","type":"DataRange1d"},{"attributes":{"formatter":{"id":"34474","type":"FuncTickFormatter"},"ticker":{"id":"34452","type":"BasicTicker"}},"id":"34451","type":"LinearAxis"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"34474","type":"FuncTickFormatter"},{"attributes":{},"id":"34452","type":"BasicTicker"},{"attributes":{"text":""},"id":"34476","type":"Title"},{"attributes":{"ticker":{"id":"34447","type":"BasicTicker"}},"id":"34450","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34470","type":"Circle"},{"attributes":{},"id":"34447","type":"BasicTicker"},{"attributes":{"data_source":{"id":"34469","type":"ColumnDataSource"},"glyph":{"id":"34470","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34471","type":"Circle"},"selection_glyph":null,"view":{"id":"34473","type":"CDSView"}},"id":"34472","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"34452","type":"BasicTicker"}},"id":"34455","type":"Grid"},{"attributes":{},"id":"34479","type":"BasicTickFormatter"},{"attributes":{},"id":"34456","type":"PanTool"},{"attributes":{"formatter":{"id":"34479","type":"BasicTickFormatter"},"ticker":{"id":"34447","type":"BasicTicker"}},"id":"34446","type":"LinearAxis"}],"root_ids":["34437"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"23d962c2-82e9-40fa-9b49-1c917193271f","roots":{"34437":"f3509848-6bdc-44a7-a3c6-eac732112ee8"}}];
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