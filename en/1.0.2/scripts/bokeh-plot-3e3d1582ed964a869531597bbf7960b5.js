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
      };var element = document.getElementById("32f9501f-f815-49f2-9f30-1a1cc8fb014a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32f9501f-f815-49f2-9f30-1a1cc8fb014a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0ab4d6d8-3af1-4207-aec5-1228edcee2cf":{"roots":{"references":[{"attributes":{},"id":"17924","type":"Selection"},{"attributes":{},"id":"17880","type":"LinearScale"},{"attributes":{"data_source":{"id":"17900","type":"ColumnDataSource"},"glyph":{"id":"17901","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17902","type":"Line"},"selection_glyph":null,"view":{"id":"17904","type":"CDSView"}},"id":"17903","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"17878","type":"DataRange1d"},{"attributes":{"children":[{"id":"17910","type":"Row"},{"id":"17913","type":"Row"}]},"id":"17914","type":"Column"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"17924","type":"Selection"},"selection_policy":{"id":"17923","type":"UnionRenderers"}},"id":"17900","type":"ColumnDataSource"},{"attributes":{},"id":"17921","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"17875","subtype":"Figure","type":"Plot"},"ticker":{"id":"17890","type":"BasicTicker"}},"id":"17893","type":"Grid"},{"attributes":{"button_type":"success","callback":{"id":"17906","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"17907","type":"Toggle"},{"attributes":{},"id":"17920","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17918","type":"BasicTickFormatter"},"plot":{"id":"17875","subtype":"Figure","type":"Plot"},"ticker":{"id":"17885","type":"BasicTicker"}},"id":"17884","type":"LinearAxis"},{"attributes":{},"id":"17923","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"17875","subtype":"Figure","type":"Plot"},"right":2.5},"id":"17905","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17895","type":"ColumnDataSource"}},"id":"17899","type":"CDSView"},{"attributes":{"children":[{"id":"17911","type":"WidgetBox"},{"id":"17912","type":"WidgetBox"}]},"id":"17913","type":"Row"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"17901","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"17922","type":"Selection"},"selection_policy":{"id":"17921","type":"UnionRenderers"}},"id":"17895","type":"ColumnDataSource"},{"attributes":{},"id":"17882","type":"LinearScale"},{"attributes":{},"id":"17918","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"17909","type":"Toggle"}]},"id":"17912","type":"WidgetBox"},{"attributes":{},"id":"17885","type":"BasicTicker"},{"attributes":{"source":{"id":"17900","type":"ColumnDataSource"}},"id":"17904","type":"CDSView"},{"attributes":{"button_type":"success","callback":{"id":"17908","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"17909","type":"Toggle"},{"attributes":{"callback":null},"id":"17876","type":"DataRange1d"},{"attributes":{},"id":"17922","type":"Selection"},{"attributes":{"args":{"object":{"id":"17905","type":"BoxAnnotation"},"toggle":{"id":"17907","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17906","type":"CustomJS"},{"attributes":{"formatter":{"id":"17920","type":"BasicTickFormatter"},"plot":{"id":"17875","subtype":"Figure","type":"Plot"},"ticker":{"id":"17890","type":"BasicTicker"}},"id":"17889","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"17916","type":"Title"},{"attributes":{"args":{"object":{"id":"17903","type":"GlyphRenderer"},"toggle":{"id":"17909","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17908","type":"CustomJS"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17902","type":"Line"},{"attributes":{"children":[{"id":"17875","subtype":"Figure","type":"Plot"}]},"id":"17910","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"17894","type":"Toolbar"},{"attributes":{"data_source":{"id":"17895","type":"ColumnDataSource"},"glyph":{"id":"17896","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17897","type":"Line"},"selection_glyph":null,"view":{"id":"17899","type":"CDSView"}},"id":"17898","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"17884","type":"LinearAxis"}],"left":[{"id":"17889","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"17884","type":"LinearAxis"},{"id":"17888","type":"Grid"},{"id":"17889","type":"LinearAxis"},{"id":"17893","type":"Grid"},{"id":"17898","type":"GlyphRenderer"},{"id":"17903","type":"GlyphRenderer"},{"id":"17905","type":"BoxAnnotation"}],"title":{"id":"17916","type":"Title"},"toolbar":{"id":"17894","type":"Toolbar"},"x_range":{"id":"17876","type":"DataRange1d"},"x_scale":{"id":"17880","type":"LinearScale"},"y_range":{"id":"17878","type":"DataRange1d"},"y_scale":{"id":"17882","type":"LinearScale"}},"id":"17875","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17897","type":"Line"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"17896","type":"Line"},{"attributes":{"plot":{"id":"17875","subtype":"Figure","type":"Plot"},"ticker":{"id":"17885","type":"BasicTicker"}},"id":"17888","type":"Grid"},{"attributes":{"children":[{"id":"17907","type":"Toggle"}]},"id":"17911","type":"WidgetBox"},{"attributes":{},"id":"17890","type":"BasicTicker"}],"root_ids":["17914"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"0ab4d6d8-3af1-4207-aec5-1228edcee2cf","roots":{"17914":"32f9501f-f815-49f2-9f30-1a1cc8fb014a"}}];
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