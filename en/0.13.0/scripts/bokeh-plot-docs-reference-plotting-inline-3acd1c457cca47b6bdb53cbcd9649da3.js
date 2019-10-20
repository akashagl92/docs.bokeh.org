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
      };var element = document.getElementById("0d179895-5bdb-4252-a1b5-9f6bf86fec32");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d179895-5bdb-4252-a1b5-9f6bf86fec32' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2da15af-bdbc-4ff8-aa0f-f378edeb2c4a":{"roots":{"references":[{"attributes":{},"id":"7917697e-d9e0-41de-8709-64e635e42585","type":"PanTool"},{"attributes":{},"id":"e0831c03-9787-423b-88cc-cb6f440c1200","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e2bccc2f-0515-41ff-bcc6-8d314139a7ec","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5015fa10-e677-47d1-8888-2465d85a7aeb","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"4d018da0-7c5c-47d4-a1c8-54ede285a01b","type":"Selection"},"selection_policy":{"id":"7eca1619-739c-4b4c-8d40-a84c252df66e","type":"UnionRenderers"}},"id":"b6efe156-cb18-4c79-9ebf-dd1c4e9842ab","type":"ColumnDataSource"},{"attributes":{},"id":"7eca1619-739c-4b4c-8d40-a84c252df66e","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"cbebec96-7b49-4807-b5d3-109c1f83048f","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"7f95961f-3edb-4bfe-9265-88d35fa5ad35","type":"Title"},{"attributes":{},"id":"e40d0c50-edac-42b5-ad16-11c99a50d7ff","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0a841d77-253d-4af6-885c-91a85b588d99","type":"Patches"},{"attributes":{},"id":"e2468297-2552-4135-814a-658352f9cd2d","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c4563e28-18d6-443c-8c45-a37a619458b7","type":"Patches"},{"attributes":{"plot":{"id":"7bd4cc5f-1227-49f7-8087-ca6e208c1bff","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fb8a0a1-66af-4b42-ad9a-5839c6d88765","type":"BasicTicker"}},"id":"9d4a9710-e35f-481a-acda-8a74278b1a32","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7bd4cc5f-1227-49f7-8087-ca6e208c1bff","subtype":"Figure","type":"Plot"},"ticker":{"id":"55d71972-7a6b-4631-97b2-e298d57eb879","type":"BasicTicker"}},"id":"8a167aaf-a596-42a0-a8c5-b46064343272","type":"Grid"},{"attributes":{"formatter":{"id":"39e29c06-1d38-4b08-9da6-2143bf16c72f","type":"BasicTickFormatter"},"plot":{"id":"7bd4cc5f-1227-49f7-8087-ca6e208c1bff","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fb8a0a1-66af-4b42-ad9a-5839c6d88765","type":"BasicTicker"}},"id":"98b2232c-36ee-4226-9ab3-df94d41af0d7","type":"LinearAxis"},{"attributes":{},"id":"8fb8a0a1-66af-4b42-ad9a-5839c6d88765","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e0831c03-9787-423b-88cc-cb6f440c1200","type":"BasicTickFormatter"},"plot":{"id":"7bd4cc5f-1227-49f7-8087-ca6e208c1bff","subtype":"Figure","type":"Plot"},"ticker":{"id":"55d71972-7a6b-4631-97b2-e298d57eb879","type":"BasicTicker"}},"id":"16480d4b-bfd4-4990-8c91-e4a723afa66b","type":"LinearAxis"},{"attributes":{},"id":"55d71972-7a6b-4631-97b2-e298d57eb879","type":"BasicTicker"},{"attributes":{},"id":"39e29c06-1d38-4b08-9da6-2143bf16c72f","type":"BasicTickFormatter"},{"attributes":{},"id":"9bb6723b-897e-450f-96f2-a37ea94a8358","type":"HelpTool"},{"attributes":{},"id":"7f0dfe03-0428-484c-b571-b83209bb9f29","type":"ResetTool"},{"attributes":{},"id":"05eb8710-41fb-4a4a-b118-0fb5511dd60b","type":"SaveTool"},{"attributes":{"data_source":{"id":"b6efe156-cb18-4c79-9ebf-dd1c4e9842ab","type":"ColumnDataSource"},"glyph":{"id":"0a841d77-253d-4af6-885c-91a85b588d99","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4563e28-18d6-443c-8c45-a37a619458b7","type":"Patches"},"selection_glyph":null,"view":{"id":"e4ab1312-155c-4c70-b14a-5e427af64f6e","type":"CDSView"}},"id":"59839929-a7c2-488d-a7ed-0be25d3907af","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"5015fa10-e677-47d1-8888-2465d85a7aeb","type":"BoxAnnotation"}},"id":"ec3619a6-b444-4874-80a4-ce8cf08f766e","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"98b2232c-36ee-4226-9ab3-df94d41af0d7","type":"LinearAxis"}],"left":[{"id":"16480d4b-bfd4-4990-8c91-e4a723afa66b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"98b2232c-36ee-4226-9ab3-df94d41af0d7","type":"LinearAxis"},{"id":"9d4a9710-e35f-481a-acda-8a74278b1a32","type":"Grid"},{"id":"16480d4b-bfd4-4990-8c91-e4a723afa66b","type":"LinearAxis"},{"id":"8a167aaf-a596-42a0-a8c5-b46064343272","type":"Grid"},{"id":"5015fa10-e677-47d1-8888-2465d85a7aeb","type":"BoxAnnotation"},{"id":"59839929-a7c2-488d-a7ed-0be25d3907af","type":"GlyphRenderer"}],"title":{"id":"7f95961f-3edb-4bfe-9265-88d35fa5ad35","type":"Title"},"toolbar":{"id":"7b6b004f-1f11-42f1-a2ab-48d963430c87","type":"Toolbar"},"x_range":{"id":"e2bccc2f-0515-41ff-bcc6-8d314139a7ec","type":"DataRange1d"},"x_scale":{"id":"e40d0c50-edac-42b5-ad16-11c99a50d7ff","type":"LinearScale"},"y_range":{"id":"cbebec96-7b49-4807-b5d3-109c1f83048f","type":"DataRange1d"},"y_scale":{"id":"e2468297-2552-4135-814a-658352f9cd2d","type":"LinearScale"}},"id":"7bd4cc5f-1227-49f7-8087-ca6e208c1bff","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43aa4440-aab4-499f-9b9a-6741355cb302","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7917697e-d9e0-41de-8709-64e635e42585","type":"PanTool"},{"id":"43aa4440-aab4-499f-9b9a-6741355cb302","type":"WheelZoomTool"},{"id":"ec3619a6-b444-4874-80a4-ce8cf08f766e","type":"BoxZoomTool"},{"id":"05eb8710-41fb-4a4a-b118-0fb5511dd60b","type":"SaveTool"},{"id":"7f0dfe03-0428-484c-b571-b83209bb9f29","type":"ResetTool"},{"id":"9bb6723b-897e-450f-96f2-a37ea94a8358","type":"HelpTool"}]},"id":"7b6b004f-1f11-42f1-a2ab-48d963430c87","type":"Toolbar"},{"attributes":{"source":{"id":"b6efe156-cb18-4c79-9ebf-dd1c4e9842ab","type":"ColumnDataSource"}},"id":"e4ab1312-155c-4c70-b14a-5e427af64f6e","type":"CDSView"},{"attributes":{},"id":"4d018da0-7c5c-47d4-a1c8-54ede285a01b","type":"Selection"}],"root_ids":["7bd4cc5f-1227-49f7-8087-ca6e208c1bff"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d2da15af-bdbc-4ff8-aa0f-f378edeb2c4a","roots":{"7bd4cc5f-1227-49f7-8087-ca6e208c1bff":"0d179895-5bdb-4252-a1b5-9f6bf86fec32"}}];
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