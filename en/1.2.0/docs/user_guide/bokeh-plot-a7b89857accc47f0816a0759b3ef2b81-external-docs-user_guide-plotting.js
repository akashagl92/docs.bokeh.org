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
      };var element = document.getElementById("52a1877d-736a-4e8d-8872-76628df6d3ff");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '52a1877d-736a-4e8d-8872-76628df6d3ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0ae15809-173b-4af0-a230-83e6d730798d":{"roots":{"references":[{"attributes":{},"id":"30017","type":"BasicTickFormatter"},{"attributes":{},"id":"30020","type":"UnionRenderers"},{"attributes":{"below":[{"id":"29985","type":"LinearAxis"}],"center":[{"id":"29989","type":"Grid"},{"id":"29994","type":"Grid"}],"left":[{"id":"29990","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30011","type":"GlyphRenderer"}],"title":{"id":"30013","type":"Title"},"toolbar":{"id":"30001","type":"Toolbar"},"x_range":{"id":"29977","type":"DataRange1d"},"x_scale":{"id":"29981","type":"LinearScale"},"y_range":{"id":"29979","type":"DataRange1d"},"y_scale":{"id":"29983","type":"LinearScale"}},"id":"29976","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"30013","type":"Title"},{"attributes":{},"id":"29995","type":"PanTool"},{"attributes":{},"id":"29999","type":"ResetTool"},{"attributes":{"formatter":{"id":"30017","type":"BasicTickFormatter"},"ticker":{"id":"29986","type":"BasicTicker"}},"id":"29985","type":"LinearAxis"},{"attributes":{"overlay":{"id":"30021","type":"BoxAnnotation"}},"id":"29997","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"29991","type":"BasicTicker"}},"id":"29994","type":"Grid"},{"attributes":{"data_source":{"id":"30008","type":"ColumnDataSource"},"glyph":{"id":"30009","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30010","type":"Arc"},"selection_glyph":null,"view":{"id":"30012","type":"CDSView"}},"id":"30011","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30009","type":"Arc"},{"attributes":{},"id":"29996","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"29979","type":"DataRange1d"},{"attributes":{},"id":"30015","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"30008","type":"ColumnDataSource"}},"id":"30012","type":"CDSView"},{"attributes":{},"id":"29991","type":"BasicTicker"},{"attributes":{},"id":"30019","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29995","type":"PanTool"},{"id":"29996","type":"WheelZoomTool"},{"id":"29997","type":"BoxZoomTool"},{"id":"29998","type":"SaveTool"},{"id":"29999","type":"ResetTool"},{"id":"30000","type":"HelpTool"}]},"id":"30001","type":"Toolbar"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30010","type":"Arc"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30019","type":"Selection"},"selection_policy":{"id":"30020","type":"UnionRenderers"}},"id":"30008","type":"ColumnDataSource"},{"attributes":{},"id":"29983","type":"LinearScale"},{"attributes":{"formatter":{"id":"30015","type":"BasicTickFormatter"},"ticker":{"id":"29991","type":"BasicTicker"}},"id":"29990","type":"LinearAxis"},{"attributes":{"ticker":{"id":"29986","type":"BasicTicker"}},"id":"29989","type":"Grid"},{"attributes":{},"id":"29998","type":"SaveTool"},{"attributes":{},"id":"29981","type":"LinearScale"},{"attributes":{"callback":null},"id":"29977","type":"DataRange1d"},{"attributes":{},"id":"29986","type":"BasicTicker"},{"attributes":{},"id":"30000","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30021","type":"BoxAnnotation"}],"root_ids":["29976"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"0ae15809-173b-4af0-a230-83e6d730798d","roots":{"29976":"52a1877d-736a-4e8d-8872-76628df6d3ff"}}];
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