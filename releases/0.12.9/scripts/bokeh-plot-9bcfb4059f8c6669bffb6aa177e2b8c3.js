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
      };var element = document.getElementById("37c3fd3a-e152-452e-b19a-20116dcb869e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37c3fd3a-e152-452e-b19a-20116dcb869e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"34b9b8b1-643d-47c7-b651-d076311dca52":{"roots":{"references":[{"attributes":{"plot":{"id":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99","subtype":"Figure","type":"Plot"},"ticker":{"id":"3721e694-9e26-438f-bf62-263b69e35720","type":"BasicTicker"}},"id":"fc8a3517-368d-46eb-9992-383f6c8ae950","type":"Grid"},{"attributes":{"callback":null},"id":"95383bf4-11d5-4576-b6d1-917c343fe904","type":"DataRange1d"},{"attributes":{},"id":"15a0625c-fba5-4420-8782-b7ad44c3b901","type":"BasicTickFormatter"},{"attributes":{},"id":"670e0b37-bee2-43f1-be91-a2afc47f1f91","type":"HelpTool"},{"attributes":{"callback":null},"id":"14c52508-ba39-402b-bbb2-4904d4749d4e","type":"DataRange1d"},{"attributes":{},"id":"1c28b797-48f1-4d26-95e3-12ab60901d3c","type":"ResetTool"},{"attributes":{},"id":"793997af-fd66-4277-8a19-937ce3adfc0d","type":"LinearScale"},{"attributes":{},"id":"1047e293-1a49-4fe1-a07a-fd2fea715633","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"dde36d4e-8a60-4346-b439-3674def8d0e4","type":"Title"},{"attributes":{"formatter":{"id":"78e966c6-3bfd-4ad1-9ad0-5beda4a347ca","type":"BasicTickFormatter"},"plot":{"id":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0af3b39-e458-4d5a-a6a8-edf253b85c78","type":"BasicTicker"}},"id":"5fab1818-cb69-420e-a79c-901e96dca035","type":"LinearAxis"},{"attributes":{},"id":"90fe98d5-07dd-4f51-92f3-9a15ac47bb6c","type":"PanTool"},{"attributes":{"overlay":{"id":"cf878f64-3b95-42bc-b18a-55d888eb8448","type":"BoxAnnotation"}},"id":"a55d7fda-68b6-4491-83fd-f3f22c261275","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"7e6ab189-a756-4c37-ba8a-9f3bcee30a46","type":"Patches"},{"attributes":{"formatter":{"id":"15a0625c-fba5-4420-8782-b7ad44c3b901","type":"BasicTickFormatter"},"plot":{"id":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99","subtype":"Figure","type":"Plot"},"ticker":{"id":"3721e694-9e26-438f-bf62-263b69e35720","type":"BasicTicker"}},"id":"6caf60bd-2d7d-42f2-9a9e-21dd6c73eca6","type":"LinearAxis"},{"attributes":{},"id":"97ae21b1-e0c2-4908-82fc-6ea1d40cfebb","type":"LinearScale"},{"attributes":{},"id":"a2bdb95d-4668-4fd5-9dfd-667035375d6f","type":"WheelZoomTool"},{"attributes":{},"id":"3721e694-9e26-438f-bf62-263b69e35720","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color","fill_alpha","line_alpha"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"6dad9dfc-d1c7-41a4-a0bc-2c354564b8ef","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6dad9dfc-d1c7-41a4-a0bc-2c354564b8ef","type":"ColumnDataSource"}},"id":"8bbf696c-a0f7-47b1-9a3b-3973ff9ff3a5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"4195cb7a-9456-4bed-8cbf-1f32e0db96f7","type":"Patches"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"90fe98d5-07dd-4f51-92f3-9a15ac47bb6c","type":"PanTool"},{"id":"a2bdb95d-4668-4fd5-9dfd-667035375d6f","type":"WheelZoomTool"},{"id":"a55d7fda-68b6-4491-83fd-f3f22c261275","type":"BoxZoomTool"},{"id":"1047e293-1a49-4fe1-a07a-fd2fea715633","type":"SaveTool"},{"id":"1c28b797-48f1-4d26-95e3-12ab60901d3c","type":"ResetTool"},{"id":"670e0b37-bee2-43f1-be91-a2afc47f1f91","type":"HelpTool"}]},"id":"fd38b887-8e28-4ac7-aa6b-420177387b26","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf878f64-3b95-42bc-b18a-55d888eb8448","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6caf60bd-2d7d-42f2-9a9e-21dd6c73eca6","type":"LinearAxis"}],"left":[{"id":"5fab1818-cb69-420e-a79c-901e96dca035","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6caf60bd-2d7d-42f2-9a9e-21dd6c73eca6","type":"LinearAxis"},{"id":"fc8a3517-368d-46eb-9992-383f6c8ae950","type":"Grid"},{"id":"5fab1818-cb69-420e-a79c-901e96dca035","type":"LinearAxis"},{"id":"8cf51270-f4af-4079-b8c2-30ffd1711e6e","type":"Grid"},{"id":"cf878f64-3b95-42bc-b18a-55d888eb8448","type":"BoxAnnotation"},{"id":"c9c8096b-17cf-454c-a97b-5fbc3e79020a","type":"GlyphRenderer"}],"title":{"id":"dde36d4e-8a60-4346-b439-3674def8d0e4","type":"Title"},"toolbar":{"id":"fd38b887-8e28-4ac7-aa6b-420177387b26","type":"Toolbar"},"x_range":{"id":"95383bf4-11d5-4576-b6d1-917c343fe904","type":"DataRange1d"},"x_scale":{"id":"793997af-fd66-4277-8a19-937ce3adfc0d","type":"LinearScale"},"y_range":{"id":"14c52508-ba39-402b-bbb2-4904d4749d4e","type":"DataRange1d"},"y_scale":{"id":"97ae21b1-e0c2-4908-82fc-6ea1d40cfebb","type":"LinearScale"}},"id":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0af3b39-e458-4d5a-a6a8-edf253b85c78","type":"BasicTicker"}},"id":"8cf51270-f4af-4079-b8c2-30ffd1711e6e","type":"Grid"},{"attributes":{"data_source":{"id":"6dad9dfc-d1c7-41a4-a0bc-2c354564b8ef","type":"ColumnDataSource"},"glyph":{"id":"7e6ab189-a756-4c37-ba8a-9f3bcee30a46","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4195cb7a-9456-4bed-8cbf-1f32e0db96f7","type":"Patches"},"selection_glyph":null,"view":{"id":"8bbf696c-a0f7-47b1-9a3b-3973ff9ff3a5","type":"CDSView"}},"id":"c9c8096b-17cf-454c-a97b-5fbc3e79020a","type":"GlyphRenderer"},{"attributes":{},"id":"78e966c6-3bfd-4ad1-9ad0-5beda4a347ca","type":"BasicTickFormatter"},{"attributes":{},"id":"c0af3b39-e458-4d5a-a6a8-edf253b85c78","type":"BasicTicker"}],"root_ids":["b52dd85a-0720-4631-b6b2-81f6e3b9bb99"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"34b9b8b1-643d-47c7-b651-d076311dca52","elementid":"37c3fd3a-e152-452e-b19a-20116dcb869e","modelid":"b52dd85a-0720-4631-b6b2-81f6e3b9bb99"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
