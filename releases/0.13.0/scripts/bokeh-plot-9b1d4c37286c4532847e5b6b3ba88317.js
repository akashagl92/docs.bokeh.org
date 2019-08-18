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
      };var element = document.getElementById("3e63dd37-21e8-424a-bac2-19fc68de263e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e63dd37-21e8-424a-bac2-19fc68de263e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac810891-9e78-40d8-8dea-a8dddf3a9401":{"roots":{"references":[{"attributes":{},"id":"da280efd-12a5-4c00-a00b-dfb985a73ee1","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b6236530-6a7a-42d4-bef9-4651eed88936","type":"BoxAnnotation"}},"id":"3416a823-9a2c-4f9c-9954-e19ea41cff94","type":"BoxZoomTool"},{"attributes":{},"id":"f703f352-ad69-4e24-b4d3-a1c5cbbfe6f5","type":"LinearScale"},{"attributes":{},"id":"0bda3cb0-9336-44a4-8de3-b4972d8c19da","type":"WheelZoomTool"},{"attributes":{},"id":"36543811-4c4a-45ef-9d8f-57d6ba67c780","type":"PanTool"},{"attributes":{},"id":"8b3457ed-5467-4049-b9b1-b9d6968aa63e","type":"LinearScale"},{"attributes":{"data_source":{"id":"16a6ee45-4e63-40f9-888c-905bf5919f88","type":"ColumnDataSource"},"glyph":{"id":"e5790f8b-97c0-4be2-a224-909c20db188f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f17a569-5745-40fe-a547-640aead36c87","type":"Line"},"selection_glyph":null,"view":{"id":"297fe6ca-3560-40eb-85b3-515938bf6f33","type":"CDSView"}},"id":"323095f8-59a9-4dd0-a4d4-e5d65ea34f88","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"716967f2-1f9d-46be-b5d9-df99da685689","type":"LinearAxis"}],"left":[{"id":"4c89cd74-d7b3-4be6-ac5a-0aa95e2073d2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"716967f2-1f9d-46be-b5d9-df99da685689","type":"LinearAxis"},{"id":"8be60d5e-14c4-4e59-ae49-518c6a83c989","type":"Grid"},{"id":"4c89cd74-d7b3-4be6-ac5a-0aa95e2073d2","type":"LinearAxis"},{"id":"f57033c7-2c34-457a-8a05-6915c0d568df","type":"Grid"},{"id":"b6236530-6a7a-42d4-bef9-4651eed88936","type":"BoxAnnotation"},{"id":"323095f8-59a9-4dd0-a4d4-e5d65ea34f88","type":"GlyphRenderer"}],"title":{"id":"fef2e627-91a4-474a-8a31-1ce55de059bc","type":"Title"},"toolbar":{"id":"b2e9c5e9-17f1-42a6-8e1b-baf6f90f6fff","type":"Toolbar"},"x_range":{"id":"2d966f43-346e-494d-972f-3b3c2a9e37f7","type":"DataRange1d"},"x_scale":{"id":"f703f352-ad69-4e24-b4d3-a1c5cbbfe6f5","type":"LinearScale"},"y_range":{"id":"1db9aad2-2909-4f21-aaf3-3a5fb07a1032","type":"DataRange1d"},"y_scale":{"id":"8b3457ed-5467-4049-b9b1-b9d6968aa63e","type":"LinearScale"}},"id":"2dd3755e-18cd-4fb4-a172-4e1cefae7426","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"2dd3755e-18cd-4fb4-a172-4e1cefae7426","subtype":"Figure","type":"Plot"},"ticker":{"id":"df704034-58dc-4a15-9df8-68487bb6aef6","type":"BasicTicker"}},"id":"f57033c7-2c34-457a-8a05-6915c0d568df","type":"Grid"},{"attributes":{},"id":"df704034-58dc-4a15-9df8-68487bb6aef6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"59fe8ce7-3c0c-45c5-92a4-8680466d09ea","type":"BasicTickFormatter"},"plot":{"id":"2dd3755e-18cd-4fb4-a172-4e1cefae7426","subtype":"Figure","type":"Plot"},"ticker":{"id":"df704034-58dc-4a15-9df8-68487bb6aef6","type":"BasicTicker"}},"id":"4c89cd74-d7b3-4be6-ac5a-0aa95e2073d2","type":"LinearAxis"},{"attributes":{"source":{"id":"16a6ee45-4e63-40f9-888c-905bf5919f88","type":"ColumnDataSource"}},"id":"297fe6ca-3560-40eb-85b3-515938bf6f33","type":"CDSView"},{"attributes":{"formatter":{"id":"da280efd-12a5-4c00-a00b-dfb985a73ee1","type":"BasicTickFormatter"},"plot":{"id":"2dd3755e-18cd-4fb4-a172-4e1cefae7426","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e801368-063d-424c-b14d-c5c02680a219","type":"BasicTicker"}},"id":"716967f2-1f9d-46be-b5d9-df99da685689","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"36543811-4c4a-45ef-9d8f-57d6ba67c780","type":"PanTool"},{"id":"0bda3cb0-9336-44a4-8de3-b4972d8c19da","type":"WheelZoomTool"},{"id":"3416a823-9a2c-4f9c-9954-e19ea41cff94","type":"BoxZoomTool"},{"id":"8dea91f7-103a-47a8-8615-176c156d302c","type":"SaveTool"},{"id":"1a2a4b3e-400f-4133-8b6f-65aff7efd718","type":"ResetTool"},{"id":"e65b3b19-31ac-4fa0-91ad-30d070a86e2d","type":"HelpTool"}]},"id":"b2e9c5e9-17f1-42a6-8e1b-baf6f90f6fff","type":"Toolbar"},{"attributes":{},"id":"58872a61-e445-4b87-b868-fc4760bb596c","type":"Selection"},{"attributes":{},"id":"8dea91f7-103a-47a8-8615-176c156d302c","type":"SaveTool"},{"attributes":{},"id":"31fb093e-5e65-4871-baa9-bb53c9d81022","type":"UnionRenderers"},{"attributes":{},"id":"59fe8ce7-3c0c-45c5-92a4-8680466d09ea","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b6236530-6a7a-42d4-bef9-4651eed88936","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"fef2e627-91a4-474a-8a31-1ce55de059bc","type":"Title"},{"attributes":{"callback":null},"id":"1db9aad2-2909-4f21-aaf3-3a5fb07a1032","type":"DataRange1d"},{"attributes":{},"id":"e65b3b19-31ac-4fa0-91ad-30d070a86e2d","type":"HelpTool"},{"attributes":{},"id":"4e801368-063d-424c-b14d-c5c02680a219","type":"BasicTicker"},{"attributes":{"plot":{"id":"2dd3755e-18cd-4fb4-a172-4e1cefae7426","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e801368-063d-424c-b14d-c5c02680a219","type":"BasicTicker"}},"id":"8be60d5e-14c4-4e59-ae49-518c6a83c989","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0f17a569-5745-40fe-a547-640aead36c87","type":"Line"},{"attributes":{"callback":null},"id":"2d966f43-346e-494d-972f-3b3c2a9e37f7","type":"DataRange1d"},{"attributes":{},"id":"1a2a4b3e-400f-4133-8b6f-65aff7efd718","type":"ResetTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"e5790f8b-97c0-4be2-a224-909c20db188f","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]},"selected":{"id":"58872a61-e445-4b87-b868-fc4760bb596c","type":"Selection"},"selection_policy":{"id":"31fb093e-5e65-4871-baa9-bb53c9d81022","type":"UnionRenderers"}},"id":"16a6ee45-4e63-40f9-888c-905bf5919f88","type":"ColumnDataSource"}],"root_ids":["2dd3755e-18cd-4fb4-a172-4e1cefae7426"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ac810891-9e78-40d8-8dea-a8dddf3a9401","roots":{"2dd3755e-18cd-4fb4-a172-4e1cefae7426":"3e63dd37-21e8-424a-bac2-19fc68de263e"}}];
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