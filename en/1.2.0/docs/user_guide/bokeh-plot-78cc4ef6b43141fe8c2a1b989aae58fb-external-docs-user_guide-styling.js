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
      };var element = document.getElementById("aca6a217-7de4-4367-a488-0635e330f27c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'aca6a217-7de4-4367-a488-0635e330f27c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"12e5f34c-ae88-4993-86b3-cd18686cee20":{"roots":{"references":[{"attributes":{"below":[{"id":"33801","type":"LinearAxis"}],"center":[{"id":"33805","type":"Grid"},{"id":"33810","type":"Grid"}],"left":[{"id":"33806","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33827","type":"GlyphRenderer"}],"title":{"id":"33791","type":"Title"},"toolbar":{"id":"33817","type":"Toolbar"},"x_range":{"id":"33793","type":"DataRange1d"},"x_scale":{"id":"33797","type":"LinearScale"},"y_range":{"id":"33795","type":"DataRange1d"},"y_scale":{"id":"33799","type":"LinearScale"}},"id":"33790","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33814","type":"SaveTool"},{"attributes":{},"id":"33812","type":"WheelZoomTool"},{"attributes":{},"id":"33833","type":"BasicTickFormatter"},{"attributes":{},"id":"33815","type":"ResetTool"},{"attributes":{"formatter":{"id":"33833","type":"BasicTickFormatter"},"ticker":{"id":"33802","type":"BasicTicker"}},"id":"33801","type":"LinearAxis"},{"attributes":{},"id":"33835","type":"Selection"},{"attributes":{"overlay":{"id":"33837","type":"BoxAnnotation"}},"id":"33813","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"33802","type":"BasicTicker"}},"id":"33805","type":"Grid"},{"attributes":{"callback":null},"id":"33793","type":"DataRange1d"},{"attributes":{},"id":"33799","type":"LinearScale"},{"attributes":{},"id":"33836","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"33795","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33837","type":"BoxAnnotation"},{"attributes":{},"id":"33816","type":"HelpTool"},{"attributes":{},"id":"33811","type":"PanTool"},{"attributes":{},"id":"33797","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33825","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","autohide":true,"tools":[{"id":"33811","type":"PanTool"},{"id":"33812","type":"WheelZoomTool"},{"id":"33813","type":"BoxZoomTool"},{"id":"33814","type":"SaveTool"},{"id":"33815","type":"ResetTool"},{"id":"33816","type":"HelpTool"}]},"id":"33817","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33835","type":"Selection"},"selection_policy":{"id":"33836","type":"UnionRenderers"}},"id":"33824","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33826","type":"Line"},{"attributes":{"text":"Toolbar Autohide"},"id":"33791","type":"Title"},{"attributes":{"source":{"id":"33824","type":"ColumnDataSource"}},"id":"33828","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"33807","type":"BasicTicker"}},"id":"33810","type":"Grid"},{"attributes":{},"id":"33802","type":"BasicTicker"},{"attributes":{},"id":"33831","type":"BasicTickFormatter"},{"attributes":{},"id":"33807","type":"BasicTicker"},{"attributes":{"data_source":{"id":"33824","type":"ColumnDataSource"},"glyph":{"id":"33825","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33826","type":"Line"},"selection_glyph":null,"view":{"id":"33828","type":"CDSView"}},"id":"33827","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33831","type":"BasicTickFormatter"},"ticker":{"id":"33807","type":"BasicTicker"}},"id":"33806","type":"LinearAxis"}],"root_ids":["33790"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"12e5f34c-ae88-4993-86b3-cd18686cee20","roots":{"33790":"aca6a217-7de4-4367-a488-0635e330f27c"}}];
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