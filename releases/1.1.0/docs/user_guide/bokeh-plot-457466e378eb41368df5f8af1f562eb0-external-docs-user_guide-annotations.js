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
      };var element = document.getElementById("94e2b48b-af11-460b-9380-418603142787");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '94e2b48b-af11-460b-9380-418603142787' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c17019e0-3a7c-47dc-890f-12fe317802a1":{"roots":{"references":[{"attributes":{},"id":"17203","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"17195","type":"BasicTicker"}},"id":"17198","type":"Grid"},{"attributes":{"data_source":{"id":"17212","type":"ColumnDataSource"},"glyph":{"id":"17213","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17214","type":"Circle"},"selection_glyph":null,"view":{"id":"17216","type":"CDSView"}},"id":"17215","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"17219","type":"BasicTickFormatter"},"ticker":{"id":"17195","type":"BasicTicker"}},"id":"17194","type":"LinearAxis"},{"attributes":{},"id":"17221","type":"BasicTickFormatter"},{"attributes":{},"id":"17202","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17199","type":"PanTool"},{"id":"17200","type":"WheelZoomTool"},{"id":"17201","type":"BoxZoomTool"},{"id":"17202","type":"SaveTool"},{"id":"17203","type":"ResetTool"},{"id":"17204","type":"HelpTool"}]},"id":"17205","type":"Toolbar"},{"attributes":{"source":{"id":"17212","type":"ColumnDataSource"}},"id":"17216","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17213","type":"Circle"},{"attributes":{"formatter":{"id":"17221","type":"BasicTickFormatter"},"ticker":{"id":"17190","type":"BasicTicker"}},"id":"17189","type":"LinearAxis"},{"attributes":{},"id":"17195","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17224","type":"BoxAnnotation"}},"id":"17201","type":"BoxZoomTool"},{"attributes":{},"id":"17185","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17223","type":"Selection"},"selection_policy":{"id":"17222","type":"UnionRenderers"}},"id":"17212","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17189","type":"LinearAxis"}],"center":[{"id":"17193","type":"Grid"},{"id":"17198","type":"Grid"}],"left":[{"id":"17194","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17215","type":"GlyphRenderer"}],"title":{"id":"17179","type":"Title"},"title_location":"left","toolbar":{"id":"17205","type":"Toolbar"},"x_range":{"id":"17181","type":"DataRange1d"},"x_scale":{"id":"17185","type":"LinearScale"},"y_range":{"id":"17183","type":"DataRange1d"},"y_scale":{"id":"17187","type":"LinearScale"}},"id":"17178","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17219","type":"BasicTickFormatter"},{"attributes":{},"id":"17223","type":"Selection"},{"attributes":{},"id":"17199","type":"PanTool"},{"attributes":{"text":"Left Title"},"id":"17179","type":"Title"},{"attributes":{},"id":"17190","type":"BasicTicker"},{"attributes":{},"id":"17200","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17224","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"17181","type":"DataRange1d"},{"attributes":{},"id":"17204","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17214","type":"Circle"},{"attributes":{"ticker":{"id":"17190","type":"BasicTicker"}},"id":"17193","type":"Grid"},{"attributes":{},"id":"17187","type":"LinearScale"},{"attributes":{"callback":null},"id":"17183","type":"DataRange1d"},{"attributes":{},"id":"17222","type":"UnionRenderers"}],"root_ids":["17178"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"c17019e0-3a7c-47dc-890f-12fe317802a1","roots":{"17178":"94e2b48b-af11-460b-9380-418603142787"}}];
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