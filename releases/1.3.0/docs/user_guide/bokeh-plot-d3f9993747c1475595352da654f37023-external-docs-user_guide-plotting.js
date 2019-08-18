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
      };var element = document.getElementById("d44884ab-3a76-4f5c-8712-8ad846b7bcc1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd44884ab-3a76-4f5c-8712-8ad846b7bcc1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"d6226c65-6983-4094-9222-583bd487c0b0":{"roots":{"references":[{"attributes":{},"id":"30763","type":"SaveTool"},{"attributes":{},"id":"30761","type":"WheelZoomTool"},{"attributes":{"source":{"id":"30773","type":"ColumnDataSource"}},"id":"30777","type":"CDSView"},{"attributes":{},"id":"30791","type":"Selection"},{"attributes":{},"id":"30764","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30780","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"30756","type":"LogTicker"}},"id":"30759","type":"Grid"},{"attributes":{"source":{"id":"30778","type":"ColumnDataSource"}},"id":"30782","type":"CDSView"},{"attributes":{"ticker":{"id":"30751","type":"BasicTicker"}},"id":"30754","type":"Grid"},{"attributes":{},"id":"30748","type":"LogScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30789","type":"BoxAnnotation"},{"attributes":{},"id":"30793","type":"Selection"},{"attributes":{},"id":"30760","type":"PanTool"},{"attributes":{"overlay":{"id":"30789","type":"BoxAnnotation"}},"id":"30762","type":"BoxZoomTool"},{"attributes":{},"id":"30746","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30774","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30775","type":"Line"},{"attributes":{"data_source":{"id":"30773","type":"ColumnDataSource"},"glyph":{"id":"30774","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30775","type":"Line"},"selection_glyph":null,"view":{"id":"30777","type":"CDSView"}},"id":"30776","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"30750","type":"LinearAxis"}],"center":[{"id":"30754","type":"Grid"},{"id":"30759","type":"Grid"}],"left":[{"id":"30755","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30776","type":"GlyphRenderer"},{"id":"30781","type":"GlyphRenderer"}],"title":{"id":"30784","type":"Title"},"toolbar":{"id":"30766","type":"Toolbar"},"x_range":{"id":"30742","type":"DataRange1d"},"x_scale":{"id":"30746","type":"LinearScale"},"y_range":{"id":"30744","type":"DataRange1d"},"y_scale":{"id":"30748","type":"LogScale"}},"id":"30741","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"30791","type":"Selection"},"selection_policy":{"id":"30790","type":"UnionRenderers"}},"id":"30773","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30779","type":"Circle"},{"attributes":{"callback":null},"id":"30744","type":"DataRange1d"},{"attributes":{"formatter":{"id":"30788","type":"LogTickFormatter"},"ticker":{"id":"30756","type":"LogTicker"}},"id":"30755","type":"LogAxis"},{"attributes":{},"id":"30765","type":"HelpTool"},{"attributes":{"data_source":{"id":"30778","type":"ColumnDataSource"},"glyph":{"id":"30779","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30780","type":"Circle"},"selection_glyph":null,"view":{"id":"30782","type":"CDSView"}},"id":"30781","type":"GlyphRenderer"},{"attributes":{},"id":"30790","type":"UnionRenderers"},{"attributes":{"num_minor_ticks":10},"id":"30756","type":"LogTicker"},{"attributes":{"callback":null},"id":"30742","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"30793","type":"Selection"},"selection_policy":{"id":"30792","type":"UnionRenderers"}},"id":"30778","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"30786","type":"BasicTickFormatter"},"ticker":{"id":"30751","type":"BasicTicker"}},"id":"30750","type":"LinearAxis"},{"attributes":{},"id":"30786","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30760","type":"PanTool"},{"id":"30761","type":"WheelZoomTool"},{"id":"30762","type":"BoxZoomTool"},{"id":"30763","type":"SaveTool"},{"id":"30764","type":"ResetTool"},{"id":"30765","type":"HelpTool"}]},"id":"30766","type":"Toolbar"},{"attributes":{},"id":"30792","type":"UnionRenderers"},{"attributes":{"text":""},"id":"30784","type":"Title"},{"attributes":{"ticker":null},"id":"30788","type":"LogTickFormatter"},{"attributes":{},"id":"30751","type":"BasicTicker"}],"root_ids":["30741"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"d6226c65-6983-4094-9222-583bd487c0b0","roots":{"30741":"d44884ab-3a76-4f5c-8712-8ad846b7bcc1"}}];
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