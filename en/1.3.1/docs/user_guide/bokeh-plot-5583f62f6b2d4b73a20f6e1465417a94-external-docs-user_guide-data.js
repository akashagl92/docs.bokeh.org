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
      };var element = document.getElementById("e2e2f3ee-aeb2-41f7-a03d-d0a7741ab686");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e2e2f3ee-aeb2-41f7-a03d-d0a7741ab686' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"3b2c0292-afa1-4ad8-8d1b-e9f43cf4fdfe":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22724","type":"BoxAnnotation"},{"attributes":{},"id":"22671","type":"BasicTicker"},{"attributes":{"source":{"id":"22654","type":"ColumnDataSource"}},"id":"22686","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22725","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"22655","subtype":"Figure","type":"Plot"},0,0],[{"id":"22687","subtype":"Figure","type":"Plot"},0,1]]},"id":"22739","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"22725","type":"PolyAnnotation"}},"id":"22676","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"22654","type":"ColumnDataSource"},"glyph":{"id":"22683","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22684","type":"Circle"},"selection_glyph":null,"view":{"id":"22686","type":"CDSView"}},"id":"22685","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"22698","type":"BasicTicker"}},"id":"22701","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22683","type":"Circle"},{"attributes":{"source":{"id":"22654","type":"ColumnDataSource"}},"id":"22718","type":"CDSView"},{"attributes":{"data_source":{"id":"22654","type":"ColumnDataSource"},"glyph":{"id":"22715","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22716","type":"Circle"},"selection_glyph":null,"view":{"id":"22718","type":"CDSView"}},"id":"22717","type":"GlyphRenderer"},{"attributes":{},"id":"22677","type":"HelpTool"},{"attributes":{"below":[{"id":"22665","type":"LinearAxis"}],"center":[{"id":"22669","type":"Grid"},{"id":"22674","type":"Grid"}],"left":[{"id":"22670","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22685","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22678","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22657","type":"DataRange1d"},"x_scale":{"id":"22661","type":"LinearScale"},"y_range":{"id":"22659","type":"DataRange1d"},"y_scale":{"id":"22663","type":"LinearScale"}},"id":"22655","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22726","type":"Selection"},"selection_policy":{"id":"22727","type":"UnionRenderers"}},"id":"22654","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22716","type":"Circle"},{"attributes":{},"id":"22666","type":"BasicTicker"},{"attributes":{},"id":"22726","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22715","type":"Circle"},{"attributes":{"callback":null},"id":"22689","type":"DataRange1d"},{"attributes":{"children":[{"id":"22741","type":"ToolbarBox"},{"id":"22739","type":"GridBox"}]},"id":"22742","type":"Column"},{"attributes":{"callback":null},"id":"22691","type":"DataRange1d"},{"attributes":{},"id":"22720","type":"BasicTickFormatter"},{"attributes":{},"id":"22722","type":"BasicTickFormatter"},{"attributes":{},"id":"22695","type":"LinearScale"},{"attributes":{"formatter":{"id":"22732","type":"BasicTickFormatter"},"ticker":{"id":"22698","type":"BasicTicker"}},"id":"22697","type":"LinearAxis"},{"attributes":{"callback":null},"id":"22659","type":"DataRange1d"},{"attributes":{},"id":"22693","type":"LinearScale"},{"attributes":{},"id":"22698","type":"BasicTicker"},{"attributes":{},"id":"22727","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"22730","type":"BasicTickFormatter"},"ticker":{"id":"22703","type":"BasicTicker"}},"id":"22702","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22734","type":"BoxAnnotation"}},"id":"22707","type":"BoxSelectTool"},{"attributes":{},"id":"22663","type":"LinearScale"},{"attributes":{"below":[{"id":"22697","type":"LinearAxis"}],"center":[{"id":"22701","type":"Grid"},{"id":"22706","type":"Grid"}],"left":[{"id":"22702","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22717","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22710","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22689","type":"DataRange1d"},"x_scale":{"id":"22693","type":"LinearScale"},"y_range":{"id":"22691","type":"DataRange1d"},"y_scale":{"id":"22695","type":"LinearScale"}},"id":"22687","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22684","type":"Circle"},{"attributes":{},"id":"22661","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22735","type":"PolyAnnotation"},{"attributes":{},"id":"22703","type":"BasicTicker"},{"attributes":{},"id":"22709","type":"HelpTool"},{"attributes":{"tools":[{"id":"22675","type":"BoxSelectTool"},{"id":"22676","type":"LassoSelectTool"},{"id":"22677","type":"HelpTool"},{"id":"22707","type":"BoxSelectTool"},{"id":"22708","type":"LassoSelectTool"},{"id":"22709","type":"HelpTool"}]},"id":"22740","type":"ProxyToolbar"},{"attributes":{"dimension":1,"ticker":{"id":"22671","type":"BasicTicker"}},"id":"22674","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22734","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"22724","type":"BoxAnnotation"}},"id":"22675","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"22657","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"22703","type":"BasicTicker"}},"id":"22706","type":"Grid"},{"attributes":{"ticker":{"id":"22666","type":"BasicTicker"}},"id":"22669","type":"Grid"},{"attributes":{"toolbar":{"id":"22740","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22741","type":"ToolbarBox"},{"attributes":{},"id":"22732","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22722","type":"BasicTickFormatter"},"ticker":{"id":"22666","type":"BasicTicker"}},"id":"22665","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22707","type":"BoxSelectTool"},{"id":"22708","type":"LassoSelectTool"},{"id":"22709","type":"HelpTool"}]},"id":"22710","type":"Toolbar"},{"attributes":{},"id":"22730","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22720","type":"BasicTickFormatter"},"ticker":{"id":"22671","type":"BasicTicker"}},"id":"22670","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22735","type":"PolyAnnotation"}},"id":"22708","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22675","type":"BoxSelectTool"},{"id":"22676","type":"LassoSelectTool"},{"id":"22677","type":"HelpTool"}]},"id":"22678","type":"Toolbar"}],"root_ids":["22742"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"3b2c0292-afa1-4ad8-8d1b-e9f43cf4fdfe","roots":{"22742":"e2e2f3ee-aeb2-41f7-a03d-d0a7741ab686"}}];
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