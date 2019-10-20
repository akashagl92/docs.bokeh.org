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
      };var element = document.getElementById("e440d121-4057-4fce-9dd5-466d4482bd7e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e440d121-4057-4fce-9dd5-466d4482bd7e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4d9646fe-9939-43cc-88fa-34c5cdeef47f":{"roots":{"references":[{"attributes":{"formatter":{"id":"25411","type":"BasicTickFormatter"},"ticker":{"id":"25361","type":"BasicTicker"}},"id":"25360","type":"LinearAxis"},{"attributes":{"data_source":{"id":"25344","type":"ColumnDataSource"},"glyph":{"id":"25405","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25406","type":"Circle"},"selection_glyph":null,"view":{"id":"25408","type":"CDSView"}},"id":"25407","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"25345","subtype":"Figure","type":"Plot"},0,0],[{"id":"25377","subtype":"Figure","type":"Plot"},0,1]]},"id":"25429","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"25361","type":"BasicTicker"}},"id":"25364","type":"Grid"},{"attributes":{},"id":"25411","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"25387","type":"LinearAxis"}],"center":[{"id":"25391","type":"Grid"},{"id":"25396","type":"Grid"}],"left":[{"id":"25392","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25407","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25400","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25379","type":"DataRange1d"},"x_scale":{"id":"25383","type":"LinearScale"},"y_range":{"id":"25381","type":"DataRange1d"},"y_scale":{"id":"25385","type":"LinearScale"}},"id":"25377","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"25381","type":"DataRange1d"},{"attributes":{"formatter":{"id":"25413","type":"BasicTickFormatter"},"ticker":{"id":"25356","type":"BasicTicker"}},"id":"25355","type":"LinearAxis"},{"attributes":{"source":{"id":"25344","type":"ColumnDataSource"}},"id":"25408","type":"CDSView"},{"attributes":{},"id":"25383","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"25374","type":"Circle"},{"attributes":{},"id":"25413","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"25349","type":"DataRange1d"},{"attributes":{},"id":"25423","type":"BasicTickFormatter"},{"attributes":{},"id":"25385","type":"LinearScale"},{"attributes":{},"id":"25356","type":"BasicTicker"},{"attributes":{"formatter":{"id":"25423","type":"BasicTickFormatter"},"ticker":{"id":"25388","type":"BasicTicker"}},"id":"25387","type":"LinearAxis"},{"attributes":{},"id":"25414","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"25344","type":"ColumnDataSource"},"glyph":{"id":"25373","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25374","type":"Circle"},"selection_glyph":null,"view":{"id":"25376","type":"CDSView"}},"id":"25375","type":"GlyphRenderer"},{"attributes":{},"id":"25388","type":"BasicTicker"},{"attributes":{},"id":"25421","type":"BasicTickFormatter"},{"attributes":{},"id":"25415","type":"Selection"},{"attributes":{"ticker":{"id":"25388","type":"BasicTicker"}},"id":"25391","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25416","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"25421","type":"BasicTickFormatter"},"ticker":{"id":"25393","type":"BasicTicker"}},"id":"25392","type":"LinearAxis"},{"attributes":{"source":{"id":"25344","type":"ColumnDataSource"}},"id":"25376","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"25415","type":"Selection"},"selection_policy":{"id":"25414","type":"UnionRenderers"}},"id":"25344","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"25426","type":"BoxAnnotation"}},"id":"25397","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"25417","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25365","type":"BoxSelectTool"},{"id":"25366","type":"LassoSelectTool"},{"id":"25367","type":"HelpTool"}]},"id":"25368","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25397","type":"BoxSelectTool"},{"id":"25398","type":"LassoSelectTool"},{"id":"25399","type":"HelpTool"}]},"id":"25400","type":"Toolbar"},{"attributes":{},"id":"25393","type":"BasicTicker"},{"attributes":{"tools":[{"id":"25365","type":"BoxSelectTool"},{"id":"25366","type":"LassoSelectTool"},{"id":"25367","type":"HelpTool"},{"id":"25397","type":"BoxSelectTool"},{"id":"25398","type":"LassoSelectTool"},{"id":"25399","type":"HelpTool"}]},"id":"25430","type":"ProxyToolbar"},{"attributes":{},"id":"25367","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25426","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"25417","type":"PolyAnnotation"}},"id":"25366","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"25430","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"25431","type":"ToolbarBox"},{"attributes":{"dimension":1,"ticker":{"id":"25393","type":"BasicTicker"}},"id":"25396","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"25373","type":"Circle"},{"attributes":{"below":[{"id":"25355","type":"LinearAxis"}],"center":[{"id":"25359","type":"Grid"},{"id":"25364","type":"Grid"}],"left":[{"id":"25360","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25375","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25368","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25347","type":"DataRange1d"},"x_scale":{"id":"25351","type":"LinearScale"},"y_range":{"id":"25349","type":"DataRange1d"},"y_scale":{"id":"25353","type":"LinearScale"}},"id":"25345","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"25416","type":"BoxAnnotation"}},"id":"25365","type":"BoxSelectTool"},{"attributes":{},"id":"25351","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"25406","type":"Circle"},{"attributes":{"children":[{"id":"25431","type":"ToolbarBox"},{"id":"25429","type":"GridBox"}]},"id":"25432","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"25427","type":"PolyAnnotation"}},"id":"25398","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"25347","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"25405","type":"Circle"},{"attributes":{},"id":"25353","type":"LinearScale"},{"attributes":{"ticker":{"id":"25356","type":"BasicTicker"}},"id":"25359","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"25427","type":"PolyAnnotation"},{"attributes":{},"id":"25361","type":"BasicTicker"},{"attributes":{"callback":null},"id":"25379","type":"DataRange1d"},{"attributes":{},"id":"25399","type":"HelpTool"}],"root_ids":["25432"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"4d9646fe-9939-43cc-88fa-34c5cdeef47f","roots":{"25432":"e440d121-4057-4fce-9dd5-466d4482bd7e"}}];
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