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
      };var element = document.getElementById("3e1085a0-77b8-4c50-821e-52f2d117eda3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3e1085a0-77b8-4c50-821e-52f2d117eda3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dd15e5b5-80a0-4304-8c1d-16de1ff608e1":{"roots":{"references":[{"attributes":{"ticker":{"id":"22677","type":"BasicTicker"}},"id":"22680","type":"Grid"},{"attributes":{"ticker":{"id":"22645","type":"BasicTicker"}},"id":"22648","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22654","type":"BoxSelectTool"},{"id":"22655","type":"LassoSelectTool"},{"id":"22656","type":"HelpTool"}]},"id":"22657","type":"Toolbar"},{"attributes":{"callback":null},"id":"22636","type":"DataRange1d"},{"attributes":{"formatter":{"id":"22711","type":"BasicTickFormatter"},"ticker":{"id":"22677","type":"BasicTicker"}},"id":"22676","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"22682","type":"BasicTicker"}},"id":"22685","type":"Grid"},{"attributes":{"formatter":{"id":"22701","type":"BasicTickFormatter"},"ticker":{"id":"22645","type":"BasicTicker"}},"id":"22644","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22695","type":"Circle"},{"attributes":{},"id":"22711","type":"BasicTickFormatter"},{"attributes":{},"id":"22642","type":"LinearScale"},{"attributes":{"formatter":{"id":"22699","type":"BasicTickFormatter"},"ticker":{"id":"22650","type":"BasicTicker"}},"id":"22649","type":"LinearAxis"},{"attributes":{},"id":"22677","type":"BasicTicker"},{"attributes":{"below":[{"id":"22644","type":"LinearAxis"}],"center":[{"id":"22648","type":"Grid"},{"id":"22653","type":"Grid"}],"left":[{"id":"22649","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22664","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22657","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22636","type":"DataRange1d"},"x_scale":{"id":"22640","type":"LinearScale"},"y_range":{"id":"22638","type":"DataRange1d"},"y_scale":{"id":"22642","type":"LinearScale"}},"id":"22634","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22674","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22705","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22716","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"22706","type":"PolyAnnotation"}},"id":"22655","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"22720","type":"ToolbarBox"},{"id":"22718","type":"GridBox"}]},"id":"22721","type":"Column"},{"attributes":{},"id":"22640","type":"LinearScale"},{"attributes":{"callback":null},"id":"22638","type":"DataRange1d"},{"attributes":{"callback":null},"id":"22670","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22706","type":"PolyAnnotation"},{"attributes":{},"id":"22701","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22703","type":"Selection"},"selection_policy":{"id":"22704","type":"UnionRenderers"}},"id":"22633","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"22676","type":"LinearAxis"}],"center":[{"id":"22680","type":"Grid"},{"id":"22685","type":"Grid"}],"left":[{"id":"22681","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22696","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22689","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22668","type":"DataRange1d"},"x_scale":{"id":"22672","type":"LinearScale"},"y_range":{"id":"22670","type":"DataRange1d"},"y_scale":{"id":"22674","type":"LinearScale"}},"id":"22666","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22699","type":"BasicTickFormatter"},{"attributes":{},"id":"22645","type":"BasicTicker"},{"attributes":{},"id":"22703","type":"Selection"},{"attributes":{"source":{"id":"22633","type":"ColumnDataSource"}},"id":"22665","type":"CDSView"},{"attributes":{"data_source":{"id":"22633","type":"ColumnDataSource"},"glyph":{"id":"22662","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22663","type":"Circle"},"selection_glyph":null,"view":{"id":"22665","type":"CDSView"}},"id":"22664","type":"GlyphRenderer"},{"attributes":{},"id":"22704","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"22715","type":"BoxAnnotation"}},"id":"22686","type":"BoxSelectTool"},{"attributes":{},"id":"22672","type":"LinearScale"},{"attributes":{"formatter":{"id":"22709","type":"BasicTickFormatter"},"ticker":{"id":"22682","type":"BasicTicker"}},"id":"22681","type":"LinearAxis"},{"attributes":{},"id":"22688","type":"HelpTool"},{"attributes":{"callback":null},"id":"22668","type":"DataRange1d"},{"attributes":{"source":{"id":"22633","type":"ColumnDataSource"}},"id":"22697","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22662","type":"Circle"},{"attributes":{},"id":"22682","type":"BasicTicker"},{"attributes":{},"id":"22709","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"22654","type":"BoxSelectTool"},{"id":"22655","type":"LassoSelectTool"},{"id":"22656","type":"HelpTool"},{"id":"22686","type":"BoxSelectTool"},{"id":"22687","type":"LassoSelectTool"},{"id":"22688","type":"HelpTool"}]},"id":"22719","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22715","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22694","type":"Circle"},{"attributes":{},"id":"22650","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"22650","type":"BasicTicker"}},"id":"22653","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22686","type":"BoxSelectTool"},{"id":"22687","type":"LassoSelectTool"},{"id":"22688","type":"HelpTool"}]},"id":"22689","type":"Toolbar"},{"attributes":{"children":[[{"id":"22634","subtype":"Figure","type":"Plot"},0,0],[{"id":"22666","subtype":"Figure","type":"Plot"},0,1]]},"id":"22718","type":"GridBox"},{"attributes":{},"id":"22656","type":"HelpTool"},{"attributes":{"data_source":{"id":"22633","type":"ColumnDataSource"},"glyph":{"id":"22694","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22695","type":"Circle"},"selection_glyph":null,"view":{"id":"22697","type":"CDSView"}},"id":"22696","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22663","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"22716","type":"PolyAnnotation"}},"id":"22687","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"22705","type":"BoxAnnotation"}},"id":"22654","type":"BoxSelectTool"},{"attributes":{"toolbar":{"id":"22719","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22720","type":"ToolbarBox"}],"root_ids":["22721"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"dd15e5b5-80a0-4304-8c1d-16de1ff608e1","roots":{"22721":"3e1085a0-77b8-4c50-821e-52f2d117eda3"}}];
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