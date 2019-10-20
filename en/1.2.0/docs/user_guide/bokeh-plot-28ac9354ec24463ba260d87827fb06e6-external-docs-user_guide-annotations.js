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
      };var element = document.getElementById("b4278a2a-63b0-444e-9f0d-e2f4e30a732b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b4278a2a-63b0-444e-9f0d-e2f4e30a732b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"87af615e-8c0c-47bb-827c-67e3720d208e":{"roots":{"references":[{"attributes":{},"id":"17964","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"17954","type":"BasicTicker"}},"id":"17957","type":"Grid"},{"attributes":{"data_source":{"id":"17976","type":"ColumnDataSource"},"glyph":{"id":"17977","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17978","type":"Circle"},"selection_glyph":null,"view":{"id":"17980","type":"CDSView"}},"id":"17979","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17988","type":"BoxAnnotation"},{"attributes":{},"id":"17949","type":"LinearScale"},{"attributes":{},"id":"17954","type":"BasicTicker"},{"attributes":{},"id":"17951","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17977","type":"Circle"},{"attributes":{"callback":null},"id":"17947","type":"DataRange1d"},{"attributes":{},"id":"17959","type":"BasicTicker"},{"attributes":{"formatter":{"id":"17982","type":"BasicTickFormatter"},"ticker":{"id":"17959","type":"BasicTicker"}},"id":"17958","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17945","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17986","type":"Selection"},"selection_policy":{"id":"17987","type":"UnionRenderers"}},"id":"17976","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17953","type":"LinearAxis"}],"center":[{"id":"17957","type":"Grid"},{"id":"17962","type":"Grid"}],"left":[{"id":"17958","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17979","type":"GlyphRenderer"}],"title":{"id":"17943","type":"Title"},"title_location":"left","toolbar":{"id":"17969","type":"Toolbar"},"x_range":{"id":"17945","type":"DataRange1d"},"x_scale":{"id":"17949","type":"LinearScale"},"y_range":{"id":"17947","type":"DataRange1d"},"y_scale":{"id":"17951","type":"LinearScale"}},"id":"17942","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17984","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17988","type":"BoxAnnotation"}},"id":"17965","type":"BoxZoomTool"},{"attributes":{"text":"Left Title"},"id":"17943","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"17959","type":"BasicTicker"}},"id":"17962","type":"Grid"},{"attributes":{"formatter":{"id":"17984","type":"BasicTickFormatter"},"ticker":{"id":"17954","type":"BasicTicker"}},"id":"17953","type":"LinearAxis"},{"attributes":{},"id":"17968","type":"HelpTool"},{"attributes":{},"id":"17986","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17978","type":"Circle"},{"attributes":{},"id":"17966","type":"SaveTool"},{"attributes":{},"id":"17987","type":"UnionRenderers"},{"attributes":{"source":{"id":"17976","type":"ColumnDataSource"}},"id":"17980","type":"CDSView"},{"attributes":{},"id":"17982","type":"BasicTickFormatter"},{"attributes":{},"id":"17967","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17963","type":"PanTool"},{"id":"17964","type":"WheelZoomTool"},{"id":"17965","type":"BoxZoomTool"},{"id":"17966","type":"SaveTool"},{"id":"17967","type":"ResetTool"},{"id":"17968","type":"HelpTool"}]},"id":"17969","type":"Toolbar"},{"attributes":{},"id":"17963","type":"PanTool"}],"root_ids":["17942"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"87af615e-8c0c-47bb-827c-67e3720d208e","roots":{"17942":"b4278a2a-63b0-444e-9f0d-e2f4e30a732b"}}];
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