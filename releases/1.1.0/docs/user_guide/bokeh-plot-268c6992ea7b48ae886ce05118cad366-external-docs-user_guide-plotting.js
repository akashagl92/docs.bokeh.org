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
      };var element = document.getElementById("a8135167-7f1c-4a54-b438-bea4b6719d5d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a8135167-7f1c-4a54-b438-bea4b6719d5d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"286dcba5-958d-4fbd-80a8-0adebd39c819":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"29315","type":"Circle"},{"attributes":{},"id":"29325","type":"Selection"},{"attributes":{"source":{"id":"29313","type":"ColumnDataSource"}},"id":"29317","type":"CDSView"},{"attributes":{},"id":"29324","type":"UnionRenderers"},{"attributes":{},"id":"29304","type":"HelpTool"},{"attributes":{},"id":"29299","type":"PanTool"},{"attributes":{},"id":"29287","type":"LinearScale"},{"attributes":{},"id":"29285","type":"LinearScale"},{"attributes":{},"id":"29290","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29299","type":"PanTool"},{"id":"29300","type":"WheelZoomTool"},{"id":"29301","type":"BoxZoomTool"},{"id":"29302","type":"SaveTool"},{"id":"29303","type":"ResetTool"},{"id":"29304","type":"HelpTool"}]},"id":"29305","type":"Toolbar"},{"attributes":{},"id":"29295","type":"BasicTicker"},{"attributes":{},"id":"29302","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"29314","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29326","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"29290","type":"BasicTicker"}},"id":"29293","type":"Grid"},{"attributes":{"below":[{"id":"29289","type":"LinearAxis"}],"center":[{"id":"29293","type":"Grid"},{"id":"29298","type":"Grid"}],"left":[{"id":"29294","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29316","type":"GlyphRenderer"}],"title":{"id":"29319","type":"Title"},"toolbar":{"id":"29305","type":"Toolbar"},"x_range":{"id":"29281","type":"Range1d"},"x_scale":{"id":"29285","type":"LinearScale"},"y_range":{"id":"29312","type":"Range1d"},"y_scale":{"id":"29287","type":"LinearScale"}},"id":"29280","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":20},"id":"29281","type":"Range1d"},{"attributes":{},"id":"29321","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"29325","type":"Selection"},"selection_policy":{"id":"29324","type":"UnionRenderers"}},"id":"29313","type":"ColumnDataSource"},{"attributes":{},"id":"29303","type":"ResetTool"},{"attributes":{},"id":"29323","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"29326","type":"BoxAnnotation"}},"id":"29301","type":"BoxZoomTool"},{"attributes":{},"id":"29300","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"29295","type":"BasicTicker"}},"id":"29298","type":"Grid"},{"attributes":{"formatter":{"id":"29321","type":"BasicTickFormatter"},"ticker":{"id":"29295","type":"BasicTicker"}},"id":"29294","type":"LinearAxis"},{"attributes":{"data_source":{"id":"29313","type":"ColumnDataSource"},"glyph":{"id":"29314","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29315","type":"Circle"},"selection_glyph":null,"view":{"id":"29317","type":"CDSView"}},"id":"29316","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":15},"id":"29312","type":"Range1d"},{"attributes":{"formatter":{"id":"29323","type":"BasicTickFormatter"},"ticker":{"id":"29290","type":"BasicTicker"}},"id":"29289","type":"LinearAxis"},{"attributes":{"text":""},"id":"29319","type":"Title"}],"root_ids":["29280"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"286dcba5-958d-4fbd-80a8-0adebd39c819","roots":{"29280":"a8135167-7f1c-4a54-b438-bea4b6719d5d"}}];
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