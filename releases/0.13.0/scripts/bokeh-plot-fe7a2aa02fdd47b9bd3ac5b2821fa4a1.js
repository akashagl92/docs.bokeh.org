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
      };var element = document.getElementById("9f987703-095f-45ac-934d-3b642e3cfff9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f987703-095f-45ac-934d-3b642e3cfff9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"ff358420-3a4d-4f96-a06f-ea2defe49bca":{"roots":{"references":[{"attributes":{},"id":"04f54004-151d-4390-b41d-a859d5e1c8a6","type":"WheelZoomTool"},{"attributes":{},"id":"a2f098c8-ace1-4f64-8ced-7c85f8b6d803","type":"HelpTool"},{"attributes":{},"id":"2bddbea4-6fe9-4594-85c6-68a8f2094f21","type":"LinearScale"},{"attributes":{},"id":"6615d108-d186-4f54-a383-289f3a1fc339","type":"PanTool"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"c406b56d-c558-4ef7-ac4c-dac084d0ab31","type":"Title"},{"attributes":{"formatter":{"id":"97bb41e8-1ce8-4d97-af09-a052bcf7019e","type":"BasicTickFormatter"},"plot":{"id":"92ea8f67-cba8-4f2e-ac75-181524c1d52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7eb695a-2b31-4be3-b875-820f46fb931c","type":"BasicTicker"}},"id":"d2af9040-9eba-42ce-ab87-72a6c8e6291c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"69a5635a-252f-4be8-abfe-edd26a9aec3e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"d5027259-fc8e-4fdc-8d29-150405df7ebe","type":"DataRange1d"},{"attributes":{"data_source":{"id":"72801888-4b48-45a1-a127-86a689f67a33","type":"ColumnDataSource"},"glyph":{"id":"96e29c5e-0bab-4aad-b19c-0cab69e86303","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70b8b89e-8266-46c1-9e60-7ca9672098f2","type":"Circle"},"selection_glyph":null,"view":{"id":"940b6639-dee0-43f9-b684-9b9b3f34898d","type":"CDSView"}},"id":"04405b2f-89b7-439d-88eb-dba1dc460859","type":"GlyphRenderer"},{"attributes":{},"id":"97bb41e8-1ce8-4d97-af09-a052bcf7019e","type":"BasicTickFormatter"},{"attributes":{},"id":"57a8b824-f3b9-4b79-bb6c-c7df947c389d","type":"SaveTool"},{"attributes":{"source":{"id":"72801888-4b48-45a1-a127-86a689f67a33","type":"ColumnDataSource"}},"id":"940b6639-dee0-43f9-b684-9b9b3f34898d","type":"CDSView"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"ba8edf41-ef2a-45df-af60-60278bce0828","type":"Selection"},"selection_policy":{"id":"c2aeafd0-5ee0-4729-9273-b565d3e8cbb1","type":"UnionRenderers"}},"id":"72801888-4b48-45a1-a127-86a689f67a33","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1a4495e9-a599-4f8f-8ab6-ca96a2e6fff7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"92ea8f67-cba8-4f2e-ac75-181524c1d52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"265712eb-8456-4659-90d8-27375f10d0b1","type":"BasicTicker"}},"id":"b4c7c68f-d9e8-424e-822b-3f84ea613eed","type":"Grid"},{"attributes":{},"id":"955fda3b-37fb-4fa5-acc7-dd9055e3ac70","type":"LinearScale"},{"attributes":{},"id":"c2aeafd0-5ee0-4729-9273-b565d3e8cbb1","type":"UnionRenderers"},{"attributes":{},"id":"d38fd3cb-8de1-428e-acce-9c8e4c963665","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"92ea8f67-cba8-4f2e-ac75-181524c1d52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7eb695a-2b31-4be3-b875-820f46fb931c","type":"BasicTicker"}},"id":"989162f0-d118-4f17-93f0-a822d6fb2af3","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6615d108-d186-4f54-a383-289f3a1fc339","type":"PanTool"},{"id":"04f54004-151d-4390-b41d-a859d5e1c8a6","type":"WheelZoomTool"},{"id":"3d72beec-2008-41a3-b262-525f7e2b7756","type":"BoxZoomTool"},{"id":"57a8b824-f3b9-4b79-bb6c-c7df947c389d","type":"SaveTool"},{"id":"71c78ba9-e9a8-4803-bc8f-7230aed3e15f","type":"ResetTool"},{"id":"a2f098c8-ace1-4f64-8ced-7c85f8b6d803","type":"HelpTool"},{"id":"5156f1d9-e829-4b78-b96c-10fb8ab9ef32","type":"HoverTool"}]},"id":"4d073bde-dd9d-458f-a59e-ed075a561354","type":"Toolbar"},{"attributes":{},"id":"71c78ba9-e9a8-4803-bc8f-7230aed3e15f","type":"ResetTool"},{"attributes":{"overlay":{"id":"1a4495e9-a599-4f8f-8ab6-ca96a2e6fff7","type":"BoxAnnotation"}},"id":"3d72beec-2008-41a3-b262-525f7e2b7756","type":"BoxZoomTool"},{"attributes":{},"id":"265712eb-8456-4659-90d8-27375f10d0b1","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"96e29c5e-0bab-4aad-b19c-0cab69e86303","type":"Circle"},{"attributes":{"formatter":{"id":"d38fd3cb-8de1-428e-acce-9c8e4c963665","type":"BasicTickFormatter"},"plot":{"id":"92ea8f67-cba8-4f2e-ac75-181524c1d52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"265712eb-8456-4659-90d8-27375f10d0b1","type":"BasicTicker"}},"id":"e9151755-8498-4576-88f5-f534bf97b6ce","type":"LinearAxis"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"5156f1d9-e829-4b78-b96c-10fb8ab9ef32","type":"HoverTool"},{"attributes":{"below":[{"id":"e9151755-8498-4576-88f5-f534bf97b6ce","type":"LinearAxis"}],"left":[{"id":"d2af9040-9eba-42ce-ab87-72a6c8e6291c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e9151755-8498-4576-88f5-f534bf97b6ce","type":"LinearAxis"},{"id":"b4c7c68f-d9e8-424e-822b-3f84ea613eed","type":"Grid"},{"id":"d2af9040-9eba-42ce-ab87-72a6c8e6291c","type":"LinearAxis"},{"id":"989162f0-d118-4f17-93f0-a822d6fb2af3","type":"Grid"},{"id":"1a4495e9-a599-4f8f-8ab6-ca96a2e6fff7","type":"BoxAnnotation"},{"id":"04405b2f-89b7-439d-88eb-dba1dc460859","type":"GlyphRenderer"}],"title":{"id":"c406b56d-c558-4ef7-ac4c-dac084d0ab31","type":"Title"},"toolbar":{"id":"4d073bde-dd9d-458f-a59e-ed075a561354","type":"Toolbar"},"x_range":{"id":"69a5635a-252f-4be8-abfe-edd26a9aec3e","type":"DataRange1d"},"x_scale":{"id":"955fda3b-37fb-4fa5-acc7-dd9055e3ac70","type":"LinearScale"},"y_range":{"id":"d5027259-fc8e-4fdc-8d29-150405df7ebe","type":"DataRange1d"},"y_scale":{"id":"2bddbea4-6fe9-4594-85c6-68a8f2094f21","type":"LinearScale"}},"id":"92ea8f67-cba8-4f2e-ac75-181524c1d52a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ba8edf41-ef2a-45df-af60-60278bce0828","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"70b8b89e-8266-46c1-9e60-7ca9672098f2","type":"Circle"},{"attributes":{},"id":"a7eb695a-2b31-4be3-b875-820f46fb931c","type":"BasicTicker"}],"root_ids":["92ea8f67-cba8-4f2e-ac75-181524c1d52a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ff358420-3a4d-4f96-a06f-ea2defe49bca","roots":{"92ea8f67-cba8-4f2e-ac75-181524c1d52a":"9f987703-095f-45ac-934d-3b642e3cfff9"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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