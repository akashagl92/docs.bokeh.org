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
      };var element = document.getElementById("6fed6d44-4a32-48c3-b2b7-4c1af0e3b1f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6fed6d44-4a32-48c3-b2b7-4c1af0e3b1f7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"11739dbd-3a36-43af-9ad6-84a1ead59620":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"ae4047bb-43b2-464b-8ac2-33bf612caa5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9280747e-a111-4722-91e0-297871045f62","type":"BasicTicker"}},"id":"cf841c81-b820-44c5-b7fc-15e9a3f4a7cf","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fce10b6a-07d3-48f8-9074-70e2a0dcbabc","type":"Ray"},{"attributes":{"plot":null,"text":""},"id":"a404db2f-9433-4712-90ae-e15c96e6623d","type":"Title"},{"attributes":{"data_source":{"id":"10ba9cfa-f24d-4169-814c-dfc6ec027427","type":"ColumnDataSource"},"glyph":{"id":"f90e832c-462f-45ca-b72c-38573b84f394","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fce10b6a-07d3-48f8-9074-70e2a0dcbabc","type":"Ray"},"selection_glyph":null,"view":{"id":"9cbba532-d84f-43cd-9476-14ec9101ee89","type":"CDSView"}},"id":"44128aa5-9155-4e99-b254-0d1fdf3ea709","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"9855d418-3c8a-4a15-b019-f4b8bca9efa2","type":"Selection"},"selection_policy":{"id":"c2edf9cd-58e7-49d4-9642-4c05663819cb","type":"UnionRenderers"}},"id":"10ba9cfa-f24d-4169-814c-dfc6ec027427","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11eee7cc-a3b1-4a74-bc45-a2cfc45182e5","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"85b7bba7-0353-4449-91a6-3c8cec0fb793","type":"LinearAxis"}],"left":[{"id":"e280cffc-0697-4e88-b424-b063f98bd26c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"85b7bba7-0353-4449-91a6-3c8cec0fb793","type":"LinearAxis"},{"id":"e0d9403b-2609-4051-a3f5-2c12bb001ca7","type":"Grid"},{"id":"e280cffc-0697-4e88-b424-b063f98bd26c","type":"LinearAxis"},{"id":"cf841c81-b820-44c5-b7fc-15e9a3f4a7cf","type":"Grid"},{"id":"11eee7cc-a3b1-4a74-bc45-a2cfc45182e5","type":"BoxAnnotation"},{"id":"44128aa5-9155-4e99-b254-0d1fdf3ea709","type":"GlyphRenderer"}],"title":{"id":"a404db2f-9433-4712-90ae-e15c96e6623d","type":"Title"},"toolbar":{"id":"d0828248-e8ff-4c40-a576-e317ca80b232","type":"Toolbar"},"x_range":{"id":"81467661-098b-4c01-8737-9727015d5aeb","type":"DataRange1d"},"x_scale":{"id":"241dd8b5-13a5-4d46-bccf-a85d31f999bd","type":"LinearScale"},"y_range":{"id":"cfb6a280-a7fd-4e2b-b552-dc6f030277d1","type":"DataRange1d"},"y_scale":{"id":"d02e0e5e-a3be-4f5c-a2c1-2afe54e7246e","type":"LinearScale"}},"id":"ae4047bb-43b2-464b-8ac2-33bf612caa5a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bda332fe-ccf3-400f-856f-932e17f46145","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bda332fe-ccf3-400f-856f-932e17f46145","type":"PanTool"},{"id":"83669163-9f94-4f04-8054-1cdaaed61eb0","type":"WheelZoomTool"},{"id":"017074a4-7aaa-434d-9417-2e286fbaa97f","type":"BoxZoomTool"},{"id":"284da115-e4c5-4dde-b019-054c70620c7c","type":"SaveTool"},{"id":"805d7d60-b658-4b1c-8074-ec7955c97e63","type":"ResetTool"},{"id":"172a2f85-9ddc-4bbf-9b39-25d5f2eb272a","type":"HelpTool"}]},"id":"d0828248-e8ff-4c40-a576-e317ca80b232","type":"Toolbar"},{"attributes":{"source":{"id":"10ba9cfa-f24d-4169-814c-dfc6ec027427","type":"ColumnDataSource"}},"id":"9cbba532-d84f-43cd-9476-14ec9101ee89","type":"CDSView"},{"attributes":{"callback":null},"id":"81467661-098b-4c01-8737-9727015d5aeb","type":"DataRange1d"},{"attributes":{},"id":"83669163-9f94-4f04-8054-1cdaaed61eb0","type":"WheelZoomTool"},{"attributes":{},"id":"b92a7855-08bb-421c-ac64-b97ce8d76892","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11eee7cc-a3b1-4a74-bc45-a2cfc45182e5","type":"BoxAnnotation"}},"id":"017074a4-7aaa-434d-9417-2e286fbaa97f","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f90e832c-462f-45ca-b72c-38573b84f394","type":"Ray"},{"attributes":{},"id":"284da115-e4c5-4dde-b019-054c70620c7c","type":"SaveTool"},{"attributes":{"formatter":{"id":"f7af6460-8c52-45ce-8049-5fcb28a0119d","type":"BasicTickFormatter"},"plot":{"id":"ae4047bb-43b2-464b-8ac2-33bf612caa5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b92a7855-08bb-421c-ac64-b97ce8d76892","type":"BasicTicker"}},"id":"85b7bba7-0353-4449-91a6-3c8cec0fb793","type":"LinearAxis"},{"attributes":{},"id":"805d7d60-b658-4b1c-8074-ec7955c97e63","type":"ResetTool"},{"attributes":{"callback":null},"id":"cfb6a280-a7fd-4e2b-b552-dc6f030277d1","type":"DataRange1d"},{"attributes":{},"id":"172a2f85-9ddc-4bbf-9b39-25d5f2eb272a","type":"HelpTool"},{"attributes":{},"id":"241dd8b5-13a5-4d46-bccf-a85d31f999bd","type":"LinearScale"},{"attributes":{},"id":"f7af6460-8c52-45ce-8049-5fcb28a0119d","type":"BasicTickFormatter"},{"attributes":{},"id":"d02e0e5e-a3be-4f5c-a2c1-2afe54e7246e","type":"LinearScale"},{"attributes":{"plot":{"id":"ae4047bb-43b2-464b-8ac2-33bf612caa5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b92a7855-08bb-421c-ac64-b97ce8d76892","type":"BasicTicker"}},"id":"e0d9403b-2609-4051-a3f5-2c12bb001ca7","type":"Grid"},{"attributes":{},"id":"9855d418-3c8a-4a15-b019-f4b8bca9efa2","type":"Selection"},{"attributes":{"formatter":{"id":"4711f13f-2f51-4d34-8acb-8df16eaf4079","type":"BasicTickFormatter"},"plot":{"id":"ae4047bb-43b2-464b-8ac2-33bf612caa5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9280747e-a111-4722-91e0-297871045f62","type":"BasicTicker"}},"id":"e280cffc-0697-4e88-b424-b063f98bd26c","type":"LinearAxis"},{"attributes":{},"id":"4711f13f-2f51-4d34-8acb-8df16eaf4079","type":"BasicTickFormatter"},{"attributes":{},"id":"9280747e-a111-4722-91e0-297871045f62","type":"BasicTicker"},{"attributes":{},"id":"c2edf9cd-58e7-49d4-9642-4c05663819cb","type":"UnionRenderers"}],"root_ids":["ae4047bb-43b2-464b-8ac2-33bf612caa5a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"11739dbd-3a36-43af-9ad6-84a1ead59620","roots":{"ae4047bb-43b2-464b-8ac2-33bf612caa5a":"6fed6d44-4a32-48c3-b2b7-4c1af0e3b1f7"}}];
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