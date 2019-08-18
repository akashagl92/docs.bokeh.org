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
      };var element = document.getElementById("98e35015-f1d5-4a4f-ae87-17f28aea913f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '98e35015-f1d5-4a4f-ae87-17f28aea913f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a6fc62c8-4e19-4598-9116-836477fa6ffc":{"roots":{"references":[{"attributes":{"formatter":{"id":"5898","type":"BasicTickFormatter"},"plot":{"id":"5869","subtype":"Figure","type":"Plot"},"ticker":{"id":"5883","type":"BasicTicker"}},"id":"5882","type":"LinearAxis"},{"attributes":{},"id":"5883","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5887","type":"BoxAnnotation"},{"attributes":{},"id":"5900","type":"Selection"},{"attributes":{},"id":"5898","type":"BasicTickFormatter"},{"attributes":{},"id":"5878","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5869","subtype":"Figure","type":"Plot"},"ticker":{"id":"5883","type":"BasicTicker"}},"id":"5886","type":"Grid"},{"attributes":{"callback":null},"id":"5867","type":"Range1d"},{"attributes":{"callback":{"id":"5864","type":"CustomJS"},"overlay":{"id":"5887","type":"BoxAnnotation"}},"id":"5865","type":"BoxSelectTool"},{"attributes":{"source":{"id":"5863","type":"ColumnDataSource"}},"id":"5893","type":"CDSView"},{"attributes":{"callback":null,"data":{"height":[],"width":[],"x":[],"y":[]},"selected":{"id":"5900","type":"Selection"},"selection_policy":{"id":"5901","type":"UnionRenderers"}},"id":"5863","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5891","type":"Rect"},{"attributes":{},"id":"5875","type":"LinearScale"},{"attributes":{"data_source":{"id":"5863","type":"ColumnDataSource"},"glyph":{"id":"5891","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5891","type":"Rect"},"selection_glyph":{"id":"5891","type":"Rect"},"view":{"id":"5893","type":"CDSView"}},"id":"5892","type":"GlyphRenderer"},{"attributes":{},"id":"5901","type":"UnionRenderers"},{"attributes":{"plot":{"id":"5869","subtype":"Figure","type":"Plot"},"ticker":{"id":"5878","type":"BasicTicker"}},"id":"5881","type":"Grid"},{"attributes":{"callback":null},"id":"5866","type":"Range1d"},{"attributes":{"formatter":{"id":"5896","type":"BasicTickFormatter"},"plot":{"id":"5869","subtype":"Figure","type":"Plot"},"ticker":{"id":"5878","type":"BasicTicker"}},"id":"5877","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"5863","type":"ColumnDataSource"}},"code":"\\n        // get data source from Callback args\\n        var data = source.data;\\n\\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\\n        var geometry = cb_data[&#x27;geometry&#x27;];\\n\\n        /// calculate Rect attributes\\n        var width = geometry[&#x27;x1&#x27;] - geometry[&#x27;x0&#x27;];\\n        var height = geometry[&#x27;y1&#x27;] - geometry[&#x27;y0&#x27;];\\n        var x = geometry[&#x27;x0&#x27;] + width/2;\\n        var y = geometry[&#x27;y0&#x27;] + height/2;\\n\\n        /// update data source with new Rect attributes\\n        data[&#x27;x&#x27;].push(x);\\n        data[&#x27;y&#x27;].push(y);\\n        data[&#x27;width&#x27;].push(width);\\n        data[&#x27;height&#x27;].push(height);\\n\\n        // emit update of data source\\n        source.change.emit();\\n    "},"id":"5864","type":"CustomJS"},{"attributes":{"plot":null,"text":"Select Below"},"id":"5868","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5865","type":"BoxSelectTool"}]},"id":"5889","type":"Toolbar"},{"attributes":{"below":[{"id":"5877","type":"LinearAxis"}],"left":[{"id":"5882","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5877","type":"LinearAxis"},{"id":"5881","type":"Grid"},{"id":"5882","type":"LinearAxis"},{"id":"5886","type":"Grid"},{"id":"5887","type":"BoxAnnotation"},{"id":"5892","type":"GlyphRenderer"}],"title":{"id":"5868","type":"Title"},"toolbar":{"id":"5889","type":"Toolbar"},"x_range":{"id":"5866","type":"Range1d"},"x_scale":{"id":"5873","type":"LinearScale"},"y_range":{"id":"5867","type":"Range1d"},"y_scale":{"id":"5875","type":"LinearScale"}},"id":"5869","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5896","type":"BasicTickFormatter"},{"attributes":{},"id":"5873","type":"LinearScale"}],"root_ids":["5869"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"a6fc62c8-4e19-4598-9116-836477fa6ffc","roots":{"5869":"98e35015-f1d5-4a4f-ae87-17f28aea913f"}}];
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