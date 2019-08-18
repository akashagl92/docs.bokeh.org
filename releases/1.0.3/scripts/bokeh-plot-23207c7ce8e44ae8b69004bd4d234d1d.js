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
      };var element = document.getElementById("bb7f46f9-6344-407a-9972-7e37244d5abb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb7f46f9-6344-407a-9972-7e37244d5abb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"86e04764-14f9-4022-bd3b-329de7fcb87b":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14619","type":"BoxAnnotation"},{"attributes":{},"id":"14614","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14628","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14638","type":"Selection"},"selection_policy":{"id":"14639","type":"UnionRenderers"}},"id":"14626","type":"ColumnDataSource"},{"attributes":{},"id":"14639","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14593","type":"DataRange1d"},{"attributes":{},"id":"14638","type":"Selection"},{"attributes":{},"id":"14599","type":"LinearScale"},{"attributes":{"callback":null},"id":"14595","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14619","type":"BoxAnnotation"}},"id":"14613","type":"BoxZoomTool"},{"attributes":{},"id":"14612","type":"WheelZoomTool"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"14592","subtype":"Figure","type":"Plot"},"ticker":{"id":"14607","type":"BasicTicker"}},"id":"14610","type":"Grid"},{"attributes":{"data_source":{"id":"14626","type":"ColumnDataSource"},"glyph":{"id":"14627","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14628","type":"Circle"},"selection_glyph":null,"view":{"id":"14630","type":"CDSView"}},"id":"14629","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"14633","type":"BasicTickFormatter"},"plot":{"id":"14592","subtype":"Figure","type":"Plot"},"ticker":{"id":"14607","type":"BasicTicker"}},"id":"14606","type":"LinearAxis"},{"attributes":{},"id":"14597","type":"LinearScale"},{"attributes":{"formatter":{"id":"14635","type":"BasicTickFormatter"},"plot":{"id":"14592","subtype":"Figure","type":"Plot"},"ticker":{"id":"14602","type":"BasicTicker"}},"id":"14601","type":"LinearAxis"},{"attributes":{},"id":"14633","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"14626","type":"ColumnDataSource"}},"id":"14630","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"14631","type":"Title"},{"attributes":{},"id":"14616","type":"HelpTool"},{"attributes":{},"id":"14635","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14627","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14611","type":"PanTool"},{"id":"14612","type":"WheelZoomTool"},{"id":"14613","type":"BoxZoomTool"},{"id":"14614","type":"SaveTool"},{"id":"14615","type":"ResetTool"},{"id":"14616","type":"HelpTool"}]},"id":"14617","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"14592","subtype":"Figure","type":"Plot"},"ticker":{"id":"14602","type":"BasicTicker"}},"id":"14605","type":"Grid"},{"attributes":{},"id":"14611","type":"PanTool"},{"attributes":{},"id":"14615","type":"ResetTool"},{"attributes":{},"id":"14602","type":"BasicTicker"},{"attributes":{},"id":"14607","type":"BasicTicker"},{"attributes":{"below":[{"id":"14601","type":"LinearAxis"}],"left":[{"id":"14606","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14601","type":"LinearAxis"},{"id":"14605","type":"Grid"},{"id":"14606","type":"LinearAxis"},{"id":"14610","type":"Grid"},{"id":"14619","type":"BoxAnnotation"},{"id":"14629","type":"GlyphRenderer"}],"title":{"id":"14631","type":"Title"},"toolbar":{"id":"14617","type":"Toolbar"},"x_range":{"id":"14593","type":"DataRange1d"},"x_scale":{"id":"14597","type":"LinearScale"},"y_range":{"id":"14595","type":"DataRange1d"},"y_scale":{"id":"14599","type":"LinearScale"}},"id":"14592","subtype":"Figure","type":"Plot"}],"root_ids":["14592"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"86e04764-14f9-4022-bd3b-329de7fcb87b","roots":{"14592":"bb7f46f9-6344-407a-9972-7e37244d5abb"}}];
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