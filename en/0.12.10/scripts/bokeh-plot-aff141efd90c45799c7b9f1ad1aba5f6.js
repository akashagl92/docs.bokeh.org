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
      };var element = document.getElementById("86aab69e-e5c8-4994-8037-7ec5cee2dd58");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86aab69e-e5c8-4994-8037-7ec5cee2dd58' but no matching script tag was found. ")
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
                    var docs_json = {"d3cc88ad-2a43-4c22-87f8-e8e15a382652":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"253c35df-26e4-4a51-85a5-a3ed466bdab3","type":"Circle"},{"attributes":{"callback":null,"tabs":[{"id":"0d48ba1a-effc-4c36-b8f2-3256d9adae8f","type":"Panel"},{"id":"de10fb02-4626-45e5-a495-7c2a878219bd","type":"Panel"}]},"id":"c69fb78b-cbc0-458d-ba39-6ac24a7ac70c","type":"Tabs"},{"attributes":{"below":[{"id":"f9bd092d-233a-4386-ac60-00afa2f376a5","type":"LinearAxis"}],"left":[{"id":"cc7e492b-0a35-47ea-8c7e-e2942fa9f108","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f9bd092d-233a-4386-ac60-00afa2f376a5","type":"LinearAxis"},{"id":"a50db9f2-d61e-4cd6-b200-d2ba776cb07c","type":"Grid"},{"id":"cc7e492b-0a35-47ea-8c7e-e2942fa9f108","type":"LinearAxis"},{"id":"619b62d6-5070-4de9-b45b-7953fe869cdd","type":"Grid"},{"id":"d93f715a-5558-4a1b-bcf0-fcb920f19f9f","type":"BoxAnnotation"},{"id":"dc8ba02a-132d-450b-b43d-1848b56c75c2","type":"GlyphRenderer"}],"title":{"id":"bbb8d0e8-8bfa-417d-b166-7c90403695ec","type":"Title"},"toolbar":{"id":"7878a22a-8878-4997-98bc-1f7be2d9b135","type":"Toolbar"},"x_range":{"id":"8e332d6f-783c-4db1-8d7d-5d451133a8ba","type":"DataRange1d"},"x_scale":{"id":"911122e3-e979-4954-8370-f644bfc047f7","type":"LinearScale"},"y_range":{"id":"59051bb9-9a0f-4d83-bb54-553d944d3125","type":"DataRange1d"},"y_scale":{"id":"8341abb4-66e8-49a8-8faf-bf714d3e0120","type":"LinearScale"}},"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"59051bb9-9a0f-4d83-bb54-553d944d3125","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8e332d6f-783c-4db1-8d7d-5d451133a8ba","type":"DataRange1d"},{"attributes":{"child":{"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},"title":"line"},"id":"de10fb02-4626-45e5-a495-7c2a878219bd","type":"Panel"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67179018-7cc0-4c70-9f58-8520c5f71134","type":"PanTool"},{"id":"7289b2cd-55db-4480-80a9-1530849a0b58","type":"WheelZoomTool"},{"id":"327d7afa-ae21-4bfe-a09b-8ebf14a67e6b","type":"BoxZoomTool"},{"id":"7c9d05e8-290d-4bcd-b093-108ee027fe60","type":"SaveTool"},{"id":"25c658e8-3d6b-46e8-ad1b-7be52a9f08ed","type":"ResetTool"},{"id":"49af47c0-c36c-4976-ae25-c4b109889aa2","type":"HelpTool"}]},"id":"7878a22a-8878-4997-98bc-1f7be2d9b135","type":"Toolbar"},{"attributes":{},"id":"d73bda81-779e-4959-8b93-789f61eb8156","type":"LinearScale"},{"attributes":{},"id":"0b64ea35-48b4-43d0-891a-d0108a554f4e","type":"BasicTicker"},{"attributes":{},"id":"c2f46112-949e-47a1-8629-b96580d61bdd","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bcd5c78-bc59-4dd1-9521-0bd2a3ae5d0c","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"22629839-2ea8-4b08-b1d0-0cba757efd59","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e27b5dd-10cf-430b-b3d6-b3cbbeaf9f54","type":"PanTool"},{"id":"dbd96e77-7c8c-409b-8e91-7399e1598143","type":"WheelZoomTool"},{"id":"c4de93f4-06a0-4389-915f-262f6782eb93","type":"BoxZoomTool"},{"id":"4e7a3e60-2e7c-40c3-9f1e-33f13da02430","type":"SaveTool"},{"id":"caa33065-bc93-4a6b-94d1-8f128783f721","type":"ResetTool"},{"id":"dde44945-1a69-4f4d-99f6-7c2338b20caa","type":"HelpTool"}]},"id":"d13a0549-5001-4df3-abc1-89ba01dea0ea","type":"Toolbar"},{"attributes":{"plot":{"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b64ea35-48b4-43d0-891a-d0108a554f4e","type":"BasicTicker"}},"id":"a50db9f2-d61e-4cd6-b200-d2ba776cb07c","type":"Grid"},{"attributes":{"child":{"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"0d48ba1a-effc-4c36-b8f2-3256d9adae8f","type":"Panel"},{"attributes":{"plot":{"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e75efb4-189d-46af-bc6a-c20a0a20e4db","type":"BasicTicker"}},"id":"0e800668-a42f-4dcf-9027-aa824c5c8d7e","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c65597b-266d-4433-955b-0028e639e4c4","type":"BasicTicker"}},"id":"f37940b3-98f4-464e-b37c-635f3868ad35","type":"Grid"},{"attributes":{"formatter":{"id":"79ebf7ef-5e3f-4b25-b973-30ad2de9ef93","type":"BasicTickFormatter"},"plot":{"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e75efb4-189d-46af-bc6a-c20a0a20e4db","type":"BasicTicker"}},"id":"e7338644-27d9-4d98-9011-392195bc79a5","type":"LinearAxis"},{"attributes":{},"id":"8341abb4-66e8-49a8-8faf-bf714d3e0120","type":"LinearScale"},{"attributes":{},"id":"7c65597b-266d-4433-955b-0028e639e4c4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"424cd843-fd76-4046-a7af-14058dc52085","type":"BasicTickFormatter"},"plot":{"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b64ea35-48b4-43d0-891a-d0108a554f4e","type":"BasicTicker"}},"id":"f9bd092d-233a-4386-ac60-00afa2f376a5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"d448cf87-c635-45f2-b45c-e2dd8c24729c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c53deae-a35d-4da9-a48c-f3b6a5eeb60f","type":"BoxAnnotation"},{"attributes":{},"id":"911122e3-e979-4954-8370-f644bfc047f7","type":"LinearScale"},{"attributes":{},"id":"3e27b5dd-10cf-430b-b3d6-b3cbbeaf9f54","type":"PanTool"},{"attributes":{"source":{"id":"d448cf87-c635-45f2-b45c-e2dd8c24729c","type":"ColumnDataSource"}},"id":"503d951a-4422-44b9-9d2b-4b9c14249861","type":"CDSView"},{"attributes":{"formatter":{"id":"a4c3c6f7-1d5f-4b0a-ac4b-b34240afa12e","type":"BasicTickFormatter"},"plot":{"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c65597b-266d-4433-955b-0028e639e4c4","type":"BasicTicker"}},"id":"af058aa3-9bb1-41d9-8f57-490f54411bd3","type":"LinearAxis"},{"attributes":{},"id":"dbd96e77-7c8c-409b-8e91-7399e1598143","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1c53deae-a35d-4da9-a48c-f3b6a5eeb60f","type":"BoxAnnotation"}},"id":"c4de93f4-06a0-4389-915f-262f6782eb93","type":"BoxZoomTool"},{"attributes":{},"id":"4e7a3e60-2e7c-40c3-9f1e-33f13da02430","type":"SaveTool"},{"attributes":{},"id":"caa33065-bc93-4a6b-94d1-8f128783f721","type":"ResetTool"},{"attributes":{},"id":"dde44945-1a69-4f4d-99f6-7c2338b20caa","type":"HelpTool"},{"attributes":{},"id":"79ebf7ef-5e3f-4b25-b973-30ad2de9ef93","type":"BasicTickFormatter"},{"attributes":{},"id":"a4c3c6f7-1d5f-4b0a-ac4b-b34240afa12e","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d93f715a-5558-4a1b-bcf0-fcb920f19f9f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"dc5cec94-e1e6-4e00-89fd-fe5570e7334b","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f003249-d507-40ef-b916-3b0f6b756fb4","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"bbb8d0e8-8bfa-417d-b166-7c90403695ec","type":"Title"},{"attributes":{"data_source":{"id":"d448cf87-c635-45f2-b45c-e2dd8c24729c","type":"ColumnDataSource"},"glyph":{"id":"0f003249-d507-40ef-b916-3b0f6b756fb4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3bcd5c78-bc59-4dd1-9521-0bd2a3ae5d0c","type":"Line"},"selection_glyph":null,"view":{"id":"503d951a-4422-44b9-9d2b-4b9c14249861","type":"CDSView"}},"id":"7f956f79-1fd9-43be-bac7-2745301c8aa2","type":"GlyphRenderer"},{"attributes":{},"id":"424cd843-fd76-4046-a7af-14058dc52085","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"22629839-2ea8-4b08-b1d0-0cba757efd59","type":"ColumnDataSource"}},"id":"7e7d3c6f-b75d-40c1-8110-fe2d2ab36f7b","type":"CDSView"},{"attributes":{},"id":"67179018-7cc0-4c70-9f58-8520c5f71134","type":"PanTool"},{"attributes":{"below":[{"id":"e7338644-27d9-4d98-9011-392195bc79a5","type":"LinearAxis"}],"left":[{"id":"af058aa3-9bb1-41d9-8f57-490f54411bd3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e7338644-27d9-4d98-9011-392195bc79a5","type":"LinearAxis"},{"id":"0e800668-a42f-4dcf-9027-aa824c5c8d7e","type":"Grid"},{"id":"af058aa3-9bb1-41d9-8f57-490f54411bd3","type":"LinearAxis"},{"id":"f37940b3-98f4-464e-b37c-635f3868ad35","type":"Grid"},{"id":"1c53deae-a35d-4da9-a48c-f3b6a5eeb60f","type":"BoxAnnotation"},{"id":"7f956f79-1fd9-43be-bac7-2745301c8aa2","type":"GlyphRenderer"}],"title":{"id":"dda71087-6599-437f-9133-d58c90cb8ca5","type":"Title"},"toolbar":{"id":"d13a0549-5001-4df3-abc1-89ba01dea0ea","type":"Toolbar"},"x_range":{"id":"dc5cec94-e1e6-4e00-89fd-fe5570e7334b","type":"DataRange1d"},"x_scale":{"id":"d73bda81-779e-4959-8b93-789f61eb8156","type":"LinearScale"},"y_range":{"id":"fe919ae7-df13-4589-9034-35b2fad5b3cc","type":"DataRange1d"},"y_scale":{"id":"c2f46112-949e-47a1-8629-b96580d61bdd","type":"LinearScale"}},"id":"de448759-ac3c-4f25-a7cf-c862771f67bf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7289b2cd-55db-4480-80a9-1530849a0b58","type":"WheelZoomTool"},{"attributes":{},"id":"25c658e8-3d6b-46e8-ad1b-7be52a9f08ed","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bb9de2c-424b-4899-b561-74ea612539ac","type":"Circle"},{"attributes":{},"id":"4e75efb4-189d-46af-bc6a-c20a0a20e4db","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f24d3e21-f865-44f2-a785-88d1a0b47f72","type":"BasicTickFormatter"},"plot":{"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3fe54a-066a-40e0-9bab-ffb454043117","type":"BasicTicker"}},"id":"cc7e492b-0a35-47ea-8c7e-e2942fa9f108","type":"LinearAxis"},{"attributes":{"overlay":{"id":"d93f715a-5558-4a1b-bcf0-fcb920f19f9f","type":"BoxAnnotation"}},"id":"327d7afa-ae21-4bfe-a09b-8ebf14a67e6b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"fe919ae7-df13-4589-9034-35b2fad5b3cc","type":"DataRange1d"},{"attributes":{},"id":"7c3fe54a-066a-40e0-9bab-ffb454043117","type":"BasicTicker"},{"attributes":{},"id":"f24d3e21-f865-44f2-a785-88d1a0b47f72","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"dda71087-6599-437f-9133-d58c90cb8ca5","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"1873bab3-bb49-408b-a8f3-9a4b31a60804","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3fe54a-066a-40e0-9bab-ffb454043117","type":"BasicTicker"}},"id":"619b62d6-5070-4de9-b45b-7953fe869cdd","type":"Grid"},{"attributes":{},"id":"49af47c0-c36c-4976-ae25-c4b109889aa2","type":"HelpTool"},{"attributes":{"data_source":{"id":"22629839-2ea8-4b08-b1d0-0cba757efd59","type":"ColumnDataSource"},"glyph":{"id":"253c35df-26e4-4a51-85a5-a3ed466bdab3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0bb9de2c-424b-4899-b561-74ea612539ac","type":"Circle"},"selection_glyph":null,"view":{"id":"7e7d3c6f-b75d-40c1-8110-fe2d2ab36f7b","type":"CDSView"}},"id":"dc8ba02a-132d-450b-b43d-1848b56c75c2","type":"GlyphRenderer"},{"attributes":{},"id":"7c9d05e8-290d-4bcd-b093-108ee027fe60","type":"SaveTool"}],"root_ids":["c69fb78b-cbc0-458d-ba39-6ac24a7ac70c"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d3cc88ad-2a43-4c22-87f8-e8e15a382652","elementid":"86aab69e-e5c8-4994-8037-7ec5cee2dd58","modelid":"c69fb78b-cbc0-458d-ba39-6ac24a7ac70c"}];
                
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
