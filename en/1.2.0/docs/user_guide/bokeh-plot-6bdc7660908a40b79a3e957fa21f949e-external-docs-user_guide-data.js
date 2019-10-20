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
      };var element = document.getElementById("6fffafe5-48f4-402f-a5a0-397ebbad723f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6fffafe5-48f4-402f-a5a0-397ebbad723f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"907d5cd8-8c01-432d-b200-4d805499d783":{"roots":{"references":[{"attributes":{},"id":"22814","type":"LinearScale"},{"attributes":{"callback":null},"id":"22845","type":"DataRange1d"},{"attributes":{},"id":"22890","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"22899","type":"ToolbarBox"},{"id":"22897","type":"GridBox"}]},"id":"22900","type":"Column"},{"attributes":{"below":[{"id":"22818","type":"LinearAxis"}],"center":[{"id":"22822","type":"Grid"},{"id":"22827","type":"Grid"}],"left":[{"id":"22823","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22841","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22832","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22810","type":"DataRange1d"},"x_scale":{"id":"22814","type":"LinearScale"},"y_range":{"id":"22812","type":"DataRange1d"},"y_scale":{"id":"22816","type":"LinearScale"}},"id":"22808","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22840","type":"Circle"},{"attributes":{},"id":"22883","type":"UnionRenderers"},{"attributes":{},"id":"22831","type":"HelpTool"},{"attributes":{"callback":null},"id":"22865","type":"HoverTool"},{"attributes":{},"id":"22880","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22873","type":"Circle"},{"attributes":{},"id":"22888","type":"BasicTickFormatter"},{"attributes":{},"id":"22882","type":"Selection"},{"attributes":{},"id":"22878","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22882","type":"Selection"},"selection_policy":{"id":"22883","type":"UnionRenderers"}},"id":"22805","type":"ColumnDataSource"},{"attributes":{},"id":"22849","type":"LinearScale"},{"attributes":{"below":[{"id":"22853","type":"LinearAxis"}],"center":[{"id":"22857","type":"Grid"},{"id":"22862","type":"Grid"}],"left":[{"id":"22858","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22876","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22867","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22845","type":"DataRange1d"},"x_scale":{"id":"22849","type":"LinearScale"},"y_range":{"id":"22847","type":"DataRange1d"},"y_scale":{"id":"22851","type":"LinearScale"}},"id":"22843","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"22805","type":"ColumnDataSource"},"glyph":{"id":"22873","type":"Circle"},"hover_glyph":{"id":"22875","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22874","type":"Circle"},"selection_glyph":null,"view":{"id":"22807","type":"CDSView"}},"id":"22876","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"22854","type":"BasicTicker"}},"id":"22857","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22894","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"22888","type":"BasicTickFormatter"},"ticker":{"id":"22859","type":"BasicTicker"}},"id":"22858","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22895","type":"PolyAnnotation"}},"id":"22864","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22895","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22875","type":"Circle"},{"attributes":{},"id":"22851","type":"LinearScale"},{"attributes":{"source":{"id":"22805","type":"ColumnDataSource"}},"id":"22842","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"22824","type":"BasicTicker"}},"id":"22827","type":"Grid"},{"attributes":{"toolbar":{"id":"22898","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22899","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"22828","type":"BoxSelectTool"},{"id":"22829","type":"LassoSelectTool"},{"id":"22830","type":"HoverTool"},{"id":"22831","type":"HelpTool"},{"id":"22863","type":"BoxSelectTool"},{"id":"22864","type":"LassoSelectTool"},{"id":"22865","type":"HoverTool"},{"id":"22866","type":"HelpTool"}]},"id":"22898","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22838","type":"Circle"},{"attributes":{"ticker":{"id":"22819","type":"BasicTicker"}},"id":"22822","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22874","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"22894","type":"BoxAnnotation"}},"id":"22863","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"22812","type":"DataRange1d"},{"attributes":{"children":[[{"id":"22808","subtype":"Figure","type":"Plot"},0,0],[{"id":"22843","subtype":"Figure","type":"Plot"},0,1]]},"id":"22897","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22884","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"22847","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"22859","type":"BasicTicker"}},"id":"22862","type":"Grid"},{"attributes":{},"id":"22854","type":"BasicTicker"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"22806","type":"BooleanFilter"},{"attributes":{"formatter":{"id":"22878","type":"BasicTickFormatter"},"ticker":{"id":"22824","type":"BasicTicker"}},"id":"22823","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22828","type":"BoxSelectTool"},{"id":"22829","type":"LassoSelectTool"},{"id":"22830","type":"HoverTool"},{"id":"22831","type":"HelpTool"}]},"id":"22832","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22863","type":"BoxSelectTool"},{"id":"22864","type":"LassoSelectTool"},{"id":"22865","type":"HoverTool"},{"id":"22866","type":"HelpTool"}]},"id":"22867","type":"Toolbar"},{"attributes":{"data_source":{"id":"22805","type":"ColumnDataSource"},"glyph":{"id":"22838","type":"Circle"},"hover_glyph":{"id":"22840","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22839","type":"Circle"},"selection_glyph":null,"view":{"id":"22842","type":"CDSView"}},"id":"22841","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"22890","type":"BasicTickFormatter"},"ticker":{"id":"22854","type":"BasicTicker"}},"id":"22853","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22885","type":"PolyAnnotation"}},"id":"22829","type":"LassoSelectTool"},{"attributes":{},"id":"22819","type":"BasicTicker"},{"attributes":{},"id":"22859","type":"BasicTicker"},{"attributes":{"callback":null},"id":"22830","type":"HoverTool"},{"attributes":{},"id":"22866","type":"HelpTool"},{"attributes":{},"id":"22816","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22839","type":"Circle"},{"attributes":{"formatter":{"id":"22880","type":"BasicTickFormatter"},"ticker":{"id":"22819","type":"BasicTicker"}},"id":"22818","type":"LinearAxis"},{"attributes":{"callback":null},"id":"22810","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22885","type":"PolyAnnotation"},{"attributes":{"filters":[{"id":"22806","type":"BooleanFilter"}],"source":{"id":"22805","type":"ColumnDataSource"}},"id":"22807","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"22884","type":"BoxAnnotation"}},"id":"22828","type":"BoxSelectTool"},{"attributes":{},"id":"22824","type":"BasicTicker"}],"root_ids":["22900"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"907d5cd8-8c01-432d-b200-4d805499d783","roots":{"22900":"6fffafe5-48f4-402f-a5a0-397ebbad723f"}}];
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