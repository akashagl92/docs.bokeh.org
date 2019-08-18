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
      };var element = document.getElementById("369b452a-4a8a-4bc3-8d7f-b24c2a2ffd41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '369b452a-4a8a-4bc3-8d7f-b24c2a2ffd41' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"d6d71038-a293-49fb-b3ef-68aaf15c0119":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"f8273525-480b-4081-8d7f-0b51426d3ee3","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f8273525-480b-4081-8d7f-0b51426d3ee3","type":"ColumnDataSource"}},"id":"0c9d97eb-d7b2-4113-815d-a7358a7c2a90","type":"CDSView"},{"attributes":{"callback":null},"id":"0983b4de-1c3a-426b-8c3a-76d1a686c4b0","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"65b84796-0851-48e0-b991-3358918e52f7","type":"Title"},{"attributes":{"plot":{"id":"a077b202-6127-45f7-875b-c18ecac58e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb934542-4727-457b-994e-5dc45bfc1e94","type":"BasicTicker"}},"id":"60f9ed1e-70fd-4ca6-af93-867e178e01c6","type":"Grid"},{"attributes":{"overlay":{"id":"c7dbfbba-88f8-40f3-bd7a-265eb2c7bb8b","type":"BoxAnnotation"}},"id":"451c7da1-44c1-49fb-b456-3888163ebf03","type":"BoxZoomTool"},{"attributes":{},"id":"4f1b337b-8279-4166-95cb-7ecbc1141750","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c7dbfbba-88f8-40f3-bd7a-265eb2c7bb8b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7c1be70d-f3cd-4c6e-9967-08cde9fedc08","type":"BasicTickFormatter"},"plot":{"id":"a077b202-6127-45f7-875b-c18ecac58e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb934542-4727-457b-994e-5dc45bfc1e94","type":"BasicTicker"}},"id":"b5239e08-78f9-4da8-8f8d-1f656cd1f6c7","type":"LinearAxis"},{"attributes":{},"id":"b1c2f9e1-854e-4dbf-b614-3c45f57ab334","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b86c43c5-cee4-4a4c-9332-47801398ce23","type":"Circle"},{"attributes":{},"id":"7c1be70d-f3cd-4c6e-9967-08cde9fedc08","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f8273525-480b-4081-8d7f-0b51426d3ee3","type":"ColumnDataSource"},"glyph":{"id":"b86c43c5-cee4-4a4c-9332-47801398ce23","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69a7f6dc-4557-4e65-932e-e65dd890e90f","type":"Circle"},"selection_glyph":null,"view":{"id":"0c9d97eb-d7b2-4113-815d-a7358a7c2a90","type":"CDSView"}},"id":"afc8a8e7-5f37-48c1-a959-e9368b0f0100","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"69a7f6dc-4557-4e65-932e-e65dd890e90f","type":"Circle"},{"attributes":{},"id":"7675f590-46c8-4823-8927-75473a0d7d83","type":"LinearScale"},{"attributes":{},"id":"835229f7-b2db-451d-929f-65317df9d158","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"a077b202-6127-45f7-875b-c18ecac58e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e7c6f7a-ebda-4af4-bef7-9627f506306b","type":"BasicTicker"}},"id":"870ec61d-7d1c-42da-aaf0-fb36533958e0","type":"Grid"},{"attributes":{},"id":"e26bd582-473e-4725-b14e-83731ed5dc33","type":"SaveTool"},{"attributes":{"callback":null},"id":"f739d676-143d-4031-b4cb-2487d13863c7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"eb45b2a6-8f13-475c-ac49-68aa5cc12729","type":"BasicTickFormatter"},"plot":{"id":"a077b202-6127-45f7-875b-c18ecac58e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e7c6f7a-ebda-4af4-bef7-9627f506306b","type":"BasicTicker"}},"id":"61abcba6-bf8a-4c17-90cb-615985e93b01","type":"LinearAxis"},{"attributes":{},"id":"eb45b2a6-8f13-475c-ac49-68aa5cc12729","type":"BasicTickFormatter"},{"attributes":{},"id":"cb934542-4727-457b-994e-5dc45bfc1e94","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"835229f7-b2db-451d-929f-65317df9d158","type":"PanTool"},{"id":"4f1b337b-8279-4166-95cb-7ecbc1141750","type":"WheelZoomTool"},{"id":"451c7da1-44c1-49fb-b456-3888163ebf03","type":"BoxZoomTool"},{"id":"e26bd582-473e-4725-b14e-83731ed5dc33","type":"SaveTool"},{"id":"b1c2f9e1-854e-4dbf-b614-3c45f57ab334","type":"ResetTool"},{"id":"42a0865c-88db-4d14-85c5-5c0ec3f470de","type":"HelpTool"}]},"id":"3fc50758-1a58-4520-9dbb-e8341cd932fc","type":"Toolbar"},{"attributes":{},"id":"6a751981-39f1-4d15-a1f0-ffd3885b4107","type":"LinearScale"},{"attributes":{},"id":"42a0865c-88db-4d14-85c5-5c0ec3f470de","type":"HelpTool"},{"attributes":{},"id":"0e7c6f7a-ebda-4af4-bef7-9627f506306b","type":"BasicTicker"},{"attributes":{"below":[{"id":"b5239e08-78f9-4da8-8f8d-1f656cd1f6c7","type":"LinearAxis"}],"left":[{"id":"61abcba6-bf8a-4c17-90cb-615985e93b01","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b5239e08-78f9-4da8-8f8d-1f656cd1f6c7","type":"LinearAxis"},{"id":"60f9ed1e-70fd-4ca6-af93-867e178e01c6","type":"Grid"},{"id":"61abcba6-bf8a-4c17-90cb-615985e93b01","type":"LinearAxis"},{"id":"870ec61d-7d1c-42da-aaf0-fb36533958e0","type":"Grid"},{"id":"c7dbfbba-88f8-40f3-bd7a-265eb2c7bb8b","type":"BoxAnnotation"},{"id":"afc8a8e7-5f37-48c1-a959-e9368b0f0100","type":"GlyphRenderer"}],"title":{"id":"65b84796-0851-48e0-b991-3358918e52f7","type":"Title"},"toolbar":{"id":"3fc50758-1a58-4520-9dbb-e8341cd932fc","type":"Toolbar"},"x_range":{"id":"0983b4de-1c3a-426b-8c3a-76d1a686c4b0","type":"DataRange1d"},"x_scale":{"id":"6a751981-39f1-4d15-a1f0-ffd3885b4107","type":"LinearScale"},"y_range":{"id":"f739d676-143d-4031-b4cb-2487d13863c7","type":"DataRange1d"},"y_scale":{"id":"7675f590-46c8-4823-8927-75473a0d7d83","type":"LinearScale"}},"id":"a077b202-6127-45f7-875b-c18ecac58e2f","subtype":"Figure","type":"Plot"}],"root_ids":["a077b202-6127-45f7-875b-c18ecac58e2f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d6d71038-a293-49fb-b3ef-68aaf15c0119","elementid":"369b452a-4a8a-4bc3-8d7f-b24c2a2ffd41","modelid":"a077b202-6127-45f7-875b-c18ecac58e2f"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
