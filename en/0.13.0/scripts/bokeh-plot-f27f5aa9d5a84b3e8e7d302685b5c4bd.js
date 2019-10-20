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
      };var element = document.getElementById("6cfcb195-c94d-494b-8c0e-752dbb42d406");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6cfcb195-c94d-494b-8c0e-752dbb42d406' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0a3fb898-88ee-499a-8685-426c4111b1cc":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"ee272ca3-9e62-4a2a-a49b-679859e9c1e3","type":"Title"},{"attributes":{"formatter":{"id":"419e6b26-09dd-4302-b5e7-e35097adad8a","type":"BasicTickFormatter"},"plot":{"id":"f1b01587-0e39-45b6-8001-5cda3e6fdbb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"eabcaa35-838e-4396-ae35-2e45e5edfa91","type":"BasicTicker"}},"id":"dfbed883-15b5-4e47-917c-44e74ea0599c","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"5f1ccd85-a3d6-4cb6-bfc5-615f246a8585","type":"Selection"},"selection_policy":{"id":"18668afb-10f9-49f1-90f1-377064cee81b","type":"UnionRenderers"}},"id":"91d1b97a-1669-43c0-9c1d-36f53bbd5d32","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4695ee9-f731-4552-9631-93c561d70635","type":"Circle"},{"attributes":{"callback":null},"id":"c9c1fbf6-40e5-49da-b8e9-5581b79c91ae","type":"DataRange1d"},{"attributes":{"overlay":{"id":"344bb59c-83b7-412e-814b-ff14a49feac7","type":"BoxAnnotation"}},"id":"8946b6be-05c6-46d2-beca-076a90ea554c","type":"BoxZoomTool"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"f1b01587-0e39-45b6-8001-5cda3e6fdbb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"da7fab1d-5085-4a2d-ad4f-85109a72493e","type":"BasicTicker"}},"id":"595e058b-1dea-4d18-b2b5-7500ad14f044","type":"Grid"},{"attributes":{"callback":null},"id":"858e4ea6-f842-4ddd-a3d4-893791721339","type":"DataRange1d"},{"attributes":{},"id":"c1effbfa-9f31-4ad4-b2c5-1e7d0911216b","type":"LinearScale"},{"attributes":{},"id":"18baf478-fbe5-487e-957e-fef92c3c4fe2","type":"HelpTool"},{"attributes":{},"id":"da7fab1d-5085-4a2d-ad4f-85109a72493e","type":"BasicTicker"},{"attributes":{},"id":"0d4be5b1-3ca3-4316-92df-53552d765ab4","type":"ResetTool"},{"attributes":{},"id":"0e3b19f1-5470-4c5a-8fd0-4b8a5175f24c","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19160ad4-638e-4877-86ad-a447c2fcdf78","type":"Circle"},{"attributes":{"source":{"id":"91d1b97a-1669-43c0-9c1d-36f53bbd5d32","type":"ColumnDataSource"}},"id":"98b9047a-5c69-4abd-8e3b-830fc71aca58","type":"CDSView"},{"attributes":{},"id":"4e4b7857-cb07-4835-9cf3-c694ecfa1e1c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e3b19f1-5470-4c5a-8fd0-4b8a5175f24c","type":"PanTool"},{"id":"fb06dfae-72ee-4987-b8d4-1a695fa7d55c","type":"WheelZoomTool"},{"id":"8946b6be-05c6-46d2-beca-076a90ea554c","type":"BoxZoomTool"},{"id":"794960c2-5a6a-4cc1-a2ab-9a9c9ba500e1","type":"SaveTool"},{"id":"0d4be5b1-3ca3-4316-92df-53552d765ab4","type":"ResetTool"},{"id":"18baf478-fbe5-487e-957e-fef92c3c4fe2","type":"HelpTool"}]},"id":"f1095579-11ec-454c-8751-221732672e1d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"344bb59c-83b7-412e-814b-ff14a49feac7","type":"BoxAnnotation"},{"attributes":{},"id":"419e6b26-09dd-4302-b5e7-e35097adad8a","type":"BasicTickFormatter"},{"attributes":{},"id":"5f1ccd85-a3d6-4cb6-bfc5-615f246a8585","type":"Selection"},{"attributes":{},"id":"fb06dfae-72ee-4987-b8d4-1a695fa7d55c","type":"WheelZoomTool"},{"attributes":{},"id":"794960c2-5a6a-4cc1-a2ab-9a9c9ba500e1","type":"SaveTool"},{"attributes":{"below":[{"id":"dfbed883-15b5-4e47-917c-44e74ea0599c","type":"LinearAxis"}],"left":[{"id":"b0aeab17-b869-4e3a-b156-fa5b2e9b74ae","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dfbed883-15b5-4e47-917c-44e74ea0599c","type":"LinearAxis"},{"id":"aea71175-a1bb-4250-971f-dd55c3d8132f","type":"Grid"},{"id":"b0aeab17-b869-4e3a-b156-fa5b2e9b74ae","type":"LinearAxis"},{"id":"595e058b-1dea-4d18-b2b5-7500ad14f044","type":"Grid"},{"id":"344bb59c-83b7-412e-814b-ff14a49feac7","type":"BoxAnnotation"},{"id":"f0d9d00f-80a1-4c24-a476-7ade11ba23fa","type":"GlyphRenderer"}],"title":{"id":"ee272ca3-9e62-4a2a-a49b-679859e9c1e3","type":"Title"},"toolbar":{"id":"f1095579-11ec-454c-8751-221732672e1d","type":"Toolbar"},"x_range":{"id":"858e4ea6-f842-4ddd-a3d4-893791721339","type":"DataRange1d"},"x_scale":{"id":"4e4b7857-cb07-4835-9cf3-c694ecfa1e1c","type":"LinearScale"},"y_range":{"id":"c9c1fbf6-40e5-49da-b8e9-5581b79c91ae","type":"DataRange1d"},"y_scale":{"id":"c1effbfa-9f31-4ad4-b2c5-1e7d0911216b","type":"LinearScale"}},"id":"f1b01587-0e39-45b6-8001-5cda3e6fdbb3","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f1b01587-0e39-45b6-8001-5cda3e6fdbb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"eabcaa35-838e-4396-ae35-2e45e5edfa91","type":"BasicTicker"}},"id":"aea71175-a1bb-4250-971f-dd55c3d8132f","type":"Grid"},{"attributes":{},"id":"18668afb-10f9-49f1-90f1-377064cee81b","type":"UnionRenderers"},{"attributes":{},"id":"eabcaa35-838e-4396-ae35-2e45e5edfa91","type":"BasicTicker"},{"attributes":{"formatter":{"id":"57c96e1a-ce16-453f-b71f-ba2553cf7f9a","type":"BasicTickFormatter"},"plot":{"id":"f1b01587-0e39-45b6-8001-5cda3e6fdbb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"da7fab1d-5085-4a2d-ad4f-85109a72493e","type":"BasicTicker"}},"id":"b0aeab17-b869-4e3a-b156-fa5b2e9b74ae","type":"LinearAxis"},{"attributes":{"data_source":{"id":"91d1b97a-1669-43c0-9c1d-36f53bbd5d32","type":"ColumnDataSource"},"glyph":{"id":"19160ad4-638e-4877-86ad-a447c2fcdf78","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e4695ee9-f731-4552-9631-93c561d70635","type":"Circle"},"selection_glyph":null,"view":{"id":"98b9047a-5c69-4abd-8e3b-830fc71aca58","type":"CDSView"}},"id":"f0d9d00f-80a1-4c24-a476-7ade11ba23fa","type":"GlyphRenderer"},{"attributes":{},"id":"57c96e1a-ce16-453f-b71f-ba2553cf7f9a","type":"BasicTickFormatter"}],"root_ids":["f1b01587-0e39-45b6-8001-5cda3e6fdbb3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0a3fb898-88ee-499a-8685-426c4111b1cc","roots":{"f1b01587-0e39-45b6-8001-5cda3e6fdbb3":"6cfcb195-c94d-494b-8c0e-752dbb42d406"}}];
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