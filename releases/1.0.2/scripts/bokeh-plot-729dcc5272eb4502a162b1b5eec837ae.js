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
      };var element = document.getElementById("908003f3-93da-4592-99bb-3f8612b2ab6f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '908003f3-93da-4592-99bb-3f8612b2ab6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c2226c61-a6aa-405a-88c1-78336b084e8d":{"roots":{"references":[{"attributes":{"plot":{"id":"10136","subtype":"Figure","type":"Plot"},"ticker":{"id":"10146","type":"BasicTicker"}},"id":"10149","type":"Grid"},{"attributes":{"overlay":{"id":"10163","type":"BoxAnnotation"}},"id":"10157","type":"BoxZoomTool"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"10136","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"10177","type":"Label"},{"attributes":{"callback":null,"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]},"selected":{"id":"10185","type":"Selection"},"selection_policy":{"id":"10184","type":"UnionRenderers"}},"id":"10133","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"10145","type":"LinearAxis"}],"left":[{"id":"10150","type":"LinearAxis"}],"renderers":[{"id":"10145","type":"LinearAxis"},{"id":"10149","type":"Grid"},{"id":"10150","type":"LinearAxis"},{"id":"10154","type":"Grid"},{"id":"10163","type":"BoxAnnotation"},{"id":"10173","type":"GlyphRenderer"},{"id":"10175","type":"LabelSet"},{"id":"10177","type":"Label"}],"title":{"id":"10135","type":"Title"},"toolbar":{"id":"10161","type":"Toolbar"},"x_range":{"id":"10134","type":"Range1d"},"x_scale":{"id":"10141","type":"LinearScale"},"y_range":{"id":"10139","type":"DataRange1d"},"y_scale":{"id":"10143","type":"LinearScale"}},"id":"10136","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":275,"start":140},"id":"10134","type":"Range1d"},{"attributes":{},"id":"10155","type":"PanTool"},{"attributes":{},"id":"10159","type":"ResetTool"},{"attributes":{},"id":"10143","type":"LinearScale"},{"attributes":{},"id":"10151","type":"BasicTicker"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"10182","type":"BasicTickFormatter"},"plot":{"id":"10136","subtype":"Figure","type":"Plot"},"ticker":{"id":"10151","type":"BasicTicker"}},"id":"10150","type":"LinearAxis"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"10180","type":"BasicTickFormatter"},"plot":{"id":"10136","subtype":"Figure","type":"Plot"},"ticker":{"id":"10146","type":"BasicTicker"}},"id":"10145","type":"LinearAxis"},{"attributes":{},"id":"10146","type":"BasicTicker"},{"attributes":{},"id":"10160","type":"HelpTool"},{"attributes":{"source":{"id":"10133","type":"ColumnDataSource"}},"id":"10174","type":"CDSView"},{"attributes":{},"id":"10141","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"10172","type":"Scatter"},{"attributes":{},"id":"10184","type":"UnionRenderers"},{"attributes":{},"id":"10180","type":"BasicTickFormatter"},{"attributes":{},"id":"10156","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"10133","type":"ColumnDataSource"},"glyph":{"id":"10171","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10172","type":"Scatter"},"selection_glyph":null,"view":{"id":"10174","type":"CDSView"}},"id":"10173","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"10136","subtype":"Figure","type":"Plot"},"ticker":{"id":"10151","type":"BasicTicker"}},"id":"10154","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10163","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10155","type":"PanTool"},{"id":"10156","type":"WheelZoomTool"},{"id":"10157","type":"BoxZoomTool"},{"id":"10158","type":"SaveTool"},{"id":"10159","type":"ResetTool"},{"id":"10160","type":"HelpTool"}]},"id":"10161","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"10171","type":"Scatter"},{"attributes":{},"id":"10185","type":"Selection"},{"attributes":{"callback":null},"id":"10139","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"10135","type":"Title"},{"attributes":{"level":"glyph","plot":{"id":"10136","subtype":"Figure","type":"Plot"},"source":{"id":"10133","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"10175","type":"LabelSet"},{"attributes":{},"id":"10182","type":"BasicTickFormatter"},{"attributes":{},"id":"10158","type":"SaveTool"}],"root_ids":["10136"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c2226c61-a6aa-405a-88c1-78336b084e8d","roots":{"10136":"908003f3-93da-4592-99bb-3f8612b2ab6f"}}];
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