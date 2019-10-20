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
      };var element = document.getElementById("612e03f3-ca1e-4443-ba92-b66fba3487dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '612e03f3-ca1e-4443-ba92-b66fba3487dc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b18b70ff-6359-4230-b04c-792d3371b8c3":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"14148","subtype":"Figure","type":"Plot"},"ticker":{"id":"14163","type":"BasicTicker"}},"id":"14166","type":"Grid"},{"attributes":{},"id":"14163","type":"BasicTicker"},{"attributes":{"below":[{"id":"14157","type":"LinearAxis"}],"left":[{"id":"14162","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"14157","type":"LinearAxis"},{"id":"14161","type":"Grid"},{"id":"14162","type":"LinearAxis"},{"id":"14166","type":"Grid"},{"id":"14175","type":"BoxAnnotation"},{"id":"14185","type":"GlyphRenderer"}],"title":{"id":"14190","type":"Title"},"toolbar":{"id":"14173","type":"Toolbar"},"x_range":{"id":"14149","type":"DataRange1d"},"x_scale":{"id":"14153","type":"LinearScale"},"y_range":{"id":"14151","type":"DataRange1d"},"y_scale":{"id":"14155","type":"LinearScale"}},"id":"14148","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14172","type":"HelpTool"},{"attributes":{"callback":null},"id":"14149","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"14196","type":"Selection"},"selection_policy":{"id":"14195","type":"UnionRenderers"}},"id":"14182","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14151","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14182","type":"ColumnDataSource"},"glyph":{"id":"14183","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14184","type":"Circle"},"selection_glyph":null,"view":{"id":"14186","type":"CDSView"}},"id":"14185","type":"GlyphRenderer"},{"attributes":{},"id":"14168","type":"WheelZoomTool"},{"attributes":{},"id":"14153","type":"LinearScale"},{"attributes":{},"id":"14171","type":"ResetTool"},{"attributes":{},"id":"14167","type":"PanTool"},{"attributes":{},"id":"14155","type":"LinearScale"},{"attributes":{},"id":"14170","type":"SaveTool"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"14187","type":"FuncTickFormatter"},{"attributes":{"formatter":{"id":"14192","type":"BasicTickFormatter"},"plot":{"id":"14148","subtype":"Figure","type":"Plot"},"ticker":{"id":"14158","type":"BasicTicker"}},"id":"14157","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"14190","type":"Title"},{"attributes":{},"id":"14196","type":"Selection"},{"attributes":{"overlay":{"id":"14175","type":"BoxAnnotation"}},"id":"14169","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14183","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14184","type":"Circle"},{"attributes":{"formatter":{"id":"14187","type":"FuncTickFormatter"},"plot":{"id":"14148","subtype":"Figure","type":"Plot"},"ticker":{"id":"14163","type":"BasicTicker"}},"id":"14162","type":"LinearAxis"},{"attributes":{},"id":"14195","type":"UnionRenderers"},{"attributes":{},"id":"14158","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14175","type":"BoxAnnotation"},{"attributes":{"source":{"id":"14182","type":"ColumnDataSource"}},"id":"14186","type":"CDSView"},{"attributes":{},"id":"14192","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"14148","subtype":"Figure","type":"Plot"},"ticker":{"id":"14158","type":"BasicTicker"}},"id":"14161","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14167","type":"PanTool"},{"id":"14168","type":"WheelZoomTool"},{"id":"14169","type":"BoxZoomTool"},{"id":"14170","type":"SaveTool"},{"id":"14171","type":"ResetTool"},{"id":"14172","type":"HelpTool"}]},"id":"14173","type":"Toolbar"}],"root_ids":["14148"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"b18b70ff-6359-4230-b04c-792d3371b8c3","roots":{"14148":"612e03f3-ca1e-4443-ba92-b66fba3487dc"}}];
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