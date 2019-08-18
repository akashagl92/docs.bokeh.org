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
      };var element = document.getElementById("7c837830-37e4-492e-b32f-7d669e9a6aed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7c837830-37e4-492e-b32f-7d669e9a6aed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e6f5c722-f5cb-4ae2-b45b-6ce1af52aec4":{"roots":{"references":[{"attributes":{"plot":{"id":"13811","subtype":"Figure","type":"Plot"},"ticker":{"id":"13821","type":"BasicTicker"}},"id":"13824","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"13811","subtype":"Figure","type":"Plot"},"ticker":{"id":"13826","type":"BasicTicker"}},"id":"13829","type":"Grid"},{"attributes":{},"id":"13853","type":"BasicTickFormatter"},{"attributes":{},"id":"13826","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"13820","type":"LinearAxis"}],"left":[{"id":"13825","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13820","type":"LinearAxis"},{"id":"13824","type":"Grid"},{"id":"13825","type":"LinearAxis"},{"id":"13829","type":"Grid"},{"id":"13838","type":"BoxAnnotation"},{"id":"13848","type":"GlyphRenderer"}],"title":{"id":"13851","type":"Title"},"toolbar":{"id":"13836","type":"Toolbar"},"x_range":{"id":"13812","type":"DataRange1d"},"x_scale":{"id":"13816","type":"LinearScale"},"y_range":{"id":"13814","type":"DataRange1d"},"y_scale":{"id":"13818","type":"LinearScale"}},"id":"13811","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13835","type":"HelpTool"},{"attributes":{},"id":"13831","type":"WheelZoomTool"},{"attributes":{"source":{"id":"13845","type":"ColumnDataSource"}},"id":"13849","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13847","type":"Circle"},{"attributes":{"callback":null},"id":"13812","type":"DataRange1d"},{"attributes":{"overlay":{"id":"13838","type":"BoxAnnotation"}},"id":"13832","type":"BoxZoomTool"},{"attributes":{},"id":"13834","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13858","type":"Selection"},"selection_policy":{"id":"13857","type":"UnionRenderers"}},"id":"13845","type":"ColumnDataSource"},{"attributes":{},"id":"13855","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"13814","type":"DataRange1d"},{"attributes":{},"id":"13818","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13838","type":"BoxAnnotation"},{"attributes":{},"id":"13833","type":"SaveTool"},{"attributes":{},"id":"13858","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13846","type":"Circle"},{"attributes":{},"id":"13816","type":"LinearScale"},{"attributes":{"data_source":{"id":"13845","type":"ColumnDataSource"},"glyph":{"id":"13846","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13847","type":"Circle"},"selection_glyph":null,"view":{"id":"13849","type":"CDSView"}},"id":"13848","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"13853","type":"BasicTickFormatter"},"plot":{"id":"13811","subtype":"Figure","type":"Plot"},"ticker":{"id":"13821","type":"BasicTicker"}},"id":"13820","type":"LinearAxis"},{"attributes":{},"id":"13857","type":"UnionRenderers"},{"attributes":{},"id":"13821","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13830","type":"PanTool"},{"id":"13831","type":"WheelZoomTool"},{"id":"13832","type":"BoxZoomTool"},{"id":"13833","type":"SaveTool"},{"id":"13834","type":"ResetTool"},{"id":"13835","type":"HelpTool"}]},"id":"13836","type":"Toolbar"},{"attributes":{},"id":"13830","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"13851","type":"Title"},{"attributes":{"formatter":{"id":"13855","type":"BasicTickFormatter"},"plot":{"id":"13811","subtype":"Figure","type":"Plot"},"ticker":{"id":"13826","type":"BasicTicker"}},"id":"13825","type":"LinearAxis"}],"root_ids":["13811"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e6f5c722-f5cb-4ae2-b45b-6ce1af52aec4","roots":{"13811":"7c837830-37e4-492e-b32f-7d669e9a6aed"}}];
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