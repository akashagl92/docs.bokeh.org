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
      };var element = document.getElementById("57c205ee-71a7-42c4-9c94-30006a2f537f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57c205ee-71a7-42c4-9c94-30006a2f537f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"17876a49-7267-477a-ae63-4995157b7c20":{"roots":{"references":[{"attributes":{},"id":"17521","type":"SaveTool"},{"attributes":{"formatter":{"id":"17541","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"17499","subtype":"Figure","type":"Plot"},"ticker":{"id":"17509","type":"BasicTicker"}},"id":"17508","type":"LinearAxis"},{"attributes":{},"id":"17543","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17534","type":"Circle"},{"attributes":{},"id":"17541","type":"BasicTickFormatter"},{"attributes":{},"id":"17504","type":"LinearScale"},{"attributes":{"source":{"id":"17533","type":"ColumnDataSource"}},"id":"17537","type":"CDSView"},{"attributes":{},"id":"17506","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"17499","subtype":"Figure","type":"Plot"},"ticker":{"id":"17514","type":"BasicTicker"}},"id":"17517","type":"Grid"},{"attributes":{},"id":"17509","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"17539","type":"Title"},{"attributes":{"formatter":{"id":"17543","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"17499","subtype":"Figure","type":"Plot"},"ticker":{"id":"17514","type":"BasicTicker"}},"id":"17513","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17518","type":"PanTool"},{"id":"17519","type":"WheelZoomTool"},{"id":"17520","type":"BoxZoomTool"},{"id":"17521","type":"SaveTool"},{"id":"17522","type":"ResetTool"},{"id":"17523","type":"HelpTool"}]},"id":"17524","type":"Toolbar"},{"attributes":{},"id":"17545","type":"Selection"},{"attributes":{"overlay":{"id":"17526","type":"BoxAnnotation"}},"id":"17520","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"17499","subtype":"Figure","type":"Plot"},"ticker":{"id":"17509","type":"BasicTicker"}},"id":"17512","type":"Grid"},{"attributes":{"data_source":{"id":"17533","type":"ColumnDataSource"},"glyph":{"id":"17534","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17535","type":"Circle"},"selection_glyph":null,"view":{"id":"17537","type":"CDSView"}},"id":"17536","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"17502","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17526","type":"BoxAnnotation"},{"attributes":{},"id":"17522","type":"ResetTool"},{"attributes":{},"id":"17546","type":"UnionRenderers"},{"attributes":{},"id":"17518","type":"PanTool"},{"attributes":{"callback":null},"id":"17500","type":"DataRange1d"},{"attributes":{},"id":"17523","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17535","type":"Circle"},{"attributes":{},"id":"17519","type":"WheelZoomTool"},{"attributes":{},"id":"17514","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17545","type":"Selection"},"selection_policy":{"id":"17546","type":"UnionRenderers"}},"id":"17533","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17508","type":"LinearAxis"}],"left":[{"id":"17513","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17508","type":"LinearAxis"},{"id":"17512","type":"Grid"},{"id":"17513","type":"LinearAxis"},{"id":"17517","type":"Grid"},{"id":"17526","type":"BoxAnnotation"},{"id":"17536","type":"GlyphRenderer"}],"title":{"id":"17539","type":"Title"},"toolbar":{"id":"17524","type":"Toolbar"},"x_range":{"id":"17500","type":"DataRange1d"},"x_scale":{"id":"17504","type":"LinearScale"},"y_range":{"id":"17502","type":"DataRange1d"},"y_scale":{"id":"17506","type":"LinearScale"}},"id":"17499","subtype":"Figure","type":"Plot"}],"root_ids":["17499"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"17876a49-7267-477a-ae63-4995157b7c20","roots":{"17499":"57c205ee-71a7-42c4-9c94-30006a2f537f"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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