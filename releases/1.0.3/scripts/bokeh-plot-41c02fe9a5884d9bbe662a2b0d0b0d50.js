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
      };var element = document.getElementById("0fd75429-2ecb-4ede-a8de-f990c3a7f551");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fd75429-2ecb-4ede-a8de-f990c3a7f551' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5f900044-3b82-4418-91b4-68f46f6ab5dd":{"roots":{"references":[{"attributes":{},"id":"1961","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"1970","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1971","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"1976","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1970","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"blue"},"line_alpha":{"value":0.5},"line_color":{"value":"blue"},"top":{"expr":{"id":"1971","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"1975","type":"VBar"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"1951","type":"FactorRange"},{"attributes":{"data_source":{"id":"1950","type":"ColumnDataSource"},"glyph":{"id":"1975","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"east","nonselection_glyph":{"id":"1976","type":"VBar"},"selection_glyph":null,"view":{"id":"1978","type":"CDSView"}},"id":"1977","type":"GlyphRenderer"},{"attributes":{},"id":"1958","type":"LinearScale"},{"attributes":{"source":{"id":"1950","type":"ColumnDataSource"}},"id":"1978","type":"CDSView"},{"attributes":{"formatter":{"id":"1981","type":"BasicTickFormatter"},"plot":{"id":"1952","subtype":"Figure","type":"Plot"},"ticker":{"id":"1965","type":"BasicTicker"}},"id":"1964","type":"LinearAxis"},{"attributes":{"fields":["east"]},"id":"1972","type":"Stack"},{"attributes":{"plot":null,"text":""},"id":"1979","type":"Title"},{"attributes":{},"id":"1981","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1986","type":"LegendItem"},{"id":"2000","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"1952","subtype":"Figure","type":"Plot"}},"id":"1985","type":"Legend"},{"attributes":{"fields":["east","west"]},"id":"1973","type":"Stack"},{"attributes":{"label":{"value":"west"},"renderers":[{"id":"1990","type":"GlyphRenderer"}]},"id":"2000","type":"LegendItem"},{"attributes":{"formatter":{"id":"1983","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"1952","subtype":"Figure","type":"Plot"},"ticker":{"id":"1961","type":"CategoricalTicker"}},"id":"1960","type":"CategoricalAxis"},{"attributes":{},"id":"1983","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1965","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1972","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"red"},"line_alpha":{"value":0.5},"line_color":{"value":"red"},"top":{"expr":{"id":"1973","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"1988","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1969","type":"Toolbar"},{"attributes":{"below":[{"id":"1960","type":"CategoricalAxis"}],"left":[{"id":"1964","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1960","type":"CategoricalAxis"},{"id":"1963","type":"Grid"},{"id":"1964","type":"LinearAxis"},{"id":"1968","type":"Grid"},{"id":"1985","type":"Legend"},{"id":"1977","type":"GlyphRenderer"},{"id":"1990","type":"GlyphRenderer"}],"title":{"id":"1979","type":"Title"},"toolbar":{"id":"1969","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1951","type":"FactorRange"},"x_scale":{"id":"1956","type":"CategoricalScale"},"y_range":{"id":"1954","type":"DataRange1d"},"y_scale":{"id":"1958","type":"LinearScale"}},"id":"1952","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1950","type":"ColumnDataSource"},"glyph":{"id":"1988","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"west","nonselection_glyph":{"id":"1989","type":"VBar"},"selection_glyph":null,"view":{"id":"1991","type":"CDSView"}},"id":"1990","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1952","subtype":"Figure","type":"Plot"},"ticker":{"id":"1965","type":"BasicTicker"}},"id":"1968","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1972","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1973","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"1989","type":"VBar"},{"attributes":{"source":{"id":"1950","type":"ColumnDataSource"}},"id":"1991","type":"CDSView"},{"attributes":{"fields":["east"]},"id":"1971","type":"Stack"},{"attributes":{"callback":null,"end":18,"start":0},"id":"1954","type":"DataRange1d"},{"attributes":{"label":{"value":"east"},"renderers":[{"id":"1977","type":"GlyphRenderer"}]},"id":"1986","type":"LegendItem"},{"attributes":{"fields":[]},"id":"1970","type":"Stack"},{"attributes":{"callback":null,"data":{"east":[5,5,6,5,5,4,5,6,7,8,6,9],"west":[5,7,9,4,5,4,7,7,7,6,6,7],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"1998","type":"Selection"},"selection_policy":{"id":"1999","type":"UnionRenderers"}},"id":"1950","type":"ColumnDataSource"},{"attributes":{},"id":"1999","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1952","subtype":"Figure","type":"Plot"},"ticker":{"id":"1961","type":"CategoricalTicker"}},"id":"1963","type":"Grid"},{"attributes":{},"id":"1956","type":"CategoricalScale"},{"attributes":{},"id":"1998","type":"Selection"}],"root_ids":["1952"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"5f900044-3b82-4418-91b4-68f46f6ab5dd","roots":{"1952":"0fd75429-2ecb-4ede-a8de-f990c3a7f551"}}];
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