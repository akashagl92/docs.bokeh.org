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
      };var element = document.getElementById("059f33ae-c75e-482a-a1c7-abb254ab0e2e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '059f33ae-c75e-482a-a1c7-abb254ab0e2e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"481b6735-e8b2-4763-a283-cb80d7a7c37d":{"roots":{"references":[{"attributes":{"below":[{"id":"32043","type":"LinearAxis"}],"left":[{"id":"32048","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32043","type":"LinearAxis"},{"id":"32047","type":"Grid"},{"id":"32048","type":"LinearAxis"},{"id":"32052","type":"Grid"},{"id":"32061","type":"BoxAnnotation"},{"id":"32071","type":"GlyphRenderer"}],"title":{"id":"32116","type":"Title"},"toolbar":{"id":"32059","type":"Toolbar"},"x_range":{"id":"32035","type":"DataRange1d"},"x_scale":{"id":"32039","type":"LinearScale"},"y_range":{"id":"32037","type":"DataRange1d"},"y_scale":{"id":"32041","type":"LinearScale"}},"id":"32034","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32128","type":"UnionRenderers"},{"attributes":{},"id":"32129","type":"Selection"},{"attributes":{"formatter":{"id":"32126","type":"BasicTickFormatter"},"plot":{"id":"32074","subtype":"Figure","type":"Plot"},"ticker":{"id":"32089","type":"BasicTicker"}},"id":"32088","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32101","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"32122","type":"BasicTickFormatter"},"plot":{"id":"32034","subtype":"Figure","type":"Plot"},"ticker":{"id":"32049","type":"BasicTicker"}},"id":"32048","type":"LinearAxis"},{"attributes":{"data_source":{"id":"32108","type":"ColumnDataSource"},"glyph":{"id":"32109","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32110","type":"Line"},"selection_glyph":null,"view":{"id":"32112","type":"CDSView"}},"id":"32111","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32110","type":"Line"},{"attributes":{"formatter":{"id":"32120","type":"BasicTickFormatter"},"plot":{"id":"32034","subtype":"Figure","type":"Plot"},"ticker":{"id":"32044","type":"BasicTicker"}},"id":"32043","type":"LinearAxis"},{"attributes":{"callback":null},"id":"32037","type":"DataRange1d"},{"attributes":{"callback":null},"id":"32075","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"32034","subtype":"Figure","type":"Plot"},"ticker":{"id":"32049","type":"BasicTicker"}},"id":"32052","type":"Grid"},{"attributes":{"source":{"id":"32068","type":"ColumnDataSource"}},"id":"32072","type":"CDSView"},{"attributes":{"child":{"id":"32074","subtype":"Figure","type":"Plot"},"title":"line"},"id":"32113","type":"Panel"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32129","type":"Selection"},"selection_policy":{"id":"32128","type":"UnionRenderers"}},"id":"32068","type":"ColumnDataSource"},{"attributes":{},"id":"32053","type":"PanTool"},{"attributes":{},"id":"32079","type":"LinearScale"},{"attributes":{},"id":"32057","type":"ResetTool"},{"attributes":{},"id":"32058","type":"HelpTool"},{"attributes":{"callback":null},"id":"32035","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32069","type":"Circle"},{"attributes":{"below":[{"id":"32083","type":"LinearAxis"}],"left":[{"id":"32088","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32083","type":"LinearAxis"},{"id":"32087","type":"Grid"},{"id":"32088","type":"LinearAxis"},{"id":"32092","type":"Grid"},{"id":"32101","type":"BoxAnnotation"},{"id":"32111","type":"GlyphRenderer"}],"title":{"id":"32118","type":"Title"},"toolbar":{"id":"32099","type":"Toolbar"},"x_range":{"id":"32075","type":"DataRange1d"},"x_scale":{"id":"32079","type":"LinearScale"},"y_range":{"id":"32077","type":"DataRange1d"},"y_scale":{"id":"32081","type":"LinearScale"}},"id":"32074","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"32061","type":"BoxAnnotation"}},"id":"32055","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32109","type":"Line"},{"attributes":{"callback":null},"id":"32077","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32053","type":"PanTool"},{"id":"32054","type":"WheelZoomTool"},{"id":"32055","type":"BoxZoomTool"},{"id":"32056","type":"SaveTool"},{"id":"32057","type":"ResetTool"},{"id":"32058","type":"HelpTool"}]},"id":"32059","type":"Toolbar"},{"attributes":{"overlay":{"id":"32101","type":"BoxAnnotation"}},"id":"32095","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32124","type":"BasicTickFormatter"},"plot":{"id":"32074","subtype":"Figure","type":"Plot"},"ticker":{"id":"32084","type":"BasicTicker"}},"id":"32083","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"32116","type":"Title"},{"attributes":{},"id":"32041","type":"LinearScale"},{"attributes":{},"id":"32039","type":"LinearScale"},{"attributes":{},"id":"32093","type":"PanTool"},{"attributes":{},"id":"32084","type":"BasicTicker"},{"attributes":{},"id":"32098","type":"HelpTool"},{"attributes":{"callback":null,"tabs":[{"id":"32073","type":"Panel"},{"id":"32113","type":"Panel"}]},"id":"32114","type":"Tabs"},{"attributes":{},"id":"32131","type":"UnionRenderers"},{"attributes":{},"id":"32097","type":"ResetTool"},{"attributes":{},"id":"32126","type":"BasicTickFormatter"},{"attributes":{},"id":"32049","type":"BasicTicker"},{"attributes":{},"id":"32096","type":"SaveTool"},{"attributes":{},"id":"32132","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"32118","type":"Title"},{"attributes":{},"id":"32081","type":"LinearScale"},{"attributes":{},"id":"32094","type":"WheelZoomTool"},{"attributes":{},"id":"32056","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32070","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"32074","subtype":"Figure","type":"Plot"},"ticker":{"id":"32089","type":"BasicTicker"}},"id":"32092","type":"Grid"},{"attributes":{},"id":"32054","type":"WheelZoomTool"},{"attributes":{"child":{"id":"32034","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"32073","type":"Panel"},{"attributes":{},"id":"32044","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32093","type":"PanTool"},{"id":"32094","type":"WheelZoomTool"},{"id":"32095","type":"BoxZoomTool"},{"id":"32096","type":"SaveTool"},{"id":"32097","type":"ResetTool"},{"id":"32098","type":"HelpTool"}]},"id":"32099","type":"Toolbar"},{"attributes":{"source":{"id":"32108","type":"ColumnDataSource"}},"id":"32112","type":"CDSView"},{"attributes":{},"id":"32120","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32132","type":"Selection"},"selection_policy":{"id":"32131","type":"UnionRenderers"}},"id":"32108","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32061","type":"BoxAnnotation"},{"attributes":{},"id":"32122","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32034","subtype":"Figure","type":"Plot"},"ticker":{"id":"32044","type":"BasicTicker"}},"id":"32047","type":"Grid"},{"attributes":{},"id":"32089","type":"BasicTicker"},{"attributes":{},"id":"32124","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32068","type":"ColumnDataSource"},"glyph":{"id":"32069","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32070","type":"Circle"},"selection_glyph":null,"view":{"id":"32072","type":"CDSView"}},"id":"32071","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"32074","subtype":"Figure","type":"Plot"},"ticker":{"id":"32084","type":"BasicTicker"}},"id":"32087","type":"Grid"}],"root_ids":["32114"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"481b6735-e8b2-4763-a283-cb80d7a7c37d","roots":{"32114":"059f33ae-c75e-482a-a1c7-abb254ab0e2e"}}];
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