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
      };var element = document.getElementById("e79346ab-b26c-4fab-9e76-fe1e09f24de7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e79346ab-b26c-4fab-9e76-fe1e09f24de7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"753ae9f2-fbdd-44eb-8f6c-38a54de53077":{"roots":{"references":[{"attributes":{},"id":"33594","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33580","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33598","type":"PanTool"},{"id":"33599","type":"WheelZoomTool"},{"id":"33600","type":"BoxZoomTool"},{"id":"33601","type":"SaveTool"},{"id":"33602","type":"ResetTool"},{"id":"33603","type":"HelpTool"}]},"id":"33604","type":"Toolbar"},{"attributes":{"below":[{"id":"33588","type":"LinearAxis"}],"left":[{"id":"33593","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33588","type":"LinearAxis"},{"id":"33592","type":"Grid"},{"id":"33593","type":"LinearAxis"},{"id":"33597","type":"Grid"},{"id":"33606","type":"BoxAnnotation"},{"id":"33616","type":"GlyphRenderer"}],"title":{"id":"33577","type":"Title"},"toolbar":{"id":"33604","type":"Toolbar"},"x_range":{"id":"33580","type":"DataRange1d"},"x_scale":{"id":"33584","type":"LinearScale"},"y_range":{"id":"33582","type":"DataRange1d"},"y_scale":{"id":"33586","type":"LinearScale"}},"id":"33578","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"33578","subtype":"Figure","type":"Plot"},"ticker":{"id":"33594","type":"BasicTicker"}},"id":"33597","type":"Grid"},{"attributes":{"data_source":{"id":"33613","type":"ColumnDataSource"},"glyph":{"id":"33614","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33615","type":"Line"},"selection_glyph":null,"view":{"id":"33617","type":"CDSView"}},"id":"33616","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33620","type":"BasicTickFormatter"},"plot":{"id":"33578","subtype":"Figure","type":"Plot"},"ticker":{"id":"33589","type":"BasicTicker"}},"id":"33588","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33606","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33615","type":"Line"},{"attributes":{"callback":null},"id":"33582","type":"DataRange1d"},{"attributes":{"source":{"id":"33613","type":"ColumnDataSource"}},"id":"33617","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33614","type":"Line"},{"attributes":{},"id":"33584","type":"LinearScale"},{"attributes":{},"id":"33586","type":"LinearScale"},{"attributes":{},"id":"33620","type":"BasicTickFormatter"},{"attributes":{},"id":"33598","type":"PanTool"},{"attributes":{},"id":"33589","type":"BasicTicker"},{"attributes":{},"id":"33622","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33606","type":"BoxAnnotation"}},"id":"33600","type":"BoxZoomTool"},{"attributes":{},"id":"33601","type":"SaveTool"},{"attributes":{},"id":"33624","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"33625","type":"Selection"},"selection_policy":{"id":"33624","type":"UnionRenderers"}},"id":"33613","type":"ColumnDataSource"},{"attributes":{},"id":"33599","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"33578","subtype":"Figure","type":"Plot"},"ticker":{"id":"33589","type":"BasicTicker"}},"id":"33592","type":"Grid"},{"attributes":{},"id":"33625","type":"Selection"},{"attributes":{},"id":"33602","type":"ResetTool"},{"attributes":{"formatter":{"id":"33622","type":"BasicTickFormatter"},"plot":{"id":"33578","subtype":"Figure","type":"Plot"},"ticker":{"id":"33594","type":"BasicTicker"}},"id":"33593","type":"LinearAxis"},{"attributes":{},"id":"33603","type":"HelpTool"},{"attributes":{"plot":null,"text":"line"},"id":"33577","type":"Title"}],"root_ids":["33578"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"753ae9f2-fbdd-44eb-8f6c-38a54de53077","roots":{"33578":"e79346ab-b26c-4fab-9e76-fe1e09f24de7"}}];
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