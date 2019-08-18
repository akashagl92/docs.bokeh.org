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
      };var element = document.getElementById("8192be7e-ca3e-44b2-9a45-8d3ab7329e69");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8192be7e-ca3e-44b2-9a45-8d3ab7329e69' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9088d4bc-3441-4276-951f-731e3a0190ef":{"roots":{"references":[{"attributes":{"data_source":{"id":"19977","type":"ColumnDataSource"},"glyph":{"id":"19978","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19979","type":"Line"},"selection_glyph":null,"view":{"id":"19981","type":"CDSView"}},"id":"19980","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19972","type":"ColumnDataSource"}},"id":"19976","type":"CDSView"},{"attributes":{"formatter":{"id":"19987","type":"BasicTickFormatter"},"plot":{"id":"19954","subtype":"Figure","type":"Plot"},"ticker":{"id":"19967","type":"BasicTicker"}},"id":"19966","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"19956","type":"DataRange1d"},{"attributes":{},"id":"19987","type":"BasicTickFormatter"},{"attributes":{},"id":"19985","type":"CategoricalTickFormatter"},{"attributes":{},"id":"19991","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"19990","type":"Selection"},"selection_policy":{"id":"19991","type":"UnionRenderers"}},"id":"19977","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"19954","subtype":"Figure","type":"Plot"},"ticker":{"id":"19967","type":"BasicTicker"}},"id":"19970","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19971","type":"Toolbar"},{"attributes":{},"id":"19990","type":"Selection"},{"attributes":{},"id":"19967","type":"BasicTicker"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"19953","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19954","subtype":"Figure","type":"Plot"},"ticker":{"id":"19963","type":"CategoricalTicker"}},"id":"19965","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19974","type":"VBar"},{"attributes":{},"id":"19988","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19973","type":"VBar"},{"attributes":{"source":{"id":"19977","type":"ColumnDataSource"}},"id":"19981","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"19983","type":"Title"},{"attributes":{"below":[{"id":"19962","type":"CategoricalAxis"}],"left":[{"id":"19966","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19962","type":"CategoricalAxis"},{"id":"19965","type":"Grid"},{"id":"19966","type":"LinearAxis"},{"id":"19970","type":"Grid"},{"id":"19975","type":"GlyphRenderer"},{"id":"19980","type":"GlyphRenderer"}],"title":{"id":"19983","type":"Title"},"toolbar":{"id":"19971","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19953","type":"FactorRange"},"x_scale":{"id":"19958","type":"CategoricalScale"},"y_range":{"id":"19956","type":"DataRange1d"},"y_scale":{"id":"19960","type":"LinearScale"}},"id":"19954","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19958","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"19972","type":"ColumnDataSource"},"glyph":{"id":"19973","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19974","type":"VBar"},"selection_glyph":null,"view":{"id":"19976","type":"CDSView"}},"id":"19975","type":"GlyphRenderer"},{"attributes":{},"id":"19989","type":"UnionRenderers"},{"attributes":{},"id":"19960","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"19988","type":"Selection"},"selection_policy":{"id":"19989","type":"UnionRenderers"}},"id":"19972","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"19985","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"19954","subtype":"Figure","type":"Plot"},"ticker":{"id":"19963","type":"CategoricalTicker"}},"id":"19962","type":"CategoricalAxis"},{"attributes":{},"id":"19963","type":"CategoricalTicker"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19978","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19979","type":"Line"}],"root_ids":["19954"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"9088d4bc-3441-4276-951f-731e3a0190ef","roots":{"19954":"8192be7e-ca3e-44b2-9a45-8d3ab7329e69"}}];
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