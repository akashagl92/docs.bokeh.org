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
      };var element = document.getElementById("aefb188a-ee52-4e81-bc15-89ec71e19ed0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aefb188a-ee52-4e81-bc15-89ec71e19ed0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"2efe1e4d-1945-4f03-8c6d-40477f8aba37":{"roots":{"references":[{"attributes":{},"id":"35629","type":"Selection"},{"attributes":{"overlay":{"id":"35583","type":"BoxAnnotation"}},"id":"35579","type":"BoxZoomTool"},{"attributes":{},"id":"35580","type":"ResetTool"},{"attributes":{"callback":null},"id":"35560","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35603","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35650","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35604","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35617","type":"Line"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35632","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35651","type":"Circle"},{"attributes":{"axis_label":"sections","formatter":{"id":"35596","type":"BasicTickFormatter"},"plot":{"id":"35558","subtype":"Figure","type":"Plot"},"ticker":{"id":"35569","type":"BasicTicker"}},"id":"35568","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35590","type":"Line"},{"attributes":{"source":{"id":"35589","type":"ColumnDataSource"}},"id":"35593","type":"CDSView"},{"attributes":{},"id":"35707","type":"Selection"},{"attributes":{"source":{"id":"35668","type":"ColumnDataSource"}},"id":"35672","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"35558","subtype":"Figure","type":"Plot"},"ticker":{"id":"35574","type":"LogTicker"}},"id":"35577","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35667","type":"Selection"},"selection_policy":{"id":"35666","type":"UnionRenderers"}},"id":"35631","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35668","type":"ColumnDataSource"},"glyph":{"id":"35669","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35670","type":"Line"},"selection_glyph":null,"view":{"id":"35672","type":"CDSView"}},"id":"35671","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"35671","type":"GlyphRenderer"}]},"id":"35689","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35629","type":"Selection"},"selection_policy":{"id":"35628","type":"UnionRenderers"}},"id":"35602","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35578","type":"PanTool"},{"id":"35579","type":"BoxZoomTool"},{"id":"35580","type":"ResetTool"},{"id":"35581","type":"SaveTool"}]},"id":"35582","type":"Toolbar"},{"attributes":{},"id":"35706","type":"UnionRenderers"},{"attributes":{},"id":"35569","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35614","type":"Selection"},"selection_policy":{"id":"35613","type":"UnionRenderers"}},"id":"35589","type":"ColumnDataSource"},{"attributes":{},"id":"35687","type":"UnionRenderers"},{"attributes":{},"id":"35613","type":"UnionRenderers"},{"attributes":{},"id":"35581","type":"SaveTool"},{"attributes":{},"id":"35646","type":"UnionRenderers"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"35562","type":"Range1d"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35616","type":"Line"},{"attributes":{"below":[{"id":"35568","type":"LinearAxis"}],"left":[{"id":"35573","type":"LogAxis"}],"renderers":[{"id":"35568","type":"LinearAxis"},{"id":"35572","type":"Grid"},{"id":"35573","type":"LogAxis"},{"id":"35577","type":"Grid"},{"id":"35583","type":"BoxAnnotation"},{"id":"35600","type":"Legend"},{"id":"35592","type":"GlyphRenderer"},{"id":"35605","type":"GlyphRenderer"},{"id":"35618","type":"GlyphRenderer"},{"id":"35634","type":"GlyphRenderer"},{"id":"35652","type":"GlyphRenderer"},{"id":"35671","type":"GlyphRenderer"}],"title":{"id":"35557","type":"Title"},"toolbar":{"id":"35582","type":"Toolbar"},"x_range":{"id":"35560","type":"DataRange1d"},"x_scale":{"id":"35564","type":"LinearScale"},"y_range":{"id":"35562","type":"Range1d"},"y_scale":{"id":"35566","type":"LogScale"}},"id":"35558","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35666","type":"UnionRenderers"},{"attributes":{"plot":{"id":"35558","subtype":"Figure","type":"Plot"},"ticker":{"id":"35569","type":"BasicTicker"}},"id":"35572","type":"Grid"},{"attributes":{"data_source":{"id":"35602","type":"ColumnDataSource"},"glyph":{"id":"35603","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35604","type":"Circle"},"selection_glyph":null,"view":{"id":"35606","type":"CDSView"}},"id":"35605","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35591","type":"Line"},{"attributes":{},"id":"35647","type":"Selection"},{"attributes":{"axis_label":"particles","formatter":{"id":"35598","type":"LogTickFormatter"},"plot":{"id":"35558","subtype":"Figure","type":"Plot"},"ticker":{"id":"35574","type":"LogTicker"}},"id":"35573","type":"LogAxis"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35688","type":"Selection"},"selection_policy":{"id":"35687","type":"UnionRenderers"}},"id":"35649","type":"ColumnDataSource"},{"attributes":{},"id":"35667","type":"Selection"},{"attributes":{"plot":null,"text":"log axis example"},"id":"35557","type":"Title"},{"attributes":{"source":{"id":"35631","type":"ColumnDataSource"}},"id":"35635","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35670","type":"Line"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"35634","type":"GlyphRenderer"},{"id":"35652","type":"GlyphRenderer"}]},"id":"35648","type":"LegendItem"},{"attributes":{"data_source":{"id":"35649","type":"ColumnDataSource"},"glyph":{"id":"35650","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35651","type":"Circle"},"selection_glyph":null,"view":{"id":"35653","type":"CDSView"}},"id":"35652","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35602","type":"ColumnDataSource"}},"id":"35606","type":"CDSView"},{"attributes":{},"id":"35578","type":"PanTool"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35669","type":"Line"},{"attributes":{},"id":"35596","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35633","type":"Line"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"35647","type":"Selection"},"selection_policy":{"id":"35646","type":"UnionRenderers"}},"id":"35615","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"35601","type":"LegendItem"},{"id":"35630","type":"LegendItem"},{"id":"35648","type":"LegendItem"},{"id":"35689","type":"LegendItem"}],"plot":{"id":"35558","subtype":"Figure","type":"Plot"}},"id":"35600","type":"Legend"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"35592","type":"GlyphRenderer"},{"id":"35605","type":"GlyphRenderer"}]},"id":"35601","type":"LegendItem"},{"attributes":{},"id":"35566","type":"LogScale"},{"attributes":{"source":{"id":"35615","type":"ColumnDataSource"}},"id":"35619","type":"CDSView"},{"attributes":{},"id":"35628","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"35631","type":"ColumnDataSource"},"glyph":{"id":"35632","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35633","type":"Line"},"selection_glyph":null,"view":{"id":"35635","type":"CDSView"}},"id":"35634","type":"GlyphRenderer"},{"attributes":{"ticker":null},"id":"35598","type":"LogTickFormatter"},{"attributes":{"source":{"id":"35649","type":"ColumnDataSource"}},"id":"35653","type":"CDSView"},{"attributes":{"data_source":{"id":"35615","type":"ColumnDataSource"},"glyph":{"id":"35616","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35617","type":"Line"},"selection_glyph":null,"view":{"id":"35619","type":"CDSView"}},"id":"35618","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"35707","type":"Selection"},"selection_policy":{"id":"35706","type":"UnionRenderers"}},"id":"35668","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":10},"id":"35574","type":"LogTicker"},{"attributes":{"data_source":{"id":"35589","type":"ColumnDataSource"},"glyph":{"id":"35590","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35591","type":"Line"},"selection_glyph":null,"view":{"id":"35593","type":"CDSView"}},"id":"35592","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35583","type":"BoxAnnotation"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"35618","type":"GlyphRenderer"}]},"id":"35630","type":"LegendItem"},{"attributes":{},"id":"35688","type":"Selection"},{"attributes":{},"id":"35564","type":"LinearScale"},{"attributes":{},"id":"35614","type":"Selection"}],"root_ids":["35558"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2efe1e4d-1945-4f03-8c6d-40477f8aba37","roots":{"35558":"aefb188a-ee52-4e81-bc15-89ec71e19ed0"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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