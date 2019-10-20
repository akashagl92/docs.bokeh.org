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
      };var element = document.getElementById("dda08493-143a-4f61-99a9-67780ec649e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dda08493-143a-4f61-99a9-67780ec649e1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4f3e83b1-619c-424a-b793-391c55929b51":{"roots":{"references":[{"attributes":{},"id":"13834","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"13810","subtype":"Figure","type":"Plot"},"ticker":{"id":"13825","type":"BasicTicker"}},"id":"13828","type":"Grid"},{"attributes":{"formatter":{"id":"13854","type":"BasicTickFormatter"},"plot":{"id":"13810","subtype":"Figure","type":"Plot"},"ticker":{"id":"13825","type":"BasicTicker"}},"id":"13824","type":"LinearAxis"},{"attributes":{"formatter":{"id":"13852","type":"BasicTickFormatter"},"plot":{"id":"13810","subtype":"Figure","type":"Plot"},"ticker":{"id":"13820","type":"BasicTicker"}},"id":"13819","type":"LinearAxis"},{"attributes":{},"id":"13856","type":"Selection"},{"attributes":{"data_source":{"id":"13844","type":"ColumnDataSource"},"glyph":{"id":"13845","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13846","type":"Circle"},"selection_glyph":null,"view":{"id":"13848","type":"CDSView"}},"id":"13847","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"13837","type":"BoxAnnotation"}},"id":"13831","type":"BoxZoomTool"},{"attributes":{},"id":"13820","type":"BasicTicker"},{"attributes":{},"id":"13832","type":"SaveTool"},{"attributes":{},"id":"13857","type":"UnionRenderers"},{"attributes":{},"id":"13830","type":"WheelZoomTool"},{"attributes":{},"id":"13852","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"13819","type":"LinearAxis"}],"left":[{"id":"13824","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13819","type":"LinearAxis"},{"id":"13823","type":"Grid"},{"id":"13824","type":"LinearAxis"},{"id":"13828","type":"Grid"},{"id":"13837","type":"BoxAnnotation"},{"id":"13847","type":"GlyphRenderer"}],"title":{"id":"13850","type":"Title"},"toolbar":{"id":"13835","type":"Toolbar"},"x_range":{"id":"13811","type":"DataRange1d"},"x_scale":{"id":"13815","type":"LinearScale"},"y_range":{"id":"13813","type":"DataRange1d"},"y_scale":{"id":"13817","type":"LinearScale"}},"id":"13810","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13846","type":"Circle"},{"attributes":{},"id":"13829","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13856","type":"Selection"},"selection_policy":{"id":"13857","type":"UnionRenderers"}},"id":"13844","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"13811","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13829","type":"PanTool"},{"id":"13830","type":"WheelZoomTool"},{"id":"13831","type":"BoxZoomTool"},{"id":"13832","type":"SaveTool"},{"id":"13833","type":"ResetTool"},{"id":"13834","type":"HelpTool"}]},"id":"13835","type":"Toolbar"},{"attributes":{},"id":"13825","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13837","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"13813","type":"DataRange1d"},{"attributes":{"source":{"id":"13844","type":"ColumnDataSource"}},"id":"13848","type":"CDSView"},{"attributes":{},"id":"13815","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"13850","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13845","type":"Circle"},{"attributes":{"plot":{"id":"13810","subtype":"Figure","type":"Plot"},"ticker":{"id":"13820","type":"BasicTicker"}},"id":"13823","type":"Grid"},{"attributes":{},"id":"13833","type":"ResetTool"},{"attributes":{},"id":"13854","type":"BasicTickFormatter"},{"attributes":{},"id":"13817","type":"LinearScale"}],"root_ids":["13810"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"4f3e83b1-619c-424a-b793-391c55929b51","roots":{"13810":"dda08493-143a-4f61-99a9-67780ec649e1"}}];
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