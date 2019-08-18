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
      };var element = document.getElementById("de250452-1a9e-4252-a55f-5d34ff22b2aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de250452-1a9e-4252-a55f-5d34ff22b2aa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"678c646b-32ed-4212-8b02-8434b5ebcc58":{"roots":{"references":[{"attributes":{},"id":"18072","type":"ResetTool"},{"attributes":{"formatter":{"id":"18096","type":"BasicTickFormatter"},"plot":{"id":"18048","subtype":"Figure","type":"Plot"},"ticker":{"id":"18064","type":"BasicTicker"}},"id":"18063","type":"LinearAxis"},{"attributes":{},"id":"18096","type":"BasicTickFormatter"},{"attributes":{},"id":"18064","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"alpha":[0.5,0.5,0.5],"height":[2,1,1.5],"width":[2,1,2],"x":[5,2,8],"y":[5,7,8]},"selected":{"id":"18099","type":"Selection"},"selection_policy":{"id":"18098","type":"UnionRenderers"}},"id":"18083","type":"ColumnDataSource"},{"attributes":{},"id":"18073","type":"HelpTool"},{"attributes":{},"id":"18059","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"18048","subtype":"Figure","type":"Plot"},"ticker":{"id":"18064","type":"BasicTicker"}},"id":"18067","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"18052","type":"Range1d"},{"attributes":{"active_drag":{"id":"18089","type":"BoxEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18068","type":"PanTool"},{"id":"18069","type":"WheelZoomTool"},{"id":"18070","type":"BoxZoomTool"},{"id":"18071","type":"SaveTool"},{"id":"18072","type":"ResetTool"},{"id":"18073","type":"HelpTool"},{"id":"18089","type":"BoxEditTool"}]},"id":"18074","type":"Toolbar"},{"attributes":{"below":[{"id":"18058","type":"LinearAxis"}],"left":[{"id":"18063","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18058","type":"LinearAxis"},{"id":"18062","type":"Grid"},{"id":"18063","type":"LinearAxis"},{"id":"18067","type":"Grid"},{"id":"18076","type":"BoxAnnotation"},{"id":"18087","type":"GlyphRenderer"}],"title":{"id":"18047","type":"Title"},"toolbar":{"id":"18074","type":"Toolbar"},"x_range":{"id":"18050","type":"Range1d"},"x_scale":{"id":"18054","type":"LinearScale"},"y_range":{"id":"18052","type":"Range1d"},"y_scale":{"id":"18056","type":"LinearScale"}},"id":"18048","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18054","type":"LinearScale"},{"attributes":{"fill_alpha":{"field":"alpha"},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"field":"alpha"},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18085","type":"Rect"},{"attributes":{"formatter":{"id":"18094","type":"BasicTickFormatter"},"plot":{"id":"18048","subtype":"Figure","type":"Plot"},"ticker":{"id":"18059","type":"BasicTicker"}},"id":"18058","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18076","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Box Edit Tool"},"id":"18047","type":"Title"},{"attributes":{},"id":"18056","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18086","type":"Rect"},{"attributes":{"data_source":{"id":"18083","type":"ColumnDataSource"},"glyph":{"id":"18085","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18086","type":"Rect"},"selection_glyph":null,"view":{"id":"18088","type":"CDSView"}},"id":"18087","type":"GlyphRenderer"},{"attributes":{},"id":"18068","type":"PanTool"},{"attributes":{"plot":{"id":"18048","subtype":"Figure","type":"Plot"},"ticker":{"id":"18059","type":"BasicTicker"}},"id":"18062","type":"Grid"},{"attributes":{},"id":"18069","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18083","type":"ColumnDataSource"}},"id":"18088","type":"CDSView"},{"attributes":{},"id":"18099","type":"Selection"},{"attributes":{"empty_value":1,"renderers":[{"id":"18087","type":"GlyphRenderer"}]},"id":"18089","type":"BoxEditTool"},{"attributes":{"overlay":{"id":"18076","type":"BoxAnnotation"}},"id":"18070","type":"BoxZoomTool"},{"attributes":{},"id":"18098","type":"UnionRenderers"},{"attributes":{"callback":null,"end":10},"id":"18050","type":"Range1d"},{"attributes":{},"id":"18071","type":"SaveTool"},{"attributes":{},"id":"18094","type":"BasicTickFormatter"}],"root_ids":["18048"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"678c646b-32ed-4212-8b02-8434b5ebcc58","roots":{"18048":"de250452-1a9e-4252-a55f-5d34ff22b2aa"}}];
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