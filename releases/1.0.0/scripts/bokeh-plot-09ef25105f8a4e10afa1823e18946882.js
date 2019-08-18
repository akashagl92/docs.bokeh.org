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
      };var element = document.getElementById("422abb91-55c0-4293-995a-04cabf04bf30");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '422abb91-55c0-4293-995a-04cabf04bf30' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"9c3ea675-4658-4af8-ab89-ae1c10d161ff":{"roots":{"references":[{"attributes":{"data_source":{"id":"10533","type":"ColumnDataSource"},"glyph":{"id":"10534","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10535","type":"MultiLine"},"selection_glyph":null,"view":{"id":"10537","type":"CDSView"}},"id":"10536","type":"GlyphRenderer"},{"attributes":{},"id":"10518","type":"PanTool"},{"attributes":{"below":[{"id":"10508","type":"LinearAxis"}],"left":[{"id":"10513","type":"LinearAxis"}],"renderers":[{"id":"10508","type":"LinearAxis"},{"id":"10512","type":"Grid"},{"id":"10513","type":"LinearAxis"},{"id":"10517","type":"Grid"},{"id":"10526","type":"BoxAnnotation"},{"id":"10536","type":"GlyphRenderer"},{"id":"10540","type":"Legend"}],"title":{"id":"10542","type":"Title"},"toolbar":{"id":"10524","type":"Toolbar"},"x_range":{"id":"10500","type":"DataRange1d"},"x_scale":{"id":"10504","type":"LinearScale"},"y_range":{"id":"10502","type":"DataRange1d"},"y_scale":{"id":"10506","type":"LinearScale"}},"id":"10499","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10519","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"10526","type":"BoxAnnotation"}},"id":"10520","type":"BoxZoomTool"},{"attributes":{},"id":"10549","type":"UnionRenderers"},{"attributes":{},"id":"10521","type":"SaveTool"},{"attributes":{},"id":"10522","type":"ResetTool"},{"attributes":{},"id":"10523","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10518","type":"PanTool"},{"id":"10519","type":"WheelZoomTool"},{"id":"10520","type":"BoxZoomTool"},{"id":"10521","type":"SaveTool"},{"id":"10522","type":"ResetTool"},{"id":"10523","type":"HelpTool"}]},"id":"10524","type":"Toolbar"},{"attributes":{"plot":{"id":"10499","subtype":"Figure","type":"Plot"},"ticker":{"id":"10509","type":"BasicTicker"}},"id":"10512","type":"Grid"},{"attributes":{},"id":"10546","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10535","type":"MultiLine"},{"attributes":{"formatter":{"id":"10546","type":"BasicTickFormatter"},"plot":{"id":"10499","subtype":"Figure","type":"Plot"},"ticker":{"id":"10514","type":"BasicTicker"}},"id":"10513","type":"LinearAxis"},{"attributes":{},"id":"10514","type":"BasicTicker"},{"attributes":{"callback":null},"id":"10500","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"10499","subtype":"Figure","type":"Plot"},"ticker":{"id":"10514","type":"BasicTicker"}},"id":"10517","type":"Grid"},{"attributes":{"callback":null},"id":"10502","type":"DataRange1d"},{"attributes":{},"id":"10548","type":"Selection"},{"attributes":{},"id":"10504","type":"LinearScale"},{"attributes":{},"id":"10506","type":"LinearScale"},{"attributes":{"source":{"id":"10533","type":"ColumnDataSource"}},"id":"10537","type":"CDSView"},{"attributes":{"index":0,"label":{"value":"orange"},"renderers":[{"id":"10536","type":"GlyphRenderer"}]},"id":"10538","type":"LegendItem"},{"attributes":{"formatter":{"id":"10544","type":"BasicTickFormatter"},"plot":{"id":"10499","subtype":"Figure","type":"Plot"},"ticker":{"id":"10509","type":"BasicTicker"}},"id":"10508","type":"LinearAxis"},{"attributes":{},"id":"10544","type":"BasicTickFormatter"},{"attributes":{},"id":"10509","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10526","type":"BoxAnnotation"},{"attributes":{"index":1,"label":{"value":"red"},"renderers":[{"id":"10536","type":"GlyphRenderer"}]},"id":"10539","type":"LegendItem"},{"attributes":{"items":[{"id":"10538","type":"LegendItem"},{"id":"10539","type":"LegendItem"}],"plot":{"id":"10499","subtype":"Figure","type":"Plot"}},"id":"10540","type":"Legend"},{"attributes":{"plot":null,"text":""},"id":"10542","type":"Title"},{"attributes":{"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10534","type":"MultiLine"},{"attributes":{"callback":null,"data":{"line_color":["orange","red"],"xs":[[1,2,3],[1,2,3]],"ys":[[1,3,2],[3,4,3]]},"selected":{"id":"10548","type":"Selection"},"selection_policy":{"id":"10549","type":"UnionRenderers"}},"id":"10533","type":"ColumnDataSource"}],"root_ids":["10499"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"9c3ea675-4658-4af8-ab89-ae1c10d161ff","roots":{"10499":"422abb91-55c0-4293-995a-04cabf04bf30"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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