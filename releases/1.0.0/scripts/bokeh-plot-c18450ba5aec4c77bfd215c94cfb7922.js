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
      };var element = document.getElementById("f1635683-471c-49a4-aaf9-b69d930fad69");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1635683-471c-49a4-aaf9-b69d930fad69' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c36ee891-7bf7-48d3-a04c-af146aaea399":{"roots":{"references":[{"attributes":{},"id":"9311","type":"CategoricalTicker"},{"attributes":{},"id":"9342","type":"UnionRenderers"},{"attributes":{},"id":"9317","type":"SaveTool"},{"attributes":{"callback":null},"id":"9297","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9296","subtype":"Figure","type":"Plot"},"ticker":{"id":"9311","type":"CategoricalTicker"}},"id":"9313","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9330","type":"Circle"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"9299","type":"FactorRange"},{"attributes":{"plot":{"id":"9296","subtype":"Figure","type":"Plot"},"ticker":{"id":"9306","type":"BasicTicker"}},"id":"9309","type":"Grid"},{"attributes":{"data_source":{"id":"9329","type":"ColumnDataSource"},"glyph":{"id":"9330","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9331","type":"Circle"},"selection_glyph":null,"view":{"id":"9333","type":"CDSView"}},"id":"9332","type":"GlyphRenderer"},{"attributes":{},"id":"9301","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9331","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"9341","type":"Selection"},"selection_policy":{"id":"9342","type":"UnionRenderers"}},"id":"9329","type":"ColumnDataSource"},{"attributes":{},"id":"9339","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"9335","type":"Title"},{"attributes":{},"id":"9314","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9314","type":"PanTool"},{"id":"9315","type":"WheelZoomTool"},{"id":"9316","type":"BoxZoomTool"},{"id":"9317","type":"SaveTool"},{"id":"9318","type":"ResetTool"},{"id":"9319","type":"HelpTool"}]},"id":"9320","type":"Toolbar"},{"attributes":{},"id":"9303","type":"CategoricalScale"},{"attributes":{},"id":"9318","type":"ResetTool"},{"attributes":{},"id":"9341","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9322","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9337","type":"BasicTickFormatter"},"plot":{"id":"9296","subtype":"Figure","type":"Plot"},"ticker":{"id":"9306","type":"BasicTicker"}},"id":"9305","type":"LinearAxis"},{"attributes":{},"id":"9319","type":"HelpTool"},{"attributes":{},"id":"9315","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"9322","type":"BoxAnnotation"}},"id":"9316","type":"BoxZoomTool"},{"attributes":{},"id":"9306","type":"BasicTicker"},{"attributes":{"source":{"id":"9329","type":"ColumnDataSource"}},"id":"9333","type":"CDSView"},{"attributes":{},"id":"9337","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9339","type":"CategoricalTickFormatter"},"plot":{"id":"9296","subtype":"Figure","type":"Plot"},"ticker":{"id":"9311","type":"CategoricalTicker"}},"id":"9310","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"9305","type":"LinearAxis"}],"left":[{"id":"9310","type":"CategoricalAxis"}],"renderers":[{"id":"9305","type":"LinearAxis"},{"id":"9309","type":"Grid"},{"id":"9310","type":"CategoricalAxis"},{"id":"9313","type":"Grid"},{"id":"9322","type":"BoxAnnotation"},{"id":"9332","type":"GlyphRenderer"}],"title":{"id":"9335","type":"Title"},"toolbar":{"id":"9320","type":"Toolbar"},"x_range":{"id":"9297","type":"DataRange1d"},"x_scale":{"id":"9301","type":"LinearScale"},"y_range":{"id":"9299","type":"FactorRange"},"y_scale":{"id":"9303","type":"CategoricalScale"}},"id":"9296","subtype":"Figure","type":"Plot"}],"root_ids":["9296"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"c36ee891-7bf7-48d3-a04c-af146aaea399","roots":{"9296":"f1635683-471c-49a4-aaf9-b69d930fad69"}}];
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