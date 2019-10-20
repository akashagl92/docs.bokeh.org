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
      };var element = document.getElementById("8895bbd4-9a7e-4632-a412-8eea39136901");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8895bbd4-9a7e-4632-a412-8eea39136901' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0785b79b-a81f-4c12-9f82-cee96c026a76":{"roots":{"references":[{"attributes":{"plot":{"id":"138b5083-1018-4f89-a0b7-598eb9726c61","subtype":"Figure","type":"Plot"},"ticker":{"id":"66a9e759-49d4-4a00-8c9e-79f361153ad7","type":"BasicTicker"}},"id":"37586f0c-894d-408e-b056-2d6173367719","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"138b5083-1018-4f89-a0b7-598eb9726c61","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd7d048b-4f69-40fd-982a-7917dcd2fb92","type":"BasicTicker"}},"id":"fdde1444-b462-47ae-a166-d0e41882545f","type":"Grid"},{"attributes":{"formatter":{"id":"202b4a0f-2515-4310-8fa6-db6b889b4c39","type":"BasicTickFormatter"},"plot":{"id":"138b5083-1018-4f89-a0b7-598eb9726c61","subtype":"Figure","type":"Plot"},"ticker":{"id":"66a9e759-49d4-4a00-8c9e-79f361153ad7","type":"BasicTicker"}},"id":"b2c5f0c5-bb1f-463f-b356-d68ed6256c95","type":"LinearAxis"},{"attributes":{},"id":"1a20bef1-59fa-47f7-bc90-3f45236896f5","type":"BasicTickFormatter"},{"attributes":{},"id":"149e00bc-1859-4228-903c-5b90ea0c82ef","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ea00445f-ac0f-42a1-a085-7dc18ebd2ed4","type":"PanTool"},{"id":"149e00bc-1859-4228-903c-5b90ea0c82ef","type":"WheelZoomTool"},{"id":"7bd99243-eb3d-42ee-bf91-cd60b3803a2e","type":"BoxZoomTool"},{"id":"09dad5c9-154a-4f31-bc43-e7733761f857","type":"SaveTool"},{"id":"34518d4b-e130-45ca-8c22-4c5cb4bd7bb4","type":"ResetTool"},{"id":"df5b4310-4be5-40d5-ab76-0df48d786f53","type":"HelpTool"}]},"id":"4891ef95-f5a5-49ed-b9cb-e1bc7d00142d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b00b9ceb-6cbc-4777-9522-59c53dda3f85","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"2c101389-bab6-4ead-99c7-6ccbd2dd92ba","type":"Selection"},"selection_policy":{"id":"60c798c0-6023-4c8d-ba65-048a9961f613","type":"UnionRenderers"}},"id":"75337fc7-f7a1-48a3-b9ed-170251023eed","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"75337fc7-f7a1-48a3-b9ed-170251023eed","type":"ColumnDataSource"},"glyph":{"id":"268b059b-2a1f-4cf9-92d5-c2d6b7eba1c5","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ff6a5ae-b1db-4a83-8dcf-be03a6c43c4b","type":"Patch"},"selection_glyph":null,"view":{"id":"8759869b-5f67-4c8e-955c-5f45bd8993b2","type":"CDSView"}},"id":"73a32d33-2f03-4787-a7fe-65f23b13a61c","type":"GlyphRenderer"},{"attributes":{},"id":"d5849379-ec50-46d4-83ee-31cedd955a15","type":"LinearScale"},{"attributes":{},"id":"09dad5c9-154a-4f31-bc43-e7733761f857","type":"SaveTool"},{"attributes":{},"id":"2c101389-bab6-4ead-99c7-6ccbd2dd92ba","type":"Selection"},{"attributes":{"callback":null},"id":"6ea3d0d4-e85a-4e7b-b1fd-f196d2658c40","type":"DataRange1d"},{"attributes":{"overlay":{"id":"b00b9ceb-6cbc-4777-9522-59c53dda3f85","type":"BoxAnnotation"}},"id":"7bd99243-eb3d-42ee-bf91-cd60b3803a2e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5ff6a5ae-b1db-4a83-8dcf-be03a6c43c4b","type":"Patch"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"268b059b-2a1f-4cf9-92d5-c2d6b7eba1c5","type":"Patch"},{"attributes":{},"id":"34518d4b-e130-45ca-8c22-4c5cb4bd7bb4","type":"ResetTool"},{"attributes":{},"id":"60c798c0-6023-4c8d-ba65-048a9961f613","type":"UnionRenderers"},{"attributes":{"below":[{"id":"b2c5f0c5-bb1f-463f-b356-d68ed6256c95","type":"LinearAxis"}],"left":[{"id":"a7aa610d-e20f-4626-93dd-a1cb47e01f1c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b2c5f0c5-bb1f-463f-b356-d68ed6256c95","type":"LinearAxis"},{"id":"37586f0c-894d-408e-b056-2d6173367719","type":"Grid"},{"id":"a7aa610d-e20f-4626-93dd-a1cb47e01f1c","type":"LinearAxis"},{"id":"fdde1444-b462-47ae-a166-d0e41882545f","type":"Grid"},{"id":"b00b9ceb-6cbc-4777-9522-59c53dda3f85","type":"BoxAnnotation"},{"id":"73a32d33-2f03-4787-a7fe-65f23b13a61c","type":"GlyphRenderer"}],"title":{"id":"1485eab3-512b-43ef-a93f-b7e9c955901d","type":"Title"},"toolbar":{"id":"4891ef95-f5a5-49ed-b9cb-e1bc7d00142d","type":"Toolbar"},"x_range":{"id":"6ea3d0d4-e85a-4e7b-b1fd-f196d2658c40","type":"DataRange1d"},"x_scale":{"id":"d5849379-ec50-46d4-83ee-31cedd955a15","type":"LinearScale"},"y_range":{"id":"e20c0dbc-e1b8-42aa-9a11-ff9346a609b9","type":"DataRange1d"},"y_scale":{"id":"0f5c7995-a891-4987-b2ad-611f2fe3be30","type":"LinearScale"}},"id":"138b5083-1018-4f89-a0b7-598eb9726c61","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"75337fc7-f7a1-48a3-b9ed-170251023eed","type":"ColumnDataSource"}},"id":"8759869b-5f67-4c8e-955c-5f45bd8993b2","type":"CDSView"},{"attributes":{"callback":null},"id":"e20c0dbc-e1b8-42aa-9a11-ff9346a609b9","type":"DataRange1d"},{"attributes":{},"id":"df5b4310-4be5-40d5-ab76-0df48d786f53","type":"HelpTool"},{"attributes":{},"id":"202b4a0f-2515-4310-8fa6-db6b889b4c39","type":"BasicTickFormatter"},{"attributes":{},"id":"0f5c7995-a891-4987-b2ad-611f2fe3be30","type":"LinearScale"},{"attributes":{},"id":"bd7d048b-4f69-40fd-982a-7917dcd2fb92","type":"BasicTicker"},{"attributes":{},"id":"ea00445f-ac0f-42a1-a085-7dc18ebd2ed4","type":"PanTool"},{"attributes":{},"id":"66a9e759-49d4-4a00-8c9e-79f361153ad7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1a20bef1-59fa-47f7-bc90-3f45236896f5","type":"BasicTickFormatter"},"plot":{"id":"138b5083-1018-4f89-a0b7-598eb9726c61","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd7d048b-4f69-40fd-982a-7917dcd2fb92","type":"BasicTicker"}},"id":"a7aa610d-e20f-4626-93dd-a1cb47e01f1c","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"1485eab3-512b-43ef-a93f-b7e9c955901d","type":"Title"}],"root_ids":["138b5083-1018-4f89-a0b7-598eb9726c61"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0785b79b-a81f-4c12-9f82-cee96c026a76","roots":{"138b5083-1018-4f89-a0b7-598eb9726c61":"8895bbd4-9a7e-4632-a412-8eea39136901"}}];
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