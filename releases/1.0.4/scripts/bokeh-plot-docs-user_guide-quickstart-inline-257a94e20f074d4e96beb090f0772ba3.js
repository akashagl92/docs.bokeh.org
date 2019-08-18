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
      };var element = document.getElementById("f2d7dabd-41c5-45ca-bfaf-04bdb6187ea2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2d7dabd-41c5-45ca-bfaf-04bdb6187ea2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"d54304c4-25c4-4341-b743-462baeaa6ec0":{"roots":{"references":[{"attributes":{},"id":"35591","type":"PanTool"},{"attributes":{"data_source":{"id":"35615","type":"ColumnDataSource"},"glyph":{"id":"35616","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35617","type":"Circle"},"selection_glyph":null,"view":{"id":"35619","type":"CDSView"}},"id":"35618","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35602","type":"ColumnDataSource"},"glyph":{"id":"35603","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35604","type":"Line"},"selection_glyph":null,"view":{"id":"35606","type":"CDSView"}},"id":"35605","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35615","type":"ColumnDataSource"}},"id":"35619","type":"CDSView"},{"attributes":{"below":[{"id":"35581","type":"LinearAxis"}],"left":[{"id":"35586","type":"LogAxis"}],"renderers":[{"id":"35581","type":"LinearAxis"},{"id":"35585","type":"Grid"},{"id":"35586","type":"LogAxis"},{"id":"35590","type":"Grid"},{"id":"35596","type":"BoxAnnotation"},{"id":"35613","type":"Legend"},{"id":"35605","type":"GlyphRenderer"},{"id":"35618","type":"GlyphRenderer"},{"id":"35631","type":"GlyphRenderer"},{"id":"35647","type":"GlyphRenderer"},{"id":"35665","type":"GlyphRenderer"},{"id":"35684","type":"GlyphRenderer"}],"title":{"id":"35570","type":"Title"},"toolbar":{"id":"35595","type":"Toolbar"},"x_range":{"id":"35573","type":"DataRange1d"},"x_scale":{"id":"35577","type":"LinearScale"},"y_range":{"id":"35575","type":"Range1d"},"y_scale":{"id":"35579","type":"LogScale"}},"id":"35571","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35629","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35630","type":"Line"},{"attributes":{},"id":"35699","type":"UnionRenderers"},{"attributes":{},"id":"35593","type":"ResetTool"},{"attributes":{},"id":"35678","type":"UnionRenderers"},{"attributes":{"source":{"id":"35602","type":"ColumnDataSource"}},"id":"35606","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35596","type":"BoxAnnotation"},{"attributes":{},"id":"35718","type":"UnionRenderers"},{"attributes":{},"id":"35625","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"35644","type":"ColumnDataSource"},"glyph":{"id":"35645","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35646","type":"Line"},"selection_glyph":null,"view":{"id":"35648","type":"CDSView"}},"id":"35647","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"35614","type":"LegendItem"},{"id":"35643","type":"LegendItem"},{"id":"35661","type":"LegendItem"},{"id":"35702","type":"LegendItem"}],"plot":{"id":"35571","subtype":"Figure","type":"Plot"}},"id":"35613","type":"Legend"},{"attributes":{},"id":"35641","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35604","type":"Line"},{"attributes":{},"id":"35626","type":"Selection"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"35575","type":"Range1d"},{"attributes":{},"id":"35582","type":"BasicTicker"},{"attributes":{"data_source":{"id":"35628","type":"ColumnDataSource"},"glyph":{"id":"35629","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35630","type":"Line"},"selection_glyph":null,"view":{"id":"35632","type":"CDSView"}},"id":"35631","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35596","type":"BoxAnnotation"}},"id":"35592","type":"BoxZoomTool"},{"attributes":{"source":{"id":"35662","type":"ColumnDataSource"}},"id":"35666","type":"CDSView"},{"attributes":{"axis_label":"sections","formatter":{"id":"35610","type":"BasicTickFormatter"},"plot":{"id":"35571","subtype":"Figure","type":"Plot"},"ticker":{"id":"35582","type":"BasicTicker"}},"id":"35581","type":"LinearAxis"},{"attributes":{},"id":"35640","type":"UnionRenderers"},{"attributes":{},"id":"35577","type":"LinearScale"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"35647","type":"GlyphRenderer"},{"id":"35665","type":"GlyphRenderer"}]},"id":"35661","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35646","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35664","type":"Circle"},{"attributes":{"source":{"id":"35628","type":"ColumnDataSource"}},"id":"35632","type":"CDSView"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"35605","type":"GlyphRenderer"},{"id":"35618","type":"GlyphRenderer"}]},"id":"35614","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35700","type":"Selection"},"selection_policy":{"id":"35699","type":"UnionRenderers"}},"id":"35662","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35573","type":"DataRange1d"},{"attributes":{"num_minor_ticks":10},"id":"35587","type":"LogTicker"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35626","type":"Selection"},"selection_policy":{"id":"35625","type":"UnionRenderers"}},"id":"35602","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"35641","type":"Selection"},"selection_policy":{"id":"35640","type":"UnionRenderers"}},"id":"35615","type":"ColumnDataSource"},{"attributes":{"axis_label":"particles","formatter":{"id":"35608","type":"LogTickFormatter"},"plot":{"id":"35571","subtype":"Figure","type":"Plot"},"ticker":{"id":"35587","type":"LogTicker"}},"id":"35586","type":"LogAxis"},{"attributes":{},"id":"35679","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35683","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35591","type":"PanTool"},{"id":"35592","type":"BoxZoomTool"},{"id":"35593","type":"ResetTool"},{"id":"35594","type":"SaveTool"}]},"id":"35595","type":"Toolbar"},{"attributes":{"data_source":{"id":"35681","type":"ColumnDataSource"},"glyph":{"id":"35682","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35683","type":"Line"},"selection_glyph":null,"view":{"id":"35685","type":"CDSView"}},"id":"35684","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35644","type":"ColumnDataSource"}},"id":"35648","type":"CDSView"},{"attributes":{},"id":"35579","type":"LogScale"},{"attributes":{"plot":null,"text":"log axis example"},"id":"35570","type":"Title"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"35684","type":"GlyphRenderer"}]},"id":"35702","type":"LegendItem"},{"attributes":{},"id":"35610","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"35679","type":"Selection"},"selection_policy":{"id":"35678","type":"UnionRenderers"}},"id":"35644","type":"ColumnDataSource"},{"attributes":{},"id":"35594","type":"SaveTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35663","type":"Circle"},{"attributes":{"source":{"id":"35681","type":"ColumnDataSource"}},"id":"35685","type":"CDSView"},{"attributes":{},"id":"35658","type":"UnionRenderers"},{"attributes":{"ticker":null},"id":"35608","type":"LogTickFormatter"},{"attributes":{"plot":{"id":"35571","subtype":"Figure","type":"Plot"},"ticker":{"id":"35582","type":"BasicTicker"}},"id":"35585","type":"Grid"},{"attributes":{},"id":"35659","type":"Selection"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35616","type":"Circle"},{"attributes":{},"id":"35700","type":"Selection"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"35682","type":"Line"},{"attributes":{"data_source":{"id":"35662","type":"ColumnDataSource"},"glyph":{"id":"35663","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35664","type":"Circle"},"selection_glyph":null,"view":{"id":"35666","type":"CDSView"}},"id":"35665","type":"GlyphRenderer"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"35645","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"35571","subtype":"Figure","type":"Plot"},"ticker":{"id":"35587","type":"LogTicker"}},"id":"35590","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35603","type":"Line"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"35719","type":"Selection"},"selection_policy":{"id":"35718","type":"UnionRenderers"}},"id":"35681","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"35631","type":"GlyphRenderer"}]},"id":"35643","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"35617","type":"Circle"},{"attributes":{},"id":"35719","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"35659","type":"Selection"},"selection_policy":{"id":"35658","type":"UnionRenderers"}},"id":"35628","type":"ColumnDataSource"}],"root_ids":["35571"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d54304c4-25c4-4341-b743-462baeaa6ec0","roots":{"35571":"f2d7dabd-41c5-45ca-bfaf-04bdb6187ea2"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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