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
      };var element = document.getElementById("8d5ba59d-c165-4d1a-a807-1f959acc3a91");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d5ba59d-c165-4d1a-a807-1f959acc3a91' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f32efbb9-085c-4331-93f3-9e877883cd15":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"485b4112-3de0-4643-84db-1deaddab8993","type":"PanTool"},{"id":"fe5ff0cd-d48f-4698-a8e4-598254d07405","type":"WheelZoomTool"},{"id":"c360bc43-0eb5-4b2e-bf64-777acee96ecf","type":"BoxZoomTool"},{"id":"2b782d0d-d527-47b3-b2b9-8a15bd918e63","type":"SaveTool"},{"id":"c7745e4c-d67c-42b7-aaf8-00d6a32ac952","type":"ResetTool"},{"id":"0fbbc4dc-24a2-4fdf-b454-e508691dfaa0","type":"HelpTool"}]},"id":"72b14690-7843-4052-aa85-ca0cb4968ceb","type":"Toolbar"},{"attributes":{"callback":null},"id":"c04f748c-260b-4dca-8d39-1dcb8c658610","type":"DataRange1d"},{"attributes":{},"id":"fe5ff0cd-d48f-4698-a8e4-598254d07405","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"109e208c-e7d2-44d0-bf64-b5c64cae1b63","type":"BoxAnnotation"}},"id":"c360bc43-0eb5-4b2e-bf64-777acee96ecf","type":"BoxZoomTool"},{"attributes":{},"id":"fe172f23-524f-4238-8ab7-1b9a34a6f828","type":"Selection"},{"attributes":{"formatter":{"id":"330ea865-765f-4860-a0df-9cb2bd73e7fc","type":"BasicTickFormatter"},"plot":{"id":"96d84f36-5ad9-45e4-a4d1-7f2681a5820d","subtype":"Figure","type":"Plot"},"ticker":{"id":"624b222f-f17e-40aa-a489-97371be3db5a","type":"BasicTicker"}},"id":"0a4fb348-d43f-49be-8841-f099321490b6","type":"LinearAxis"},{"attributes":{},"id":"2b782d0d-d527-47b3-b2b9-8a15bd918e63","type":"SaveTool"},{"attributes":{"callback":null},"id":"032425bb-9667-46dd-a96f-09810008e4eb","type":"DataRange1d"},{"attributes":{},"id":"c7745e4c-d67c-42b7-aaf8-00d6a32ac952","type":"ResetTool"},{"attributes":{},"id":"a34a7e5b-f820-489d-ad7c-bcfa65212478","type":"BasicTicker"},{"attributes":{},"id":"0fbbc4dc-24a2-4fdf-b454-e508691dfaa0","type":"HelpTool"},{"attributes":{},"id":"505ed438-bc1b-4676-a908-e0b588663c42","type":"LinearScale"},{"attributes":{},"id":"f5928fc3-5c76-4d51-8c5e-3ab4d5297491","type":"LinearScale"},{"attributes":{"plot":{"id":"96d84f36-5ad9-45e4-a4d1-7f2681a5820d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a34a7e5b-f820-489d-ad7c-bcfa65212478","type":"BasicTicker"}},"id":"b9c5364b-1274-4b4e-81c8-c687141cba3c","type":"Grid"},{"attributes":{},"id":"01a51bc4-b4d7-45a3-b8a9-d874afe05f6e","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"73e89815-b97f-43b2-b8b9-04e3892f799a","type":"BasicTickFormatter"},"plot":{"id":"96d84f36-5ad9-45e4-a4d1-7f2681a5820d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a34a7e5b-f820-489d-ad7c-bcfa65212478","type":"BasicTicker"}},"id":"bbde36a7-f015-442b-9538-d4892d249444","type":"LinearAxis"},{"attributes":{},"id":"624b222f-f17e-40aa-a489-97371be3db5a","type":"BasicTicker"},{"attributes":{},"id":"73e89815-b97f-43b2-b8b9-04e3892f799a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"96d84f36-5ad9-45e4-a4d1-7f2681a5820d","subtype":"Figure","type":"Plot"},"ticker":{"id":"624b222f-f17e-40aa-a489-97371be3db5a","type":"BasicTicker"}},"id":"c3ae9da3-9cbd-43e1-b936-044740dfe304","type":"Grid"},{"attributes":{},"id":"330ea865-765f-4860-a0df-9cb2bd73e7fc","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e03684df-5708-426e-b508-64e27a2fcb37","type":"ColumnDataSource"}},"id":"2901bcc0-6823-4647-b4a6-53d887307e14","type":"CDSView"},{"attributes":{"data_source":{"id":"e03684df-5708-426e-b508-64e27a2fcb37","type":"ColumnDataSource"},"glyph":{"id":"80549154-3366-4b08-a15e-be95cee1c6c7","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4549daa1-fad6-4150-9f7b-776d23d8f437","type":"Rect"},"selection_glyph":null,"view":{"id":"2901bcc0-6823-4647-b4a6-53d887307e14","type":"CDSView"}},"id":"fb3760ee-4524-4e99-a04a-4323e7b69555","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4549daa1-fad6-4150-9f7b-776d23d8f437","type":"Rect"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"fe172f23-524f-4238-8ab7-1b9a34a6f828","type":"Selection"},"selection_policy":{"id":"01a51bc4-b4d7-45a3-b8a9-d874afe05f6e","type":"UnionRenderers"}},"id":"e03684df-5708-426e-b508-64e27a2fcb37","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8ae78c6f-35cb-418f-8765-78b4d7677d09","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"109e208c-e7d2-44d0-bf64-b5c64cae1b63","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"bbde36a7-f015-442b-9538-d4892d249444","type":"LinearAxis"}],"left":[{"id":"0a4fb348-d43f-49be-8841-f099321490b6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bbde36a7-f015-442b-9538-d4892d249444","type":"LinearAxis"},{"id":"b9c5364b-1274-4b4e-81c8-c687141cba3c","type":"Grid"},{"id":"0a4fb348-d43f-49be-8841-f099321490b6","type":"LinearAxis"},{"id":"c3ae9da3-9cbd-43e1-b936-044740dfe304","type":"Grid"},{"id":"109e208c-e7d2-44d0-bf64-b5c64cae1b63","type":"BoxAnnotation"},{"id":"fb3760ee-4524-4e99-a04a-4323e7b69555","type":"GlyphRenderer"}],"title":{"id":"8ae78c6f-35cb-418f-8765-78b4d7677d09","type":"Title"},"toolbar":{"id":"72b14690-7843-4052-aa85-ca0cb4968ceb","type":"Toolbar"},"x_range":{"id":"c04f748c-260b-4dca-8d39-1dcb8c658610","type":"DataRange1d"},"x_scale":{"id":"505ed438-bc1b-4676-a908-e0b588663c42","type":"LinearScale"},"y_range":{"id":"032425bb-9667-46dd-a96f-09810008e4eb","type":"DataRange1d"},"y_scale":{"id":"f5928fc3-5c76-4d51-8c5e-3ab4d5297491","type":"LinearScale"}},"id":"96d84f36-5ad9-45e4-a4d1-7f2681a5820d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"80549154-3366-4b08-a15e-be95cee1c6c7","type":"Rect"},{"attributes":{},"id":"485b4112-3de0-4643-84db-1deaddab8993","type":"PanTool"}],"root_ids":["96d84f36-5ad9-45e4-a4d1-7f2681a5820d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f32efbb9-085c-4331-93f3-9e877883cd15","roots":{"96d84f36-5ad9-45e4-a4d1-7f2681a5820d":"8d5ba59d-c165-4d1a-a807-1f959acc3a91"}}];
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