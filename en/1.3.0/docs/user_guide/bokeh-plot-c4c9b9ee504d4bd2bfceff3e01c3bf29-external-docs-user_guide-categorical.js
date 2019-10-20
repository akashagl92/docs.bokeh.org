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
      };var element = document.getElementById("2adff3bc-94c0-4c03-94ca-af97df2ab4a0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2adff3bc-94c0-4c03-94ca-af97df2ab4a0' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"0949955a-6e1c-4f40-b6a1-35ce9003fefe":{"roots":{"references":[{"attributes":{"data_source":{"id":"20889","type":"ColumnDataSource"},"glyph":{"id":"20890","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20891","type":"VBar"},"selection_glyph":null,"view":{"id":"20893","type":"CDSView"}},"id":"20892","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"20908","type":"Selection"},"selection_policy":{"id":"20907","type":"UnionRenderers"}},"id":"20894","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"20902","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"20880","type":"CategoricalTicker"}},"id":"20879","type":"CategoricalAxis"},{"attributes":{},"id":"20880","type":"CategoricalTicker"},{"attributes":{},"id":"20875","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20890","type":"VBar"},{"attributes":{},"id":"20904","type":"BasicTickFormatter"},{"attributes":{},"id":"20902","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"20906","type":"Selection"},"selection_policy":{"id":"20905","type":"UnionRenderers"}},"id":"20889","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"20884","type":"BasicTicker"}},"id":"20887","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"20873","type":"DataRange1d"},{"attributes":{"formatter":{"id":"20904","type":"BasicTickFormatter"},"ticker":{"id":"20884","type":"BasicTicker"}},"id":"20883","type":"LinearAxis"},{"attributes":{"below":[{"id":"20879","type":"CategoricalAxis"}],"center":[{"id":"20882","type":"Grid"},{"id":"20887","type":"Grid"}],"left":[{"id":"20883","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20892","type":"GlyphRenderer"},{"id":"20897","type":"GlyphRenderer"}],"title":{"id":"20900","type":"Title"},"toolbar":{"id":"20888","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20870","type":"FactorRange"},"x_scale":{"id":"20875","type":"CategoricalScale"},"y_range":{"id":"20873","type":"DataRange1d"},"y_scale":{"id":"20877","type":"LinearScale"}},"id":"20871","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"20894","type":"ColumnDataSource"},"glyph":{"id":"20895","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20896","type":"Line"},"selection_glyph":null,"view":{"id":"20898","type":"CDSView"}},"id":"20897","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20891","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20888","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"20896","type":"Line"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20880","type":"CategoricalTicker"}},"id":"20882","type":"Grid"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"20870","type":"FactorRange"},{"attributes":{"text":""},"id":"20900","type":"Title"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"20895","type":"Line"},{"attributes":{},"id":"20907","type":"UnionRenderers"},{"attributes":{"source":{"id":"20894","type":"ColumnDataSource"}},"id":"20898","type":"CDSView"},{"attributes":{},"id":"20908","type":"Selection"},{"attributes":{},"id":"20877","type":"LinearScale"},{"attributes":{},"id":"20906","type":"Selection"},{"attributes":{},"id":"20905","type":"UnionRenderers"},{"attributes":{},"id":"20884","type":"BasicTicker"},{"attributes":{"source":{"id":"20889","type":"ColumnDataSource"}},"id":"20893","type":"CDSView"}],"root_ids":["20871"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"0949955a-6e1c-4f40-b6a1-35ce9003fefe","roots":{"20871":"2adff3bc-94c0-4c03-94ca-af97df2ab4a0"}}];
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