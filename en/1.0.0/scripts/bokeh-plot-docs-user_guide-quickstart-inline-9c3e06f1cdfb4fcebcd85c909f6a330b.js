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
      };var element = document.getElementById("8cfdd2fc-da9d-4d28-811f-6c23e12fad21");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cfdd2fc-da9d-4d28-811f-6c23e12fad21' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"7e570cff-4637-4553-b679-20222dc25280":{"roots":{"references":[{"attributes":{"plot":null,"text":"log axis example"},"id":"35554","type":"Title"},{"attributes":{"source":{"id":"35612","type":"ColumnDataSource"}},"id":"35616","type":"CDSView"},{"attributes":{},"id":"35664","type":"UnionRenderers"},{"attributes":{"source":{"id":"35586","type":"ColumnDataSource"}},"id":"35590","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35684","type":"Selection"},"selection_policy":{"id":"35685","type":"UnionRenderers"}},"id":"35646","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":10},"id":"35571","type":"LogTicker"},{"attributes":{"overlay":{"id":"35580","type":"BoxAnnotation"}},"id":"35576","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"35555","subtype":"Figure","type":"Plot"},"ticker":{"id":"35566","type":"BasicTicker"}},"id":"35569","type":"Grid"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"35615","type":"GlyphRenderer"}]},"id":"35627","type":"LegendItem"},{"attributes":{"data_source":{"id":"35646","type":"ColumnDataSource"},"glyph":{"id":"35647","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35648","type":"Circle"},"selection_glyph":null,"view":{"id":"35650","type":"CDSView"}},"id":"35649","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35599","type":"ColumnDataSource"},"glyph":{"id":"35600","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35601","type":"Circle"},"selection_glyph":null,"view":{"id":"35603","type":"CDSView"}},"id":"35602","type":"GlyphRenderer"},{"attributes":{"axis_label":"sections","formatter":{"id":"35593","type":"BasicTickFormatter"},"plot":{"id":"35555","subtype":"Figure","type":"Plot"},"ticker":{"id":"35566","type":"BasicTicker"}},"id":"35565","type":"LinearAxis"},{"attributes":{},"id":"35593","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"35631","type":"GlyphRenderer"},{"id":"35649","type":"GlyphRenderer"}]},"id":"35645","type":"LegendItem"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35629","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35588","type":"Line"},{"attributes":{},"id":"35685","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35580","type":"BoxAnnotation"},{"attributes":{},"id":"35684","type":"Selection"},{"attributes":{"callback":null},"id":"35557","type":"DataRange1d"},{"attributes":{},"id":"35577","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35667","type":"Line"},{"attributes":{},"id":"35561","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35648","type":"Circle"},{"attributes":{},"id":"35703","type":"Selection"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35666","type":"Line"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35625","type":"Selection"},"selection_policy":{"id":"35626","type":"UnionRenderers"}},"id":"35599","type":"ColumnDataSource"},{"attributes":{},"id":"35643","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"35643","type":"Selection"},"selection_policy":{"id":"35644","type":"UnionRenderers"}},"id":"35612","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"35565","type":"LinearAxis"}],"left":[{"id":"35570","type":"LogAxis"}],"renderers":[{"id":"35565","type":"LinearAxis"},{"id":"35569","type":"Grid"},{"id":"35570","type":"LogAxis"},{"id":"35574","type":"Grid"},{"id":"35580","type":"BoxAnnotation"},{"id":"35597","type":"Legend"},{"id":"35589","type":"GlyphRenderer"},{"id":"35602","type":"GlyphRenderer"},{"id":"35615","type":"GlyphRenderer"},{"id":"35631","type":"GlyphRenderer"},{"id":"35649","type":"GlyphRenderer"},{"id":"35668","type":"GlyphRenderer"}],"title":{"id":"35554","type":"Title"},"toolbar":{"id":"35579","type":"Toolbar"},"x_range":{"id":"35557","type":"DataRange1d"},"x_scale":{"id":"35561","type":"LinearScale"},"y_range":{"id":"35559","type":"Range1d"},"y_scale":{"id":"35563","type":"LogScale"}},"id":"35555","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"35586","type":"ColumnDataSource"},"glyph":{"id":"35587","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35588","type":"Line"},"selection_glyph":null,"view":{"id":"35590","type":"CDSView"}},"id":"35589","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35575","type":"PanTool"},{"id":"35576","type":"BoxZoomTool"},{"id":"35577","type":"ResetTool"},{"id":"35578","type":"SaveTool"}]},"id":"35579","type":"Toolbar"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"35559","type":"Range1d"},{"attributes":{"ticker":null},"id":"35595","type":"LogTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"35703","type":"Selection"},"selection_policy":{"id":"35704","type":"UnionRenderers"}},"id":"35665","type":"ColumnDataSource"},{"attributes":{},"id":"35611","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"35665","type":"ColumnDataSource"},"glyph":{"id":"35666","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35667","type":"Line"},"selection_glyph":null,"view":{"id":"35669","type":"CDSView"}},"id":"35668","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35663","type":"Selection"},"selection_policy":{"id":"35664","type":"UnionRenderers"}},"id":"35628","type":"ColumnDataSource"},{"attributes":{},"id":"35578","type":"SaveTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35647","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35614","type":"Line"},{"attributes":{"source":{"id":"35665","type":"ColumnDataSource"}},"id":"35669","type":"CDSView"},{"attributes":{"data_source":{"id":"35628","type":"ColumnDataSource"},"glyph":{"id":"35629","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35630","type":"Line"},"selection_glyph":null,"view":{"id":"35632","type":"CDSView"}},"id":"35631","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"35555","subtype":"Figure","type":"Plot"},"ticker":{"id":"35571","type":"LogTicker"}},"id":"35574","type":"Grid"},{"attributes":{},"id":"35610","type":"Selection"},{"attributes":{},"id":"35625","type":"Selection"},{"attributes":{},"id":"35644","type":"UnionRenderers"},{"attributes":{"items":[{"id":"35598","type":"LegendItem"},{"id":"35627","type":"LegendItem"},{"id":"35645","type":"LegendItem"},{"id":"35686","type":"LegendItem"}],"plot":{"id":"35555","subtype":"Figure","type":"Plot"}},"id":"35597","type":"Legend"},{"attributes":{"axis_label":"particles","formatter":{"id":"35595","type":"LogTickFormatter"},"plot":{"id":"35555","subtype":"Figure","type":"Plot"},"ticker":{"id":"35571","type":"LogTicker"}},"id":"35570","type":"LogAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35630","type":"Line"},{"attributes":{"data_source":{"id":"35612","type":"ColumnDataSource"},"glyph":{"id":"35613","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35614","type":"Line"},"selection_glyph":null,"view":{"id":"35616","type":"CDSView"}},"id":"35615","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35601","type":"Circle"},{"attributes":{"source":{"id":"35646","type":"ColumnDataSource"}},"id":"35650","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35613","type":"Line"},{"attributes":{},"id":"35575","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35610","type":"Selection"},"selection_policy":{"id":"35611","type":"UnionRenderers"}},"id":"35586","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"35589","type":"GlyphRenderer"},{"id":"35602","type":"GlyphRenderer"}]},"id":"35598","type":"LegendItem"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35600","type":"Circle"},{"attributes":{},"id":"35566","type":"BasicTicker"},{"attributes":{},"id":"35626","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35587","type":"Line"},{"attributes":{},"id":"35663","type":"Selection"},{"attributes":{},"id":"35704","type":"UnionRenderers"},{"attributes":{},"id":"35563","type":"LogScale"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"35668","type":"GlyphRenderer"}]},"id":"35686","type":"LegendItem"},{"attributes":{"source":{"id":"35628","type":"ColumnDataSource"}},"id":"35632","type":"CDSView"},{"attributes":{"source":{"id":"35599","type":"ColumnDataSource"}},"id":"35603","type":"CDSView"}],"root_ids":["35555"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"7e570cff-4637-4553-b679-20222dc25280","roots":{"35555":"8cfdd2fc-da9d-4d28-811f-6c23e12fad21"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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