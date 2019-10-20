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
      };var element = document.getElementById("426d6ccf-a7bd-4521-9f53-c5a40ac38e8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '426d6ccf-a7bd-4521-9f53-c5a40ac38e8a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9bec60e6-f6b2-4ddc-b975-417bb4c2b924":{"roots":{"references":[{"attributes":{"callback":null},"id":"32915","type":"DataRange1d"},{"attributes":{},"id":"32924","type":"BasicTicker"},{"attributes":{},"id":"32933","type":"PanTool"},{"attributes":{},"id":"32934","type":"WheelZoomTool"},{"attributes":{},"id":"32957","type":"BasicTickFormatter"},{"attributes":{},"id":"32960","type":"Selection"},{"attributes":{},"id":"32938","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32960","type":"Selection"},"selection_policy":{"id":"32961","type":"UnionRenderers"}},"id":"32948","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32933","type":"PanTool"},{"id":"32934","type":"WheelZoomTool"},{"id":"32935","type":"BoxZoomTool"},{"id":"32936","type":"SaveTool"},{"id":"32937","type":"ResetTool"},{"id":"32938","type":"HelpTool"}]},"id":"32939","type":"Toolbar"},{"attributes":{"data_source":{"id":"32948","type":"ColumnDataSource"},"glyph":{"id":"32949","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32950","type":"Diamond"},"selection_glyph":null,"view":{"id":"32952","type":"CDSView"}},"id":"32951","type":"GlyphRenderer"},{"attributes":{},"id":"32955","type":"BasicTickFormatter"},{"attributes":{},"id":"32937","type":"ResetTool"},{"attributes":{"formatter":{"id":"32955","type":"BasicTickFormatter"},"plot":{"id":"32914","subtype":"Figure","type":"Plot"},"ticker":{"id":"32929","type":"BasicTicker"}},"id":"32928","type":"LinearAxis"},{"attributes":{"overlay":{"id":"32941","type":"BoxAnnotation"}},"id":"32935","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"32953","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32950","type":"Diamond"},{"attributes":{"below":[{"id":"32923","type":"LinearAxis"}],"left":[{"id":"32928","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32923","type":"LinearAxis"},{"id":"32927","type":"Grid"},{"id":"32928","type":"LinearAxis"},{"id":"32932","type":"Grid"},{"id":"32941","type":"BoxAnnotation"},{"id":"32951","type":"GlyphRenderer"}],"title":{"id":"32953","type":"Title"},"toolbar":{"id":"32939","type":"Toolbar"},"x_range":{"id":"32915","type":"DataRange1d"},"x_scale":{"id":"32919","type":"LinearScale"},"y_range":{"id":"32917","type":"DataRange1d"},"y_scale":{"id":"32921","type":"LinearScale"}},"id":"32914","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32936","type":"SaveTool"},{"attributes":{"source":{"id":"32948","type":"ColumnDataSource"}},"id":"32952","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32949","type":"Diamond"},{"attributes":{"plot":{"id":"32914","subtype":"Figure","type":"Plot"},"ticker":{"id":"32924","type":"BasicTicker"}},"id":"32927","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"32914","subtype":"Figure","type":"Plot"},"ticker":{"id":"32929","type":"BasicTicker"}},"id":"32932","type":"Grid"},{"attributes":{"formatter":{"id":"32957","type":"BasicTickFormatter"},"plot":{"id":"32914","subtype":"Figure","type":"Plot"},"ticker":{"id":"32924","type":"BasicTicker"}},"id":"32923","type":"LinearAxis"},{"attributes":{},"id":"32961","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"32917","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32941","type":"BoxAnnotation"},{"attributes":{},"id":"32929","type":"BasicTicker"},{"attributes":{},"id":"32919","type":"LinearScale"},{"attributes":{},"id":"32921","type":"LinearScale"}],"root_ids":["32914"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"9bec60e6-f6b2-4ddc-b975-417bb4c2b924","roots":{"32914":"426d6ccf-a7bd-4521-9f53-c5a40ac38e8a"}}];
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