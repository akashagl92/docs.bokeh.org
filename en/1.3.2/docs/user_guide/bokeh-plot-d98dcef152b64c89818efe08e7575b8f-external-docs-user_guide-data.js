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
      };var element = document.getElementById("959947ab-a242-4e6a-adec-2a1c9778d288");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '959947ab-a242-4e6a-adec-2a1c9778d288' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"1ce22621-cf89-4c88-9ab3-2b96e5db3e28":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"22905","type":"BoxAnnotation"}},"id":"22849","type":"BoxSelectTool"},{"attributes":{},"id":"22911","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"22829","subtype":"Figure","type":"Plot"},0,0],[{"id":"22864","subtype":"Figure","type":"Plot"},0,1]]},"id":"22918","type":"GridBox"},{"attributes":{"callback":null},"id":"22851","type":"HoverTool"},{"attributes":{"formatter":{"id":"22901","type":"BasicTickFormatter"},"ticker":{"id":"22845","type":"BasicTicker"}},"id":"22844","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22884","type":"BoxSelectTool"},{"id":"22885","type":"LassoSelectTool"},{"id":"22886","type":"HoverTool"},{"id":"22887","type":"HelpTool"}]},"id":"22888","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22915","type":"BoxAnnotation"},{"attributes":{},"id":"22845","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22895","type":"Circle"},{"attributes":{"data_source":{"id":"22826","type":"ColumnDataSource"},"glyph":{"id":"22894","type":"Circle"},"hover_glyph":{"id":"22896","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22895","type":"Circle"},"selection_glyph":null,"view":{"id":"22828","type":"CDSView"}},"id":"22897","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"22874","type":"LinearAxis"}],"center":[{"id":"22878","type":"Grid"},{"id":"22883","type":"Grid"}],"left":[{"id":"22879","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22897","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22888","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22866","type":"DataRange1d"},"x_scale":{"id":"22870","type":"LinearScale"},"y_range":{"id":"22868","type":"DataRange1d"},"y_scale":{"id":"22872","type":"LinearScale"}},"id":"22864","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"22840","type":"BasicTicker"}},"id":"22843","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22905","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22906","type":"PolyAnnotation"},{"attributes":{},"id":"22880","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22859","type":"Circle"},{"attributes":{"callback":null},"id":"22866","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"22919","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22920","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22916","type":"PolyAnnotation"},{"attributes":{},"id":"22899","type":"BasicTickFormatter"},{"attributes":{},"id":"22875","type":"BasicTicker"},{"attributes":{},"id":"22909","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22899","type":"BasicTickFormatter"},"ticker":{"id":"22840","type":"BasicTicker"}},"id":"22839","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22861","type":"Circle"},{"attributes":{},"id":"22887","type":"HelpTool"},{"attributes":{"callback":null},"id":"22868","type":"DataRange1d"},{"attributes":{"data_source":{"id":"22826","type":"ColumnDataSource"},"glyph":{"id":"22859","type":"Circle"},"hover_glyph":{"id":"22861","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22860","type":"Circle"},"selection_glyph":null,"view":{"id":"22863","type":"CDSView"}},"id":"22862","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"22880","type":"BasicTicker"}},"id":"22883","type":"Grid"},{"attributes":{"tools":[{"id":"22849","type":"BoxSelectTool"},{"id":"22850","type":"LassoSelectTool"},{"id":"22851","type":"HoverTool"},{"id":"22852","type":"HelpTool"},{"id":"22884","type":"BoxSelectTool"},{"id":"22885","type":"LassoSelectTool"},{"id":"22886","type":"HoverTool"},{"id":"22887","type":"HelpTool"}]},"id":"22919","type":"ProxyToolbar"},{"attributes":{},"id":"22852","type":"HelpTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22896","type":"Circle"},{"attributes":{},"id":"22903","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22849","type":"BoxSelectTool"},{"id":"22850","type":"LassoSelectTool"},{"id":"22851","type":"HoverTool"},{"id":"22852","type":"HelpTool"}]},"id":"22853","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"22845","type":"BasicTicker"}},"id":"22848","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"22915","type":"BoxAnnotation"}},"id":"22884","type":"BoxSelectTool"},{"attributes":{},"id":"22840","type":"BasicTicker"},{"attributes":{"ticker":{"id":"22875","type":"BasicTicker"}},"id":"22878","type":"Grid"},{"attributes":{"below":[{"id":"22839","type":"LinearAxis"}],"center":[{"id":"22843","type":"Grid"},{"id":"22848","type":"Grid"}],"left":[{"id":"22844","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22862","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22853","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22831","type":"DataRange1d"},"x_scale":{"id":"22835","type":"LinearScale"},"y_range":{"id":"22833","type":"DataRange1d"},"y_scale":{"id":"22837","type":"LinearScale"}},"id":"22829","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22894","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"22916","type":"PolyAnnotation"}},"id":"22885","type":"LassoSelectTool"},{"attributes":{},"id":"22837","type":"LinearScale"},{"attributes":{"callback":null},"id":"22886","type":"HoverTool"},{"attributes":{"callback":null},"id":"22833","type":"DataRange1d"},{"attributes":{},"id":"22872","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"22906","type":"PolyAnnotation"}},"id":"22850","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"22911","type":"BasicTickFormatter"},"ticker":{"id":"22880","type":"BasicTicker"}},"id":"22879","type":"LinearAxis"},{"attributes":{"source":{"id":"22826","type":"ColumnDataSource"}},"id":"22863","type":"CDSView"},{"attributes":{},"id":"22901","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22904","type":"Selection"},"selection_policy":{"id":"22903","type":"UnionRenderers"}},"id":"22826","type":"ColumnDataSource"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"22827","type":"BooleanFilter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22860","type":"Circle"},{"attributes":{},"id":"22870","type":"LinearScale"},{"attributes":{"filters":[{"id":"22827","type":"BooleanFilter"}],"source":{"id":"22826","type":"ColumnDataSource"}},"id":"22828","type":"CDSView"},{"attributes":{},"id":"22904","type":"Selection"},{"attributes":{"callback":null},"id":"22831","type":"DataRange1d"},{"attributes":{},"id":"22835","type":"LinearScale"},{"attributes":{"children":[{"id":"22920","type":"ToolbarBox"},{"id":"22918","type":"GridBox"}]},"id":"22921","type":"Column"},{"attributes":{"formatter":{"id":"22909","type":"BasicTickFormatter"},"ticker":{"id":"22875","type":"BasicTicker"}},"id":"22874","type":"LinearAxis"}],"root_ids":["22921"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"1ce22621-cf89-4c88-9ab3-2b96e5db3e28","roots":{"22921":"959947ab-a242-4e6a-adec-2a1c9778d288"}}];
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