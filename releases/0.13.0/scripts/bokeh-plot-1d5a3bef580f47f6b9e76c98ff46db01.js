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
      };var element = document.getElementById("6a2295e5-3efa-4624-8ab3-b23905e54df0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a2295e5-3efa-4624-8ab3-b23905e54df0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"525bf3e8-b0f6-43e2-979f-a297f4128dd4":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ecc326d1-c212-4336-b275-db138f7c5512","type":"PanTool"},{"id":"e7d1d9fe-4d89-49aa-ad92-db2809a71cc6","type":"ResetTool"},{"id":"1c6ad832-aff3-4d2c-87ec-5786d0bd8fb5","type":"SaveTool"}]},"id":"c5a3b819-e6d1-4430-8d20-784de0fae024","type":"Toolbar"},{"attributes":{},"id":"1c6ad832-aff3-4d2c-87ec-5786d0bd8fb5","type":"SaveTool"},{"attributes":{},"id":"ecc326d1-c212-4336-b275-db138f7c5512","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"bcf785f5-bcd2-46b5-ba3f-2c0591ddb561","type":"Selection"},"selection_policy":{"id":"cde69d82-cb73-4f83-80c8-a90ff04dff8f","type":"UnionRenderers"}},"id":"fdbe34f3-5abf-4d7e-a44b-0f354d735c13","type":"ColumnDataSource"},{"attributes":{},"id":"3069313c-ca47-4635-ad39-041be1bdbd7d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6433241-1fb4-45fd-b482-4ccc5cca9aa3","type":"Circle"},{"attributes":{},"id":"cde69d82-cb73-4f83-80c8-a90ff04dff8f","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8a23329-8f39-4def-8011-d8cb8a10fe80","type":"Circle"},{"attributes":{},"id":"e7d1d9fe-4d89-49aa-ad92-db2809a71cc6","type":"ResetTool"},{"attributes":{"formatter":{"id":"ec43a9bf-a2a2-4176-b69a-198938cd69d4","type":"BasicTickFormatter"},"plot":{"id":"57176022-e7d5-4c80-8a1d-15a9400fd0bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2cd2821-5de2-4724-b9ca-d2c883ccc041","type":"BasicTicker"}},"id":"c1c26233-e107-49ac-988c-a972861ef938","type":"LinearAxis"},{"attributes":{},"id":"f2cd2821-5de2-4724-b9ca-d2c883ccc041","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1e48ba0d-f73f-4e66-b4f0-c01db8568e1f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3069313c-ca47-4635-ad39-041be1bdbd7d","type":"BasicTickFormatter"},"plot":{"id":"57176022-e7d5-4c80-8a1d-15a9400fd0bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb01a608-53a8-4e85-bcba-48ce6375c219","type":"BasicTicker"}},"id":"47693be3-7fbd-4ebd-a320-f7fbfdbe93ca","type":"LinearAxis"},{"attributes":{"below":[{"id":"47693be3-7fbd-4ebd-a320-f7fbfdbe93ca","type":"LinearAxis"}],"left":[{"id":"c1c26233-e107-49ac-988c-a972861ef938","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"47693be3-7fbd-4ebd-a320-f7fbfdbe93ca","type":"LinearAxis"},{"id":"4595d37d-1243-4cdb-b880-25216161852d","type":"Grid"},{"id":"c1c26233-e107-49ac-988c-a972861ef938","type":"LinearAxis"},{"id":"7b755551-0cb0-4ef6-b86a-f25a114c161a","type":"Grid"},{"id":"60df9cae-ffbf-478e-acb5-ba11920900e5","type":"GlyphRenderer"}],"title":{"id":"5b6a37ae-8680-4bab-904a-dca55e913150","type":"Title"},"toolbar":{"id":"c5a3b819-e6d1-4430-8d20-784de0fae024","type":"Toolbar"},"x_range":{"id":"1e48ba0d-f73f-4e66-b4f0-c01db8568e1f","type":"DataRange1d"},"x_scale":{"id":"33c307fb-982f-474f-8899-8c6a324f3cb2","type":"LinearScale"},"y_range":{"id":"56201b83-108c-46bb-877b-791b2d288006","type":"DataRange1d"},"y_scale":{"id":"f8785de0-040a-4aae-b466-35dda7f587f4","type":"LinearScale"}},"id":"57176022-e7d5-4c80-8a1d-15a9400fd0bb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"56201b83-108c-46bb-877b-791b2d288006","type":"DataRange1d"},{"attributes":{},"id":"ec43a9bf-a2a2-4176-b69a-198938cd69d4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"57176022-e7d5-4c80-8a1d-15a9400fd0bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb01a608-53a8-4e85-bcba-48ce6375c219","type":"BasicTicker"}},"id":"4595d37d-1243-4cdb-b880-25216161852d","type":"Grid"},{"attributes":{},"id":"33c307fb-982f-474f-8899-8c6a324f3cb2","type":"LinearScale"},{"attributes":{},"id":"eb01a608-53a8-4e85-bcba-48ce6375c219","type":"BasicTicker"},{"attributes":{"source":{"id":"fdbe34f3-5abf-4d7e-a44b-0f354d735c13","type":"ColumnDataSource"}},"id":"adb51609-f7de-4602-83ed-40074c99f4b9","type":"CDSView"},{"attributes":{},"id":"f8785de0-040a-4aae-b466-35dda7f587f4","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"5b6a37ae-8680-4bab-904a-dca55e913150","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"57176022-e7d5-4c80-8a1d-15a9400fd0bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2cd2821-5de2-4724-b9ca-d2c883ccc041","type":"BasicTicker"}},"id":"7b755551-0cb0-4ef6-b86a-f25a114c161a","type":"Grid"},{"attributes":{},"id":"bcf785f5-bcd2-46b5-ba3f-2c0591ddb561","type":"Selection"},{"attributes":{"data_source":{"id":"fdbe34f3-5abf-4d7e-a44b-0f354d735c13","type":"ColumnDataSource"},"glyph":{"id":"a8a23329-8f39-4def-8011-d8cb8a10fe80","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6433241-1fb4-45fd-b482-4ccc5cca9aa3","type":"Circle"},"selection_glyph":null,"view":{"id":"adb51609-f7de-4602-83ed-40074c99f4b9","type":"CDSView"}},"id":"60df9cae-ffbf-478e-acb5-ba11920900e5","type":"GlyphRenderer"}],"root_ids":["57176022-e7d5-4c80-8a1d-15a9400fd0bb"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"525bf3e8-b0f6-43e2-979f-a297f4128dd4","roots":{"57176022-e7d5-4c80-8a1d-15a9400fd0bb":"6a2295e5-3efa-4624-8ab3-b23905e54df0"}}];
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