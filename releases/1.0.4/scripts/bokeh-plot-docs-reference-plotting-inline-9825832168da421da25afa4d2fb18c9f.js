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
      };var element = document.getElementById("af8f63ee-3e45-45bc-a200-0aad97d99b34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af8f63ee-3e45-45bc-a200-0aad97d99b34' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"581391cc-284c-43d7-9224-da686a841575":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34541","type":"PanTool"},{"id":"34542","type":"WheelZoomTool"},{"id":"34543","type":"BoxZoomTool"},{"id":"34544","type":"SaveTool"},{"id":"34545","type":"ResetTool"},{"id":"34546","type":"HelpTool"}]},"id":"34547","type":"Toolbar"},{"attributes":{"callback":null},"id":"34525","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34557","type":"SquareCross"},{"attributes":{},"id":"34568","type":"Selection"},{"attributes":{},"id":"34527","type":"LinearScale"},{"attributes":{},"id":"34546","type":"HelpTool"},{"attributes":{"source":{"id":"34556","type":"ColumnDataSource"}},"id":"34560","type":"CDSView"},{"attributes":{},"id":"34529","type":"LinearScale"},{"attributes":{},"id":"34545","type":"ResetTool"},{"attributes":{},"id":"34541","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34561","type":"Title"},{"attributes":{"formatter":{"id":"34565","type":"BasicTickFormatter"},"plot":{"id":"34522","subtype":"Figure","type":"Plot"},"ticker":{"id":"34532","type":"BasicTicker"}},"id":"34531","type":"LinearAxis"},{"attributes":{},"id":"34542","type":"WheelZoomTool"},{"attributes":{},"id":"34563","type":"BasicTickFormatter"},{"attributes":{},"id":"34532","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34549","type":"BoxAnnotation"}},"id":"34543","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"34556","type":"ColumnDataSource"},"glyph":{"id":"34557","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34558","type":"SquareCross"},"selection_glyph":null,"view":{"id":"34560","type":"CDSView"}},"id":"34559","type":"GlyphRenderer"},{"attributes":{},"id":"34565","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34522","subtype":"Figure","type":"Plot"},"ticker":{"id":"34532","type":"BasicTicker"}},"id":"34535","type":"Grid"},{"attributes":{},"id":"34544","type":"SaveTool"},{"attributes":{"below":[{"id":"34531","type":"LinearAxis"}],"left":[{"id":"34536","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34531","type":"LinearAxis"},{"id":"34535","type":"Grid"},{"id":"34536","type":"LinearAxis"},{"id":"34540","type":"Grid"},{"id":"34549","type":"BoxAnnotation"},{"id":"34559","type":"GlyphRenderer"}],"title":{"id":"34561","type":"Title"},"toolbar":{"id":"34547","type":"Toolbar"},"x_range":{"id":"34523","type":"DataRange1d"},"x_scale":{"id":"34527","type":"LinearScale"},"y_range":{"id":"34525","type":"DataRange1d"},"y_scale":{"id":"34529","type":"LinearScale"}},"id":"34522","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34558","type":"SquareCross"},{"attributes":{},"id":"34567","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"34563","type":"BasicTickFormatter"},"plot":{"id":"34522","subtype":"Figure","type":"Plot"},"ticker":{"id":"34537","type":"BasicTicker"}},"id":"34536","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34568","type":"Selection"},"selection_policy":{"id":"34567","type":"UnionRenderers"}},"id":"34556","type":"ColumnDataSource"},{"attributes":{},"id":"34537","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34549","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34523","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"34522","subtype":"Figure","type":"Plot"},"ticker":{"id":"34537","type":"BasicTicker"}},"id":"34540","type":"Grid"}],"root_ids":["34522"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"581391cc-284c-43d7-9224-da686a841575","roots":{"34522":"af8f63ee-3e45-45bc-a200-0aad97d99b34"}}];
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