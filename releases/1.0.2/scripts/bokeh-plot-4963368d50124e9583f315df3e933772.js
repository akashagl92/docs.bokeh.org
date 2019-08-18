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
      };var element = document.getElementById("7af3ad21-1815-427f-9026-fcf7cbe93e01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7af3ad21-1815-427f-9026-fcf7cbe93e01' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fb1ba323-e0bd-4c12-9020-2d4e4d695db7":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19974","type":"VBar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19980","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19975","type":"VBar"},{"attributes":{"formatter":{"id":"19986","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"19955","subtype":"Figure","type":"Plot"},"ticker":{"id":"19964","type":"CategoricalTicker"}},"id":"19963","type":"CategoricalAxis"},{"attributes":{},"id":"19991","type":"UnionRenderers"},{"attributes":{},"id":"19989","type":"UnionRenderers"},{"attributes":{},"id":"19986","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"19955","subtype":"Figure","type":"Plot"},"ticker":{"id":"19968","type":"BasicTicker"}},"id":"19971","type":"Grid"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"19954","type":"FactorRange"},{"attributes":{},"id":"19968","type":"BasicTicker"},{"attributes":{},"id":"19964","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19955","subtype":"Figure","type":"Plot"},"ticker":{"id":"19964","type":"CategoricalTicker"}},"id":"19966","type":"Grid"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19979","type":"Line"},{"attributes":{"formatter":{"id":"19988","type":"BasicTickFormatter"},"plot":{"id":"19955","subtype":"Figure","type":"Plot"},"ticker":{"id":"19968","type":"BasicTicker"}},"id":"19967","type":"LinearAxis"},{"attributes":{"source":{"id":"19978","type":"ColumnDataSource"}},"id":"19982","type":"CDSView"},{"attributes":{},"id":"19990","type":"Selection"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"19992","type":"Selection"},"selection_policy":{"id":"19991","type":"UnionRenderers"}},"id":"19978","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"19990","type":"Selection"},"selection_policy":{"id":"19989","type":"UnionRenderers"}},"id":"19973","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19978","type":"ColumnDataSource"},"glyph":{"id":"19979","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19980","type":"Line"},"selection_glyph":null,"view":{"id":"19982","type":"CDSView"}},"id":"19981","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19972","type":"Toolbar"},{"attributes":{},"id":"19961","type":"LinearScale"},{"attributes":{"data_source":{"id":"19973","type":"ColumnDataSource"},"glyph":{"id":"19974","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19975","type":"VBar"},"selection_glyph":null,"view":{"id":"19977","type":"CDSView"}},"id":"19976","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"19963","type":"CategoricalAxis"}],"left":[{"id":"19967","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19963","type":"CategoricalAxis"},{"id":"19966","type":"Grid"},{"id":"19967","type":"LinearAxis"},{"id":"19971","type":"Grid"},{"id":"19976","type":"GlyphRenderer"},{"id":"19981","type":"GlyphRenderer"}],"title":{"id":"19984","type":"Title"},"toolbar":{"id":"19972","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19954","type":"FactorRange"},"x_scale":{"id":"19959","type":"CategoricalScale"},"y_range":{"id":"19957","type":"DataRange1d"},"y_scale":{"id":"19961","type":"LinearScale"}},"id":"19955","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19992","type":"Selection"},{"attributes":{"callback":null,"start":0},"id":"19957","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"19984","type":"Title"},{"attributes":{"source":{"id":"19973","type":"ColumnDataSource"}},"id":"19977","type":"CDSView"},{"attributes":{},"id":"19959","type":"CategoricalScale"},{"attributes":{},"id":"19988","type":"BasicTickFormatter"}],"root_ids":["19955"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"fb1ba323-e0bd-4c12-9020-2d4e4d695db7","roots":{"19955":"7af3ad21-1815-427f-9026-fcf7cbe93e01"}}];
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