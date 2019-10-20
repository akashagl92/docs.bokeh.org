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
      };var element = document.getElementById("aec6df26-c736-4614-b343-ca705c0b7db3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'aec6df26-c736-4614-b343-ca705c0b7db3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c032b564-39e0-4429-9ade-58293f2ca80b":{"roots":{"references":[{"attributes":{},"id":"21878","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21951","type":"BoxAnnotation"},{"attributes":{},"id":"21913","type":"BasicTicker"},{"attributes":{"data_source":{"id":"21869","type":"ColumnDataSource"},"glyph":{"id":"21930","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21931","type":"Circle"},"selection_glyph":null,"view":{"id":"21933","type":"CDSView"}},"id":"21932","type":"GlyphRenderer"},{"attributes":{},"id":"21892","type":"HelpTool"},{"attributes":{},"id":"21948","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"21931","type":"Circle"},{"attributes":{},"id":"21946","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"21942","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"21940","type":"Selection"},"selection_policy":{"id":"21939","type":"UnionRenderers"}},"id":"21869","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21874","type":"DataRange1d"},{"attributes":{"formatter":{"id":"21946","type":"BasicTickFormatter"},"ticker":{"id":"21918","type":"BasicTicker"}},"id":"21917","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21890","type":"BoxSelectTool"},{"id":"21891","type":"LassoSelectTool"},{"id":"21892","type":"HelpTool"}]},"id":"21893","type":"Toolbar"},{"attributes":{},"id":"21939","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"21955","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"21956","type":"ToolbarBox"},{"attributes":{"source":{"id":"21869","type":"ColumnDataSource"}},"id":"21933","type":"CDSView"},{"attributes":{"tools":[{"id":"21890","type":"BoxSelectTool"},{"id":"21891","type":"LassoSelectTool"},{"id":"21892","type":"HelpTool"},{"id":"21922","type":"BoxSelectTool"},{"id":"21923","type":"LassoSelectTool"},{"id":"21924","type":"HelpTool"}]},"id":"21955","type":"ProxyToolbar"},{"attributes":{},"id":"21924","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"21886","type":"BasicTicker"}},"id":"21889","type":"Grid"},{"attributes":{"ticker":{"id":"21881","type":"BasicTicker"}},"id":"21884","type":"Grid"},{"attributes":{},"id":"21908","type":"LinearScale"},{"attributes":{"children":[[{"id":"21870","subtype":"Figure","type":"Plot"},0,0],[{"id":"21902","subtype":"Figure","type":"Plot"},0,1]]},"id":"21954","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"21942","type":"PolyAnnotation"}},"id":"21891","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"21951","type":"BoxAnnotation"}},"id":"21922","type":"BoxSelectTool"},{"attributes":{},"id":"21940","type":"Selection"},{"attributes":{},"id":"21876","type":"LinearScale"},{"attributes":{},"id":"21886","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"21930","type":"Circle"},{"attributes":{"below":[{"id":"21880","type":"LinearAxis"}],"center":[{"id":"21884","type":"Grid"},{"id":"21889","type":"Grid"}],"left":[{"id":"21885","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21900","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"21893","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21872","type":"DataRange1d"},"x_scale":{"id":"21876","type":"LinearScale"},"y_range":{"id":"21874","type":"DataRange1d"},"y_scale":{"id":"21878","type":"LinearScale"}},"id":"21870","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"21904","type":"DataRange1d"},{"attributes":{},"id":"21936","type":"BasicTickFormatter"},{"attributes":{},"id":"21881","type":"BasicTicker"},{"attributes":{"children":[{"id":"21956","type":"ToolbarBox"},{"id":"21954","type":"GridBox"}]},"id":"21957","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"21899","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"21918","type":"BasicTicker"}},"id":"21921","type":"Grid"},{"attributes":{"data_source":{"id":"21869","type":"ColumnDataSource"},"glyph":{"id":"21898","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21899","type":"Circle"},"selection_glyph":null,"view":{"id":"21901","type":"CDSView"}},"id":"21900","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"21952","type":"PolyAnnotation"},{"attributes":{},"id":"21938","type":"BasicTickFormatter"},{"attributes":{},"id":"21918","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"21952","type":"PolyAnnotation"}},"id":"21923","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"21938","type":"BasicTickFormatter"},"ticker":{"id":"21881","type":"BasicTicker"}},"id":"21880","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"21941","type":"BoxAnnotation"}},"id":"21890","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"21906","type":"DataRange1d"},{"attributes":{},"id":"21910","type":"LinearScale"},{"attributes":{"source":{"id":"21869","type":"ColumnDataSource"}},"id":"21901","type":"CDSView"},{"attributes":{"formatter":{"id":"21936","type":"BasicTickFormatter"},"ticker":{"id":"21886","type":"BasicTicker"}},"id":"21885","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21922","type":"BoxSelectTool"},{"id":"21923","type":"LassoSelectTool"},{"id":"21924","type":"HelpTool"}]},"id":"21925","type":"Toolbar"},{"attributes":{"below":[{"id":"21912","type":"LinearAxis"}],"center":[{"id":"21916","type":"Grid"},{"id":"21921","type":"Grid"}],"left":[{"id":"21917","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21932","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"21925","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21904","type":"DataRange1d"},"x_scale":{"id":"21908","type":"LinearScale"},"y_range":{"id":"21906","type":"DataRange1d"},"y_scale":{"id":"21910","type":"LinearScale"}},"id":"21902","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21941","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"21872","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"21898","type":"Circle"},{"attributes":{"formatter":{"id":"21948","type":"BasicTickFormatter"},"ticker":{"id":"21913","type":"BasicTicker"}},"id":"21912","type":"LinearAxis"},{"attributes":{"ticker":{"id":"21913","type":"BasicTicker"}},"id":"21916","type":"Grid"}],"root_ids":["21957"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"c032b564-39e0-4429-9ade-58293f2ca80b","roots":{"21957":"aec6df26-c736-4614-b343-ca705c0b7db3"}}];
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