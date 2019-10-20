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
      };var element = document.getElementById("40c26d96-773f-40cd-9f3c-f43459bb0f28");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '40c26d96-773f-40cd-9f3c-f43459bb0f28' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"e189656f-5d56-4f00-8752-4fbc32a711d7":{"roots":{"references":[{"attributes":{"source":{"id":"17894","type":"ColumnDataSource"}},"id":"17898","type":"CDSView"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"17900","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17901","type":"Line"},{"attributes":{"data_source":{"id":"17899","type":"ColumnDataSource"},"glyph":{"id":"17900","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17901","type":"Line"},"selection_glyph":null,"view":{"id":"17903","type":"CDSView"}},"id":"17902","type":"GlyphRenderer"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"17895","type":"Line"},{"attributes":{"button_type":"success","callback":{"id":"17905","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"17906","type":"Toggle"},{"attributes":{"source":{"id":"17899","type":"ColumnDataSource"}},"id":"17903","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"17874","subtype":"Figure","type":"Plot"},"ticker":{"id":"17889","type":"BasicTicker"}},"id":"17892","type":"Grid"},{"attributes":{},"id":"17889","type":"BasicTicker"},{"attributes":{"children":[{"id":"17909","type":"Row"},{"id":"17912","type":"Row"}]},"id":"17913","type":"Column"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"17922","type":"Selection"},"selection_policy":{"id":"17923","type":"UnionRenderers"}},"id":"17899","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"17906","type":"Toggle"}]},"id":"17910","type":"WidgetBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"17874","subtype":"Figure","type":"Plot"},"right":2.5},"id":"17904","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"17874","subtype":"Figure","type":"Plot"}]},"id":"17909","type":"Row"},{"attributes":{},"id":"17884","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"17893","type":"Toolbar"},{"attributes":{"args":{"object":{"id":"17902","type":"GlyphRenderer"},"toggle":{"id":"17908","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17907","type":"CustomJS"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17896","type":"Line"},{"attributes":{"args":{"object":{"id":"17904","type":"BoxAnnotation"},"toggle":{"id":"17906","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17905","type":"CustomJS"},{"attributes":{"below":[{"id":"17883","type":"LinearAxis"}],"left":[{"id":"17888","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"17883","type":"LinearAxis"},{"id":"17887","type":"Grid"},{"id":"17888","type":"LinearAxis"},{"id":"17892","type":"Grid"},{"id":"17897","type":"GlyphRenderer"},{"id":"17902","type":"GlyphRenderer"},{"id":"17904","type":"BoxAnnotation"}],"title":{"id":"17915","type":"Title"},"toolbar":{"id":"17893","type":"Toolbar"},"x_range":{"id":"17875","type":"DataRange1d"},"x_scale":{"id":"17879","type":"LinearScale"},"y_range":{"id":"17877","type":"DataRange1d"},"y_scale":{"id":"17881","type":"LinearScale"}},"id":"17874","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17923","type":"UnionRenderers"},{"attributes":{"children":[{"id":"17910","type":"WidgetBox"},{"id":"17911","type":"WidgetBox"}]},"id":"17912","type":"Row"},{"attributes":{"data_source":{"id":"17894","type":"ColumnDataSource"},"glyph":{"id":"17895","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17896","type":"Line"},"selection_glyph":null,"view":{"id":"17898","type":"CDSView"}},"id":"17897","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"17908","type":"Toggle"}]},"id":"17911","type":"WidgetBox"},{"attributes":{},"id":"17881","type":"LinearScale"},{"attributes":{"formatter":{"id":"17919","type":"BasicTickFormatter"},"plot":{"id":"17874","subtype":"Figure","type":"Plot"},"ticker":{"id":"17889","type":"BasicTicker"}},"id":"17888","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"17915","type":"Title"},{"attributes":{"callback":null},"id":"17875","type":"DataRange1d"},{"attributes":{},"id":"17920","type":"Selection"},{"attributes":{},"id":"17917","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"17920","type":"Selection"},"selection_policy":{"id":"17921","type":"UnionRenderers"}},"id":"17894","type":"ColumnDataSource"},{"attributes":{},"id":"17879","type":"LinearScale"},{"attributes":{},"id":"17919","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17917","type":"BasicTickFormatter"},"plot":{"id":"17874","subtype":"Figure","type":"Plot"},"ticker":{"id":"17884","type":"BasicTicker"}},"id":"17883","type":"LinearAxis"},{"attributes":{},"id":"17921","type":"UnionRenderers"},{"attributes":{"plot":{"id":"17874","subtype":"Figure","type":"Plot"},"ticker":{"id":"17884","type":"BasicTicker"}},"id":"17887","type":"Grid"},{"attributes":{"callback":null},"id":"17877","type":"DataRange1d"},{"attributes":{},"id":"17922","type":"Selection"},{"attributes":{"button_type":"success","callback":{"id":"17907","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"17908","type":"Toggle"}],"root_ids":["17913"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"e189656f-5d56-4f00-8752-4fbc32a711d7","roots":{"17913":"40c26d96-773f-40cd-9f3c-f43459bb0f28"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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