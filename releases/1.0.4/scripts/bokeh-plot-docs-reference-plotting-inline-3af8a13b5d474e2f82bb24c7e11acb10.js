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
      };var element = document.getElementById("eaea1acc-1174-485f-a4e7-213e1bb11930");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eaea1acc-1174-485f-a4e7-213e1bb11930' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"8ceeb751-e59e-49c7-bb4a-1fb6b5393a4a":{"roots":{"references":[{"attributes":{},"id":"34452","type":"BasicTicker"},{"attributes":{},"id":"34461","type":"HelpTool"},{"attributes":{},"id":"34483","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"34437","subtype":"Figure","type":"Plot"},"ticker":{"id":"34452","type":"BasicTicker"}},"id":"34455","type":"Grid"},{"attributes":{"callback":null},"id":"34438","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34456","type":"PanTool"},{"id":"34457","type":"WheelZoomTool"},{"id":"34458","type":"BoxZoomTool"},{"id":"34459","type":"SaveTool"},{"id":"34460","type":"ResetTool"},{"id":"34461","type":"HelpTool"}]},"id":"34462","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34473","type":"Square"},{"attributes":{"callback":null},"id":"34440","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34464","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34472","type":"Square"},{"attributes":{},"id":"34442","type":"LinearScale"},{"attributes":{"data_source":{"id":"34471","type":"ColumnDataSource"},"glyph":{"id":"34472","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34473","type":"Square"},"selection_glyph":null,"view":{"id":"34475","type":"CDSView"}},"id":"34474","type":"GlyphRenderer"},{"attributes":{},"id":"34444","type":"LinearScale"},{"attributes":{"source":{"id":"34471","type":"ColumnDataSource"}},"id":"34475","type":"CDSView"},{"attributes":{},"id":"34456","type":"PanTool"},{"attributes":{"formatter":{"id":"34480","type":"BasicTickFormatter"},"plot":{"id":"34437","subtype":"Figure","type":"Plot"},"ticker":{"id":"34447","type":"BasicTicker"}},"id":"34446","type":"LinearAxis"},{"attributes":{},"id":"34457","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"34476","type":"Title"},{"attributes":{},"id":"34447","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34464","type":"BoxAnnotation"}},"id":"34458","type":"BoxZoomTool"},{"attributes":{},"id":"34478","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34437","subtype":"Figure","type":"Plot"},"ticker":{"id":"34447","type":"BasicTicker"}},"id":"34450","type":"Grid"},{"attributes":{},"id":"34459","type":"SaveTool"},{"attributes":{"below":[{"id":"34446","type":"LinearAxis"}],"left":[{"id":"34451","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34446","type":"LinearAxis"},{"id":"34450","type":"Grid"},{"id":"34451","type":"LinearAxis"},{"id":"34455","type":"Grid"},{"id":"34464","type":"BoxAnnotation"},{"id":"34474","type":"GlyphRenderer"}],"title":{"id":"34476","type":"Title"},"toolbar":{"id":"34462","type":"Toolbar"},"x_range":{"id":"34438","type":"DataRange1d"},"x_scale":{"id":"34442","type":"LinearScale"},"y_range":{"id":"34440","type":"DataRange1d"},"y_scale":{"id":"34444","type":"LinearScale"}},"id":"34437","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34480","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"34478","type":"BasicTickFormatter"},"plot":{"id":"34437","subtype":"Figure","type":"Plot"},"ticker":{"id":"34452","type":"BasicTicker"}},"id":"34451","type":"LinearAxis"},{"attributes":{},"id":"34460","type":"ResetTool"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34483","type":"Selection"},"selection_policy":{"id":"34482","type":"UnionRenderers"}},"id":"34471","type":"ColumnDataSource"},{"attributes":{},"id":"34482","type":"UnionRenderers"}],"root_ids":["34437"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"8ceeb751-e59e-49c7-bb4a-1fb6b5393a4a","roots":{"34437":"eaea1acc-1174-485f-a4e7-213e1bb11930"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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