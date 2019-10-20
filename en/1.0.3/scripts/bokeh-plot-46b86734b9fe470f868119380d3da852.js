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
      };var element = document.getElementById("0d54f63a-ab61-403e-896c-80da5cf652ce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d54f63a-ab61-403e-896c-80da5cf652ce' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6fc5e878-e7b6-473e-8878-0bf4fc53a0d9":{"roots":{"references":[{"attributes":{"level":"glyph","plot":{"id":"10139","subtype":"Figure","type":"Plot"},"source":{"id":"10136","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"10178","type":"LabelSet"},{"attributes":{"callback":null,"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]},"selected":{"id":"10187","type":"Selection"},"selection_policy":{"id":"10188","type":"UnionRenderers"}},"id":"10136","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"10166","type":"BoxAnnotation"}},"id":"10160","type":"BoxZoomTool"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"10139","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"10180","type":"Label"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"10184","type":"BasicTickFormatter"},"plot":{"id":"10139","subtype":"Figure","type":"Plot"},"ticker":{"id":"10149","type":"BasicTicker"}},"id":"10148","type":"LinearAxis"},{"attributes":{},"id":"10162","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"10174","type":"Scatter"},{"attributes":{},"id":"10161","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"10175","type":"Scatter"},{"attributes":{},"id":"10182","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"10138","type":"Title"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"10182","type":"BasicTickFormatter"},"plot":{"id":"10139","subtype":"Figure","type":"Plot"},"ticker":{"id":"10154","type":"BasicTicker"}},"id":"10153","type":"LinearAxis"},{"attributes":{"callback":null},"id":"10142","type":"DataRange1d"},{"attributes":{},"id":"10154","type":"BasicTicker"},{"attributes":{"callback":null,"end":275,"start":140},"id":"10137","type":"Range1d"},{"attributes":{},"id":"10158","type":"PanTool"},{"attributes":{},"id":"10144","type":"LinearScale"},{"attributes":{},"id":"10184","type":"BasicTickFormatter"},{"attributes":{},"id":"10187","type":"Selection"},{"attributes":{"plot":{"id":"10139","subtype":"Figure","type":"Plot"},"ticker":{"id":"10149","type":"BasicTicker"}},"id":"10152","type":"Grid"},{"attributes":{},"id":"10188","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"10139","subtype":"Figure","type":"Plot"},"ticker":{"id":"10154","type":"BasicTicker"}},"id":"10157","type":"Grid"},{"attributes":{"source":{"id":"10136","type":"ColumnDataSource"}},"id":"10177","type":"CDSView"},{"attributes":{},"id":"10146","type":"LinearScale"},{"attributes":{"data_source":{"id":"10136","type":"ColumnDataSource"},"glyph":{"id":"10174","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10175","type":"Scatter"},"selection_glyph":null,"view":{"id":"10177","type":"CDSView"}},"id":"10176","type":"GlyphRenderer"},{"attributes":{},"id":"10159","type":"WheelZoomTool"},{"attributes":{},"id":"10163","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10166","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10158","type":"PanTool"},{"id":"10159","type":"WheelZoomTool"},{"id":"10160","type":"BoxZoomTool"},{"id":"10161","type":"SaveTool"},{"id":"10162","type":"ResetTool"},{"id":"10163","type":"HelpTool"}]},"id":"10164","type":"Toolbar"},{"attributes":{},"id":"10149","type":"BasicTicker"},{"attributes":{"below":[{"id":"10148","type":"LinearAxis"}],"left":[{"id":"10153","type":"LinearAxis"}],"renderers":[{"id":"10148","type":"LinearAxis"},{"id":"10152","type":"Grid"},{"id":"10153","type":"LinearAxis"},{"id":"10157","type":"Grid"},{"id":"10166","type":"BoxAnnotation"},{"id":"10176","type":"GlyphRenderer"},{"id":"10178","type":"LabelSet"},{"id":"10180","type":"Label"}],"title":{"id":"10138","type":"Title"},"toolbar":{"id":"10164","type":"Toolbar"},"x_range":{"id":"10137","type":"Range1d"},"x_scale":{"id":"10144","type":"LinearScale"},"y_range":{"id":"10142","type":"DataRange1d"},"y_scale":{"id":"10146","type":"LinearScale"}},"id":"10139","subtype":"Figure","type":"Plot"}],"root_ids":["10139"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"6fc5e878-e7b6-473e-8878-0bf4fc53a0d9","roots":{"10139":"0d54f63a-ab61-403e-896c-80da5cf652ce"}}];
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