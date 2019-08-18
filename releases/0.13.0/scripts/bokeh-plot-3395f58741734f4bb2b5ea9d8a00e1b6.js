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
      };var element = document.getElementById("714c4b93-66a1-4ec5-b964-4fbfb9763962");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '714c4b93-66a1-4ec5-b964-4fbfb9763962' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"afcb7463-ed38-4010-9c13-6688668713db":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"d3a5faf5-3d1a-4dde-ac11-78691ad64559","type":"Title"},{"attributes":{"callback":null},"id":"6e456c7a-36e8-47fc-b994-46d4dd0e5d7d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5829d364-79b7-4d09-af4e-aa9893889e6c","type":"PanTool"},{"id":"e66d018b-c24e-47f6-b054-d6faac1c95ee","type":"WheelZoomTool"},{"id":"fa23c728-95c3-4dd4-b416-5c8fc28745b6","type":"BoxZoomTool"},{"id":"70975cd8-8524-44a1-838b-50fa4002b40f","type":"SaveTool"},{"id":"eae43b2c-c3b6-4623-b622-74be0b2e6489","type":"ResetTool"},{"id":"173d3e41-fefd-4564-837b-c370054c8086","type":"HelpTool"}]},"id":"7af3d2ef-2b98-4e67-bda4-9dcb4958ff3d","type":"Toolbar"},{"attributes":{},"id":"2d9f07e0-f810-493f-8364-19e22b5f81dd","type":"BasicTickFormatter"},{"attributes":{},"id":"d2f40988-cfb3-4a26-96b0-c307f4f3b4bf","type":"BasicTicker"},{"attributes":{"axis_label":"y","formatter":{"id":"2d9f07e0-f810-493f-8364-19e22b5f81dd","type":"BasicTickFormatter"},"plot":{"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2f40988-cfb3-4a26-96b0-c307f4f3b4bf","type":"BasicTicker"}},"id":"1926923c-bb0d-4b5b-a120-a179f48772ee","type":"LinearAxis"},{"attributes":{},"id":"173d3e41-fefd-4564-837b-c370054c8086","type":"HelpTool"},{"attributes":{},"id":"39cd51c1-d3be-41cc-aa0b-9dc9acadd531","type":"LinearScale"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9374f9fa-f4ac-4f5e-80c3-45a83b5f1a1a","type":"Circle"},{"attributes":{},"id":"eae43b2c-c3b6-4623-b622-74be0b2e6489","type":"ResetTool"},{"attributes":{},"id":"e66d018b-c24e-47f6-b054-d6faac1c95ee","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"Z3r4bWKOEkAGw3rmUcQkQErJlA0lIytACtFN1szcLECWgdzdGugzQIY6IMci2DRAinEak/fQMECXIsHorPM1QN49iFxFf0BAfRjP3xtTPUCY5YP3BiNBQHxJj5pY5EBAvsIARcjJQ0ClzD/k/Q1DQIKnZ1X9dkFAimOEBCgNQkDW4mIZCLNDQPh3++ZVF0dAM3WHmFO7RUBLSmoGFgJFQA==","dtype":"float64","shape":[20]}},"selected":{"id":"a1daa201-66a8-4969-b4b3-ab1c4ff0ff2c","type":"Selection"},"selection_policy":{"id":"08b13a4f-4850-47e6-abbc-eb83587f5eea","type":"UnionRenderers"}},"id":"d2a6825d-1033-4dfd-99e3-a8c8c1185d8c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"fdf9668c-f671-45d7-bfbc-53571ae8e8e2","type":"LinearAxis"}],"left":[{"id":"1926923c-bb0d-4b5b-a120-a179f48772ee","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"fdf9668c-f671-45d7-bfbc-53571ae8e8e2","type":"LinearAxis"},{"id":"4a55c955-8e66-4590-9355-230cba0feb26","type":"Grid"},{"id":"1926923c-bb0d-4b5b-a120-a179f48772ee","type":"LinearAxis"},{"id":"3b135d75-41d1-46dd-b2be-5b9c6b3989fa","type":"Grid"},{"id":"18b4d374-73f8-4030-b743-8e4b3fb8ce49","type":"BoxAnnotation"},{"id":"1f87bb35-48bb-46f5-a086-8668210a9547","type":"GlyphRenderer"},{"id":"d507eb65-f1c7-41ce-9a3e-0e70b044b10b","type":"Slope"}],"title":{"id":"d3a5faf5-3d1a-4dde-ac11-78691ad64559","type":"Title"},"toolbar":{"id":"7af3d2ef-2b98-4e67-bda4-9dcb4958ff3d","type":"Toolbar"},"x_range":{"id":"6e456c7a-36e8-47fc-b994-46d4dd0e5d7d","type":"DataRange1d"},"x_scale":{"id":"782a1e01-d4e6-42b4-a0f9-e3bfa160a2fd","type":"LinearScale"},"y_range":{"id":"a006f387-f5b9-4293-b735-28b6d5437d82","type":"Range1d"},"y_scale":{"id":"39cd51c1-d3be-41cc-aa0b-9dc9acadd531","type":"LinearScale"}},"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"782a1e01-d4e6-42b4-a0f9-e3bfa160a2fd","type":"LinearScale"},{"attributes":{"callback":null,"end":50.800539932314074},"id":"a006f387-f5b9-4293-b735-28b6d5437d82","type":"Range1d"},{"attributes":{},"id":"fa24cee5-93ea-4b30-ac5a-87eb4945131c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18b4d374-73f8-4030-b743-8e4b3fb8ce49","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2f40988-cfb3-4a26-96b0-c307f4f3b4bf","type":"BasicTicker"}},"id":"3b135d75-41d1-46dd-b2be-5b9c6b3989fa","type":"Grid"},{"attributes":{"axis_label":"x","formatter":{"id":"a37eccb4-4c41-47b1-bbbd-d240809e3ac8","type":"BasicTickFormatter"},"plot":{"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa24cee5-93ea-4b30-ac5a-87eb4945131c","type":"BasicTicker"}},"id":"fdf9668c-f671-45d7-bfbc-53571ae8e8e2","type":"LinearAxis"},{"attributes":{"overlay":{"id":"18b4d374-73f8-4030-b743-8e4b3fb8ce49","type":"BoxAnnotation"}},"id":"fa23c728-95c3-4dd4-b416-5c8fc28745b6","type":"BoxZoomTool"},{"attributes":{},"id":"08b13a4f-4850-47e6-abbc-eb83587f5eea","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"eaa4e18c-b353-49d6-b107-3d5c368cd422","type":"Circle"},{"attributes":{},"id":"70975cd8-8524-44a1-838b-50fa4002b40f","type":"SaveTool"},{"attributes":{},"id":"a1daa201-66a8-4969-b4b3-ab1c4ff0ff2c","type":"Selection"},{"attributes":{},"id":"a37eccb4-4c41-47b1-bbbd-d240809e3ac8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa24cee5-93ea-4b30-ac5a-87eb4945131c","type":"BasicTicker"}},"id":"4a55c955-8e66-4590-9355-230cba0feb26","type":"Grid"},{"attributes":{},"id":"5829d364-79b7-4d09-af4e-aa9893889e6c","type":"PanTool"},{"attributes":{"source":{"id":"d2a6825d-1033-4dfd-99e3-a8c8c1185d8c","type":"ColumnDataSource"}},"id":"20dbd69e-e2b5-42b1-88eb-d51d68c4f541","type":"CDSView"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"plot":{"id":"010ace50-6ebc-4129-98e6-d66a53ce3e25","subtype":"Figure","type":"Plot"},"y_intercept":10},"id":"d507eb65-f1c7-41ce-9a3e-0e70b044b10b","type":"Slope"},{"attributes":{"data_source":{"id":"d2a6825d-1033-4dfd-99e3-a8c8c1185d8c","type":"ColumnDataSource"},"glyph":{"id":"9374f9fa-f4ac-4f5e-80c3-45a83b5f1a1a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eaa4e18c-b353-49d6-b107-3d5c368cd422","type":"Circle"},"selection_glyph":null,"view":{"id":"20dbd69e-e2b5-42b1-88eb-d51d68c4f541","type":"CDSView"}},"id":"1f87bb35-48bb-46f5-a086-8668210a9547","type":"GlyphRenderer"}],"root_ids":["010ace50-6ebc-4129-98e6-d66a53ce3e25"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"afcb7463-ed38-4010-9c13-6688668713db","roots":{"010ace50-6ebc-4129-98e6-d66a53ce3e25":"714c4b93-66a1-4ec5-b964-4fbfb9763962"}}];
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