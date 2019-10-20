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
      };var element = document.getElementById("71402030-84fa-478b-9ad1-856e69e45d7c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71402030-84fa-478b-9ad1-856e69e45d7c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"76dfbfdd-ab52-41c5-9f8c-6679eb02bf61":{"roots":{"references":[{"attributes":{},"id":"12251","type":"PanTool"},{"attributes":{},"id":"12274","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"12235","type":"DataRange1d"},{"attributes":{},"id":"12276","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"12274","type":"BasicTickFormatter"},"plot":{"id":"12232","subtype":"Figure","type":"Plot"},"ticker":{"id":"12242","type":"BasicTicker"}},"id":"12241","type":"LinearAxis"},{"attributes":{"plot":{"id":"12232","subtype":"Figure","type":"Plot"},"ticker":{"id":"12242","type":"BasicTicker"}},"id":"12245","type":"Grid"},{"attributes":{"callback":null},"id":"12233","type":"DataRange1d"},{"attributes":{},"id":"12252","type":"WheelZoomTool"},{"attributes":{},"id":"12239","type":"LinearScale"},{"attributes":{},"id":"12242","type":"BasicTicker"},{"attributes":{"overlay":{"id":"12259","type":"BoxAnnotation"}},"id":"12253","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12251","type":"PanTool"},{"id":"12252","type":"WheelZoomTool"},{"id":"12253","type":"BoxZoomTool"},{"id":"12254","type":"SaveTool"},{"id":"12255","type":"ResetTool"},{"id":"12256","type":"HelpTool"}]},"id":"12257","type":"Toolbar"},{"attributes":{},"id":"12254","type":"SaveTool"},{"attributes":{},"id":"12247","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12268","type":"Segment"},{"attributes":{"plot":null,"text":""},"id":"12272","type":"Title"},{"attributes":{},"id":"12256","type":"HelpTool"},{"attributes":{"below":[{"id":"12241","type":"LinearAxis"}],"left":[{"id":"12246","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12241","type":"LinearAxis"},{"id":"12245","type":"Grid"},{"id":"12246","type":"LinearAxis"},{"id":"12250","type":"Grid"},{"id":"12259","type":"BoxAnnotation"},{"id":"12269","type":"GlyphRenderer"}],"title":{"id":"12272","type":"Title"},"toolbar":{"id":"12257","type":"Toolbar"},"x_range":{"id":"12233","type":"DataRange1d"},"x_scale":{"id":"12237","type":"LinearScale"},"y_range":{"id":"12235","type":"DataRange1d"},"y_scale":{"id":"12239","type":"LinearScale"}},"id":"12232","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12259","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"12232","subtype":"Figure","type":"Plot"},"ticker":{"id":"12247","type":"BasicTicker"}},"id":"12250","type":"Grid"},{"attributes":{},"id":"12278","type":"Selection"},{"attributes":{},"id":"12237","type":"LinearScale"},{"attributes":{"formatter":{"id":"12276","type":"BasicTickFormatter"},"plot":{"id":"12232","subtype":"Figure","type":"Plot"},"ticker":{"id":"12247","type":"BasicTicker"}},"id":"12246","type":"LinearAxis"},{"attributes":{"source":{"id":"12266","type":"ColumnDataSource"}},"id":"12270","type":"CDSView"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"12278","type":"Selection"},"selection_policy":{"id":"12279","type":"UnionRenderers"}},"id":"12266","type":"ColumnDataSource"},{"attributes":{},"id":"12279","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12267","type":"Segment"},{"attributes":{"data_source":{"id":"12266","type":"ColumnDataSource"},"glyph":{"id":"12267","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12268","type":"Segment"},"selection_glyph":null,"view":{"id":"12270","type":"CDSView"}},"id":"12269","type":"GlyphRenderer"},{"attributes":{},"id":"12255","type":"ResetTool"}],"root_ids":["12232"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"76dfbfdd-ab52-41c5-9f8c-6679eb02bf61","roots":{"12232":"71402030-84fa-478b-9ad1-856e69e45d7c"}}];
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