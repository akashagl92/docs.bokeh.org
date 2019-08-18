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
      };var element = document.getElementById("864ed22d-6f98-44ad-9f84-b9d5891b1922");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '864ed22d-6f98-44ad-9f84-b9d5891b1922' but no matching script tag was found. ")
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
                    var docs_json = {"09b5632a-6401-4705-b8e5-073c775e5f87":{"roots":{"references":[{"attributes":{},"id":"5c13772b-5933-4446-bd4d-a190064ed694","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2d37ec82-387c-4f55-a2bc-e7819798cc6a","type":"BasicTickFormatter"},"plot":{"id":"b0d33974-058e-4a4c-87d9-91b041796da4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0025b3ba-2617-44ac-91f1-876263af31e9","type":"BasicTicker"}},"id":"9366bf9f-5dc4-42a9-ba95-5abf5027b76e","type":"LinearAxis"},{"attributes":{"below":[{"id":"24dbd201-5fee-4ace-a1cd-a6c67cd2eda8","type":"LinearAxis"}],"left":[{"id":"9366bf9f-5dc4-42a9-ba95-5abf5027b76e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"24dbd201-5fee-4ace-a1cd-a6c67cd2eda8","type":"LinearAxis"},{"id":"be228ff9-e822-485e-bc3d-0ab61974f8ef","type":"Grid"},{"id":"9366bf9f-5dc4-42a9-ba95-5abf5027b76e","type":"LinearAxis"},{"id":"fd6b1172-5eb8-4422-8c69-2db644cfea0a","type":"Grid"},{"id":"44f218b8-eb43-474f-b234-08a30095d841","type":"BoxAnnotation"},{"id":"010131d4-4220-45af-8e99-ca12f6d165b6","type":"GlyphRenderer"}],"title":{"id":"530400bd-6a6b-4f78-b6df-1023b71a1e93","type":"Title"},"toolbar":{"id":"2bead854-6e23-440a-93fa-81448b082c88","type":"Toolbar"},"x_range":{"id":"d7e57301-89ca-43cc-98a6-86f2a5624a5e","type":"DataRange1d"},"x_scale":{"id":"faf893f7-7c3e-4a35-aa45-44f24de33f16","type":"LinearScale"},"y_range":{"id":"3ab61a2f-c4b2-457f-bdb2-e20cfb41ff31","type":"DataRange1d"},"y_scale":{"id":"8b333e84-abe7-4143-839f-ef3b8309e334","type":"LinearScale"}},"id":"b0d33974-058e-4a4c-87d9-91b041796da4","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44f218b8-eb43-474f-b234-08a30095d841","type":"BoxAnnotation"},{"attributes":{},"id":"8b333e84-abe7-4143-839f-ef3b8309e334","type":"LinearScale"},{"attributes":{},"id":"0f3cfd0d-bfac-422b-9713-b5a184cd683e","type":"ResetTool"},{"attributes":{},"id":"dcfff6db-4490-495c-bd1c-06b1d60780fb","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d7e57301-89ca-43cc-98a6-86f2a5624a5e","type":"DataRange1d"},{"attributes":{},"id":"d034e6d8-5f62-4ae8-a7e8-e34d50ea63cb","type":"HelpTool"},{"attributes":{},"id":"8598a9c7-6060-43ad-a1c2-758901060454","type":"SaveTool"},{"attributes":{"source":{"id":"5086d07a-7130-4870-898e-b44237bc2acd","type":"ColumnDataSource"}},"id":"87537391-bedf-4a10-8c5d-a4e486d98dbf","type":"CDSView"},{"attributes":{},"id":"c42ba1bc-2e76-403d-bcb6-a3d7a6f67c60","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"b0d33974-058e-4a4c-87d9-91b041796da4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0025b3ba-2617-44ac-91f1-876263af31e9","type":"BasicTicker"}},"id":"fd6b1172-5eb8-4422-8c69-2db644cfea0a","type":"Grid"},{"attributes":{"plot":{"id":"b0d33974-058e-4a4c-87d9-91b041796da4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ec2ea9-8394-4ebe-8da6-e5524b26c6f6","type":"BasicTicker"}},"id":"be228ff9-e822-485e-bc3d-0ab61974f8ef","type":"Grid"},{"attributes":{"data_source":{"id":"5086d07a-7130-4870-898e-b44237bc2acd","type":"ColumnDataSource"},"glyph":{"id":"11b1200d-4695-4022-9e1e-218280d7bfda","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c33547f9-8668-4215-94fd-78d3cb938a87","type":"HBar"},"selection_glyph":null,"view":{"id":"87537391-bedf-4a10-8c5d-a4e486d98dbf","type":"CDSView"}},"id":"010131d4-4220-45af-8e99-ca12f6d165b6","type":"GlyphRenderer"},{"attributes":{},"id":"2d37ec82-387c-4f55-a2bc-e7819798cc6a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5c13772b-5933-4446-bd4d-a190064ed694","type":"BasicTickFormatter"},"plot":{"id":"b0d33974-058e-4a4c-87d9-91b041796da4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ec2ea9-8394-4ebe-8da6-e5524b26c6f6","type":"BasicTicker"}},"id":"24dbd201-5fee-4ace-a1cd-a6c67cd2eda8","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c42ba1bc-2e76-403d-bcb6-a3d7a6f67c60","type":"PanTool"},{"id":"dcfff6db-4490-495c-bd1c-06b1d60780fb","type":"WheelZoomTool"},{"id":"3e84c377-48ca-47e8-beb0-2b58cb84a80e","type":"BoxZoomTool"},{"id":"8598a9c7-6060-43ad-a1c2-758901060454","type":"SaveTool"},{"id":"0f3cfd0d-bfac-422b-9713-b5a184cd683e","type":"ResetTool"},{"id":"d034e6d8-5f62-4ae8-a7e8-e34d50ea63cb","type":"HelpTool"}]},"id":"2bead854-6e23-440a-93fa-81448b082c88","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"11b1200d-4695-4022-9e1e-218280d7bfda","type":"HBar"},{"attributes":{},"id":"faf893f7-7c3e-4a35-aa45-44f24de33f16","type":"LinearScale"},{"attributes":{"overlay":{"id":"44f218b8-eb43-474f-b234-08a30095d841","type":"BoxAnnotation"}},"id":"3e84c377-48ca-47e8-beb0-2b58cb84a80e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"c33547f9-8668-4215-94fd-78d3cb938a87","type":"HBar"},{"attributes":{},"id":"0025b3ba-2617-44ac-91f1-876263af31e9","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"5086d07a-7130-4870-898e-b44237bc2acd","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"530400bd-6a6b-4f78-b6df-1023b71a1e93","type":"Title"},{"attributes":{},"id":"a4ec2ea9-8394-4ebe-8da6-e5524b26c6f6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3ab61a2f-c4b2-457f-bdb2-e20cfb41ff31","type":"DataRange1d"}],"root_ids":["b0d33974-058e-4a4c-87d9-91b041796da4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"09b5632a-6401-4705-b8e5-073c775e5f87","elementid":"864ed22d-6f98-44ad-9f84-b9d5891b1922","modelid":"b0d33974-058e-4a4c-87d9-91b041796da4"}];
                
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
