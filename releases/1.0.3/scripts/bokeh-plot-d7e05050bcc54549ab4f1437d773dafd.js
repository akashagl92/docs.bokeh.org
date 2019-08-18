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
      };var element = document.getElementById("98a14b37-2c35-42aa-af58-49958e89e462");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '98a14b37-2c35-42aa-af58-49958e89e462' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"750116cd-9798-4a03-ad32-cb956a945af4":{"roots":{"references":[{"attributes":{"button_type":"success","callback":{"id":"17911","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"17912","type":"Toggle"},{"attributes":{},"id":"17924","type":"Selection"},{"attributes":{},"id":"17893","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17879","type":"DataRange1d"},{"attributes":{},"id":"17885","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"17926","type":"Selection"},"selection_policy":{"id":"17927","type":"UnionRenderers"}},"id":"17903","type":"ColumnDataSource"},{"attributes":{},"id":"17920","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17881","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"17878","subtype":"Figure","type":"Plot"},"ticker":{"id":"17893","type":"BasicTicker"}},"id":"17896","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"17878","subtype":"Figure","type":"Plot"},"right":2.5},"id":"17908","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"17918","type":"Title"},{"attributes":{},"id":"17922","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17905","type":"Line"},{"attributes":{"children":[{"id":"17912","type":"Toggle"}]},"id":"17915","type":"WidgetBox"},{"attributes":{"formatter":{"id":"17920","type":"BasicTickFormatter"},"plot":{"id":"17878","subtype":"Figure","type":"Plot"},"ticker":{"id":"17893","type":"BasicTicker"}},"id":"17892","type":"LinearAxis"},{"attributes":{},"id":"17927","type":"UnionRenderers"},{"attributes":{},"id":"17883","type":"LinearScale"},{"attributes":{},"id":"17925","type":"UnionRenderers"},{"attributes":{},"id":"17888","type":"BasicTicker"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"17904","type":"Line"},{"attributes":{"plot":{"id":"17878","subtype":"Figure","type":"Plot"},"ticker":{"id":"17888","type":"BasicTicker"}},"id":"17891","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"17897","type":"Toolbar"},{"attributes":{"children":[{"id":"17910","type":"Toggle"}]},"id":"17914","type":"WidgetBox"},{"attributes":{"args":{"object":{"id":"17908","type":"BoxAnnotation"},"toggle":{"id":"17910","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17909","type":"CustomJS"},{"attributes":{"data_source":{"id":"17903","type":"ColumnDataSource"},"glyph":{"id":"17904","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17905","type":"Line"},"selection_glyph":null,"view":{"id":"17907","type":"CDSView"}},"id":"17906","type":"GlyphRenderer"},{"attributes":{"button_type":"success","callback":{"id":"17909","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"17910","type":"Toggle"},{"attributes":{"source":{"id":"17898","type":"ColumnDataSource"}},"id":"17902","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"17924","type":"Selection"},"selection_policy":{"id":"17925","type":"UnionRenderers"}},"id":"17898","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17887","type":"LinearAxis"}],"left":[{"id":"17892","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"17887","type":"LinearAxis"},{"id":"17891","type":"Grid"},{"id":"17892","type":"LinearAxis"},{"id":"17896","type":"Grid"},{"id":"17901","type":"GlyphRenderer"},{"id":"17906","type":"GlyphRenderer"},{"id":"17908","type":"BoxAnnotation"}],"title":{"id":"17918","type":"Title"},"toolbar":{"id":"17897","type":"Toolbar"},"x_range":{"id":"17879","type":"DataRange1d"},"x_scale":{"id":"17883","type":"LinearScale"},"y_range":{"id":"17881","type":"DataRange1d"},"y_scale":{"id":"17885","type":"LinearScale"}},"id":"17878","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"17922","type":"BasicTickFormatter"},"plot":{"id":"17878","subtype":"Figure","type":"Plot"},"ticker":{"id":"17888","type":"BasicTicker"}},"id":"17887","type":"LinearAxis"},{"attributes":{"children":[{"id":"17913","type":"Row"},{"id":"17916","type":"Row"}]},"id":"17917","type":"Column"},{"attributes":{},"id":"17926","type":"Selection"},{"attributes":{"data_source":{"id":"17898","type":"ColumnDataSource"},"glyph":{"id":"17899","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17900","type":"Line"},"selection_glyph":null,"view":{"id":"17902","type":"CDSView"}},"id":"17901","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"17914","type":"WidgetBox"},{"id":"17915","type":"WidgetBox"}]},"id":"17916","type":"Row"},{"attributes":{"args":{"object":{"id":"17906","type":"GlyphRenderer"},"toggle":{"id":"17912","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"17911","type":"CustomJS"},{"attributes":{"children":[{"id":"17878","subtype":"Figure","type":"Plot"}]},"id":"17913","type":"Row"},{"attributes":{"source":{"id":"17903","type":"ColumnDataSource"}},"id":"17907","type":"CDSView"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"17899","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17900","type":"Line"}],"root_ids":["17917"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"750116cd-9798-4a03-ad32-cb956a945af4","roots":{"17917":"98a14b37-2c35-42aa-af58-49958e89e462"}}];
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