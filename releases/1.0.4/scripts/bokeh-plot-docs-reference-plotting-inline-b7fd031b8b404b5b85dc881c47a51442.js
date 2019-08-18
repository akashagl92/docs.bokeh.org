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
      };var element = document.getElementById("6df7a534-d5f1-40fb-a917-2ec2da9d0ee3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6df7a534-d5f1-40fb-a917-2ec2da9d0ee3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"537e7642-eed9-4437-a0a3-2dd9ac20e09f":{"roots":{"references":[{"attributes":{"formatter":{"id":"34310","type":"BasicTickFormatter"},"plot":{"id":"34267","subtype":"Figure","type":"Plot"},"ticker":{"id":"34277","type":"BasicTicker"}},"id":"34276","type":"LinearAxis"},{"attributes":{},"id":"34286","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34313","type":"Selection"},"selection_policy":{"id":"34312","type":"UnionRenderers"}},"id":"34301","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34302","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"34267","subtype":"Figure","type":"Plot"},"ticker":{"id":"34282","type":"BasicTicker"}},"id":"34285","type":"Grid"},{"attributes":{"source":{"id":"34301","type":"ColumnDataSource"}},"id":"34305","type":"CDSView"},{"attributes":{"below":[{"id":"34276","type":"LinearAxis"}],"left":[{"id":"34281","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34276","type":"LinearAxis"},{"id":"34280","type":"Grid"},{"id":"34281","type":"LinearAxis"},{"id":"34285","type":"Grid"},{"id":"34294","type":"BoxAnnotation"},{"id":"34304","type":"GlyphRenderer"}],"title":{"id":"34306","type":"Title"},"toolbar":{"id":"34292","type":"Toolbar"},"x_range":{"id":"34268","type":"DataRange1d"},"x_scale":{"id":"34272","type":"LinearScale"},"y_range":{"id":"34270","type":"DataRange1d"},"y_scale":{"id":"34274","type":"LinearScale"}},"id":"34267","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34303","type":"Rect"},{"attributes":{},"id":"34290","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"34306","type":"Title"},{"attributes":{"callback":null},"id":"34268","type":"DataRange1d"},{"attributes":{},"id":"34274","type":"LinearScale"},{"attributes":{},"id":"34289","type":"SaveTool"},{"attributes":{},"id":"34282","type":"BasicTicker"},{"attributes":{},"id":"34308","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"34301","type":"ColumnDataSource"},"glyph":{"id":"34302","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34303","type":"Rect"},"selection_glyph":null,"view":{"id":"34305","type":"CDSView"}},"id":"34304","type":"GlyphRenderer"},{"attributes":{},"id":"34272","type":"LinearScale"},{"attributes":{},"id":"34277","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34294","type":"BoxAnnotation"}},"id":"34288","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"34270","type":"DataRange1d"},{"attributes":{},"id":"34310","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34286","type":"PanTool"},{"id":"34287","type":"WheelZoomTool"},{"id":"34288","type":"BoxZoomTool"},{"id":"34289","type":"SaveTool"},{"id":"34290","type":"ResetTool"},{"id":"34291","type":"HelpTool"}]},"id":"34292","type":"Toolbar"},{"attributes":{},"id":"34287","type":"WheelZoomTool"},{"attributes":{},"id":"34312","type":"UnionRenderers"},{"attributes":{},"id":"34291","type":"HelpTool"},{"attributes":{},"id":"34313","type":"Selection"},{"attributes":{"plot":{"id":"34267","subtype":"Figure","type":"Plot"},"ticker":{"id":"34277","type":"BasicTicker"}},"id":"34280","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34294","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"34308","type":"BasicTickFormatter"},"plot":{"id":"34267","subtype":"Figure","type":"Plot"},"ticker":{"id":"34282","type":"BasicTicker"}},"id":"34281","type":"LinearAxis"}],"root_ids":["34267"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"537e7642-eed9-4437-a0a3-2dd9ac20e09f","roots":{"34267":"6df7a534-d5f1-40fb-a917-2ec2da9d0ee3"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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