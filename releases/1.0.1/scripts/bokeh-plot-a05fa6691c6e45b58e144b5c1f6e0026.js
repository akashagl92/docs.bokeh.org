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
      };var element = document.getElementById("f360af38-49e4-4cf6-8071-38c67c1e78ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f360af38-49e4-4cf6-8071-38c67c1e78ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ca95533b-e863-4c7f-8927-9f0bdd3ef8cc":{"roots":{"references":[{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"13767","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"13725","subtype":"Figure","type":"Plot"},"ticker":{"id":"13735","type":"BasicTicker"}},"id":"13734","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13760","type":"Circle"},{"attributes":{},"id":"13771","type":"Selection"},{"attributes":{},"id":"13749","type":"HelpTool"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"13769","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"13725","subtype":"Figure","type":"Plot"},"ticker":{"id":"13740","type":"BasicTicker"}},"id":"13739","type":"LinearAxis"},{"attributes":{},"id":"13769","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"13728","type":"DataRange1d"},{"attributes":{},"id":"13735","type":"BasicTicker"},{"attributes":{"callback":null},"id":"13726","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13761","type":"Circle"},{"attributes":{"data_source":{"id":"13759","type":"ColumnDataSource"},"glyph":{"id":"13760","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13761","type":"Circle"},"selection_glyph":null,"view":{"id":"13763","type":"CDSView"}},"id":"13762","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13752","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"13752","type":"BoxAnnotation"}},"id":"13746","type":"BoxZoomTool"},{"attributes":{},"id":"13747","type":"SaveTool"},{"attributes":{},"id":"13744","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13744","type":"PanTool"},{"id":"13745","type":"WheelZoomTool"},{"id":"13746","type":"BoxZoomTool"},{"id":"13747","type":"SaveTool"},{"id":"13748","type":"ResetTool"},{"id":"13749","type":"HelpTool"}]},"id":"13750","type":"Toolbar"},{"attributes":{},"id":"13767","type":"BasicTickFormatter"},{"attributes":{},"id":"13740","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13771","type":"Selection"},"selection_policy":{"id":"13772","type":"UnionRenderers"}},"id":"13759","type":"ColumnDataSource"},{"attributes":{"source":{"id":"13759","type":"ColumnDataSource"}},"id":"13763","type":"CDSView"},{"attributes":{},"id":"13748","type":"ResetTool"},{"attributes":{},"id":"13732","type":"LinearScale"},{"attributes":{},"id":"13745","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"13725","subtype":"Figure","type":"Plot"},"ticker":{"id":"13735","type":"BasicTicker"}},"id":"13738","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"13765","type":"Title"},{"attributes":{"below":[{"id":"13734","type":"LinearAxis"}],"left":[{"id":"13739","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13734","type":"LinearAxis"},{"id":"13738","type":"Grid"},{"id":"13739","type":"LinearAxis"},{"id":"13743","type":"Grid"},{"id":"13752","type":"BoxAnnotation"},{"id":"13762","type":"GlyphRenderer"}],"title":{"id":"13765","type":"Title"},"toolbar":{"id":"13750","type":"Toolbar"},"x_range":{"id":"13726","type":"DataRange1d"},"x_scale":{"id":"13730","type":"LinearScale"},"y_range":{"id":"13728","type":"DataRange1d"},"y_scale":{"id":"13732","type":"LinearScale"}},"id":"13725","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13772","type":"UnionRenderers"},{"attributes":{},"id":"13730","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"13725","subtype":"Figure","type":"Plot"},"ticker":{"id":"13740","type":"BasicTicker"}},"id":"13743","type":"Grid"}],"root_ids":["13725"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"ca95533b-e863-4c7f-8927-9f0bdd3ef8cc","roots":{"13725":"f360af38-49e4-4cf6-8071-38c67c1e78ff"}}];
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