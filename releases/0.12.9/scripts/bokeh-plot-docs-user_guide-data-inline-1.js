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
      };var element = document.getElementById("a111b0ef-8193-4c79-a8a1-153a6e1bae5c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a111b0ef-8193-4c79-a8a1-153a6e1bae5c' but no matching script tag was found. ")
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
                    var docs_json = {"41043c9a-e9fd-45d5-a7e6-1ceb919e659f":{"roots":{"references":[{"attributes":{},"id":"747f519d-eb90-4605-8801-78c8574a408d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6a756e6e-dee9-4d4d-96a1-ffda8bfc67ff","type":"BasicTickFormatter"},"plot":{"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b41a8b63-4fac-45e1-9ad2-254f34e6a9c2","type":"BasicTicker"}},"id":"a66fa6ee-a55d-4057-ab75-6311057a1f45","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6f2eb9ce-8d9a-4b2e-8155-943c219af1e7","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"74ecad9a-6718-45c5-a44c-30aec365b528","type":"BoxAnnotation"},"renderers":[{"id":"2116e4f1-b859-4a4e-9f10-9f8848fadbc9","type":"GlyphRenderer"}]},"id":"ce512bf7-f526-4d39-ac80-2116ccf61e9f","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"76624e64-c8cb-4b5a-ab8c-cddf120263bf","type":"LinearAxis"}],"left":[{"id":"ecccea56-1f33-44dc-9205-69ecf2a51d27","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"76624e64-c8cb-4b5a-ab8c-cddf120263bf","type":"LinearAxis"},{"id":"f1889ff8-0d74-401c-94d5-cd132fbe6a78","type":"Grid"},{"id":"ecccea56-1f33-44dc-9205-69ecf2a51d27","type":"LinearAxis"},{"id":"011a7ca7-daa1-41ed-be29-42f7b0cfa738","type":"Grid"},{"id":"74ecad9a-6718-45c5-a44c-30aec365b528","type":"BoxAnnotation"},{"id":"2116e4f1-b859-4a4e-9f10-9f8848fadbc9","type":"GlyphRenderer"}],"title":{"id":"eeb384c7-54c0-4a66-b30d-95bbba05eb35","type":"Title"},"toolbar":{"id":"1da94954-3334-486e-b605-2d5b5cd8f0ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5af1591-a3b7-427c-bbb8-2c93ec3e70e8","type":"DataRange1d"},"x_scale":{"id":"17af59b1-17dd-4e00-a095-9814ab54341e","type":"LinearScale"},"y_range":{"id":"6f2eb9ce-8d9a-4b2e-8155-943c219af1e7","type":"DataRange1d"},"y_scale":{"id":"fb056b04-d0c5-4b9e-bd4f-ee4df3035126","type":"LinearScale"}},"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"89b26a2a-8a5a-4a95-91c8-6ef894e228e3","type":"BasicTickFormatter"},"plot":{"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},"ticker":{"id":"747f519d-eb90-4605-8801-78c8574a408d","type":"BasicTicker"}},"id":"ecccea56-1f33-44dc-9205-69ecf2a51d27","type":"LinearAxis"},{"attributes":{},"id":"6a756e6e-dee9-4d4d-96a1-ffda8bfc67ff","type":"BasicTickFormatter"},{"attributes":{},"id":"3501b23a-6b6a-44b6-962c-1059dff61dcf","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"ce512bf7-f526-4d39-ac80-2116ccf61e9f","type":"BoxSelectTool"},{"id":"d56774a9-a585-4168-a0a0-98a830a38a9e","type":"HoverTool"},{"id":"31e66ab7-c306-4ef9-9580-a8fae1664226","type":"ResetTool"},{"id":"b5921f26-9d88-42c7-a6b8-8c260bdad58d","type":"BoxSelectTool"},{"id":"1dc620bc-7793-4e87-bab9-0135f2729588","type":"HoverTool"},{"id":"902b3825-9c60-4cd4-a05d-897f2c125f04","type":"ResetTool"}]},"id":"3e859977-7818-4bad-b638-ae950be7e1f3","type":"ToolbarBox"},{"attributes":{},"id":"89b26a2a-8a5a-4a95-91c8-6ef894e228e3","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"001276b9-3654-4cdd-a185-c171c3919f68","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5921f26-9d88-42c7-a6b8-8c260bdad58d","type":"BoxSelectTool"},{"id":"1dc620bc-7793-4e87-bab9-0135f2729588","type":"HoverTool"},{"id":"902b3825-9c60-4cd4-a05d-897f2c125f04","type":"ResetTool"}]},"id":"956335bb-cac6-4ea6-b465-3ac1a116022d","type":"Toolbar"},{"attributes":{},"id":"fb056b04-d0c5-4b9e-bd4f-ee4df3035126","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dabd4e3e-898c-485c-912d-85f15617bb09","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"001276b9-3654-4cdd-a185-c171c3919f68","type":"BoxAnnotation"},"renderers":[{"id":"39a5746d-0e3f-4697-bd6f-5dc0dc6dcb4c","type":"GlyphRenderer"}]},"id":"b5921f26-9d88-42c7-a6b8-8c260bdad58d","type":"BoxSelectTool"},{"attributes":{"filters":[{"id":"b417d6bf-80ac-4d1f-a3f6-5c4a4f38a6a7","type":"BooleanFilter"}],"source":{"id":"b94156e7-500f-4b9f-908e-1bce93594134","type":"ColumnDataSource"}},"id":"3d26ae64-8705-428a-81db-caac4bc8894b","type":"CDSView"},{"attributes":{},"id":"0a8657c1-4083-49da-95d2-4b32913e9ac5","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2e36e71-ff20-4dcc-868e-ade7609804e0","type":"Circle"},{"attributes":{},"id":"31e66ab7-c306-4ef9-9580-a8fae1664226","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},"ticker":{"id":"747f519d-eb90-4605-8801-78c8574a408d","type":"BasicTicker"}},"id":"011a7ca7-daa1-41ed-be29-42f7b0cfa738","type":"Grid"},{"attributes":{},"id":"211af284-6f3e-4f50-b6f7-819acd4f7306","type":"LinearScale"},{"attributes":{"plot":{"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3501b23a-6b6a-44b6-962c-1059dff61dcf","type":"BasicTicker"}},"id":"f1889ff8-0d74-401c-94d5-cd132fbe6a78","type":"Grid"},{"attributes":{"source":{"id":"b94156e7-500f-4b9f-908e-1bce93594134","type":"ColumnDataSource"}},"id":"00fa469c-b1b6-406f-8c32-58286dfc7f9b","type":"CDSView"},{"attributes":{"children":[{"id":"3e859977-7818-4bad-b638-ae950be7e1f3","type":"ToolbarBox"},{"id":"eb8577d2-cd8c-4cf4-a916-3d513342a532","type":"Column"}]},"id":"060f6088-9927-42ec-96c2-ad0e040981ff","type":"Column"},{"attributes":{},"id":"edfb7728-dc61-4cf9-b6ab-e15ec54760a1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8fcea3b0-0c2c-43d0-a341-ea283f41db21","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e28de7d3-709e-4d87-94c6-33ccf74f9d89","type":"Circle"},{"attributes":{"below":[{"id":"9c8ff68f-5774-4581-bca1-157b823f1824","type":"LinearAxis"}],"left":[{"id":"a66fa6ee-a55d-4057-ab75-6311057a1f45","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9c8ff68f-5774-4581-bca1-157b823f1824","type":"LinearAxis"},{"id":"73b37bdd-2e85-4ecd-97b9-88b145defd1e","type":"Grid"},{"id":"a66fa6ee-a55d-4057-ab75-6311057a1f45","type":"LinearAxis"},{"id":"47c3a9f2-d936-4a22-adf8-1b03bc0e8378","type":"Grid"},{"id":"001276b9-3654-4cdd-a185-c171c3919f68","type":"BoxAnnotation"},{"id":"39a5746d-0e3f-4697-bd6f-5dc0dc6dcb4c","type":"GlyphRenderer"}],"title":{"id":"0010549f-ef76-4731-b61c-b2ed716145d0","type":"Title"},"toolbar":{"id":"956335bb-cac6-4ea6-b465-3ac1a116022d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5af1591-a3b7-427c-bbb8-2c93ec3e70e8","type":"DataRange1d"},"x_scale":{"id":"211af284-6f3e-4f50-b6f7-819acd4f7306","type":"LinearScale"},"y_range":{"id":"6f2eb9ce-8d9a-4b2e-8155-943c219af1e7","type":"DataRange1d"},"y_scale":{"id":"0a8657c1-4083-49da-95d2-4b32913e9ac5","type":"LinearScale"}},"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"07677573-5689-4f4f-94cf-145b24a02ff5","type":"Circle"},{"attributes":{"callback":null},"id":"a5af1591-a3b7-427c-bbb8-2c93ec3e70e8","type":"DataRange1d"},{"attributes":{},"id":"1882dfcd-14f8-40a9-9b82-cb92a88200fe","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"b94156e7-500f-4b9f-908e-1bce93594134","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"eeb384c7-54c0-4a66-b30d-95bbba05eb35","type":"Title"},{"attributes":{},"id":"b41a8b63-4fac-45e1-9ad2-254f34e6a9c2","type":"BasicTicker"},{"attributes":{},"id":"761d10d7-a7d4-4548-ae2b-3f165cd148a7","type":"BasicTicker"},{"attributes":{"plot":{"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"761d10d7-a7d4-4548-ae2b-3f165cd148a7","type":"BasicTicker"}},"id":"73b37bdd-2e85-4ecd-97b9-88b145defd1e","type":"Grid"},{"attributes":{},"id":"17af59b1-17dd-4e00-a095-9814ab54341e","type":"LinearScale"},{"attributes":{"data_source":{"id":"b94156e7-500f-4b9f-908e-1bce93594134","type":"ColumnDataSource"},"glyph":{"id":"07677573-5689-4f4f-94cf-145b24a02ff5","type":"Circle"},"hover_glyph":{"id":"e28de7d3-709e-4d87-94c6-33ccf74f9d89","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"7bd74338-3337-4f2d-b3c0-0966805dccff","type":"Circle"},"selection_glyph":null,"view":{"id":"3d26ae64-8705-428a-81db-caac4bc8894b","type":"CDSView"}},"id":"39a5746d-0e3f-4697-bd6f-5dc0dc6dcb4c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"0010549f-ef76-4731-b61c-b2ed716145d0","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b41a8b63-4fac-45e1-9ad2-254f34e6a9c2","type":"BasicTicker"}},"id":"47c3a9f2-d936-4a22-adf8-1b03bc0e8378","type":"Grid"},{"attributes":{"formatter":{"id":"edfb7728-dc61-4cf9-b6ab-e15ec54760a1","type":"BasicTickFormatter"},"plot":{"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3501b23a-6b6a-44b6-962c-1059dff61dcf","type":"BasicTicker"}},"id":"76624e64-c8cb-4b5a-ab8c-cddf120263bf","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1dc620bc-7793-4e87-bab9-0135f2729588","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bd74338-3337-4f2d-b3c0-0966805dccff","type":"Circle"},{"attributes":{"callback":null},"id":"d56774a9-a585-4168-a0a0-98a830a38a9e","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ce512bf7-f526-4d39-ac80-2116ccf61e9f","type":"BoxSelectTool"},{"id":"d56774a9-a585-4168-a0a0-98a830a38a9e","type":"HoverTool"},{"id":"31e66ab7-c306-4ef9-9580-a8fae1664226","type":"ResetTool"}]},"id":"1da94954-3334-486e-b605-2d5b5cd8f0ea","type":"Toolbar"},{"attributes":{"formatter":{"id":"1882dfcd-14f8-40a9-9b82-cb92a88200fe","type":"BasicTickFormatter"},"plot":{"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"761d10d7-a7d4-4548-ae2b-3f165cd148a7","type":"BasicTicker"}},"id":"9c8ff68f-5774-4581-bca1-157b823f1824","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74ecad9a-6718-45c5-a44c-30aec365b528","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"4e785fd9-4c7b-4baf-ad22-906ffcdc0ae8","subtype":"Figure","type":"Plot"},{"id":"75ca7128-7feb-4349-adb6-07a1d81803cc","subtype":"Figure","type":"Plot"}]},"id":"fa015943-5b9f-4e30-bd2c-f7d6a1ba159c","type":"Row"},{"attributes":{},"id":"902b3825-9c60-4cd4-a05d-897f2c125f04","type":"ResetTool"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"b417d6bf-80ac-4d1f-a3f6-5c4a4f38a6a7","type":"BooleanFilter"},{"attributes":{"data_source":{"id":"b94156e7-500f-4b9f-908e-1bce93594134","type":"ColumnDataSource"},"glyph":{"id":"dabd4e3e-898c-485c-912d-85f15617bb09","type":"Circle"},"hover_glyph":{"id":"a2e36e71-ff20-4dcc-868e-ade7609804e0","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"8fcea3b0-0c2c-43d0-a341-ea283f41db21","type":"Circle"},"selection_glyph":null,"view":{"id":"00fa469c-b1b6-406f-8c32-58286dfc7f9b","type":"CDSView"}},"id":"2116e4f1-b859-4a4e-9f10-9f8848fadbc9","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"fa015943-5b9f-4e30-bd2c-f7d6a1ba159c","type":"Row"}]},"id":"eb8577d2-cd8c-4cf4-a916-3d513342a532","type":"Column"}],"root_ids":["060f6088-9927-42ec-96c2-ad0e040981ff"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"41043c9a-e9fd-45d5-a7e6-1ceb919e659f","elementid":"a111b0ef-8193-4c79-a8a1-153a6e1bae5c","modelid":"060f6088-9927-42ec-96c2-ad0e040981ff"}];
                
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
