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
      };var element = document.getElementById("b426b74e-242b-4640-808b-3534a251ebcc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b426b74e-242b-4640-808b-3534a251ebcc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"52638aed-8033-4a97-89f7-0829bbdf2239":{"roots":{"references":[{"attributes":{"data_source":{"id":"29957","type":"ColumnDataSource"},"glyph":{"id":"29958","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29959","type":"Line"},"selection_glyph":null,"view":{"id":"29961","type":"CDSView"}},"id":"29960","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"29977","type":"Circle"},{"attributes":{"data_source":{"id":"29941","type":"ColumnDataSource"},"glyph":{"id":"29942","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29943","type":"Line"},"selection_glyph":null,"view":{"id":"29945","type":"CDSView"}},"id":"29944","type":"GlyphRenderer"},{"attributes":{},"id":"29909","type":"SaveTool"},{"attributes":{},"id":"29954","type":"Selection"},{"attributes":{"below":[{"id":"29896","type":"LinearAxis"}],"center":[{"id":"29900","type":"Grid"},{"id":"29905","type":"Grid"},{"id":"29926","type":"Legend"}],"left":[{"id":"29901","type":"LogAxis"}],"renderers":[{"id":"29918","type":"GlyphRenderer"},{"id":"29931","type":"GlyphRenderer"},{"id":"29944","type":"GlyphRenderer"},{"id":"29960","type":"GlyphRenderer"},{"id":"29978","type":"GlyphRenderer"},{"id":"29997","type":"GlyphRenderer"}],"title":{"id":"29886","type":"Title"},"toolbar":{"id":"29910","type":"Toolbar"},"x_range":{"id":"29888","type":"DataRange1d"},"x_scale":{"id":"29892","type":"LinearScale"},"y_range":{"id":"29890","type":"Range1d"},"y_scale":{"id":"29894","type":"LogScale"}},"id":"29885","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"29954","type":"Selection"},"selection_policy":{"id":"29953","type":"UnionRenderers"}},"id":"29928","type":"ColumnDataSource"},{"attributes":{},"id":"29894","type":"LogScale"},{"attributes":{},"id":"29924","type":"BasicTickFormatter"},{"attributes":{"text":"log axis example"},"id":"29886","type":"Title"},{"attributes":{"source":{"id":"29928","type":"ColumnDataSource"}},"id":"29932","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"29992","type":"Selection"},"selection_policy":{"id":"29991","type":"UnionRenderers"}},"id":"29957","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"29888","type":"DataRange1d"},{"attributes":{},"id":"29953","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"29959","type":"Line"},{"attributes":{"ticker":{"id":"29897","type":"BasicTicker"}},"id":"29900","type":"Grid"},{"attributes":{},"id":"29938","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29929","type":"Circle"},{"attributes":{},"id":"29972","type":"Selection"},{"attributes":{},"id":"29939","type":"Selection"},{"attributes":{"items":[{"id":"29927","type":"LegendItem"},{"id":"29956","type":"LegendItem"},{"id":"29974","type":"LegendItem"},{"id":"30015","type":"LegendItem"}]},"id":"29926","type":"Legend"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"30013","type":"Selection"},"selection_policy":{"id":"30012","type":"UnionRenderers"}},"id":"29975","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"29917","type":"Line"},{"attributes":{"source":{"id":"29975","type":"ColumnDataSource"}},"id":"29979","type":"CDSView"},{"attributes":{"num_minor_ticks":10},"id":"29902","type":"LogTicker"},{"attributes":{"source":{"id":"29941","type":"ColumnDataSource"}},"id":"29945","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"29996","type":"Line"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"29997","type":"GlyphRenderer"}]},"id":"30015","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29925","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"29943","type":"Line"},{"attributes":{},"id":"29992","type":"Selection"},{"attributes":{"source":{"id":"29994","type":"ColumnDataSource"}},"id":"29998","type":"CDSView"},{"attributes":{"source":{"id":"29915","type":"ColumnDataSource"}},"id":"29919","type":"CDSView"},{"attributes":{},"id":"29971","type":"UnionRenderers"},{"attributes":{"axis_label":"sections","formatter":{"id":"29924","type":"BasicTickFormatter"},"ticker":{"id":"29897","type":"BasicTicker"}},"id":"29896","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"29942","type":"Line"},{"attributes":{"overlay":{"id":"29925","type":"BoxAnnotation"}},"id":"29907","type":"BoxZoomTool"},{"attributes":{},"id":"30031","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"29916","type":"Line"},{"attributes":{},"id":"30013","type":"Selection"},{"attributes":{"data_source":{"id":"29915","type":"ColumnDataSource"},"glyph":{"id":"29916","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29917","type":"Line"},"selection_glyph":null,"view":{"id":"29919","type":"CDSView"}},"id":"29918","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"29994","type":"ColumnDataSource"},"glyph":{"id":"29995","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29996","type":"Line"},"selection_glyph":null,"view":{"id":"29998","type":"CDSView"}},"id":"29997","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29930","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"29972","type":"Selection"},"selection_policy":{"id":"29971","type":"UnionRenderers"}},"id":"29941","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"29890","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29906","type":"PanTool"},{"id":"29907","type":"BoxZoomTool"},{"id":"29908","type":"ResetTool"},{"id":"29909","type":"SaveTool"}]},"id":"29910","type":"Toolbar"},{"attributes":{},"id":"29897","type":"BasicTicker"},{"attributes":{},"id":"29906","type":"PanTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"29976","type":"Circle"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"29918","type":"GlyphRenderer"},{"id":"29931","type":"GlyphRenderer"}]},"id":"29927","type":"LegendItem"},{"attributes":{},"id":"30012","type":"UnionRenderers"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"29958","type":"Line"},{"attributes":{},"id":"29908","type":"ResetTool"},{"attributes":{"data_source":{"id":"29928","type":"ColumnDataSource"},"glyph":{"id":"29929","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29930","type":"Circle"},"selection_glyph":null,"view":{"id":"29932","type":"CDSView"}},"id":"29931","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"29975","type":"ColumnDataSource"},"glyph":{"id":"29976","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29977","type":"Circle"},"selection_glyph":null,"view":{"id":"29979","type":"CDSView"}},"id":"29978","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"29902","type":"LogTicker"}},"id":"29905","type":"Grid"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"29995","type":"Line"},{"attributes":{},"id":"30032","type":"Selection"},{"attributes":{"axis_label":"particles","formatter":{"id":"29922","type":"LogTickFormatter"},"ticker":{"id":"29902","type":"LogTicker"}},"id":"29901","type":"LogAxis"},{"attributes":{"source":{"id":"29957","type":"ColumnDataSource"}},"id":"29961","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"30032","type":"Selection"},"selection_policy":{"id":"30031","type":"UnionRenderers"}},"id":"29994","type":"ColumnDataSource"},{"attributes":{},"id":"29991","type":"UnionRenderers"},{"attributes":{"ticker":null},"id":"29922","type":"LogTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"29939","type":"Selection"},"selection_policy":{"id":"29938","type":"UnionRenderers"}},"id":"29915","type":"ColumnDataSource"},{"attributes":{},"id":"29892","type":"LinearScale"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"29960","type":"GlyphRenderer"},{"id":"29978","type":"GlyphRenderer"}]},"id":"29974","type":"LegendItem"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"29944","type":"GlyphRenderer"}]},"id":"29956","type":"LegendItem"}],"root_ids":["29885"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"52638aed-8033-4a97-89f7-0829bbdf2239","roots":{"29885":"b426b74e-242b-4640-808b-3534a251ebcc"}}];
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