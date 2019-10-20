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
      };var element = document.getElementById("b01f4f9a-ddf9-475f-b449-24a4ad998f7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b01f4f9a-ddf9-475f-b449-24a4ad998f7d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e1499eb2-e4d2-46f3-b1fe-a214be458f27":{"roots":{"references":[{"attributes":{"data_source":{"id":"12267","type":"ColumnDataSource"},"glyph":{"id":"12268","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12269","type":"Segment"},"selection_glyph":null,"view":{"id":"12271","type":"CDSView"}},"id":"12270","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"12280","type":"Selection"},"selection_policy":{"id":"12279","type":"UnionRenderers"}},"id":"12267","type":"ColumnDataSource"},{"attributes":{},"id":"12280","type":"Selection"},{"attributes":{},"id":"12277","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"12233","subtype":"Figure","type":"Plot"},"ticker":{"id":"12248","type":"BasicTicker"}},"id":"12251","type":"Grid"},{"attributes":{},"id":"12279","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12260","type":"BoxAnnotation"},{"attributes":{},"id":"12252","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"12273","type":"Title"},{"attributes":{"plot":{"id":"12233","subtype":"Figure","type":"Plot"},"ticker":{"id":"12243","type":"BasicTicker"}},"id":"12246","type":"Grid"},{"attributes":{},"id":"12256","type":"ResetTool"},{"attributes":{},"id":"12240","type":"LinearScale"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12268","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12252","type":"PanTool"},{"id":"12253","type":"WheelZoomTool"},{"id":"12254","type":"BoxZoomTool"},{"id":"12255","type":"SaveTool"},{"id":"12256","type":"ResetTool"},{"id":"12257","type":"HelpTool"}]},"id":"12258","type":"Toolbar"},{"attributes":{"callback":null},"id":"12234","type":"DataRange1d"},{"attributes":{"overlay":{"id":"12260","type":"BoxAnnotation"}},"id":"12254","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12269","type":"Segment"},{"attributes":{"callback":null},"id":"12236","type":"DataRange1d"},{"attributes":{"formatter":{"id":"12275","type":"BasicTickFormatter"},"plot":{"id":"12233","subtype":"Figure","type":"Plot"},"ticker":{"id":"12243","type":"BasicTicker"}},"id":"12242","type":"LinearAxis"},{"attributes":{},"id":"12255","type":"SaveTool"},{"attributes":{"below":[{"id":"12242","type":"LinearAxis"}],"left":[{"id":"12247","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12242","type":"LinearAxis"},{"id":"12246","type":"Grid"},{"id":"12247","type":"LinearAxis"},{"id":"12251","type":"Grid"},{"id":"12260","type":"BoxAnnotation"},{"id":"12270","type":"GlyphRenderer"}],"title":{"id":"12273","type":"Title"},"toolbar":{"id":"12258","type":"Toolbar"},"x_range":{"id":"12234","type":"DataRange1d"},"x_scale":{"id":"12238","type":"LinearScale"},"y_range":{"id":"12236","type":"DataRange1d"},"y_scale":{"id":"12240","type":"LinearScale"}},"id":"12233","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12257","type":"HelpTool"},{"attributes":{"formatter":{"id":"12277","type":"BasicTickFormatter"},"plot":{"id":"12233","subtype":"Figure","type":"Plot"},"ticker":{"id":"12248","type":"BasicTicker"}},"id":"12247","type":"LinearAxis"},{"attributes":{},"id":"12253","type":"WheelZoomTool"},{"attributes":{},"id":"12243","type":"BasicTicker"},{"attributes":{},"id":"12238","type":"LinearScale"},{"attributes":{},"id":"12275","type":"BasicTickFormatter"},{"attributes":{},"id":"12248","type":"BasicTicker"},{"attributes":{"source":{"id":"12267","type":"ColumnDataSource"}},"id":"12271","type":"CDSView"}],"root_ids":["12233"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e1499eb2-e4d2-46f3-b1fe-a214be458f27","roots":{"12233":"b01f4f9a-ddf9-475f-b449-24a4ad998f7d"}}];
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