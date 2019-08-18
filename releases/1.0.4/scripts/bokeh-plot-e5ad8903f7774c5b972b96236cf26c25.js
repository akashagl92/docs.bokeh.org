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
      };var element = document.getElementById("a5bd36a7-a226-418a-b54e-927c3c962ead");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5bd36a7-a226-418a-b54e-927c3c962ead' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6d4ee6d7-d816-4c44-b084-9d384eabe8c1":{"roots":{"references":[{"attributes":{"callback":null},"id":"13229","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"13267","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13247","type":"PanTool"},{"id":"13248","type":"WheelZoomTool"},{"id":"13249","type":"BoxZoomTool"},{"id":"13250","type":"SaveTool"},{"id":"13251","type":"ResetTool"},{"id":"13252","type":"HelpTool"}]},"id":"13253","type":"Toolbar"},{"attributes":{"formatter":{"id":"13269","type":"BasicTickFormatter"},"plot":{"id":"13228","subtype":"Figure","type":"Plot"},"ticker":{"id":"13243","type":"BasicTicker"}},"id":"13242","type":"LinearAxis"},{"attributes":{},"id":"13273","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"13255","type":"BoxAnnotation"}},"id":"13249","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"13237","type":"LinearAxis"}],"left":[{"id":"13242","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13237","type":"LinearAxis"},{"id":"13241","type":"Grid"},{"id":"13242","type":"LinearAxis"},{"id":"13246","type":"Grid"},{"id":"13255","type":"BoxAnnotation"},{"id":"13265","type":"GlyphRenderer"}],"title":{"id":"13267","type":"Title"},"toolbar":{"id":"13253","type":"Toolbar"},"x_range":{"id":"13229","type":"DataRange1d"},"x_scale":{"id":"13233","type":"LinearScale"},"y_range":{"id":"13231","type":"DataRange1d"},"y_scale":{"id":"13235","type":"LinearScale"}},"id":"13228","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"13228","subtype":"Figure","type":"Plot"},"ticker":{"id":"13238","type":"BasicTicker"}},"id":"13241","type":"Grid"},{"attributes":{},"id":"13252","type":"HelpTool"},{"attributes":{},"id":"13243","type":"BasicTicker"},{"attributes":{},"id":"13235","type":"LinearScale"},{"attributes":{},"id":"13269","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]},"selected":{"id":"13274","type":"Selection"},"selection_policy":{"id":"13273","type":"UnionRenderers"}},"id":"13262","type":"ColumnDataSource"},{"attributes":{"source":{"id":"13262","type":"ColumnDataSource"}},"id":"13266","type":"CDSView"},{"attributes":{},"id":"13248","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"13228","subtype":"Figure","type":"Plot"},"ticker":{"id":"13243","type":"BasicTicker"}},"id":"13246","type":"Grid"},{"attributes":{"data_source":{"id":"13262","type":"ColumnDataSource"},"glyph":{"id":"13263","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13264","type":"VBar"},"selection_glyph":null,"view":{"id":"13266","type":"CDSView"}},"id":"13265","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"13263","type":"VBar"},{"attributes":{},"id":"13271","type":"BasicTickFormatter"},{"attributes":{},"id":"13238","type":"BasicTicker"},{"attributes":{},"id":"13250","type":"SaveTool"},{"attributes":{},"id":"13274","type":"Selection"},{"attributes":{"formatter":{"id":"13271","type":"BasicTickFormatter"},"plot":{"id":"13228","subtype":"Figure","type":"Plot"},"ticker":{"id":"13238","type":"BasicTicker"}},"id":"13237","type":"LinearAxis"},{"attributes":{"callback":null},"id":"13231","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13255","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"13264","type":"VBar"},{"attributes":{},"id":"13233","type":"LinearScale"},{"attributes":{},"id":"13251","type":"ResetTool"},{"attributes":{},"id":"13247","type":"PanTool"}],"root_ids":["13228"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"6d4ee6d7-d816-4c44-b084-9d384eabe8c1","roots":{"13228":"a5bd36a7-a226-418a-b54e-927c3c962ead"}}];
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