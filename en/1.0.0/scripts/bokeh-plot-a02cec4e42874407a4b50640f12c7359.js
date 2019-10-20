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
      };var element = document.getElementById("41317f97-adb4-4a1c-8d40-f32f86633bbf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41317f97-adb4-4a1c-8d40-f32f86633bbf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"766436c3-3479-4834-a2a4-c8b19c4174c1":{"roots":{"references":[{"attributes":{"plot":{"id":"18133","subtype":"Figure","type":"Plot"},"ticker":{"id":"18144","type":"BasicTicker"}},"id":"18147","type":"Grid"},{"attributes":{"data_source":{"id":"18168","type":"ColumnDataSource"},"glyph":{"id":"18169","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18170","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18172","type":"CDSView"}},"id":"18171","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18161","type":"BoxAnnotation"},{"attributes":{},"id":"18154","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18170","type":"MultiLine"},{"attributes":{},"id":"18139","type":"LinearScale"},{"attributes":{},"id":"18157","type":"ResetTool"},{"attributes":{"formatter":{"id":"18178","type":"BasicTickFormatter"},"plot":{"id":"18133","subtype":"Figure","type":"Plot"},"ticker":{"id":"18144","type":"BasicTicker"}},"id":"18143","type":"LinearAxis"},{"attributes":{},"id":"18153","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18169","type":"MultiLine"},{"attributes":{},"id":"18149","type":"BasicTicker"},{"attributes":{"num_objects":3,"renderers":[{"id":"18171","type":"GlyphRenderer"}]},"id":"18173","type":"FreehandDrawTool"},{"attributes":{},"id":"18183","type":"UnionRenderers"},{"attributes":{},"id":"18156","type":"SaveTool"},{"attributes":{"callback":null,"end":10},"id":"18137","type":"Range1d"},{"attributes":{"callback":null,"end":10},"id":"18135","type":"Range1d"},{"attributes":{"overlay":{"id":"18161","type":"BoxAnnotation"}},"id":"18155","type":"BoxZoomTool"},{"attributes":{},"id":"18178","type":"BasicTickFormatter"},{"attributes":{},"id":"18180","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18168","type":"ColumnDataSource"}},"id":"18172","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"18133","subtype":"Figure","type":"Plot"},"ticker":{"id":"18149","type":"BasicTicker"}},"id":"18152","type":"Grid"},{"attributes":{"active_drag":{"id":"18173","type":"FreehandDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18153","type":"PanTool"},{"id":"18154","type":"WheelZoomTool"},{"id":"18155","type":"BoxZoomTool"},{"id":"18156","type":"SaveTool"},{"id":"18157","type":"ResetTool"},{"id":"18158","type":"HelpTool"},{"id":"18173","type":"FreehandDrawTool"}]},"id":"18159","type":"Toolbar"},{"attributes":{"below":[{"id":"18143","type":"LinearAxis"}],"left":[{"id":"18148","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18143","type":"LinearAxis"},{"id":"18147","type":"Grid"},{"id":"18148","type":"LinearAxis"},{"id":"18152","type":"Grid"},{"id":"18161","type":"BoxAnnotation"},{"id":"18171","type":"GlyphRenderer"}],"title":{"id":"18132","type":"Title"},"toolbar":{"id":"18159","type":"Toolbar"},"x_range":{"id":"18135","type":"Range1d"},"x_scale":{"id":"18139","type":"LinearScale"},"y_range":{"id":"18137","type":"Range1d"},"y_scale":{"id":"18141","type":"LinearScale"}},"id":"18133","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"18182","type":"Selection"},"selection_policy":{"id":"18183","type":"UnionRenderers"}},"id":"18168","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Freehand Draw Tool"},"id":"18132","type":"Title"},{"attributes":{},"id":"18141","type":"LinearScale"},{"attributes":{},"id":"18182","type":"Selection"},{"attributes":{},"id":"18144","type":"BasicTicker"},{"attributes":{},"id":"18158","type":"HelpTool"},{"attributes":{"formatter":{"id":"18180","type":"BasicTickFormatter"},"plot":{"id":"18133","subtype":"Figure","type":"Plot"},"ticker":{"id":"18149","type":"BasicTicker"}},"id":"18148","type":"LinearAxis"}],"root_ids":["18133"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"766436c3-3479-4834-a2a4-c8b19c4174c1","roots":{"18133":"41317f97-adb4-4a1c-8d40-f32f86633bbf"}}];
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