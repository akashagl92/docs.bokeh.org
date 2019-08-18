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
      };var element = document.getElementById("35f077af-61b7-4dc8-9620-e0329b057f8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35f077af-61b7-4dc8-9620-e0329b057f8c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1223407b-a341-4d3f-b742-aa3401579f33":{"roots":{"references":[{"attributes":{"below":[{"id":"12704","type":"LinearAxis"},{"id":"12734","type":"Title"}],"left":[{"id":"12709","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12704","type":"LinearAxis"},{"id":"12708","type":"Grid"},{"id":"12709","type":"LinearAxis"},{"id":"12713","type":"Grid"},{"id":"12722","type":"BoxAnnotation"},{"id":"12732","type":"GlyphRenderer"},{"id":"12734","type":"Title"}],"title":{"id":"12693","type":"Title"},"title_location":"left","toolbar":{"id":"12720","type":"Toolbar"},"x_range":{"id":"12696","type":"DataRange1d"},"x_scale":{"id":"12700","type":"LinearScale"},"y_range":{"id":"12698","type":"DataRange1d"},"y_scale":{"id":"12702","type":"LinearScale"}},"id":"12694","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12742","type":"UnionRenderers"},{"attributes":{},"id":"12710","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12741","type":"Selection"},"selection_policy":{"id":"12742","type":"UnionRenderers"}},"id":"12729","type":"ColumnDataSource"},{"attributes":{},"id":"12739","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Left Title"},"id":"12693","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12714","type":"PanTool"},{"id":"12715","type":"WheelZoomTool"},{"id":"12716","type":"BoxZoomTool"},{"id":"12717","type":"SaveTool"},{"id":"12718","type":"ResetTool"},{"id":"12719","type":"HelpTool"}]},"id":"12720","type":"Toolbar"},{"attributes":{},"id":"12737","type":"BasicTickFormatter"},{"attributes":{},"id":"12741","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"12694","subtype":"Figure","type":"Plot"},"ticker":{"id":"12710","type":"BasicTicker"}},"id":"12713","type":"Grid"},{"attributes":{"data_source":{"id":"12729","type":"ColumnDataSource"},"glyph":{"id":"12730","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12731","type":"Circle"},"selection_glyph":null,"view":{"id":"12733","type":"CDSView"}},"id":"12732","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"12696","type":"DataRange1d"},{"attributes":{},"id":"12715","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"12698","type":"DataRange1d"},{"attributes":{"plot":{"id":"12694","subtype":"Figure","type":"Plot"},"ticker":{"id":"12705","type":"BasicTicker"}},"id":"12708","type":"Grid"},{"attributes":{},"id":"12717","type":"SaveTool"},{"attributes":{"align":"center","plot":{"id":"12694","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"12734","type":"Title"},{"attributes":{},"id":"12700","type":"LinearScale"},{"attributes":{"source":{"id":"12729","type":"ColumnDataSource"}},"id":"12733","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12731","type":"Circle"},{"attributes":{},"id":"12702","type":"LinearScale"},{"attributes":{},"id":"12714","type":"PanTool"},{"attributes":{},"id":"12719","type":"HelpTool"},{"attributes":{"formatter":{"id":"12739","type":"BasicTickFormatter"},"plot":{"id":"12694","subtype":"Figure","type":"Plot"},"ticker":{"id":"12710","type":"BasicTicker"}},"id":"12709","type":"LinearAxis"},{"attributes":{"formatter":{"id":"12737","type":"BasicTickFormatter"},"plot":{"id":"12694","subtype":"Figure","type":"Plot"},"ticker":{"id":"12705","type":"BasicTicker"}},"id":"12704","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12722","type":"BoxAnnotation"},{"attributes":{},"id":"12718","type":"ResetTool"},{"attributes":{},"id":"12705","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12730","type":"Circle"},{"attributes":{"overlay":{"id":"12722","type":"BoxAnnotation"}},"id":"12716","type":"BoxZoomTool"}],"root_ids":["12694"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"1223407b-a341-4d3f-b742-aa3401579f33","roots":{"12694":"35f077af-61b7-4dc8-9620-e0329b057f8c"}}];
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