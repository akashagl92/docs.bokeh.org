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
      };var element = document.getElementById("dfd4c569-40d4-48c8-b526-05191adcd1ff");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dfd4c569-40d4-48c8-b526-05191adcd1ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"04bb4b0e-a8f9-451b-901e-e30cd420f2c0":{"roots":{"references":[{"attributes":{"callback":null},"id":"31014","type":"DataRange1d"},{"attributes":{"data_source":{"id":"31101","type":"ColumnDataSource"},"glyph":{"id":"31102","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31103","type":"Circle"},"selection_glyph":null,"view":{"id":"31105","type":"CDSView"}},"id":"31104","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"31051","type":"BoxAnnotation"}},"id":"31033","type":"BoxZoomTool"},{"attributes":{"text":"log axis example"},"id":"31012","type":"Title"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31084","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31042","type":"Line"},{"attributes":{"source":{"id":"31101","type":"ColumnDataSource"}},"id":"31105","type":"CDSView"},{"attributes":{"below":[{"id":"31022","type":"LinearAxis"}],"center":[{"id":"31026","type":"Grid"},{"id":"31031","type":"Grid"},{"id":"31052","type":"Legend"}],"left":[{"id":"31027","type":"LogAxis"}],"renderers":[{"id":"31044","type":"GlyphRenderer"},{"id":"31057","type":"GlyphRenderer"},{"id":"31070","type":"GlyphRenderer"},{"id":"31086","type":"GlyphRenderer"},{"id":"31104","type":"GlyphRenderer"},{"id":"31123","type":"GlyphRenderer"}],"title":{"id":"31012","type":"Title"},"toolbar":{"id":"31036","type":"Toolbar"},"x_range":{"id":"31014","type":"DataRange1d"},"x_scale":{"id":"31018","type":"LinearScale"},"y_range":{"id":"31016","type":"Range1d"},"y_scale":{"id":"31020","type":"LogScale"}},"id":"31011","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"31032","type":"PanTool"},{"attributes":{},"id":"31117","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"31064","type":"Selection"},"selection_policy":{"id":"31065","type":"UnionRenderers"}},"id":"31041","type":"ColumnDataSource"},{"attributes":{},"id":"31034","type":"ResetTool"},{"attributes":{},"id":"31118","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31041","type":"ColumnDataSource"},"glyph":{"id":"31042","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31043","type":"Line"},"selection_glyph":null,"view":{"id":"31045","type":"CDSView"}},"id":"31044","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"31157","type":"Selection"},"selection_policy":{"id":"31158","type":"UnionRenderers"}},"id":"31120","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31043","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31085","type":"Line"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"31121","type":"Line"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"31070","type":"GlyphRenderer"}]},"id":"31082","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"31122","type":"Line"},{"attributes":{},"id":"31035","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"31117","type":"Selection"},"selection_policy":{"id":"31118","type":"UnionRenderers"}},"id":"31083","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"31120","type":"ColumnDataSource"},"glyph":{"id":"31121","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31122","type":"Line"},"selection_glyph":null,"view":{"id":"31124","type":"CDSView"}},"id":"31123","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31032","type":"PanTool"},{"id":"31033","type":"BoxZoomTool"},{"id":"31034","type":"ResetTool"},{"id":"31035","type":"SaveTool"}]},"id":"31036","type":"Toolbar"},{"attributes":{"source":{"id":"31041","type":"ColumnDataSource"}},"id":"31045","type":"CDSView"},{"attributes":{"data_source":{"id":"31083","type":"ColumnDataSource"},"glyph":{"id":"31084","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31085","type":"Line"},"selection_glyph":null,"view":{"id":"31087","type":"CDSView"}},"id":"31086","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31120","type":"ColumnDataSource"}},"id":"31124","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"31079","type":"Selection"},"selection_policy":{"id":"31080","type":"UnionRenderers"}},"id":"31054","type":"ColumnDataSource"},{"attributes":{},"id":"31138","type":"Selection"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"31044","type":"GlyphRenderer"},{"id":"31057","type":"GlyphRenderer"}]},"id":"31053","type":"LegendItem"},{"attributes":{},"id":"31139","type":"UnionRenderers"},{"attributes":{"ticker":null},"id":"31047","type":"LogTickFormatter"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"31123","type":"GlyphRenderer"}]},"id":"31141","type":"LegendItem"},{"attributes":{},"id":"31049","type":"BasicTickFormatter"},{"attributes":{},"id":"31157","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31051","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"31053","type":"LegendItem"},{"id":"31082","type":"LegendItem"},{"id":"31100","type":"LegendItem"},{"id":"31141","type":"LegendItem"}]},"id":"31052","type":"Legend"},{"attributes":{},"id":"31158","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"31055","type":"Circle"},{"attributes":{"axis_label":"particles","formatter":{"id":"31047","type":"LogTickFormatter"},"ticker":{"id":"31028","type":"LogTicker"}},"id":"31027","type":"LogAxis"},{"attributes":{},"id":"31065","type":"UnionRenderers"},{"attributes":{},"id":"31064","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"31056","type":"Circle"},{"attributes":{"data_source":{"id":"31054","type":"ColumnDataSource"},"glyph":{"id":"31055","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31056","type":"Circle"},"selection_glyph":null,"view":{"id":"31058","type":"CDSView"}},"id":"31057","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31054","type":"ColumnDataSource"}},"id":"31058","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"31097","type":"Selection"},"selection_policy":{"id":"31098","type":"UnionRenderers"}},"id":"31067","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"31068","type":"Line"},{"attributes":{"data_source":{"id":"31067","type":"ColumnDataSource"},"glyph":{"id":"31068","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31069","type":"Line"},"selection_glyph":null,"view":{"id":"31071","type":"CDSView"}},"id":"31070","type":"GlyphRenderer"},{"attributes":{"num_minor_ticks":10},"id":"31028","type":"LogTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"31069","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"31028","type":"LogTicker"}},"id":"31031","type":"Grid"},{"attributes":{"source":{"id":"31067","type":"ColumnDataSource"}},"id":"31071","type":"CDSView"},{"attributes":{},"id":"31079","type":"Selection"},{"attributes":{},"id":"31080","type":"UnionRenderers"},{"attributes":{},"id":"31023","type":"BasicTicker"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"31016","type":"Range1d"},{"attributes":{"source":{"id":"31083","type":"ColumnDataSource"}},"id":"31087","type":"CDSView"},{"attributes":{},"id":"31018","type":"LinearScale"},{"attributes":{},"id":"31097","type":"Selection"},{"attributes":{},"id":"31020","type":"LogScale"},{"attributes":{},"id":"31098","type":"UnionRenderers"},{"attributes":{"axis_label":"sections","formatter":{"id":"31049","type":"BasicTickFormatter"},"ticker":{"id":"31023","type":"BasicTicker"}},"id":"31022","type":"LinearAxis"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"31086","type":"GlyphRenderer"},{"id":"31104","type":"GlyphRenderer"}]},"id":"31100","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"31138","type":"Selection"},"selection_policy":{"id":"31139","type":"UnionRenderers"}},"id":"31101","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"31023","type":"BasicTicker"}},"id":"31026","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"31102","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"31103","type":"Circle"}],"root_ids":["31011"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"04bb4b0e-a8f9-451b-901e-e30cd420f2c0","roots":{"31011":"dfd4c569-40d4-48c8-b526-05191adcd1ff"}}];
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