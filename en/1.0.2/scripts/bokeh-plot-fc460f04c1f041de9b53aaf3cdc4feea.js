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
      };var element = document.getElementById("8945be42-1699-48b3-add1-7f2656556493");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8945be42-1699-48b3-add1-7f2656556493' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4e104cf1-3976-4723-8dec-f82207310f53":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17519","type":"PanTool"},{"id":"17520","type":"WheelZoomTool"},{"id":"17521","type":"BoxZoomTool"},{"id":"17522","type":"SaveTool"},{"id":"17523","type":"ResetTool"},{"id":"17524","type":"HelpTool"}]},"id":"17525","type":"Toolbar"},{"attributes":{},"id":"17522","type":"SaveTool"},{"attributes":{},"id":"17507","type":"LinearScale"},{"attributes":{},"id":"17523","type":"ResetTool"},{"attributes":{},"id":"17544","type":"BasicTickFormatter"},{"attributes":{},"id":"17510","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17501","type":"DataRange1d"},{"attributes":{},"id":"17524","type":"HelpTool"},{"attributes":{},"id":"17546","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17509","type":"LinearAxis"}],"left":[{"id":"17514","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17509","type":"LinearAxis"},{"id":"17513","type":"Grid"},{"id":"17514","type":"LinearAxis"},{"id":"17518","type":"Grid"},{"id":"17527","type":"BoxAnnotation"},{"id":"17537","type":"GlyphRenderer"}],"title":{"id":"17540","type":"Title"},"toolbar":{"id":"17525","type":"Toolbar"},"x_range":{"id":"17501","type":"DataRange1d"},"x_scale":{"id":"17505","type":"LinearScale"},"y_range":{"id":"17503","type":"DataRange1d"},"y_scale":{"id":"17507","type":"LinearScale"}},"id":"17500","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17542","type":"BasicTickFormatter"},{"attributes":{},"id":"17547","type":"Selection"},{"attributes":{"overlay":{"id":"17527","type":"BoxAnnotation"}},"id":"17521","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"17500","subtype":"Figure","type":"Plot"},"ticker":{"id":"17515","type":"BasicTicker"}},"id":"17518","type":"Grid"},{"attributes":{"formatter":{"id":"17544","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"17500","subtype":"Figure","type":"Plot"},"ticker":{"id":"17515","type":"BasicTicker"}},"id":"17514","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17534","type":"ColumnDataSource"},"glyph":{"id":"17535","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17536","type":"Circle"},"selection_glyph":null,"view":{"id":"17538","type":"CDSView"}},"id":"17537","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"17500","subtype":"Figure","type":"Plot"},"ticker":{"id":"17510","type":"BasicTicker"}},"id":"17513","type":"Grid"},{"attributes":{},"id":"17505","type":"LinearScale"},{"attributes":{"source":{"id":"17534","type":"ColumnDataSource"}},"id":"17538","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17547","type":"Selection"},"selection_policy":{"id":"17546","type":"UnionRenderers"}},"id":"17534","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"17503","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17527","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17535","type":"Circle"},{"attributes":{},"id":"17515","type":"BasicTicker"},{"attributes":{"formatter":{"id":"17542","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"17500","subtype":"Figure","type":"Plot"},"ticker":{"id":"17510","type":"BasicTicker"}},"id":"17509","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"17540","type":"Title"},{"attributes":{},"id":"17520","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17536","type":"Circle"},{"attributes":{},"id":"17519","type":"PanTool"}],"root_ids":["17500"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4e104cf1-3976-4723-8dec-f82207310f53","roots":{"17500":"8945be42-1699-48b3-add1-7f2656556493"}}];
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