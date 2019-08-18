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
      };var element = document.getElementById("fb1b6a12-7f30-4b18-94dd-1db4ac882142");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fb1b6a12-7f30-4b18-94dd-1db4ac882142' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3f0c7694-36bb-4e67-8107-0921a97b28cd":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22848","type":"BoxSelectTool"},{"id":"22849","type":"LassoSelectTool"},{"id":"22850","type":"HoverTool"},{"id":"22851","type":"HelpTool"}]},"id":"22852","type":"Toolbar"},{"attributes":{"data_source":{"id":"22825","type":"ColumnDataSource"},"glyph":{"id":"22893","type":"Circle"},"hover_glyph":{"id":"22895","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22894","type":"Circle"},"selection_glyph":null,"view":{"id":"22827","type":"CDSView"}},"id":"22896","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"22830","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"22913","type":"PolyAnnotation"}},"id":"22884","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22905","type":"Selection"},"selection_policy":{"id":"22904","type":"UnionRenderers"}},"id":"22825","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"22903","type":"PolyAnnotation"}},"id":"22849","type":"LassoSelectTool"},{"attributes":{},"id":"22879","type":"BasicTicker"},{"attributes":{},"id":"22905","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"22912","type":"BoxAnnotation"}},"id":"22883","type":"BoxSelectTool"},{"attributes":{},"id":"22836","type":"LinearScale"},{"attributes":{"toolbar":{"id":"22918","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22919","type":"ToolbarBox"},{"attributes":{"source":{"id":"22825","type":"ColumnDataSource"}},"id":"22862","type":"CDSView"},{"attributes":{"ticker":{"id":"22874","type":"BasicTicker"}},"id":"22877","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22893","type":"Circle"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"22826","type":"BooleanFilter"},{"attributes":{"formatter":{"id":"22909","type":"BasicTickFormatter"},"ticker":{"id":"22874","type":"BasicTicker"}},"id":"22873","type":"LinearAxis"},{"attributes":{"children":[{"id":"22919","type":"ToolbarBox"},{"id":"22917","type":"GridBox"}]},"id":"22920","type":"Column"},{"attributes":{},"id":"22869","type":"LinearScale"},{"attributes":{"callback":null},"id":"22885","type":"HoverTool"},{"attributes":{},"id":"22834","type":"LinearScale"},{"attributes":{},"id":"22874","type":"BasicTicker"},{"attributes":{},"id":"22899","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"22828","subtype":"Figure","type":"Plot"},0,0],[{"id":"22863","subtype":"Figure","type":"Plot"},0,1]]},"id":"22917","type":"GridBox"},{"attributes":{"data_source":{"id":"22825","type":"ColumnDataSource"},"glyph":{"id":"22858","type":"Circle"},"hover_glyph":{"id":"22860","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22859","type":"Circle"},"selection_glyph":null,"view":{"id":"22862","type":"CDSView"}},"id":"22861","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"22826","type":"BooleanFilter"}],"source":{"id":"22825","type":"ColumnDataSource"}},"id":"22827","type":"CDSView"},{"attributes":{"callback":null},"id":"22867","type":"DataRange1d"},{"attributes":{"formatter":{"id":"22901","type":"BasicTickFormatter"},"ticker":{"id":"22844","type":"BasicTicker"}},"id":"22843","type":"LinearAxis"},{"attributes":{"callback":null},"id":"22865","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22858","type":"Circle"},{"attributes":{},"id":"22839","type":"BasicTicker"},{"attributes":{"below":[{"id":"22873","type":"LinearAxis"}],"center":[{"id":"22877","type":"Grid"},{"id":"22882","type":"Grid"}],"left":[{"id":"22878","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22896","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22887","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22865","type":"DataRange1d"},"x_scale":{"id":"22869","type":"LinearScale"},"y_range":{"id":"22867","type":"DataRange1d"},"y_scale":{"id":"22871","type":"LinearScale"}},"id":"22863","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22883","type":"BoxSelectTool"},{"id":"22884","type":"LassoSelectTool"},{"id":"22885","type":"HoverTool"},{"id":"22886","type":"HelpTool"}]},"id":"22887","type":"Toolbar"},{"attributes":{},"id":"22904","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22859","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22913","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"22899","type":"BasicTickFormatter"},"ticker":{"id":"22839","type":"BasicTicker"}},"id":"22838","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"22879","type":"BasicTicker"}},"id":"22882","type":"Grid"},{"attributes":{"below":[{"id":"22838","type":"LinearAxis"}],"center":[{"id":"22842","type":"Grid"},{"id":"22847","type":"Grid"}],"left":[{"id":"22843","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22861","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22852","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22830","type":"DataRange1d"},"x_scale":{"id":"22834","type":"LinearScale"},"y_range":{"id":"22832","type":"DataRange1d"},"y_scale":{"id":"22836","type":"LinearScale"}},"id":"22828","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22902","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22903","type":"PolyAnnotation"},{"attributes":{},"id":"22911","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"22848","type":"BoxSelectTool"},{"id":"22849","type":"LassoSelectTool"},{"id":"22850","type":"HoverTool"},{"id":"22851","type":"HelpTool"},{"id":"22883","type":"BoxSelectTool"},{"id":"22884","type":"LassoSelectTool"},{"id":"22885","type":"HoverTool"},{"id":"22886","type":"HelpTool"}]},"id":"22918","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22912","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"22911","type":"BasicTickFormatter"},"ticker":{"id":"22879","type":"BasicTicker"}},"id":"22878","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22894","type":"Circle"},{"attributes":{"callback":null},"id":"22832","type":"DataRange1d"},{"attributes":{},"id":"22886","type":"HelpTool"},{"attributes":{"ticker":{"id":"22839","type":"BasicTicker"}},"id":"22842","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"22844","type":"BasicTicker"}},"id":"22847","type":"Grid"},{"attributes":{},"id":"22851","type":"HelpTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22860","type":"Circle"},{"attributes":{},"id":"22871","type":"LinearScale"},{"attributes":{},"id":"22901","type":"BasicTickFormatter"},{"attributes":{},"id":"22844","type":"BasicTicker"},{"attributes":{},"id":"22909","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"22902","type":"BoxAnnotation"}},"id":"22848","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"22850","type":"HoverTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22895","type":"Circle"}],"root_ids":["22920"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"3f0c7694-36bb-4e67-8107-0921a97b28cd","roots":{"22920":"fb1b6a12-7f30-4b18-94dd-1db4ac882142"}}];
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