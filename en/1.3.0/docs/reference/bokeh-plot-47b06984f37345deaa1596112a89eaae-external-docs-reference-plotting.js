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
      };var element = document.getElementById("5b0e5019-8449-4aed-9460-9963eabe0319");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5b0e5019-8449-4aed-9460-9963eabe0319' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"5c99da08-acf8-4568-91b0-b871de1c7d8c":{"roots":{"references":[{"attributes":{"below":[{"id":"15721","type":"LinearAxis"}],"center":[{"id":"15725","type":"Grid"},{"id":"15730","type":"Grid"}],"left":[{"id":"15726","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"15747","type":"GlyphRenderer"}],"title":{"id":"15750","type":"Title"},"toolbar":{"id":"15737","type":"Toolbar"},"x_range":{"id":"15713","type":"DataRange1d"},"x_scale":{"id":"15717","type":"LinearScale"},"y_range":{"id":"15715","type":"DataRange1d"},"y_scale":{"id":"15719","type":"LinearScale"}},"id":"15712","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15732","type":"WheelZoomTool"},{"attributes":{},"id":"15752","type":"BasicTickFormatter"},{"attributes":{},"id":"15722","type":"BasicTicker"},{"attributes":{"overlay":{"id":"15755","type":"BoxAnnotation"}},"id":"15733","type":"BoxZoomTool"},{"attributes":{},"id":"15754","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"15722","type":"BasicTicker"}},"id":"15725","type":"Grid"},{"attributes":{},"id":"15734","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15755","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"15754","type":"BasicTickFormatter"},"ticker":{"id":"15727","type":"BasicTicker"}},"id":"15726","type":"LinearAxis"},{"attributes":{},"id":"15735","type":"ResetTool"},{"attributes":{},"id":"15756","type":"UnionRenderers"},{"attributes":{},"id":"15727","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"15757","type":"Selection"},"selection_policy":{"id":"15756","type":"UnionRenderers"}},"id":"15744","type":"ColumnDataSource"},{"attributes":{},"id":"15736","type":"HelpTool"},{"attributes":{"callback":null},"id":"15713","type":"DataRange1d"},{"attributes":{},"id":"15757","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"15727","type":"BasicTicker"}},"id":"15730","type":"Grid"},{"attributes":{"formatter":{"id":"15752","type":"BasicTickFormatter"},"ticker":{"id":"15722","type":"BasicTicker"}},"id":"15721","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15731","type":"PanTool"},{"id":"15732","type":"WheelZoomTool"},{"id":"15733","type":"BoxZoomTool"},{"id":"15734","type":"SaveTool"},{"id":"15735","type":"ResetTool"},{"id":"15736","type":"HelpTool"}]},"id":"15737","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"15746","type":"HexTile"},{"attributes":{"callback":null},"id":"15715","type":"DataRange1d"},{"attributes":{"source":{"id":"15744","type":"ColumnDataSource"}},"id":"15748","type":"CDSView"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"15745","type":"HexTile"},{"attributes":{},"id":"15717","type":"LinearScale"},{"attributes":{"data_source":{"id":"15744","type":"ColumnDataSource"},"glyph":{"id":"15745","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15746","type":"HexTile"},"selection_glyph":null,"view":{"id":"15748","type":"CDSView"}},"id":"15747","type":"GlyphRenderer"},{"attributes":{},"id":"15731","type":"PanTool"},{"attributes":{},"id":"15719","type":"LinearScale"},{"attributes":{"text":""},"id":"15750","type":"Title"}],"root_ids":["15712"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"5c99da08-acf8-4568-91b0-b871de1c7d8c","roots":{"15712":"5b0e5019-8449-4aed-9460-9963eabe0319"}}];
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