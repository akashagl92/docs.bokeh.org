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
      };var element = document.getElementById("ceea6ad1-ced9-45a2-8f09-3cbf964f72c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ceea6ad1-ced9-45a2-8f09-3cbf964f72c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e0aa2557-d6a2-4ba3-92f6-abd4a2896ff3":{"roots":{"references":[{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ae0aba16-be7c-48ff-840e-ddd4e0f3e77f","type":"Line"},{"attributes":{"source":{"id":"caaa8db7-1197-495e-a914-af8a4ba2758d","type":"ColumnDataSource"}},"id":"cea64da1-0886-42a2-b48b-f92635a3f222","type":"CDSView"},{"attributes":{},"id":"0e26f4ee-b2b3-491e-b254-4409a96ad074","type":"LinearScale"},{"attributes":{},"id":"36d96a7d-389a-4fbe-826d-01a095c72f78","type":"Selection"},{"attributes":{"plot":{"id":"bbdb2d01-9f26-488f-9910-d0e120d3b3d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0736cf95-5cb0-429e-84ec-e1ceaf8da765","type":"BasicTicker"}},"id":"0a86b419-f7ec-498a-9904-a2909d05798d","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"36d96a7d-389a-4fbe-826d-01a095c72f78","type":"Selection"},"selection_policy":{"id":"ffc82b1d-7329-4367-b011-dda306019897","type":"UnionRenderers"}},"id":"caaa8db7-1197-495e-a914-af8a4ba2758d","type":"ColumnDataSource"},{"attributes":{},"id":"ffc82b1d-7329-4367-b011-dda306019897","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"bbdb2d01-9f26-488f-9910-d0e120d3b3d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b4ed77e-630b-47f1-9e52-20b030c8b012","type":"BasicTicker"}},"id":"e4c07eba-4aa3-4e96-b4c7-95a38746436a","type":"Grid"},{"attributes":{},"id":"47e29a2b-0ed0-4664-a488-2e697a772b31","type":"HelpTool"},{"attributes":{},"id":"9813b0b8-3a6e-4940-84ed-4abec1c19122","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0ed8863a-5019-4c93-8396-b9045100709d","type":"Line"},{"attributes":{},"id":"95be23b4-f686-4844-adf3-2b53f6deb1cb","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"ded3e4b0-a366-4593-b67d-896f00b7cd81","type":"BasicTickFormatter"},"plot":{"id":"bbdb2d01-9f26-488f-9910-d0e120d3b3d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b4ed77e-630b-47f1-9e52-20b030c8b012","type":"BasicTicker"}},"id":"4d4bd03d-0780-4e1f-b275-094ed2fc4d81","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9813b0b8-3a6e-4940-84ed-4abec1c19122","type":"PanTool"},{"id":"95be23b4-f686-4844-adf3-2b53f6deb1cb","type":"WheelZoomTool"},{"id":"368dad9d-abbd-438c-9693-7cadab4e3ac4","type":"BoxZoomTool"},{"id":"7be2496a-ef14-40c3-a008-3e6642f3e69a","type":"SaveTool"},{"id":"a8c406d5-2018-4a35-9df7-bf7596069ab5","type":"ResetTool"},{"id":"47e29a2b-0ed0-4664-a488-2e697a772b31","type":"HelpTool"}]},"id":"693be8ed-7632-47ea-8758-da66956a7ebe","type":"Toolbar"},{"attributes":{"below":[{"id":"091eed7c-bc88-43fc-97c6-43993b7e1420","type":"LinearAxis"}],"left":[{"id":"4d4bd03d-0780-4e1f-b275-094ed2fc4d81","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"091eed7c-bc88-43fc-97c6-43993b7e1420","type":"LinearAxis"},{"id":"0a86b419-f7ec-498a-9904-a2909d05798d","type":"Grid"},{"id":"4d4bd03d-0780-4e1f-b275-094ed2fc4d81","type":"LinearAxis"},{"id":"e4c07eba-4aa3-4e96-b4c7-95a38746436a","type":"Grid"},{"id":"79d7c665-f176-420e-9d61-b3d51bc1e526","type":"BoxAnnotation"},{"id":"3418589f-8cce-4214-b04c-b6203e2d1fb2","type":"GlyphRenderer"}],"title":{"id":"f174b422-db28-4a96-bc6d-d9753e1f068d","type":"Title"},"toolbar":{"id":"693be8ed-7632-47ea-8758-da66956a7ebe","type":"Toolbar"},"x_range":{"id":"921dd05e-2d23-423f-9f13-9f8af1a5caaa","type":"DataRange1d"},"x_scale":{"id":"1afc3e4b-0a22-460d-bdf0-4d3d707605a3","type":"LinearScale"},"y_range":{"id":"215bb5e9-087f-40b0-8407-5ed57894504e","type":"DataRange1d"},"y_scale":{"id":"0e26f4ee-b2b3-491e-b254-4409a96ad074","type":"LinearScale"}},"id":"bbdb2d01-9f26-488f-9910-d0e120d3b3d2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"921dd05e-2d23-423f-9f13-9f8af1a5caaa","type":"DataRange1d"},{"attributes":{"overlay":{"id":"79d7c665-f176-420e-9d61-b3d51bc1e526","type":"BoxAnnotation"}},"id":"368dad9d-abbd-438c-9693-7cadab4e3ac4","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"caaa8db7-1197-495e-a914-af8a4ba2758d","type":"ColumnDataSource"},"glyph":{"id":"ae0aba16-be7c-48ff-840e-ddd4e0f3e77f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ed8863a-5019-4c93-8396-b9045100709d","type":"Line"},"selection_glyph":null,"view":{"id":"cea64da1-0886-42a2-b48b-f92635a3f222","type":"CDSView"}},"id":"3418589f-8cce-4214-b04c-b6203e2d1fb2","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79d7c665-f176-420e-9d61-b3d51bc1e526","type":"BoxAnnotation"},{"attributes":{},"id":"0736cf95-5cb0-429e-84ec-e1ceaf8da765","type":"BasicTicker"},{"attributes":{"callback":null},"id":"215bb5e9-087f-40b0-8407-5ed57894504e","type":"DataRange1d"},{"attributes":{},"id":"8e263565-0641-4fb0-b02a-e4a9e0c3b627","type":"BasicTickFormatter"},{"attributes":{},"id":"5b4ed77e-630b-47f1-9e52-20b030c8b012","type":"BasicTicker"},{"attributes":{},"id":"1afc3e4b-0a22-460d-bdf0-4d3d707605a3","type":"LinearScale"},{"attributes":{"formatter":{"id":"8e263565-0641-4fb0-b02a-e4a9e0c3b627","type":"BasicTickFormatter"},"plot":{"id":"bbdb2d01-9f26-488f-9910-d0e120d3b3d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0736cf95-5cb0-429e-84ec-e1ceaf8da765","type":"BasicTicker"}},"id":"091eed7c-bc88-43fc-97c6-43993b7e1420","type":"LinearAxis"},{"attributes":{},"id":"ded3e4b0-a366-4593-b67d-896f00b7cd81","type":"BasicTickFormatter"},{"attributes":{},"id":"7be2496a-ef14-40c3-a008-3e6642f3e69a","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"f174b422-db28-4a96-bc6d-d9753e1f068d","type":"Title"},{"attributes":{},"id":"a8c406d5-2018-4a35-9df7-bf7596069ab5","type":"ResetTool"}],"root_ids":["bbdb2d01-9f26-488f-9910-d0e120d3b3d2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e0aa2557-d6a2-4ba3-92f6-abd4a2896ff3","roots":{"bbdb2d01-9f26-488f-9910-d0e120d3b3d2":"ceea6ad1-ced9-45a2-8f09-3cbf964f72c3"}}];
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