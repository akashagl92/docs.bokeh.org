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
      };var element = document.getElementById("8d38c0b9-1fc6-44b3-86f5-113105a7e5ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d38c0b9-1fc6-44b3-86f5-113105a7e5ea' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d20b317d-4168-4ab0-9b85-e67baa866946":{"roots":{"references":[{"attributes":{"below":[{"id":"00faa427-4463-452e-8ead-3936abbdc92e","type":"LinearAxis"}],"left":[{"id":"403cb6f3-cbf2-45ac-badc-c69cf4eae0d0","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"00faa427-4463-452e-8ead-3936abbdc92e","type":"LinearAxis"},{"id":"b94b41a3-d703-4800-a95c-01eff337b7c4","type":"Grid"},{"id":"403cb6f3-cbf2-45ac-badc-c69cf4eae0d0","type":"LinearAxis"},{"id":"b9e82c6b-ead7-48c1-abfa-18285ec27739","type":"Grid"},{"id":"7b31b0f3-ed2c-4b83-b133-794ce3370302","type":"GlyphRenderer"},{"id":"21ef38b2-fa93-403d-8aa7-c6f1f5115752","type":"GlyphRenderer"}],"title":{"id":"3bcd0edb-270e-48af-a0ae-95aaca18ed82","type":"Title"},"toolbar":{"id":"971b4ab9-0e8a-4088-bab8-7fb0df48daf5","type":"Toolbar"},"x_range":{"id":"e42bb5f7-5665-48f5-a523-2682ae321e89","type":"DataRange1d"},"x_scale":{"id":"9dcaaadb-bd2d-45db-9283-de56b81ef7bd","type":"LinearScale"},"y_range":{"id":"ee08d832-7ac5-40d6-8414-758a08305087","type":"DataRange1d"},"y_scale":{"id":"67342785-f517-49d2-a9d6-79459ed9280e","type":"LinearScale"}},"id":"96dfee7e-f034-4cf5-aaf1-5e4df4533174","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"96dfee7e-f034-4cf5-aaf1-5e4df4533174","subtype":"Figure","type":"Plot"},"ticker":{"id":"1860519e-d8fe-493e-81cf-6f12c7c43e71","type":"BasicTicker"}},"id":"b9e82c6b-ead7-48c1-abfa-18285ec27739","type":"Grid"},{"attributes":{},"id":"9dcaaadb-bd2d-45db-9283-de56b81ef7bd","type":"LinearScale"},{"attributes":{},"id":"1860519e-d8fe-493e-81cf-6f12c7c43e71","type":"BasicTicker"},{"attributes":{"formatter":{"id":"631bf9bc-b272-495f-bb60-1ce16e9c9653","type":"BasicTickFormatter"},"plot":{"id":"96dfee7e-f034-4cf5-aaf1-5e4df4533174","subtype":"Figure","type":"Plot"},"ticker":{"id":"1860519e-d8fe-493e-81cf-6f12c7c43e71","type":"BasicTicker"}},"id":"403cb6f3-cbf2-45ac-badc-c69cf4eae0d0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ee08d832-7ac5-40d6-8414-758a08305087","type":"DataRange1d"},{"attributes":{"data_source":{"id":"31b2bec0-fc19-4c3e-8365-be9716b200df","type":"ColumnDataSource"},"glyph":{"id":"8494181e-f4d0-485a-98d5-6431ed782f07","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb56b258-668b-430f-a70d-88256149c18d","type":"Line"},"selection_glyph":null,"view":{"id":"055677b0-b069-47e9-9c12-b7dc4a5d81df","type":"CDSView"}},"id":"7b31b0f3-ed2c-4b83-b133-794ce3370302","type":"GlyphRenderer"},{"attributes":{},"id":"3fbddfef-b6a8-4e74-975d-44ab223cd709","type":"BasicTickFormatter"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"8494181e-f4d0-485a-98d5-6431ed782f07","type":"Line"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"7025e8b2-cd76-4aaf-8f73-ea2504784154","type":"Line"},{"attributes":{},"id":"47f8a70b-e6bc-43bd-ad8d-8724179c4365","type":"BasicTicker"},{"attributes":{},"id":"b11bd8b2-4c9a-4005-8767-45fddf3d141c","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"e42bb5f7-5665-48f5-a523-2682ae321e89","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"3bcd0edb-270e-48af-a0ae-95aaca18ed82","type":"Title"},{"attributes":{"formatter":{"id":"3fbddfef-b6a8-4e74-975d-44ab223cd709","type":"BasicTickFormatter"},"plot":{"id":"96dfee7e-f034-4cf5-aaf1-5e4df4533174","subtype":"Figure","type":"Plot"},"ticker":{"id":"47f8a70b-e6bc-43bd-ad8d-8724179c4365","type":"BasicTicker"},"visible":false},"id":"00faa427-4463-452e-8ead-3936abbdc92e","type":"LinearAxis"},{"attributes":{"source":{"id":"071815c8-22e2-47d2-91c6-1cd53692e488","type":"ColumnDataSource"}},"id":"7b81f935-d0eb-4305-b23e-aa556ef337b5","type":"CDSView"},{"attributes":{"plot":{"id":"96dfee7e-f034-4cf5-aaf1-5e4df4533174","subtype":"Figure","type":"Plot"},"ticker":{"id":"47f8a70b-e6bc-43bd-ad8d-8724179c4365","type":"BasicTicker"},"visible":false},"id":"b94b41a3-d703-4800-a95c-01eff337b7c4","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"36b13166-a1d9-488f-b953-cfe3ccb5bc34","type":"Selection"},"selection_policy":{"id":"bcca19ab-1ea4-47a4-886a-4d0b8f421413","type":"UnionRenderers"}},"id":"071815c8-22e2-47d2-91c6-1cd53692e488","type":"ColumnDataSource"},{"attributes":{"source":{"id":"31b2bec0-fc19-4c3e-8365-be9716b200df","type":"ColumnDataSource"}},"id":"055677b0-b069-47e9-9c12-b7dc4a5d81df","type":"CDSView"},{"attributes":{},"id":"36b13166-a1d9-488f-b953-cfe3ccb5bc34","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"971b4ab9-0e8a-4088-bab8-7fb0df48daf5","type":"Toolbar"},{"attributes":{},"id":"75908573-90b9-4ca6-aa6b-3bed3150acd3","type":"Selection"},{"attributes":{},"id":"bcca19ab-1ea4-47a4-886a-4d0b8f421413","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"071815c8-22e2-47d2-91c6-1cd53692e488","type":"ColumnDataSource"},"glyph":{"id":"7025e8b2-cd76-4aaf-8f73-ea2504784154","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"315e1cf1-51b7-427f-97fe-d2881a0c5b5b","type":"Line"},"selection_glyph":null,"view":{"id":"7b81f935-d0eb-4305-b23e-aa556ef337b5","type":"CDSView"},"visible":false},"id":"21ef38b2-fa93-403d-8aa7-c6f1f5115752","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"315e1cf1-51b7-427f-97fe-d2881a0c5b5b","type":"Line"},{"attributes":{},"id":"67342785-f517-49d2-a9d6-79459ed9280e","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"75908573-90b9-4ca6-aa6b-3bed3150acd3","type":"Selection"},"selection_policy":{"id":"b11bd8b2-4c9a-4005-8767-45fddf3d141c","type":"UnionRenderers"}},"id":"31b2bec0-fc19-4c3e-8365-be9716b200df","type":"ColumnDataSource"},{"attributes":{},"id":"631bf9bc-b272-495f-bb60-1ce16e9c9653","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"fb56b258-668b-430f-a70d-88256149c18d","type":"Line"}],"root_ids":["96dfee7e-f034-4cf5-aaf1-5e4df4533174"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d20b317d-4168-4ab0-9b85-e67baa866946","roots":{"96dfee7e-f034-4cf5-aaf1-5e4df4533174":"8d38c0b9-1fc6-44b3-86f5-113105a7e5ea"}}];
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