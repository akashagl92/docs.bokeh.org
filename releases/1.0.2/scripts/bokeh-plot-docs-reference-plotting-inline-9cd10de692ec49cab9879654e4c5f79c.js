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
      };var element = document.getElementById("849551da-2905-4942-b2c3-6a14491b054c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '849551da-2905-4942-b2c3-6a14491b054c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0c7510b7-ee1e-4559-ab38-972a8772a02b":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"33247","subtype":"Figure","type":"Plot"},"ticker":{"id":"33262","type":"BasicTicker"}},"id":"33265","type":"Grid"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33294","type":"Selection"},"selection_policy":{"id":"33293","type":"UnionRenderers"}},"id":"33281","type":"ColumnDataSource"},{"attributes":{},"id":"33294","type":"Selection"},{"attributes":{"source":{"id":"33281","type":"ColumnDataSource"}},"id":"33285","type":"CDSView"},{"attributes":{},"id":"33267","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"33287","type":"Title"},{"attributes":{"data_source":{"id":"33281","type":"ColumnDataSource"},"glyph":{"id":"33282","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33283","type":"Hex"},"selection_glyph":null,"view":{"id":"33285","type":"CDSView"}},"id":"33284","type":"GlyphRenderer"},{"attributes":{},"id":"33291","type":"BasicTickFormatter"},{"attributes":{},"id":"33289","type":"BasicTickFormatter"},{"attributes":{},"id":"33266","type":"PanTool"},{"attributes":{"formatter":{"id":"33291","type":"BasicTickFormatter"},"plot":{"id":"33247","subtype":"Figure","type":"Plot"},"ticker":{"id":"33262","type":"BasicTicker"}},"id":"33261","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33282","type":"Hex"},{"attributes":{"formatter":{"id":"33289","type":"BasicTickFormatter"},"plot":{"id":"33247","subtype":"Figure","type":"Plot"},"ticker":{"id":"33257","type":"BasicTicker"}},"id":"33256","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33274","type":"BoxAnnotation"},{"attributes":{},"id":"33252","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33266","type":"PanTool"},{"id":"33267","type":"WheelZoomTool"},{"id":"33268","type":"BoxZoomTool"},{"id":"33269","type":"SaveTool"},{"id":"33270","type":"ResetTool"},{"id":"33271","type":"HelpTool"}]},"id":"33272","type":"Toolbar"},{"attributes":{"overlay":{"id":"33274","type":"BoxAnnotation"}},"id":"33268","type":"BoxZoomTool"},{"attributes":{},"id":"33271","type":"HelpTool"},{"attributes":{},"id":"33262","type":"BasicTicker"},{"attributes":{"below":[{"id":"33256","type":"LinearAxis"}],"left":[{"id":"33261","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33256","type":"LinearAxis"},{"id":"33260","type":"Grid"},{"id":"33261","type":"LinearAxis"},{"id":"33265","type":"Grid"},{"id":"33274","type":"BoxAnnotation"},{"id":"33284","type":"GlyphRenderer"}],"title":{"id":"33287","type":"Title"},"toolbar":{"id":"33272","type":"Toolbar"},"x_range":{"id":"33248","type":"DataRange1d"},"x_scale":{"id":"33252","type":"LinearScale"},"y_range":{"id":"33250","type":"DataRange1d"},"y_scale":{"id":"33254","type":"LinearScale"}},"id":"33247","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33270","type":"ResetTool"},{"attributes":{},"id":"33254","type":"LinearScale"},{"attributes":{"callback":null},"id":"33250","type":"DataRange1d"},{"attributes":{"plot":{"id":"33247","subtype":"Figure","type":"Plot"},"ticker":{"id":"33257","type":"BasicTicker"}},"id":"33260","type":"Grid"},{"attributes":{},"id":"33269","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33283","type":"Hex"},{"attributes":{},"id":"33293","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"33248","type":"DataRange1d"},{"attributes":{},"id":"33257","type":"BasicTicker"}],"root_ids":["33247"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"0c7510b7-ee1e-4559-ab38-972a8772a02b","roots":{"33247":"849551da-2905-4942-b2c3-6a14491b054c"}}];
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