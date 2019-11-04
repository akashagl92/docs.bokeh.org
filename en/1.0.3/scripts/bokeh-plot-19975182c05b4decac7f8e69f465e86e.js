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
      };var element = document.getElementById("784c385b-fd51-47ce-96ae-014776d6c075");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '784c385b-fd51-47ce-96ae-014776d6c075' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa15355b-a214-4392-8e2e-b2ce9c4f85eb":{"roots":{"references":[{"attributes":{},"id":"10691","type":"BasicTicker"},{"attributes":{},"id":"10681","type":"LinearScale"},{"attributes":{"callback":null},"id":"10677","type":"DataRange1d"},{"attributes":{"overlay":{"id":"10703","type":"BoxAnnotation"}},"id":"10697","type":"BoxZoomTool"},{"attributes":{},"id":"10683","type":"LinearScale"},{"attributes":{},"id":"10722","type":"Selection"},{"attributes":{},"id":"10698","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10695","type":"PanTool"},{"id":"10696","type":"WheelZoomTool"},{"id":"10697","type":"BoxZoomTool"},{"id":"10698","type":"SaveTool"},{"id":"10699","type":"ResetTool"},{"id":"10700","type":"HelpTool"}]},"id":"10701","type":"Toolbar"},{"attributes":{},"id":"10695","type":"PanTool"},{"attributes":{"source":{"id":"10710","type":"ColumnDataSource"}},"id":"10714","type":"CDSView"},{"attributes":{},"id":"10699","type":"ResetTool"},{"attributes":{"callback":null},"id":"10679","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10703","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"10685","type":"LinearAxis"}],"left":[{"id":"10690","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10685","type":"LinearAxis"},{"id":"10689","type":"Grid"},{"id":"10690","type":"LinearAxis"},{"id":"10694","type":"Grid"},{"id":"10703","type":"BoxAnnotation"},{"id":"10713","type":"GlyphRenderer"}],"title":{"id":"10715","type":"Title"},"toolbar":{"id":"10701","type":"Toolbar"},"x_range":{"id":"10677","type":"DataRange1d"},"x_scale":{"id":"10681","type":"LinearScale"},"y_range":{"id":"10679","type":"DataRange1d"},"y_scale":{"id":"10683","type":"LinearScale"}},"id":"10676","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"10676","subtype":"Figure","type":"Plot"},"ticker":{"id":"10691","type":"BasicTicker"}},"id":"10694","type":"Grid"},{"attributes":{},"id":"10686","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"10715","type":"Title"},{"attributes":{},"id":"10700","type":"HelpTool"},{"attributes":{"data_source":{"id":"10710","type":"ColumnDataSource"},"glyph":{"id":"10711","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10712","type":"MultiLine"},"selection_glyph":null,"view":{"id":"10714","type":"CDSView"}},"id":"10713","type":"GlyphRenderer"},{"attributes":{},"id":"10696","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10711","type":"MultiLine"},{"attributes":{},"id":"10719","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"10722","type":"Selection"},"selection_policy":{"id":"10723","type":"UnionRenderers"}},"id":"10710","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"10717","type":"BasicTickFormatter"},"plot":{"id":"10676","subtype":"Figure","type":"Plot"},"ticker":{"id":"10691","type":"BasicTicker"}},"id":"10690","type":"LinearAxis"},{"attributes":{"plot":{"id":"10676","subtype":"Figure","type":"Plot"},"ticker":{"id":"10686","type":"BasicTicker"}},"id":"10689","type":"Grid"},{"attributes":{"formatter":{"id":"10719","type":"BasicTickFormatter"},"plot":{"id":"10676","subtype":"Figure","type":"Plot"},"ticker":{"id":"10686","type":"BasicTicker"}},"id":"10685","type":"LinearAxis"},{"attributes":{},"id":"10717","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10712","type":"MultiLine"},{"attributes":{},"id":"10723","type":"UnionRenderers"}],"root_ids":["10676"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"fa15355b-a214-4392-8e2e-b2ce9c4f85eb","roots":{"10676":"784c385b-fd51-47ce-96ae-014776d6c075"}}];
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