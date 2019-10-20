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
      };var element = document.getElementById("c595be92-7f0a-40be-8750-4b4a6d91409b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c595be92-7f0a-40be-8750-4b4a6d91409b' but no matching script tag was found. ")
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
                    var docs_json = {"b4cb82ef-dd9e-4e90-b2d5-e7dfe617b35f":{"roots":{"references":[{"attributes":{"children":[{"id":"f9c22ac5-bf1d-4538-92d2-962e32e5cc46","type":"Row"}]},"id":"70d55608-20b1-4901-a1b1-4cd8b735aa8a","type":"Column"},{"attributes":{},"id":"bb9f0d64-45ef-4655-8e5d-2f91ccab1967","type":"LinearScale"},{"attributes":{},"id":"3eb92201-f546-4a57-b158-47e02a1f03f2","type":"BasicTicker"},{"attributes":{"below":[{"id":"fd949c45-a146-4f05-bc2f-efbb876961d2","type":"LinearAxis"}],"left":[{"id":"77ad2b74-c53e-41ff-9789-4da940bb52c3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fd949c45-a146-4f05-bc2f-efbb876961d2","type":"LinearAxis"},{"id":"fe4a42b1-c3a6-4d84-bef4-8e0804fbd249","type":"Grid"},{"id":"77ad2b74-c53e-41ff-9789-4da940bb52c3","type":"LinearAxis"},{"id":"80333395-2f05-4a0f-9d99-df4950630e84","type":"Grid"},{"id":"6de4ea1f-cf95-4939-bc88-6ad58b2bf238","type":"BoxAnnotation"},{"id":"362e6b7a-59bc-4507-b215-8b0783ea6ab4","type":"GlyphRenderer"}],"title":{"id":"917ad237-f21c-4db6-8807-e6800e686207","type":"Title"},"toolbar":{"id":"e211b77c-d870-4d33-a808-dea984fe2a6b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b0b05558-2958-41ed-b967-427fd6fce52d","type":"DataRange1d"},"x_scale":{"id":"d7a8c5f9-24d5-4af2-a14e-8fa34fd7490d","type":"LinearScale"},"y_range":{"id":"5384d948-79fe-4cdb-854a-6b341e43147c","type":"DataRange1d"},"y_scale":{"id":"680dea12-d918-4a91-840c-b802a15bd68c","type":"LinearScale"}},"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"362acc87-24b6-45a4-88b1-c4c08dd9fd4b","type":"BasicTickFormatter"},"plot":{"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2050cae1-6b31-40c0-b784-7082cfea0109","type":"BasicTicker"}},"id":"24bb0ab9-c2c5-46bf-9166-0677d9f63258","type":"LinearAxis"},{"attributes":{"formatter":{"id":"df233b76-8266-4029-9565-4024c36569ac","type":"BasicTickFormatter"},"plot":{"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3eb92201-f546-4a57-b158-47e02a1f03f2","type":"BasicTicker"}},"id":"0d99bf1a-aaab-495d-a230-326af6356743","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"5f1763ff-2f48-4c25-863c-68691a676432","type":"Title"},{"attributes":{},"id":"397dcafc-b76f-4b6f-8f4a-fa1d79ea4b9d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"6de4ea1f-cf95-4939-bc88-6ad58b2bf238","type":"BoxAnnotation"},"renderers":[{"id":"362e6b7a-59bc-4507-b215-8b0783ea6ab4","type":"GlyphRenderer"}]},"id":"02e085ab-34b6-4a44-a5f0-db5478a0434f","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02e085ab-34b6-4a44-a5f0-db5478a0434f","type":"BoxSelectTool"},{"id":"5c4d0bcf-1713-426f-8284-5db6172fd3fb","type":"HoverTool"},{"id":"ae074000-850f-4f73-8533-cdf1055ed31d","type":"ResetTool"}]},"id":"e211b77c-d870-4d33-a808-dea984fe2a6b","type":"Toolbar"},{"attributes":{"plot":{"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2050cae1-6b31-40c0-b784-7082cfea0109","type":"BasicTicker"}},"id":"06022033-47d9-4677-a91e-788f86e60171","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc3ae922-de53-4f02-931b-21a320d432f4","type":"Circle"},{"attributes":{},"id":"2050cae1-6b31-40c0-b784-7082cfea0109","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db285789-c180-4adb-b415-7bd3383852a4","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d61d4414-a619-441d-83ca-e9086e859042","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"0cdf11b1-ce69-44a4-a99e-79e1c391a081","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d8cb1c68-f893-4100-b0fa-f32203f1a2d3","type":"BoxSelectTool"},{"id":"7ce19c46-c9b1-47d2-b81d-d19799ef7d15","type":"HoverTool"},{"id":"d917d99e-366f-4a1d-838f-38aa63aea2ab","type":"ResetTool"}]},"id":"a2e7edc2-df1a-463d-a5d7-e2de75727f7d","type":"Toolbar"},{"attributes":{"formatter":{"id":"e0513267-f17f-4f5c-80b4-dc07f056a79e","type":"BasicTickFormatter"},"plot":{"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7aca6b8e-df8a-4295-a8a6-8c64a185d18d","type":"BasicTicker"}},"id":"fd949c45-a146-4f05-bc2f-efbb876961d2","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22f9eda6-3053-46dc-92f5-bbdd5db255c6","type":"Circle"},{"attributes":{},"id":"680dea12-d918-4a91-840c-b802a15bd68c","type":"LinearScale"},{"attributes":{},"id":"df233b76-8266-4029-9565-4024c36569ac","type":"BasicTickFormatter"},{"attributes":{},"id":"e0513267-f17f-4f5c-80b4-dc07f056a79e","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"24bb0ab9-c2c5-46bf-9166-0677d9f63258","type":"LinearAxis"}],"left":[{"id":"0d99bf1a-aaab-495d-a230-326af6356743","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"24bb0ab9-c2c5-46bf-9166-0677d9f63258","type":"LinearAxis"},{"id":"06022033-47d9-4677-a91e-788f86e60171","type":"Grid"},{"id":"0d99bf1a-aaab-495d-a230-326af6356743","type":"LinearAxis"},{"id":"197ddbd8-33e3-4496-abb8-543b4efad0c7","type":"Grid"},{"id":"97299372-5d6e-49f9-90b4-a2832d1f7254","type":"BoxAnnotation"},{"id":"b5bf4644-6aa4-4caa-9fce-89eb8252b728","type":"GlyphRenderer"}],"title":{"id":"5f1763ff-2f48-4c25-863c-68691a676432","type":"Title"},"toolbar":{"id":"a2e7edc2-df1a-463d-a5d7-e2de75727f7d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"feca0ce9-8402-485b-8472-300a3b74b3c1","type":"DataRange1d"},"x_scale":{"id":"aea8265d-b05f-496e-b6d6-f4fd557030c2","type":"LinearScale"},"y_range":{"id":"3fcd0d67-cdfe-4fe8-be0a-8c83faeecce1","type":"DataRange1d"},"y_scale":{"id":"bb9f0d64-45ef-4655-8e5d-2f91ccab1967","type":"LinearScale"}},"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b0b05558-2958-41ed-b967-427fd6fce52d","type":"DataRange1d"},{"attributes":{"children":[{"id":"fc650af1-8a06-4e82-ba5d-1ce2940c1caf","type":"ToolbarBox"},{"id":"70d55608-20b1-4901-a1b1-4cd8b735aa8a","type":"Column"}]},"id":"c5649258-ae11-40eb-b986-a19b8e9f90bf","type":"Column"},{"attributes":{},"id":"d917d99e-366f-4a1d-838f-38aa63aea2ab","type":"ResetTool"},{"attributes":{"data_source":{"id":"0cdf11b1-ce69-44a4-a99e-79e1c391a081","type":"ColumnDataSource"},"glyph":{"id":"db285789-c180-4adb-b415-7bd3383852a4","type":"Circle"},"hover_glyph":{"id":"d61d4414-a619-441d-83ca-e9086e859042","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"1421589c-7988-428b-987a-598ba2b41dd9","type":"Circle"},"selection_glyph":null,"view":{"id":"53ff7641-b27b-4a9d-9509-a9cdea06da15","type":"CDSView"}},"id":"362e6b7a-59bc-4507-b215-8b0783ea6ab4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1421589c-7988-428b-987a-598ba2b41dd9","type":"Circle"},{"attributes":{"plot":{"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7aca6b8e-df8a-4295-a8a6-8c64a185d18d","type":"BasicTicker"}},"id":"fe4a42b1-c3a6-4d84-bef4-8e0804fbd249","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"44ddede3-1a06-44de-9499-822e0084d38b","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"917ad237-f21c-4db6-8807-e6800e686207","type":"Title"},{"attributes":{"callback":null},"id":"5384d948-79fe-4cdb-854a-6b341e43147c","type":"DataRange1d"},{"attributes":{},"id":"ae074000-850f-4f73-8533-cdf1055ed31d","type":"ResetTool"},{"attributes":{"children":[{"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},{"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"}]},"id":"f9c22ac5-bf1d-4538-92d2-962e32e5cc46","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"97299372-5d6e-49f9-90b4-a2832d1f7254","type":"BoxAnnotation"},"renderers":[{"id":"b5bf4644-6aa4-4caa-9fce-89eb8252b728","type":"GlyphRenderer"}]},"id":"d8cb1c68-f893-4100-b0fa-f32203f1a2d3","type":"BoxSelectTool"},{"attributes":{"source":{"id":"0cdf11b1-ce69-44a4-a99e-79e1c391a081","type":"ColumnDataSource"}},"id":"87c30841-ccdb-4e61-9b05-ef2dca68d24a","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97299372-5d6e-49f9-90b4-a2832d1f7254","type":"BoxAnnotation"},{"attributes":{},"id":"362acc87-24b6-45a4-88b1-c4c08dd9fd4b","type":"BasicTickFormatter"},{"attributes":{},"id":"d7a8c5f9-24d5-4af2-a14e-8fa34fd7490d","type":"LinearScale"},{"attributes":{},"id":"aea8265d-b05f-496e-b6d6-f4fd557030c2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79e26de-bbe9-44aa-8353-174e115df646","type":"BasicTicker"}},"id":"80333395-2f05-4a0f-9d99-df4950630e84","type":"Grid"},{"attributes":{},"id":"c79e26de-bbe9-44aa-8353-174e115df646","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5c4d0bcf-1713-426f-8284-5db6172fd3fb","type":"HoverTool"},{"attributes":{"data_source":{"id":"0cdf11b1-ce69-44a4-a99e-79e1c391a081","type":"ColumnDataSource"},"glyph":{"id":"dc3ae922-de53-4f02-931b-21a320d432f4","type":"Circle"},"hover_glyph":{"id":"22f9eda6-3053-46dc-92f5-bbdd5db255c6","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"44ddede3-1a06-44de-9499-822e0084d38b","type":"Circle"},"selection_glyph":null,"view":{"id":"87c30841-ccdb-4e61-9b05-ef2dca68d24a","type":"CDSView"}},"id":"b5bf4644-6aa4-4caa-9fce-89eb8252b728","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"397dcafc-b76f-4b6f-8f4a-fa1d79ea4b9d","type":"BasicTickFormatter"},"plot":{"id":"52985a6d-404f-4182-804f-98313a049b2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79e26de-bbe9-44aa-8353-174e115df646","type":"BasicTicker"}},"id":"77ad2b74-c53e-41ff-9789-4da940bb52c3","type":"LinearAxis"},{"attributes":{"indices":[0,2,4]},"id":"b9949eec-9341-4395-8b44-a4b72f144c16","type":"IndexFilter"},{"attributes":{"callback":null},"id":"feca0ce9-8402-485b-8472-300a3b74b3c1","type":"DataRange1d"},{"attributes":{},"id":"7aca6b8e-df8a-4295-a8a6-8c64a185d18d","type":"BasicTicker"},{"attributes":{"filters":[{"id":"b9949eec-9341-4395-8b44-a4b72f144c16","type":"IndexFilter"}],"source":{"id":"0cdf11b1-ce69-44a4-a99e-79e1c391a081","type":"ColumnDataSource"}},"id":"53ff7641-b27b-4a9d-9509-a9cdea06da15","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"4f4d8e7e-26e0-4ff0-877e-e53bf5a3b8c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3eb92201-f546-4a57-b158-47e02a1f03f2","type":"BasicTicker"}},"id":"197ddbd8-33e3-4496-abb8-543b4efad0c7","type":"Grid"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"d8cb1c68-f893-4100-b0fa-f32203f1a2d3","type":"BoxSelectTool"},{"id":"7ce19c46-c9b1-47d2-b81d-d19799ef7d15","type":"HoverTool"},{"id":"d917d99e-366f-4a1d-838f-38aa63aea2ab","type":"ResetTool"},{"id":"02e085ab-34b6-4a44-a5f0-db5478a0434f","type":"BoxSelectTool"},{"id":"5c4d0bcf-1713-426f-8284-5db6172fd3fb","type":"HoverTool"},{"id":"ae074000-850f-4f73-8533-cdf1055ed31d","type":"ResetTool"}]},"id":"fc650af1-8a06-4e82-ba5d-1ce2940c1caf","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"7ce19c46-c9b1-47d2-b81d-d19799ef7d15","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6de4ea1f-cf95-4939-bc88-6ad58b2bf238","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3fcd0d67-cdfe-4fe8-be0a-8c83faeecce1","type":"DataRange1d"}],"root_ids":["c5649258-ae11-40eb-b986-a19b8e9f90bf"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b4cb82ef-dd9e-4e90-b2d5-e7dfe617b35f","elementid":"c595be92-7f0a-40be-8750-4b4a6d91409b","modelid":"c5649258-ae11-40eb-b986-a19b8e9f90bf"}];
                
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
