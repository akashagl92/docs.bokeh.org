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
      };var element = document.getElementById("b4fa750e-99b7-4197-ab01-c87cce90d0e9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b4fa750e-99b7-4197-ab01-c87cce90d0e9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"e036382c-30c7-4055-87e5-69153ea15e3e":{"roots":{"references":[{"attributes":{"formatter":{"id":"30043","type":"BasicTickFormatter"},"ticker":{"id":"30018","type":"BasicTicker"}},"id":"30017","type":"LinearAxis"},{"attributes":{"callback":null},"id":"30006","type":"DataRange1d"},{"attributes":{},"id":"30026","type":"ResetTool"},{"attributes":{},"id":"30008","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30037","type":"Arc"},{"attributes":{},"id":"30046","type":"Selection"},{"attributes":{},"id":"30027","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"30018","type":"BasicTicker"}},"id":"30021","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30046","type":"Selection"},"selection_policy":{"id":"30047","type":"UnionRenderers"}},"id":"30035","type":"ColumnDataSource"},{"attributes":{},"id":"30047","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30035","type":"ColumnDataSource"},"glyph":{"id":"30036","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30037","type":"Arc"},"selection_glyph":null,"view":{"id":"30039","type":"CDSView"}},"id":"30038","type":"GlyphRenderer"},{"attributes":{},"id":"30022","type":"PanTool"},{"attributes":{"below":[{"id":"30012","type":"LinearAxis"}],"center":[{"id":"30016","type":"Grid"},{"id":"30021","type":"Grid"}],"left":[{"id":"30017","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30038","type":"GlyphRenderer"}],"title":{"id":"30041","type":"Title"},"toolbar":{"id":"30028","type":"Toolbar"},"x_range":{"id":"30004","type":"DataRange1d"},"x_scale":{"id":"30008","type":"LinearScale"},"y_range":{"id":"30006","type":"DataRange1d"},"y_scale":{"id":"30010","type":"LinearScale"}},"id":"30003","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30022","type":"PanTool"},{"id":"30023","type":"WheelZoomTool"},{"id":"30024","type":"BoxZoomTool"},{"id":"30025","type":"SaveTool"},{"id":"30026","type":"ResetTool"},{"id":"30027","type":"HelpTool"}]},"id":"30028","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30048","type":"BoxAnnotation"},{"attributes":{},"id":"30010","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30036","type":"Arc"},{"attributes":{"text":""},"id":"30041","type":"Title"},{"attributes":{"formatter":{"id":"30045","type":"BasicTickFormatter"},"ticker":{"id":"30013","type":"BasicTicker"}},"id":"30012","type":"LinearAxis"},{"attributes":{},"id":"30023","type":"WheelZoomTool"},{"attributes":{},"id":"30018","type":"BasicTicker"},{"attributes":{"overlay":{"id":"30048","type":"BoxAnnotation"}},"id":"30024","type":"BoxZoomTool"},{"attributes":{},"id":"30013","type":"BasicTicker"},{"attributes":{"source":{"id":"30035","type":"ColumnDataSource"}},"id":"30039","type":"CDSView"},{"attributes":{},"id":"30045","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30004","type":"DataRange1d"},{"attributes":{"ticker":{"id":"30013","type":"BasicTicker"}},"id":"30016","type":"Grid"},{"attributes":{},"id":"30025","type":"SaveTool"},{"attributes":{},"id":"30043","type":"BasicTickFormatter"}],"root_ids":["30003"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"e036382c-30c7-4055-87e5-69153ea15e3e","roots":{"30003":"b4fa750e-99b7-4197-ab01-c87cce90d0e9"}}];
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
        function(Bokeh) {
        
        
        }
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