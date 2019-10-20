(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("5891d46e-4158-49d5-8de3-0fc2a7a1dfda");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5891d46e-4158-49d5-8de3-0fc2a7a1dfda' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"b86ffdef-0e73-4a1a-b3a8-95b133a3a0ba":{"roots":{"references":[{"attributes":{"below":[{"id":"35575","type":"LinearAxis"}],"left":[{"id":"35580","type":"LogAxis"}],"renderers":[{"id":"35575","type":"LinearAxis"},{"id":"35579","type":"Grid"},{"id":"35580","type":"LogAxis"},{"id":"35584","type":"Grid"},{"id":"35590","type":"BoxAnnotation"},{"id":"35607","type":"Legend"},{"id":"35599","type":"GlyphRenderer"},{"id":"35612","type":"GlyphRenderer"},{"id":"35625","type":"GlyphRenderer"},{"id":"35641","type":"GlyphRenderer"},{"id":"35659","type":"GlyphRenderer"},{"id":"35678","type":"GlyphRenderer"}],"title":{"id":"35564","type":"Title"},"toolbar":{"id":"35589","type":"Toolbar"},"x_range":{"id":"35567","type":"DataRange1d"},"x_scale":{"id":"35571","type":"LinearScale"},"y_range":{"id":"35569","type":"Range1d"},"y_scale":{"id":"35573","type":"LogScale"}},"id":"35565","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35590","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35657","type":"Circle"},{"attributes":{"items":[{"id":"35608","type":"LegendItem"},{"id":"35637","type":"LegendItem"},{"id":"35655","type":"LegendItem"},{"id":"35696","type":"LegendItem"}],"plot":{"id":"35565","subtype":"Figure","type":"Plot"}},"id":"35607","type":"Legend"},{"attributes":{"overlay":{"id":"35590","type":"BoxAnnotation"}},"id":"35586","type":"BoxZoomTool"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"35625","type":"GlyphRenderer"}]},"id":"35637","type":"LegendItem"},{"attributes":{},"id":"35694","type":"Selection"},{"attributes":{},"id":"35588","type":"SaveTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35610","type":"Circle"},{"attributes":{},"id":"35604","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"35569","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35640","type":"Line"},{"attributes":{},"id":"35674","type":"UnionRenderers"},{"attributes":{},"id":"35635","type":"Selection"},{"attributes":{"source":{"id":"35638","type":"ColumnDataSource"}},"id":"35642","type":"CDSView"},{"attributes":{},"id":"35620","type":"Selection"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"35599","type":"GlyphRenderer"},{"id":"35612","type":"GlyphRenderer"}]},"id":"35608","type":"LegendItem"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"35641","type":"GlyphRenderer"},{"id":"35659","type":"GlyphRenderer"}]},"id":"35655","type":"LegendItem"},{"attributes":{"source":{"id":"35609","type":"ColumnDataSource"}},"id":"35613","type":"CDSView"},{"attributes":{},"id":"35713","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35658","type":"Circle"},{"attributes":{"callback":null},"id":"35567","type":"DataRange1d"},{"attributes":{"ticker":null},"id":"35602","type":"LogTickFormatter"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35676","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35624","type":"Line"},{"attributes":{"data_source":{"id":"35596","type":"ColumnDataSource"},"glyph":{"id":"35597","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35598","type":"Line"},"selection_glyph":null,"view":{"id":"35600","type":"CDSView"}},"id":"35599","type":"GlyphRenderer"},{"attributes":{},"id":"35653","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"35713","type":"Selection"},"selection_policy":{"id":"35714","type":"UnionRenderers"}},"id":"35675","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35656","type":"ColumnDataSource"},"glyph":{"id":"35657","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35658","type":"Circle"},"selection_glyph":null,"view":{"id":"35660","type":"CDSView"}},"id":"35659","type":"GlyphRenderer"},{"attributes":{},"id":"35621","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"35565","subtype":"Figure","type":"Plot"},"ticker":{"id":"35581","type":"LogTicker"}},"id":"35584","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"35653","type":"Selection"},"selection_policy":{"id":"35654","type":"UnionRenderers"}},"id":"35622","type":"ColumnDataSource"},{"attributes":{},"id":"35654","type":"UnionRenderers"},{"attributes":{},"id":"35714","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35585","type":"PanTool"},{"id":"35586","type":"BoxZoomTool"},{"id":"35587","type":"ResetTool"},{"id":"35588","type":"SaveTool"}]},"id":"35589","type":"Toolbar"},{"attributes":{"source":{"id":"35675","type":"ColumnDataSource"}},"id":"35679","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35623","type":"Line"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35694","type":"Selection"},"selection_policy":{"id":"35695","type":"UnionRenderers"}},"id":"35656","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35611","type":"Circle"},{"attributes":{"data_source":{"id":"35638","type":"ColumnDataSource"},"glyph":{"id":"35639","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35640","type":"Line"},"selection_glyph":null,"view":{"id":"35642","type":"CDSView"}},"id":"35641","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35597","type":"Line"},{"attributes":{},"id":"35636","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35677","type":"Line"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"35678","type":"GlyphRenderer"}]},"id":"35696","type":"LegendItem"},{"attributes":{},"id":"35585","type":"PanTool"},{"attributes":{"source":{"id":"35622","type":"ColumnDataSource"}},"id":"35626","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35673","type":"Selection"},"selection_policy":{"id":"35674","type":"UnionRenderers"}},"id":"35638","type":"ColumnDataSource"},{"attributes":{"axis_label":"sections","formatter":{"id":"35604","type":"BasicTickFormatter"},"plot":{"id":"35565","subtype":"Figure","type":"Plot"},"ticker":{"id":"35576","type":"BasicTicker"}},"id":"35575","type":"LinearAxis"},{"attributes":{"source":{"id":"35656","type":"ColumnDataSource"}},"id":"35660","type":"CDSView"},{"attributes":{},"id":"35571","type":"LinearScale"},{"attributes":{"plot":{"id":"35565","subtype":"Figure","type":"Plot"},"ticker":{"id":"35576","type":"BasicTicker"}},"id":"35579","type":"Grid"},{"attributes":{},"id":"35573","type":"LogScale"},{"attributes":{"plot":null,"text":"log axis example"},"id":"35564","type":"Title"},{"attributes":{"axis_label":"particles","formatter":{"id":"35602","type":"LogTickFormatter"},"plot":{"id":"35565","subtype":"Figure","type":"Plot"},"ticker":{"id":"35581","type":"LogTicker"}},"id":"35580","type":"LogAxis"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35635","type":"Selection"},"selection_policy":{"id":"35636","type":"UnionRenderers"}},"id":"35609","type":"ColumnDataSource"},{"attributes":{},"id":"35695","type":"UnionRenderers"},{"attributes":{},"id":"35673","type":"Selection"},{"attributes":{"source":{"id":"35596","type":"ColumnDataSource"}},"id":"35600","type":"CDSView"},{"attributes":{"data_source":{"id":"35609","type":"ColumnDataSource"},"glyph":{"id":"35610","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35611","type":"Circle"},"selection_glyph":null,"view":{"id":"35613","type":"CDSView"}},"id":"35612","type":"GlyphRenderer"},{"attributes":{},"id":"35587","type":"ResetTool"},{"attributes":{},"id":"35576","type":"BasicTicker"},{"attributes":{"num_minor_ticks":10},"id":"35581","type":"LogTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35598","type":"Line"},{"attributes":{"data_source":{"id":"35622","type":"ColumnDataSource"},"glyph":{"id":"35623","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35624","type":"Line"},"selection_glyph":null,"view":{"id":"35626","type":"CDSView"}},"id":"35625","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35620","type":"Selection"},"selection_policy":{"id":"35621","type":"UnionRenderers"}},"id":"35596","type":"ColumnDataSource"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35639","type":"Line"},{"attributes":{"data_source":{"id":"35675","type":"ColumnDataSource"},"glyph":{"id":"35676","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35677","type":"Line"},"selection_glyph":null,"view":{"id":"35679","type":"CDSView"}},"id":"35678","type":"GlyphRenderer"}],"root_ids":["35565"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b86ffdef-0e73-4a1a-b3a8-95b133a3a0ba","roots":{"35565":"5891d46e-4158-49d5-8de3-0fc2a7a1dfda"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();