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
      };var element = document.getElementById("02a101ad-29d7-42a4-892c-7923e8a009fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02a101ad-29d7-42a4-892c-7923e8a009fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"df8613e2-d318-49e1-b7a4-036f0fe83b68":{"roots":{"references":[{"attributes":{},"id":"19967","type":"CategoricalTicker"},{"attributes":{},"id":"19964","type":"LinearScale"},{"attributes":{"data_source":{"id":"19976","type":"ColumnDataSource"},"glyph":{"id":"19977","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19978","type":"VBar"},"selection_glyph":null,"view":{"id":"19980","type":"CDSView"}},"id":"19979","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19982","type":"Line"},{"attributes":{},"id":"19993","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19978","type":"VBar"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"19992","type":"Selection"},"selection_policy":{"id":"19993","type":"UnionRenderers"}},"id":"19976","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19976","type":"ColumnDataSource"}},"id":"19980","type":"CDSView"},{"attributes":{},"id":"19990","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"19994","type":"Selection"},"selection_policy":{"id":"19995","type":"UnionRenderers"}},"id":"19981","type":"ColumnDataSource"},{"attributes":{},"id":"19962","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"19981","type":"ColumnDataSource"},"glyph":{"id":"19982","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19983","type":"Line"},"selection_glyph":null,"view":{"id":"19985","type":"CDSView"}},"id":"19984","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"19966","type":"CategoricalAxis"}],"left":[{"id":"19970","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19966","type":"CategoricalAxis"},{"id":"19969","type":"Grid"},{"id":"19970","type":"LinearAxis"},{"id":"19974","type":"Grid"},{"id":"19979","type":"GlyphRenderer"},{"id":"19984","type":"GlyphRenderer"}],"title":{"id":"19986","type":"Title"},"toolbar":{"id":"19975","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19957","type":"FactorRange"},"x_scale":{"id":"19962","type":"CategoricalScale"},"y_range":{"id":"19960","type":"DataRange1d"},"y_scale":{"id":"19964","type":"LinearScale"}},"id":"19958","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19992","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19983","type":"Line"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19958","subtype":"Figure","type":"Plot"},"ticker":{"id":"19967","type":"CategoricalTicker"}},"id":"19969","type":"Grid"},{"attributes":{"source":{"id":"19981","type":"ColumnDataSource"}},"id":"19985","type":"CDSView"},{"attributes":{},"id":"19995","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"19957","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"19958","subtype":"Figure","type":"Plot"},"ticker":{"id":"19971","type":"BasicTicker"}},"id":"19974","type":"Grid"},{"attributes":{},"id":"19988","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"19986","type":"Title"},{"attributes":{"formatter":{"id":"19988","type":"BasicTickFormatter"},"plot":{"id":"19958","subtype":"Figure","type":"Plot"},"ticker":{"id":"19971","type":"BasicTicker"}},"id":"19970","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19975","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"19960","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19977","type":"VBar"},{"attributes":{},"id":"19994","type":"Selection"},{"attributes":{"formatter":{"id":"19990","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"19958","subtype":"Figure","type":"Plot"},"ticker":{"id":"19967","type":"CategoricalTicker"}},"id":"19966","type":"CategoricalAxis"},{"attributes":{},"id":"19971","type":"BasicTicker"}],"root_ids":["19958"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"df8613e2-d318-49e1-b7a4-036f0fe83b68","roots":{"19958":"02a101ad-29d7-42a4-892c-7923e8a009fe"}}];
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