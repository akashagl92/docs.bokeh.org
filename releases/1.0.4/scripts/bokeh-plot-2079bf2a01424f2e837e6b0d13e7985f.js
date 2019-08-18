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
      };var element = document.getElementById("a6365a77-ed8c-4cbf-8744-ff0479b0118e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6365a77-ed8c-4cbf-8744-ff0479b0118e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"563fc02b-41db-4821-9dc0-efc5e4cf1185":{"roots":{"references":[{"attributes":{"callback":null},"id":"13027","type":"DataRange1d"},{"attributes":{},"id":"13077","type":"Selection"},{"attributes":{},"id":"13076","type":"UnionRenderers"},{"attributes":{},"id":"13033","type":"LinearScale"},{"attributes":{"overlay":{"id":"13053","type":"BoxAnnotation"}},"id":"13047","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"13029","type":"DataRange1d"},{"attributes":{},"id":"13046","type":"WheelZoomTool"},{"attributes":{},"id":"13049","type":"ResetTool"},{"attributes":{},"id":"13031","type":"LinearScale"},{"attributes":{},"id":"13048","type":"SaveTool"},{"attributes":{},"id":"13050","type":"HelpTool"},{"attributes":{},"id":"13074","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"13074","type":"BasicTickFormatter"},"plot":{"id":"13026","subtype":"Figure","type":"Plot"},"ticker":{"id":"13036","type":"BasicTicker"}},"id":"13035","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"13026","subtype":"Figure","type":"Plot"},"ticker":{"id":"13041","type":"BasicTicker"}},"id":"13044","type":"Grid"},{"attributes":{"data_source":{"id":"13060","type":"ColumnDataSource"},"glyph":{"id":"13061","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13062","type":"Circle"},"selection_glyph":null,"view":{"id":"13064","type":"CDSView"}},"id":"13063","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13045","type":"PanTool"},{"id":"13046","type":"WheelZoomTool"},{"id":"13047","type":"BoxZoomTool"},{"id":"13048","type":"SaveTool"},{"id":"13049","type":"ResetTool"},{"id":"13050","type":"HelpTool"}]},"id":"13051","type":"Toolbar"},{"attributes":{},"id":"13041","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13062","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13061","type":"Circle"},{"attributes":{},"id":"13072","type":"BasicTickFormatter"},{"attributes":{},"id":"13045","type":"PanTool"},{"attributes":{},"id":"13036","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13053","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"13026","subtype":"Figure","type":"Plot"},"ticker":{"id":"13036","type":"BasicTicker"}},"id":"13039","type":"Grid"},{"attributes":{"below":[{"id":"13035","type":"LinearAxis"}],"left":[{"id":"13040","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"13035","type":"LinearAxis"},{"id":"13039","type":"Grid"},{"id":"13040","type":"LinearAxis"},{"id":"13044","type":"Grid"},{"id":"13053","type":"BoxAnnotation"},{"id":"13063","type":"GlyphRenderer"}],"title":{"id":"13065","type":"Title"},"toolbar":{"id":"13051","type":"Toolbar"},"x_range":{"id":"13027","type":"DataRange1d"},"x_scale":{"id":"13031","type":"LinearScale"},"y_range":{"id":"13029","type":"DataRange1d"},"y_scale":{"id":"13033","type":"LinearScale"}},"id":"13026","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"13060","type":"ColumnDataSource"}},"id":"13064","type":"CDSView"},{"attributes":{"formatter":{"id":"13072","type":"BasicTickFormatter"},"plot":{"id":"13026","subtype":"Figure","type":"Plot"},"ticker":{"id":"13041","type":"BasicTicker"}},"id":"13040","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"13077","type":"Selection"},"selection_policy":{"id":"13076","type":"UnionRenderers"}},"id":"13060","type":"ColumnDataSource"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"13065","type":"Title"}],"root_ids":["13026"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"563fc02b-41db-4821-9dc0-efc5e4cf1185","roots":{"13026":"a6365a77-ed8c-4cbf-8744-ff0479b0118e"}}];
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