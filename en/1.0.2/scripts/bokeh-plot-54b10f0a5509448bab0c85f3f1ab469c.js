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
      };var element = document.getElementById("efd39681-fe1f-4066-b711-e98363f850c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'efd39681-fe1f-4066-b711-e98363f850c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1b91f0f2-f423-476e-93ef-f25b77c6701f":{"roots":{"references":[{"attributes":{},"id":"11903","type":"BasicTicker"},{"attributes":{},"id":"11939","type":"UnionRenderers"},{"attributes":{},"id":"11913","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"11893","subtype":"Figure","type":"Plot"},"ticker":{"id":"11908","type":"BasicTicker"}},"id":"11911","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"11933","type":"Title"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11928","type":"Quad"},{"attributes":{},"id":"11900","type":"LinearScale"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"11940","type":"Selection"},"selection_policy":{"id":"11939","type":"UnionRenderers"}},"id":"11927","type":"ColumnDataSource"},{"attributes":{},"id":"11915","type":"SaveTool"},{"attributes":{"source":{"id":"11927","type":"ColumnDataSource"}},"id":"11931","type":"CDSView"},{"attributes":{},"id":"11898","type":"LinearScale"},{"attributes":{"plot":{"id":"11893","subtype":"Figure","type":"Plot"},"ticker":{"id":"11903","type":"BasicTicker"}},"id":"11906","type":"Grid"},{"attributes":{},"id":"11935","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11894","type":"DataRange1d"},{"attributes":{},"id":"11917","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11912","type":"PanTool"},{"id":"11913","type":"WheelZoomTool"},{"id":"11914","type":"BoxZoomTool"},{"id":"11915","type":"SaveTool"},{"id":"11916","type":"ResetTool"},{"id":"11917","type":"HelpTool"}]},"id":"11918","type":"Toolbar"},{"attributes":{"formatter":{"id":"11935","type":"BasicTickFormatter"},"plot":{"id":"11893","subtype":"Figure","type":"Plot"},"ticker":{"id":"11903","type":"BasicTicker"}},"id":"11902","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11896","type":"DataRange1d"},{"attributes":{"below":[{"id":"11902","type":"LinearAxis"}],"left":[{"id":"11907","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11902","type":"LinearAxis"},{"id":"11906","type":"Grid"},{"id":"11907","type":"LinearAxis"},{"id":"11911","type":"Grid"},{"id":"11920","type":"BoxAnnotation"},{"id":"11930","type":"GlyphRenderer"}],"title":{"id":"11933","type":"Title"},"toolbar":{"id":"11918","type":"Toolbar"},"x_range":{"id":"11894","type":"DataRange1d"},"x_scale":{"id":"11898","type":"LinearScale"},"y_range":{"id":"11896","type":"DataRange1d"},"y_scale":{"id":"11900","type":"LinearScale"}},"id":"11893","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"11937","type":"BasicTickFormatter"},"plot":{"id":"11893","subtype":"Figure","type":"Plot"},"ticker":{"id":"11908","type":"BasicTicker"}},"id":"11907","type":"LinearAxis"},{"attributes":{},"id":"11940","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11920","type":"BoxAnnotation"},{"attributes":{},"id":"11916","type":"ResetTool"},{"attributes":{"overlay":{"id":"11920","type":"BoxAnnotation"}},"id":"11914","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"11927","type":"ColumnDataSource"},"glyph":{"id":"11928","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11929","type":"Quad"},"selection_glyph":null,"view":{"id":"11931","type":"CDSView"}},"id":"11930","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11929","type":"Quad"},{"attributes":{},"id":"11908","type":"BasicTicker"},{"attributes":{},"id":"11912","type":"PanTool"},{"attributes":{},"id":"11937","type":"BasicTickFormatter"}],"root_ids":["11893"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"1b91f0f2-f423-476e-93ef-f25b77c6701f","roots":{"11893":"efd39681-fe1f-4066-b711-e98363f850c3"}}];
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