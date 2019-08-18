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
      };var element = document.getElementById("8f44f753-467c-4a2b-bbab-12818bcf30d9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8f44f753-467c-4a2b-bbab-12818bcf30d9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc584170-1b14-4913-8c1f-07ea4d1bdb8b":{"roots":{"references":[{"attributes":{},"id":"32198","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32233","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32232","type":"Selection"},"selection_policy":{"id":"32231","type":"UnionRenderers"}},"id":"32220","type":"ColumnDataSource"},{"attributes":{},"id":"32210","type":"SaveTool"},{"attributes":{"callback":null},"id":"32189","type":"DataRange1d"},{"attributes":{},"id":"32193","type":"LinearScale"},{"attributes":{},"id":"32228","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32191","type":"DataRange1d"},{"attributes":{},"id":"32230","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"32203","type":"BasicTicker"}},"id":"32206","type":"Grid"},{"attributes":{"overlay":{"id":"32233","type":"BoxAnnotation"}},"id":"32209","type":"BoxZoomTool"},{"attributes":{},"id":"32231","type":"UnionRenderers"},{"attributes":{"text":""},"id":"32226","type":"Title"},{"attributes":{"source":{"id":"32220","type":"ColumnDataSource"}},"id":"32224","type":"CDSView"},{"attributes":{},"id":"32207","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32222","type":"Circle"},{"attributes":{},"id":"32211","type":"ResetTool"},{"attributes":{},"id":"32195","type":"LinearScale"},{"attributes":{"data_source":{"id":"32220","type":"ColumnDataSource"},"glyph":{"id":"32221","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32222","type":"Circle"},"selection_glyph":null,"view":{"id":"32224","type":"CDSView"}},"id":"32223","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32207","type":"PanTool"},{"id":"32208","type":"WheelZoomTool"},{"id":"32209","type":"BoxZoomTool"},{"id":"32210","type":"SaveTool"},{"id":"32211","type":"ResetTool"},{"id":"32212","type":"HelpTool"}]},"id":"32213","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"32221","type":"Circle"},{"attributes":{},"id":"32203","type":"BasicTicker"},{"attributes":{},"id":"32212","type":"HelpTool"},{"attributes":{"formatter":{"id":"32230","type":"BasicTickFormatter"},"ticker":{"id":"32198","type":"BasicTicker"}},"id":"32197","type":"LinearAxis"},{"attributes":{"formatter":{"id":"32228","type":"BasicTickFormatter"},"ticker":{"id":"32203","type":"BasicTicker"}},"id":"32202","type":"LinearAxis"},{"attributes":{},"id":"32208","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"32198","type":"BasicTicker"}},"id":"32201","type":"Grid"},{"attributes":{"below":[{"id":"32197","type":"LinearAxis"}],"center":[{"id":"32201","type":"Grid"},{"id":"32206","type":"Grid"}],"left":[{"id":"32202","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32223","type":"GlyphRenderer"}],"title":{"id":"32226","type":"Title"},"toolbar":{"id":"32213","type":"Toolbar"},"x_range":{"id":"32189","type":"DataRange1d"},"x_scale":{"id":"32193","type":"LinearScale"},"y_range":{"id":"32191","type":"DataRange1d"},"y_scale":{"id":"32195","type":"LinearScale"}},"id":"32188","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32232","type":"Selection"}],"root_ids":["32188"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"cc584170-1b14-4913-8c1f-07ea4d1bdb8b","roots":{"32188":"8f44f753-467c-4a2b-bbab-12818bcf30d9"}}];
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