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
      };var element = document.getElementById("cb883159-d332-420e-8821-a98c5af00436");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb883159-d332-420e-8821-a98c5af00436' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e25dbe97-35d2-46db-83db-c96b5713c07d":{"roots":{"references":[{"attributes":{},"id":"316ceb54-22b0-4e49-a738-2d734436de12","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"018ab6a2-8f1c-4127-89e7-d331f33e6190","type":"ColumnDataSource"},"glyph":{"id":"b1e4506b-61a7-444a-a9d3-b18a8b0b3ea9","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26a04b7d-3b21-4952-b85d-7919aac60e04","type":"SquareX"},"selection_glyph":null,"view":{"id":"97987d61-5a02-4c8e-a56a-05b67d4a34b7","type":"CDSView"}},"id":"cbc3679b-70a9-4546-9316-ced6d61e00fc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26a04b7d-3b21-4952-b85d-7919aac60e04","type":"SquareX"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1e4506b-61a7-444a-a9d3-b18a8b0b3ea9","type":"SquareX"},{"attributes":{"plot":null,"text":""},"id":"e6840a7d-6a0a-415f-9cae-befb9bbb78e1","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0b76fc9-a446-4d1c-8f84-a6bfcf28bc74","type":"BoxAnnotation"},{"attributes":{},"id":"646afd29-3b37-42e9-828c-dcce0cc1c9ab","type":"PanTool"},{"attributes":{"source":{"id":"018ab6a2-8f1c-4127-89e7-d331f33e6190","type":"ColumnDataSource"}},"id":"97987d61-5a02-4c8e-a56a-05b67d4a34b7","type":"CDSView"},{"attributes":{},"id":"539df9d2-5ee2-4fa2-bcda-1b49bda70fcd","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e821f25b-6fcf-4f30-a8cb-70bc13087f56","type":"DataRange1d"},{"attributes":{"overlay":{"id":"a0b76fc9-a446-4d1c-8f84-a6bfcf28bc74","type":"BoxAnnotation"}},"id":"333bd5d3-6398-4c05-9558-2e4774c81f30","type":"BoxZoomTool"},{"attributes":{},"id":"b6f3aa4f-96c6-4add-9b80-0df0c972b759","type":"BasicTicker"},{"attributes":{},"id":"fbdae5a4-220d-443f-b28b-82c9c81b6eba","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"95e7fe86-97d4-41f9-9639-68a2a2d0e596","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee72f8e9-b77c-41e8-9414-d9da2ad8202e","type":"BasicTicker"}},"id":"836ea691-c7d0-432a-93c5-11f2b7fb99c1","type":"Grid"},{"attributes":{},"id":"5c2c709b-7852-4cfc-aa69-d02b9a57b95b","type":"ResetTool"},{"attributes":{"formatter":{"id":"db81c470-4633-4576-9533-e922d6cf0b0c","type":"BasicTickFormatter"},"plot":{"id":"95e7fe86-97d4-41f9-9639-68a2a2d0e596","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6f3aa4f-96c6-4add-9b80-0df0c972b759","type":"BasicTicker"}},"id":"8b1358c1-e63e-4a8b-aaad-95c067321be2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"646afd29-3b37-42e9-828c-dcce0cc1c9ab","type":"PanTool"},{"id":"539df9d2-5ee2-4fa2-bcda-1b49bda70fcd","type":"WheelZoomTool"},{"id":"333bd5d3-6398-4c05-9558-2e4774c81f30","type":"BoxZoomTool"},{"id":"fbdae5a4-220d-443f-b28b-82c9c81b6eba","type":"SaveTool"},{"id":"5c2c709b-7852-4cfc-aa69-d02b9a57b95b","type":"ResetTool"},{"id":"3f1986c8-1144-40be-9f17-6eabf998c6ed","type":"HelpTool"}]},"id":"3040cf43-a1fa-45f9-86d9-1c2652f13073","type":"Toolbar"},{"attributes":{},"id":"3f1986c8-1144-40be-9f17-6eabf998c6ed","type":"HelpTool"},{"attributes":{"callback":null},"id":"98281a43-558a-4c04-a128-0761b7bb4791","type":"DataRange1d"},{"attributes":{"below":[{"id":"8b1358c1-e63e-4a8b-aaad-95c067321be2","type":"LinearAxis"}],"left":[{"id":"89f817e0-4cf1-460c-b2c5-fa221c7ce64d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8b1358c1-e63e-4a8b-aaad-95c067321be2","type":"LinearAxis"},{"id":"313827ab-1b8a-498b-bcab-81dbc79a6608","type":"Grid"},{"id":"89f817e0-4cf1-460c-b2c5-fa221c7ce64d","type":"LinearAxis"},{"id":"836ea691-c7d0-432a-93c5-11f2b7fb99c1","type":"Grid"},{"id":"a0b76fc9-a446-4d1c-8f84-a6bfcf28bc74","type":"BoxAnnotation"},{"id":"cbc3679b-70a9-4546-9316-ced6d61e00fc","type":"GlyphRenderer"}],"title":{"id":"e6840a7d-6a0a-415f-9cae-befb9bbb78e1","type":"Title"},"toolbar":{"id":"3040cf43-a1fa-45f9-86d9-1c2652f13073","type":"Toolbar"},"x_range":{"id":"e821f25b-6fcf-4f30-a8cb-70bc13087f56","type":"DataRange1d"},"x_scale":{"id":"5ec50cf7-caad-49d8-884a-7a08a140f551","type":"LinearScale"},"y_range":{"id":"98281a43-558a-4c04-a128-0761b7bb4791","type":"DataRange1d"},"y_scale":{"id":"4f03471d-64cd-42b6-aa05-97779086e0d2","type":"LinearScale"}},"id":"95e7fe86-97d4-41f9-9639-68a2a2d0e596","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"db81c470-4633-4576-9533-e922d6cf0b0c","type":"BasicTickFormatter"},{"attributes":{},"id":"5ec50cf7-caad-49d8-884a-7a08a140f551","type":"LinearScale"},{"attributes":{},"id":"4f03471d-64cd-42b6-aa05-97779086e0d2","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"b9b8f02e-4ae3-4b8e-b171-b9e02f35cf77","type":"Selection"},"selection_policy":{"id":"316ceb54-22b0-4e49-a738-2d734436de12","type":"UnionRenderers"}},"id":"018ab6a2-8f1c-4127-89e7-d331f33e6190","type":"ColumnDataSource"},{"attributes":{},"id":"b9b8f02e-4ae3-4b8e-b171-b9e02f35cf77","type":"Selection"},{"attributes":{"plot":{"id":"95e7fe86-97d4-41f9-9639-68a2a2d0e596","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6f3aa4f-96c6-4add-9b80-0df0c972b759","type":"BasicTicker"}},"id":"313827ab-1b8a-498b-bcab-81dbc79a6608","type":"Grid"},{"attributes":{"formatter":{"id":"569d5381-965c-4735-8487-57893bfbcf22","type":"BasicTickFormatter"},"plot":{"id":"95e7fe86-97d4-41f9-9639-68a2a2d0e596","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee72f8e9-b77c-41e8-9414-d9da2ad8202e","type":"BasicTicker"}},"id":"89f817e0-4cf1-460c-b2c5-fa221c7ce64d","type":"LinearAxis"},{"attributes":{},"id":"569d5381-965c-4735-8487-57893bfbcf22","type":"BasicTickFormatter"},{"attributes":{},"id":"ee72f8e9-b77c-41e8-9414-d9da2ad8202e","type":"BasicTicker"}],"root_ids":["95e7fe86-97d4-41f9-9639-68a2a2d0e596"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e25dbe97-35d2-46db-83db-c96b5713c07d","roots":{"95e7fe86-97d4-41f9-9639-68a2a2d0e596":"cb883159-d332-420e-8821-a98c5af00436"}}];
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