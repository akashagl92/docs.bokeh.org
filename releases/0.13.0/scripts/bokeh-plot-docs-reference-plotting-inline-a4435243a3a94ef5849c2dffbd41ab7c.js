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
      };var element = document.getElementById("a407d981-fbd0-4330-a50e-7350501a5d01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a407d981-fbd0-4330-a50e-7350501a5d01' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"76734e61-11d5-4cfd-aa32-1336c719cf66":{"roots":{"references":[{"attributes":{},"id":"e11bd98c-8bdc-4d5a-9dee-fc07539ae13e","type":"Selection"},{"attributes":{"plot":{"id":"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97","subtype":"Figure","type":"Plot"},"ticker":{"id":"c887497f-c255-4c3b-84f4-1175581b81f5","type":"BasicTicker"}},"id":"fa8b9cb0-5b26-437d-a7e3-86603880ec06","type":"Grid"},{"attributes":{},"id":"65aa7596-ac92-47d1-aeb4-0114cfc833fa","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a0c38523-0fc7-44a6-9e1f-9a7e3373196a","type":"BasicTickFormatter"},"plot":{"id":"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97","subtype":"Figure","type":"Plot"},"ticker":{"id":"c887497f-c255-4c3b-84f4-1175581b81f5","type":"BasicTicker"}},"id":"2297492e-53fe-4e57-a37b-ae35ca162abc","type":"LinearAxis"},{"attributes":{},"id":"2d6bfc80-1ceb-4ee9-9597-6267f3fba797","type":"UnionRenderers"},{"attributes":{},"id":"c887497f-c255-4c3b-84f4-1175581b81f5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97","subtype":"Figure","type":"Plot"},"ticker":{"id":"a772bd0b-47c3-4a97-96ac-a7fd35ae3f09","type":"BasicTicker"}},"id":"132483d8-818d-46eb-af0c-b622799af286","type":"Grid"},{"attributes":{"data_source":{"id":"7b0370ed-d1ca-4c88-8940-b540c0aeaa50","type":"ColumnDataSource"},"glyph":{"id":"128d7e66-1dc0-46f4-b234-d1503337e903","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21aed5f8-bf40-40c4-8817-769017704f8b","type":"Line"},"selection_glyph":null,"view":{"id":"a8ec85ea-8d60-4632-bf2e-a068fa740080","type":"CDSView"}},"id":"9e866e8e-7c63-42bb-b0b1-c4f98f1878bc","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"e11bd98c-8bdc-4d5a-9dee-fc07539ae13e","type":"Selection"},"selection_policy":{"id":"2d6bfc80-1ceb-4ee9-9597-6267f3fba797","type":"UnionRenderers"}},"id":"7b0370ed-d1ca-4c88-8940-b540c0aeaa50","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"128d7e66-1dc0-46f4-b234-d1503337e903","type":"Line"},{"attributes":{"source":{"id":"7b0370ed-d1ca-4c88-8940-b540c0aeaa50","type":"ColumnDataSource"}},"id":"a8ec85ea-8d60-4632-bf2e-a068fa740080","type":"CDSView"},{"attributes":{},"id":"a0c38523-0fc7-44a6-9e1f-9a7e3373196a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5f95962e-a6c5-4426-b9b5-7e7f9bea457c","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"2297492e-53fe-4e57-a37b-ae35ca162abc","type":"LinearAxis"}],"left":[{"id":"21af455b-c0c7-4aae-81d2-11c6600ea519","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2297492e-53fe-4e57-a37b-ae35ca162abc","type":"LinearAxis"},{"id":"fa8b9cb0-5b26-437d-a7e3-86603880ec06","type":"Grid"},{"id":"21af455b-c0c7-4aae-81d2-11c6600ea519","type":"LinearAxis"},{"id":"132483d8-818d-46eb-af0c-b622799af286","type":"Grid"},{"id":"5f95962e-a6c5-4426-b9b5-7e7f9bea457c","type":"BoxAnnotation"},{"id":"9e866e8e-7c63-42bb-b0b1-c4f98f1878bc","type":"GlyphRenderer"}],"title":{"id":"e54d180d-7e89-49d2-9490-770975987217","type":"Title"},"toolbar":{"id":"2d153033-a8e0-47b4-9a62-34d655bab7af","type":"Toolbar"},"x_range":{"id":"55f5df12-6f2e-47d9-838c-5ce45ed6a381","type":"DataRange1d"},"x_scale":{"id":"362c96e6-70b2-43d3-9e67-f0b19c223a8f","type":"LinearScale"},"y_range":{"id":"0c025fad-4c9b-4032-afdc-bf9c2957a328","type":"DataRange1d"},"y_scale":{"id":"bfcc14a9-ceeb-4139-98ee-ddbcb92ea732","type":"LinearScale"}},"id":"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"efcfa919-33a1-4b45-92bc-51b3255247b1","type":"PanTool"},{"attributes":{"plot":null,"text":"line"},"id":"e54d180d-7e89-49d2-9490-770975987217","type":"Title"},{"attributes":{"callback":null},"id":"0c025fad-4c9b-4032-afdc-bf9c2957a328","type":"DataRange1d"},{"attributes":{"callback":null},"id":"55f5df12-6f2e-47d9-838c-5ce45ed6a381","type":"DataRange1d"},{"attributes":{},"id":"30c24ce8-9f4d-4953-bdcb-bc1bc1a63bdd","type":"WheelZoomTool"},{"attributes":{},"id":"a772bd0b-47c3-4a97-96ac-a7fd35ae3f09","type":"BasicTicker"},{"attributes":{"overlay":{"id":"5f95962e-a6c5-4426-b9b5-7e7f9bea457c","type":"BoxAnnotation"}},"id":"21b642c5-d20b-453d-a3fb-0996d84f275a","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"efcfa919-33a1-4b45-92bc-51b3255247b1","type":"PanTool"},{"id":"30c24ce8-9f4d-4953-bdcb-bc1bc1a63bdd","type":"WheelZoomTool"},{"id":"21b642c5-d20b-453d-a3fb-0996d84f275a","type":"BoxZoomTool"},{"id":"ceb201b7-d679-4178-87d3-f319c8f598a4","type":"SaveTool"},{"id":"a6f1ea2f-6159-472c-8dcc-fd43d4fdaea2","type":"ResetTool"},{"id":"bc3fb3ac-d8bd-4820-9c90-290552a33c73","type":"HelpTool"}]},"id":"2d153033-a8e0-47b4-9a62-34d655bab7af","type":"Toolbar"},{"attributes":{},"id":"ceb201b7-d679-4178-87d3-f319c8f598a4","type":"SaveTool"},{"attributes":{"formatter":{"id":"65aa7596-ac92-47d1-aeb4-0114cfc833fa","type":"BasicTickFormatter"},"plot":{"id":"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97","subtype":"Figure","type":"Plot"},"ticker":{"id":"a772bd0b-47c3-4a97-96ac-a7fd35ae3f09","type":"BasicTicker"}},"id":"21af455b-c0c7-4aae-81d2-11c6600ea519","type":"LinearAxis"},{"attributes":{},"id":"a6f1ea2f-6159-472c-8dcc-fd43d4fdaea2","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21aed5f8-bf40-40c4-8817-769017704f8b","type":"Line"},{"attributes":{},"id":"bc3fb3ac-d8bd-4820-9c90-290552a33c73","type":"HelpTool"},{"attributes":{},"id":"362c96e6-70b2-43d3-9e67-f0b19c223a8f","type":"LinearScale"},{"attributes":{},"id":"bfcc14a9-ceeb-4139-98ee-ddbcb92ea732","type":"LinearScale"}],"root_ids":["2e54d45e-3d6a-4d25-8eb8-8206cd86ac97"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"76734e61-11d5-4cfd-aa32-1336c719cf66","roots":{"2e54d45e-3d6a-4d25-8eb8-8206cd86ac97":"a407d981-fbd0-4330-a50e-7350501a5d01"}}];
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