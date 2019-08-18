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
      };var element = document.getElementById("e76f3371-65d8-4504-a2d1-1af8f795dfa2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e76f3371-65d8-4504-a2d1-1af8f795dfa2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"537420aa-ebb5-4005-a4a2-6fe98dd2f715":{"roots":{"references":[{"attributes":{"formatter":{"id":"26739","type":"BasicTickFormatter"},"ticker":{"id":"26631","type":"BasicTicker"}},"id":"26630","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26698","type":"DataRange1d"},{"attributes":{"ticker":{"id":"26631","type":"BasicTicker"}},"id":"26634","type":"Grid"},{"attributes":{"source":{"id":"26691","type":"ColumnDataSource"}},"id":"26695","type":"CDSView"},{"attributes":{"formatter":{"id":"26741","type":"BasicTickFormatter"},"ticker":{"id":"26636","type":"BasicTicker"}},"id":"26635","type":"LinearAxis"},{"attributes":{},"id":"26636","type":"BasicTicker"},{"attributes":{"below":[{"id":"26706","type":"LinearAxis"}],"center":[{"id":"26710","type":"Grid"},{"id":"26715","type":"Grid"}],"left":[{"id":"26711","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26732","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26722","type":"Toolbar"},"x_range":{"id":"26698","type":"DataRange1d"},"x_scale":{"id":"26702","type":"LinearScale"},"y_range":{"id":"26700","type":"DataRange1d"},"y_scale":{"id":"26704","type":"LinearScale"}},"id":"26696","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26640","type":"PanTool"},{"attributes":{},"id":"26741","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"26636","type":"BasicTicker"}},"id":"26639","type":"Grid"},{"attributes":{"callback":null},"id":"26700","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26654","type":"Circle"},{"attributes":{"data_source":{"id":"26653","type":"ColumnDataSource"},"glyph":{"id":"26654","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26655","type":"Circle"},"selection_glyph":null,"view":{"id":"26657","type":"CDSView"}},"id":"26656","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"26707","type":"BasicTicker"}},"id":"26710","type":"Grid"},{"attributes":{},"id":"26707","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26655","type":"Circle"},{"attributes":{},"id":"26702","type":"LinearScale"},{"attributes":{},"id":"26704","type":"LinearScale"},{"attributes":{},"id":"26641","type":"WheelZoomTool"},{"attributes":{},"id":"26643","type":"SaveTool"},{"attributes":{},"id":"26721","type":"HelpTool"},{"attributes":{},"id":"26626","type":"LinearScale"},{"attributes":{"formatter":{"id":"26747","type":"BasicTickFormatter"},"ticker":{"id":"26707","type":"BasicTicker"}},"id":"26706","type":"LinearAxis"},{"attributes":{},"id":"26645","type":"HelpTool"},{"attributes":{"formatter":{"id":"26749","type":"BasicTickFormatter"},"ticker":{"id":"26712","type":"BasicTicker"}},"id":"26711","type":"LinearAxis"},{"attributes":{},"id":"26644","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26716","type":"PanTool"},{"id":"26717","type":"WheelZoomTool"},{"id":"26718","type":"BoxZoomTool"},{"id":"26719","type":"SaveTool"},{"id":"26720","type":"ResetTool"},{"id":"26721","type":"HelpTool"}]},"id":"26722","type":"Toolbar"},{"attributes":{},"id":"26712","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26622","type":"DataRange1d"},{"attributes":{"overlay":{"id":"26750","type":"BoxAnnotation"}},"id":"26642","type":"BoxZoomTool"},{"attributes":{},"id":"26628","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26640","type":"PanTool"},{"id":"26641","type":"WheelZoomTool"},{"id":"26642","type":"BoxZoomTool"},{"id":"26643","type":"SaveTool"},{"id":"26644","type":"ResetTool"},{"id":"26645","type":"HelpTool"}]},"id":"26646","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26758","type":"Selection"},"selection_policy":{"id":"26757","type":"UnionRenderers"}},"id":"26729","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"26624","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26660","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"26712","type":"BasicTicker"}},"id":"26715","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26730","type":"Square"},{"attributes":{},"id":"26739","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26693","type":"Triangle"},{"attributes":{"source":{"id":"26653","type":"ColumnDataSource"}},"id":"26657","type":"CDSView"},{"attributes":{},"id":"26716","type":"PanTool"},{"attributes":{"below":[{"id":"26668","type":"LinearAxis"}],"center":[{"id":"26672","type":"Grid"},{"id":"26677","type":"Grid"}],"left":[{"id":"26673","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26694","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26684","type":"Toolbar"},"x_range":{"id":"26660","type":"DataRange1d"},"x_scale":{"id":"26664","type":"LinearScale"},"y_range":{"id":"26662","type":"DataRange1d"},"y_scale":{"id":"26666","type":"LinearScale"}},"id":"26658","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26717","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"26662","type":"DataRange1d"},{"attributes":{"overlay":{"id":"26756","type":"BoxAnnotation"}},"id":"26718","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26752","type":"Selection"},"selection_policy":{"id":"26751","type":"UnionRenderers"}},"id":"26653","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"26669","type":"BasicTicker"}},"id":"26672","type":"Grid"},{"attributes":{},"id":"26719","type":"SaveTool"},{"attributes":{},"id":"26669","type":"BasicTicker"},{"attributes":{},"id":"26720","type":"ResetTool"},{"attributes":{},"id":"26664","type":"LinearScale"},{"attributes":{},"id":"26743","type":"BasicTickFormatter"},{"attributes":{},"id":"26666","type":"LinearScale"},{"attributes":{},"id":"26745","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26743","type":"BasicTickFormatter"},"ticker":{"id":"26669","type":"BasicTicker"}},"id":"26668","type":"LinearAxis"},{"attributes":{},"id":"26747","type":"BasicTickFormatter"},{"attributes":{},"id":"26749","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26745","type":"BasicTickFormatter"},"ticker":{"id":"26674","type":"BasicTicker"}},"id":"26673","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26692","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26750","type":"BoxAnnotation"},{"attributes":{},"id":"26674","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26731","type":"Square"},{"attributes":{},"id":"26751","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"26674","type":"BasicTicker"}},"id":"26677","type":"Grid"},{"attributes":{"data_source":{"id":"26729","type":"ColumnDataSource"},"glyph":{"id":"26730","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26731","type":"Square"},"selection_glyph":null,"view":{"id":"26733","type":"CDSView"}},"id":"26732","type":"GlyphRenderer"},{"attributes":{},"id":"26752","type":"Selection"},{"attributes":{"below":[{"id":"26630","type":"LinearAxis"}],"center":[{"id":"26634","type":"Grid"},{"id":"26639","type":"Grid"}],"left":[{"id":"26635","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26656","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26646","type":"Toolbar"},"x_range":{"id":"26622","type":"DataRange1d"},"x_scale":{"id":"26626","type":"LinearScale"},"y_range":{"id":"26624","type":"DataRange1d"},"y_scale":{"id":"26628","type":"LinearScale"}},"id":"26620","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26631","type":"BasicTicker"},{"attributes":{"source":{"id":"26729","type":"ColumnDataSource"}},"id":"26733","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26753","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26755","type":"Selection"},"selection_policy":{"id":"26754","type":"UnionRenderers"}},"id":"26691","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"26620","subtype":"Figure","type":"Plot"},{"id":"26658","subtype":"Figure","type":"Plot"},{"id":"26696","subtype":"Figure","type":"Plot"}]},"id":"26734","type":"Column"},{"attributes":{},"id":"26754","type":"UnionRenderers"},{"attributes":{},"id":"26682","type":"ResetTool"},{"attributes":{"data_source":{"id":"26691","type":"ColumnDataSource"},"glyph":{"id":"26692","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26693","type":"Triangle"},"selection_glyph":null,"view":{"id":"26695","type":"CDSView"}},"id":"26694","type":"GlyphRenderer"},{"attributes":{},"id":"26755","type":"Selection"},{"attributes":{},"id":"26681","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26678","type":"PanTool"},{"id":"26679","type":"WheelZoomTool"},{"id":"26680","type":"BoxZoomTool"},{"id":"26681","type":"SaveTool"},{"id":"26682","type":"ResetTool"},{"id":"26683","type":"HelpTool"}]},"id":"26684","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26756","type":"BoxAnnotation"},{"attributes":{},"id":"26678","type":"PanTool"},{"attributes":{},"id":"26757","type":"UnionRenderers"},{"attributes":{},"id":"26679","type":"WheelZoomTool"},{"attributes":{},"id":"26758","type":"Selection"},{"attributes":{"overlay":{"id":"26753","type":"BoxAnnotation"}},"id":"26680","type":"BoxZoomTool"},{"attributes":{},"id":"26683","type":"HelpTool"}],"root_ids":["26734"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"537420aa-ebb5-4005-a4a2-6fe98dd2f715","roots":{"26734":"e76f3371-65d8-4504-a2d1-1af8f795dfa2"}}];
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