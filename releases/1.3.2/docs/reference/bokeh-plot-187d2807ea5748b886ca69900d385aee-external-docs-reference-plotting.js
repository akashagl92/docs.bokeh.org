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
      };var element = document.getElementById("66ca305a-07cc-4c77-9619-a80183989819");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '66ca305a-07cc-4c77-9619-a80183989819' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"7cc3efb3-8296-4d5e-9036-2f4f7dd55f25":{"roots":{"references":[{"attributes":{"text":""},"id":"17233","type":"Title"},{"attributes":{},"id":"17219","type":"ResetTool"},{"attributes":{},"id":"17211","type":"BasicTicker"},{"attributes":{},"id":"17220","type":"HelpTool"},{"attributes":{},"id":"17235","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"17206","type":"BasicTicker"}},"id":"17209","type":"Grid"},{"attributes":{"formatter":{"id":"17237","type":"BasicTickFormatter"},"ticker":{"id":"17211","type":"BasicTicker"}},"id":"17210","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17241","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17215","type":"PanTool"},{"id":"17216","type":"WheelZoomTool"},{"id":"17217","type":"BoxZoomTool"},{"id":"17218","type":"SaveTool"},{"id":"17219","type":"ResetTool"},{"id":"17220","type":"HelpTool"}]},"id":"17221","type":"Toolbar"},{"attributes":{},"id":"17218","type":"SaveTool"},{"attributes":{"overlay":{"id":"17241","type":"BoxAnnotation"}},"id":"17217","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"17205","type":"LinearAxis"}],"center":[{"id":"17209","type":"Grid"},{"id":"17214","type":"Grid"}],"left":[{"id":"17210","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17231","type":"GlyphRenderer"}],"title":{"id":"17233","type":"Title"},"toolbar":{"id":"17221","type":"Toolbar"},"x_range":{"id":"17197","type":"DataRange1d"},"x_scale":{"id":"17201","type":"LinearScale"},"y_range":{"id":"17199","type":"DataRange1d"},"y_scale":{"id":"17203","type":"LinearScale"}},"id":"17196","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17206","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"17211","type":"BasicTicker"}},"id":"17214","type":"Grid"},{"attributes":{"source":{"id":"17228","type":"ColumnDataSource"}},"id":"17232","type":"CDSView"},{"attributes":{},"id":"17203","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y1":[0,0,0],"y2":[1,4,2]},"selected":{"id":"17240","type":"Selection"},"selection_policy":{"id":"17239","type":"UnionRenderers"}},"id":"17228","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"17197","type":"DataRange1d"},{"attributes":{},"id":"17216","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"17228","type":"ColumnDataSource"},"glyph":{"id":"17229","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17230","type":"VArea"},"selection_glyph":null,"view":{"id":"17232","type":"CDSView"}},"id":"17231","type":"GlyphRenderer"},{"attributes":{"fill_color":"#99D594","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17229","type":"VArea"},{"attributes":{},"id":"17201","type":"LinearScale"},{"attributes":{},"id":"17240","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17230","type":"VArea"},{"attributes":{},"id":"17215","type":"PanTool"},{"attributes":{"callback":null},"id":"17199","type":"DataRange1d"},{"attributes":{},"id":"17237","type":"BasicTickFormatter"},{"attributes":{},"id":"17239","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"17235","type":"BasicTickFormatter"},"ticker":{"id":"17206","type":"BasicTicker"}},"id":"17205","type":"LinearAxis"}],"root_ids":["17196"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"7cc3efb3-8296-4d5e-9036-2f4f7dd55f25","roots":{"17196":"66ca305a-07cc-4c77-9619-a80183989819"}}];
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